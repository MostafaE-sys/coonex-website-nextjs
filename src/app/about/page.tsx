import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { TextLink } from "@/components/ui/text-link";
import { CtaBand } from "@/components/sections/cta-band";

export const metadata: Metadata = {
  title: "About — Coonex",
  description: "Coonex is a business, technology, data and growth group.",
  alternates: { canonical: "/about" },
};

// This page is deliberately short: the homepage already covers the
// disconnected-business problem (Problem section), the engagement model
// (StartWithOne), and a full listing of Products and Industries. Repeating
// those here would make About read as a second homepage. What About adds
// that the homepage doesn't is the explicit Solutions/Products/Industries
// framework explanation — kept as the page's one structured section.
export default function AboutPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <section className="bg-white py-16 lg:py-24">
          <Container width="narrow" className="text-center">
            <p className="text-label font-semibold uppercase tracking-wide text-yale">About Coonex</p>
            <h1 className="mt-3 text-balance text-h2 font-bold tracking-tight text-navy lg:text-h1">
              A connected business, technology, data and growth group.
            </h1>
            <p className="mt-4 text-body-lg text-foreground-secondary">
              Coonex is not a traditional full-service agency. It brings
              strategy, brand, technology, customer data, CRM, omnichannel,
              AI and automation together around real business problems.
            </p>
            <div className="mt-8">
              <Button href="/contact" size="md" withArrow>
                Talk to Coonex
              </Button>
            </div>
          </Container>
        </section>

        <section className="bg-white pb-16 lg:pb-24">
          <Container width="narrow">
            <h2 className="text-h3 font-bold text-navy">One connected model, not separate departments.</h2>
            <p className="mt-4 text-body-lg text-foreground-secondary">
              Most businesses run growth, customer data, technology and
              channels as separate efforts — different tools, different
              teams, no shared view of the customer or the business. Coonex
              exists to connect those areas around the problem that matters,
              rather than treating each one as its own disconnected service.
            </p>
          </Container>
        </section>

        <section className="bg-background-subtle py-16 lg:py-24">
          <Container>
            <div className="max-w-2xl">
              <h2 className="text-h2 font-bold text-navy">How Coonex is organized.</h2>
              <p className="mt-3 text-body-lg text-foreground-secondary">
                The site is built around three connected parts.
              </p>
            </div>

            <div className="mt-10 grid gap-10 sm:grid-cols-3">
              <div className="border-t-2 border-border pt-5">
                <p className="text-label font-semibold uppercase tracking-wide text-yale">Solutions</p>
                <h3 className="mt-1 text-h4 font-bold text-navy">What Coonex solves.</h3>
                <p className="mt-3 text-body text-foreground-secondary">
                  The business problems Coonex addresses — growth, customer
                  relationships, technology, data, and automation — grouped
                  into GROW, CONNECT and TRANSFORM.
                </p>
                <TextLink href="/solutions" withArrow className="mt-4">
                  Explore Solutions
                </TextLink>
              </div>

              <div className="border-t-2 border-border pt-5">
                <p className="text-label font-semibold uppercase tracking-wide text-yale">Products</p>
                <h3 className="mt-1 text-h4 font-bold text-navy">What Coonex builds.</h3>
                <p className="mt-3 text-body text-foreground-secondary">
                  The technology Coonex has built to support its Solutions.
                  Coonex CDP is currently public; more products will appear
                  as their positioning is ready.
                </p>
                <TextLink href="/products" withArrow className="mt-4">
                  Explore Products
                </TextLink>
              </div>

              <div className="border-t-2 border-border pt-5">
                <p className="text-label font-semibold uppercase tracking-wide text-yale">Industries</p>
                <h3 className="mt-1 text-h4 font-bold text-navy">Where Coonex applies it.</h3>
                <p className="mt-3 text-body text-foreground-secondary">
                  How Coonex&apos;s connected model adapts to real industry
                  journeys — currently E-commerce, Healthcare, Real Estate,
                  and Events.
                </p>
                <TextLink href="/industries" withArrow className="mt-4">
                  Explore Industries
                </TextLink>
              </div>
            </div>

            <p className="mt-10 max-w-2xl text-body-sm text-foreground-muted">
              A business doesn&apos;t need every part of this at once — most
              start with the problem that matters now, and connect more of
              the model as needs grow.
            </p>
          </Container>
        </section>

        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
