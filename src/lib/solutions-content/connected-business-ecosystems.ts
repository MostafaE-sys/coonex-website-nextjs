import type { SolutionPageContent } from "@/lib/solution-page-types";

// Source: Coonex Master Context — Connected Business Ecosystems. Documented
// areas: website, CRM, ERP, marketing, sales, payments, customer service,
// apps, analytics, data. Documented capabilities: system integration, APIs,
// data integration, CRM, CDP, ERP, marketing platforms, payments, identity,
// automation, BI. Documented narrative: disconnected systems → Coonex
// connection layer → connected ecosystem — a business transformation, not a
// procedural flow, hence the `transformationLayer` narrative rather than
// stageFlow. This page is intentionally a different composition from the
// homepage's ecosystem section: that section shows how Coonex's own
// categories relate; this page explains how a business's actual systems
// become connected. Coonex CDP is documented as supporting this Solution.
export const connectedBusinessEcosystems: SolutionPageContent = {
  id: "connected-business-ecosystems",
  groupId: "connect",
  groupLabel: "CONNECT",
  name: "Connected Business Ecosystems",
  heroHeadline: "Connect systems, data, teams and customer experiences into one ecosystem.",
  heroSupport:
    "Coonex integrates the systems a business already runs on — CRM, ERP, marketing, sales, payments, and more — into one connected ecosystem instead of isolated tools.",
  problemHeading: "Most businesses run on systems that don't talk to each other.",
  problemBody:
    "Website, CRM, ERP, marketing, sales, payments, and customer service each hold part of the picture. Without a connection layer between them, teams work from different versions of the same business — and nothing compounds.",
  narrative: {
    transformationLayer: {
      heading: "From disconnected systems to one ecosystem.",
      layer: {
        before: {
          label: "Disconnected",
          items: ["Website", "CRM", "ERP", "Marketing", "Sales", "Payments", "Analytics"],
        },
        connection: {
          label: "Coonex Connection Layer",
          items: ["System integration", "APIs", "Data integration", "Identity", "Automation"],
        },
        after: {
          label: "Connected",
          description: "One business ecosystem, working from the same data and the same picture.",
        },
      },
    },
  },
  capabilityGroups: [
    { name: "Integrate", items: ["System integration", "APIs", "Data integration"] },
    { name: "Platforms", items: ["CRM", "CDP", "ERP", "Marketing platforms", "Payments"] },
    { name: "Operate", items: ["Identity", "Automation", "BI"] },
  ],
  relatedSolutions: [
    { id: "crm-customer-lifecycle", reason: "CRM is one of the systems this Solution connects into the wider ecosystem." },
    { id: "omnichannel-experience", reason: "Channel orchestration depends on the same connection layer." },
    { id: "data-intelligence", reason: "A connected ecosystem is what makes business-wide data usable." },
    { id: "technology-digital-products", reason: "New systems are built to connect into this ecosystem, not sit apart from it." },
  ],
  product: {
    id: "coonex-cdp",
    name: "Coonex CDP",
    description: "A customer data product supporting Connected Business Ecosystems alongside CRM & Customer Lifecycle, Data & Intelligence, and Omnichannel Experience.",
  },
  industryApplications: [
    { industryId: "ecommerce", industryName: "E-commerce", path: ["Store", "Payments", "Fulfillment"], ordered: false },
    { industryId: "healthcare", industryName: "Healthcare", path: ["Booking", "Records", "Follow-up"], ordered: false },
    { industryId: "real-estate", industryName: "Real Estate", path: ["CRM", "Listings", "Sales"], ordered: false },
  ],
};
