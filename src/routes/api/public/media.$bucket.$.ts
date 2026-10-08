import { createFileRoute } from "@tanstack/react-router";
import { createClient } from "@supabase/supabase-js";

const BUCKETS = new Set(["portfolio-images", "resumes"]);

// Streams files from the private storage buckets (public read via storage policy).
export const Route = createFileRoute("/api/public/media/$bucket/$")({
  server: {
    handlers: {
      GET: async ({ params, request }) => {
        const bucket = params.bucket;
        const path = params._splat ?? "";
        if (!BUCKETS.has(bucket) || !path || path.includes("..")) return new Response("Not found", { status: 404 });
        const url = new URL(request.url);
        const widthParam = url.searchParams.get("width");
        const requestedWidth = widthParam ? Number(widthParam) : Number.NaN;
        const width = Number.isFinite(requestedWidth) ? Math.min(Math.max(Math.round(requestedWidth), 320), 1600) : undefined;
        const qualityParam = url.searchParams.get("quality");
        const requestedQuality = qualityParam ? Number(qualityParam) : 76;
        const quality = Number.isFinite(requestedQuality) ? Math.min(Math.max(Math.round(requestedQuality), 40), 90) : 76;
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
        const storage = db.storage.from(bucket);
        let result = width && bucket === "portfolio-images"
          ? await storage.download(path, { transform: { width, quality, resize: "contain" } })
          : await storage.download(path);
        // Keep existing uploads available when transformations are not enabled
        // for this project, without retrying on transient service/network errors.
        if (result.error && width && bucket === "portfolio-images" && (result.error.status === 400 || result.error.status === 501)) {
          result = await storage.download(path);
        }
        const { data, error } = result;
        if (error || !data) return new Response("Not found", { status: 404 });
        return new Response(data, {
          headers: {
            "content-type": data.type || "application/octet-stream",
            // Uploaded media uses unique paths, so immutable caching is safe and
            // avoids re-downloading certificates whenever the page is revisited.
            "cache-control": "public, max-age=31536000, immutable",
          },
        });
      },
    },
  },
});
