export type EcosystemStageType =
  | "industry"
  | "challenge"
  | "solution"
  | "capability"
  | "product"
  | "outcome";

export interface EcosystemStage {
  type: EcosystemStageType;
  value: string;
}

export interface EcosystemExample {
  id: string;
  name: string;
  stages: EcosystemStage[];
}

export const STAGE_LABELS: Record<EcosystemStageType, string> = {
  industry: "Industry",
  challenge: "Challenge",
  solution: "Solution",
  capability: "Capability",
  product: "Product",
  outcome: "Outcome",
};

// Every relationship below reflects what the Coonex Master Context documents.
// "product" remains a valid, supported stage type — Coonex CDP is confirmed to
// support Data & Intelligence, CRM, Omnichannel and Connected Business
// Ecosystems as SOLUTION areas, but the document does not confirm CDP (or any
// product) as the product used in a specific industry's worked example. A
// capability being listed for an industry does not by itself establish a
// verified product-to-industry mapping, so no example currently includes a
// product stage. Bayeaa and Brandyo.buzz are never forced into a flow either.
// Flows simply close after the last confirmed stage — never with a
// placeholder like "N/A" or "Coming soon".
// Stage counts intentionally differ per industry rather than being padded to match.
export const ECOSYSTEM_EXAMPLES: EcosystemExample[] = [
  {
    id: "real-estate",
    name: "Real Estate",
    stages: [
      { type: "industry", value: "Real Estate" },
      { type: "challenge", value: "Disconnected property leads and customer data" },
      { type: "solution", value: "CRM & Customer Lifecycle" },
      { type: "capability", value: "Data & Intelligence" },
      { type: "outcome", value: "A more connected view of leads, customers, and sales activity" },
    ],
  },
  {
    id: "ecommerce",
    name: "E-commerce",
    stages: [
      { type: "industry", value: "E-commerce" },
      { type: "challenge", value: "Customer data scattered across store, marketing, and support" },
      { type: "solution", value: "Commerce" },
      { type: "outcome", value: "A connected view of shopper behavior and orders" },
    ],
  },
  {
    id: "healthcare",
    name: "Healthcare",
    stages: [
      { type: "industry", value: "Healthcare" },
      { type: "challenge", value: "Booking and engagement often live in separate systems" },
      { type: "solution", value: "CRM & Customer Lifecycle" },
      { type: "capability", value: "Omnichannel Experience" },
      { type: "outcome", value: "A more connected view of the patient journey" },
    ],
  },
  {
    id: "events",
    name: "Events",
    stages: [
      { type: "industry", value: "Events" },
      { type: "challenge", value: "Registration, engagement, and event data spread across separate tools" },
      { type: "solution", value: "CRM & Customer Lifecycle" },
      { type: "capability", value: "Data & Intelligence" },
      { type: "outcome", value: "A connected view of attendee engagement across the event lifecycle" },
    ],
  },
];
