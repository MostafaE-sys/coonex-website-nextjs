import type { NextConfig } from "next";

// Evidence-based baseline security headers only. No Content-Security-Policy
// yet: the site currently loads zero third-party scripts/analytics, so a
// CSP would need to be revisited the moment one is added anyway — adding a
// strict policy now would be guessing at resources that don't exist yet.
const SECURITY_HEADERS = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: SECURITY_HEADERS,
      },
    ];
  },
};

export default nextConfig;
