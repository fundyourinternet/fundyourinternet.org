# fundyourinternet.org

A practical guide to sustaining the things you rely on online. Built by the [at.fund](https://at.fund) team.

## Contributing content

All content lives in the `content/` directory as Markdown files with YAML front matter. To add or edit content:

1. Edit the relevant `.md` file in `content/`.
2. Use this front matter format at the top of each file:

```yaml
---
title: "Page title"
summary: "A brief description for link previews and metadata."
---
```

3. Push to `main`. GitHub Actions will build and deploy the site automatically.

### Content guidelines

- **British English.** Colour, not color. Organised, not organized.
- **Warm and direct.** The voice of someone sharing something useful, not recruiting.
- **No jargon** in user-facing content. Plain descriptions of what actually happens.
- **No emojis, no exclamation marks** in body copy.
- **Short paragraphs.** Aim for 2-4 sentences each.

## Running locally

You need [Hugo](https://gohugo.io/installation/) installed (any recent version).

```sh
hugo server
```

This starts a local development server at `http://localhost:1313/` with live reload.

You do not need Hugo to contribute content. You can edit Markdown files directly on GitHub and the site will rebuild automatically.

## How deployment works

The site is deployed to GitHub Pages via GitHub Actions. Every push to `main` triggers a build and deploy. The workflow is defined in `.github/workflows/deploy.yml`.

### One-time setup (for repository admins)

Go to repository **Settings > Pages > Source** and select **GitHub Actions** (not "Deploy from a branch").

## Site structure

```
content/
  _index.md                    Homepage
  how-feeds-work/_index.md     How algorithmic feeds shape what gets made
  the-movement/_index.md       Communities building direct funding models
  the-evidence-base/_index.md  Curated research and sources
layouts/                       Hugo templates (you probably do not need to touch these)
static/css/style.css           Stylesheet
hugo.toml                      Site configuration
```

## Licence

[MIT](LICENSE)
