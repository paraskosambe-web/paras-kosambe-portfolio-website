import { createFileRoute } from "@tanstack/react-router";
import { SkillsPage } from "@/components/collections/SkillsPage";
import { pageHead } from "@/services/seo";

export const Route = createFileRoute("/skills")({
  head: () =>
    pageHead({
      canonicalPath: "/skills",
      title: "Skills — Paras Kosambe",
      description:
        "Explore Paras Kosambe's skills across data science, analytics, AI/ML and full-stack development.",
      openGraphDescription:
        "A practical toolkit spanning data, intelligence and software engineering.",
    }),
  component: SkillsPage,
});
