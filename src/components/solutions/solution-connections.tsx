import { Container } from "@/components/ui/container";
import type { SolutionConnections as SolutionConnectionsData } from "@/lib/solution-page-types";

type SolutionConnectionsProps = SolutionConnectionsData;

export function SolutionConnections({ eyebrow, heading, steps }: SolutionConnectionsProps) {
  return (
    <section className="bg-white py-14 lg:py-20">
      <Container width="narrow">
        <p className="text-label font-semibold uppercase tracking-wide text-yale">{eyebrow}</p>
        <h2 className="mt-2 text-h3 font-bold text-navy">{heading}</h2>
        <dl className="mt-8 divide-y divide-border-subtle">
          {steps.map((step) => (
            <div key={step.transition} className="grid gap-1.5 py-4 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] sm:gap-6">
              <dt className="text-body-sm font-semibold text-navy">{step.transition}</dt>
              <dd className="text-body-sm text-foreground-secondary">{step.capabilities}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
