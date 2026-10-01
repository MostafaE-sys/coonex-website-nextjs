import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Problem } from "@/components/sections/problem";
import { SolutionsEcosystem } from "@/components/sections/solutions-ecosystem";
import { StartWithOne } from "@/components/sections/start-with-one";
import { Products } from "@/components/sections/products";
import { Industries } from "@/components/sections/industries";
import { ConnectedEcosystem } from "@/components/sections/connected-ecosystem";
import { Proof } from "@/components/sections/proof";
import { Insights } from "@/components/sections/insights";
import { CtaBand } from "@/components/sections/cta-band";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <Problem />
        <SolutionsEcosystem />
        <StartWithOne />
        <Products />
        <Industries />
        <ConnectedEcosystem />
        <Proof />
        <Insights />
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
