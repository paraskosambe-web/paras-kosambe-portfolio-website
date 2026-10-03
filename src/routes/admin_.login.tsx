import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { useServerFn } from "@tanstack/react-start";
import { supabase } from "@/integrations/supabase/client";
import { createFirstAdmin, getAdminSetupState } from "@/lib/admin/setup.functions";
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
  const getState = useServerFn(getAdminSetupState);
  const createAdmin = useServerFn(createFirstAdmin);
  const [setupMode, setSetupMode] = useState(false);
  const form = useForm<Values>({ resolver: zodResolver(schema), defaultValues: { email: "", password: "" } });

  useEffect(() => {
    getState().then((s) => setSetupMode(!s.adminExists)).catch(() => undefined);
  }, [getState]);

  const onSubmit = form.handleSubmit(async (values) => {
    try {
      if (setupMode) {
        if (values.password.length < 10) { form.setError("password", { message: "Use at least 10 characters" }); return; }
        await createAdmin({ data: values });
      }
      const { error } = await supabase.auth.signInWithPassword(values);
      if (error) throw error;
      const { data: user } = await supabase.auth.getUser();
      const { data: isAdmin } = await supabase.rpc("has_role", { _user_id: user.user?.id ?? "", _role: "admin" });
      if (!isAdmin) { await supabase.auth.signOut(); throw new Error("This account does not have admin access."); }
      navigate({ to: "/admin", replace: true });
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Sign in failed");
    }
  });

  const err = form.formState.errors;
  return (
    <main className="admin-login">
      <form onSubmit={onSubmit} className="admin-login-card" noValidate>
        <span className="admin-eyebrow">PK / Admin</span>
        <h1>{setupMode ? "Create admin account" : "Sign in"}</h1>
        {setupMode ? <p className="text-sm text-muted-foreground">No admin exists yet. The first account created here becomes the only admin; sign-ups are closed afterwards.</p> : null}
        <div className="admin-field"><Label htmlFor="email">Email</Label><Input id="email" type="email" autoComplete="email" aria-invalid={!!err.email} {...form.register("email")} />{err.email ? <p className="admin-error">{err.email.message}</p> : null}</div>
        <div className="admin-field"><Label htmlFor="password">Password</Label><Input id="password" type="password" autoComplete={setupMode ? "new-password" : "current-password"} aria-invalid={!!err.password} {...form.register("password")} />{err.password ? <p className="admin-error">{err.password.message}</p> : null}</div>
        <Button type="submit" disabled={form.formState.isSubmitting}>{form.formState.isSubmitting ? "Please wait…" : setupMode ? "Create and sign in" : "Sign in"}</Button>
      </form>
    </main>
  );
}
