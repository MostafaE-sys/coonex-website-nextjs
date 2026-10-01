import type { SolutionPageContent } from "@/lib/solution-page-types";

// Source: Coonex Master Context — Data & Intelligence. Documented
// capabilities: tracking, measurement, data strategy, customer data, data
// engineering, CDP, data warehouse, Customer 360, BI, dashboards,
// attribution, predictive analytics. Documented narrative: Collect → Connect
// → Understand → Act, with documented inputs per stage (Collect: websites,
// apps, CRM, ads, sales, offline sources; Connect: CDP, data warehouse,
// identity; Understand: analytics, BI, Customer 360; Act: audiences,
// personalization, automation, AI). Capability group names (Foundation /
// Connection / Intelligence / Prediction) are UX organization, not
// documented product categories.
export const dataIntelligence: SolutionPageContent = {
  id: "data-intelligence",
  groupId: "transform",
  groupLabel: "TRANSFORM",
  name: "Data & Intelligence",
  heroHeadline: "Turn disconnected data into decisions and action.",
  heroSupport:
    "Coonex connects data across the business — websites, apps, CRM, ads, sales, and offline sources — so it can be understood and used, not just collected.",
  problemHeading: "Business data is everywhere — and nowhere at once.",
  problemBody:
    "Websites, apps, CRM, advertising, sales, and offline sources all generate data — but each one usually stays in its own system, disconnected from the rest. The result is partial visibility, not a full picture of the business or the customer.",
  narrative: {
    stageFlow: {
      heading: "Collect. Connect. Understand. Act.",
      intro:
        "Data & Intelligence follows one path from raw data to real business action — each stage building on the last.",
      stages: [
        {
          label: "Collect",
          description: "Data starts wherever the business and its customers interact.",
          items: ["Website", "Apps", "CRM", "Ads", "Sales", "Offline sources"],
        },
        {
          label: "Connect",
          description: "Collected data is brought together into one connected layer.",
          items: ["CDP", "Data warehouse", "Identity"],
        },
        {
          label: "Understand",
          description: "Connected data becomes a clearer picture of the business and the customer.",
          items: ["Analytics", "BI", "Customer 360"],
        },
        {
          label: "Act",
          description: "Insight is used — not just reported.",
          items: ["Audiences", "Personalization", "Automation", "AI"],
        },
      ],
    },
  },
  // Attribution moved to Intelligence: it explains what already happened
  // (which touchpoints drove an outcome), the same backward-looking
  // analytical job as BI/Customer 360 — not a forward-looking prediction like
  // Predictive Analytics. UX grouping only; both remain documented
  // capabilities regardless of which group they sit in.
  capabilityGroups: [
    { name: "Foundation", items: ["Tracking", "Measurement", "Data Strategy"] },
    { name: "Connection", items: ["Data Engineering", "CDP", "Data Warehouse"] },
    { name: "Intelligence", items: ["Customer Data", "Customer 360", "BI", "Dashboards", "Attribution"] },
    { name: "Prediction", items: ["Predictive Analytics"] },
  ],
  channels: ["Website", "Apps", "CRM", "Advertising", "Sales", "Offline sources"],
  relatedSolutions: [
    { id: "crm-customer-lifecycle", reason: "Turns customer data into a fuller, usable view for CRM." },
    { id: "connected-business-ecosystems", reason: "Extends connected data across the wider systems around the business." },
    { id: "omnichannel-experience", reason: "Provides the unified data behind a consistent cross-channel experience." },
    { id: "ai-automation", reason: "Feeds the data AI and automation need to act on." },
  ],
  product: {
    id: "coonex-cdp",
    name: "Coonex CDP",
    description:
      "A customer data product supporting connected Data & Intelligence, CRM & Customer Lifecycle, Omnichannel Experience, and Connected Business Ecosystems.",
  },
  industryApplications: [
    {
      industryId: "ecommerce",
      industryName: "E-commerce",
      path: ["Acquisition", "Commerce", "Customer data", "Retention", "Analytics"],
      ordered: false,
    },
    {
      industryId: "healthcare",
      industryName: "Healthcare",
      path: ["Patient journey", "Engagement", "Data", "Analytics"],
      ordered: false,
    },
    {
      industryId: "real-estate",
      industryName: "Real Estate",
      path: ["Marketing sources", "Leads", "CRM", "Sales outcomes", "Attribution", "Data"],
      ordered: false,
    },
    {
      industryId: "events",
      industryName: "Events",
      path: ["Registration", "Engagement", "Event data", "Analytics"],
      ordered: false,
    },
  ],
};
