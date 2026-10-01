import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { CtaBand } from "@/components/sections/cta-band";
import { IndustryBreadcrumb } from "@/components/industries/industry-breadcrumb";
import { SolutionHero } from "@/components/solutions/solution-hero";
import { SolutionProblem } from "@/components/solutions/solution-problem";
import { IndustryJourney } from "@/components/industries/industry-journey";
import { SolutionConnections } from "@/components/solutions/solution-connections";
import { SolutionRelated } from "@/components/solutions/solution-related";
import { SolutionChannels } from "@/components/solutions/solution-channels";
import { SolutionProduct } from "@/components/solutions/solution-product";
import { IndustryUseCases } from "@/components/industries/industry-use-cases";
import { IndustryProof } from "@/components/industries/industry-proof";
import { healthcare as content } from "@/lib/industries-content/healthcare";

export const metadata: Metadata = {
  title: "Healthcare — Coonex",
  description: content.heroHeadline,
  alternates: { canonical: "/industries/healthcare" },
};

export default function HealthcareIndustryPage() {
  return (
    <>
      <Header />
      <IndustryBreadcrumb name={content.name} />
      <main id="main-content">
        <SolutionHero groupLabel={content.name} headline={content.heroHeadline} support={content.heroSupport} />
        <SolutionProblem heading={content.challengesHeading} body={content.challengesBody} />
        <IndustryJourney
          heading={content.journeyHeading}
          intro={content.journeyIntro}
          stages={content.journeyStages}
        />
        <SolutionConnections
          eyebrow="Connected Journey"
          heading={content.connectedJourneyHeading}
          steps={content.journeyStages.map((stage) => ({
            transition: stage.label,
            capabilities: stage.coonexRole,
          }))}
        />
        <SolutionRelated
          related={content.relevantSolutions}
          eyebrow="Relevant Solutions"
          heading="The Solutions behind this journey."
        />
        <SolutionChannels solutionName={content.name} channels={content.systems} note={content.systemsNote} />
        {content.product && <SolutionProduct product={content.product} />}
        <IndustryUseCases useCases={content.useCases} />
        <IndustryProof industryName={content.name} />
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
