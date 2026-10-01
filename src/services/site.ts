import { siteContent } from "@/data/mock";
import type { AchievementsContent, CertificationsContent, ExperienceContent, HomeContent, ProjectItem, ProjectsContent, SiteContent } from "@/types/site";

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

export function getExperienceContent(): ExperienceContent {
  return siteContent.experience;
}

export function getCertificationsContent(): CertificationsContent {
  return siteContent.certifications;
}

export function getAchievementsContent(): AchievementsContent {
  return siteContent.achievements;
}