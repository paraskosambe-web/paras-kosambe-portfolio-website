import { Link, Outlet, useNavigate } from "@tanstack/react-router";
import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import {
  LogOut, Menu, X, ExternalLink, LayoutGrid, FolderKanban, Award, Briefcase,
  Sparkles, Trophy, FileText, Image, User, Link2, Mail, Settings,
} from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

export const adminNav = [
  { to: "/admin", label: "Dashboard", icon: LayoutGrid },
  { to: "/admin/projects", label: "Projects", icon: FolderKanban },
  { to: "/admin/certifications", label: "Certifications", icon: Award },
  { to: "/admin/experience", label: "Experience", icon: Briefcase },
  { to: "/admin/skills", label: "Skills", icon: Sparkles },
  { to: "/admin/achievements", label: "Achievements", icon: Trophy },
  { to: "/admin/resume", label: "Resume", icon: FileText },
  { to: "/admin/art", label: "Art", icon: Image },
  { to: "/admin/about", label: "About", icon: User },
  { to: "/admin/social-links", label: "Social Links", icon: Link2 },
  { to: "/admin/messages", label: "Messages", icon: Mail },
  { to: "/admin/settings", label: "Settings", icon: Settings },
] as const;

function Brand() {
  return (
    <div className="admin-brand-block">
      <span className="admin-brand-mark">PK</span>
      <div className="admin-brand-text">
        <strong>PARAS KOSAMBE</strong>
        <span>Portfolio Console</span>
      </div>
    </div>
  );
}

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
        <Brand />
        <button type="button" className="admin-menu-btn" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen((v) => !v)}>{open ? <X /> : <Menu />}</button>
      </header>
      <aside className={`admin-sidebar ${open ? "is-open" : ""}`}>
        <div className="admin-sidebar-head">
          <Brand />
          <span className="admin-console-tag">Admin Console</span>
        </div>
        <nav>
          {adminNav.map((item) => (
            <Link key={item.to} to={item.to === "/admin" ? "/admin" : "/admin/$section"} params={item.to === "/admin" ? {} : { section: item.to.slice(7) }} activeOptions={{ exact: true }} activeProps={{ className: "is-active" }} onClick={() => setOpen(false)}>
              <item.icon />
              <span>{item.label}</span>
            </Link>
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
