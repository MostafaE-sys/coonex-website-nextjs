import type { SolutionPageContent } from "@/lib/solution-page-types";

// Source: Coonex Master Context — Growth & Performance. Documented
// capabilities: paid media, performance marketing, SEO, lead generation,
// CRO, acquisition strategy, retargeting, attribution, marketing analytics.
// Documented narrative: media investment → traffic → leads/sales →
// customers → revenue. Capability group names (Acquire/Convert/Strategize/
// Measure) are UX organization, not documented categories. No metrics,
// ROAS/CPL figures, or media-platform partnerships are documented, so none
// are claimed.
export const growthPerformance: SolutionPageContent = {
  id: "growth-performance",
  groupId: "grow",
  groupLabel: "GROW",
  name: "Growth & Performance",
  heroHeadline: "Turn marketing investment into measurable business growth.",
  heroSupport:
    "Coonex connects paid media, SEO, lead generation, and analytics into one commercial funnel — measured by customers and revenue, not impressions.",
  problemHeading: "Marketing activity and business growth aren't always the same thing.",
  problemBody:
    "Campaigns can run, traffic can grow, and leads can come in — but without a connected view from media investment through to revenue, it's hard to know what's actually working. The result is activity that looks busy but is difficult to tie back to real commercial outcomes.",
  narrative: {
    journey: {
      eyebrow: "The commercial funnel",
      heading: "From media investment to revenue.",
      steps: [
        { label: "Media Investment" },
        { label: "Traffic" },
        { label: "Leads / Sales" },
        { label: "Customers" },
        { label: "Revenue" },
      ],
    },
  },
  connections: {
    eyebrow: "How Coonex connects the funnel",
    heading: "The right capability, at the right stage.",
    steps: [
      {
        transition: "Media Investment → Traffic",
        capabilities: "Paid media, SEO, retargeting",
      },
      {
        transition: "Traffic → Leads / Sales",
        capabilities: "Lead generation, CRO",
      },
      {
        transition: "Leads / Sales → Customers",
        capabilities: "Acquisition strategy, performance marketing",
      },
      {
        transition: "Customers → Revenue",
        capabilities: "Attribution, marketing analytics",
      },
    ],
  },
  capabilityGroups: [
    { name: "Acquire", items: ["Paid media", "SEO", "Retargeting"] },
    { name: "Convert", items: ["Lead generation", "CRO"] },
    { name: "Strategize", items: ["Acquisition strategy", "Performance marketing"] },
    { name: "Measure", items: ["Attribution", "Marketing analytics"] },
  ],
  relatedSolutions: [
    { id: "crm-customer-lifecycle", reason: "Leads generated here flow into a connected customer relationship." },
    { id: "data-intelligence", reason: "Attribution and analytics turn campaign data into decisions." },
    { id: "commerce", reason: "Feeds acquisition into a connected commerce engine." },
  ],
  industryApplications: [
    { industryId: "ecommerce", industryName: "E-commerce", path: ["Acquisition", "Conversion", "Revenue"], ordered: false },
    { industryId: "real-estate", industryName: "Real Estate", path: ["Lead generation", "Qualification"], ordered: false },
    { industryId: "events", industryName: "Events", path: ["Audience acquisition", "Registration"], ordered: false },
  ],
};
