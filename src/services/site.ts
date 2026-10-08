import { queryOptions } from "@tanstack/react-query";
import { useSyncExternalStore } from "react";
import { siteContent as mockContent } from "@/data/mock";
import { siteConfig } from "@/config/site";
import type {
  AboutContent, AchievementCategory, AchievementItem, AchievementsContent, ArtContent, ArtItem, CertificationCategory,
  CertificationItem, CertificationsContent, ContactContent, ExperienceContent, ExperienceItem, HomeContent, ProjectCategory,
  ProjectItem, ProjectsContent, ResumeContent, SiteContent, SkillsCategory, SkillsContent,
} from "@/types/site";
import { fetchPortfolioData } from "./content.functions";
import type { PortfolioData } from "./content.types";

export const portfolioQueryOptions = queryOptions({
  queryKey: ["portfolio-content"],
  queryFn: () => fetchPortfolioData(),
  // Public portfolio content is edited from the admin panel. Keep it stale so
  // a new page load always revalidates against the database instead of
  // rendering a recently cached snapshot.
  staleTime: 0,
});

let current: SiteContent = mockContent;
let lastData: PortfolioData | null | undefined;
const contentListeners = new Set<() => void>();

function subscribeToContent(listener: () => void) {
  contentListeners.add(listener);
  return () => { contentListeners.delete(listener); };
}

function notifyContentChanged() {
  contentListeners.forEach((listener) => listener());
}

/** Reactively read the typed portfolio content model in UI components. */
export function useSiteContent(): SiteContent {
  return useSyncExternalStore(subscribeToContent, () => current, () => current);
}

const pad = (n: number) => String(n).padStart(2, "0");
const top3 = <T extends { featured?: boolean }>(rows: T[]) => rows.filter((r) => r.featured).slice(0, 3);

function portfolioImageUrl(source: string | null | undefined): string | undefined {
  const value = source?.trim();
  if (!value) return undefined;

  const mediaPrefix = "/api/public/media/portfolio-images/";
  if (value.startsWith(mediaPrefix)) return value;

  const storagePath = value.match(/(?:^|\/)storage\/v1\/object\/(?:public|sign|authenticated)\/portfolio-images\/([^?#]+)/i)?.[1];
  const bucketPath = value.match(/(?:^|\/)portfolio-images\/([^?#]+)/i)?.[1];
  if (!storagePath && !bucketPath && /^(https?:|data:|blob:)/i.test(value)) return value;
  const path = (storagePath || bucketPath || value).replace(/^\/+/, "");
  return `${mediaPrefix}${path.split("/").map(encodeURIComponent).join("/")}`;
}

function formatWhatsapp(n: string) {
  return n.length > 10 ? `+${n.slice(0, n.length - 10)} ${n.slice(-10, -5)} ${n.slice(-5)}` : n;
}

/** Build the public content model from managed rows, keeping UI labels from the static copy. */
export function hydrateSiteContent(data: PortfolioData | null | undefined) {
  if (data === lastData) return;
  lastData = data;
  if (!data) {
    current = mockContent;
    notifyContentChanged();
    return;
  }
  const m = mockContent;
  const s = data.site;
  const link = (p: string) => data.socials.find((x) => x.platform === p)?.url ?? "";
  siteConfig.github = link("github") || siteConfig.github;
  siteConfig.linkedin = link("linkedin") || siteConfig.linkedin;
  siteConfig.instagram = link("instagram");
  siteConfig.email = s?.contact_email || "paraskosambe@gmail.com";
  if (s?.whatsapp_number && /^\d+$/.test(s.whatsapp_number)) siteConfig.whatsapp = s.whatsapp_number;

  const projects: ProjectItem[] = data.projects.map((p, i) => ({
    id: p.id, slug: p.slug, index: pad(i + 1), meta: p.category, category: p.category as ProjectCategory,
    title: p.title, description: p.description, tags: p.technologies, imageUrl: portfolioImageUrl(p.image_url) ?? "", imageAlt: p.image_alt || p.title,
    action: { label: "View project", href: `/projects/${p.slug}` }, githubUrl: p.github_url, liveUrl: p.live_url,
    overview: p.overview, problem: p.problem, solution: p.solution, features: p.features, technologies: p.technologies,
    development: p.development, screenshots: p.screenshots.map(portfolioImageUrl).filter((url): url is string => Boolean(url)), learnings: p.learnings,
  }));
  const certifications: CertificationItem[] = data.certifications.map((c, i) => ({
    id: c.id, index: pad(i + 1), meta: c.category, category: c.category as CertificationCategory, title: c.title,
    issuer: c.issuer, date: c.date_label, credentialId: c.credential_id, description: c.description, tags: c.tags,
    imageUrl: portfolioImageUrl(c.image_url) ?? "", imageAlt: c.image_alt || c.title,
    action: { label: "View Credential", href: c.credential_url || `#certification-${c.id}` },
  }));
  const experiences: ExperienceItem[] = data.experiences.map((e, i) => {
    const imageUrl = portfolioImageUrl(e.image_url);
    return {
      id: e.id, index: pad(i + 1), meta: e.type || "EXPERIENCE", title: e.title, organization: e.organization, role: e.role,
      type: e.type, dateRange: e.date_range, location: e.location, description: e.description, tags: e.technologies,
      technologies: e.technologies, responsibilities: e.responsibilities, imageAlt: e.image_alt || e.title,
      ...(imageUrl ? { imageUrl } : {}),
      action: { label: "View details", href: e.link_url || `#experience-${e.id}` },
    };
  });
  const achievements: AchievementItem[] = data.achievements.map((a, i) => ({
    id: a.id, index: pad(i + 1), meta: a.category, category: a.category as AchievementCategory, title: a.title,
    organization: a.organization, date: a.date_label, description: a.description, tags: a.tags, imageAlt: a.image_alt || a.title,
    ...(a.image_url ? { imageUrl: a.image_url } : {}),
    ...(a.link_url ? { action: { label: a.link_label || "View link", href: a.link_url }, link: { label: a.link_label || "View link", href: a.link_url } } : {}),
  }));
  const artworks: ArtItem[] = data.artworks.map((a, i) => ({
    id: a.id, index: pad(i + 1), meta: a.category, category: a.category as ArtItem["category"], title: a.title,
    description: a.description, medium: a.medium, year: a.year, tags: a.tags, imageUrl: a.image_url, imageAlt: a.image_alt || a.title,
  }));
  const skills: SkillsCategory[] = data.skills.map((k, i) => {
    const imageUrl = portfolioImageUrl(k.image_url);
    return {
      id: k.id, index: pad(i + 1), meta: "SKILLS", title: k.title,
      description: k.description, skills: k.skills, tags: k.skills, imageAlt: k.image_alt || k.title,
      ...(imageUrl ? { imageUrl } : {}),
    };
  });

  const about: AboutContent = {
    ...m.about,
    ...(s?.about_image_url ? { imageUrl: s.about_image_url } : {}),
    imageAlt: s?.about_image_alt || m.about.imageAlt,
    bio: s?.about_bio.length ? s.about_bio : m.about.bio,
    education: s ? { degree: s.education_degree, institution: s.education_institution, status: s.education_status } : m.about.education,
    currently: s?.currently ?? m.about.currently,
    lookingFor: s?.looking_for ?? m.about.lookingFor,
  };
  const resumeUpdated = data.resume?.updated_label || m.resume.updated;
  const portfolioUrl = m.art.portfolioUrl || s?.art_portfolio_url || siteConfig.instagram;
  const { portfolioUrl: _ignored, ...artBase } = m.art;
  void _ignored;

  const home: HomeContent = {
    ...m.home,
    about: {
      ...m.home.about,
      ...(about.imageUrl ? { imageUrl: about.imageUrl } : {}),
      imageAlt: about.imageAlt,
      intro: s?.about_intro ? [s.about_intro] : m.home.about.intro,
      currently: about.currently,
    },
    skills: { ...m.home.skills, categories: skills.filter((_, i) => data.skills[i]?.featured).slice(0, 3).map((k) => ({ ...k, tags: k.skills.slice(0, 4), action: { label: "View skills", href: "/skills" } })) },
    projects: { ...m.home.projects, items: top3(data.projects).map((r) => projects.find((p) => p.id === r.id)!) },
    experience: { ...m.home.experience, items: top3(data.experiences).map((r) => experiences.find((p) => p.id === r.id)!) },
    certifications: { ...m.home.certifications, items: top3(data.certifications).map((r) => certifications.find((p) => p.id === r.id)!) },
    achievements: { ...m.home.achievements, items: top3(data.achievements).map((r) => achievements.find((p) => p.id === r.id)!) },
    art: { ...m.home.art, items: top3(data.artworks).map((r) => artworks.find((p) => p.id === r.id)!) },
    resume: { ...m.home.resume, updated: resumeUpdated },
  };

  current = {
    hero: s ? {
      ...m.hero, eyebrow: s.hero_eyebrow, firstName: s.hero_first_name, lastName: s.hero_last_name,
      primaryRole: s.hero_role, disciplines: s.hero_disciplines, description: s.hero_description,
      socials: [{ label: "GitHub", href: siteConfig.github }, { label: "LinkedIn", href: siteConfig.linkedin }],
    } : m.hero,
    home,
    projects: { ...m.projects, items: projects },
    experience: { ...m.experience, items: experiences },
    certifications: { ...m.certifications, items: certifications },
    achievements: { ...m.achievements, items: achievements },
    about,
    skills: { ...m.skills, items: skills },
    resume: { ...m.resume, updated: resumeUpdated, pdfUrl: data.resume?.file_url ?? m.resume.pdfUrl },
    art: { ...artBase, items: artworks, ...(portfolioUrl ? { portfolioUrl } : {}) },
    contact: {
      ...m.contact,
      links: [
        { label: "Email", value: siteConfig.email || "Email pending", href: siteConfig.email ? `mailto:${siteConfig.email}` : "#" },
        { label: "LinkedIn", value: "Paras Kosambe", href: siteConfig.linkedin },
        { label: "GitHub", value: siteConfig.github.replace(/^https?:\/\/(www\.)?github\.com\//, ""), href: siteConfig.github },
        { label: "WhatsApp", value: formatWhatsapp(siteConfig.whatsapp), href: `https://wa.me/${siteConfig.whatsapp}` },
      ],
    },
  };
  notifyContentChanged();
}

export function getSiteContent(): SiteContent { return current; }
export function getHomeContent(): HomeContent { return current.home; }
export function getProjectsContent(): ProjectsContent { return current.projects; }
export function getProjects(): ProjectItem[] { return current.projects.items; }
export function getProjectBySlug(slug: string): ProjectItem | undefined { return current.projects.items.find((p) => p.slug === slug); }
export function getExperienceContent(): ExperienceContent { return current.experience; }
export function getCertificationsContent(): CertificationsContent { return current.certifications; }
export function getAchievementsContent(): AchievementsContent { return current.achievements; }
export function getAboutContent(): AboutContent { return current.about; }
export function getSkillsContent(): SkillsContent { return current.skills; }
export function getResumeContent(): ResumeContent { return current.resume; }
export function getArtContent(): ArtContent { return current.art; }
export function getContactContent(): ContactContent { return current.contact; }
