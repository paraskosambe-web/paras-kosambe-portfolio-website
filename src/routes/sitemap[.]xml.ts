import { createFileRoute } from "@tanstack/react-router";

import { fetchPublicPortfolioData } from "@/services/public-portfolio.server";
import { canonicalUrlForPath } from "@/services/seo";
import { getProjects } from "@/services/site";

const PUBLIC_PAGE_PATHS = [
  "/",
  "/about",
  "/achievements",
  "/art",
  "/certifications",
  "/contact",
  "/experience",
  "/projects",
  "/resume",
  "/skills",
] as const;

function createSitemap(projectSlugs: string[]): string {
  const projectPaths = projectSlugs
    .filter((slug) => slug.trim().length > 0)
    .map((slug) => `/projects/${encodeURIComponent(slug)}`);
  const urls = [...new Set([...PUBLIC_PAGE_PATHS, ...projectPaths])]
    .map((path) => `  <url><loc>${canonicalUrlForPath(path)}</loc></url>`)
    .join("\n");

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    urls,
    "</urlset>",
  ].join("\n");
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        let projectSlugs = getProjects().map((project) => project.slug);

        try {
          const portfolio = await fetchPublicPortfolioData();
          if (portfolio) projectSlugs = portfolio.projects.map((project) => project.slug);
        } catch {
          // Keep the mock project's public URLs available if managed content is offline.
        }

        return new Response(createSitemap(projectSlugs), {
          headers: {
            "Content-Type": "application/xml; charset=utf-8",
            "Cache-Control": "public, max-age=0, s-maxage=300, stale-while-revalidate=3600",
          },
        });
      },
    },
  },
});
