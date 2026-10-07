import { PortfolioCard } from "@/components/portfolio/PortfolioCard";
import type { ProjectItem } from "@/types/site";

export function ProjectCard({ project }: { project: ProjectItem }) {
  return (
    <PortfolioCard
      item={project}
      secondaryActions={[
        { label: "GitHub", href: project.githubUrl },
        { label: "Live Demo", href: project.liveUrl },
      ]}
    />
  );
}
