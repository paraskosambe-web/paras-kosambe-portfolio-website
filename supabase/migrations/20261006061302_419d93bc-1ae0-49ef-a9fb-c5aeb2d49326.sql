CREATE TABLE public.contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL CHECK (char_length(name) BETWEEN 2 AND 80),
  email text NOT NULL CHECK (char_length(email) BETWEEN 3 AND 255),
  interest text NOT NULL DEFAULT '' CHECK (char_length(interest) <= 80),
  message text NOT NULL CHECK (char_length(message) BETWEEN 10 AND 1000),
  is_read boolean NOT NULL DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT INSERT ON public.contact_submissions TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.contact_submissions TO authenticated;
GRANT ALL ON public.contact_submissions TO service_role;
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can submit" ON public.contact_submissions FOR INSERT TO anon, authenticated WITH CHECK (is_read = false);
CREATE POLICY "Admin read" ON public.contact_submissions FOR SELECT TO authenticated USING (has_role(auth.uid(), 'admin'));
CREATE POLICY "Admin update" ON public.contact_submissions FOR UPDATE TO authenticated USING (has_role(auth.uid(), 'admin')) WITH CHECK (has_role(auth.uid(), 'admin'));
CREATE POLICY "Admin delete" ON public.contact_submissions FOR DELETE TO authenticated USING (has_role(auth.uid(), 'admin'));
CREATE TRIGGER update_contact_submissions_updated_at BEFORE UPDATE ON public.contact_submissions FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();