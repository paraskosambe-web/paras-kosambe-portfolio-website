import { useQuery } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Award, Briefcase, FolderKanban, Image, Mail, Sparkles, Star, Trophy } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

type CountTable = "projects" | "certifications" | "experiences" | "skills" | "achievements" | "artworks" | "contact_submissions";

async function count(table: CountTable, filter?: [string, boolean]) {
  let q = supabase.from(table).select("id", { count: "exact", head: true });
  if (filter) q = q.eq(filter[0] as never, filter[1] as never);
  const { count: c, error } = await q;
  if (error) throw error;
  return c ?? 0;
}

const cards = [
  { label: "Projects", section: "projects", icon: FolderKanban, q: () => count("projects") },
  { label: "Featured projects", section: "projects", icon: Star, q: () => count("projects", ["featured", true]) },
  { label: "Skills", section: "skills", icon: Sparkles, q: () => count("skills") },
  { label: "Experience", section: "experience", icon: Briefcase, q: () => count("experiences") },
  { label: "Certifications", section: "certifications", icon: Award, q: () => count("certifications") },
  { label: "Achievements", section: "achievements", icon: Trophy, q: () => count("achievements") },
  { label: "Artworks", section: "art", icon: Image, q: () => count("artworks") },
  { label: "Unread messages", section: "messages", icon: Mail, q: () => count("contact_submissions", ["is_read", false]) },
] as const;

export function AdminDashboard() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["admin", "dashboard"],
    queryFn: () => Promise.all(cards.map((c) => c.q())),
  });
  return (
    <section>
      <div className="admin-head">
        <div>
          <span className="admin-eyebrow">Overview</span>
          <h1>Dashboard</h1>
          <p className="admin-dash-sub">Snapshot of everything published on your portfolio. Select a card to manage it.</p>
        </div>
      </div>
      {error ? <p className="admin-error">Counts could not be loaded.</p> : null}
      <div className="admin-dash-grid">
        {cards.map((c, i) => (
          <motion.div key={c.label} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05, duration: 0.4 }}>
            <Link to="/admin/$section" params={{ section: c.section }} className="admin-dash-card" aria-busy={isLoading}>
              <div className="admin-dash-top"><span>{c.label}</span><i><c.icon /></i></div>
              <strong>{data ? data[i] : "–"}</strong>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
