export interface NavLinkItem {
  label: string;
  href: string;
}

// Bayeaa and Brandyo.buzz are intentionally excluded from navigation: neither
// has enough confirmed public positioning yet (see products-data.ts). Add
// them back only once their pages exist and are ready to ship — never point
// navigation at an unbuilt route.
export const PRODUCTS_NAV: NavLinkItem[] = [{ label: "Coonex CDP", href: "/products/coonex-cdp" }];

export const INDUSTRIES_NAV: NavLinkItem[] = [
  { label: "E-commerce", href: "/industries/ecommerce" },
  { label: "Healthcare", href: "/industries/healthcare" },
  { label: "Real Estate", href: "/industries/real-estate" },
  { label: "Events", href: "/industries/events" },
];

export const PLAIN_NAV_LINKS: NavLinkItem[] = [
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];
