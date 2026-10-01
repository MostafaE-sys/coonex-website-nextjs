import type { IndustryPageContent } from "@/lib/industry-page-types";

// Source: Coonex Master Context — Healthcare.
//
// DIRECTLY DOCUMENTED:
// - Core story: "connected digital experiences across the patient journey."
// - Journey: Discover → Search → Book → Visit → Follow Up → Return.
// - Capabilities/systems: patient acquisition, SEO, paid search, healthcare
//   websites, doctor/service discovery, booking, patient portals, CRM,
//   engagement, WhatsApp, analytics, AI assistance and automation.
// - Explicit caution: "Keep privacy and regulatory requirements
//   market-specific" — represented below as a plain contextual note, not a
//   compliance claim. Coonex does not claim compliance with any named
//   regulation (HIPAA, GDPR, or otherwise) anywhere on this page.
//
// INTERPRETIVE (UX/structural reading, not a documented company claim):
// - The stage-by-stage objective/coonexRole split, and which Solutions map
//   to which stages. The source lists capabilities and a journey, not a
//   stage-by-stage table — the mapping below is a reasonable reading of
//   those capabilities against that journey, not official Coonex taxonomy.
// - The "Visit" stage intentionally has no strong coonexRole: no documented
//   capability applies to the in-person visit itself, so none is invented.
// - No product relationship is documented for Healthcare, so the Product
//   section is omitted. No medical, clinical, outcome, or compliance claims
//   appear anywhere in this file.
export const healthcare: IndustryPageContent = {
  id: "healthcare",
  name: "Healthcare",
  heroHeadline: "Connect the patient journey from discovery to follow-up.",
  heroSupport:
    "Coonex connects the digital and customer-experience touchpoints around the patient journey — from discovery and booking through to follow-up and return.",
  challengesHeading: "The patient journey is often disconnected at every step.",
  challengesBody:
    "A patient might find a clinic through search, book through a separate system, and never hear from the clinic again after the visit. Discovery, the website, booking, the visit itself, and follow-up are usually run apart from each other, with no connected view of the patient across any of them.",
  journeyHeading: "The patient journey.",
  journeyStages: [
    {
      label: "Discover",
      objective: "A potential patient becomes aware that a service or provider exists.",
      coonexRole: "Patient acquisition, SEO, and paid search that put the right service in front of the right person.",
    },
    {
      label: "Search",
      objective: "The patient looks for the right doctor, service, or clinic.",
      coonexRole: "A healthcare website built around doctor and service discovery.",
    },
    {
      label: "Book",
      objective: "The patient decides and completes a booking.",
      coonexRole: "Booking flows and patient portals that make scheduling straightforward.",
    },
    {
      label: "Visit",
      objective: "The patient attends the appointment.",
      coonexRole: "The visit itself sits outside Coonex's documented digital role — the connection resumes at follow-up.",
    },
    {
      label: "Follow Up",
      objective: "The clinic follows up after the visit.",
      coonexRole: "CRM and engagement, including WhatsApp, so follow-up doesn't depend on manual reminders.",
    },
    {
      label: "Return",
      objective: "The patient returns for ongoing or future care.",
      coonexRole: "Connected engagement and analytics that support a return visit without starting from zero.",
    },
  ],
  connectedJourneyHeading: "How Coonex connects the journey.",
  relevantSolutions: [
    { id: "growth-performance", reason: "Supports discovery and search — bringing the right patients in through acquisition and SEO." },
    { id: "technology-digital-products", reason: "Builds the healthcare website, service discovery, and booking systems the journey runs on." },
    { id: "crm-customer-lifecycle", reason: "Keeps engagement going through follow-up and return, instead of resetting with every visit." },
    { id: "data-intelligence", reason: "Turns booking, visit, and follow-up data into a connected view of the patient journey." },
    { id: "ai-automation", reason: "Automates follow-up and engagement so continuity doesn't depend on manual effort." },
  ],
  systems: ["Healthcare website", "Booking", "Patient portals", "CRM", "WhatsApp", "Analytics"],
  systemsNote:
    "Healthcare implementations must account for applicable market-specific privacy and regulatory requirements.",
  useCases: [
    {
      title: "Search and booking that don't connect",
      description:
        "A patient can find a service through search but book through an entirely separate system, with no shared record of the interaction.",
    },
    {
      title: "Follow-up that depends on someone remembering",
      description:
        "Without connected engagement, following up after a visit relies on manual effort rather than a consistent process.",
    },
    {
      title: "Return visits that start from zero",
      description:
        "A returning patient is often treated as a new one, because the previous visit and booking history aren't connected.",
    },
  ],
};
