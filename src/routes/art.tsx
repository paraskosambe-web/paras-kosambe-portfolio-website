import { createFileRoute } from "@tanstack/react-router";
import { ArtPage } from "@/components/collections/ArtPage";
import { pageHead } from "@/services/seo";

export const Route = createFileRoute("/art")({
  head: () =>
    pageHead({
      canonicalPath: "/art",
      title: "Art — Paras Kosambe",
      description: "Explore visual artwork and creative studies by Paras Kosambe.",
      openGraphDescription: "A collection of visual artwork and creative studies.",
    }),
  component: ArtPage,
});
