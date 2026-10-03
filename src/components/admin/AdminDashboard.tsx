import { useQuery } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";
import { supabase } from "@/integrations/supabase/client";

type CountTable = "projects" | "certifications" | "experiences" | "skills" | "achievements";

async function count(table: CountTable, featuredOnly = false) {
  let q = supabase.from(table).select("id", { count: "exact", head: true });
  if (featuredOnly) q = q.eq("featured", true);
  const { count: c, error } = await q;
  if (error) throw error;
  return c ?? 0;
}

export function AdminDashboard() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["admin", "dashboard"],
    queryFn: async () => {
      const [projects, featured, certifications, experience, skills, achievements] = await Promise.all([
        count("projects"), count("projects", true), count("certifications"), count("experiences"), count("skills"), count("achievements"),
      ]);
      return [
        { label: "Projects", value: projects, to: "/admin/projects" },
        { label: "Featured projects", value: featured, to: "/admin/projects" },
        { label: "Certifications", value: certifications, to: "/admin/certifications" },
        { label: "Experience", value: experience, to: "/admin/experience" },
        { label: "Skills", value: skills, to: "/admin/skills" },
        { label: "Achievements", value: achievements, to: "/admin/achievements" },
      ] as const;
    },
  });
  return (
    <section>
      <div className="admin-head"><div><span className="admin-eyebrow">Overview</span><h1>Dashboard</h1></div></div>
      {error ? <p className="admin-error">Counts could not be loaded.</p> : null}
      <div className="admin-stats">
        {(data ?? Array.from({ length: 6 }, (_, i) => ({ label: "…", value: "–", to: "/admin" as const, k: i }))).map((s, i) => (
          <Link key={i} to={s.to} className="admin-stat" aria-busy={isLoading}>
            <span>{s.label}</span><strong>{s.value}</strong>
          </Link>
        ))}
      </div>
    </section>
  );
}
