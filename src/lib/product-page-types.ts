export interface ProductSolutionRef {
  id: string;
  reason: string;
}

/**
 * Structured content for one Product page. Deliberately separate from
 * `SolutionPageContent` and `IndustryPageContent`: a Product answers "what
 * has Coonex built," which is a narrower, more conservative story than a
 * Solution (a business problem) or an Industry (a journey) — most fields
 * here are optional because a thinly-documented product should render a
 * shorter page, not a padded one.
 */
export interface ProductPageContent {
  id: string;
  name: string;
  heroHeadline: string;
  heroSupport: string;
  problemHeading: string;
  problemBody: string;
  relationshipHeading: string;
  relationshipIntro?: string;
  supportedSolutions: ProductSolutionRef[];
}
