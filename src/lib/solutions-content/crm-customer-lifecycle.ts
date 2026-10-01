import type { SolutionPageContent } from "@/lib/solution-page-types";

// Source: Coonex Master Context — CRM & Customer Lifecycle. Documented
// capabilities: CRM strategy, lead management, segmentation, lead scoring,
// nurturing, email, WhatsApp, automation, personalization, retention, loyalty.
// Documented lifecycle: Unknown Visitor → Lead → Customer → Repeat Customer →
// Loyal Customer. The stage-to-capability mapping in `connections` below is
// page-structure logic (a reasonable reading of the documented capabilities
// applied to the documented lifecycle) — not a separately documented fact.
export const crmCustomerLifecycle: SolutionPageContent = {
  id: "crm-customer-lifecycle",
  groupId: "connect",
  groupLabel: "CONNECT",
  name: "CRM & Customer Lifecycle",
  heroHeadline: "Turn every customer interaction into a connected relationship.",
  heroSupport:
    "This is broader than installing CRM software. Coonex connects customer data, lead management, communication, personalization, retention and automation around one customer lifecycle.",
  problemHeading: "Customer relationships rarely live in one place.",
  problemBody:
    "Leads often sit in one system, communication in another, and customer data in a third. Interactions happen across channels that don't share context with each other. The result is no single view of the relationship, and no consistent way to nurture, retain, or grow it.",
  narrative: {
    journey: {
      eyebrow: "The customer lifecycle",
      heading: "From unknown visitor to loyal customer.",
      steps: [
        { label: "Unknown Visitor" },
        { label: "Lead" },
        { label: "Customer" },
        { label: "Repeat Customer" },
        { label: "Loyal Customer" },
      ],
    },
  },
  connections: {
    eyebrow: "How Coonex connects the lifecycle",
    heading: "The right capability, at the right stage.",
    steps: [
      {
        transition: "Unknown Visitor → Lead",
        capabilities: "Lead management, segmentation, lead scoring",
      },
      {
        transition: "Lead → Customer",
        capabilities: "Nurturing, communication, personalization",
      },
      {
        transition: "Customer → Repeat Customer",
        capabilities: "Retention, automation",
      },
      {
        transition: "Repeat Customer → Loyal Customer",
        capabilities: "Loyalty, personalized engagement",
      },
    ],
  },
  capabilityGroups: [
    { name: "Understand", items: ["CRM strategy", "Segmentation", "Lead scoring"] },
    { name: "Engage", items: ["Lead management", "Nurturing", "Email", "WhatsApp", "Personalization"] },
    { name: "Automate", items: ["Automation"] },
    { name: "Retain", items: ["Retention", "Loyalty"] },
  ],
  channels: ["Website", "Email", "WhatsApp", "Customer data", "Automation"],
  relatedSolutions: [
    { id: "omnichannel-experience", reason: "Extends the relationship across every channel, not just one." },
    { id: "connected-business-ecosystems", reason: "Connects CRM to the wider systems around it." },
    { id: "data-intelligence", reason: "Turns customer data into a fuller, more usable view." },
    { id: "ai-automation", reason: "Automates qualification, nurturing, and engagement at scale." },
  ],
  product: {
    id: "coonex-cdp",
    name: "Coonex CDP",
    description:
      "A customer data product supporting CRM & Customer Lifecycle, Data & Intelligence, Omnichannel Experience, and Connected Business Ecosystems.",
  },
  industryApplications: [
    { industryId: "ecommerce", industryName: "E-commerce", path: ["Acquisition", "Retention", "Loyalty"] },
    { industryId: "healthcare", industryName: "Healthcare", path: ["Booking", "Follow-up", "Return"] },
    { industryId: "real-estate", industryName: "Real Estate", path: ["Lead", "Qualification", "Agent/sales journey"] },
    { industryId: "events", industryName: "Events", path: ["Registration", "Engagement", "Follow-up"] },
  ],
};
