# Design Decisions

A record of significant design choices and the reasoning behind them. Newest decisions first.

---

## Visual redesign: heroes, icons, toggle, layout (April 2026)

**Decision:** A visual redesign adding five capabilities: (1) dark/light mode toggle, (2) section icons from Lucide, (3) gradient hero blocks on section pages and homepage, (4) wider layout for card grids, (5) a `figure` shortcode for future inline images.

**Why:** The site was narrow, text-only, and visually flat. The colour wayfinding system worked but lacked visual anchors. Users had no way to override OS dark mode. The goal is to make the site inviting and engaging while preserving its editorial, non-product character.

**Key choices:**
- **CSS split into three files** (`base.css`, `components.css`, `visual.css`) — the single-file approach hit 700+ lines and the redesign would push further. Each file stays under 300 lines with a clear responsibility.
- **Theme toggle via ~30 lines of JS** — the only JavaScript on the site. Uses `data-theme` attribute on `<html>` with `localStorage` persistence. Progressive enhancement: without JS, OS-level `prefers-color-scheme` detection still works and the toggle button remains hidden.
- **Lucide icons** (MIT-licensed) — `radio` for Old Way, `hand-heart` for New Way, `book-open` for Evidence. Stored as inline SVG partials, not loaded from a CDN. Use `stroke="currentColor"` to inherit section colours.
- **Gradient hero blocks** as placeholders for real photography. Each section uses its colour tokens in a `linear-gradient`. Real CC0 photos to be sourced and swapped in later.
- **Selective layout widening** — body text stays at 42rem for readability. Card grids and heroes break out to 58rem (`--max-width-wide`).
- **Figure shortcode** with optional section icon overlay, ready for subsection images when content is written.

**Alternatives considered:** CSS-only dark mode toggle (not possible with persistence); custom icon illustrations (CLAUDE.md specifies library icons); full-bleed heroes (too dramatic for the editorial tone); global layout widening (hurts readability).

---

## Logo: FYI ligature mark (April 2026)

**Decision:** The FYI mark is a bespoke SVG ligature — letters tightly spaced with rounded terminals, designed as a monogram rather than three separate characters. The F crossbar flows into the Y.

**Why:** The mark needs to work as a compact identifier (favicon, social cards, header badge) while conveying community and approachability. Standard typeset "FYI" reads as an abbreviation; a ligature reads as a unified identity. Rounded terminals soften the serif tradition without abandoning it.

**Alternatives considered:** Keeping standard letter spacing; using a symbol/icon instead of letters; making FYI the primary brand name (rejected — the URL is the brand, FYI is the shorthand).

---

## Section icons: Lucide library (April 2026)

**Decision:** Each branch gets an icon from the Lucide library (MIT-licensed): `radio` for Old Way, `hand-heart` for New Way, `book-open` for Evidence. Stored as inline SVG partials in `layouts/partials/icons/`. Use `stroke="currentColor"` and `width="1em"` to inherit colour and scale with text.

**Why:** Lucide icons are minimal line art that match the editorial tone. Using an established library avoids the clip-art problem of bespoke illustrations. Inline SVG avoids external requests. Icons appear in nav, strand cards, branch cards, section headings, and bridge links for consistent visual anchoring.

---

## Branch colour wayfinding system (April 2026)

**Decision:** Three distinct hues for the three sections — teal (feeds), amber (movement), slate blue (evidence). Each with light/dark mode variants and light/border tones.

**Why:** Colour is the fastest wayfinding signal. A reader seeing teal text or a teal border immediately knows they are in or referencing the "feeds" section. The hues were chosen to feel like the same family (similar saturation) while carrying different emotional energy: teal = analytical, amber = warm/community, slate = scholarly.

**Alternatives considered:** Unified single-colour palette (simpler but less navigational); bright saturated colours (too aggressive for a resource site).

---

## Woven homepage layout (April 2026)

**Decision:** The homepage interleaves "strand" teasers from all three branches, colour-coded, before showing compact navigation cards. The front door demonstrates the interconnection rather than presenting three separate doors.

**Why:** The three branches are perspectives on one conversation, not separate topics. A flat card grid treats them as equal, independent options. The woven layout shows a reader: "here is a fact, here is who is responding to it, here is the research behind it" — the interconnection is the point.

---

## Library reference system: data files + cite shortcode (April 2026)

**Decision:** Sources are YAML files in `data/library/`, one per source, with a consistent schema. A `cite` shortcode enables inline references from any page. The evidence base auto-generates from the data files.

**Why:** Sources need to be defined once and referenced many times. A data-file approach keeps the source of truth separate from any specific page's content. The cite shortcode makes provenance frictionless for content writers — no need to manage URLs or formatting manually.

**Alternatives considered:** Markdown files in content (harder to reference inline); single data file (less structured per source).

---

## Contextual bridges between sections (April 2026)

**Decision:** Each section page ends with written, tailored prompts linking to the other two sections. These are defined in the page's front matter, not auto-generated.

**Why:** Generic "related links" feel like boilerplate. A bridge that says "Now that you see how feeds shape what gets made, see who is building alternatives" responds to the specific content above it. This must be written, not templated, to feel genuine.

---

## Hugo as static site generator (April 2026)

**Decision:** Hugo, not Eleventy, Astro, or plain HTML.

**Why:** Zero Node.js dependency means contributors never deal with `node_modules`, `package.json`, or lockfile conflicts. Hugo ships zero JavaScript by default. Its content model (sections with `_index.md`) maps directly to the three-branch architecture. Go templating is arcane but only touched by maintainers — contributors edit markdown only.

**Alternatives considered:** Eleventy (strong but requires Node); Astro (overkill — component model for a content site); plain HTML (no templating, duplicated nav/header/footer).

---

## Plain CSS, no preprocessor (April 2026)

**Decision:** Three CSS files in `static/css/` (`base.css`, `components.css`, `visual.css`). No Sass, PostCSS, or CSS-in-JS.

**Why:** Modern CSS custom properties handle variables. The original single-file approach was outgrown at 700+ lines. Splitting by concern (base/components/visual) keeps each file under 300 lines with no build step. Browsers fetch the three files in parallel and cache them independently.

---

## System fonts only (April 2026)

**Decision:** System font stack for both body and headings. No web fonts.

**Why:** Maximum speed, zero font loading, zero FOUT. The site's visual character comes from colour, spatial design, and the sidenote/margin treatment rather than typeface distinctiveness. Adding a web font would improve aesthetics marginally while adding a network request and a potential point of failure.
