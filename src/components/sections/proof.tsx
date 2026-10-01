import { Container } from "@/components/ui/container";
import { CASE_STUDIES, PROOF_METRIC, TESTIMONIALS, type CaseStudy } from "@/lib/proof-data";

function CaseStudyBlock({ study, featured = false }: { study: CaseStudy; featured?: boolean }) {
  return (
    <article>
      <p className="text-label font-semibold uppercase tracking-wide text-white/60">
        {study.industry}
      </p>
      <h3 className={`mt-1.5 font-bold text-white ${featured ? "text-h3" : "text-h4"}`}>
        {study.title}
      </h3>
      <p className="mt-1.5 text-body-sm text-white/70">{study.result}</p>
    </article>
  );
}

/**
 * Conditional Proof/Outcomes section. Renders nothing until CASE_STUDIES has
 * at least one verified entry — no placeholder cards, fake metrics, or
 * invented quotes are ever shown in production.
 */
export function Proof() {
  if (CASE_STUDIES.length === 0) return null;

  const featuredStudy = CASE_STUDIES.find((study) => study.featured) ?? CASE_STUDIES[0];
  const supportingStudies = CASE_STUDIES.filter((study) => study !== featuredStudy);

  return (
    <section className="bg-navy py-16 lg:py-24">
      <Container>
        <div className="max-w-2xl">
          <p className="text-label font-semibold uppercase tracking-wide text-white/60">
            Outcomes
          </p>
          <h2 className="mt-2 text-h2 font-bold text-white">Real results, connected.</h2>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-3 lg:gap-10">
          <div className="lg:col-span-2">
            <CaseStudyBlock study={featuredStudy} featured />
          </div>
          {supportingStudies.length > 0 && (
            <div className="grid gap-8 sm:grid-cols-2 lg:col-span-1 lg:grid-cols-1">
              {supportingStudies.map((study) => (
                <CaseStudyBlock key={study.id} study={study} />
              ))}
            </div>
          )}
        </div>

        {(PROOF_METRIC || TESTIMONIALS.length > 0) && (
          <div className="mt-14 border-t border-white/15 pt-10">
            {PROOF_METRIC && (
              <div className="mb-8">
                <p className="text-h2 font-bold text-white">{PROOF_METRIC.value}</p>
                <p className="mt-1 text-body-sm text-white/70">{PROOF_METRIC.label}</p>
              </div>
            )}
            {TESTIMONIALS.length > 0 && (
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {TESTIMONIALS.map((testimonial) => (
                  <div key={testimonial.name}>
                    <p className="text-body-sm text-white/90">&ldquo;{testimonial.quote}&rdquo;</p>
                    <p className="mt-3 text-body-sm font-semibold text-white">{testimonial.name}</p>
                    <p className="text-caption text-white/60">{testimonial.role}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </Container>
    </section>
  );
}
