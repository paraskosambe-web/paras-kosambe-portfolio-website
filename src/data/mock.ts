import { siteConfig } from "@/config/site";
import type { SiteContent } from "@/types/site";

export const siteContent: SiteContent = {
  hero: {
    eyebrow: "ASPIRING DATA SCIENTIST",
    firstName: "PARAS",
    lastName: "KOSAMBE",
    primaryRole: "Data Science",
    disciplines: "Data Analytics · AI/ML · Full-Stack Development",
    description:
      "I build data-driven systems, intelligent applications, and scalable digital experiences.",
    primaryAction: { label: "View My Work", href: "/projects" },
    secondaryAction: { label: "View Resume", href: "/resume" },
    socials: [
      { label: "GitHub", href: siteConfig.github },
      { label: "LinkedIn", href: siteConfig.linkedin },
    ],
    coordinates: ["X 18.04", "Y 72.87", "N 19°04′", "E 72°52′"],
    scrollLabel: "SCROLL",
  },
};