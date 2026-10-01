import { Container } from "@/components/ui/container";
import type { IndustryUseCase } from "@/lib/industry-page-types";

interface IndustryUseCasesProps {
  useCases: IndustryUseCase[];
}

/**
 * Business situations inside the industry journey — described, not claimed
 * as a result. Deliberately simpler than SolutionUseCases (no technology
 * tags): an Industry use case is a situation, not a system type.
 */
export function IndustryUseCases({ useCases }: IndustryUseCasesProps) {
  return (
    <section className="bg-white py-14 lg:py-20">
      <Container width="narrow">
        <p className="text-label font-semibold uppercase tracking-wide text-yale">Use Cases</p>
        <h2 className="mt-2 text-h3 font-bold text-navy">Where this shows up.</h2>
        <ul className="mt-8 divide-y divide-border-subtle">
          {useCases.map((useCase) => (
            <li key={useCase.title} className="py-5 first:pt-0 last:pb-0">
              <h3 className="text-body-lg font-semibold text-navy">{useCase.title}</h3>
              <p className="mt-1.5 text-body-sm text-foreground-secondary">{useCase.description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
