import { createFileRoute } from "@tanstack/react-router";
import { CertificationsPage } from "@/components/collections/CertificationsPage";

export const Route = createFileRoute("/certifications")({ head: () => ({ meta: [
  { title: "Certifications — Paras Kosambe" }, { name: "description", content: "Technical certifications and credentials by Paras Kosambe." },
  { property: "og:title", content: "Certifications — Paras Kosambe" }, { property: "og:description", content: "Explore technical certifications and credentials by Paras Kosambe." },
  { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
] }), component: CertificationsPage });