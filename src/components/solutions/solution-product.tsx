import { Container } from "@/components/ui/container";
import { TextLink } from "@/components/ui/text-link";
import type { SolutionProductRef } from "@/lib/solution-page-types";

export function SolutionProduct({ product }: { product: SolutionProductRef }) {
  return (
    <section className="bg-white py-10 lg:py-14">
      <Container width="narrow">
        <p className="text-label font-semibold uppercase tracking-wide text-yale">
          Coonex Product
        </p>
        <h2 className="mt-2 text-h4 font-bold text-navy">{product.name}</h2>
        <p className="mt-2 text-body text-foreground-secondary">{product.description}</p>
        <TextLink href={`/products/${product.id}`} withArrow className="mt-3">
          Explore {product.name}
        </TextLink>
      </Container>
    </section>
  );
}
