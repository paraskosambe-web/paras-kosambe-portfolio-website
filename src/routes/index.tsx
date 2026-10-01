import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/home/Hero";
import { HomeOverviewSections } from "@/components/home/HomeOverviewSections";

// No head() here: the home route inherits title/description/og/twitter from
// __root.tsx, and ships no og:image so serve-time hosting can inject the
// project's social preview (explicit og:image or latest screenshot).
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Paras Kosambe — Aspiring Data Scientist" },
      { name: "description", content: "Portfolio of Paras Kosambe, an aspiring Data Scientist working across analytics, AI/ML, and full-stack development." },
      { property: "og:title", content: "Paras Kosambe — Aspiring Data Scientist" },
      { property: "og:description", content: "Data-driven systems, intelligent applications, and scalable digital experiences." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
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
