import { siteContent } from "@/data/mock";
import type { AboutContent, AchievementsContent, ArtContent, CertificationsContent, ContactContent, ExperienceContent, HomeContent, ProjectItem, ProjectsContent, ResumeContent, SiteContent, SkillsContent } from "@/types/site";

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

export function getAboutContent(): AboutContent { return siteContent.about; }
export function getSkillsContent(): SkillsContent { return siteContent.skills; }
export function getResumeContent(): ResumeContent { return siteContent.resume; }
export function getArtContent(): ArtContent { return siteContent.art; }
export function getContactContent(): ContactContent { return siteContent.contact; }