import type { SolutionPageContent } from "@/lib/solution-page-types";

// Source: Coonex Master Context — AI & Automation. Documented capabilities:
// AI agents, assistants, customer service AI, sales AI, marketing AI,
// knowledge systems, workflow automation, lead qualification, predictive
// models, business process automation. The source explicitly asks for
// practical workflows and business outcomes rather than AI framed as
// innovation — hence the `workflow` narrative (a selector over documented
// concept flows) rather than any dashboard or capability-showcase treatment.
// No product relationship is documented for this Solution, so none is
// claimed, and no implementation mechanics beyond the concept flow itself
// are invented.
export const aiAutomation: SolutionPageContent = {
  id: "ai-automation",
  groupId: "transform",
  groupLabel: "TRANSFORM",
  name: "AI & Automation",
  heroHeadline: "Put AI to work inside real business processes.",
  heroSupport:
    "Coonex applies AI agents, assistants, and automation to real workflows — qualifying leads, answering questions, and personalizing engagement — not as a demo, but as part of how the business runs.",
  problemHeading: "AI is easy to talk about and hard to put to work.",
  problemBody:
    "Many businesses know AI could help somewhere, but stop at the idea — a chatbot pilot, a one-off automation — without connecting it to a real, repeatable business process. The value shows up only when AI runs inside a workflow, not next to it.",
  narrative: {
    workflow: {
      heading: "AI inside real workflows.",
      examples: [
        {
          id: "customer-service",
          label: "Customer Service",
          steps: [{ label: "Customer Question" }, { label: "AI Answer" }],
        },
        {
          id: "lead-qualification",
          label: "Lead Qualification",
          steps: [{ label: "Lead" }, { label: "AI Qualification" }, { label: "CRM" }],
        },
        {
          id: "personalization",
          label: "Personalization",
          steps: [{ label: "Behaviour" }, { label: "Personalized Messaging" }],
        },
        {
          id: "process-automation",
          label: "Process Automation",
          steps: [{ label: "Data" }, { label: "Automated Workflow" }],
        },
      ],
    },
  },
  capabilityGroups: [
    { name: "Assist", items: ["AI agents", "Assistants", "Customer service AI"] },
    { name: "Grow", items: ["Sales AI", "Marketing AI", "Lead qualification"] },
    { name: "Automate", items: ["Knowledge systems", "Workflow automation", "Predictive models", "Business process automation"] },
  ],
  relatedSolutions: [
    { id: "data-intelligence", reason: "Predictive models and personalization depend on connected data." },
    { id: "crm-customer-lifecycle", reason: "Lead qualification and engagement automation feed directly into CRM." },
    { id: "omnichannel-experience", reason: "AI-driven engagement runs across the same channels customers already use." },
  ],
  industryApplications: [
    { industryId: "ecommerce", industryName: "E-commerce", path: ["Customer service", "Personalization"], ordered: false },
    { industryId: "real-estate", industryName: "Real Estate", path: ["Lead qualification"], ordered: false },
    { industryId: "events", industryName: "Events", path: ["Customer service", "Process automation"], ordered: false },
  ],
};
