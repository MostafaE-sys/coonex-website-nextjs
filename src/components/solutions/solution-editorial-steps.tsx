import { Container } from "@/components/ui/container";
import type { SolutionEditorialStep } from "@/lib/solution-page-types";

interface SolutionEditorialStepsProps {
  heading: string;
  intro?: string;
  steps: SolutionEditorialStep[];
}

/**
 * A vertical, magazine-style numbered progression — deliberately without
 * Journey's chevron/connector language, for a Solution whose story should
 * feel more visual and editorial than procedural (Brand & Digital
 * Experience). Always stacks vertically, even on desktop, since the point is
 * a slower, more deliberate read rather than a quick horizontal scan.
 */
export function SolutionEditorialSteps({ heading, intro, steps }: SolutionEditorialStepsProps) {
  return (
    <section className="bg-white py-14 lg:py-20">
      <Container width="narrow">
        <h2 className="text-h2 font-bold text-navy">{heading}</h2>
        {intro && <p className="mt-3 text-body-lg text-foreground-secondary">{intro}</p>}

        <ol className="mt-12 divide-y divide-border-subtle">
          {steps.map((step, index) => (
            <li key={step.label} className="flex gap-6 py-8 first:pt-0 last:pb-0">
              <span className="text-h3 font-bold text-border" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-h3 font-bold text-navy">{step.label}</h3>
                <p className="mt-2 text-body-lg text-foreground-secondary">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
