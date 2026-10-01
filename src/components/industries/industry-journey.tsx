import { Container } from "@/components/ui/container";
import type { IndustryJourneyStage } from "@/lib/industry-page-types";

interface IndustryJourneyProps {
  heading: string;
  intro?: string;
  stages: IndustryJourneyStage[];
}

interface StageGroup {
  phase?: string;
  startIndex: number;
  stages: IndustryJourneyStage[];
}

function groupByPhase(stages: IndustryJourneyStage[]): StageGroup[] {
  const groups: StageGroup[] = [];
  stages.forEach((stage, index) => {
    const current = groups[groups.length - 1];
    if (current && current.phase === stage.phase) {
      current.stages.push(stage);
    } else {
      groups.push({ phase: stage.phase, startIndex: index, stages: [stage] });
    }
  });
  return groups;
}

/**
 * A numbered stepper/timeline — deliberately distinct from SolutionStageFlow
 * (boxed panels, last stage filled) and from Journey (plain inline text).
 * Industries and Solutions must not produce the same screenshot with the
 * copy swapped, so this section shows only the stage and its business
 * objective — no Coonex framing, no boxed "payoff" panel. Coonex's role is
 * introduced later, in a separate section.
 *
 * Optionally groups stages into named phases (e.g. Events' documented
 * Before/During/After) as a quiet layer — a small caption plus a real
 * `role="group"`/`aria-label` wrapper, never a background band or spatial
 * cue alone, so the grouping is understandable without color or position.
 * When no stage sets `phase`, this renders exactly as the flat stepper it
 * always has.
 */
export function IndustryJourney({ heading, intro, stages }: IndustryJourneyProps) {
  const groups = groupByPhase(stages);

  return (
    <section className="bg-white py-14 lg:py-20">
      <Container>
        <div className="max-w-2xl">
          <h2 className="text-h2 font-bold text-navy">{heading}</h2>
          {intro && <p className="mt-3 text-body-lg text-foreground-secondary">{intro}</p>}
        </div>

        <div className="mt-12 hidden gap-6 lg:flex">
          {groups.map((group, groupIndex) => {
            const startIndex = group.startIndex;
            return (
              <div
                key={group.phase ?? `group-${groupIndex}`}
                role={group.phase ? "group" : undefined}
                aria-label={group.phase}
                style={{ flexGrow: group.stages.length, flexBasis: 0 }}
              >
                {group.phase && (
                  <p className="mb-3 border-t-2 border-navy/20 pt-2 text-caption font-semibold uppercase tracking-wide text-foreground-muted">
                    {group.phase}
                  </p>
                )}
                <ol className="flex">
                  {group.stages.map((stage, i) => {
                    const index = startIndex + i;
                    return (
                      <li key={stage.label} className="flex-1 pr-6 last:pr-0">
                        <div className="flex items-center">
                          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-navy text-body-sm font-bold text-white">
                            {index + 1}
                          </span>
                          {index < stages.length - 1 && (
                            <span aria-hidden="true" className="ml-2 h-px w-full bg-border" />
                          )}
                        </div>
                        <h3 className="mt-4 text-h4 font-bold text-navy">{stage.label}</h3>
                        <p className="mt-1.5 text-body-sm text-foreground-secondary">{stage.objective}</p>
                      </li>
                    );
                  })}
                </ol>
              </div>
            );
          })}
        </div>

        <div className="mt-12 flex flex-col gap-8 lg:hidden">
          {groups.map((group, groupIndex) => (
            <div
              key={group.phase ?? `group-m-${groupIndex}`}
              role={group.phase ? "group" : undefined}
              aria-label={group.phase}
            >
              {group.phase && (
                <p className="mb-4 text-caption font-semibold uppercase tracking-wide text-foreground-muted">
                  {group.phase}
                </p>
              )}
              <ol className="flex flex-col gap-8">
                {group.stages.map((stage, i) => {
                  const index = group.startIndex + i;
                  return (
                    <li key={stage.label} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-navy text-body-sm font-bold text-white">
                          {index + 1}
                        </span>
                        {index < stages.length - 1 && (
                          <span aria-hidden="true" className="mt-2 w-px flex-1 bg-border" />
                        )}
                      </div>
                      <div className="pb-2">
                        <h3 className="text-h4 font-bold text-navy">{stage.label}</h3>
                        <p className="mt-1.5 text-body-sm text-foreground-secondary">{stage.objective}</p>
                      </div>
                    </li>
                  );
                })}
              </ol>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
