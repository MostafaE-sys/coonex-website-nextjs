import type { SolutionPageContent } from "@/lib/solution-page-types";

// Source: Coonex Master Context — Omnichannel Experience. Documented
// channels: website, app, WhatsApp, email, SMS, social, call centre,
// physical touchpoints. Documented capabilities: customer journey design,
// channel orchestration, cross-channel communication, personalization,
// customer identity, real-time engagement. The source explicitly frames the
// customer as the center of this Solution, not a left-to-right sequence —
// hence the `hub` narrative rather than journey/stageFlow. Coonex CDP is
// documented as supporting this Solution; no identity-resolution or
// segmentation mechanics are invented beyond that documented relationship.
export const omnichannelExperience: SolutionPageContent = {
  id: "omnichannel-experience",
  groupId: "connect",
  groupLabel: "CONNECT",
  name: "Omnichannel Experience",
  heroHeadline: "One customer. Every channel. One connected experience.",
  heroSupport:
    "Coonex connects journey design, orchestration, and real-time engagement so every channel a customer uses feels like part of the same relationship.",
  problemHeading: "Channels usually operate around the customer separately.",
  problemBody:
    "A customer might message on WhatsApp, browse the app, call the call centre, and visit in person — each channel with its own context, none of them aware of the others. The customer experiences one relationship; the business sees fragments of it.",
  narrative: {
    hub: {
      eyebrow: "CONNECT",
      heading: "Channels connected around one customer.",
      centerLabel: "Customer",
      channels: [
        { label: "Website" },
        { label: "App" },
        { label: "WhatsApp" },
        { label: "Email" },
        { label: "SMS" },
        { label: "Social" },
        { label: "Call Centre" },
        { label: "Physical Touchpoints" },
      ],
    },
  },
  capabilityGroups: [
    { name: "Design", items: ["Customer journey design", "Channel orchestration"] },
    { name: "Engage", items: ["Cross-channel communication", "Personalization"] },
    { name: "Connect", items: ["Customer identity", "Real-time engagement"] },
  ],
  relatedSolutions: [
    { id: "crm-customer-lifecycle", reason: "The customer relationship this Solution keeps consistent across channels." },
    { id: "data-intelligence", reason: "Customer identity across channels depends on connected data." },
    { id: "connected-business-ecosystems", reason: "Channel orchestration is part of the wider connected ecosystem." },
  ],
  product: {
    id: "coonex-cdp",
    name: "Coonex CDP",
    description: "A customer data product supporting Omnichannel Experience alongside CRM & Customer Lifecycle, Data & Intelligence, and Connected Business Ecosystems.",
  },
  industryApplications: [
    { industryId: "ecommerce", industryName: "E-commerce", path: ["Website", "App", "Support"], ordered: false },
    { industryId: "real-estate", industryName: "Real Estate", path: ["Call centre", "Site visit", "Follow-up"], ordered: false },
    { industryId: "events", industryName: "Events", path: ["Registration", "Reminders", "On-site"], ordered: false },
  ],
};
