import { createFileRoute } from "@tanstack/react-router";
import { CertificationsPage } from "@/components/collections/CertificationsPage";
import { pageHead } from "@/services/seo";

export const Route = createFileRoute("/certifications")({
  head: () =>
    pageHead({
      canonicalPath: "/certifications",
      title: "Certifications — Paras Kosambe",
      description: "Technical certifications and credentials by Paras Kosambe.",
      openGraphDescription:
        "Explore technical certifications and credentials by Paras Kosambe.",
    }),
  component: CertificationsPage,
});
