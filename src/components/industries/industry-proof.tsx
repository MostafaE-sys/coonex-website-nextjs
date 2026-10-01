import { Container } from "@/components/ui/container";
import { CASE_STUDIES } from "@/lib/proof-data";

/**
 * Conditional, industry-scoped Proof section — same rule as the homepage's
 * Proof component: renders nothing until a verified case study exists for
 * this industry. No placeholder cards, fake metrics, or invented results.
 */
export function IndustryProof({ industryName }: { industryName: string }) {
  const studies = CASE_STUDIES.filter((study) => study.industry === industryName);
  if (studies.length === 0) return null;

  const featuredStudy = studies.find((study) => study.featured) ?? studies[0];
  const supportingStudies = studies.filter((study) => study !== featuredStudy);

  return (
    <section className="bg-navy py-16 lg:py-24">
      <Container width="narrow">
        <p className="text-label font-semibold uppercase tracking-wide text-white/60">Results</p>
        <h2 className="mt-2 text-h2 font-bold text-white">Real results, connected.</h2>

        <div className="mt-10 space-y-8">
          <article>
            <h3 className="text-h3 font-bold text-white">{featuredStudy.title}</h3>
            <p className="mt-1.5 text-body-sm text-white/70">{featuredStudy.result}</p>
          </article>
          {supportingStudies.map((study) => (
            <article key={study.id}>
              <h3 className="text-h4 font-bold text-white">{study.title}</h3>
              <p className="mt-1.5 text-body-sm text-white/70">{study.result}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
