# Design Decisions

A record of significant design choices and the reasoning behind them. Newest decisions first.

---

## Logo: FYI ligature mark (April 2026)

**Decision:** The FYI mark is a bespoke SVG ligature — letters tightly spaced with rounded terminals, designed as a monogram rather than three separate characters. The F crossbar flows into the Y.

**Why:** The mark needs to work as a compact identifier (favicon, social cards, header badge) while conveying community and approachability. Standard typeset "FYI" reads as an abbreviation; a ligature reads as a unified identity. Rounded terminals soften the serif tradition without abandoning it.

**Alternatives considered:** Keeping standard letter spacing; using a symbol/icon instead of letters; making FYI the primary brand name (rejected — the URL is the brand, FYI is the shorthand).

---

## Section icons: abstract geometric (April 2026)

**Decision:** Each branch gets an abstract geometric SVG icon using `currentColor`. Simple shapes that suggest the section's character without being literal.

**Why:** Abstract shapes age better than representational illustrations, work at tiny sizes (16px), and avoid the clip-art problem. Using `currentColor` means they automatically inherit the branch colour system.

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

**Decision:** Single CSS file in `static/css/style.css`. No Sass, PostCSS, or CSS-in-JS.

**Why:** Modern CSS custom properties handle variables. CSS nesting is broadly supported. A single well-structured file under 400 lines needs no build step. One fewer thing for contributors to understand, one fewer dependency to maintain.

---

## System fonts only (April 2026)

**Decision:** System font stack for both body and headings. No web fonts.

**Why:** Maximum speed, zero font loading, zero FOUT. The site's visual character comes from colour, spatial design, and the sidenote/margin treatment rather than typeface distinctiveness. Adding a web font would improve aesthetics marginally while adding a network request and a potential point of failure.
