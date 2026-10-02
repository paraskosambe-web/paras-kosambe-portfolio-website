import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";
import type { Database } from "@/integrations/supabase/types";
import type { PortfolioData } from "./content.types";

/** Public read of every portfolio table through the anon role (RLS applies). */
export const fetchPortfolioData = createServerFn({ method: "GET" }).handler(async (): Promise<PortfolioData | null> => {
  const url = process.env["SUPABASE_URL"];
  const key = process.env["SUPABASE_PUBLISHABLE_KEY"];
  if (!url || !key) return null;
  const db = createClient<Database>(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
    global: {
      fetch: (input, init) => {
        const h = new Headers(init?.headers);
        if (key.startsWith("sb_") && h.get("Authorization") === `Bearer ${key}`) h.delete("Authorization");
        h.set("apikey", key);
        return fetch(input, { ...init, headers: h });
      },
    },
  });
  const order = { ascending: true } as const;
  const [projects, certifications, experiences, skills, achievements, artworks, resumes, site, socials] = await Promise.all([
    db.from("projects").select("*").order("sort_order", order),
    db.from("certifications").select("*").order("sort_order", order),
    db.from("experiences").select("*").order("sort_order", order),
    db.from("skills").select("*").order("sort_order", order),
    db.from("achievements").select("*").order("sort_order", order),
    db.from("artworks").select("*").order("sort_order", order),
    db.from("resumes").select("*").eq("is_active", true).limit(1),
    db.from("site_content").select("*").eq("key", "main").maybeSingle(),
    db.from("social_links").select("*").order("sort_order", order),
  ]);
  const failed = [projects, certifications, experiences, skills, achievements, artworks, resumes, site, socials].find((r) => r.error);
  if (failed?.error) {
    console.error("[portfolio] content read failed", failed.error.message);
    return null;
  }
  return {
    projects: projects.data ?? [],
    certifications: certifications.data ?? [],
    experiences: experiences.data ?? [],
    skills: skills.data ?? [],
    achievements: achievements.data ?? [],
    artworks: artworks.data ?? [],
    resume: resumes.data?.[0] ?? null,
    site: site.data ?? null,
    socials: socials.data ?? [],
  };
});
