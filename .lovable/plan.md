# Paras Kosambe Portfolio

## Goal
Build a premium monochrome, multi-page portfolio that presents Data Science as Paras Kosambe’s primary identity, with supporting expertise in analytics, AI/ML, and full-stack development.

## Pages
- Home: short introduction plus up to three cards from each portfolio section
- Projects, Skills, Experience, Certifications, Achievements, and Art: full listing pages
- Contact: focused contact form and verified GitHub/LinkedIn links

## Experience
- Shared editorial navigation and footer across every page
- Consistent three/two/one-column grid depending on screen size
- One fixed PortfolioCard design for every content type, with identical media, text, tags, and action alignment
- Subtle entrance and interaction motion using transform and opacity only, disabled when reduced motion is preferred
- Clearly marked placeholder content wherever Paras has not supplied facts

## Technical details
- Keep TanStack Start’s existing router while implementing the requested React/TypeScript/Tailwind experience
- Store all displayed portfolio content behind typed functions in `src/services`
- Add reusable page, navigation, card, grid, and contact-form pieces
- Use semantic monochrome tokens, Inter Tight, Inter, and JetBrains Mono
- Use `motion/react`, Lenis, Lucide, React Hook Form, and Zod where appropriate
- Give every route distinct page metadata and verify desktop and mobile layouts
