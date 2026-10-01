import { Container } from "@/components/ui/container";
import { CASE_STUDIES } from "@/lib/proof-data";

/**
 * Conditional Product proof section. `CaseStudy` currently has no
 * product-level tagging (only `industry`), so this can't yet be scoped to a
 * specific product — it renders nothing whenever there are no verified case
 * studies at all, which today means it always renders nothing. Once a real,
 * verified Coonex CDP case study exists, extend `CaseStudy` with a product
 * field rather than inventing content to fill this section.
 */
export function ProductProof() {
  if (CASE_STUDIES.length === 0) return null;

  const featuredStudy = CASE_STUDIES.find((study) => study.featured) ?? CASE_STUDIES[0];

  return (
    <section className="bg-navy py-16 lg:py-24">
      <Container width="narrow">
        <p className="text-label font-semibold uppercase tracking-wide text-white/60">Results</p>
        <h2 className="mt-2 text-h2 font-bold text-white">{featuredStudy.title}</h2>
        <p className="mt-3 text-body-sm text-white/70">{featuredStudy.result}</p>
      </Container>
    </section>
  );
}
