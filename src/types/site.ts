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

export interface SiteContent {
  hero: HeroContent;
}