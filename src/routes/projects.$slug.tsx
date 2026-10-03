import { createFileRoute, notFound } from "@tanstack/react-router";

import { ProjectDetail, ProjectNotFound } from "@/components/projects/ProjectDetail";
import { getProjectBySlug, hydrateSiteContent, portfolioQueryOptions } from "@/services/site";

export const Route = createFileRoute("/projects/$slug")({
  loader: async ({ params, context }) => {
    try { hydrateSiteContent(await context.queryClient.ensureQueryData(portfolioQueryOptions)); } catch { /* fall back to cached content */ }
    const project = getProjectBySlug(params.slug);
    if (!project) throw notFound();
    return project;
  },
  head: ({ loaderData }) => {
    const title = loaderData ? `${loaderData.title} — Paras Kosambe` : "Project not found — Paras Kosambe";
    const description = loaderData?.description ?? "The requested project could not be found.";
    return { meta: [
      { title }, { name: "description", content: description },
      { property: "og:title", content: title }, { property: "og:description", content: description },
      { property: "og:type", content: "article" }, { name: "twitter:card", content: "summary_large_image" },
    ] };
  },
  notFoundComponent: ProjectNotFound,
  component: ProjectRoute,
});

function ProjectRoute() {
  const project = Route.useLoaderData();
  return <ProjectDetail project={project} />;
}