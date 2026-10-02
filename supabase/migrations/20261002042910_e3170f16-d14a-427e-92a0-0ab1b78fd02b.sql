CREATE TYPE public.app_role AS ENUM ('admin');

CREATE TABLE public.user_roles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL,
  role public.app_role NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (user_id, role)
);
GRANT SELECT ON public.user_roles TO authenticated;
GRANT ALL ON public.user_roles TO service_role;
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users read own roles" ON public.user_roles FOR SELECT TO authenticated USING (auth.uid() = user_id);

CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role public.app_role)
RETURNS boolean LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT EXISTS (SELECT 1 FROM public.user_roles WHERE user_id = _user_id AND role = _role)
$$;

CREATE OR REPLACE FUNCTION public.admin_exists()
RETURNS boolean LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT EXISTS (SELECT 1 FROM public.user_roles WHERE role = 'admin')
$$;
GRANT EXECUTE ON FUNCTION public.admin_exists() TO anon, authenticated;

CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS trigger LANGUAGE plpgsql SET search_path = public AS $$
BEGIN NEW.updated_at = now(); RETURN NEW; END; $$;

CREATE TABLE public.projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text NOT NULL UNIQUE,
  title text NOT NULL,
  category text NOT NULL DEFAULT 'Data Science',
  description text NOT NULL DEFAULT '',
  overview text NOT NULL DEFAULT '',
  problem text NOT NULL DEFAULT '',
  solution text NOT NULL DEFAULT '',
  features text[] NOT NULL DEFAULT '{}',
  technologies text[] NOT NULL DEFAULT '{}',
  development text NOT NULL DEFAULT '',
  learnings text[] NOT NULL DEFAULT '{}',
  image_url text NOT NULL DEFAULT '',
  image_alt text NOT NULL DEFAULT '',
  screenshots text[] NOT NULL DEFAULT '{}',
  github_url text NOT NULL DEFAULT '',
  live_url text NOT NULL DEFAULT '',
  sort_order int NOT NULL DEFAULT 0,
  featured boolean NOT NULL DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE public.certifications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  issuer text NOT NULL DEFAULT '',
  date_label text NOT NULL DEFAULT '',
  credential_id text NOT NULL DEFAULT '',
  category text NOT NULL DEFAULT 'OTHER',
  description text NOT NULL DEFAULT '',
  tags text[] NOT NULL DEFAULT '{}',
  image_url text NOT NULL DEFAULT '',
  image_alt text NOT NULL DEFAULT '',
  credential_url text NOT NULL DEFAULT '',
  sort_order int NOT NULL DEFAULT 0,
  featured boolean NOT NULL DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE public.experiences (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  organization text NOT NULL DEFAULT '',
  role text NOT NULL DEFAULT '',
  type text NOT NULL DEFAULT '',
  date_range text NOT NULL DEFAULT '',
  location text NOT NULL DEFAULT '',
  description text NOT NULL DEFAULT '',
  responsibilities text[] NOT NULL DEFAULT '{}',
  technologies text[] NOT NULL DEFAULT '{}',
  image_url text NOT NULL DEFAULT '',
  image_alt text NOT NULL DEFAULT '',
  link_url text NOT NULL DEFAULT '',
  sort_order int NOT NULL DEFAULT 0,
  featured boolean NOT NULL DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE public.skills (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL DEFAULT '',
  skills text[] NOT NULL DEFAULT '{}',
  image_url text NOT NULL DEFAULT '',
  image_alt text NOT NULL DEFAULT '',
  sort_order int NOT NULL DEFAULT 0,
  featured boolean NOT NULL DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE public.achievements (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  organization text NOT NULL DEFAULT '',
  date_label text NOT NULL DEFAULT '',
  category text NOT NULL DEFAULT 'OTHER',
  description text NOT NULL DEFAULT '',
  tags text[] NOT NULL DEFAULT '{}',
  image_url text NOT NULL DEFAULT '',
  image_alt text NOT NULL DEFAULT '',
  link_url text NOT NULL DEFAULT '',
  link_label text NOT NULL DEFAULT '',
  sort_order int NOT NULL DEFAULT 0,
  featured boolean NOT NULL DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE public.artworks (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  category text NOT NULL DEFAULT 'DIGITAL',
  medium text NOT NULL DEFAULT '',
  year text NOT NULL DEFAULT '',
  description text NOT NULL DEFAULT '',
  tags text[] NOT NULL DEFAULT '{}',
  image_url text NOT NULL DEFAULT '',
  image_alt text NOT NULL DEFAULT '',
  sort_order int NOT NULL DEFAULT 0,
  featured boolean NOT NULL DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE public.resumes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL DEFAULT 'Resume',
  file_url text NOT NULL,
  file_path text NOT NULL DEFAULT '',
  updated_label text NOT NULL DEFAULT '',
  is_active boolean NOT NULL DEFAULT false,
  sort_order int NOT NULL DEFAULT 0,
  featured boolean NOT NULL DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
CREATE UNIQUE INDEX resumes_one_active ON public.resumes (is_active) WHERE is_active;

CREATE TABLE public.site_content (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  key text NOT NULL UNIQUE DEFAULT 'main',
  hero_eyebrow text NOT NULL DEFAULT '',
  hero_first_name text NOT NULL DEFAULT '',
  hero_last_name text NOT NULL DEFAULT '',
  hero_role text NOT NULL DEFAULT '',
  hero_disciplines text NOT NULL DEFAULT '',
  hero_description text NOT NULL DEFAULT '',
  about_intro text NOT NULL DEFAULT '',
  about_bio text[] NOT NULL DEFAULT '{}',
  about_image_url text NOT NULL DEFAULT '',
  about_image_alt text NOT NULL DEFAULT '',
  education_degree text NOT NULL DEFAULT '',
  education_institution text NOT NULL DEFAULT '',
  education_status text NOT NULL DEFAULT '',
  currently text[] NOT NULL DEFAULT '{}',
  looking_for text NOT NULL DEFAULT '',
  contact_email text NOT NULL DEFAULT '',
  whatsapp_number text NOT NULL DEFAULT '',
  art_portfolio_url text NOT NULL DEFAULT '',
  sort_order int NOT NULL DEFAULT 0,
  featured boolean NOT NULL DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE public.social_links (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  platform text NOT NULL UNIQUE,
  label text NOT NULL,
  url text NOT NULL DEFAULT '',
  sort_order int NOT NULL DEFAULT 0,
  featured boolean NOT NULL DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

DO $$
DECLARE t text;
BEGIN
  FOREACH t IN ARRAY ARRAY['projects','certifications','experiences','skills','achievements','artworks','resumes','site_content','social_links'] LOOP
    EXECUTE format('GRANT SELECT ON public.%I TO anon, authenticated', t);
    EXECUTE format('GRANT INSERT, UPDATE, DELETE ON public.%I TO authenticated', t);
    EXECUTE format('GRANT ALL ON public.%I TO service_role', t);
    EXECUTE format('ALTER TABLE public.%I ENABLE ROW LEVEL SECURITY', t);
    IF t = 'resumes' THEN
      EXECUTE 'CREATE POLICY "Public reads active resume" ON public.resumes FOR SELECT USING (is_active OR public.has_role(auth.uid(), ''admin''))';
    ELSE
      EXECUTE format('CREATE POLICY "Public read" ON public.%I FOR SELECT USING (true)', t);
    END IF;
    EXECUTE format('CREATE POLICY "Admin insert" ON public.%I FOR INSERT TO authenticated WITH CHECK (public.has_role(auth.uid(), ''admin''))', t);
    EXECUTE format('CREATE POLICY "Admin update" ON public.%I FOR UPDATE TO authenticated USING (public.has_role(auth.uid(), ''admin'')) WITH CHECK (public.has_role(auth.uid(), ''admin''))', t);
    EXECUTE format('CREATE POLICY "Admin delete" ON public.%I FOR DELETE TO authenticated USING (public.has_role(auth.uid(), ''admin''))', t);
    EXECUTE format('CREATE TRIGGER update_%s_updated_at BEFORE UPDATE ON public.%I FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column()', t, t);
    IF t NOT IN ('site_content') THEN
      EXECUTE format('CREATE INDEX %s_sort_idx ON public.%I (sort_order)', t, t);
    END IF;
  END LOOP;
END $$;

-- Storage policies (buckets created separately)
CREATE POLICY "Public read portfolio media" ON storage.objects FOR SELECT USING (bucket_id IN ('portfolio-images','resumes'));
CREATE POLICY "Admin upload portfolio media" ON storage.objects FOR INSERT TO authenticated WITH CHECK (bucket_id IN ('portfolio-images','resumes') AND public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admin update portfolio media" ON storage.objects FOR UPDATE TO authenticated USING (bucket_id IN ('portfolio-images','resumes') AND public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admin delete portfolio media" ON storage.objects FOR DELETE TO authenticated USING (bucket_id IN ('portfolio-images','resumes') AND public.has_role(auth.uid(), 'admin'));

-- Seed
INSERT INTO public.projects (slug, title, category, description, overview, problem, solution, features, technologies, development, learnings, image_url, image_alt, screenshots, github_url, live_url, sort_order, featured)
SELECT 'project-0'||n, 'Project 0'||n, (ARRAY['Data Science','Data Analytics','AI/ML','Full-Stack','Data Science','Data Analytics'])[n],
 'A clearly labeled placeholder case study awaiting verified project context, implementation details and outcomes.',
 'A structured placeholder for a future case study, designed to document context, process and measurable results.',
 'The verified project problem and its real-world constraints will be documented here when final details are available.',
 'The final solution narrative will explain the approach, important decisions and how the work addresses the stated problem.',
 ARRAY['Defined project scope','Documented implementation process','Clear outcome reporting','Reproducible technical workflow'],
 (ARRAY[ARRAY['Python','Pandas','Scikit-learn','Jupyter'],ARRAY['SQL','Power BI','Excel','Python'],ARRAY['Python','TensorFlow','NLP','FastAPI'],ARRAY['React','TypeScript','Node.js','PostgreSQL'],ARRAY['Python','NumPy','Statistics','Matplotlib'],ARRAY['SQL','Tableau','Pandas','Excel']])[n:n][1:4],
 'Development details will cover research, architecture, iteration, testing and deployment without overstating unverified outcomes.',
 ARRAY['Translate an open problem into testable steps','Document decisions alongside implementation','Evaluate results against the original goal'],
 '/media/projects/project-0'||n||'.png', 'Locally generated grayscale visual for Project 0'||n,
 ARRAY['/media/projects/project-0'||n||'.png','/media/projects/project-0'||n||'.png','/media/projects/project-0'||n||'.png'],
 'https://github.com/paraskosambe-web', '/projects/project-0'||n, n, n <= 3
FROM generate_series(1,6) n;

INSERT INTO public.certifications (title, issuer, date_label, credential_id, category, description, tags, image_url, image_alt, sort_order, featured)
SELECT 'Placeholder','Issuer placeholder','Date placeholder','Credential ID placeholder', c,
 'A clearly labeled placeholder awaiting verified certificate and issuer information.', ARRAY[c,'Credential pending'],
 '/media/projects/project-0'||n||'.png', 'Generated grayscale placeholder for certification '||n, n, n <= 3
FROM (SELECT n, (ARRAY['DATA','AI-ML','DEVELOPMENT','CLOUD','OTHER','DATA'])[n] c FROM generate_series(1,6) n) s;

INSERT INTO public.experiences (title, organization, role, type, date_range, location, description, responsibilities, technologies, image_alt, sort_order, featured)
SELECT 'Placeholder','Organization placeholder','Role placeholder','Type placeholder','Date range placeholder','Location placeholder',
 'A clearly labeled placeholder awaiting verified organization, role, contribution and outcome details.',
 ARRAY['Responsibility placeholder awaiting verified details.','Contribution placeholder awaiting verified details.','Outcome placeholder awaiting verified details.'],
 ARRAY['Technology placeholder','Tool placeholder','Method placeholder'], 'Placeholder visual for experience record '||n, n, true
FROM generate_series(1,3) n;

INSERT INTO public.skills (title, description, skills, image_alt, sort_order, featured) VALUES
('Data Science','Methods for exploring data, testing assumptions and building reproducible models.', ARRAY['Python','Pandas','NumPy','Statistics','Scikit-learn','EDA','Feature Engineering','Jupyter'],'Data Science skill category',1,true),
('Data Analytics','Tools for querying, cleaning and communicating information for clearer decisions.', ARRAY['SQL','Excel','Power BI','Tableau','Data Cleaning','Dashboards','Reporting'],'Data Analytics skill category',2,true),
('AI/ML','Applied workflows for training, evaluating and integrating intelligent systems.', ARRAY['Machine Learning','TensorFlow','NLP','Model Evaluation','Deep Learning','Prompting'],'AI/ML skill category',3,true),
('Full-Stack','Modern application foundations from accessible interfaces to reliable APIs.', ARRAY['React','TypeScript','Node.js','REST APIs','HTML','CSS','PostgreSQL','Git'],'Full-Stack skill category',4,true),
('Tools','Everyday tools for analysis, building, iteration and team collaboration.', ARRAY['Git','GitHub','VS Code','Jupyter','Figma','Docker','Postman'],'Tools skill category',5,true);

INSERT INTO public.achievements (title, organization, date_label, category, description, tags, image_alt, sort_order, featured)
SELECT 'Placeholder','Organization placeholder','Date placeholder', c,
 'A clearly labeled placeholder awaiting a verified milestone, supporting context and outcome.', ARRAY[c,'Details pending'],
 'Placeholder visual for achievement '||n, n, true
FROM (SELECT n, (ARRAY['ACADEMIC','TECHNICAL','COMMUNITY'])[n] c FROM generate_series(1,3) n) s;

INSERT INTO public.artworks (title, category, medium, year, description, tags, image_url, image_alt, sort_order, featured)
SELECT 'Artwork placeholder 0'||n, c, 'Medium placeholder', '2026',
 'A locally generated color study holding space for verified original artwork and its story.', ARRAY[c,'Artwork pending'],
 '/media/art/art-0'||n||'.png', 'Color artwork placeholder '||n, n, n <= 3
FROM (SELECT n, (ARRAY['DIGITAL','SKETCH','EXPERIMENTAL','DIGITAL','SKETCH','EXPERIMENTAL'])[n] c FROM generate_series(1,6) n) s;

INSERT INTO public.resumes (title, file_url, updated_label, is_active) VALUES ('Placeholder resume','/resume.pdf','October 2026',true);

INSERT INTO public.site_content (key, hero_eyebrow, hero_first_name, hero_last_name, hero_role, hero_disciplines, hero_description, about_intro, about_bio, about_image_alt, education_degree, education_institution, education_status, currently, looking_for, contact_email, whatsapp_number, art_portfolio_url)
VALUES ('main','ASPIRING DATA SCIENTIST','PARAS','KOSAMBE','Data Science','Data Analytics · AI/ML · Full-Stack Development',
 'I build data-driven systems, intelligent applications, and scalable digital experiences.',
 'Final-year B.Sc. Computer Science student at the University of Mumbai, interested in Data Science, Data Analytics, AI/ML and Full-Stack Development.',
 ARRAY['I am a final-year B.Sc. Computer Science student at the University of Mumbai, developing a practical foundation across data science, analytics, artificial intelligence and software engineering.',
 'My work is driven by curiosity: understanding how information becomes insight, how models become useful tools, and how thoughtful interfaces make complex systems easier to use.',
 'I enjoy moving between analysis and implementation—exploring a problem, structuring the data, testing an approach and shaping the result into a clear digital experience.'],
 'Portrait of Paras Kosambe','B.Sc. Computer Science','University of Mumbai','Final year',
 ARRAY['Building practical data science projects','Strengthening machine learning fundamentals','Exploring scalable full-stack systems'],
 'Opportunities to contribute to meaningful data, analytics, AI/ML or full-stack work while learning from experienced teams and solving real problems.',
 '','919137935311','');

INSERT INTO public.social_links (platform, label, url, sort_order) VALUES
('github','GitHub','https://github.com/paraskosambe-web',1),
('linkedin','LinkedIn','https://www.linkedin.com/in/paras-kosambe',2),
('instagram','Instagram','',3);