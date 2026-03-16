ABC Transportation — Headless WordPress Frontend

A headless WordPress + Astro/React frontend for the ABC Transportation homepage component.

## Tech Stack

- **Frontend:** Astro + React + Tailwind CSS v4
- **CMS:** WordPress (hosted on Cloudways) + ACF Pro + WPGraphQL
- **Deployment:** Vercel

## Getting Started

### Prerequisites

- Node.js 18+
- Access to the WordPress instance

### Installation

1. Clone the repo
2. Install dependencies:

```sh
   npm install
```

3. Create a `.env` file in the project root based on `.env.example`:

```
   GRAPHQL_URL=your_wordpress_graphql_endpoint
```

4. Start the dev server:

```sh
   npm run dev
```

The site will be available at `localhost:4321`.

## Commands

| Command           | Action                                     |
| :---------------- | :----------------------------------------- |
| `npm install`     | Install dependencies                       |
| `npm run dev`     | Start local dev server at `localhost:4321` |
| `npm run build`   | Build for production                       |
| `npm run preview` | Preview production build locally           |

## WordPress CMS

Content is managed via the **Homepage Options** page in the WordPress admin dashboard. All text, icons, and images are editable from there without touching code.

### Content Architecture

An ACF Options page was used because the scope is limited to a single homepage component with a fixed, predictable structure. For a larger site the recommended approach would be:

- **Page-based ACF field groups** — for multiple pages with unique content, attach field groups directly to each page so editors manage content in context
- **Custom Post Types (CPTs)** — for repeating content like team members, testimonials, or services
- **ACF Blocks (Gutenberg)** — for maximum editorial flexibility, allowing editors to build pages visually using custom blocks

## SEO

- Dynamic page titles per active tab
- Canonical URLs passed as props from each page
- Schema.org markup for rich search results
- All tab and accordion content rendered in the DOM immediately (hidden from user but crawlable by search engines)

## Component Architecture

The homepage tab section is broken into focused, single-responsibility components. State lives in the `HomepageTabs` parent and is passed down via props drilling — the conventional React pattern for a component tree of this depth.

| Component | Responsibility |
| :--- | :--- |
| `HomepageTabs` | State orchestrator — holds `activeTab`, `activeSubcategory`, `openAccordion` and passes handlers down |
| `DesktopTabBar` | Desktop pill tab bar with sliding indicator; owns its own refs and resize logic |
| `MobileTabBar` | Mobile pill tab buttons |
| `SectionHeading` | Heading lines + intro body text; accepts a `mobile` prop to switch between desktop and mobile typography |
| `SubcategoryList` | Desktop subcategory button list |
| `FeaturePanel` | Desktop right column; all panels remain in the DOM for SEO, toggled via opacity/visibility |
| `AccordionList` | Mobile accordion items with expand animation |
| `CtaGroup` | Shared CTA button pair; accepts a `mobile` prop to switch between desktop and mobile button sizes |

## Styling

Styling uses Tailwind CSS v4 in the traditional utility-first manner — all styles are applied as inline utility classes directly in each component's JSX. `global.css` contains only:

- Design tokens registered via `@theme` (colors and fonts as Tailwind utilities)
- `@font-face` declarations for EuclidCircularB and LibreBaskerville
- `html` base reset
- Keyframe animation definitions
- Mobile-first responsive layout toggle for desktop/mobile layout switching

## Notes

- "Get a Quote" and "Book Online" CTA links are shared across all tabs and subcategories, editable from WordPress. The brief specified `href="#"` but these were made dynamic from the CMS for real-world usability.
- WordPress credentials for review are available on request.
