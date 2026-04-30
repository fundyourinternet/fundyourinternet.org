# Contributor Roles

This file defines specialised contributor roles for AI-assisted work on fundyourinternet.org. Each role has specific scope, guidelines, and quality bars.

## Content Writer

**Scope:** Writing and editing markdown content in `content/`.

**Guidelines:**
- Read `CLAUDE.md` for voice and tone rules before writing anything.
- Use British English consistently. When in doubt, consult a British English dictionary.
- Write short paragraphs (2-4 sentences). Each paragraph should make one clear point.
- Use concrete examples over abstractions. "A local news site earns £0.003 per page view" is stronger than "ad revenue is declining."
- End each section with a clear takeaway, not a cliffhanger.
- Use the `{{</* sidenote */>}}` shortcode to cross-reference other sections inline.
- Use the `{{</* cite "source-id" */>}}` shortcode to reference library sources. Check `data/library/` for available source IDs.
- Add contextual bridges in front matter when creating section pages. Each bridge should have a specific, written prompt — not generic navigation text.
- Never use emojis or exclamation marks in body copy.
- Never tell the reader how to feel. Show them the mechanics and let them draw conclusions.

**Quality bar:** Content should read as a credible first draft that an editor would refine, not rewrite. The tone should be indistinguishable from existing content on the site.

## Library Curator

**Scope:** Adding and maintaining source references in `data/library/`.

**Guidelines:**
- Each source is a YAML file in `data/library/` following the schema in `docs/library-schema.md`.
- File naming: `author-keyword-year.yaml` (e.g., `reuters-digital-news-2025.yaml`).
- The `id` field must match the filename (without extension).
- Write annotations in 2-3 sentences: what the source contributes and why it is worth reading. Not a summary — a recommendation.
- Prioritise recent work (2023-2026) but include foundational pieces where relevant.
- Assign topics from the controlled vocabulary in the schema. Add new topics only when existing ones genuinely do not fit.
- Set `recommended: true` only for "start here" sources — roughly 1 in 5.
- Verify URLs are current and accessible before adding.
- Quality over quantity. One well-annotated source is worth more than five bare links.

**Quality bar:** A reader should be able to decide whether to read a source based solely on the annotation.

## Design Contributor

**Scope:** Templates in `layouts/`, styles in `static/css/` (`base.css`, `components.css`, `visual.css`).

**Guidelines:**
- Read `CLAUDE.md` for CSS conventions and the design system.
- **JavaScript:** Do not add scripts by default. The only client script today is `static/js/theme.js` (legacy filename), which progressively enhances the share card on `/what-can-i-do/`. The full site must work with JS disabled. Any new JS must follow the same bar: optional enhancement only, no breakage without it.
- No external dependencies — no CDN-hosted libraries, no Google Fonts.
- **Icons:** [Lucide](https://lucide.dev) (MIT), inlined as partials under `layouts/partials/icons/`, with `stroke="currentColor"`. Prefer reusing existing partials before adding new SVGs.
- Keep CSS lean across the three files: prune unused rules rather than accumulating dead styles. Prefer small, purposeful additions over sweeping one-off styling.
- The shipped UI is a **single ink-dark theme** (no light mode, no theme toggle). Verify WCAG contrast for new colours and states in that theme.
- The site should feel like a well-designed zine or public resource, never like a SaaS landing page.
- Mobile-first: base styles work on small screens, `@media (min-width: 48em)` for wider layouts.

**Quality bar:** The site should load quickly on a slow connection. Every visual element should serve comprehension or navigation, never decoration alone.
