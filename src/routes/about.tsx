import { createFileRoute } from "@tanstack/react-router";
import { AboutPage } from "@/components/collections/AboutPage";

export const Route = createFileRoute("/about")({ head: () => ({ meta: [
  { title: "About — Paras Kosambe" }, { name: "description", content: "Learn about Paras Kosambe, a final-year Computer Science student focused on data and software." },
  { property: "og:title", content: "About — Paras Kosambe" }, { property: "og:description", content: "Education, current focus and goals of Paras Kosambe." },
  { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
] }), component: AboutPage });