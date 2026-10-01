import { ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/container";

export interface SolutionStage {
  label: string;
  description: string;
  items: string[];
}

interface SolutionStageFlowProps {
  heading: string;
  intro?: string;
  stages: SolutionStage[];
}

/**
 * A general-purpose "transformation flow" primitive — richer than Journey
 * (which is a plain ordered sequence of labels). Each stage carries its own
 * description and documented items, and the final stage gets a visually
 * distinct highlighted treatment to signal it as the payoff of the flow, not
 * just another equal step. Intended for reuse by future Solutions with a
 * similar multi-stage transformation story (not just Data & Intelligence).
 */
function StageBody({ stage, highlighted }: { stage: SolutionStage; highlighted: boolean }) {
  return (
    <div className={highlighted ? "rounded-md bg-navy p-6" : ""}>
      <h3
        className={`text-label font-semibold uppercase tracking-wide ${
          highlighted ? "text-white/70" : "text-yale"
        }`}
      >
        {stage.label}
      </h3>
      <p className={`mt-2 text-body-sm ${highlighted ? "text-white/90" : "text-foreground-secondary"}`}>
        {stage.description}
      </p>
      <ul className="mt-3 space-y-1">
        {stage.items.map((item) => (
          <li
            key={item}
            className={`text-body-sm font-medium ${highlighted ? "text-white" : "text-navy"}`}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SolutionStageFlow({ heading, intro, stages }: SolutionStageFlowProps) {
  return (
    <section className="bg-background-subtle py-14 lg:py-20">
      <Container>
        <div className="max-w-2xl">
          <h2 className="text-h2 font-bold text-navy">{heading}</h2>
          {intro && <p className="mt-3 text-body-lg text-foreground-secondary">{intro}</p>}
        </div>

        <div className="mt-10">
          {/* Desktop/tablet: horizontal flow */}
          <div className="hidden items-start gap-4 lg:flex">
            {stages.map((stage, index) => (
              <div key={stage.label} className="flex flex-1 items-start gap-4">
                <div className="min-w-0 flex-1">
                  <StageBody stage={stage} highlighted={index === stages.length - 1} />
                </div>
                {index < stages.length - 1 && (
                  <ChevronRight aria-hidden="true" size={18} className="mt-6 shrink-0 text-border" />
                )}
              </div>
            ))}
          </div>

          {/* Mobile: vertical flow, each stage keeps its full detail */}
          <div className="flex flex-col gap-6 lg:hidden">
            {stages.map((stage, index) => (
              <div key={stage.label}>
                {index > 0 && (
                  <div className="mb-6 flex justify-center" aria-hidden="true">
                    <span className="h-6 w-px bg-border" />
                  </div>
                )}
                <StageBody stage={stage} highlighted={index === stages.length - 1} />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
