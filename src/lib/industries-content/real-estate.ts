import type { IndustryPageContent } from "@/lib/industry-page-types";

// Source: Coonex Master Context — Real Estate.
//
// DIRECTLY DOCUMENTED:
// - Core story: "Connect property marketing, leads, sales and customer data
//   in one real estate ecosystem."
// - Journey: Discover → Explore → Enquire → Qualify → View → Buy → Engage.
// - Capabilities: property marketing, project websites, property search,
//   listings, lead capture, CRM, agent routing, lead scoring, WhatsApp,
//   sales pipeline, attribution, analytics, AI property assistance.
// - Explicit guidance: "Show leads from Google, Meta, portals, website and
//   WhatsApp flowing into CRM, qualification and agents, then connect sales
//   outcomes back to marketing and data." Google/Meta appear here as
//   documented lead sources in the source itself, not an invented vendor
//   partnership claim.
//
// INTERPRETIVE (not official Coonex taxonomy):
// - The stage-by-stage objective/coonexRole split and Solution-to-stage
//   reasoning below. The source lists a journey and a capability set, not a
//   stage-by-stage table.
// - "View" intentionally has no coonexRole: no documented capability covers
//   the in-person viewing itself, so none is invented (same honest gap as
//   Healthcare's "Visit").
// - No product relationship is documented for Real Estate, so the Product
//   section is omitted. No sales, conversion, or agent-productivity claims
//   appear anywhere in this file. No `systemsNote` is used — nothing
//   regulatory or licensing-specific is documented for this industry.
export const realEstate: IndustryPageContent = {
  id: "real-estate",
  name: "Real Estate",
  heroHeadline: "Connect property discovery, leads, sales and customer relationships in one journey.",
  heroSupport:
    "Coonex connects property marketing, leads, sales, and customer data into one real estate ecosystem — instead of separate tools that lose the buyer's context along the way.",
  challengesHeading: "Leads and sales rarely stay connected to the same picture.",
  challengesBody:
    "A buyer can come from search, social advertising, a property portal, or WhatsApp — but once that lead is qualified and handed to an agent, the connection back to where it came from is often lost. Marketing, qualification, sales, and what happens after a purchase are usually run as separate efforts.",
  journeyHeading: "The property journey.",
  journeyStages: [
    {
      label: "Discover",
      objective: "A potential buyer becomes aware a property or project exists.",
      coonexRole: "Property marketing that reaches buyers through search and social advertising.",
    },
    {
      label: "Explore",
      objective: "The buyer browses properties and projects in more detail.",
      coonexRole: "A property website and portal presence built around search and listings.",
    },
    {
      label: "Enquire",
      objective: "The buyer reaches out about a specific property.",
      coonexRole: "Lead capture across the website, property portals, and WhatsApp.",
    },
    {
      label: "Qualify",
      objective: "The enquiry is assessed and routed to the right agent.",
      coonexRole: "CRM, lead scoring, and agent routing that connect the enquiry to the right person.",
    },
    {
      label: "View",
      objective: "The buyer views the property in person.",
      coonexRole: "The viewing itself sits outside Coonex's documented digital role — the connection continues through the sales pipeline that follows.",
    },
    {
      label: "Buy",
      objective: "The buyer completes the purchase.",
      coonexRole: "A connected sales pipeline that carries the buyer's context through to close.",
    },
    {
      label: "Engage",
      objective: "The relationship continues after the purchase.",
      coonexRole: "CRM-driven engagement, with sales outcomes and data connected back to marketing and attribution.",
    },
  ],
  connectedJourneyHeading: "How Coonex connects the journey.",
  relevantSolutions: [
    { id: "growth-performance", reason: "Drives discovery through property marketing and paid acquisition." },
    { id: "technology-digital-products", reason: "Builds the property website, search, and listings the journey runs on." },
    { id: "crm-customer-lifecycle", reason: "Qualifies, routes, and keeps the buyer relationship connected through to purchase and beyond." },
    { id: "data-intelligence", reason: "Connects attribution and analytics so sales outcomes inform the next campaign." },
    { id: "ai-automation", reason: "Supports AI-assisted qualification and property assistance." },
  ],
  systems: ["Property website", "Property portals", "Lead management", "CRM", "WhatsApp", "Analytics"],
  useCases: [
    {
      title: "Leads that arrive without context",
      description:
        "A lead can come from search, social advertising, a property portal, or WhatsApp, but without a connected view, agents don't know where it came from or what the buyer is looking for.",
    },
    {
      title: "Qualification that starts over each time",
      description:
        "Enquiries move to qualification and viewings without carrying forward what was already discussed, so the buyer repeats themselves.",
    },
    {
      title: "Sales outcomes that don't inform marketing",
      description:
        "When a sale closes, that outcome and the data behind it often doesn't make its way back to marketing and attribution — so the next campaign starts blind.",
    },
  ],
};
