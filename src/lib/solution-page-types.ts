import type { SolutionStage } from "@/components/solutions/solution-stage-flow";

export interface SolutionCapabilityGroup {
  name: string;
  items: string[];
}

export interface SolutionConnectionStep {
  transition: string;
  capabilities: string;
}

export interface SolutionConnections {
  eyebrow: string;
  heading: string;
  steps: SolutionConnectionStep[];
}

export interface RelatedSolutionRef {
  id: string;
  reason: string;
}

export interface IndustryApplication {
  industryId: string;
  industryName: string;
  path: string[];
  /**
   * True (default) renders `path` as a connected sequence with chevrons —
   * appropriate when the items genuinely happen in order (CRM's industry
   * examples). False renders a plain list with no implied sequence —
   * appropriate when the items are just relevant areas, not a journey
   * (Data & Intelligence's industry examples).
   */
  ordered?: boolean;
}

export interface SolutionProductRef {
  id: string;
  name: string;
  description: string;
}

export interface SolutionEditorialStep {
  label: string;
  description: string;
}

export interface SolutionHubChannel {
  label: string;
}

export interface SolutionTransformationLayer {
  before: { label: string; items: string[] };
  connection: { label: string; items: string[] };
  after: { label: string; description?: string };
}

export interface SolutionUseCase {
  type: string;
  need: string;
  technologies: string[];
}

export interface SolutionWorkflowStep {
  label: string;
}

export interface SolutionWorkflowExample {
  id: string;
  label: string;
  steps: SolutionWorkflowStep[];
}

/**
 * The page's central, Solution-specific narrative. Exactly one of these
 * should be set — this is the formalized "narrative slot": different
 * Solutions tell fundamentally different stories, and the shared page shell
 * adapts to whichever one is provided rather than forcing every Solution
 * into one shape.
 *   - `journey`: a plain ordered sequence (CRM's customer lifecycle, Growth &
 *     Performance's commercial funnel — genuinely the same shape, unrelated
 *     content).
 *   - `stageFlow`: a richer multi-stage transformation, each stage carrying
 *     its own description and documented items (Data & Intelligence,
 *     Commerce).
 *   - `editorialSteps`: a vertical, magazine-style numbered progression with
 *     no chevron/connector language — for a Solution that should feel more
 *     visual/editorial than procedural (Brand & Digital Experience).
 *   - `hub`: one center (the customer) connected to several documented
 *     channels, for a Solution whose story is explicitly NOT a left-to-right
 *     sequence but channels operating around one center (Omnichannel
 *     Experience).
 *   - `transformationLayer`: Before (disconnected) → Connection Layer
 *     (Coonex) → After (connected), for a Solution whose story is a business
 *     transformation rather than a procedural flow (Connected Business
 *     Ecosystems).
 *   - `useCases`: parallel, non-sequential business use-case types, each with
 *     its own need and relevant technology categories — for a Solution led
 *     by business use cases rather than a build process (Technology &
 *     Digital Products).
 *   - `workflow`: a selector over several parallel concept workflows, each
 *     rendered as a short step sequence — for a Solution whose capabilities
 *     are best shown as concrete, practical examples (AI & Automation).
 * Add a new shape here only when a real Solution's content genuinely doesn't
 * fit an existing one — don't pre-guess future shapes.
 */
export interface SolutionNarrative {
  journey?: { eyebrow: string; heading: string; steps: { label: string }[] };
  stageFlow?: { heading: string; intro?: string; stages: SolutionStage[] };
  editorialSteps?: { heading: string; intro?: string; steps: SolutionEditorialStep[] };
  hub?: {
    eyebrow: string;
    heading: string;
    centerLabel: string;
    channels: SolutionHubChannel[];
  };
  transformationLayer?: {
    heading: string;
    intro?: string;
    layer: SolutionTransformationLayer;
  };
  useCases?: { heading: string; intro?: string; cases: SolutionUseCase[] };
  workflow?: { heading: string; intro?: string; examples: SolutionWorkflowExample[] };
}

/**
 * Structured content for one Solution page. Several fields are optional
 * because different Solutions tell different stories — see
 * `SolutionNarrative` for the central-story slot specifically.
 */
export interface SolutionPageContent {
  id: string;
  groupId: string;
  groupLabel: string;
  name: string;
  heroHeadline: string;
  heroSupport: string;
  problemHeading: string;
  problemBody: string;
  narrative: SolutionNarrative;
  connections?: SolutionConnections;
  capabilityGroups: SolutionCapabilityGroup[];
  channels?: string[];
  relatedSolutions: RelatedSolutionRef[];
  product?: SolutionProductRef;
  industryApplications: IndustryApplication[];
}
