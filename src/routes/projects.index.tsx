import { createFileRoute } from "@tanstack/react-router";

import { ProjectsIndex } from "@/components/projects/ProjectsIndex";

import {
  hydrateSiteContent,
  portfolioQueryOptions,
} from "@/services/site";
import { pageHead } from "@/services/seo";

export const Route = createFileRoute("/projects/")({
  loader: async ({ context }) => {
    try {
      const data =
        await context.queryClient.ensureQueryData({
          ...portfolioQueryOptions,
          revalidateIfStale: true,
        });

      hydrateSiteContent(data);
    } catch {
      // Fall back to existing/cached content
    }
  },

  head: () =>
    pageHead({
      canonicalPath: "/projects",
      title: "Projects — Paras Kosambe",
      description:
        "Selected data science, analytics, AI/ML and full-stack projects by Paras Kosambe.",
      openGraphDescription:
        "Explore selected data-led projects and technical case studies.",
    }),

  component: ProjectsIndex,
});
