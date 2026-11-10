import { createFileRoute } from "@tanstack/react-router";
import { ResumePage } from "@/components/collections/ResumePage";
import { pageHead } from "@/services/seo";

export const Route = createFileRoute("/resume")({
  head: () =>
    pageHead({
      canonicalPath: "/resume",
      title: "Resume — Paras Kosambe",
      description: "View or download the resume of Paras Kosambe.",
      openGraphDescription:
        "Education, capabilities and selected work by Paras Kosambe.",
    }),
  component: ResumePage,
});
