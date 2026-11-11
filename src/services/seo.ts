import { siteConfig } from "@/config/site";

export const SITE_URL = "https://paras-kosambe.vercel.app";
export const SOCIAL_IMAGE_URL = `${SITE_URL}/og-image.png`;

const SOCIAL_IMAGE_ALT = 
  "Paras Kosambe — aspiring data scientist working across data, AI, and software";

type PageHeadOptions = {
  canonicalPath?: string;
  title: string;
  description: string;
  openGraphDescription?: string;
  type?: "website" | "article";
  indexable?: boolean;
  jsonLd?: Record<string, unknown>;
};

export function pageHead({
  canonicalPath,
  title,
  description,
  openGraphDescription,
  type = "website",
  indexable = true,
  jsonLd,
}: PageHeadOptions) {
  const canonicalUrl = canonicalPath
    ? new URL(canonicalPath, SITE_URL).toString()
    : undefined;

  return {
    ...(canonicalUrl
      ? { links: [{ rel: "canonical", href: canonicalUrl }] }
      : {}),
    meta: [
      { title },
      { name: "description", content: description },
      ...(canonicalUrl ? [{ property: "og:url", content: canonicalUrl }] : []),
      { property: "og:title", content: title },
      {
        property: "og:description",
        content: openGraphDescription ?? description,
      },
      { property: "og:type", content: type },
      { property: "og:image", content: SOCIAL_IMAGE_URL },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: SOCIAL_IMAGE_ALT },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: SOCIAL_IMAGE_URL },
      { name: "twitter:image:alt", content: SOCIAL_IMAGE_ALT },
      ...(!indexable ? [{ name: "robots", content: "noindex, follow" }] : []),
      ...(jsonLd ? [{ "script:ld+json": jsonLd }] : []),
    ],
  };
}

export function websiteStructuredData(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: `${SITE_URL}/`,
    name: "Paras Kosambe",
    description:
      "Portfolio of Paras Kosambe, an aspiring Data Scientist working across analytics, AI/ML, and full-stack development.",
    publisher: { "@id": `${SITE_URL}/about#person` },
  };
}

export function profilePageStructuredData(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${SITE_URL}/about#profile`,
    url: `${SITE_URL}/about`,
    name: "About — Paras Kosambe",
    mainEntity: {
      "@type": "Person",
      "@id": `${SITE_URL}/about#person`,
      name: "Paras Kosambe",
      url: `${SITE_URL}/about`,
      description:
        "Learn about Paras Kosambe, a final-year Computer Science student focused on data and software.",
      jobTitle: "Aspiring Data Scientist",
      sameAs: [siteConfig.github, siteConfig.linkedin].filter(Boolean),
    },
  };
}
