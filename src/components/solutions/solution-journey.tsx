import { Container } from "@/components/ui/container";
import { Journey } from "@/components/ui/journey";

interface SolutionJourneyProps {
  eyebrow: string;
  heading: string;
  steps: { label: string }[];
}

/**
 * A plain ordered sequence of named stages — the simplest of the Solution
 * narrative shapes. Used for CRM's customer lifecycle and reused as-is for
 * Growth & Performance's commercial funnel, since both are genuinely the
 * same shape (a linear progression of labeled stages) even though the
 * content is unrelated.
 */
export function SolutionJourney({ eyebrow, heading, steps }: SolutionJourneyProps) {
  return (
    <section className="bg-background-subtle py-14 lg:py-20">
      <Container>
        <div className="max-w-2xl">
          <p className="text-label font-semibold uppercase tracking-wide text-yale">{eyebrow}</p>
          <h2 className="mt-2 text-h2 font-bold text-navy">{heading}</h2>
        </div>
        <div className="mt-10">
          <Journey steps={steps} />
        </div>
      </Container>
    </section>
  );
}
