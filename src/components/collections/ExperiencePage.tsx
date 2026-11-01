import { ExternalLink, Github } from "lucide-react";
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
  const facts = selected
    ? [
        { label: "Role", value: selected.role },
        { label: "Organization", value: selected.organization },
        { label: "Dates", value: selected.dateRange },
        { label: "Location", value: selected.location },
      ].filter((fact) => fact.value.trim())
    : [];
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
    <Dialog open={selected !== null} onOpenChange={(open) => { if (!open) setSelected(null); }}>
      <DialogContent className="record-dialog experience-detail-dialog" overlayClassName="experience-detail-overlay">
        {selected ? <>
          <DialogHeader className="experience-detail-header">
            <span className="experience-detail-type">{selected.type || "Experience"}</span>
            <DialogTitle>{selected.title}</DialogTitle>
            <DialogDescription>{selected.role || selected.organization}</DialogDescription>
          </DialogHeader>
          <div className="experience-detail-scroll">
            {facts.length > 0 ? <dl className="experience-detail-facts">
              {facts.map((fact) => <div key={fact.label}><dt>{fact.label}</dt><dd>{fact.value}</dd></div>)}
            </dl> : null}
            {selected.description ? <section className="experience-detail-section">
              <h3>Overview</h3>
              <p className="experience-detail-description">{selected.description}</p>
            </section> : null}
            {selected.linkUrl || selected.githubUrl ? <section className="experience-detail-section">
              <h3>Links</h3>
              <div className="experience-detail-links">
                {selected.linkUrl ? <a href={selected.linkUrl} target="_blank" rel="noreferrer">
                  <span className="experience-link-icon"><ExternalLink aria-hidden="true" /></span>
                  <span><strong>Certificate</strong><small>Open certificate</small></span>
                  <ExternalLink className="experience-link-arrow" aria-hidden="true" />
                </a> : null}
                {selected.githubUrl ? <a href={selected.githubUrl} target="_blank" rel="noreferrer">
                  <span className="experience-link-icon"><Github aria-hidden="true" /></span>
                  <span><strong>GitHub</strong><small>Open repository</small></span>
                  <ExternalLink className="experience-link-arrow" aria-hidden="true" />
                </a> : null}
              </div>
            </section> : null}
            {selected.responsibilities.length > 0 ? <section className="experience-detail-section">
              <h3>{content.dialogResponsibilitiesLabel}</h3>
              <ul className="experience-detail-responsibilities">{selected.responsibilities.map((item) => <li key={item}>{item}</li>)}</ul>
            </section> : null}
            {selected.technologies.length > 0 ? <section className="experience-detail-section">
              <h3>{content.dialogTechnologiesLabel}</h3>
              <div className="experience-detail-technologies">{selected.technologies.map((item) => <span key={item}>{item}</span>)}</div>
            </section> : null}
          </div>
        </> : null}
      </DialogContent>
    </Dialog>
  </div></main>;
}
