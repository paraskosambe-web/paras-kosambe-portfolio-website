import { createFileRoute } from "@tanstack/react-router";
import { ExperiencePage } from "@/components/collections/ExperiencePage";
import { pageHead } from "@/services/seo";

export const Route = createFileRoute("/experience")({
  head: () =>
    pageHead({
      canonicalPath: "/experience",
      title: "Experience — Paras Kosambe",
      description: "Experience and practical work by Paras Kosambe.",
      openGraphDescription:
        "Explore experience and practical work by Paras Kosambe.",
    }),
  component: ExperiencePage,
});
