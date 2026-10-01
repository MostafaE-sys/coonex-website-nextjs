import type { MetadataRoute } from "next";
import { SOLUTION_GROUPS } from "@/lib/solutions-data";
import { INDUSTRIES } from "@/lib/industries-data";
import { PRODUCTS } from "@/lib/products-data";
import { SITE_URL } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["/", "/solutions", "/products", "/industries", "/about", "/insights", "/contact"];

  const solutionRoutes = SOLUTION_GROUPS.flatMap((group) =>
    group.solutions.map((solution) => `/solutions/${solution.id}`),
  );

  const industryRoutes = INDUSTRIES.map((industry) => industry.href);

  // Only currently-visible Products — hidden entries (Bayeaa, Brandyo.buzz)
  // have no public page and must never appear in the sitemap.
  const productRoutes = PRODUCTS.filter((product) => !product.hidden).map(
    (product) => `/products/${product.id}`,
  );

  const routes = [...staticRoutes, ...solutionRoutes, ...productRoutes, ...industryRoutes];

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
  }));
}
