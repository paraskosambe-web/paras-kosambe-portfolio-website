# Lovable Cloud portfolio CMS and admin

## Scope
Connect the existing portfolio to Lovable Cloud, preserve the current public presentation and card system, and add a protected monochrome admin workspace for managing every public section.

## Database and security
- Create `app_role` with only `admin`, a private `user_roles` table, and a security-definer `has_role(user_id, role)` helper.
- Create `projects`, `certifications`, `experiences`, `skills`, `achievements`, `artworks`, `resumes`, `site_content`, and `social_links` with UUIDs, timestamps, sort order, featured state, and fields matching the current typed content model.
- Use array/JSON fields where the current model contains tags, lists, screenshots, education, or grouped labels.
- Add a unique project slug and a partial unique index guaranteeing one active resume.
- Grant public read access to portfolio content; expose only the active resume publicly. Allow writes only when the signed-in user has the admin role.
- Add timestamp triggers, useful ordering/search indexes, and storage object policies for public reads plus admin-only uploads, replacements, and deletes.
- Seed every table with the existing clearly labelled placeholder records and site text.

## Authentication and storage
- Enable email/password authentication and disable public registration, anonymous access, and social providers for the admin-only flow.
- Create public `portfolio-images` and `resumes` buckets with sensible file limits.
- Upload the current placeholder images and PDF, then point seeded records at their managed file URLs.
- Add `/admin/login` for email/password sign-in. Protect `/admin/*` through the managed authenticated route boundary plus a server-validated admin-role check.
- Add session-aware sign-out with query cancellation/cache clearing.

## Public data integration
- Replace mock-backed service implementations with typed Lovable Cloud queries and mapping functions.
- Keep the public components’ visual markup, cards, filters, dialogs, forms, and copy contracts unchanged; only the route/data-loading boundary will adapt where asynchronous data is required.
- Preserve loading, error, empty, unknown-project, and active-resume fallback states.
- Ensure changes saved in admin appear on public pages through query invalidation/refetching, without source edits.

## Admin workspace
- Build a restrained monochrome shell with responsive sidebar navigation: Dashboard, Projects, Certifications, Experience, Skills, Achievements, Resume, Art, About, Social Links, Settings.
- Dashboard shows requested counts and featured-project count.
- Shared manager framework: searchable table, featured switch, delete confirmation, image preview/upload, and drag-and-drop ordering persisted to `sort_order`.
- Shared drawer forms use react-hook-form and Zod with inline errors and disabled pending states.
- Projects editor includes auto-slug, category, summaries/details, problem, solution, tag/list editors, cover, screenshots, links, and featured state.
- Certification, experience, skill, achievement, and art editors expose every corresponding public field.
- Resume manager uploads PDFs, activates one resume, previews it, and removes old files/records.
- About editor manages biography, education, current-focus list, opportunity text, and portrait upload/replace preview.
- Social Links and Settings edit all hero/contact/social fields requested.

## Verification
- Verify anonymous reads and blocked anonymous writes, authenticated non-admin denial, admin CRUD, role checks, upload policies, active-resume uniqueness, and persisted ordering.
- Verify public pages render Cloud data with loading/error/empty states.
- Verify admin login, redirects, CRUD drawers, uploads, toggles, deletion, and ordering at desktop and mobile sizes.
- Run database lint/security checks and resolve findings introduced by this work.
