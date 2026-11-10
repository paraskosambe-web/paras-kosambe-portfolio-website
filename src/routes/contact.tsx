import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "@/components/collections/ContactPage";
import { pageHead } from "@/services/seo";

export const Route = createFileRoute("/contact")({
  head: () =>
    pageHead({
      canonicalPath: "/contact",
      title: "Contact — Paras Kosambe",
      description:
        "Contact Paras Kosambe about data, analytics, AI/ML or full-stack opportunities.",
      openGraphDescription: "Start a conversation with Paras Kosambe.",
    }),
  component: ContactPage,
});
