import { Search } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useMemo, useState } from "react";

import { PageHeader } from "@/components/portfolio/PageHeader";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useSiteContent } from "@/services/site";
import type { ProjectCategory } from "@/types/site";

type Filter = "All" | ProjectCategory;

export function ProjectsIndex() {
  const content = useSiteContent().projects;
  const reduceMotion = useReducedMotion();
  const [filter, setFilter] = useState<Filter>("All");
  const [query, setQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(9);

  const filteredProjects = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return content.items.filter((project) => {
      const matchesFilter = filter === "All" || project.category === filter;
      const searchable = [project.title, project.category, ...project.technologies].join(" ").toLowerCase();
      return matchesFilter && (!normalizedQuery || searchable.includes(normalizedQuery));
    });
  }, [content.items, filter, query]);

  const setCategory = (category: Filter) => {
    setFilter(category);
    setVisibleCount(9);
  };

  return (
    <main className="projects-page">
      <div className="projects-inner">
        <PageHeader eyebrow={content.eyebrow} title={content.title} intro={content.intro} />
        <motion.div className="project-controls" initial={reduceMotion ? false : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.28 }}>
          <div className="project-filters" aria-label="Project categories">
            {content.filters.map((category) => (
              <Button key={category} type="button" variant="outline" aria-pressed={filter === category} onClick={() => setCategory(category)}>{category}</Button>
            ))}
          </div>
          <label className="project-search">
            <span className="sr-only">{content.searchLabel}</span>
            <Search aria-hidden="true" />
            <Input value={query} onChange={(event) => setQuery(event.target.value)} placeholder={content.searchPlaceholder} />
          </label>
        </motion.div>

        <motion.div layout className="collection-grid project-grid">
          <AnimatePresence mode="popLayout">
            {filteredProjects.slice(0, visibleCount).map((project) => <ProjectCard key={project.id} project={project} />)}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 ? (
          <div className="projects-empty"><strong>{content.emptyTitle}</strong><p>{content.emptyDescription}</p></div>
        ) : null}
        {filteredProjects.length > visibleCount ? (
          <Button className="projects-load-more" variant="hero" onClick={() => setVisibleCount((count) => count + 9)}>{content.loadMoreLabel}</Button>
        ) : null}
      </div>
    </main>
  );
}
