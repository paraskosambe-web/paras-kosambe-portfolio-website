import { useState } from "react";
import { PageHeader } from "@/components/portfolio/PageHeader";
import { PortfolioCard } from "@/components/portfolio/PortfolioCard";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
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
      {filteredItems.map((item, index) => <PortfolioCard key={item.id} item={item} visual={<div className="experience-card-visual" aria-hidden="true"><span /></div>} delay={index * 0.08} details={[item.role, item.dateRange, item.location]} onActivate={() => setSelected(item)} onActionClick={() => setSelected(item)} />)}
    </div>
    <Dialog open={selected !== null} onOpenChange={(open) => { if (!open) setSelected(null); }}>
      <DialogContent className="record-dialog">
        {selected ? <><DialogHeader><span>{selected.type} · {selected.dateRange}</span><DialogTitle>{selected.organization}</DialogTitle><DialogDescription>{selected.role} · {selected.location}</DialogDescription></DialogHeader>
          <section><h3>{content.dialogResponsibilitiesLabel}</h3><ul>{selected.responsibilities.map((item) => <li key={item}>{item}</li>)}</ul></section>
          <section><h3>{content.dialogTechnologiesLabel}</h3><div className="project-tech-list">{selected.technologies.map((item) => <span key={item}>{item}</span>)}</div></section></> : null}
      </DialogContent>
    </Dialog>
  </div></main>;
}
