# Paras Kosambe Portfolio

Project: premium monochrome portfolio for Paras Kosambe, an aspiring Data Scientist (also Data Analytics, AI/ML, Full-Stack Development). Data Science is the primary identity.

Stack: React, TypeScript, Vite, Tailwind, React Router, Motion (motion/react), Lenis, Lucide icons, shadcn/ui only where useful, react-hook-form + zod. No GSAP.

Design rules:

- Palette only: #000, #0A0A0A, #111, #1A1A1A, #262626, #525252, #737373, #A3A3A3, #D4D4D4, #F5F5F5, #FFF as CSS variables/Tailwind tokens. Dark theme. No blue/purple/gradients/glows/glassmorphism/particles.

- Fonts: Inter Tight (headings, heavy, tight tracking), Inter (body), JetBrains Mono (small labels). Fluid type with clamp().

- Sharp corners (max 2px radius), 1px #262626 borders, generous spacing, max content width 1360px.

- Editorial, cinematic, minimal. Not a SaaS template.

Architecture rules:

- Multi-page site. The home page is a SHORT OVERVIEW of every section (max 3 preview cards each + a "View all" button). Each section has its own full page/route.

- ALL cards (projects, certifications, experience, achievements, skills, art) use ONE shared PortfolioCard shell with identical fixed dimensions everywhere: same image aspect ratio (16:10), same height (grid auto-rows-fr, h-full flex column), title line-clamp-2, description line-clamp-3, max 3 tags then "+N", action row pinned to the bottom. No featured card is ever bigger. Same size on home and on full pages, on every breakpoint.

- Grid: 1 col mobile, 2 tablet, 3 desktop.

- All content comes from typed service functions in src/services (mock data first, Supabase later). Never hardcode content in JSX.

- Animate only transform/opacity, respect prefers-reduced-motion, no sliders/carousels/horizontal scroll.

- Never invent companies, credentials or achievements; use clearly labeled placeholders.

- GitHub: https://github.com/paraskosambe-web

- LinkedIn: www.linkedin.com/in/paras-kosambe

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://paras-kosambe.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/e41028ad-5804-4c23-bd80-223946e943a0).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
