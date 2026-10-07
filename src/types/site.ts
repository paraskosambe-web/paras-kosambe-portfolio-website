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
  action?: LinkContent;
}

export interface ExperienceItem extends PortfolioItem {
  organization: string;
  role: string;
  type: string;
  dateRange: string;
  location: string;
  responsibilities: string[];
  technologies: string[];
}

export type CertificationCategory = "DATA" | "AI-ML" | "DEVELOPMENT" | "CLOUD" | "OTHER";

export interface CertificationItem extends PortfolioItem {
  issuer: string;
  date: string;
  credentialId: string;
  category: CertificationCategory;
  imageUrl: string;
}

export type AchievementCategory = "ACADEMIC" | "TECHNICAL" | "COMMUNITY" | "OTHER";

export interface AchievementItem extends PortfolioItem {
  organization: string;
  date: string;
  category: AchievementCategory;
  link?: LinkContent;
}

export interface CollectionPageContent<T> {
  eyebrow: string;
  title: string;
  intro: string;
  items: T[];
}

export interface ExperienceContent extends CollectionPageContent<ExperienceItem> {
  dialogResponsibilitiesLabel: string;
  dialogTechnologiesLabel: string;
}

export interface CertificationsContent extends CollectionPageContent<CertificationItem> {
  filters: ("ALL" | CertificationCategory)[];
  loadMoreLabel: string;
  lightboxCloseLabel: string;
}

export interface AchievementsContent extends CollectionPageContent<AchievementItem> {
  filters: ("ALL" | AchievementCategory)[];
}

export interface AboutContent {
  eyebrow: string;
  title: string;
  intro: string;
  imageUrl?: string;
  imageAlt: string;
  bio: string[];
  educationLabel: string;
  education: { degree: string; institution: string; status: string };
  currentlyLabel: string;
  currently: string[];
  lookingForLabel: string;
  lookingFor: string;
}

export interface SkillsContent extends CollectionPageContent<SkillsCategory> {}

export interface ResumeContent {
  eyebrow: string;
  title: string;
  intro: string;
  updatedLabel: string;
  updated: string;
  pdfUrl: string;
  downloadLabel: string;
  fullscreenLabel: string;
  fallbackText: string;
  fallbackLabel: string;
}

export type ArtCategory = "ALL" | "DIGITAL" | "SKETCH" | "EXPERIMENTAL";

export interface ArtItem extends PortfolioItem {
  category: Exclude<ArtCategory, "ALL">;
  medium: string;
  year: string;
  imageUrl: string;
}

export interface ArtContent extends CollectionPageContent<ArtItem> {
  filters: ArtCategory[];
  portfolioLabel: string;
  portfolioUrl?: string;
}

export interface ContactLink {
  label: string;
  value: string;
  href: string;
}

export interface ContactContent {
  eyebrow: string;
  title: string;
  intro: string;
  links: ContactLink[];
  form: {
    nameLabel: string;
    emailLabel: string;
    interestLabel: string;
    messageLabel: string;
    submitLabel: string;
    interests: string[];
    successMessage: string;
    errorMessage: string;
  };
}

export type ProjectCategory = "Data Science" | "Data Analytics" | "AI/ML" | "Full-Stack";

export interface ProjectItem extends PortfolioItem {
  imageUrl: string;
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
  notFoundTitle: string;
  notFoundDescription: string;
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
  sectionName: string;
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
  skills: string[];
}

export interface OverviewCollection {
  sectionName: string;
  index: string;
  title: string;
  intro: string;
  items: PortfolioItem[];
  action: LinkContent;
}

export interface ResumePreviewContent {
  sectionName: string;
  index: string;
  title: string;
  updatedLabel: string;
  updated: string;
  intro: string;
  viewAction: LinkContent;
  downloadAction: LinkContent;
}

export interface ContactPreviewContent {
  sectionName: string;
  index: string;
  title: string;
  intro: string;
  action: LinkContent;
}

export interface HomeContent {
  about: AboutPreviewContent;
  skills: {
    sectionName: string;
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
  experience: ExperienceContent;
  certifications: CertificationsContent;
  achievements: AchievementsContent;
  about: AboutContent;
  skills: SkillsContent;
  resume: ResumeContent;
  art: ArtContent;
  contact: ContactContent;
}
