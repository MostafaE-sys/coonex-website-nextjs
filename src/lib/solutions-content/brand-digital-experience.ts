import type { SolutionPageContent } from "@/lib/solution-page-types";

// Source: Coonex Master Context — Brand & Digital Experience. Documented
// capabilities: brand strategy, visual identity, content, website/app
// design, UX. Documented narrative: Strategy → Identity → Content →
// Website/Mobile → Customer Experience — an editorial progression, not a
// procedural funnel, which is why it uses the editorialSteps narrative
// instead of Journey or Stage Flow. Brandyo.buzz's positioning is not yet
// defined, so no Product section is rendered for this page per the brief's
// gating rule — omitted entirely rather than shown with placeholder copy.
export const brandDigitalExperience: SolutionPageContent = {
  id: "brand-digital-experience",
  groupId: "grow",
  groupLabel: "GROW",
  name: "Brand & Digital Experience",
  heroHeadline: "Build a brand and a digital presence that belong together.",
  heroSupport:
    "Coonex shapes brand strategy, identity, content, and digital experience as one continuous story — so what a business says, looks like, and feels like to use are never disconnected.",
  problemHeading: "A strong brand and a good website are often built separately.",
  problemBody:
    "Identity gets designed in one project, content gets written in another, and the website or app gets built in a third — each with its own decisions, timeline, and voice. What should feel like one experience ends up feeling like several.",
  narrative: {
    editorialSteps: {
      heading: "One story, carried through every touchpoint.",
      steps: [
        {
          label: "Strategy",
          description: "Defining the positioning and voice a brand needs before any visual work begins.",
        },
        {
          label: "Identity",
          description: "Translating that strategy into a visual identity that carries it consistently.",
        },
        {
          label: "Content",
          description: "Writing and producing content that speaks in the brand's own voice, not a generic one.",
        },
        {
          label: "Website / Mobile",
          description: "Designing and building the digital surfaces people actually use to experience the brand.",
        },
        {
          label: "Customer Experience",
          description: "Shaping how the brand feels to interact with, end to end, not just how it looks.",
        },
      ],
    },
  },
  capabilityGroups: [
    { name: "Strategy", items: ["Brand Strategy"] },
    { name: "Creative", items: ["Visual Identity", "Content"] },
    { name: "Experience", items: ["Website & App Design", "UX"] },
  ],
  relatedSolutions: [
    { id: "commerce", reason: "A connected brand experience extends directly into how customers shop and buy." },
    { id: "technology-digital-products", reason: "Digital experience design often becomes a product that needs to be built." },
    { id: "growth-performance", reason: "A consistent brand and experience make acquisition and conversion work harder." },
  ],
  industryApplications: [
    { industryId: "real-estate", industryName: "Real Estate", path: ["Brand identity", "Property digital experience"], ordered: false },
    { industryId: "events", industryName: "Events", path: ["Event branding", "Attendee digital experience"], ordered: false },
    { industryId: "ecommerce", industryName: "E-commerce", path: ["Brand identity", "Storefront experience"], ordered: false },
  ],
};
