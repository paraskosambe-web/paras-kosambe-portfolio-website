import { createFileRoute } from "@tanstack/react-router";
import { AchievementsPage } from "@/components/collections/AchievementsPage";

export const Route = createFileRoute("/achievements")({ head: () => ({ meta: [
  { title: "Achievements — Paras Kosambe" }, { name: "description", content: "Selected verified milestones and achievements by Paras Kosambe." },
  { property: "og:title", content: "Achievements — Paras Kosambe" }, { property: "og:description", content: "Explore selected milestones and achievements by Paras Kosambe." },
  { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
] }), component: AchievementsPage });