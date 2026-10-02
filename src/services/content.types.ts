import type { Tables } from "@/integrations/supabase/types";

export interface PortfolioData {
  projects: Tables<"projects">[];
  certifications: Tables<"certifications">[];
  experiences: Tables<"experiences">[];
  skills: Tables<"skills">[];
  achievements: Tables<"achievements">[];
  artworks: Tables<"artworks">[];
  resume: Tables<"resumes"> | null;
  site: Tables<"site_content"> | null;
  socials: Tables<"social_links">[];
}
