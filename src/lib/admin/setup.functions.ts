import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const schema = z.object({ email: z.string().trim().email().max(255), password: z.string().min(10).max(128) });

/** Public: whether an admin account already exists. */
export const getAdminSetupState = createServerFn({ method: "GET" }).handler(async () => {
  const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
  const { data } = await supabaseAdmin.rpc("admin_exists");
  return { adminExists: data === true };
});

/** One-time bootstrap: only works while no admin exists. */
export const createFirstAdmin = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => schema.parse(d))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { data: exists } = await supabaseAdmin.rpc("admin_exists");
    if (exists) throw new Error("An admin account already exists.");
    const { data: created, error } = await supabaseAdmin.auth.admin.createUser({ email: data.email, password: data.password, email_confirm: true });
    if (error || !created.user) throw new Error(error?.message ?? "Could not create account.");
    const { error: roleError } = await supabaseAdmin.from("user_roles").insert({ user_id: created.user.id, role: "admin" });
    if (roleError) throw new Error(roleError.message);
    return { ok: true };
  });
