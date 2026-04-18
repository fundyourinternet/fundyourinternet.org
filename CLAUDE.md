# Fund Your Internet — Project Context

## What this is

A public-good static site that helps non-technical people take an intentional, positive approach to sustaining the things they value online. It is not a product site. It is a resource, a practice framework, and a gateway to deeper understanding.

The relationship to at.fund: "built by the at.fund team" in the footer. at.fund appears in the site only where it naturally belongs — as one tool among several. The site's credibility depends on it being genuinely useful independent of at.fund.

## Voice and tone

- **Warm. Direct. Confident without being preachy.** The voice of someone who has figured something out and is sharing it because it is useful, not because they are recruiting.
- **British English.** Colour, not color. Organised, not organized.
- **No emojis, no exclamation marks** in body copy.
- **No jargon** in user-facing content. "Algorithm" is fine. "Enshittification" is The Evidence only.
- **Not a guilt trip.** Every piece of content should leave the reader feeling more capable, not more complicit.
- **Closer to a well-designed zine than a manifesto.** Closer to a helpful friend than a brand.
- **Informational without being didactic.** Use concrete examples, not abstractions. Show the mechanics, do not tell the reader how to feel.

## Technical decisions

- **Hugo** — static site generator. Zero Node.js dependency. Contributors edit markdown and push. Go templating is only touched by maintainers, never by content contributors.
- **Plain CSS** — no preprocessor, no framework. CSS custom properties for the design system. Three stylesheets (`base.css`, `components.css`, `visual.css`). Keep CSS lean by pruning unused or redundant rules rather than letting files accumulate dead styles.
- **Progressive enhancement** — the site must work without JS entirely. The only script (`static/js/theme.js`) enhances the share card on `/what-can-i-do/` with a one-click copy-link button; without JS, the card still links normally. The site uses a single ink-dark theme (no toggle).
- **System fonts** — no external font requests. `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif` for body. `Georgia, "Times New Roman", serif` for headings.
- **No cookies, no tracking** — no analytics beyond what may be added later (Plausible or Fathom, privacy-respecting only).
- **GitHub Pages** deployment via GitHub Actions. Push to `main` triggers build.
- **Icons** — sourced from [Lucide](https://lucide.dev) (MIT-licensed). Stored as inline SVG partials in `layouts/partials/icons/`. They use `stroke="currentColor"` to inherit colour from context. The site-wide icon nav uses four icons: `circle-help` (home), `old-way` / radio (Old Way), `new-way` / hand-heart (New Way), `user` (What can I do).

## Content architecture

The site has a **front door** (homepage) and **three sections**:

1. **The Old Way** (`/the-old-way/`, colour: teal `--colour-feeds`) — How the ad-driven internet works and what it costs. Professional and clear, not zealous.
2. **A New Way** (`/a-new-way/`, colour: amber `--colour-movement`) — Communities building direct funding relationships. The most emotionally important section.
3. **The Evidence** (`/the-evidence/`, colour: slate blue `--colour-evidence`) — A curated, annotated library organised by question.

### Interweaving pattern

The sections are not silos. They connect through:
- **Contextual bridges** — tailored prompts at the bottom of each section page linking to the other two. Written per-section, not auto-generated.
- **Sidenotes** — Tufte-style margin notes for cross-section references. Use `{{</* sidenote */>}}...{{</* /sidenote */>}}` shortcode.
- **Inline citations** — Use `{{</* cite "source-id" */>}}` to reference library sources from any page. Renders as a superscript numbered indicator with a hover tooltip; clicking navigates to the evidence page entry.
- **Woven homepage** — the front door intermixes teasers from all three sections.

## Library reference system

Sources are defined as YAML files in `data/library/`. Each file follows a consistent schema (see `docs/library-schema.md`). Use the `cite` shortcode to reference them inline. The evidence page auto-generates from these data files.

## CSS conventions

- All custom properties use `--colour-` prefix (British spelling)
- Branch colour tokens: `--colour-feeds` (teal), `--colour-movement` (amber), `--colour-evidence` (slate) with `-light` and `-border` variants
- Section CSS classes use URL slugs: `.section-page--old-way`, `.section-page--new-way`, `.section-page--evidence`
- Spacing scale: `--space-xs` (0.5rem) through `--space-2xl` (8rem)
- Max content width: `--max-width` (42rem), `--max-width-wide` (58rem) for hero areas and card grids

## What this site is NOT

- Not a movement with a name and a logo and a pledge
- Not a community platform (no Discord, no forum, no comments)
- Not a product (no accounts, no sign-ups, no data collection)
- Not oppositional ("fund your internet" is affirmative, not combative)
- Not a content machine (a small, well-made library that grows slowly)
- Not a guilt trip

## File structure

```
content/         Markdown content (what contributors edit)
data/library/    Source references (YAML, one per source)
docs/            Planning documents (not published to site)
layouts/         Hugo templates (maintainers only)
  partials/icons/  Section icon SVGs (from Lucide)
static/css/      Stylesheets (base.css, components.css, visual.css)
static/js/       Progressive enhancement scripts (theme.js)
static/images/   Images (hero/, sections/ — added as needed)
static/          Static assets (favicon, robots.txt)
```

## Before making changes

- Read the content you are modifying. Understand existing voice before writing new content.
- Do not add JavaScript unless there is no CSS-only alternative. Any JS must be progressive enhancement (site works fully without it).
- Do not add external dependencies (fonts, libraries, frameworks).
- Do not add emojis to content or commit messages.
- Keep CSS lean. When modifying styles, prune any rules that become unused or redundant rather than leaving dead code in place.
- When adding a library source, follow the schema in `docs/library-schema.md`.
- Test with `hugo server` before committing.

## End of session

Before finishing a session, review whether anything learned or decided during the session should be captured in this file. If project conventions, technical decisions, or content guidelines have changed, update CLAUDE.md so future sessions start with accurate context.
