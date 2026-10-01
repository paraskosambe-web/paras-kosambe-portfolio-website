import { createFileRoute } from "@tanstack/react-router";
import { ExperiencePage } from "@/components/collections/ExperiencePage";

export const Route = createFileRoute("/experience")({ head: () => ({ meta: [
  { title: "Experience — Paras Kosambe" }, { name: "description", content: "Experience and practical work by Paras Kosambe." },
  { property: "og:title", content: "Experience — Paras Kosambe" }, { property: "og:description", content: "Explore experience and practical work by Paras Kosambe." },
  { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
] }), component: ExperiencePage });