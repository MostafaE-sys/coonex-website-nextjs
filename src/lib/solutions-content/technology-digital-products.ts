import type { SolutionPageContent } from "@/lib/solution-page-types";

// Source: Coonex Master Context — Technology & Digital Products. Documented
// capabilities: web platforms, mobile applications, customer portals,
// e-commerce platforms, SaaS, internal systems, custom software, APIs,
// cloud, integrations. Documented example directions: property platform,
// event platform, customer portal, commerce system — these are use-case
// TYPES, not client projects, hence the `useCases` narrative rather than a
// Discover→Design→Develop→Launch process. No product relationship
// (Bayeaa / Coonex CDP / Brandyo.buzz) is documented for this Solution, so
// none is claimed.
export const technologyDigitalProducts: SolutionPageContent = {
  id: "technology-digital-products",
  groupId: "transform",
  groupLabel: "TRANSFORM",
  name: "Technology & Digital Products",
  heroHeadline: "Build technology around the business, not the business around technology.",
  heroSupport:
    "Coonex builds the web platforms, applications, and systems a business actually needs — starting from the business problem, not a generic development process.",
  problemHeading: "Technology built without the business in mind rarely fits it.",
  problemBody:
    "A platform built around a generic process — rather than the specific business it serves — tends to need constant workarounds. The result is technology that works in principle but never quite matches how the business actually operates.",
  narrative: {
    useCases: {
      heading: "Real business systems, not a build process.",
      cases: [
        {
          type: "Property Platform",
          need: "A system for listing, managing, and presenting property inventory.",
          technologies: ["Web platforms", "Customer portals", "APIs"],
        },
        {
          type: "Event Platform",
          need: "A system for managing registration, ticketing, and attendee experience.",
          technologies: ["Web platforms", "Mobile applications", "Integrations"],
        },
        {
          type: "Customer Portal",
          need: "A self-service system for customers to manage their own account or service.",
          technologies: ["Customer portals", "Cloud", "Internal systems"],
        },
        {
          type: "Commerce System",
          need: "A platform for selling online, connected to the systems behind it.",
          technologies: ["E-commerce platforms", "SaaS", "Integrations"],
        },
      ],
    },
  },
  capabilityGroups: [
    { name: "Platforms", items: ["Web platforms", "Mobile applications", "E-commerce platforms", "SaaS"] },
    { name: "Systems", items: ["Customer portals", "Internal systems", "Custom software"] },
    { name: "Infrastructure", items: ["APIs", "Cloud", "Integrations"] },
  ],
  relatedSolutions: [
    { id: "connected-business-ecosystems", reason: "New systems are built to connect into the business's wider ecosystem." },
    { id: "commerce", reason: "Commerce systems are one of the platform types this Solution builds." },
    { id: "data-intelligence", reason: "Systems built here become sources for connected data." },
    { id: "ai-automation", reason: "Custom systems are often where automation and AI get put to work." },
  ],
  industryApplications: [
    { industryId: "real-estate", industryName: "Real Estate", path: ["Property platform", "Customer portal"], ordered: false },
    { industryId: "events", industryName: "Events", path: ["Event platform", "Ticketing"], ordered: false },
    { industryId: "ecommerce", industryName: "E-commerce", path: ["Commerce system", "Customer portal"], ordered: false },
  ],
};
