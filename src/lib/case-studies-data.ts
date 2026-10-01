// LEGACY / UNUSED — superseded by proof-data.ts (the current Proof/Outcomes
// data model). Not imported anywhere. Do not reuse as current Coonex content.
export interface CaseStudy {
  id: string;
  industry: string;
  title: string;
  result: string;
  featured?: boolean;
}

// TODO: REAL CONTENT REQUIRED — replace with verified Coonex customer stories.
// Never invent company names, project details, or outcomes.
export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "story-1",
    industry: "TODO: Industry",
    title: "Customer story placeholder",
    result: "TODO: Verified result",
    featured: true,
  },
  {
    id: "story-2",
    industry: "TODO: Industry",
    title: "Customer story placeholder",
    result: "TODO: Verified result",
  },
  {
    id: "story-3",
    industry: "TODO: Industry",
    title: "Customer story placeholder",
    result: "TODO: Verified result",
  },
];
