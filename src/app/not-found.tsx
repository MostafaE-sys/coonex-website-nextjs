import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Page Not Found — Coonex",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="main-content">
        <section className="bg-white py-24 lg:py-32">
          <Container width="narrow" className="text-center">
            <p className="text-label font-semibold uppercase tracking-wide text-yale">404</p>
            <h1 className="mt-3 text-balance text-h2 font-bold tracking-tight text-navy lg:text-h1">
              We can&apos;t find that page.
            </h1>
            <p className="mt-4 text-body-lg text-foreground-secondary">
              The page you&apos;re looking for doesn&apos;t exist or may have moved.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="/" size="md">
                Back to Home
              </Button>
              <Button href="/solutions" variant="secondary" size="md">
                Explore Solutions
              </Button>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
