import { Container } from "@/components/ui/container";
import type { SolutionUseCase } from "@/lib/solution-page-types";

interface SolutionUseCasesProps {
  heading: string;
  intro?: string;
  cases: SolutionUseCase[];
}

/**
 * Parallel, non-sequential business use-case types — not a build process
 * (no Discover/Design/Develop/Launch). Each use case is a documented type of
 * system, not an invented client project.
 */
export function SolutionUseCases({ heading, intro, cases }: SolutionUseCasesProps) {
  return (
    <section className="bg-background-subtle py-14 lg:py-20">
      <Container>
        <div className="max-w-2xl">
          <h2 className="text-h2 font-bold text-navy">{heading}</h2>
          {intro && <p className="mt-3 text-body-lg text-foreground-secondary">{intro}</p>}
        </div>

        <div className="mt-10 grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-x-8 gap-y-10">
          {cases.map((useCase) => (
            <div key={useCase.type} className="border-t-2 border-border pt-5">
              <h3 className="text-h4 font-bold text-navy">{useCase.type}</h3>
              <p className="mt-2 text-body-sm text-foreground-secondary">{useCase.need}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {useCase.technologies.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-sm bg-white px-2.5 py-1 text-body-sm font-medium text-navy"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
