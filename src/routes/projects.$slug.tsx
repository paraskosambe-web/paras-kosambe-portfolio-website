import { createFileRoute, notFound } from "@tanstack/react-router";

import { ProjectDetail, ProjectNotFound } from "@/components/projects/ProjectDetail";
import { getProjectBySlug, hydrateSiteContent, portfolioQueryOptions } from "@/services/site";
import { pageHead } from "@/services/seo";

export const Route = createFileRoute("/projects/$slug")({
  loader: async ({ params, context }) => {
    try { hydrateSiteContent(await context.queryClient.ensureQueryData({ ...portfolioQueryOptions, revalidateIfStale: true })); } catch { /* fall back to cached content */ }
    const project = getProjectBySlug(params.slug);
    if (!project) throw notFound();
    return project;
  },
  head: ({ loaderData }) => {
    const title = loaderData ? `${loaderData.title} — Paras Kosambe` : "Project not found — Paras Kosambe";
    const description = loaderData?.description ?? "The requested project could not be found.";
    return pageHead({
      ...(loaderData
        ? { canonicalPath: `/projects/${encodeURIComponent(loaderData.slug)}` }
        : {}),
      title,
      description,
      type: "article",
      indexable: Boolean(loaderData),
    });
  },
  notFoundComponent: ProjectNotFound,
  component: ProjectRoute,
});

function ProjectRoute() {
  const project = Route.useLoaderData();
  return <ProjectDetail project={project} />;
}
