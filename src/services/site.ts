import { siteContent } from "@/data/mock";
import type { HomeContent, ProjectItem, ProjectsContent, SiteContent } from "@/types/site";

export function getSiteContent(): SiteContent {
  return siteContent;
}

export function getHomeContent(): HomeContent {
  return siteContent.home;
}

export function getProjectsContent(): ProjectsContent {
  return siteContent.projects;
}

export function getProjects(): ProjectItem[] {
  return siteContent.projects.items;
}

export function getProjectBySlug(slug: string): ProjectItem | undefined {
  return siteContent.projects.items.find((project) => project.slug === slug);
}