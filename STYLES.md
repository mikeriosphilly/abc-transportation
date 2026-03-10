# ABC Transportation — Style Guide

This project uses **Tailwind CSS v4** with a CSS-first configuration.
All tokens and component classes live in `src/styles/global.css`.

---

## Setup

Global styles are imported in `src/layouts/Layout.astro` via the frontmatter:

```js
import '../styles/global.css';
```

> **Important:** The import must be in the Astro frontmatter (not a `<style>` tag) so that Vite processes Tailwind's `@import "tailwindcss"` directive correctly.

---

## Design Tokens

Defined in the `@theme` block in `global.css`. These automatically become Tailwind utility classes.

### Colors

| Token                  | Hex       | Utility class        | Usage                        |
|------------------------|-----------|----------------------|------------------------------|
| `--color-abc-black`    | `#000000` | `bg-abc-black`       | Page / section background    |
| `--color-abc-dark`     | `#0a0a0a` | `bg-abc-dark`        | Tab pill background          |
| `--color-abc-darker`   | `#111111` | `bg-abc-darker`      | Active subcategory / accordion bg |
| `--color-abc-border`   | `#424242` | `border-abc-border`  | Borders on pill groups       |
| `--color-abc-subtext`  | `#242424` | `border-abc-subtext` | Divider lines                |
| `--color-abc-gold`     | `#a7a86e` | `bg-abc-gold` / `text-abc-gold` | Brand accent, active states |
| `--color-abc-body`     | `#c6c6c6` | `text-abc-body`      | Body copy                    |
| `--color-abc-active`   | `#1a1a1a` | `bg-abc-active`      | Active tab background        |

### Fonts

| Token                | Value                          | Utility class      |
|----------------------|--------------------------------|--------------------|
| `--font-euclid`      | `"EuclidCircularB", sans-serif` | `font-euclid`     |
| `--font-baskerville` | `"LibreBaskerville", serif`    | `font-baskerville` |

Font files are served from `public/fonts/` and declared as `@font-face` rules in `global.css`.

---

## Adding New Components

1. Add a new `@layer components { }` block in `global.css` (or a separate imported CSS file).
2. Prefix all classes with a short component identifier to avoid collisions (e.g. `ht-` for HomepageTabs).
3. Use `@apply` to compose Tailwind utilities. For values not expressible as utilities (e.g. `clamp()` font sizes), write raw CSS alongside `@apply`.
4. For state variants, use BEM-style modifier suffixes: `--active`, `--inactive`, `--open`, `--closed`.

```css
@layer components {
  .my-btn {
    @apply font-euclid text-xs uppercase tracking-[0.08em] rounded-full cursor-pointer;
  }
  .my-btn--active   { @apply bg-abc-gold text-black; }
  .my-btn--inactive { @apply bg-transparent text-white; }
}
```

Then in JSX, switch the modifier class based on state:

```jsx
<button className={`my-btn ${isActive ? 'my-btn--active' : 'my-btn--inactive'}`}>
  Label
</button>
```

---

## HomepageTabs Class Reference

All classes are defined in `src/styles/global.css` under `@layer components`.

### Layout

| Class                  | Element            | Description                        |
|------------------------|--------------------|------------------------------------|
| `.ht-section`          | `<section>`        | Full-width black wrapper           |
| `.ht-desktop-grid`     | Desktop layout div | 2-column grid, max 1400px          |
| `.ht-left-col`         | Left column        | Right padding for gutter           |
| `.ht-right-col`        | Right column       | Flex column for image + content    |
| `.ht-mobile-wrap`      | Mobile layout div  | Padding wrapper                    |

### Tab Bar

| Class                        | Description                              |
|------------------------------|------------------------------------------|
| `.ht-tab-bar-desktop-wrap`   | Outer flex container (desktop)           |
| `.ht-tab-pill-group`         | Dark pill-shaped container               |
| `.ht-tab-btn`                | Base tab button styles                   |
| `.ht-tab-btn--active`        | Gold text + dark background              |
| `.ht-tab-btn--inactive`      | White text + transparent background      |
| `.ht-tab-icon`               | Tab icon image sizing                    |
| `.ht-tab-indicator`          | Gold underline on active tab             |
| `.ht-tab-bar-mobile-wrap`    | Outer flex container (mobile)            |
| `.ht-mobile-tab-btn`         | Base mobile tab button                   |
| `.ht-mobile-tab-btn--active` | Gold text + dark active background       |
| `.ht-mobile-tab-btn--inactive` | White text + dark background           |

### Headings

| Class                      | Description                                      |
|----------------------------|--------------------------------------------------|
| `.ht-heading-block`        | Heading group wrapper                            |
| `.ht-heading-main`         | Large uppercase serif heading (desktop)          |
| `.ht-heading-sub`          | Italic gold serif heading (desktop)              |
| `.ht-mobile-heading-block` | Centered heading wrapper (mobile)                |
| `.ht-mobile-heading-main`  | Large uppercase serif heading (mobile)           |
| `.ht-mobile-heading-sub`   | Italic gold serif heading (mobile)               |

### Content

| Class               | Description                          |
|---------------------|--------------------------------------|
| `.ht-body-text`     | Left column body paragraph           |
| `.ht-mobile-body-text` | Mobile centered body paragraph    |
| `.ht-feature-image` | Full-width 360px cover image         |
| `.ht-feature-title` | Right column h2                      |
| `.ht-feature-body`  | Right column body paragraph          |

### Subcategory List

| Class                      | Description                        |
|----------------------------|------------------------------------|
| `.ht-subcat-list`          | Flex column container              |
| `.ht-subcat-btn`           | Base subcategory button            |
| `.ht-subcat-btn--active`   | Dark background when selected      |
| `.ht-subcat-btn--inactive` | Transparent background             |
| `.ht-subcat-icon`          | Subcategory icon sizing            |
| `.ht-subcat-icon--active`  | Full opacity                       |
| `.ht-subcat-icon--inactive`| 60% opacity                        |
| `.ht-subcat-label`         | Subcategory label text styles      |
| `.ht-subcat-label--active` | Gold text                          |
| `.ht-subcat-label--inactive`| White text                        |

### Accordions (Mobile)

| Class                        | Description                        |
|------------------------------|------------------------------------|
| `.ht-accordion-item`         | Base accordion row                 |
| `.ht-accordion-item--open`   | Dark bg + horizontal padding       |
| `.ht-accordion-item--closed` | Transparent, no padding            |
| `.ht-accordion-btn`          | Toggle button                      |
| `.ht-accordion-icon`         | Icon sizing                        |
| `.ht-accordion-icon--open`   | Full opacity                       |
| `.ht-accordion-icon--closed` | 70% opacity                        |
| `.ht-accordion-label`        | Label text styles                  |
| `.ht-accordion-label--open`  | Gold text                          |
| `.ht-accordion-label--closed`| White text                         |
| `.ht-accordion-content`      | Expanded content wrapper           |
| `.ht-accordion-image`        | 240px cover image                  |
| `.ht-accordion-title`        | Expanded h2                        |
| `.ht-accordion-body`         | Expanded body paragraph            |
| `.ht-accordion-cta-group`    | CTA button row                     |

### CTA Buttons

| Class             | Description                                    |
|-------------------|------------------------------------------------|
| `.ht-cta-group`   | Flex row for desktop CTAs                      |
| `.ht-cta-gold`    | Gold pill button (desktop) with hover fade     |
| `.ht-cta-white`   | White pill button (desktop) with hover fade    |
| `.ht-cta-gold-sm` | Gold pill button (mobile, slightly smaller)    |
| `.ht-cta-white-sm`| White pill button (mobile, slightly smaller)   |
