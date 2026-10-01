import type { SolutionProductRef } from "@/lib/solution-page-types";

export interface IndustryJourneyStage {
  label: string;
  /** What the business/customer is trying to accomplish at this stage — no Coonex framing here. */
  objective: string;
  /** How Coonex supports this stage — rendered in a separate, later section. */
  coonexRole: string;
  /**
   * A quiet grouping layer (e.g. Before/During/After) — only set when the
   * source explicitly documents such a framing for this industry (Events).
   * Consecutive stages sharing the same phase are grouped visually; this is
   * never presented as a named Coonex methodology unless the source does so.
   */
  phase?: string;
}

export interface IndustrySolutionRef {
  id: string;
  reason: string;
}

export interface IndustryUseCase {
  title: string;
  description: string;
}

/**
 * Structured content for one Industry page. Deliberately a separate model
 * from `SolutionPageContent`: Industries answer "how does this problem
 * appear inside a specific industry journey," not "what capability does
 * Coonex sell" — the journey is the primary narrative, Coonex's role is
 * secondary and shown only after the journey stands on its own.
 */
export interface IndustryPageContent {
  id: string;
  name: string;
  heroHeadline: string;
  heroSupport: string;
  challengesHeading: string;
  challengesBody: string;
  journeyHeading: string;
  journeyIntro?: string;
  journeyStages: IndustryJourneyStage[];
  connectedJourneyHeading: string;
  relevantSolutions: IndustrySolutionRef[];
  systems: string[];
  /** A short, non-alarmist caution shown under Systems — used only when the source calls for one (e.g. Healthcare's privacy/regulatory note). Never a compliance claim. */
  systemsNote?: string;
  product?: SolutionProductRef;
  useCases: IndustryUseCase[];
}
