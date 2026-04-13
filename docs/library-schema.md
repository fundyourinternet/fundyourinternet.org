# Library Source Schema

Each source in the library is a YAML file in `data/library/`. This document defines the schema and conventions.

## File naming

`author-keyword-year.yaml`

Examples:
- `reuters-digital-news-2025.yaml`
- `doctorow-enshittification-2023.yaml`
- `tidelift-maintainer-survey-2024.yaml`

The filename (without extension) must match the `id` field.

## Schema

```yaml
# Required fields
id: "reuters-digital-news-2025"      # Must match filename. Used by cite shortcode.
title: "Digital News Report 2025"
author: "Reuters Institute"           # Person or organisation
year: 2025
url: "https://..."                    # Canonical URL. Must be accessible.
type: research                        # See type vocabulary below.
topics:                               # 1-3 topics from the controlled vocabulary.
  - journalism-economics
  - subscription-fatigue
annotation: >                         # 2-3 sentences. What it contributes, why to read it.
  The most comprehensive annual survey of news consumption and
  payment behaviour across 47 markets. Essential for understanding
  how many people actually pay for news and why.

# Optional fields
recommended: true                     # "Start here" flag. ~1 in 5 sources.
related:                              # IDs of related sources in the library.
  - nieman-local-news-2024
access: open                          # open | paywalled | registration. Defaults to open.
```

## Type vocabulary

| Type | Use for |
|---|---|
| `research` | Peer-reviewed papers, institutional research reports |
| `book` | Published books (include chapter if citing a specific chapter) |
| `article` | Journalism, essays, blog posts, newsletters |
| `talk` | Conference talks, lectures, podcast episodes |
| `dataset` | Surveys, data releases, statistical sources |
| `report` | Industry reports, white papers, policy documents |

## Topic vocabulary

Topics map to the organising questions in the evidence base. Use existing topics before creating new ones.

| Topic | Maps to |
|---|---|
| `algorithmic-feeds` | How do algorithmic feeds affect information quality? |
| `journalism-economics` | What is the real economics of independent media? |
| `ad-driven-wellbeing` | How does ad-driven optimisation affect wellbeing? |
| `direct-funding-models` | What models for direct/community funding work? |
| `subscription-fatigue` | What does research say about subscription fatigue? |
| `open-source-funding` | How does open source funding affect infrastructure? |
| `platform-economics` | Creator income distribution, platform governance |
| `attention-economics` | Attention as a resource, cognitive effects |

## Using the cite shortcode

In any markdown content file:

```markdown
A local news site earns fractions of a penny per page view.{{</* cite "reuters-digital-news-2025" */>}}
```

This renders as a compact inline citation linking to the full entry in the evidence base.

## Adding a new source

1. Create a new YAML file in `data/library/` following the naming convention.
2. Fill in all required fields.
3. Write the annotation: what does this source contribute that others do not? Why should someone read it?
4. Assign 1-3 topics from the controlled vocabulary.
5. Set `recommended: true` only if this is a "start here" source for its topic.
6. Run `hugo server` to verify the source appears in the evidence base.
7. Use `{{</* cite "your-source-id" */>}}` in content to reference it.
