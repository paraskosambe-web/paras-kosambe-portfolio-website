import { createFileRoute, notFound } from "@tanstack/react-router";
import { collections } from "@/lib/admin/collections";
import { CollectionManager } from "@/components/admin/CollectionManager";
import { ResumeManager } from "@/components/admin/ResumeManager";
import { AboutEditor, SettingsEditor, SocialLinksEditor } from "@/components/admin/SiteEditors";

const special = ["resume", "about", "social-links", "settings"];

export const Route = createFileRoute("/admin/$section")({
  beforeLoad: ({ params }) => {
    if (!special.includes(params.section) && !collections.some((c) => c.key === params.section)) throw notFound();
  },
  notFoundComponent: () => <p className="text-muted-foreground">Section not found.</p>,
  component: Section,
});

function Section() {
  const { section } = Route.useParams();
  if (section === "resume") return <ResumeManager />;
  if (section === "about") return <AboutEditor />;
  if (section === "social-links") return <SocialLinksEditor />;
  if (section === "settings") return <SettingsEditor />;
  const def = collections.find((c) => c.key === section)!;
  return <CollectionManager key={def.key} def={def} />;
}
