import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { CtaBand } from "@/components/sections/cta-band";
import { SolutionBreadcrumb } from "@/components/solutions/solution-breadcrumb";
import { SolutionHero } from "@/components/solutions/solution-hero";
import { SolutionProblem } from "@/components/solutions/solution-problem";
import { SolutionNarrative } from "@/components/solutions/solution-narrative";
import { SolutionCapabilities } from "@/components/solutions/solution-capabilities";
import { SolutionChannels } from "@/components/solutions/solution-channels";
import { SolutionRelated } from "@/components/solutions/solution-related";
import { SolutionProduct } from "@/components/solutions/solution-product";
import { SolutionIndustries } from "@/components/solutions/solution-industries";
import { commerce as content } from "@/lib/solutions-content/commerce";

export const metadata: Metadata = {
  title: "Commerce — Coonex",
  description: content.heroHeadline,
  alternates: { canonical: "/solutions/commerce" },
};

export default function CommercePage() {
  return (
    <>
      <Header />
      <SolutionBreadcrumb name={content.name} />
      <main id="main-content">
        <SolutionHero
          groupLabel={content.groupLabel}
          headline={content.heroHeadline}
          support={content.heroSupport}
        />
        <SolutionProblem heading={content.problemHeading} body={content.problemBody} />
        <SolutionNarrative narrative={content.narrative} />
        <SolutionCapabilities groups={content.capabilityGroups} />
        {content.channels && (
          <SolutionChannels solutionName={content.name} channels={content.channels} />
        )}
        <SolutionRelated related={content.relatedSolutions} />
        {content.product && <SolutionProduct product={content.product} />}
        <SolutionIndustries applications={content.industryApplications} />
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
