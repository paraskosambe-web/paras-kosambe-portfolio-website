import { useMemo, useState, type DragEvent } from "react";
import { useQuery } from "@tanstack/react-query";
import { Controller, useForm, type Resolver } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z, type ZodTypeAny } from "zod";
import { toast } from "sonner";
import {
  ArrowDown, ArrowUp, Check, GripVertical, Image as ImageIcon, LoaderCircle,
  Pencil, Plus, Search, Trash2, X,
} from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import type { CollectionDef, FieldDef } from "@/lib/admin/collections";
import { slugify } from "@/lib/admin/collections";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { ImageField, ImagesField, TagInput } from "./fields";
import { useRefreshContent } from "./useAdminSave";
import "./collection-manager.css";

type Row = Record<string, unknown> & { id: string; sort_order: number; featured: boolean };
const table = (def: CollectionDef) => supabase.from(def.table as "projects");
const urlOrPath = z.string().trim().max(500).refine((v) => v === "" || v.startsWith("/") || v.startsWith("#") || /^https?:\/\/\S+$/.test(v), "Enter a full URL (https://…) or a site path");

function fieldSchema(f: FieldDef): ZodTypeAny {
  if (f.type === "tags" || f.type === "images") return z.array(z.string().max(500)).max(50);
  if (f.type === "url" || f.type === "image") return urlOrPath;
  const base = z.string().trim().max(f.type === "textarea" ? 5000 : 200);
  if (f.name === "slug") return base.min(1, "Slug is required").regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Lowercase letters, numbers and hyphens only");
  return f.required ? base.min(1, `${f.label} is required`) : base;
}

function emptyValues(def: CollectionDef) {
  const values: Record<string, unknown> = { featured: false };
  for (const field of def.fields) values[field.name] = field.type === "tags" || field.type === "images" ? [] : field.type === "select" ? (field.options?.[0] ?? "") : "";
  return values;
}

export function CollectionManager({ def }: { def: CollectionDef }) {
  const refresh = useRefreshContent();
  const [search, setSearch] = useState("");
  const [editing, setEditing] = useState<Row | "new" | null>(null);
  const [deleting, setDeleting] = useState<Row | null>(null);
  const [busyId, setBusyId] = useState<string | null>(null);
  const [dragId, setDragId] = useState<string | null>(null);
  const [localOrder, setLocalOrder] = useState<Row[] | null>(null);
  const query = useQuery({
    queryKey: ["admin", def.table],
    queryFn: async () => {
      const { data, error } = await table(def).select("*").order("sort_order", { ascending: true });
      if (error) throw error;
      return data as unknown as Row[];
    },
  });
  const rows = useMemo(() => localOrder ?? query.data ?? [], [localOrder, query.data]);
  const filtered = useMemo(() => {
    const term = search.trim().toLowerCase();
    if (!term) return rows;
    return rows.filter((row) => def.searchFields.some((key) => String(row[key] ?? "").toLowerCase().includes(term)));
  }, [rows, search, def.searchFields]);

  async function toggleFeatured(row: Row, featured: boolean) {
    if (busyId) return;
    if (featured && !row.featured && rows.filter((item) => Boolean(item.featured)).length >= 3) {
      toast.error(`Only 3 ${def.label.toLowerCase()} can appear on the home page. Turn one off before featuring another.`);
      return;
    }
    setBusyId(row.id);
    try {
      const { error } = await table(def).update({ featured } as never).eq("id", row.id);
      if (error) toast.error(`Could not update visibility: ${error.message}`);
      else {
        toast.success(featured ? "Shown on the home page" : "Hidden from the home page");
        await refresh();
      }
    } catch (error) {
      toast.error(`Could not update visibility: ${error instanceof Error ? error.message : "Check your connection and try again."}`);
    } finally {
      setBusyId(null);
    }
  }

  async function confirmDelete() {
    if (!deleting) return;
    const row = deleting;
    setBusyId(row.id);
    try {
      const { error } = await table(def).delete().eq("id", row.id);
      if (error) toast.error(`Could not delete ${def.singular.toLowerCase()}: ${error.message}`);
      else {
        toast.success(`${def.singular} deleted`);
        await refresh();
        setDeleting(null);
      }
    } catch (error) {
      toast.error(`Could not delete ${def.singular.toLowerCase()}: ${error instanceof Error ? error.message : "Check your connection and try again."}`);
    } finally {
      setBusyId(null);
    }
  }

  async function saveOrder(list: Row[]) {
    setLocalOrder(list);
    try {
      const results = await Promise.all(list.map((row, index) => table(def).update({ sort_order: index + 1 } as never).eq("id", row.id)));
      const failed = results.find((result) => result.error);
      if (failed?.error) toast.error(`Could not save order: ${failed.error.message}`);
      else toast.success("Display order saved");
      await refresh();
    } catch (error) {
      toast.error(`Could not save order: ${error instanceof Error ? error.message : "Check your connection and try again."}`);
    } finally {
      setLocalOrder(null);
    }
  }

  function moveRow(row: Row, direction: -1 | 1) {
    const index = rows.findIndex((item) => item.id === row.id);
    const destination = index + direction;
    if (index < 0 || destination < 0 || destination >= rows.length) return;
    const next = [...rows];
    [next[index], next[destination]] = [next[destination], next[index]];
    void saveOrder(next);
  }

  function onDrop(event: DragEvent, target: Row) {
    event.preventDefault();
    if (!dragId || dragId === target.id) return;
    const next = [...rows];
    const from = next.findIndex((row) => row.id === dragId);
    const to = next.findIndex((row) => row.id === target.id);
    const [moved] = next.splice(from, 1);
    if (!moved) return;
    next.splice(to, 0, moved);
    setDragId(null);
    void saveOrder(next);
  }

  const canReorder = !search.trim() && !localOrder;
  const title = (row: Row) => String(row.title ?? row.name ?? "Untitled record");

  return (
    <section className="collection-manager">
      <header className="cm-heading">
        <div>
          <span className="cm-eyebrow">Portfolio content / {def.label}</span>
          <h1>{def.label}</h1>
          <p>Keep your public portfolio current. Changes publish after saving.</p>
        </div>
        <Button className="cm-add" onClick={() => setEditing("new")}><Plus aria-hidden="true" /> Add {def.singular.toLowerCase()}</Button>
      </header>

      <div className="cm-toolbar">
        <label className="cm-search">
          <Search aria-hidden="true" />
          <Input aria-label={`Search ${def.label}`} placeholder={`Search ${def.label.toLowerCase()}…`} value={search} onChange={(event) => setSearch(event.target.value)} />
          {search && <button type="button" aria-label="Clear search" onClick={() => setSearch("")}><X /></button>}
        </label>
        <div className="cm-results"><span>{filtered.length}</span> {filtered.length === 1 ? "record" : "records"}{search ? " found" : " total"}</div>
      </div>
      {query.data && !query.error && <div className="cm-featured-note" role="note">
        <span className="cm-featured-count">{rows.filter((row) => Boolean(row.featured)).length}<i>/3</i></span>
        <p><strong>Home page visibility</strong><span>Up to 3 {def.label.toLowerCase()} can be featured. Drag or move records to set their display order.</span></p>
      </div>}

      {query.isLoading ? (
        <div className="cm-state" role="status"><div className="cm-skeleton" /><div className="cm-skeleton" /><div className="cm-skeleton" /><span>Loading {def.label.toLowerCase()}…</span></div>
      ) : query.error ? (
        <div className="cm-state cm-state-error" role="alert">
          <strong>Records could not be loaded</strong><p>{query.error instanceof Error ? query.error.message : "Check your connection and try again."}</p>
          <Button variant="outline" onClick={() => void query.refetch()}>Try again</Button>
        </div>
      ) : filtered.length === 0 ? (
        <div className="cm-state cm-empty">
          <div className="cm-empty-mark"><Search aria-hidden="true" /></div>
          <strong>{search ? "No matching records" : `No ${def.label.toLowerCase()} yet`}</strong>
          <p>{search ? "Try a different title, category, or keyword." : `Add your first ${def.singular.toLowerCase()} to start building this section.`}</p>
          {search ? <Button variant="outline" onClick={() => setSearch("")}>Clear search</Button> : <Button onClick={() => setEditing("new")}><Plus aria-hidden="true" /> Add {def.singular.toLowerCase()}</Button>}
        </div>
      ) : (
        <div className="cm-list" aria-label={`${def.label} records`}>
          {filtered.map((row, index) => {
            const image = String(row.image_url ?? "");
            const meta = def.columns.filter((column) => column.name !== "title").map((column) => String(row[column.name] ?? "")).filter(Boolean);
            const summary = String(row.description ?? row.overview ?? "");
            const tags = (row.tags ?? row.technologies ?? row.skills) as unknown;
            const tagList = Array.isArray(tags) ? tags.filter((tag): tag is string => typeof tag === "string") : [];
            return (
              <article key={row.id} className={`cm-card ${dragId === row.id ? "is-dragging" : ""}`}
                draggable={canReorder} onDragStart={() => setDragId(row.id)} onDragEnd={() => setDragId(null)}
                onDragOver={(event) => canReorder && event.preventDefault()} onDrop={(event) => onDrop(event, row)}>
                <div className="cm-cover">
                  {image ? <img src={image} alt="" loading="lazy" /> : <div className="cm-no-image"><ImageIcon aria-hidden="true" /><span>No cover image</span></div>}
                </div>
                <div className="cm-card-content">
                  <div className="cm-card-title-line">
                    <div className="cm-card-heading">
                      <span className="cm-record-index">{String(index + 1).padStart(2, "0")}</span>
                      <h2>{title(row)}</h2>
                    </div>
                    {meta.length > 0 && <p className="cm-meta">{meta.join(" · ")}</p>}
                  </div>
                  {summary && <p className="cm-summary">{summary}</p>}
                  {tagList.length > 0 && <div className="cm-tag-preview">{tagList.slice(0, 4).map((tag) => <span key={tag}>{tag}</span>)}{tagList.length > 4 && <span>+{tagList.length - 4}</span>}</div>}
                  <div className="cm-card-bottom">
                    <div className="cm-visibility">
                      <Switch id={`visible-${row.id}`} checked={row.featured} disabled={busyId === row.id}
                        aria-label={`${row.featured ? "Hide" : "Show"} ${title(row)} ${row.featured ? "from" : "on"} the home page`}
                        onCheckedChange={(checked) => void toggleFeatured(row, checked)} />
                      <Label htmlFor={`visible-${row.id}`}>Home page</Label>
                      <span className={`cm-status ${row.featured ? "is-visible" : ""}`}>{row.featured ? "Featured · home page" : "Not featured"}</span>
                    </div>
                    <div className="cm-card-actions">
                      {canReorder && <div className="cm-order-actions" aria-label={`Reorder ${title(row)}`}>
                        <button type="button" aria-label={`Move ${title(row)} up`} disabled={index === 0 || Boolean(busyId)} onClick={() => moveRow(row, -1)}><ArrowUp /></button>
                        <button type="button" aria-label={`Move ${title(row)} down`} disabled={index === filtered.length - 1 || Boolean(busyId)} onClick={() => moveRow(row, 1)}><ArrowDown /></button>
                        <GripVertical className="cm-drag-handle" aria-hidden="true" />
                      </div>}
                      <Button variant="outline" size="sm" aria-label={`Edit ${title(row)}`} onClick={() => setEditing(row)}><Pencil aria-hidden="true" /> Edit</Button>
                      <Button variant="outline" size="sm" className="cm-delete-button" aria-label={`Delete ${title(row)}`} onClick={() => setDeleting(row)}><Trash2 aria-hidden="true" /> Delete</Button>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      )}

      <Sheet open={editing !== null} onOpenChange={(open) => { if (!open) setEditing(null); }}>
        <SheetContent className="cm-drawer">
          <SheetHeader className="cm-drawer-header">
            <span className="cm-eyebrow">{def.label} / {editing === "new" ? "New record" : "Edit record"}</span>
            <SheetTitle>{editing === "new" ? `Add ${def.singular.toLowerCase()}` : `Edit ${def.singular.toLowerCase()}`}</SheetTitle>
            <SheetDescription>Complete the fields below. Your changes appear on the public portfolio after saving.</SheetDescription>
          </SheetHeader>
          {editing !== null && <RecordForm key={editing === "new" ? "new" : editing.id} def={def} row={editing === "new" ? null : editing}
            featuredCount={rows.filter((row) => Boolean(row.featured)).length}
            nextOrder={(rows.at(-1)?.sort_order ?? 0) + 1} onDone={async () => { setEditing(null); await refresh(); }} />}
        </SheetContent>
      </Sheet>

      <AlertDialog open={deleting !== null} onOpenChange={(open) => { if (!open && !busyId) setDeleting(null); }}>
        <AlertDialogContent className="cm-confirm">
          <AlertDialogHeader>
            <AlertDialogTitle>Delete this {def.singular.toLowerCase()}?</AlertDialogTitle>
            <AlertDialogDescription>“{deleting ? title(deleting) : ""}” will be removed from the portfolio. This cannot be undone.</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={Boolean(busyId)}>Cancel</AlertDialogCancel>
            <AlertDialogAction disabled={Boolean(busyId)} onClick={(event) => { event.preventDefault(); void confirmDelete(); }}>
              {busyId === deleting?.id ? <LoaderCircle className="animate-spin" aria-hidden="true" /> : <Trash2 aria-hidden="true" />}
              {busyId === deleting?.id ? "Deleting…" : "Delete record"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </section>
  );
}

function RecordForm({ def, row, nextOrder, featuredCount, onDone }: { def: CollectionDef; row: Row | null; nextOrder: number; featuredCount: number; onDone: () => Promise<void> }) {
  const schema = useMemo(() => z.object({ featured: z.boolean(), ...Object.fromEntries(def.fields.map((field) => [field.name, fieldSchema(field)])) }), [def]);
  const defaults = useMemo(() => {
    const values = emptyValues(def);
    if (row) for (const key of Object.keys(values)) if (row[key] !== undefined && row[key] !== null) values[key] = row[key];
    return values;
  }, [def, row]);
  const form = useForm<Record<string, unknown>>({ resolver: zodResolver(schema) as unknown as Resolver<Record<string, unknown>>, defaultValues: defaults, mode: "onChange" });
  const [slugTouched, setSlugTouched] = useState(Boolean(row));
  const hasSlug = def.fields.some((field) => field.name === "slug");
  const errors = form.formState.errors;
  const submit = form.handleSubmit(async (values) => {
    if (values.featured && !row?.featured && featuredCount >= 3) {
      toast.error(`Only 3 ${def.label.toLowerCase()} can appear on the home page. Turn one off before featuring this record.`);
      return;
    }
    try {
      const request = row ? table(def).update(values as never).eq("id", row.id) : table(def).insert({ ...values, sort_order: nextOrder } as never);
      const { error } = await request;
      if (error) {
        toast.error(error.code === "23505" ? "That slug is already used by another project" : `Could not save: ${error.message}`);
        return;
      }
      toast.success(row ? `${def.singular} saved` : `${def.singular} added`);
      await onDone();
    } catch (error) {
      toast.error(`Could not save: ${error instanceof Error ? error.message : "Check your connection and try again."}`);
    }
  });

  return (
    <form onSubmit={submit} className="cm-form" noValidate>
      <div className="cm-form-scroll">
        {def.fields.map((field) => {
          const id = `f-${field.name}`;
          const error = errors[field.name]?.message as string | undefined;
          let control;
          if (field.type === "textarea") control = <Textarea id={id} rows={4} aria-invalid={Boolean(error)} aria-describedby={error ? `${id}-error` : field.hint ? `${id}-hint` : undefined} {...form.register(field.name)} />;
          else if (field.type === "select") control = <select id={id} className="cm-select" aria-invalid={Boolean(error)} {...form.register(field.name)}>{field.options?.map((option) => <option key={option} value={option}>{option}</option>)}</select>;
          else if (field.type === "tags") control = <Controller control={form.control} name={field.name} render={({ field: controlField }) => <TagInput id={id} value={controlField.value as string[]} onChange={controlField.onChange} />} />;
          else if (field.type === "image") control = <Controller control={form.control} name={field.name} render={({ field: controlField }) => <ImageField id={id} value={controlField.value as string} onChange={controlField.onChange} label={field.label} />} />;
          else if (field.type === "images") control = <Controller control={form.control} name={field.name} render={({ field: controlField }) => <ImagesField id={id} value={controlField.value as string[]} onChange={controlField.onChange} />} />;
          else {
            const registration = form.register(field.name);
            control = <Input id={id} type={field.type === "url" ? "url" : "text"} aria-invalid={Boolean(error)} aria-describedby={error ? `${id}-error` : field.hint ? `${id}-hint` : undefined} {...registration} onChange={(event) => {
              void registration.onChange(event);
              if (field.name === "slug") setSlugTouched(true);
              if (field.name === "title" && hasSlug && !slugTouched) form.setValue("slug", slugify(event.target.value), { shouldValidate: true });
            }} />;
          }
          return (
            <div key={field.name} className={`cm-field ${field.type === "textarea" ? "is-wide" : ""}`}>
              <Label htmlFor={id}>{field.label}{field.required ? <span aria-hidden="true"> *</span> : null}</Label>
              {control}
              {field.hint && <p className="cm-hint" id={`${id}-hint`}>{field.hint}</p>}
              {error && <p className="cm-field-error" id={`${id}-error`} role="alert">{error}</p>}
            </div>
          );
        })}
        <div className="cm-featured-field">
          <Controller control={form.control} name="featured" render={({ field }) => <Switch id="f-featured" checked={field.value as boolean} disabled={!row?.featured && featuredCount >= 3} onCheckedChange={field.onChange} />} />
          <div><Label htmlFor="f-featured">Show on home page</Label><p>{featuredCount}/3 featured. Turn one off before adding another to the home page preview.</p></div>
        </div>
      </div>
      <div className="cm-form-footer">
        <Button type="submit" disabled={form.formState.isSubmitting} className="cm-submit">
          {form.formState.isSubmitting ? <LoaderCircle className="animate-spin" aria-hidden="true" /> : <Check aria-hidden="true" />}
          {form.formState.isSubmitting ? "Saving…" : row ? "Save changes" : `Add ${def.singular.toLowerCase()}`}
        </Button>
      </div>
    </form>
  );
}
