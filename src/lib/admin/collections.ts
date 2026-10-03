export type FieldType = "text" | "textarea" | "select" | "tags" | "image" | "images" | "url";

export interface FieldDef {
  name: string;
  label: string;
  type: FieldType;
  required?: boolean;
  options?: string[];
  hint?: string;
}

export interface CollectionDef {
  key: string;
  table: "projects" | "certifications" | "experiences" | "skills" | "achievements" | "artworks";
  label: string;
  singular: string;
  columns: { name: string; label: string }[];
  searchFields: string[];
  fields: FieldDef[];
}

export const collections: CollectionDef[] = [
  {
    key: "projects", table: "projects", label: "Projects", singular: "Project",
    columns: [{ name: "title", label: "Title" }, { name: "category", label: "Category" }, { name: "slug", label: "Slug" }],
    searchFields: ["title", "category", "slug"],
    fields: [
      { name: "title", label: "Title", type: "text", required: true },
      { name: "slug", label: "Slug", type: "text", required: true, hint: "Generated from the title; used in /projects/slug" },
      { name: "category", label: "Category", type: "select", options: ["Data Science", "Data Analytics", "AI/ML", "Full-Stack"] },
      { name: "description", label: "Short description", type: "textarea", required: true },
      { name: "overview", label: "Long description / overview", type: "textarea" },
      { name: "problem", label: "Problem", type: "textarea" },
      { name: "solution", label: "Solution", type: "textarea" },
      { name: "features", label: "Features", type: "tags" },
      { name: "technologies", label: "Technologies", type: "tags" },
      { name: "development", label: "Development details", type: "textarea" },
      { name: "learnings", label: "Key learnings", type: "tags" },
      { name: "image_url", label: "Cover image", type: "image" },
      { name: "image_alt", label: "Cover image description", type: "text" },
      { name: "screenshots", label: "Screenshots", type: "images" },
      { name: "github_url", label: "GitHub URL", type: "url" },
      { name: "live_url", label: "Live URL", type: "url" },
    ],
  },
  {
    key: "certifications", table: "certifications", label: "Certifications", singular: "Certification",
    columns: [{ name: "title", label: "Title" }, { name: "issuer", label: "Issuer" }, { name: "category", label: "Category" }],
    searchFields: ["title", "issuer", "category", "credential_id"],
    fields: [
      { name: "title", label: "Title", type: "text", required: true },
      { name: "issuer", label: "Issuer", type: "text" },
      { name: "date_label", label: "Date", type: "text" },
      { name: "credential_id", label: "Credential ID", type: "text" },
      { name: "category", label: "Category", type: "select", options: ["DATA", "AI-ML", "DEVELOPMENT", "CLOUD", "OTHER"] },
      { name: "description", label: "Description", type: "textarea" },
      { name: "tags", label: "Tags", type: "tags" },
      { name: "image_url", label: "Certificate image", type: "image" },
      { name: "image_alt", label: "Image description", type: "text" },
      { name: "credential_url", label: "Credential URL", type: "url" },
    ],
  },
  {
    key: "experience", table: "experiences", label: "Experience", singular: "Experience",
    columns: [{ name: "title", label: "Title" }, { name: "organization", label: "Organization" }, { name: "date_range", label: "Dates" }],
    searchFields: ["title", "organization", "role", "type"],
    fields: [
      { name: "title", label: "Title", type: "text", required: true },
      { name: "organization", label: "Organization", type: "text" },
      { name: "role", label: "Role", type: "text" },
      { name: "type", label: "Type", type: "text", hint: "e.g. Internship, Freelance" },
      { name: "date_range", label: "Date range", type: "text" },
      { name: "location", label: "Location", type: "text" },
      { name: "description", label: "Description", type: "textarea" },
      { name: "responsibilities", label: "Responsibilities", type: "tags" },
      { name: "technologies", label: "Technologies", type: "tags" },
      { name: "image_url", label: "Image", type: "image" },
      { name: "image_alt", label: "Image description", type: "text" },
      { name: "link_url", label: "Link", type: "url" },
    ],
  },
  {
    key: "skills", table: "skills", label: "Skills", singular: "Skill category",
    columns: [{ name: "title", label: "Category" }, { name: "description", label: "Description" }],
    searchFields: ["title", "description"],
    fields: [
      { name: "title", label: "Category name", type: "text", required: true },
      { name: "description", label: "Short description", type: "textarea" },
      { name: "skills", label: "Skills", type: "tags" },
      { name: "image_url", label: "Image", type: "image" },
      { name: "image_alt", label: "Image description", type: "text" },
    ],
  },
  {
    key: "achievements", table: "achievements", label: "Achievements", singular: "Achievement",
    columns: [{ name: "title", label: "Title" }, { name: "organization", label: "Organization" }, { name: "category", label: "Category" }],
    searchFields: ["title", "organization", "category"],
    fields: [
      { name: "title", label: "Title", type: "text", required: true },
      { name: "organization", label: "Organization", type: "text" },
      { name: "date_label", label: "Date", type: "text" },
      { name: "category", label: "Category", type: "select", options: ["ACADEMIC", "TECHNICAL", "COMMUNITY", "OTHER"] },
      { name: "description", label: "Description", type: "textarea" },
      { name: "tags", label: "Tags", type: "tags" },
      { name: "image_url", label: "Image", type: "image" },
      { name: "image_alt", label: "Image description", type: "text" },
      { name: "link_url", label: "Link URL", type: "url" },
      { name: "link_label", label: "Link label", type: "text" },
    ],
  },
  {
    key: "art", table: "artworks", label: "Art", singular: "Artwork",
    columns: [{ name: "title", label: "Title" }, { name: "category", label: "Category" }, { name: "year", label: "Year" }],
    searchFields: ["title", "category", "medium"],
    fields: [
      { name: "title", label: "Title", type: "text", required: true },
      { name: "category", label: "Category", type: "select", options: ["DIGITAL", "SKETCH", "EXPERIMENTAL"] },
      { name: "medium", label: "Medium", type: "text" },
      { name: "year", label: "Year", type: "text" },
      { name: "description", label: "Description", type: "textarea" },
      { name: "tags", label: "Tags", type: "tags" },
      { name: "image_url", label: "Artwork image", type: "image" },
      { name: "image_alt", label: "Image description", type: "text" },
    ],
  },
];

export const slugify = (v: string) => v.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 80);
