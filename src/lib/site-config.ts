// This site is fully statically generated: canonical URLs, Open Graph URLs,
// and the sitemap are all baked into the output at build time, not decided
// per-request at runtime. That means the moment a missing real domain would
// silently ship wrong URLs is `next build`, not `next start` — a runtime-only
// check would fire too late, after the (wrong) static HTML already exists.
//
// `next dev` (NODE_ENV=development) may use the localhost fallback below.
// Any production build (`next build`/`next start`, both NODE_ENV=production)
// must fail loudly if the real domain isn't set — a broken build is a much
// clearer signal than a live site quietly canonicalizing itself to
// localhost. To build locally without a real domain (e.g. just to verify
// the build compiles), set NEXT_PUBLIC_SITE_URL to any placeholder value for
// that one command.
if (process.env.NODE_ENV === "production" && !process.env.NEXT_PUBLIC_SITE_URL) {
  throw new Error(
    "NEXT_PUBLIC_SITE_URL is not set. A real production domain is required to build or run this app in production — see .env.example.",
  );
}

// REAL DOMAIN REQUIRED — see the check above for the production guarantee.
// This fallback only ever applies to local development (`next dev`).
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const IS_REAL_SITE_URL = Boolean(process.env.NEXT_PUBLIC_SITE_URL);
