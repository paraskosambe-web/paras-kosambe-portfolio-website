import { createFileRoute } from "@tanstack/react-router";
import { AchievementsPage } from "@/components/collections/AchievementsPage";
import { pageHead } from "@/services/seo";

export const Route = createFileRoute("/achievements")({
  head: () =>
    pageHead({
      canonicalPath: "/achievements",
      title: "Achievements — Paras Kosambe",
      description:
        "Selected verified milestones and achievements by Paras Kosambe.",
      openGraphDescription:
        "Explore selected milestones and achievements by Paras Kosambe.",
    }),
  component: AchievementsPage,
});
