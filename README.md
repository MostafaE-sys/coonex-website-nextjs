# Coonex Website

The Coonex marketing site — Next.js (App Router) + TypeScript + Tailwind CSS v4.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to load **IBM Plex Sans**, the site's only font (see `src/app/layout.tsx`).

## Production Setup

### Install & build

```bash
npm install
npm run build
npm run start
```

Run `npm run lint` and `npx tsc --noEmit` before shipping — both must pass clean.

### Environment variables

Copy `.env.example` to `.env.local` (or configure equivalently in your hosting platform):

| Variable | Required for | Notes |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical URLs, Open Graph, sitemap/robots | Falls back to `http://localhost:3000` if unset — must be set to the real production domain before deploy. |
| `CONTACT_DELIVERY_WEBHOOK_URL` | Contact form lead delivery | If unset, `/api/contact` correctly rejects submissions with an error rather than silently discarding them. See `src/lib/contact-delivery.ts`. |

### Content gates (intentional, not bugs)

- **Products**: only Coonex CDP is public (`src/lib/products-data.ts`). Bayeaa and Brandyo.buzz are hidden pending real positioning — do not unhide without real content.
- **Insights**: no articles exist yet; `/insights` is an intentional editorial-intent page, not a populated blog.
- **Proof/case studies**: `src/lib/proof-data.ts` is empty by design — the Proof sections render nothing until verified case studies exist. Never fill it with invented content.
- **Legal**: no Privacy or Terms pages/copy exist yet — the footer's legal-links row is intentionally empty (`src/components/layout/footer.tsx`) rather than linking to unbuilt routes.

### Known pre-launch blockers

- Contact form has no delivery destination configured (`CONTACT_DELIVERY_WEBHOOK_URL` unset) — submissions will fail until a provider is chosen and connected.
- No real production domain configured (`NEXT_PUBLIC_SITE_URL` unset).
- No approved favicon/social-sharing image asset exists — see the code comments in `src/app/layout.tsx`.
- No analytics provider configured.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
