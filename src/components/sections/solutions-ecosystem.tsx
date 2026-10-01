import { Container } from "@/components/ui/container";
import { TextLink } from "@/components/ui/text-link";
import { SolutionsExplorer } from "@/components/sections/solutions-explorer";

export function SolutionsEcosystem() {
  return (
    <section id="solutions-ecosystem" className="bg-white py-16 lg:py-24">
      <Container>
        <div className="max-w-2xl">
          <p className="text-label font-semibold uppercase tracking-wide text-yale">
            What Coonex solves
          </p>
          <h2 className="mt-2 text-h2 font-bold text-navy">
            One connected solutions ecosystem.
          </h2>
        </div>
        <div className="mt-10">
          <SolutionsExplorer />
        </div>
        <div className="mt-10">
          <TextLink href="/solutions" withArrow>
            Explore all Solutions
          </TextLink>
        </div>
      </Container>
    </section>
  );
}
