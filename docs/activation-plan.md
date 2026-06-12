# Dormant Project Activation Plan

This plan turns the current static Coreweaver Labs mockup into a maintainable launch surface without committing to a heavyweight framework too early.

## Goals

- Preserve the existing static HTML/CSS prototype as the source of truth for the near-term site.
- Add repeatable local commands so contributors can validate and package changes.
- Keep the repository ready for either static hosting or a later migration to Next.js/WordPress.
- Make missing-content decisions explicit instead of hiding them behind broken images or dead links.

## Brainstormed Workstreams

### 1. Foundation

- Add package metadata, build scripts, and validation checks.
- Add CI that runs the same checks on every push and pull request.
- Document local setup and the build artifact layout.

### 2. Content and Product Narrative

- Replace speculative partner logos with textual partner categories until real approvals are available.
- Keep product CTAs as section links or placeholders until production app URLs are confirmed.
- Audit claims such as APR, live status, and ecosystem references before public launch.

### 3. Design System

- Consolidate the palette, typography, cards, badges, and responsive behavior in `css/style.css`.
- Prefer CSS-driven placeholders for unfinished visuals so the page remains shippable.
- Add accessibility checks before introducing animation-heavy interactions.

### 4. Hosting and Operations

- Use the generated `dist/` directory for Netlify, Vercel static output, Cloudflare Pages, or GitHub Pages.
- Keep environment configuration out of source control and add `.env.example` only when runtime integrations exist.
- Add analytics, error monitoring, and a security contact only after URLs and owners are confirmed.

## Milestones

1. **Repository revival**: package scripts, CI, README, and static validation.
2. **Launch candidate**: real product links, approved partner assets, legal/footer updates, SEO metadata.
3. **Growth build**: blog/resources, docs hub, staking/delegation app handoffs, analytics.
4. **Framework migration**: move to Next.js or another app framework only when content workflows or dynamic integrations justify it.

## Definition of Done for This Infrastructure Pass

- `npm run check` validates all local references and produces `dist/`.
- CI mirrors the local check command.
- README explains how to run, build, and maintain the dormant project.
- The homepage no longer references missing local image assets.
