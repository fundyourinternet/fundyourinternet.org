# fundyourinternet.org

A public-good static site that helps people take an intentional approach to sustaining what they value online. It is a resource, not a product site. Disclosure: built by the [at.fund](https://at.fund) team (see site footer).

**Maintainer context:** Project conventions live in [CLAUDE.md](CLAUDE.md). AI-assisted contributor roles are in [AGENTS.md](AGENTS.md). Planning notes and the design log are under [docs/](docs/).

## Contributing content

All page copy lives in `content/` as Markdown with YAML front matter.

1. Edit the relevant `.md` file in `content/`.
2. Use this front matter format at the top of each file:

```yaml
---
title: "Page title"
summary: "A brief description for link previews and metadata."
---
```

3. Push to `main`. GitHub Actions builds and deploys the site automatically.

The curated evidence library is driven by YAML in `data/library/` (see [docs/library-schema.md](docs/library-schema.md)). For voice, tone, `cite` / `sidenote` shortcodes, and bridges between sections, follow [CLAUDE.md](CLAUDE.md).

### Content guidelines (short)

- **British English.** Colour, not color. Organised, not organized.
- **Warm and direct.** Useful sharing, not recruiting.
- **No jargon** in user-facing content unless the page already sets that expectation.
- **No emojis, no exclamation marks** in body copy.
- **Short paragraphs.** Aim for 2–4 sentences each.

## Running locally

Install [Hugo](https://gohugo.io/installation/) (any recent version), then:

```sh
hugo server
```

This serves the site at `http://localhost:1313/` with live reload.

You do not need Hugo to contribute Markdown or library YAML only: edit on GitHub and the workflow will rebuild.

## How deployment works

GitHub Pages via GitHub Actions. Every push to `main` runs `.github/workflows/deploy.yml`.

### One-time setup (repository admins)

In **Settings → Pages → Source**, choose **GitHub Actions** (not “Deploy from a branch”).

## Site structure

```
content/
  _index.md                  Homepage (woven teasers from all sections)
  the-old-way/_index.md      The Old Way — ad-driven web and its costs
  a-new-way/_index.md        A New Way — direct funding and communities
  the-evidence/_index.md     The Evidence — library page (from data/library/)
  what-can-i-do/_index.md    What can I do — actions and share card
data/library/                Evidence sources (YAML, one file per source)
docs/                        Internal docs (not published)
layouts/                     Hugo templates (maintainers)
static/css/                  base.css, components.css, visual.css
static/js/                   Progressive enhancement only (e.g. copy link)
hugo.toml                    Site configuration
```

## Licence

[MIT](LICENSE)
