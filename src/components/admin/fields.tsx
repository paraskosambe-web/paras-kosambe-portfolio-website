import { useRef, useState, type KeyboardEvent } from "react";
import { ImagePlus, Loader2, X } from "lucide-react";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { uploadFile } from "@/lib/admin/storage";

export function TagInput({ id, value, onChange }: { id: string; value: string[]; onChange: (v: string[]) => void }) {
  const [draft, setDraft] = useState("");
  const add = () => {
    const v = draft.trim().slice(0, 200);
    if (v && !value.includes(v)) onChange([...value, v]);
    setDraft("");
  };
  const onKey = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" || e.key === ",") { e.preventDefault(); add(); }
    else if (e.key === "Backspace" && !draft && value.length) onChange(value.slice(0, -1));
  };
  return (
    <div className="admin-tags">
      {value.length ? <ul>{value.map((t, i) => (
        <li key={`${t}-${i}`}><span>{t}</span><button type="button" aria-label={`Remove ${t}`} onClick={() => onChange(value.filter((_, j) => j !== i))}><X /></button></li>
      ))}</ul> : null}
      <Input id={id} value={draft} placeholder="Type a tag, then press Enter" aria-describedby={`${id}-tag-help`} onChange={(e) => setDraft(e.target.value)} onKeyDown={onKey} onBlur={add} />
      <span id={`${id}-tag-help`} className="admin-hint">Press Enter or comma to add. Backspace removes the last tag.</span>
    </div>
  );
}

function useUpload(onDone: (url: string) => void) {
  const [busy, setBusy] = useState(false);
  const pick = async (files: FileList | null) => {
    const file = files?.[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) { toast.error("Choose an image file"); return; }
    if (file.size > 10 * 1024 * 1024) { toast.error("Image must be under 10 MB"); return; }
    setBusy(true);
    try { onDone((await uploadFile("portfolio-images", file)).url); }
    catch (e) { toast.error(e instanceof Error ? e.message : "Upload failed"); }
    finally { setBusy(false); }
  };
  return { busy, pick };
}

export function ImageField({ id, value, onChange, label = "Upload image" }: { id: string; value: string; onChange: (v: string) => void; label?: string }) {
  const ref = useRef<HTMLInputElement>(null);
  const { busy, pick } = useUpload(onChange);
  return (
    <div className="admin-image-field">
      <div className="admin-image-preview" aria-live="polite">{value ? <img src={value} alt={`${label} preview`} /> : <span>No image uploaded</span>}</div>
      <div className="flex flex-wrap gap-2">
        <input ref={ref} id={id} type="file" accept="image/*" aria-label={label} hidden onChange={(e) => { void pick(e.target.files); e.target.value = ""; }} />
        <Button type="button" variant="outline" disabled={busy} aria-busy={busy} onClick={() => ref.current?.click()}>{busy ? <Loader2 className="animate-spin" aria-hidden="true" /> : <ImagePlus aria-hidden="true" />}{busy ? "Uploading…" : value ? "Replace image" : label}</Button>
        {value ? <Button type="button" variant="ghost" aria-label={`Remove ${label.toLowerCase()}`} onClick={() => onChange("")}><X aria-hidden="true" /> Remove</Button> : null}
      </div>
    </div>
  );
}

export function ImagesField({ id, value, onChange }: { id: string; value: string[]; onChange: (v: string[]) => void }) {
  const ref = useRef<HTMLInputElement>(null);
  const { busy, pick } = useUpload((url) => onChange([...value, url]));
  return (
    <div className="admin-images-field">
      <div className="admin-thumbs">
        {value.map((url, i) => (
          <div key={`${url}-${i}`} className="admin-thumb"><img src={url} alt={`Screenshot ${i + 1} preview`} /><button type="button" aria-label={`Remove screenshot ${i + 1}`} onClick={() => onChange(value.filter((_, j) => j !== i))}><X aria-hidden="true" /></button></div>
        ))}
      </div>
      <input ref={ref} id={id} type="file" accept="image/*" aria-label="Upload screenshot image" hidden onChange={(e) => { void pick(e.target.files); e.target.value = ""; }} />
      <Button type="button" variant="outline" disabled={busy} aria-busy={busy} onClick={() => ref.current?.click()}>{busy ? <Loader2 className="animate-spin" aria-hidden="true" /> : <ImagePlus aria-hidden="true" />}{busy ? "Uploading…" : "Add screenshot"}</Button>
    </div>
  );
}
