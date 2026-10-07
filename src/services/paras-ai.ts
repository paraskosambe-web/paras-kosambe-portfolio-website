import type { PortfolioData } from "./content.types";

export interface ParasAILink {
  label: string;
  href: string;
}

export interface ParasAIReply {
  answer: string;
  links: ParasAILink[];
}

export interface PortfolioFact {
  id: string;
  section: string;
  title: string;
  text: string;
  href: string;
  linkLabel: string;
  searchText: string;
}

const clean = (value: unknown, max = 700) =>
  (typeof value === "string" ? value : "")
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, max);

const list = (values: string[] | null | undefined, maxItems = 12) =>
  (values ?? [])
    .flat(Infinity)
    .map((value) => clean(value, 240))
    .filter(Boolean)
    .slice(0, maxItems)
    .join("; ");

function fact(
  section: string,
  title: string,
  text: string,
  href: string,
  linkLabel: string,
  searchText = "",
): PortfolioFact {
  const safeTitle = clean(title, 180);
  const safeText = clean(text, 1600);
  return {
    id: `${section}:${safeTitle}`,
    section,
    title: safeTitle,
    text: safeText,
    href,
    linkLabel,
    searchText: `${section} ${safeTitle} ${safeText} ${searchText}`.toLowerCase(),
  };
}

/** Build searchable facts only from public portfolio fields. Private/admin tables are never loaded. */
export function createPortfolioFacts(data: PortfolioData): PortfolioFact[] {
  const facts: PortfolioFact[] = [];
  const site = data.site;
  if (site) {
    const profile = [
      `Name: ${clean(`${site.hero_first_name} ${site.hero_last_name}`, 160)}`,
      `Role: ${clean(site.hero_role, 240)}`,
      `Disciplines: ${clean(site.hero_disciplines, 240)}`,
      `Introduction: ${clean(site.about_intro)}`,
      `About: ${list(site.about_bio, 6)}`,
      `Currently: ${list(site.currently, 8)}`,
      `Education: ${clean(site.education_degree, 240)} at ${clean(site.education_institution, 240)} (${clean(site.education_status, 120)})`,
      `Looking for: ${clean(site.looking_for, 500)}`,
      `Public contact email: ${clean(site.contact_email, 180)}`,
    ].filter((line) => !line.endsWith(": ") && !line.includes(" at  ("));
    facts.push(
      fact(
        "About",
        `${site.hero_first_name} ${site.hero_last_name}`,
        profile.join("\n"),
        "/about",
        "About Paras",
        "education profile background contact",
      ),
    );
  }

  for (const item of data.projects) {
    facts.push(
      fact(
        "Projects",
        item.title,
        [
          `Category: ${clean(item.category, 120)}`,
          `Description: ${clean(item.description)}`,
          `Overview: ${clean(item.overview)}`,
          `Problem: ${clean(item.problem)}`,
          `Solution: ${clean(item.solution)}`,
          `Development: ${clean(item.development)}`,
          `Technologies: ${list(item.technologies)}`,
          `Features: ${list(item.features)}`,
          `Learnings: ${list(item.learnings)}`,
        ]
          .filter((line) => !line.endsWith(": "))
          .join("\n"),
        `/projects/${encodeURIComponent(item.slug)}`,
        "View project",
        `${item.category} ${list(item.technologies, 30)}`,
      ),
    );
  }

  for (const item of data.certifications) {
    facts.push(
      fact(
        "Certifications",
        item.title,
        [
          `Issuer: ${clean(item.issuer, 220)}`,
          `Category: ${clean(item.category, 120)}`,
          `Date: ${clean(item.date_label, 100)}`,
          `Description: ${clean(item.description)}`,
          `Tags: ${list(item.tags)}`,
        ]
          .filter((line) => !line.endsWith(": "))
          .join("\n"),
        "/certifications",
        "Certifications",
        `${item.issuer} ${list(item.tags)}`,
      ),
    );
  }

  for (const item of data.experiences) {
    facts.push(
      fact(
        "Experience",
        item.title,
        [
          `Role: ${clean(item.role, 220)}`,
          `Organization: ${clean(item.organization, 220)}`,
          `Type: ${clean(item.type, 120)}`,
          `Dates: ${clean(item.date_range, 120)}`,
          `Location: ${clean(item.location, 180)}`,
          `Description: ${clean(item.description)}`,
          `Responsibilities: ${list(item.responsibilities)}`,
          `Technologies: ${list(item.technologies)}`,
        ]
          .filter((line) => !line.endsWith(": "))
          .join("\n"),
        "/experience",
        "Experience",
        `${item.role} ${item.organization} ${list(item.technologies, 30)}`,
      ),
    );
  }

  for (const item of data.skills) {
    facts.push(
      fact(
        "Skills",
        item.title,
        [`Description: ${clean(item.description)}`, `Skills: ${list(item.skills, 30)}`]
          .filter((line) => !line.endsWith(": "))
          .join("\n"),
        "/skills",
        "Skills",
        list(item.skills, 30),
      ),
    );
  }

  for (const item of data.achievements) {
    facts.push(
      fact(
        "Achievements",
        item.title,
        [
          `Category: ${clean(item.category, 120)}`,
          `Organization: ${clean(item.organization, 200)}`,
          `Date: ${clean(item.date_label, 100)}`,
          `Description: ${clean(item.description)}`,
          `Tags: ${list(item.tags)}`,
        ]
          .filter((line) => !line.endsWith(": "))
          .join("\n"),
        "/achievements",
        "Achievements",
        `${item.organization} ${list(item.tags)}`,
      ),
    );
  }

  for (const item of data.artworks) {
    facts.push(
      fact(
        "Artworks",
        item.title,
        [
          `Category: ${clean(item.category, 120)}`,
          `Medium: ${clean(item.medium, 160)}`,
          `Year: ${clean(item.year, 30)}`,
          `Description: ${clean(item.description)}`,
          `Tags: ${list(item.tags)}`,
        ]
          .filter((line) => !line.endsWith(": "))
          .join("\n"),
        "/art",
        "Artworks",
        `${item.medium} ${list(item.tags)}`,
      ),
    );
  }

  if (data.resume) {
    facts.push(
      fact(
        "Resume",
        data.resume.title,
        `Public resume: ${clean(data.resume.title, 200)}. Updated: ${clean(data.resume.updated_label, 100)}.`,
        "/resume",
        "View resume",
      ),
    );
  }

  for (const item of data.socials) {
    facts.push(
      fact(
        "Contact",
        item.label,
        `Public ${clean(item.platform, 80)} profile: ${clean(item.url, 350)}`,
        "/contact",
        "Contact Paras",
        item.platform,
      ),
    );
  }

  return facts;
}

const stopWords = new Set([
  "about",
  "after",
  "again",
  "also",
  "and",
  "are",
  "can",
  "did",
  "does",
  "for",
  "from",
  "have",
  "his",
  "how",
  "into",
  "is",
  "me",
  "please",
  "show",
  "tell",
  "that",
  "the",
  "their",
  "them",
  "there",
  "these",
  "they",
  "this",
  "what",
  "when",
  "where",
  "which",
  "who",
  "with",
  "would",
]);

function tokens(value: string) {
  return (
    value
      .toLowerCase()
      .match(/[a-z0-9+#.]+/g)
      ?.filter((token) => token.length > 1 && !stopWords.has(token)) ?? []
  );
}

/** Keyword retrieval is rebuilt from the latest database result for every question. */
export function retrievePortfolioFacts(
  data: PortfolioData,
  question: string,
  limit = 8,
): PortfolioFact[] {
  const facts = createPortfolioFacts(data);
  const queryTokens = [...new Set(tokens(question))];
  const scored = facts
    .map((item) => {
      const weightedTitle = tokens(`${item.section} ${item.title}`).join(" ");
      const titleTokens = new Set(tokens(weightedTitle));
      const bodyTokens = new Set(tokens(item.searchText));
      const score = queryTokens.reduce(
        (total, token) => total + (titleTokens.has(token) ? 4 : bodyTokens.has(token) ? 1 : 0),
        0,
      );
      return { item, score };
    })
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score);

  return scored.slice(0, Math.max(1, Math.min(limit, 12))).map(({ item }) => item);
}

const privateRequest =
  /\b(?:admin(?:istrator)?\s*(?:panel|login|account|password|credentials?)|(?:reveal|show|list|dump|expose|query|access|export)\s+(?:the\s+)?(?:database|private|confidential|secret|hidden)|private\s+(?:data|information|messages|records|details)|confidential\s+(?:data|information|records)|(?:api|service.?role)\s*keys?|passwords?|credentials?|system\s+(?:prompt|instructions?)|developer\s+instructions?|hidden\s+(?:data|content|information)|environment\s+variables?|database\s+(?:schema|credentials|dump|records|contents?))\b/i;

export function isPrivateOrInternalRequest(question: string) {
  return privateRequest.test(question);
}

/** The LLM receives only these ranked public facts; URLs are derived locally, never generated by the model. */
export function buildPortfolioContext(facts: PortfolioFact[]) {
  return facts
    .map(({ section, title, text }) => `## ${section}: ${title}\n${text}`)
    .join("\n\n")
    .slice(0, 18000);
}

export function buildPortfolioLinks(facts: PortfolioFact[]): ParasAILink[] {
  const links = new Map<string, ParasAILink>();
  for (const item of facts) {
    if (!links.has(item.href)) links.set(item.href, { label: item.linkLabel, href: item.href });
  }
  return [...links.values()].slice(0, 3);
}
