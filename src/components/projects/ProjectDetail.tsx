import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ArrowUpRight, Github } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

import { Button } from "@/components/ui/button";
import { getProjectsContent } from "@/services/site";
import type { ProjectItem } from "@/types/site";

function DetailSection({ index, title, children }: { index: string; title: string; children: React.ReactNode }) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.section className="project-detail-section" initial={reduceMotion ? false : { opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.18 }}>
      <span>{index}</span><h2>{title}</h2><div>{children}</div>
    </motion.section>
  );
}

export function ProjectDetail({ project }: { project: ProjectItem }) {
  const content = getProjectsContent();
  const labels = content.sectionLabels;
  const projectIndex = content.items.findIndex((item) => item.slug === project.slug);
  const previous = projectIndex > 0 ? content.items[projectIndex - 1] : undefined;
  const next = projectIndex < content.items.length - 1 ? content.items[projectIndex + 1] : undefined;

  return (
    <main className="project-detail">
      <div className="project-detail-inner">
        <Link className="project-back" to="/projects"><ArrowLeft />{content.backLabel}</Link>
        <header className="project-detail-header">
          <div><span>{project.index} / {project.category}</span><h1>{project.title}</h1></div>
          <p>{project.overview}</p>
        </header>
        <div className="project-detail-hero"><img src={project.imageUrl} alt={project.imageAlt} /></div>
        <div className="project-detail-actions">
          <Button asChild variant="hero"><a href={project.githubUrl} target="_blank" rel="noreferrer"><Github />{content.githubLabel}</a></Button>
          <Button asChild variant="hero"><a href={project.liveUrl}><ArrowUpRight />{content.liveLabel}</a></Button>
        </div>

        <DetailSection index="01" title={labels.overview}><p>{project.overview}</p></DetailSection>
        <div className="project-detail-pair">
          <DetailSection index="02" title={labels.problem}><p>{project.problem}</p></DetailSection>
          <DetailSection index="03" title={labels.solution}><p>{project.solution}</p></DetailSection>
        </div>
        <DetailSection index="04" title={labels.features}><ol>{project.features.map((feature, index) => <li key={feature}><span>{String(index + 1).padStart(2, "0")}</span>{feature}</li>)}</ol></DetailSection>
        <DetailSection index="05" title={labels.technologies}><div className="project-tech-list">{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div></DetailSection>
        <DetailSection index="06" title={labels.development}><p>{project.development}</p></DetailSection>
        <DetailSection index="07" title={labels.screenshots}><div className="project-screenshots">{project.screenshots.map((screenshot, index) => <img key={`${screenshot}-${index}`} src={screenshot} alt={`${project.title} placeholder screenshot ${index + 1}`} />)}</div></DetailSection>
        <DetailSection index="08" title={labels.learnings}><ul>{project.learnings.map((learning) => <li key={learning}>{learning}</li>)}</ul></DetailSection>

        <nav className="project-pagination" aria-label="Project pagination">
          {previous ? <Link to="/projects/$slug" params={{ slug: previous.slug }}><ArrowLeft /><span>{labels.previous}<strong>{previous.title}</strong></span></Link> : <span />}
          {next ? <Link to="/projects/$slug" params={{ slug: next.slug }}><span>{labels.next}<strong>{next.title}</strong></span><ArrowRight /></Link> : <span />}
        </nav>
      </div>
    </main>
  );
}

export function ProjectNotFound() {
  const content = getProjectsContent();
  return (
    <main className="project-not-found"><span>404</span><h1>{content.notFoundTitle}</h1><p>{content.notFoundDescription}</p><Button asChild variant="hero"><Link to="/projects"><ArrowLeft />{content.backLabel}</Link></Button></main>
  );
}