import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowUpRight } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import type { ReactNode } from "react";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { getContactContent } from "@/services/site";
import { siteConfig } from "@/config/site";
import { supabase } from "@/integrations/supabase/client";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Enter at least 2 characters.").max(80, "Use 80 characters or fewer."),
  email: z.string().trim().email("Enter a valid email address.").max(255, "Use 255 characters or fewer."),
  interest: z.enum(["Data Science", "Data Analytics", "AI-ML", "Full-Stack Development", "Collaboration", "Other"]),
  message: z.string().trim().min(10, "Enter at least 10 characters.").max(1000, "Use 1000 characters or fewer."),
  website: z.string().max(0),
});

type ContactValues = z.infer<typeof contactSchema>;

export function ContactPage() {
  const content = getContactContent();
  const { register, handleSubmit, control, reset, watch, formState: { errors, isValid, isSubmitting } } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema), mode: "onChange", defaultValues: { name: "", email: "", interest: "Data Science", message: "", website: "" },
  });
  const messageLength = watch("message").length;

  const submit = (values: ContactValues) => {
    try {
      const parsed = contactSchema.parse(values);
      if (!/^\d+$/.test(siteConfig.whatsapp)) throw new Error("Invalid WhatsApp number");
      const message = `Hi Paras,\n\nName: ${parsed.name}\nEmail: ${parsed.email}\nInterested in: ${parsed.interest}\n\nMessage:\n${parsed.message}\n\nI would like to discuss this opportunity/project with you.`;
      const url = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`;
      if (!values.website) void supabase.from("contact_submissions").insert({ name: parsed.name, email: parsed.email, interest: parsed.interest, message: parsed.message }).then(() => undefined);
      const popup = window.open(url, "_blank", "noopener,noreferrer");
      if (!popup) window.location.assign(url);
      toast.success(content.form.successMessage);
      reset();
    } catch {
      toast.error(content.form.errorMessage);
    }
  };

  return <main className="contact-page"><div className="projects-inner">
    <header className="contact-page-header"><span>{content.eyebrow}</span><h1>{content.title}</h1><p>{content.intro}</p></header>
    <div className="contact-layout">
      <div className="contact-links">{content.links.map((link, index) => <a key={link.label} href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel={link.href.startsWith("http") ? "noreferrer" : undefined} aria-disabled={link.href === "#"} onClick={link.href === "#" ? (event) => event.preventDefault() : undefined}><span>{String(index + 1).padStart(2, "0")} / {link.label}</span><strong>{link.value}</strong><ArrowUpRight /></a>)}</div>
      <form className="contact-form" onSubmit={handleSubmit(submit)} noValidate>
        <div className="honeypot" aria-hidden="true"><label htmlFor="website">Website</label><input id="website" tabIndex={-1} autoComplete="off" {...register("website")} /></div>
        <FormField label={`${content.form.nameLabel}*`} error={errors.name?.message}><Input {...register("name")} aria-invalid={Boolean(errors.name)} maxLength={80} autoComplete="name" /></FormField>
        <FormField label={`${content.form.emailLabel}*`} error={errors.email?.message}><Input {...register("email")} type="email" aria-invalid={Boolean(errors.email)} maxLength={255} autoComplete="email" /></FormField>
        <FormField label={content.form.interestLabel} error={errors.interest?.message}><Controller control={control} name="interest" render={({ field }) => <Select value={field.value} onValueChange={field.onChange}><SelectTrigger aria-invalid={Boolean(errors.interest)}><SelectValue /></SelectTrigger><SelectContent>{content.form.interests.map((interest) => <SelectItem key={interest} value={interest}>{interest}</SelectItem>)}</SelectContent></Select>} /></FormField>
        <FormField label={`${content.form.messageLabel}*`} error={errors.message?.message} counter={`${messageLength} / 1000`}><Textarea {...register("message")} aria-invalid={Boolean(errors.message)} maxLength={1000} rows={8} /></FormField>
        <Button variant="hero" type="submit" disabled={!isValid || isSubmitting}>{content.form.submitLabel}<ArrowUpRight /></Button>
      </form>
    </div>
  </div></main>;
}

function FormField({ label, error, counter, children }: { label: string; error: string | undefined; counter?: string | undefined; children: ReactNode }) {
  return <label className="contact-field"><span>{label}</span>{children}<small>{error ?? counter ?? "\u00a0"}</small></label>;
}