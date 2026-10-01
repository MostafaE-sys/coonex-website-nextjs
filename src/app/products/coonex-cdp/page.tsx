import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { CtaBand } from "@/components/sections/cta-band";
import { ProductBreadcrumb } from "@/components/products/product-breadcrumb";
import { SolutionHero } from "@/components/solutions/solution-hero";
import { SolutionProblem } from "@/components/solutions/solution-problem";
import { ProductRelationships } from "@/components/products/product-relationships";
import { SolutionRelated } from "@/components/solutions/solution-related";
import { ProductProof } from "@/components/products/product-proof";
import { coonexCdp as content } from "@/lib/products-content/coonex-cdp";
import { SOLUTION_GROUPS } from "@/lib/solutions-data";

function solutionName(id: string): string {
  for (const group of SOLUTION_GROUPS) {
    const match = group.solutions.find((solution) => solution.id === id);
    if (match) return match.name;
  }
  return id;
}

export const metadata: Metadata = {
  title: "Coonex CDP — Coonex",
  description: content.heroHeadline,
  alternates: { canonical: "/products/coonex-cdp" },
};

export default function CoonexCdpPage() {
  return (
    <>
      <Header />
      <ProductBreadcrumb name={content.name} />
      <main id="main-content">
        <SolutionHero groupLabel="Coonex Product" headline={content.heroHeadline} support={content.heroSupport} />
        <SolutionProblem heading={content.problemHeading} body={content.problemBody} />
        <ProductRelationships
          heading={content.relationshipHeading}
          intro={content.relationshipIntro}
          productName={content.name}
          connections={content.supportedSolutions.map((ref) => solutionName(ref.id))}
        />
        <SolutionRelated
          related={content.supportedSolutions}
          eyebrow="Supported Solutions"
          heading="The Solutions Coonex CDP supports."
        />
        <ProductProof />
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
