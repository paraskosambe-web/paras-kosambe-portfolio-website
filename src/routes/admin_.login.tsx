import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, Eye, EyeOff, LockKeyhole, LoaderCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/admin_/login")({
  ssr: false,
  head: () => ({ meta: [
    { title: "Admin sign in — Paras Kosambe" }, { name: "description", content: "Sign in to manage the portfolio." },
    { property: "og:title", content: "Admin sign in — Paras Kosambe" }, { property: "og:description", content: "Portfolio administration." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" }, { name: "robots", content: "noindex" },
  ] }),
  component: AdminLogin,
});

const schema = z.object({ email: z.string().trim().email("Enter a valid email").max(255), password: z.string().min(6, "Password is too short").max(128) });
type Values = z.infer<typeof schema>;

function AdminLogin() {
  const navigate = useNavigate();
  const reducedMotion = useReducedMotion();
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState("");
  const form = useForm<Values>({ resolver: zodResolver(schema), defaultValues: { email: "", password: "" } });

  const onSubmit = form.handleSubmit(async (values) => {
    setLoginError("");
    try {
      const { error } = await supabase.auth.signInWithPassword(values);
      if (error) throw new Error("Unable to sign in. Check your admin email and password.");
      const { data, error: userError } = await supabase.auth.getUser();
      if (userError || !data.user) throw new Error("Unable to verify your account. Please try again.");
      const { data: isAdmin, error: roleError } = await supabase.rpc("has_role", { _user_id: data.user.id, _role: "admin" });
      if (roleError || !isAdmin) { await supabase.auth.signOut(); throw new Error("This account does not have admin access."); }
      await navigate({ to: "/admin", replace: true });
    } catch (error) {
      const message = error instanceof Error ? error.message : "Sign in failed. Please try again.";
      setLoginError(message);
      toast.error(message);
    }
  });

  const err = form.formState.errors;
  return (
    <main className="owner-login">
      <motion.section className="owner-login-panel" aria-label="Admin login" initial={reducedMotion ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <div className="owner-login-brand"><span className="owner-monogram">PK<span>↗</span></span><span>PARAS KOSAMBE<span>PORTFOLIO / ADMIN</span></span></div>
        <div className="owner-login-layout">
          <form onSubmit={onSubmit} className="owner-login-form" noValidate>
            <span className="owner-login-eyebrow">PRIVATE WORKSPACE</span>
            <h1>Welcome back<span>.</span></h1>
            <p className="owner-login-intro">Sign in to your portfolio.</p>
            <div className="owner-login-field"><Label htmlFor="email">Admin ID / Email</Label><Input id="email" type="email" placeholder="Your admin email" autoComplete="username" maxLength={255} aria-invalid={!!err.email} aria-describedby={err.email ? "email-error" : undefined} {...form.register("email")} />{err.email ? <p id="email-error" className="owner-login-error">{err.email.message}</p> : null}</div>
            <div className="owner-login-field"><Label htmlFor="password">Password</Label><div className="owner-password"><Input id="password" type={showPassword ? "text" : "password"} placeholder="Enter your password" autoComplete="current-password" maxLength={128} aria-invalid={!!err.password} aria-describedby={err.password ? "password-error" : undefined} {...form.register("password")} /><Button variant="ghost" size="icon" type="button" aria-label={showPassword ? "Hide password" : "Show password"} aria-pressed={showPassword} title={showPassword ? "Hide password" : "Show password"} onClick={() => setShowPassword((v) => !v)}>{showPassword ? <EyeOff /> : <Eye />}</Button></div>{err.password ? <p id="password-error" className="owner-login-error">{err.password.message}</p> : null}</div>
            {loginError ? <p role="alert" className="owner-login-error">{loginError}</p> : null}
            <Button className="owner-login-submit" type="submit" disabled={form.formState.isSubmitting}>{form.formState.isSubmitting ? <>Signing in<LoaderCircle className="animate-spin" /></> : <>Enter workspace<ArrowUpRight /></>}</Button>
            <div className="owner-login-security"><LockKeyhole size={13} />Authorized admin access only</div>
          </form>
          <div className="owner-login-art" aria-hidden="true">
            <span className="owner-art-label">01 / OWNER ACCESS</span>
            <motion.div className="owner-art-monogram" initial={reducedMotion ? false : { opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>PK<span>↗</span></motion.div>
            <div className="owner-art-caption"><span>PARAS KOSAMBE</span><span>Data. Intelligence. Possibility.</span></div>
          </div>
        </div>
        <div className="owner-login-bottom"><span>PARAS PORTFOLIO</span><span>PRIVATE / SECURE</span></div>
      </motion.section>
    </main>
  );
}
