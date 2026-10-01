import type { ProductPageContent } from "@/lib/product-page-types";

// Source: Coonex Master Context — Products.
//
// DIRECTLY DOCUMENTED (the entire factual foundation of this page):
// "Coonex CDP: A customer data product that supports Data & Intelligence,
// CRM, Omnichannel and Connected Ecosystems." Also: "A Product is a platform
// or tool built by Coonex that can support one or more solutions."
//
// NOT DOCUMENTED, therefore intentionally absent from this page: any
// feature, module, dashboard, integration, pricing, tier, API, technical
// architecture, industry relationship, use case, customer count, or usage
// statistic. No capability is inferred from the Solutions Coonex CDP
// supports — supporting CRM does not imply CDP contains CRM's nurturing
// capabilities, supporting Omnichannel does not imply channel orchestration
// lives in CDP, and supporting Data & Intelligence does not imply CDP
// contains dashboards, a warehouse, or predictive analytics. Words such as
// "unified," "real-time," "single customer view," "360 profile,"
// "activation," "identity resolution," "segmentation," "orchestration," and
// "AI-powered" do not appear anywhere in this file because none of them are
// documented for Coonex CDP specifically.
//
// EDITORIAL DECISION: the standard Industry-page-style structure suggested
// three separate relationship sections (What It Connects / Supported
// Solutions / Where It Fits in the Ecosystem). With only one documented
// sentence behind all three, that would have meant restating the same fact
// three times in three visual wrappers. Consolidated into two: a
// diagrammatic relationship visual (`relationshipHeading`/`relationshipIntro`,
// rendered by `ProductRelationships`), followed by the reasoned, linkable
// list (`supportedSolutions`, rendered by the reused `SolutionRelated`).
// No Capabilities, Industry Relevance, or Use Cases sections exist on this
// page — none are documented for Coonex CDP, so none are rendered, per the
// same strict rule already applied across every Solution and Industry page.
export const coonexCdp: ProductPageContent = {
  id: "coonex-cdp",
  name: "Coonex CDP",
  heroHeadline: "Connect customer data across the Coonex ecosystem.",
  heroSupport:
    "Coonex CDP is a customer data product supporting Data & Intelligence, CRM & Customer Lifecycle, Omnichannel Experience, and Connected Business Ecosystems.",
  problemHeading: "Customer data rarely lives in one place.",
  problemBody:
    "Data about the same customer can sit across different parts of the business — from CRM to channels to analytics — with no shared foundation connecting it. The Solutions that depend on customer data need that foundation to be connected, not fragmented.",
  relationshipHeading: "Where Coonex CDP sits in the ecosystem.",
  relationshipIntro: "Coonex CDP supports the Solutions that depend on connected customer data.",
  supportedSolutions: [
    { id: "data-intelligence", reason: "Provides the connected customer data that Data & Intelligence turns into decisions." },
    { id: "crm-customer-lifecycle", reason: "Gives CRM & Customer Lifecycle a shared customer-data foundation across the relationship." },
    { id: "omnichannel-experience", reason: "Supports the customer identity that Omnichannel Experience connects across channels." },
    { id: "connected-business-ecosystems", reason: "Acts as one of the connected systems inside a wider business ecosystem." },
  ],
};
