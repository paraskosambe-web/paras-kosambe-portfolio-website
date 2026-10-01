# Paras Kosambe Portfolio Foundation

## Goal
Set up the complete reusable shell for a premium monochrome portfolio, without adding section content yet.

## Structure
- Shared navigation, footer, one-session preloader, smooth scrolling, route transitions, and styled 404
- Placeholder pages for Home, About, Skills, Projects, Project Detail, Experience, Certifications, Achievements, Resume, Art, Contact, and the future Admin area
- Typed content models, a mock-data layer, service functions, and central social/contact configuration

## Component system
- Strict fixed-size PortfolioCard shell with media, meta, title, description, tags, and actions slots
- Reusable SectionHeading, PageHeader, Button, Badge, Reveal, SectionOverview, EmptyState, and matching LoadingState skeletons
- Desktop navigation with active underlines and a full-screen animated mobile menu

## Visual and motion system
- Exact monochrome palette supplied by Paras
- Inter Tight headings, Inter body, and JetBrains Mono labels
- Fluid typography, sharp corners, thin borders, and a 1360px content frame
- Transform/opacity-only transitions, reduced-motion support, and natural-speed Lenis scrolling

## Technical details
- Preserve TanStack Start’s required router while matching the requested route structure and behavior
- Use Motion for React, Lenis, Lucide, React Hook Form, and Zod only where the foundation needs them
- Give every page distinct metadata and verify desktop and mobile behavior
