import type { IndustryPageContent } from "@/lib/industry-page-types";

// Source: Coonex Master Context — Events.
//
// DIRECTLY DOCUMENTED:
// - Core story: "Connect marketing, registration, engagement and event data
//   across the entire event lifecycle."
// - Journey: Awareness → Registration → Pre-event Engagement → Attendance →
//   Onsite Engagement → Follow-up → Next Event.
// - Capabilities: audience acquisition, event websites, registration,
//   exhibitor acquisition, email, WhatsApp, CRM, badging, apps, networking,
//   lead capture, event data, analytics, CDP, AI and automation.
// - Explicit guidance: "Structure the page around Before, During and After
//   the event." Unlike Healthcare's stage grouping (which was evaluated and
//   declined as unsupported), this Before/During/After framing IS directly
//   documented for Events specifically — hence `phase` is set per stage
//   below, using the generic grouping layer `IndustryJourney` already
//   supports, not a new component or a named Coonex methodology.
//
// INTERPRETIVE (not official Coonex taxonomy):
// - The stage-by-stage objective/coonexRole split and Solution-to-stage
//   reasoning below.
// - "CDP" appears only as a generic capability term in the source capability
//   list, alongside event data/analytics — it is NOT converted into a
//   Coonex CDP product claim. No product relationship is documented for
//   Events, so the Product section is omitted. No attendance, registration,
//   or engagement figures are invented anywhere in this file.
export const events: IndustryPageContent = {
  id: "events",
  name: "Events",
  heroHeadline: "Connect every stage of the event — before, during, and after.",
  heroSupport:
    "Coonex connects marketing, registration, and engagement across the full event lifecycle, so momentum built before the event carries through to what happens onsite, and into the next one.",
  challengesHeading: "The event lifecycle rarely stays connected once it starts.",
  challengesBody:
    "Awareness and registration might run through one set of tools, onsite engagement through another, and follow-up through none at all. The momentum built before an event often doesn't carry through to what happens onsite, or into the next event.",
  journeyHeading: "The event lifecycle.",
  journeyStages: [
    {
      label: "Awareness",
      objective: "A potential attendee becomes aware the event exists.",
      coonexRole: "Audience acquisition that builds awareness ahead of the event.",
      phase: "Before",
    },
    {
      label: "Registration",
      objective: "The attendee registers for the event.",
      coonexRole: "Event websites and registration built to convert awareness into sign-ups.",
      phase: "Before",
    },
    {
      label: "Pre-event Engagement",
      objective: "The attendee stays engaged before the event happens.",
      coonexRole: "Email and WhatsApp communication that keep registered attendees engaged ahead of the event.",
      phase: "Before",
    },
    {
      label: "Attendance",
      objective: "The attendee arrives and attends the event.",
      coonexRole: "Badging and event apps that support the attendee and exhibitor experience onsite.",
      phase: "During",
    },
    {
      label: "Onsite Engagement",
      objective: "The attendee engages with sessions, exhibitors, and networking onsite.",
      coonexRole: "Networking and lead capture that connect onsite interactions to event data.",
      phase: "During",
    },
    {
      label: "Follow-up",
      objective: "The event follows up with attendees after it ends.",
      coonexRole: "CRM and communication that carry the relationship past the event itself.",
      phase: "After",
    },
    {
      label: "Next Event",
      objective: "The attendee is engaged again for a future event.",
      coonexRole: "Event data and analytics that connect this event's engagement to the next one.",
      phase: "After",
    },
  ],
  connectedJourneyHeading: "How Coonex connects the journey.",
  relevantSolutions: [
    { id: "growth-performance", reason: "Drives awareness and audience acquisition ahead of the event." },
    { id: "crm-customer-lifecycle", reason: "Keeps attendee communication and follow-up connected across the lifecycle." },
    { id: "data-intelligence", reason: "Connects event data and analytics from one event into the next." },
    { id: "ai-automation", reason: "Supports automation across communication and follow-up." },
  ],
  systems: ["Event website", "Registration", "Badging & apps", "CRM", "Communication (Email, WhatsApp)", "Analytics"],
  useCases: [
    {
      title: "Registration without pre-event engagement",
      description:
        "An attendee registers but hears nothing again until the event itself, losing the momentum that registration created.",
    },
    {
      title: "Onsite engagement disconnected from attendee data",
      description:
        "Sessions, exhibitors, and networking happen onsite, but what an attendee actually engaged with often doesn't make it back into a connected record.",
    },
    {
      title: "Follow-up disconnected from the next event",
      description:
        "Post-event follow-up and the next event's marketing are often run separately, so attendees start from zero each cycle.",
    },
  ],
};
