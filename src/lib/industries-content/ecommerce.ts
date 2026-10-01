import type { IndustryPageContent } from "@/lib/industry-page-types";

// Source: Coonex Master Context — E-commerce industry journey (Acquire →
// Convert → Understand → Retain → Automate & Grow), also reflected in
// `INDUSTRIES` (src/lib/industries-data.ts), the homepage's industry
// selector. This page tells the industry's story first — the journey and
// its business objectives — and only then shows how Coonex connects to it.
// No product relationship is documented specifically for E-commerce, so the
// Product section is omitted rather than guessed. No revenue, conversion,
// or retention figures are invented anywhere on this page.
export const ecommerce: IndustryPageContent = {
  id: "ecommerce",
  name: "E-commerce",
  heroHeadline: "Connect acquisition, commerce, customer data and retention into one growth system.",
  heroSupport:
    "Coonex connects the full e-commerce journey — from paid media to repeat purchase — so growth compounds instead of resetting with every campaign.",
  challengesHeading: "E-commerce rarely fails at just one stage.",
  challengesBody:
    "Traffic gets acquired but conversion lags, or conversion happens but nothing is understood about who bought and why. Retention and growth then have nothing solid to build on. The real challenge is that acquisition, the store, customer data, and retention are usually run as separate efforts instead of one connected system.",
  journeyHeading: "The e-commerce journey.",
  journeyStages: [
    {
      label: "Acquire",
      objective: "Bring the right traffic to the store, not just more of it.",
      coonexRole: "Paid media, SEO, and acquisition strategy focused on buying intent.",
    },
    {
      label: "Convert",
      objective: "Turn visitors into paying customers.",
      coonexRole: "Store experience, checkout, and CRO that reduce friction at the point of purchase.",
    },
    {
      label: "Understand",
      objective: "Know who bought, why, and what happened next.",
      coonexRole: "Customer data and analytics connecting campaign, store, and purchase data into one view.",
    },
    {
      label: "Retain",
      objective: "Turn a first purchase into a repeat one.",
      coonexRole: "CRM and personalized engagement across the channels customers already use.",
    },
    {
      label: "Automate & Grow",
      objective: "Scale what works without scaling manual effort.",
      coonexRole: "Automation and AI that qualify, personalize, and act on customer data at scale.",
    },
  ],
  connectedJourneyHeading: "How Coonex connects the journey.",
  relevantSolutions: [
    { id: "growth-performance", reason: "Drives acquisition at the top of the journey." },
    { id: "commerce", reason: "Runs the store, checkout, and commercial engine itself." },
    { id: "data-intelligence", reason: "Turns purchase and campaign data into a usable view of the customer." },
    { id: "crm-customer-lifecycle", reason: "Keeps the customer relationship going after the first purchase." },
    { id: "ai-automation", reason: "Automates qualification, personalization, and retention at scale." },
  ],
  systems: ["E-commerce platform", "CRM", "Customer data", "Analytics", "Automation", "Payments", "Channels"],
  useCases: [
    {
      title: "Seasonal campaign traffic that doesn't convert",
      description:
        "Paid media brings visitors in, but without a connected store and checkout experience, spikes in traffic don't turn into proportional sales.",
    },
    {
      title: "Customer data spread across platforms",
      description:
        "Store, ad platforms, and CRM each hold a different piece of the customer — without a connected view, personalization and retention both suffer.",
    },
    {
      title: "Repeat purchases that depend on manual follow-up",
      description:
        "Without automated retention workflows, growth depends on someone remembering to follow up with past customers.",
    },
  ],
};
