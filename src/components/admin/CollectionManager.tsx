import { useMemo, useState, type DragEvent } from "react";
import { useQuery } from "@tanstack/react-query";
import { Controller, useForm, type Resolver } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z, type ZodTypeAny } from "zod";
import { toast } from "sonner";
import { GripVertical, Pencil, Plus, Search, Trash2 } from "lucide-react";
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
  const v: Record<string, unknown> = { featured: false };
  for (const f of def.fields) v[f.name] = f.type === "tags" || f.type === "images" ? [] : f.type === "select" ? (f.options?.[0] ?? "") : "";
  return v;
}

export function CollectionManager({ def }: { def: CollectionDef }) {
  const refresh = useRefreshContent();
  const [search, setSearch] = useState("");
  const [editing, setEditing] = useState<Row | "new" | null>(null);
  const [deleting, setDeleting] = useState<Row | null>(null);
  const [dragId, setDragId] = useState<string | null>(null);
  const [localOrder, setLocalOrder] = useState<Row[] | null>(null);

  const { data, isLoading, error } = useQuery({
    queryKey: ["admin", def.table],
    queryFn: async () => {
      const { data: rows, error: e } = await table(def).select("*").order("sort_order", { ascending: true });
      if (e) throw e;
      return rows as unknown as Row[];
    },
  });

  const rows = localOrder ?? data ?? [];
  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return rows;
    return rows.filter((r) => def.searchFields.some((k) => String(r[k] ?? "").toLowerCase().includes(q)));
  }, [rows, search, def.searchFields]);

  async function toggleFeatured(row: Row, featured: boolean) {
    const { error: e } = await table(def).update({ featured } as never).eq("id", row.id);
    if (e) toast.error(e.message); else { toast.success(featured ? "Marked as featured" : "Removed from featured"); await refresh(); }
  }

  async function confirmDelete() {
    if (!deleting) return;
    const { error: e } = await table(def).delete().eq("id", deleting.id);
    if (e) toast.error(e.message); else { toast.success(`${def.singular} deleted`); await refresh(); }
    setDeleting(null);
  }

  function onDrop(e: DragEvent, target: Row) {
    e.preventDefault();
    if (!dragId || dragId === target.id) return;
    const list = [...rows];
    const from = list.findIndex((r) => r.id === dragId);
    const to = list.findIndex((r) => r.id === target.id);
    const [moved] = list.splice(from, 1);
    if (!moved) return;
    list.splice(to, 0, moved);
    setLocalOrder(list);
    setDragId(null);
    void (async () => {
      const results = await Promise.all(list.map((r, i) => table(def).update({ sort_order: i + 1 } as never).eq("id", r.id)));
      const failed = results.find((r) => r.error);
      if (failed?.error) toast.error(failed.error.message); else toast.success("Order saved");
      await refresh();
      setLocalOrder(null);
    })();
  }

  const canDrag = !search.trim();

  return (
    <section>
      <div className="admin-head">
        <div><span className="admin-eyebrow">Manage</span><h1>{def.label}</h1></div>
        <Button onClick={() => setEditing("new")}><Plus /> Add {def.singular.toLowerCase()}</Button>
      </div>
      <div className="admin-search"><Search /><Input aria-label={`Search ${def.label}`} placeholder={`Search ${def.label.toLowerCase()}`} value={search} onChange={(e) => setSearch(e.target.value)} /></div>
      {canDrag ? null : <p className="admin-note">Clear the search to reorder by dragging.</p>}
      <div className="admin-table-wrap">
        <table className="admin-table">
          <thead><tr><th aria-label="Reorder" /><th>Image</th>{def.columns.map((c) => <th key={c.name}>{c.label}</th>)}<th>Featured</th><th aria-label="Actions" /></tr></thead>
          <tbody>
            {isLoading ? <tr><td colSpan={def.columns.length + 4} className="admin-empty">Loading…</td></tr> : null}
            {error ? <tr><td colSpan={def.columns.length + 4} className="admin-empty admin-error">Could not load records.</td></tr> : null}
            {!isLoading && !error && filtered.length === 0 ? <tr><td colSpan={def.columns.length + 4} className="admin-empty">No records found.</td></tr> : null}
            {filtered.map((row) => (
              <tr key={row.id} draggable={canDrag} onDragStart={() => setDragId(row.id)} onDragOver={(e) => canDrag && e.preventDefault()} onDrop={(e) => onDrop(e, row)} className={dragId === row.id ? "is-dragging" : ""}>
                <td className="admin-grip">{canDrag ? <GripVertical aria-hidden /> : null}</td>
                <td>{row["image_url"] ? <img className="admin-row-thumb" src={String(row["image_url"])} alt="" /> : <span className="admin-row-thumb is-empty" />}</td>
                {def.columns.map((c) => <td key={c.name} className="admin-cell">{String(row[c.name] ?? "")}</td>)}
                <td><Switch checked={row.featured} aria-label="Featured" onCheckedChange={(v) => void toggleFeatured(row, v)} /></td>
                <td className="admin-actions">
                  <Button size="icon" variant="ghost" aria-label="Edit" onClick={() => setEditing(row)}><Pencil /></Button>
                  <Button size="icon" variant="ghost" aria-label="Delete" onClick={() => setDeleting(row)}><Trash2 /></Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Sheet open={editing !== null} onOpenChange={(o) => { if (!o) setEditing(null); }}>
        <SheetContent className="admin-drawer">
          <SheetHeader>
            <SheetTitle>{editing === "new" ? `Add ${def.singular.toLowerCase()}` : `Edit ${def.singular.toLowerCase()}`}</SheetTitle>
            <SheetDescription>Changes appear on the public site after saving.</SheetDescription>
          </SheetHeader>
          {editing !== null ? (
            <RecordForm key={editing === "new" ? "new" : editing.id} def={def} row={editing === "new" ? null : editing} nextOrder={(rows.at(-1)?.sort_order ?? 0) + 1}
              onDone={async () => { setEditing(null); await refresh(); }} />
          ) : null}
        </SheetContent>
      </Sheet>

      <AlertDialog open={deleting !== null} onOpenChange={(o) => { if (!o) setDeleting(null); }}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete this {def.singular.toLowerCase()}?</AlertDialogTitle>
            <AlertDialogDescription>“{String(deleting?.["title"] ?? "")}” will be removed from the site. This cannot be undone.</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter><AlertDialogCancel>Cancel</AlertDialogCancel><AlertDialogAction onClick={() => void confirmDelete()}>Delete</AlertDialogAction></AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </section>
  );
}

function RecordForm({ def, row, nextOrder, onDone }: { def: CollectionDef; row: Row | null; nextOrder: number; onDone: () => Promise<void> }) {
  const schema = useMemo(() => z.object({ featured: z.boolean(), ...Object.fromEntries(def.fields.map((f) => [f.name, fieldSchema(f)])) }), [def]);
  const defaults = useMemo(() => {
    const base = emptyValues(def);
    if (!row) return base;
    for (const k of Object.keys(base)) if (row[k] !== undefined && row[k] !== null) base[k] = row[k];
    return base;
  }, [def, row]);
  const form = useForm<Record<string, unknown>>({ resolver: zodResolver(schema) as unknown as Resolver<Record<string, unknown>>, defaultValues: defaults, mode: "onChange" });
  const [slugTouched, setSlugTouched] = useState(Boolean(row));
  const hasSlug = def.fields.some((f) => f.name === "slug");
  const errors = form.formState.errors;

  const submit = form.handleSubmit(async (values) => {
    const q = row
      ? table(def).update(values as never).eq("id", row.id)
      : table(def).insert({ ...values, sort_order: nextOrder } as never);
    const { error } = await q;
    if (error) { toast.error(error.code === "23505" ? "That slug is already used by another project" : error.message); return; }
    toast.success(row ? "Saved" : `${def.singular} added`);
    await onDone();
  });

  return (
    <form onSubmit={submit} className="admin-form" noValidate>
      {def.fields.map((f) => {
        const id = `f-${f.name}`;
        const err = errors[f.name]?.message as string | undefined;
        let input;
        if (f.type === "textarea") input = <Textarea id={id} rows={4} aria-invalid={!!err} {...form.register(f.name)} />;
        else if (f.type === "select") input = <select id={id} className="admin-select" {...form.register(f.name)}>{f.options?.map((o) => <option key={o} value={o}>{o}</option>)}</select>;
        else if (f.type === "tags") input = <Controller control={form.control} name={f.name} render={({ field }) => <TagInput id={id} value={field.value as string[]} onChange={field.onChange} />} />;
        else if (f.type === "image") input = <Controller control={form.control} name={f.name} render={({ field }) => <ImageField id={id} value={field.value as string} onChange={field.onChange} />} />;
        else if (f.type === "images") input = <Controller control={form.control} name={f.name} render={({ field }) => <ImagesField id={id} value={field.value as string[]} onChange={field.onChange} />} />;
        else {
          const reg = form.register(f.name);
          input = <Input id={id} type={f.type === "url" ? "url" : "text"} aria-invalid={!!err} {...reg} onChange={(e) => {
            void reg.onChange(e);
            if (f.name === "slug") setSlugTouched(true);
            if (f.name === "title" && hasSlug && !slugTouched) form.setValue("slug", slugify(e.target.value), { shouldValidate: true });
          }} />;
        }
        return (
          <div key={f.name} className="admin-field">
            <Label htmlFor={id}>{f.label}{f.required ? " *" : ""}</Label>
            {input}
            {f.hint ? <p className="admin-hint">{f.hint}</p> : null}
            {err ? <p className="admin-error" role="alert">{err}</p> : null}
          </div>
        );
      })}
      <div className="admin-field admin-switch-row">
        <Controller control={form.control} name="featured" render={({ field }) => <Switch id="f-featured" checked={field.value as boolean} onCheckedChange={field.onChange} />} />
        <Label htmlFor="f-featured">Featured (shown on the home page)</Label>
      </div>
      <div className="admin-form-actions">
        <Button type="submit" disabled={form.formState.isSubmitting}>{form.formState.isSubmitting ? "Saving…" : "Save"}</Button>
      </div>
    </form>
  );
}
