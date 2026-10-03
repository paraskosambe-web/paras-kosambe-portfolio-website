import { Link, Outlet, useNavigate } from "@tanstack/react-router";
import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { LogOut, Menu, X, ExternalLink } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

export const adminNav = [
  { to: "/admin", label: "Dashboard" },
  { to: "/admin/projects", label: "Projects" },
  { to: "/admin/certifications", label: "Certifications" },
  { to: "/admin/experience", label: "Experience" },
  { to: "/admin/skills", label: "Skills" },
  { to: "/admin/achievements", label: "Achievements" },
  { to: "/admin/resume", label: "Resume" },
  { to: "/admin/art", label: "Art" },
  { to: "/admin/about", label: "About" },
  { to: "/admin/social-links", label: "Social Links" },
  { to: "/admin/settings", label: "Settings" },
] as const;

export function AdminShell() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  async function signOut() {
    await queryClient.cancelQueries();
    queryClient.clear();
    await supabase.auth.signOut();
    navigate({ to: "/admin/login", replace: true });
  }

  return (
    <div className="admin-app">
      <header className="admin-topbar">
        <span className="admin-brand">PK / Admin</span>
        <button type="button" className="admin-menu-btn" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen((v) => !v)}>{open ? <X /> : <Menu />}</button>
      </header>
      <aside className={`admin-sidebar ${open ? "is-open" : ""}`}>
        <span className="admin-brand admin-brand-desktop">PK / Admin</span>
        <nav>
          {adminNav.map((item) => (
            <Link key={item.to} to={item.to === "/admin" ? "/admin" : "/admin/$section"} params={item.to === "/admin" ? {} : { section: item.to.slice(7) }} activeOptions={{ exact: true }} activeProps={{ className: "is-active" }} onClick={() => setOpen(false)}>{item.label}</Link>
          ))}
        </nav>
        <div className="admin-sidebar-foot">
          <a href="/" target="_blank" rel="noreferrer"><ExternalLink /> View site</a>
          <button type="button" onClick={signOut}><LogOut /> Sign out</button>
        </div>
      </aside>
      <main className="admin-main"><Outlet /></main>
    </div>
  );
}
