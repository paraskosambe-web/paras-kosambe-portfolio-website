import { createFileRoute } from "@tanstack/react-router";
import { ResumePage } from "@/components/collections/ResumePage";

export const Route = createFileRoute("/resume")({ head: () => ({ meta: [
  { title: "Resume — Paras Kosambe" }, { name: "description", content: "View or download the resume of Paras Kosambe." },
  { property: "og:title", content: "Resume — Paras Kosambe" }, { property: "og:description", content: "Education, capabilities and selected work by Paras Kosambe." },
  { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
] }), component: ResumePage });