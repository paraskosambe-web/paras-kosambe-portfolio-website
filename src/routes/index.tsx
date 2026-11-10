import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/home/Hero";
import { HomeOverviewSections } from "@/components/home/HomeOverviewSections";
import { pageHead, websiteStructuredData } from "@/services/seo";

export const Route = createFileRoute("/")({
  head: () => ({
    ...pageHead({
      canonicalPath: "/",
      title: "Paras Kosambe — Aspiring Data Scientist",
      description:
        "Portfolio of Paras Kosambe, an aspiring Data Scientist working across analytics, AI/ML, and full-stack development.",
      openGraphDescription:
        "Data-driven systems, intelligent applications, and scalable digital experiences.",
      jsonLd: websiteStructuredData(),
    }),
  }),
  component: Index,
});

// IMPORTANT: Replace this placeholder. See ./README.md for routing conventions.
function Index() {
  return (
    <main>
      <Hero />
      <HomeOverviewSections />
    </main>
  );
}
