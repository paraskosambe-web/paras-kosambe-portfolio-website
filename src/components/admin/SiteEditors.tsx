import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import { z } from "zod";
import { Loader2, Plus, Trash2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import type { Tables } from "@/integrations/supabase/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { ImageField, TagInput } from "./fields";
import { useRefreshContent } from "./useAdminSave";

type Site = Tables<"site_content">;
type FieldKind = "text" | "textarea" | "list" | "image";
interface F { name: keyof Site; label: string; kind: FieldKind; hint?: string }

const Head = ({ title, eyebrow = "Manage" }: { title: string; eyebrow?: string }) => (
  <div className="admin-head"><div><span className="admin-eyebrow">{eyebrow}</span><h1>{title}</h1></div></div>
);

function useSite() {
  return useQuery({
    queryKey: ["admin", "site_content"],
    queryFn: async () => {
      const { data, error } = await supabase.from("site_content").select("*").eq("key", "main").maybeSingle();
      if (error) throw error;
      return data;
    },
  });
}

const urlCheck = (v: string) => v === "" || /^https?:\/\/\S+$/.test(v) || v.startsWith("/");

function SiteForm({ title, fields }: { title: string; fields: F[] }) {
  const { data, isLoading, error } = useSite();
  const refresh = useRefreshContent();
  const [values, setValues] = useState<Record<string, unknown>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!data) return;
    const v: Record<string, unknown> = {};
    for (const f of fields) v[f.name] = data[f.name] ?? (f.kind === "list" ? [] : "");
    setValues(v);
  }, [data, fields]);

  const set = (k: string, v: unknown) => setValues((s) => ({ ...s, [k]: v }));

  async function save() {
    const errs: Record<string, string> = {};
    const out: Record<string, unknown> = {};
    for (const f of fields) {
      const v = values[f.name];
      if (f.kind === "list") { out[f.name] = (v as string[]).map((x) => x.trim()).filter(Boolean).slice(0, 30); continue; }
      const s = String(v ?? "").trim();
      if (s.length > (f.kind === "textarea" ? 5000 : 500)) errs[f.name] = "Too long";
      if (f.name === "contact_email" && s && !z.string().email().safeParse(s).success) errs[f.name] = "Enter a valid email";
      if (f.name === "whatsapp_number" && s && !/^\d{8,15}$/.test(s)) errs[f.name] = "Digits only with country code, no +";
      if ((f.name === "art_portfolio_url" || f.kind === "image") && !urlCheck(s)) errs[f.name] = "Enter a full URL (https://…)";
      out[f.name] = s;
    }
    setErrors(errs);
    if (Object.keys(errs).length || !data) return;
    setSaving(true);
    const { error: e } = await supabase.from("site_content").update(out).eq("id", data.id);
    setSaving(false);
    if (e) { toast.error(e.message); return; }
    toast.success("Saved — live on the site");
    await refresh();
  }

  if (isLoading) return <section><Head title={title} /><p className="text-muted-foreground">Loading…</p></section>;
  if (error || !data) return <section><Head title={title} /><p className="admin-error">Content could not be loaded.</p></section>;

  return (
    <section>
      <Head title={title} />
      <form className="grid max-w-3xl gap-5" onSubmit={(e) => { e.preventDefault(); void save(); }} noValidate>
        {fields.map((f) => {
          const id = `site-${String(f.name)}`;
          const v = values[f.name];
          return (
            <div key={String(f.name)} className="admin-field">
              <Label htmlFor={id}>{f.label}</Label>
              {f.kind === "textarea" ? <Textarea id={id} rows={4} value={String(v ?? "")} aria-invalid={!!errors[f.name]} onChange={(e) => set(f.name, e.target.value)} />
                : f.kind === "list" ? <TagInput id={id} value={(v as string[]) ?? []} onChange={(x) => set(f.name, x)} />
                : f.kind === "image" ? <ImageField id={id} value={String(v ?? "")} onChange={(x) => set(f.name, x)} label="Upload photo" />
                : <Input id={id} value={String(v ?? "")} aria-invalid={!!errors[f.name]} onChange={(e) => set(f.name, e.target.value)} />}
              {f.hint ? <p className="text-xs text-muted-foreground">{f.hint}</p> : null}
              {errors[f.name] ? <p className="admin-error">{errors[f.name]}</p> : null}
            </div>
          );
        })}
        <div><Button type="submit" disabled={saving}>{saving ? <Loader2 className="animate-spin" /> : null}Save changes</Button></div>
      </form>
    </section>
  );
}

const aboutFields: F[] = [
  { name: "about_image_url", label: "Portrait photo", kind: "image" },
  { name: "about_image_alt", label: "Portrait description", kind: "text" },
  { name: "about_intro", label: "Intro", kind: "textarea" },
  { name: "about_bio", label: "Biography paragraphs", kind: "list", hint: "Each entry is one paragraph." },
  { name: "education_degree", label: "Degree", kind: "text" },
  { name: "education_institution", label: "Institution", kind: "text" },
  { name: "education_status", label: "Status", kind: "text" },
  { name: "currently", label: "Currently", kind: "list" },
  { name: "looking_for", label: "What I'm looking for", kind: "textarea" },
];
const settingsFields: F[] = [
  { name: "hero_eyebrow", label: "Hero eyebrow", kind: "text" },
  { name: "hero_first_name", label: "Title — first line", kind: "text" },
  { name: "hero_last_name", label: "Title — second line", kind: "text" },
  { name: "hero_role", label: "Subtitle (role)", kind: "text" },
  { name: "hero_disciplines", label: "Disciplines", kind: "text" },
  { name: "hero_description", label: "Description", kind: "textarea" },
  { name: "contact_email", label: "Contact email", kind: "text" },
  { name: "whatsapp_number", label: "WhatsApp number", kind: "text", hint: "Digits with country code, e.g. 919137935311" },
  { name: "art_portfolio_url", label: "Instagram / art portfolio link", kind: "text" },
];

export const AboutEditor = () => <SiteForm title="About" fields={aboutFields} />;
export const SettingsEditor = () => <SiteForm title="Settings" fields={settingsFields} />;

type Social = Tables<"social_links">;

export function SocialLinksEditor() {
  const refresh = useRefreshContent();
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["admin", "social_links"],
    queryFn: async () => {
      const { data: rows, error } = await supabase.from("social_links").select("*").order("sort_order");
      if (error) throw error;
      return rows;
    },
  });
  const [rows, setRows] = useState<Social[]>([]);
  const [deleting, setDeleting] = useState<Social | null>(null);
  const [saving, setSaving] = useState(false);
  useEffect(() => { if (data) setRows(data); }, [data]);

  const upd = (id: string, k: keyof Social, v: string) => setRows((r) => r.map((x) => (x.id === id ? { ...x, [k]: v } : x)));

  async function saveAll() {
    for (const r of rows) {
      if (!r.platform.trim() || !r.label.trim()) { toast.error("Platform and label are required"); return; }
      if (!urlCheck(r.url.trim()) && !r.url.startsWith("mailto:")) { toast.error(`Invalid URL for ${r.label}`); return; }
    }
    setSaving(true);
    const results = await Promise.all(rows.map((r, i) => supabase.from("social_links").update({ platform: r.platform.trim().slice(0, 50), label: r.label.trim().slice(0, 80), url: r.url.trim().slice(0, 500), sort_order: i }).eq("id", r.id)));
    setSaving(false);
    const err = results.find((x) => x.error)?.error;
    if (err) { toast.error(err.message); return; }
    toast.success("Social links saved");
    await refresh();
  }
  async function add() {
    const { error } = await supabase.from("social_links").insert({ platform: "other", label: "New link", url: "", sort_order: rows.length });
    if (error) toast.error(error.message); else { await refetch(); await refresh(); }
  }
  async function remove() {
    if (!deleting) return;
    const { error } = await supabase.from("social_links").delete().eq("id", deleting.id);
    setDeleting(null);
    if (error) toast.error(error.message); else { toast.success("Link deleted"); await refetch(); await refresh(); }
  }

  return (
    <section>
      <Head title="Social Links" />
      {isLoading ? <p className="text-muted-foreground">Loading…</p> : null}
      <div className="grid max-w-4xl gap-3">
        {rows.map((r) => (
          <div key={r.id} className="grid gap-2 border border-border p-3 sm:grid-cols-[140px_1fr_2fr_auto] sm:items-end">
            <div className="admin-field"><Label>Platform</Label><Input value={r.platform} onChange={(e) => upd(r.id, "platform", e.target.value)} /></div>
            <div className="admin-field"><Label>Label</Label><Input value={r.label} onChange={(e) => upd(r.id, "label", e.target.value)} /></div>
            <div className="admin-field"><Label>URL</Label><Input value={r.url} placeholder="https://…" onChange={(e) => upd(r.id, "url", e.target.value)} /></div>
            <Button type="button" variant="ghost" aria-label={`Delete ${r.label}`} onClick={() => setDeleting(r)}><Trash2 /></Button>
          </div>
        ))}
      </div>
      <div className="mt-5 flex flex-wrap gap-2">
        <Button type="button" variant="outline" onClick={add}><Plus />Add link</Button>
        <Button type="button" onClick={saveAll} disabled={saving}>{saving ? <Loader2 className="animate-spin" /> : null}Save links</Button>
      </div>
      <AlertDialog open={!!deleting} onOpenChange={(o) => !o && setDeleting(null)}>
        <AlertDialogContent>
          <AlertDialogHeader><AlertDialogTitle>Delete “{deleting?.label}”?</AlertDialogTitle><AlertDialogDescription>This removes the link from the public site.</AlertDialogDescription></AlertDialogHeader>
          <AlertDialogFooter><AlertDialogCancel>Cancel</AlertDialogCancel><AlertDialogAction onClick={remove}>Delete</AlertDialogAction></AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </section>
  );
}

export function MessagesManager() {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["admin", "contact_submissions"],
    queryFn: async () => {
      const { data: rows, error: e } = await supabase.from("contact_submissions").select("*").order("created_at", { ascending: false });
      if (e) throw e;
      return rows;
    },
  });
  const [q, setQ] = useState("");
  const [deleting, setDeleting] = useState<Tables<"contact_submissions"> | null>(null);
  const list = (data ?? []).filter((m) => `${m.name} ${m.email} ${m.interest} ${m.message}`.toLowerCase().includes(q.trim().toLowerCase()));

  async function toggleRead(m: Tables<"contact_submissions">) {
    const { error: e } = await supabase.from("contact_submissions").update({ is_read: !m.is_read }).eq("id", m.id);
    if (e) toast.error(e.message); else void refetch();
  }
  async function remove() {
    if (!deleting) return;
    const { error: e } = await supabase.from("contact_submissions").delete().eq("id", deleting.id);
    setDeleting(null);
    if (e) toast.error(e.message); else { toast.success("Message deleted"); void refetch(); }
  }

  return (
    <section>
      <Head title="Messages" eyebrow="Inbox" />
      <Input className="mb-5 max-w-md" placeholder="Search messages" value={q} onChange={(e) => setQ(e.target.value)} />
      {isLoading ? <p className="text-muted-foreground">Loading…</p> : error ? <p className="admin-error">Messages could not be loaded.</p> : !list.length ? <p className="text-muted-foreground">No messages yet.</p> : null}
      <div className="grid gap-3">
        {list.map((m) => (
          <article key={m.id} className={`border p-4 ${m.is_read ? "border-border opacity-70" : "border-muted-foreground"}`}>
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <div><strong>{m.name}</strong> <a className="text-muted-foreground underline" href={`mailto:${m.email}`}>{m.email}</a></div>
              <span className="font-mono text-xs uppercase text-muted-foreground">{m.interest} · {new Date(m.created_at).toLocaleString()}</span>
            </div>
            <p className="mt-3 whitespace-pre-wrap text-sm">{m.message}</p>
            <div className="mt-3 flex gap-2">
              <Button type="button" size="sm" variant="outline" onClick={() => toggleRead(m)}>{m.is_read ? "Mark unread" : "Mark read"}</Button>
              <Button type="button" size="sm" variant="ghost" onClick={() => setDeleting(m)}><Trash2 />Delete</Button>
            </div>
          </article>
        ))}
      </div>
      <AlertDialog open={!!deleting} onOpenChange={(o) => !o && setDeleting(null)}>
        <AlertDialogContent>
          <AlertDialogHeader><AlertDialogTitle>Delete this message?</AlertDialogTitle><AlertDialogDescription>This cannot be undone.</AlertDialogDescription></AlertDialogHeader>
          <AlertDialogFooter><AlertDialogCancel>Cancel</AlertDialogCancel><AlertDialogAction onClick={remove}>Delete</AlertDialogAction></AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </section>
  );
}
