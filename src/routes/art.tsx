import { createFileRoute } from "@tanstack/react-router";
import { ArtPage } from "@/components/collections/ArtPage";

export const Route = createFileRoute("/art")({ head: () => ({ meta: [
  { title: "Art — Paras Kosambe" }, { name: "description", content: "Explore visual artwork and creative studies by Paras Kosambe." },
  { property: "og:title", content: "Art — Paras Kosambe" }, { property: "og:description", content: "A collection of visual artwork and creative studies." },
  { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
] }), component: ArtPage });