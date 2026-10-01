import { Database } from "lucide-react";
import { Container } from "@/components/ui/container";
import { TextLink } from "@/components/ui/text-link";
import { Reveal } from "@/components/visuals/reveal";
import { PRODUCTS } from "@/lib/products-data";
import { ICON_SIZE } from "@/lib/icon-size";

// Confirmed relationship from the Coonex CDP description — re-presented as a
// visual, not a new claim. If a second product ever ships, this diagram
// should become product-specific again rather than generalized.
const CDP_CAPABILITIES = [
  { label: "Data & Intelligence", top: 10, left: 88 },
  { label: "CRM & Customer Lifecycle", top: 37, left: 88 },
  { label: "Omnichannel Experience", top: 64, left: 88 },
  { label: "Connected Business Ecosystems", top: 91, left: 88 },
];
const CDP_CENTER = { top: 50, left: 14 };

function ProductRelationshipDiagram() {
  return (
    <div className="relative aspect-[4/3] w-full max-w-md">
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full"
      >
        {CDP_CAPABILITIES.map((capability) => (
          <line
            key={capability.label}
            x1={CDP_CENTER.left}
            y1={CDP_CENTER.top}
            x2={capability.left}
            y2={capability.top}
            className="stroke-border"
            strokeWidth="0.5"
          />
        ))}
      </svg>

      <div
        style={{ top: `${CDP_CENTER.top}%`, left: `${CDP_CENTER.left}%` }}
        className="absolute flex -translate-y-1/2 items-center gap-2 rounded-sm border border-navy bg-navy px-3 py-2"
      >
        <Database aria-hidden="true" size={ICON_SIZE.sm} className="shrink-0 text-seaweed" />
        <span className="whitespace-nowrap text-body-sm font-bold text-white">Coonex CDP</span>
      </div>

      {CDP_CAPABILITIES.map((capability) => (
        <span
          key={capability.label}
          style={{ top: `${capability.top}%`, left: `${capability.left}%` }}
          className="absolute max-w-[8.5rem] -translate-x-full -translate-y-1/2 text-right text-body-sm font-medium text-foreground-secondary"
        >
          {capability.label}
        </span>
      ))}
    </div>
  );
}

export function Products() {
  const visibleProducts = PRODUCTS.filter((product) => !product.hidden);
  if (visibleProducts.length === 0) return null;
  const cdp = visibleProducts.find((product) => product.id === "coonex-cdp");

  return (
    <section className="bg-white py-14 lg:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <Reveal>
            <h2 className="text-h2 font-bold text-navy">Coonex Products</h2>
            <p className="mt-3 text-body-lg text-foreground-secondary">
              Technology Coonex has built to support our Solutions.
            </p>

            <div className="mt-8 border-t border-border pt-6">
              {visibleProducts.map((product) => (
                <div key={product.id}>
                  <h3 className="text-h4 font-bold text-navy">{product.name}</h3>
                  {product.description && (
                    <p className="mt-2 text-body text-foreground-secondary">{product.description}</p>
                  )}
                </div>
              ))}
              <TextLink href="/products" withArrow className="mt-5">
                Explore Products
              </TextLink>
            </div>
          </Reveal>

          {cdp && (
            <Reveal className="flex justify-center lg:justify-end">
              <ProductRelationshipDiagram />
            </Reveal>
          )}
        </div>
      </Container>
    </section>
  );
}
