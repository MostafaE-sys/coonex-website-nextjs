import type { SolutionPageContent } from "@/lib/solution-page-types";

// Source: Coonex Master Context — Commerce. Documented capabilities:
// e-commerce platforms, marketplaces, payments, fulfillment, retention.
// Documented narrative: Discover → Shop → Buy → Engage → Return, a stage
// flow across the commerce lifecycle. No product is documented for
// Commerce, so none is claimed here.
export const commerce: SolutionPageContent = {
  id: "commerce",
  groupId: "grow",
  groupLabel: "GROW",
  name: "Commerce",
  heroHeadline: "A commerce engine that runs from discovery to repeat purchase.",
  heroSupport:
    "Coonex builds and connects the platforms, payments, and fulfillment behind commerce — so every stage, from discovery to return purchase, works as one system.",
  problemHeading: "Commerce breaks down when its parts don't run as one system.",
  problemBody:
    "A store, a marketplace listing, a payment provider, and a fulfillment process can each work on their own and still create friction between them. Customers feel the gaps even when no single part is broken.",
  narrative: {
    stageFlow: {
      heading: "The commerce lifecycle.",
      stages: [
        {
          label: "Discover",
          description: "Customers find the store or marketplace listing.",
          items: ["Storefronts", "Marketplace presence"],
        },
        {
          label: "Shop",
          description: "Browsing and product experience across channels.",
          items: ["E-commerce platforms", "Marketplaces"],
        },
        {
          label: "Buy",
          description: "A payment and checkout experience that doesn't lose the sale.",
          items: ["Payments", "Checkout"],
        },
        {
          label: "Engage",
          description: "Fulfillment and communication after the purchase.",
          items: ["Fulfillment", "CRM"],
        },
        {
          label: "Return",
          description: "Turning a first purchase into a repeat customer.",
          items: ["Retention", "Analytics"],
        },
      ],
    },
  },
  capabilityGroups: [
    { name: "Foundation", items: ["E-commerce Platforms", "Marketplaces"] },
    { name: "Transact", items: ["Payments", "Fulfillment"] },
    { name: "Grow", items: ["Retention"] },
  ],
  channels: ["Store", "Marketplace", "Payments", "CRM", "Analytics"],
  relatedSolutions: [
    { id: "crm-customer-lifecycle", reason: "Retained commerce customers are managed through a connected CRM." },
    { id: "growth-performance", reason: "Acquisition and conversion performance feed directly into commerce outcomes." },
    { id: "data-intelligence", reason: "Commerce data becomes decisions through connected analytics." },
  ],
  industryApplications: [
    { industryId: "ecommerce", industryName: "E-commerce", path: ["Discover", "Shop", "Buy", "Engage", "Return"], ordered: true },
    { industryId: "events", industryName: "Events", path: ["Ticket discovery", "Purchase"], ordered: false },
    { industryId: "real-estate", industryName: "Real Estate", path: ["Listing discovery", "Inquiry"], ordered: false },
  ],
};
