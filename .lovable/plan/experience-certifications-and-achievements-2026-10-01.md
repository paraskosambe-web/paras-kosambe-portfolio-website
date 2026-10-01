# Experience, Certifications, and Achievements

## Build
- Add typed service-backed placeholder data and labels for all three pages.
- Create one shared equal-height card presentation and consistent three-column responsive grids.
- Build Experience with a card-triggered detail dialog for responsibilities and technologies.
- Build Certifications with category filters, nine-item pagination, credential links, and image lightboxes.
- Build Achievements with category filters and optional external links.
- Add distinct route metadata for `/experience`, `/certifications`, and `/achievements`.

## Interaction and visual behavior
- Keep all cards identical in dimensions at each breakpoint, with clamped text, pinned actions, staggered reveals, and the same image/border/title/arrow hover language as Projects.
- Use only clearly marked placeholder organizations, credentials, and achievements.
- Verify each page at desktop and mobile widths, including filters, dialogs, lightboxes, links, and overflow.

## Technical details
- Extend the existing typed content model, mock service, shared `PortfolioCard`, and monochrome token-based styles.
- Use the existing dialog primitives and Motion layout transitions; no new storage or backend work.