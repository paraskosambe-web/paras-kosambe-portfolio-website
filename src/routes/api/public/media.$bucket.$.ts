import { createFileRoute } from "@tanstack/react-router";
import { createClient } from "@supabase/supabase-js";

const BUCKETS = new Set(["portfolio-images", "resumes"]);

// Streams files from the private storage buckets (public read via storage policy).
export const Route = createFileRoute("/api/public/media/$bucket/$")({
  server: {
    handlers: {
      GET: async ({ params }) => {
        const bucket = params.bucket;
        const path = params._splat ?? "";
        if (!BUCKETS.has(bucket) || !path || path.includes("..")) return new Response("Not found", { status: 404 });
        const key = process.env["SUPABASE_PUBLISHABLE_KEY"]!;
        const db = createClient(process.env["SUPABASE_URL"]!, key, {
          auth: { persistSession: false, autoRefreshToken: false },
          global: { fetch: (input, init) => {
            const h = new Headers(init?.headers);
            if (key.startsWith("sb_") && h.get("Authorization") === `Bearer ${key}`) h.delete("Authorization");
            h.set("apikey", key);
            return fetch(input, { ...init, headers: h });
          } },
        });
        const { data, error } = await db.storage.from(bucket).download(path);
        if (error || !data) return new Response("Not found", { status: 404 });
        return new Response(data, {
          headers: {
            "content-type": data.type || "application/octet-stream",
            "cache-control": "public, max-age=300",
          },
        });
      },
    },
  },
});
