import { supabase } from "@/integrations/supabase/client";

export type Bucket = "portfolio-images" | "resumes";

export const mediaUrl = (bucket: Bucket, path: string) => `/api/public/media/${bucket}/${path}`;

/** Uploads a file and returns its site-relative public URL plus storage path. */
export async function uploadFile(bucket: Bucket, file: File, folder = "uploads") {
  const ext = file.name.split(".").pop()?.toLowerCase().replace(/[^a-z0-9]/g, "") || "bin";
  const path = `${folder}/${crypto.randomUUID()}.${ext}`;
  const { error } = await supabase.storage.from(bucket).upload(path, file, { contentType: file.type, upsert: false });
  if (error) throw error;
  return { path, url: mediaUrl(bucket, path) };
}

export async function removeFile(bucket: Bucket, url: string) {
  const prefix = `/api/public/media/${bucket}/`;
  if (!url.startsWith(prefix)) return;
  await supabase.storage.from(bucket).remove([url.slice(prefix.length)]);
}
