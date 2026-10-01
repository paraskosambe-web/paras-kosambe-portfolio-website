import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "@/components/collections/ContactPage";

export const Route = createFileRoute("/contact")({ head: () => ({ meta: [
  { title: "Contact — Paras Kosambe" }, { name: "description", content: "Contact Paras Kosambe about data, analytics, AI/ML or full-stack opportunities." },
  { property: "og:title", content: "Contact — Paras Kosambe" }, { property: "og:description", content: "Start a conversation with Paras Kosambe." },
  { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
] }), component: ContactPage });