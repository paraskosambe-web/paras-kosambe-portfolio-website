export interface HeroContent {
  eyebrow: string;
  firstName: string;
  lastName: string;
  primaryRole: string;
  disciplines: string;
  description: string;
  primaryAction: { label: string; href: string };
  secondaryAction: { label: string; href: string };
  socials: {
    label: string;
    href: string;
  }[];
  coordinates: string[];
  scrollLabel: string;
}

export interface LinkContent {
  label: string;
  href: string;
}

export interface PortfolioItem {
  id: string;
  index: string;
  meta: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl?: string;
  imageAlt: string;
  action: LinkContent;
}

export type ProjectCategory = "Data Science" | "Data Analytics" | "AI/ML" | "Full-Stack";

export interface ProjectItem extends PortfolioItem {
  slug: string;
  category: ProjectCategory;
  githubUrl: string;
  liveUrl: string;
  overview: string;
  problem: string;
  solution: string;
  features: string[];
  technologies: string[];
  development: string;
  screenshots: string[];
  learnings: string[];
}

export interface ProjectsContent {
  eyebrow: string;
  title: string;
  intro: string;
  searchLabel: string;
  searchPlaceholder: string;
  filters: ("All" | ProjectCategory)[];
  loadMoreLabel: string;
  emptyTitle: string;
  emptyDescription: string;
  backLabel: string;
  githubLabel: string;
  liveLabel: string;
  sectionLabels: {
    overview: string;
    problem: string;
    solution: string;
    features: string;
    technologies: string;
    development: string;
    screenshots: string;
    learnings: string;
    previous: string;
    next: string;
  };
  items: ProjectItem[];
}

export interface AboutPreviewContent {
  index: string;
  title: string;
  imageUrl?: string;
  imageAlt: string;
  intro: string[];
  currentlyLabel: string;
  currently: string[];
  action: LinkContent;
}

export interface SkillsCategory extends PortfolioItem {
  count: number;
  skills: string[];
}

export interface OverviewCollection {
  index: string;
  title: string;
  intro: string;
  items: PortfolioItem[];
  action: LinkContent;
}

export interface ResumePreviewContent {
  index: string;
  title: string;
  updatedLabel: string;
  updated: string;
  intro: string;
  viewAction: LinkContent;
  downloadAction: LinkContent;
}

export interface ContactPreviewContent {
  index: string;
  title: string;
  intro: string;
  action: LinkContent;
}

export interface HomeContent {
  about: AboutPreviewContent;
  skills: {
    index: string;
    title: string;
    intro: string;
    categories: SkillsCategory[];
    action: LinkContent;
  };
  projects: OverviewCollection;
  experience: OverviewCollection;
  certifications: OverviewCollection;
  achievements: OverviewCollection;
  resume: ResumePreviewContent;
  art: OverviewCollection;
  contact: ContactPreviewContent;
}

export interface SiteContent {
  hero: HeroContent;
  home: HomeContent;
  projects: ProjectsContent;
}