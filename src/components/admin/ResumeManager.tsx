import { useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import { ExternalLink, FileUp, Loader2, Trash2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import type { Tables } from "@/integrations/supabase/types";
import { uploadFile, removeFile } from "@/lib/admin/storage";
import { Button } from "@/components/ui/button";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { useRefreshContent } from "./useAdminSave";

type Resume = Tables<"resumes">;

export function ResumeManager() {
  const refresh = useRefreshContent();
  const ref = useRef<HTMLInputElement>(null);
  const [busy, setBusy] = useState(false);
  const [deleting, setDeleting] = useState<Resume | null>(null);
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["admin", "resumes"],
    queryFn: async () => {
      const { data: rows, error } = await supabase.from("resumes").select("*").order("created_at", { ascending: false });
      if (error) throw error;
      return rows;
    },
  });
  const done = async () => { await refetch(); await refresh(); };
  const label = () => new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" });

  async function activate(id: string) {
    const { error: e1 } = await supabase.from("resumes").update({ is_active: false }).eq("is_active", true);
    const { error: e2 } = e1 ? { error: e1 } : await supabase.from("resumes").update({ is_active: true, updated_label: label() }).eq("id", id);
    if (e2) toast.error(e2.message); else { toast.success("Active resume updated"); await done(); }
  }

  async function upload(files: FileList | null) {
    const file = files?.[0];
    if (!file) return;
    if (file.type !== "application/pdf") { toast.error("Choose a PDF file"); return; }
    if (file.size > 20 * 1024 * 1024) { toast.error("PDF must be under 20 MB"); return; }
    setBusy(true);
    try {
      const { path, url } = await uploadFile("resumes", file, "resumes");
      const { data: row, error } = await supabase.from("resumes").insert({ title: file.name.replace(/\.pdf$/i, "").slice(0, 120), file_url: url, file_path: path, updated_label: label(), is_active: false }).select("id").single();
      if (error) throw error;
      await activate(row.id);
    } catch (e) { toast.error(e instanceof Error ? e.message : "Upload failed"); }
    finally { setBusy(false); }
  }

  async function remove() {
    if (!deleting) return;
    const r = deleting;
    setDeleting(null);
    const { error } = await supabase.from("resumes").delete().eq("id", r.id);
    if (error) { toast.error(error.message); return; }
    await removeFile("resumes", r.file_url);
    toast.success("Resume deleted");
    await done();
  }

  return (
    <section>
      <div className="admin-head"><div><span className="admin-eyebrow">Manage</span><h1>Resume</h1></div>
        <input ref={ref} type="file" accept="application/pdf" hidden onChange={(e) => { void upload(e.target.files); e.target.value = ""; }} />
        <Button type="button" disabled={busy} onClick={() => ref.current?.click()}>{busy ? <Loader2 className="animate-spin" /> : <FileUp />}Upload PDF</Button>
      </div>
      {isLoading ? <p className="text-muted-foreground">Loading…</p> : !data?.length ? <p className="text-muted-foreground">No resumes yet.</p> : null}
      <div className="grid gap-3">
        {data?.map((r) => (
          <div key={r.id} className={`flex flex-wrap items-center justify-between gap-3 border p-4 ${r.is_active ? "border-muted-foreground" : "border-border"}`}>
            <div><strong>{r.title}</strong><p className="font-mono text-xs uppercase text-muted-foreground">{r.is_active ? "Active · " : ""}{r.updated_label}</p></div>
            <div className="flex flex-wrap gap-2">
              <Button asChild size="sm" variant="outline"><a href={r.file_url} target="_blank" rel="noreferrer"><ExternalLink />View</a></Button>
              {!r.is_active ? <Button size="sm" variant="outline" onClick={() => activate(r.id)}>Set active</Button> : null}
              <Button size="sm" variant="ghost" onClick={() => setDeleting(r)}><Trash2 />Delete</Button>
            </div>
          </div>
        ))}
      </div>
      <AlertDialog open={!!deleting} onOpenChange={(o) => !o && setDeleting(null)}>
        <AlertDialogContent>
          <AlertDialogHeader><AlertDialogTitle>Delete “{deleting?.title}”?</AlertDialogTitle><AlertDialogDescription>The PDF file will be removed permanently.</AlertDialogDescription></AlertDialogHeader>
          <AlertDialogFooter><AlertDialogCancel>Cancel</AlertDialogCancel><AlertDialogAction onClick={remove}>Delete</AlertDialogAction></AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </section>
  );
}
