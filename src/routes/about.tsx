import { createFileRoute } from "@tanstack/react-router";
import { AboutPage } from "@/components/collections/AboutPage";
import { pageHead, profilePageStructuredData } from "@/services/seo";

export const Route = createFileRoute("/about")({
  head: () =>
    pageHead({
      canonicalPath: "/about",
      title: "About — Paras Kosambe",
      description:
        "Learn about Paras Kosambe, a final-year B.Sc. Computer Science student at the University of Mumbai focused on data science, data analytics, AI/ML, machine learning, and full-stack development.",
      openGraphDescription:
        "Education and current work in data science, data analytics, AI/ML, machine learning, and full-stack development.",
      jsonLd: profilePageStructuredData(),
    }),
  component: AboutPage,
});
