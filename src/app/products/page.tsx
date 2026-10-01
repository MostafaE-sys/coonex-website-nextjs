import type { Metadata } from "next";
import { Database } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { TextLink } from "@/components/ui/text-link";
import { CtaBand } from "@/components/sections/cta-band";
import { PRODUCTS } from "@/lib/products-data";
import { ICON_SIZE } from "@/lib/icon-size";

export const metadata: Metadata = {
  title: "Products — Coonex",
  description: "Coonex builds products that support its connected Solutions and business ecosystems.",
  alternates: { canonical: "/products" },
};

export default function ProductsHubPage() {
  const visibleProducts = PRODUCTS.filter((product) => !product.hidden);

  return (
    <>
      <Header />
      <main id="main-content">
        <section className="bg-white py-14 lg:py-20">
          <Container width="narrow" className="text-center">
            <p className="text-label font-semibold uppercase tracking-wide text-yale">Coonex Products</p>
            <h1 className="mt-3 text-balance text-h2 font-bold tracking-tight text-navy lg:text-h1">
              Technology built to support connected business systems.
            </h1>
            <p className="mt-4 text-body-lg text-foreground-secondary">
              Solutions explain the business problems Coonex solves. Products
              are the technology Coonex has actually built to support those
              Solutions and the wider Coonex ecosystem.
            </p>
            <div className="mt-8">
              <Button href="/contact" size="md" withArrow>
                Talk to Coonex
              </Button>
            </div>
          </Container>
        </section>

        <section className="bg-background-subtle py-14 lg:py-20">
          <Container width="narrow">
            {visibleProducts.map((product) => (
              <div key={product.id} className="rounded-md border border-border bg-white p-8">
                <p className="text-label font-semibold uppercase tracking-wide text-yale">Coonex Product</p>
                <div className="mt-2 flex items-center gap-2">
                  <Database aria-hidden="true" size={ICON_SIZE.md} className="text-seaweed" />
                  <h2 className="text-h3 font-bold text-navy">{product.name}</h2>
                </div>
                {product.description && (
                  <p className="mt-3 text-body-lg text-foreground-secondary">{product.description}</p>
                )}
                <TextLink href={`/products/${product.id}`} withArrow className="mt-5">
                  Explore {product.name}
                </TextLink>
              </div>
            ))}

            <p className="mt-10 text-body-sm text-foreground-muted">
              The Coonex product system is built to expand — additional
              products will appear here as their public positioning is ready.
            </p>
          </Container>
        </section>

        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
