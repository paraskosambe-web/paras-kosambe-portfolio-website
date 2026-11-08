import { useState } from "react";
import { PageHeader } from "@/components/portfolio/PageHeader";
import { PortfolioCard } from "@/components/portfolio/PortfolioCard";
import { ExperienceDetailDialog } from "@/components/collections/ExperienceDetailDialog";
import { Button } from "@/components/ui/button";
import { useSiteContent } from "@/services/site";
import type { ExperienceItem } from "@/types/site";

export function ExperiencePage() {
  const content = useSiteContent().experience;
  const [filter, setFilter] = useState("ALL");
  const [selected, setSelected] = useState<ExperienceItem | null>(null);
  const filters = ["ALL", ...new Set(content.items.map((item) => item.type.trim()).filter(Boolean))];
  const filteredItems = content.items.filter((item) => filter === "ALL" || item.type.trim() === filter);
  return <main className="projects-page"><div className="projects-inner">
    <PageHeader eyebrow={content.eyebrow} title={content.title} intro={content.intro} />
    {filters.length > 1 ? <div className="collection-controls certification-filters experience-filters" aria-label="Filter experience by type">
      {filters.map((category) => <Button key={category} variant="outline" aria-pressed={filter === category} onClick={() => setFilter(category)}>{category === "ALL" ? "All" : category}</Button>)}
    </div> : null}
    <div className="collection-grid experience-grid">
      {filteredItems.map((item, index) => <PortfolioCard key={item.id} item={item} visual={<div className="experience-card-visual" aria-hidden="true"><span /></div>} delay={index * 0.08} details={[item.role, item.dateRange, item.location]} secondaryActions={[
        ...(item.linkUrl ? [{ label: "Certificate", href: item.linkUrl }] : []),
        ...(item.githubUrl ? [{ label: "GitHub", href: item.githubUrl }] : []),
      ]} onActivate={() => setSelected(item)} onActionClick={() => setSelected(item)} />)}
    </div>
    <ExperienceDetailDialog selected={selected} onOpenChange={(open) => { if (!open) setSelected(null); }} responsibilitiesLabel={content.dialogResponsibilitiesLabel} technologiesLabel={content.dialogTechnologiesLabel} />
  </div></main>;
}
