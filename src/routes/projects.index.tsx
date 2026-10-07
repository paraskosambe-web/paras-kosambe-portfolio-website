import { createFileRoute } from "@tanstack/react-router";

import { ProjectsIndex } from "@/components/projects/ProjectsIndex";

import {
  hydrateSiteContent,
  portfolioQueryOptions,
} from "@/services/site";

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

  head: () => ({
    meta: [
      { title: "Projects — Paras Kosambe" },
      {
        name: "description",
        content:
          "Selected data science, analytics, AI/ML and full-stack projects by Paras Kosambe.",
      },
      {
        property: "og:title",
        content: "Projects — Paras Kosambe",
      },
      {
        property: "og:description",
        content:
          "Explore selected data-led projects and technical case studies.",
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
    ],
  }),

  component: ProjectsIndex,
});
