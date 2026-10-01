import { ArrowDownToLine, Maximize2 } from "lucide-react";
import { PageHeader } from "@/components/portfolio/PageHeader";
import { Button } from "@/components/ui/button";
import { getResumeContent } from "@/services/site";

export function ResumePage() {
  const content = getResumeContent();
  return <main className="projects-page"><div className="projects-inner">
    <PageHeader eyebrow={content.eyebrow} title={content.title} intro={content.intro} />
    <div className="resume-page-meta"><span>{content.updatedLabel}</span><strong>{content.updated}</strong><div>
      <Button asChild variant="hero"><a href={content.pdfUrl} download>{content.downloadLabel}<ArrowDownToLine /></a></Button>
      <Button asChild variant="hero"><a href={content.pdfUrl} target="_blank" rel="noreferrer">{content.fullscreenLabel}<Maximize2 /></a></Button>
    </div></div>
    <div className="resume-frame"><object data={content.pdfUrl} type="application/pdf"><p>{content.fallbackText} <a href={content.pdfUrl}>{content.fallbackLabel}</a>.</p></object></div>
  </div></main>;
}