import { useState } from "react";
import { PageHeader } from "@/components/portfolio/PageHeader";
import { PortfolioCard } from "@/components/portfolio/PortfolioCard";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useSiteContent } from "@/services/site";
import type { ExperienceItem } from "@/types/site";

export function ExperiencePage() {
  const content = useSiteContent().experience;
  const [selected, setSelected] = useState<ExperienceItem | null>(null);
  return <main className="projects-page"><div className="projects-inner">
    <PageHeader eyebrow={content.eyebrow} title={content.title} intro={content.intro} />
    <div className="collection-grid experience-grid">
      {content.items.map((item, index) => <PortfolioCard key={item.id} item={item} visual={<div className="experience-card-visual" aria-hidden="true"><span /></div>} delay={index * 0.08} details={[item.role, item.dateRange, item.location]} onActivate={() => setSelected(item)} />)}
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
