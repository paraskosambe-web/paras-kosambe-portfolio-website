import { ExternalLink, Github } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import type { ExperienceItem } from "@/types/site";

export function ExperienceDetailDialog({ selected, onOpenChange, responsibilitiesLabel, technologiesLabel }: {
  selected: ExperienceItem | null;
  onOpenChange: (open: boolean) => void;
  responsibilitiesLabel: string;
  technologiesLabel: string;
}) {
  const facts = selected ? [
    { label: "Role", value: selected.role },
    { label: "Organization", value: selected.organization },
    { label: "Dates", value: selected.dateRange },
    { label: "Location", value: selected.location },
  ].filter((fact) => fact.value.trim()) : [];

  return <Dialog open={selected !== null} onOpenChange={onOpenChange}>
    <DialogContent className="record-dialog experience-detail-dialog" overlayClassName="experience-detail-overlay">
      {selected ? <>
        <DialogHeader className="experience-detail-header">
          <span className="experience-detail-type">{selected.type || "Experience"}</span>
          <DialogTitle>{selected.title}</DialogTitle>
          <DialogDescription>{selected.role || selected.organization}</DialogDescription>
        </DialogHeader>
        <div className="experience-detail-scroll">
          {facts.length > 0 ? <dl className="experience-detail-facts">{facts.map((fact) => <div key={fact.label}><dt>{fact.label}</dt><dd>{fact.value}</dd></div>)}</dl> : null}
          {selected.description ? <section className="experience-detail-section"><h3>Overview</h3><p className="experience-detail-description">{selected.description}</p></section> : null}
          {selected.linkUrl || selected.githubUrl ? <section className="experience-detail-section">
            <h3>Links</h3><div className="experience-detail-links">
              {selected.linkUrl ? <a href={selected.linkUrl} target="_blank" rel="noreferrer"><span className="experience-link-icon"><ExternalLink aria-hidden="true" /></span><span><strong>Certificate</strong><small>Open certificate</small></span><ExternalLink className="experience-link-arrow" aria-hidden="true" /></a> : null}
              {selected.githubUrl ? <a href={selected.githubUrl} target="_blank" rel="noreferrer"><span className="experience-link-icon"><Github aria-hidden="true" /></span><span><strong>GitHub</strong><small>Open repository</small></span><ExternalLink className="experience-link-arrow" aria-hidden="true" /></a> : null}
            </div>
          </section> : null}
          {selected.responsibilities.length > 0 ? <section className="experience-detail-section"><h3>{responsibilitiesLabel}</h3><ul className="experience-detail-responsibilities">{selected.responsibilities.map((item) => <li key={item}>{item}</li>)}</ul></section> : null}
          {selected.technologies.length > 0 ? <section className="experience-detail-section"><h3>{technologiesLabel}</h3><div className="experience-detail-technologies">{selected.technologies.map((item) => <span key={item}>{item}</span>)}</div></section> : null}
        </div>
      </> : null}
    </DialogContent>
  </Dialog>;
}
