# Coreweaver Labs Website

Static marketing site, launch plan, and implementation notes for Coreweaver Labs. The repository has been revived as a lightweight static project so it can be validated, built, and deployed before a future framework migration is justified.

## Project Status

This is a dormant-project infrastructure pass. The current source of truth remains `index.html` and `css/style.css`, with supporting images in `images/` and strategy documents in Markdown. Product URLs, partner logos, APR claims, and public launch copy should be reviewed before production release.

## Repository Contents

### Website

- `index.html` - Homepage mockup and content sections.
- `css/style.css` - Site styling, responsive layout, product placeholders, and partner cards.
- `images/` - Approved logo and illustration assets currently used by the page.

### Infrastructure

- `package.json` - Local scripts for validation, build, and preview.
- `scripts/check-static-links.mjs` - Verifies local asset references and in-page anchors.
- `scripts/build-static.mjs` - Produces a deployable static artifact in `dist/`.
- `.github/workflows/static-site.yml` - CI check that runs the same project validation command.

### Planning Docs

- `docs/activation-plan.md` - Dormant-project activation plan and brainstormed workstreams.
- `site_structure.md` - Detailed website structure and pages.
- `content_sections.md` - Content for each website section.
- `functionality_features.md` - Planned functionality and features.
- `implementation_recommendations.md` - Platform and development recommendations.
- `wordpress_theme_recommendations.md` - WordPress theme options and timeline.
- `color_typography_guide.md` - Color palette and typography specifications.
- `implementation_checklist.md` - Step-by-step implementation checklist.

## Local Development

Prerequisites:

- Node.js 18 or newer.
- Python 3 if you want to use the lightweight preview server.

Run checks and build the static site:

```bash
npm run check
```

Preview locally from the repository root:

```bash
npm run serve
```

Then open <http://localhost:4173>.

## Build Output

`npm run build` creates `dist/` with:

- `index.html`
- `css/`
- `images/`
- `build-info.json`

The `dist/` directory is intentionally ignored by Git and can be uploaded to static hosts such as Netlify, Vercel static output, Cloudflare Pages, GitHub Pages, or an object-storage/CDN pipeline.

## Suggested Next Steps

1. Confirm product destination URLs and replace section-only CTA links.
2. Replace text partner placeholders with approved logo assets.
3. Audit public claims, especially reward/APR language and product status badges.
4. Add SEO/social metadata after the public domain and messaging are finalized.
5. Decide whether the next phase needs a framework migration or can remain static.
