import { SolutionJourney } from "@/components/solutions/solution-journey";
import { SolutionStageFlow } from "@/components/solutions/solution-stage-flow";
import { SolutionEditorialSteps } from "@/components/solutions/solution-editorial-steps";
import { SolutionHub } from "@/components/solutions/solution-hub";
import { SolutionTransformationLayer } from "@/components/solutions/solution-transformation-layer";
import { SolutionUseCases } from "@/components/solutions/solution-use-cases";
import { SolutionWorkflow } from "@/components/solutions/solution-workflow";
import type { SolutionNarrative as SolutionNarrativeData } from "@/lib/solution-page-types";

/**
 * Renders whichever narrative shape a Solution's content provides. Exactly
 * one field is expected to be set on `narrative` — this component is the
 * single place that dispatches to the right presentation, so individual
 * Solution pages don't each repeat the same if/else block.
 */
export function SolutionNarrative({ narrative }: { narrative: SolutionNarrativeData }) {
  if (narrative.journey) {
    return (
      <SolutionJourney
        eyebrow={narrative.journey.eyebrow}
        heading={narrative.journey.heading}
        steps={narrative.journey.steps}
      />
    );
  }
  if (narrative.stageFlow) {
    return (
      <SolutionStageFlow
        heading={narrative.stageFlow.heading}
        intro={narrative.stageFlow.intro}
        stages={narrative.stageFlow.stages}
      />
    );
  }
  if (narrative.editorialSteps) {
    return (
      <SolutionEditorialSteps
        heading={narrative.editorialSteps.heading}
        intro={narrative.editorialSteps.intro}
        steps={narrative.editorialSteps.steps}
      />
    );
  }
  if (narrative.hub) {
    return (
      <SolutionHub
        eyebrow={narrative.hub.eyebrow}
        heading={narrative.hub.heading}
        centerLabel={narrative.hub.centerLabel}
        channels={narrative.hub.channels}
      />
    );
  }
  if (narrative.transformationLayer) {
    return (
      <SolutionTransformationLayer
        heading={narrative.transformationLayer.heading}
        intro={narrative.transformationLayer.intro}
        layer={narrative.transformationLayer.layer}
      />
    );
  }
  if (narrative.useCases) {
    return (
      <SolutionUseCases
        heading={narrative.useCases.heading}
        intro={narrative.useCases.intro}
        cases={narrative.useCases.cases}
      />
    );
  }
  if (narrative.workflow) {
    return (
      <SolutionWorkflow
        heading={narrative.workflow.heading}
        intro={narrative.workflow.intro}
        examples={narrative.workflow.examples}
      />
    );
  }
  return null;
}
