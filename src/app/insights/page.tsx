import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/ui/container";
import { CtaBand } from "@/components/sections/cta-band";
import { INSIGHT_TOPICS } from "@/lib/insights-data";

export const metadata: Metadata = {
  title: "Insights — Coonex",
  description: "Perspectives on growth, technology, data and connected business.",
  alternates: { canonical: "/insights" },
};

// No real articles exist anywhere in the project yet (confirmed by a full
// repository content inventory before writing this page). This is
// deliberately an editorial-intent page — a real, honest destination for
// the Insights nav link — not a placeholder card grid or a "Coming Soon"
// state. Replace this with a real article list only once real content
// exists; do not invent titles, authors, dates, or images to fill it.
export default function InsightsPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <section className="bg-white py-16 lg:py-24">
          <Container width="narrow" className="text-center">
            <p className="text-label font-semibold uppercase tracking-wide text-yale">Insights</p>
            <h1 className="mt-3 text-balance text-h2 font-bold tracking-tight text-navy lg:text-h1">
              Thinking on connected growth, technology and customer experience.
            </h1>
            <p className="mt-4 text-body-lg text-foreground-secondary">
              Perspectives on growth, technology, data and connected business.
            </p>
          </Container>
        </section>

        <section className="bg-white pb-16 lg:pb-24">
          <Container width="narrow">
            <h2 className="text-h3 font-bold text-navy">What Coonex writes about.</h2>
            <p className="mt-4 text-body-lg text-foreground-secondary">
              Insights will feature Coonex&apos;s own perspective on growth,
              technology, data and customer experience — organized around
              the same areas Coonex works in.
            </p>

            <ul className="mt-8 flex flex-wrap gap-x-3 gap-y-2">
              {INSIGHT_TOPICS.map((topic, index) => (
                <li key={topic} className="flex items-center gap-3">
                  <span className="text-body font-medium text-navy">{topic}</span>
                  {index < INSIGHT_TOPICS.length - 1 && (
                    <span aria-hidden="true" className="text-border">
                      ·
                    </span>
                  )}
                </li>
              ))}
            </ul>

            <p className="mt-8 text-body-sm text-foreground-muted">
              Nothing is published here yet. Real articles will appear as
              they&apos;re written — not before.
            </p>
          </Container>
        </section>

        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
