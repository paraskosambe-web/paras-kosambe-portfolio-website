import { createFileRoute } from "@tanstack/react-router";
import { AboutPage } from "@/components/collections/AboutPage";
import { pageHead, profilePageStructuredData } from "@/services/seo";

export const Route = createFileRoute("/about")({
  head: () =>
    pageHead({
      canonicalPath: "/about",
      title: "About — Paras Kosambe",
      description:
        "Learn about Paras Kosambe, a final-year Computer Science student focused on data and software.",
      openGraphDescription: "Education, current focus and goals of Paras Kosambe.",
      jsonLd: profilePageStructuredData(),
    }),
  component: AboutPage,
});
