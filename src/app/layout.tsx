import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SITE_URL } from "@/lib/site-config";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const TITLE = "Coonex — Growth, Technology, and Data, Connected";
const DESCRIPTION =
  "Coonex brings growth, technology, customer data and AI together into connected business solutions.";

export const metadata: Metadata = {
  // REAL DOMAIN REQUIRED before deploy — see src/lib/site-config.ts. Every
  // page's canonical URL and Open Graph URL derive from this.
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/",
    siteName: "Coonex",
    locale: "en_US",
    type: "website",
    // OG IMAGE ASSET NEEDED — no approved Coonex social-sharing image exists
    // yet. Add one (recommended 1200x630) once available; omitted rather
    // than faked.
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <a
          href="#main-content"
          className="sr-only focus-visible:not-sr-only focus-visible:fixed focus-visible:left-4 focus-visible:top-4 focus-visible:z-[100] focus-visible:rounded-sm focus-visible:bg-navy focus-visible:px-4 focus-visible:py-2 focus-visible:text-body-sm focus-visible:font-semibold focus-visible:text-white"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
