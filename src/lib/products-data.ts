export interface Product {
  id: string;
  name: string;
  description?: string;
  hidden?: boolean;
  /**
   * True when this product renders with name-only (or near name-only)
   * content and has NOT been explicitly approved for production in that
   * state. This homepage should not be considered fully content-ready for
   * production while any product has `needsContentConfirmation: true`.
   */
  needsContentConfirmation?: boolean;
}

// TODO: REAL CONTENT REQUIRED — confirm final descriptions once each product's
// proposition is defined. Never invent functionality beyond what's documented.
// Bayeaa and Brandyo.buzz are hidden from public presentation and navigation:
// per the Coonex Master Context, Bayeaa's "final product positioning should
// be defined from its actual functionality and target market" (not yet
// defined), and Brandyo.buzz "can be connected to Brand & Digital Experience
// once its final proposition is defined" (also not yet defined). Neither has
// enough confirmed positioning for public presentation. Unhide only once
// real content exists — do not unhide to fill space on the Products Hub.
export const PRODUCTS: Product[] = [
  {
    id: "coonex-cdp",
    name: "Coonex CDP",
    description:
      "A customer data product supporting Data & Intelligence, CRM & Customer Lifecycle, Omnichannel Experience, and Connected Business Ecosystems.",
  },
  {
    id: "brandyo-buzz",
    name: "Brandyo.buzz",
    hidden: true,
    needsContentConfirmation: true,
  },
  {
    id: "bayeaa",
    name: "Bayeaa",
    hidden: true,
    needsContentConfirmation: true,
  },
];
