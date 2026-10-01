import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { TextLink } from "@/components/ui/text-link";
import { Journey } from "@/components/ui/journey";
import { CtaBand } from "@/components/sections/cta-band";
import { INDUSTRIES } from "@/lib/industries-data";

export const metadata: Metadata = {
  title: "Industries — Coonex",
  description:
    "Coonex applies its growth, customer, technology and data capabilities differently depending on the industry's real journey.",
  alternates: { canonical: "/industries" },
};

export default function IndustriesHubPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <section className="bg-white py-14 lg:py-20">
          <Container width="narrow" className="text-center">
            <p className="text-label font-semibold uppercase tracking-wide text-yale">Industries</p>
            <h1 className="mt-3 text-balance text-h2 font-bold tracking-tight text-navy lg:text-h1">
              Connected business journeys, built around how your industry works.
            </h1>
            <p className="mt-4 text-body-lg text-foreground-secondary">
              Coonex applies its growth, customer, technology and data
              capabilities differently depending on the industry&apos;s real
              journey.
            </p>
            <div className="mt-8">
              <Button href="/contact" size="md" withArrow>
                Talk to Coonex
              </Button>
            </div>
          </Container>
        </section>

        {INDUSTRIES.map((industry, index) => (
          <section
            key={industry.id}
            className={`${index % 2 === 0 ? "bg-background-subtle" : "bg-white"} py-14 lg:py-20`}
          >
            <Container>
              <div className="max-w-2xl">
                <h2>
                  <Link
                    href={industry.href}
                    className="text-h2 font-bold text-navy transition-colors hover:text-yale"
                  >
                    {industry.name}
                  </Link>
                </h2>
                <p className="mt-3 text-body-lg text-foreground-secondary">{industry.message}</p>
              </div>

              <div className="mt-8">
                <Journey steps={industry.journey} />
              </div>

              <TextLink href={industry.href} withArrow className="mt-6">
                {industry.ctaLabel}
              </TextLink>
            </Container>
          </section>
        ))}

        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
