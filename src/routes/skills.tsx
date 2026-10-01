import { createFileRoute } from "@tanstack/react-router";
import { SkillsPage } from "@/components/collections/SkillsPage";

export const Route = createFileRoute("/skills")({ head: () => ({ meta: [
  { title: "Skills — Paras Kosambe" }, { name: "description", content: "Explore Paras Kosambe's skills across data science, analytics, AI/ML and full-stack development." },
  { property: "og:title", content: "Skills — Paras Kosambe" }, { property: "og:description", content: "A practical toolkit spanning data, intelligence and software engineering." },
  { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
] }), component: SkillsPage });