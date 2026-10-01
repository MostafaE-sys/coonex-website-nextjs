export interface JourneyStep {
  label: string;
}

export interface Industry {
  id: string;
  name: string;
  message: string;
  journey: JourneyStep[];
  ctaLabel: string;
  href: string;
}

export const INDUSTRIES: Industry[] = [
  {
    id: "ecommerce",
    name: "E-commerce",
    message: "Turn traffic into customers, and customers into growth.",
    journey: [
      { label: "Acquire" },
      { label: "Convert" },
      { label: "Understand" },
      { label: "Retain" },
      { label: "Automate & Grow" },
    ],
    ctaLabel: "See the E-commerce approach",
    href: "/industries/ecommerce",
  },
  {
    id: "healthcare",
    name: "Healthcare",
    message: "Connect every step of the patient journey, from first search to return visit.",
    journey: [
      { label: "Discover" },
      { label: "Search" },
      { label: "Book" },
      { label: "Visit" },
      { label: "Follow Up" },
      { label: "Return" },
    ],
    ctaLabel: "See the Healthcare approach",
    href: "/industries/healthcare",
  },
  {
    id: "real-estate",
    name: "Real Estate",
    message: "Connect property marketing, leads, sales and customer data in one system.",
    journey: [
      { label: "Discover" },
      { label: "Explore" },
      { label: "Enquire" },
      { label: "Qualify" },
      { label: "View" },
      { label: "Buy" },
      { label: "Engage" },
    ],
    ctaLabel: "See the Real Estate approach",
    href: "/industries/real-estate",
  },
  {
    id: "events",
    name: "Events",
    message: "Connect marketing, registration and engagement across the entire event lifecycle.",
    journey: [
      { label: "Awareness" },
      { label: "Registration" },
      { label: "Pre-event" },
      { label: "Attendance" },
      { label: "Onsite" },
      { label: "Follow-up" },
      { label: "Next Event" },
    ],
    ctaLabel: "See the Events approach",
    href: "/industries/events",
  },
];
