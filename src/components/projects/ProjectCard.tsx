import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Github } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { useState, type MouseEvent } from "react";

import type { ProjectItem } from "@/types/site";

export function ProjectCard({ project }: { project: ProjectItem }) {
  const reduceMotion = useReducedMotion();
  const [cursor, setCursor] = useState({ x: 0, y: 0, shown: false });
  const moveCursor = (event: MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setCursor({ x: event.clientX - rect.left, y: event.clientY - rect.top, shown: true });
  };

  return (
    <motion.article
      layout
      className="project-card"
      initial={reduceMotion ? false : { opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.35 }}
      onMouseMove={moveCursor}
      onMouseLeave={() => setCursor((value) => ({ ...value, shown: false }))}
    >
      <Link className="project-card-main" to="/projects/$slug" params={{ slug: project.slug }} aria-label={`View ${project.title}`}>
        <div className="portfolio-card-media"><img src={project.imageUrl} alt={project.imageAlt} /></div>
        <div className="portfolio-card-body">
          <div className="portfolio-card-meta"><span>{project.index}</span><span>{project.category}</span></div>
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <div className="portfolio-card-tags">{project.technologies.slice(0, 3).map((technology) => <span key={technology}>{technology}</span>)}</div>
          <span className="project-card-arrow"><ArrowUpRight /></span>
        </div>
      </Link>
      <div className="project-card-links">
        <a href={project.githubUrl} target="_blank" rel="noreferrer"><Github />GitHub</a>
        <a href={project.liveUrl}><ArrowUpRight />Live Demo</a>
      </div>
      <span className={`project-view-cursor${cursor.shown ? " is-visible" : ""}`} style={{ transform: `translate3d(${cursor.x}px, ${cursor.y}px, 0)` }}>VIEW</span>
    </motion.article>
  );
}