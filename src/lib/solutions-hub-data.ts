export interface SolutionGroupIntro {
  id: string;
  label: string;
  statement: string;
  reverse?: boolean;
}

// Group statements are draft copy synthesizing the master context's group
// descriptions — not verbatim source text. Solution-level names and one-line
// messages continue to come from solutions-data.ts.
export const SOLUTION_GROUP_INTROS: SolutionGroupIntro[] = [
  {
    id: "grow",
    label: "GROW",
    statement:
      "GROW brings together performance marketing, brand, and commerce — creating demand, experience and commercial growth.",
  },
  {
    id: "connect",
    label: "CONNECT",
    statement:
      "CONNECT brings together CRM, omnichannel experience, and connected systems — linking customer relationships, channels, and data into one view.",
    reverse: true,
  },
  {
    id: "transform",
    label: "TRANSFORM",
    statement:
      "TRANSFORM brings together technology, data, and AI — building intelligence and automation around the business.",
  },
];

// One possible example path across Solutions — explicitly not a required
// sequence. Shown on the Solutions Hub to illustrate how a business can start
// with one Solution and connect more over time.
export const EXAMPLE_PATH = [
  { label: "Growth & Performance" },
  { label: "CRM & Customer Lifecycle" },
  { label: "Data & Intelligence" },
  { label: "AI & Automation" },
];
