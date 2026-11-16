# MASQ College website (frontend)

React 19 + TypeScript + Vite + Tailwind CSS v4.

```bash
npm install
npm run dev      # start the dev server
npm run build    # type-check + production build
npm run lint
```

## How it works

The site is driven by one content object, `SiteContent` (`src/types/site.ts`):

```
institute   name, contact, socials, currency/locale
navigation  menu, top links, call-to-action
footer      link columns, contact call-to-action, newsletter, bottom links
home        every section of the home page
```

1. `App` loads it through `useSiteContent()`, which calls `getSiteContent()` in `src/services/siteService.ts`.
2. Today that returns local mock data from `src/data/`. **To connect a backend, change only the body of `getSiteContent()`** so it fetches and returns a `SiteContent`.
3. `SiteProvider` puts the data in context. Any component reads it with `useSite()`.

## Folders (`src/`)

| Folder | What lives there |
| --- | --- |
| `pages/` | One component per page. `HomePage` lists the home sections in order. |
| `features/home/` | One component per home-page section (`HeroSlider`, `CoursesSection`, ...). |
| `components/layout/` | Page chrome: header, top bar, navigation, footer. Use `MainLayout`. |
| `components/cards/` | One card per item type: course, event, post, program, category. |
| `components/ui/` | Generic pieces with no college content: `Button`, `Section`, `Rating`, ... |
| `hooks/` | `useSiteContent` (loading), `useFormatters` (money/date/file size), `useAutoplay` (hero slider), `useAutoScroll` (notices ticker). |
| `context/` | `SiteProvider` and the `useSite()` hook. |
| `services/` | The single backend seam (`siteService.ts`). |
| `types/` | TypeScript shapes of the backend payload, one file per area. |
| `data/` | Mock content that stands in for the backend. |
| `lib/` | Small pure helpers: `cn`, formatters, icon maps. |
| `../public/images/` | Photos and logos the mock data points at (`/images/...`): hero, about, gallery, recruiter logos, ... |

## Imports

Use the `@/` alias instead of `../../`. Folders with an `index.ts` can be imported as a whole:

```ts
import { Button, Container, Section } from '@/components/ui'
import { CourseCard } from '@/components/cards'
import { useSite } from '@/context/site-context'
import type { Course } from '@/types/home'
```

Files in the same folder still import each other with `./`. When you add a component to `ui/`, `cards/`,
`features/home/`, `hooks/` or `lib/`, also export it from that folder's `index.ts`.

## Common tasks

- **Add a home section:** add its type to `types/home.ts`, its mock to `data/home.ts`, a component in `features/home/`
  (export it from `features/home/index.ts`), and render it in `pages/HomePage.tsx`.
- **Add a card type:** create it in `components/cards/`, export it, and render it through `CardGridSection`.
- **Change brand colors or font:** edit the `@theme` tokens in `src/index.css`.
