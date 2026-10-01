// LEGACY / UNUSED — manufacturing-era metrics strip from the project's
// initial (incorrect) manufacturing positioning. Not imported anywhere;
// kept for reference only. Do not re-wire into any page — every metric slot
// here is manufacturing-specific and unverified.
import { Container } from "@/components/ui/container";

interface Metric {
  label: string;
}
const METRICS: Metric[] = [
  { label: "Manufacturing partners" },
  { label: "Countries served" },
  { label: "Average quote turnaround" },
  { label: "Parts delivered" },
];

export function MetricsStrip() {
  return (
    <section className="bg-background-subtle py-8 lg:py-10">
      <Container>
        <div className="grid grid-cols-2 gap-y-6 lg:grid-cols-4 lg:gap-y-0">
          {METRICS.map((metric) => (
            <div key={metric.label} className="text-center">
              <p className="text-body font-semibold tracking-wide text-foreground-muted">
                TODO: REAL METRIC
              </p>
              <p className="mt-1.5 text-caption uppercase tracking-wide text-foreground-muted">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
