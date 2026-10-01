export interface Solution {
  id: string;
  name: string;
  message: string;
}

export interface SolutionGroup {
  id: string;
  label: string;
  solutions: Solution[];
}

// Source of truth: Coonex Master Brand & Website Context — Solutions Architecture.
// Shared by the Solutions mega-menu and the homepage Solutions Ecosystem section.
export const SOLUTION_GROUPS: SolutionGroup[] = [
  {
    id: "grow",
    label: "GROW",
    solutions: [
      {
        id: "growth-performance",
        name: "Growth & Performance",
        message: "Turn marketing investment into measurable business growth.",
      },
      {
        id: "brand-digital-experience",
        name: "Brand & Digital Experience",
        message: "Build a brand people recognize and an experience they remember.",
      },
      {
        id: "commerce",
        name: "Commerce",
        message: "Build a connected commerce engine designed to sell, learn and grow.",
      },
    ],
  },
  {
    id: "connect",
    label: "CONNECT",
    solutions: [
      {
        id: "crm-customer-lifecycle",
        name: "CRM & Customer Lifecycle",
        message: "Turn every customer interaction into a connected relationship.",
      },
      {
        id: "omnichannel-experience",
        name: "Omnichannel Experience",
        message: "One customer. Every channel. One connected experience.",
      },
      {
        id: "connected-business-ecosystems",
        name: "Connected Business Ecosystems",
        message: "Connect systems, data, teams and customer experiences into one ecosystem.",
      },
    ],
  },
  {
    id: "transform",
    label: "TRANSFORM",
    solutions: [
      {
        id: "technology-digital-products",
        name: "Technology & Digital Products",
        message: "Build technology around the business, not the business around technology.",
      },
      {
        id: "data-intelligence",
        name: "Data & Intelligence",
        message: "Turn disconnected data into decisions and action.",
      },
      {
        id: "ai-automation",
        name: "AI & Automation",
        message: "Put AI to work inside real business processes.",
      },
    ],
  },
];
