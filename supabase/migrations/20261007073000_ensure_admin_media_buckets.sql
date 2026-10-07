-- Admin image and resume uploads use these buckets. Preserve any existing
-- bucket configuration while ensuring a fresh Supabase project has both.
INSERT INTO storage.buckets (id, name, public)
VALUES
  ('portfolio-images', 'portfolio-images', true),
  ('resumes', 'resumes', true)
ON CONFLICT (id) DO NOTHING;
