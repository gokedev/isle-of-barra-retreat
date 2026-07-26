# Isle of Barra Beach Hotel

A modern website for the Isle of Barra Beach Hotel, a family-run Hebridean hotel set above Tangasdale Beach in the Outer Hebrides, Scotland.

## Tech Stack

- **React 19** with TypeScript
- **TanStack Start** (SSR) + **TanStack Router** (file-based routing)
- **Tailwind CSS v4** with custom design system (oklch colours)
- **Vite 7** build tooling
- **Cloudflare Workers** deployment
- **Bun** package manager

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage — hero, about, rooms preview, dining, experience, gallery, contact |
| `/about` | Hotel history, values, and location |
| `/rooms` | Room types with details, pricing, and booking enquiry |
| `/dining` | Restaurant and bar information with sample menu |
| `/experience` | Activities: beach walks, wildlife, castle, boat trips |
| `/gallery` | Photo gallery with category filters |
| `/contact` | Enquiry form, contact details, and map |
| `/local-area` | Ferries, flights, beaches, wildlife guide, nearby islands |
| `/faqs` | Frequently asked questions |

## Getting Started

```bash
# Install dependencies
bun install

# Start development server
bun run dev

# Build for production
bun run build

# Preview production build
bun run preview
```

## Scripts

| Command | Description |
|---------|-------------|
| `bun run dev` | Start Vite dev server on port 8080 |
| `bun run build` | Production build (client + SSR) |
| `bun run build:dev` | Development mode build |
| `bun run preview` | Preview production build |
| `bun run lint` | Run ESLint |
| `bun run format` | Format with Prettier |

## Project Structure

```
src/
  components/       Shared UI components
    Nav.tsx          Responsive navigation with mobile menu
    Footer.tsx       Site footer with social links
    SectionHeader.tsx Reusable section intro block
    ui/              shadcn/ui component library (46 components)
  routes/            File-based routes (auto-registered by TanStack Router)
    __root.tsx       Root layout, global meta, error boundaries
    index.tsx        Homepage
    about.tsx        About page
    rooms.tsx        Rooms page
    dining.tsx       Dining page
    experience.tsx   Activities page
    gallery.tsx      Gallery page
    contact.tsx      Contact & booking page
    local-area.tsx   Local area guide
    faqs.tsx         FAQ page
  assets/            Images (hero, rooms, dining, wildlife, gallery)
  lib/               Utilities and error handling
  styles.css         Tailwind config and design system tokens
  router.tsx         TanStack Router setup with React Query
  server.ts         Cloudflare Workers SSR entry
  start.ts          TanStack Start instance with error middleware
```

## Deployment

The app deploys to **Cloudflare Workers** via the `@cloudflare/vite-plugin` and `wrangler.jsonc` configuration. The SSR entry point is `src/server.ts`.

```bash
bun run build
npx wrangler deploy
```

## Contact

- **Phone:** 01871 810383
- **Email:** barrahotel@aol.com
- **Address:** Tangasdale Beach, Isle of Barra, HS9 5XW

## License

Private — Isle of Barra Beach Hotel
