import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { TextLink } from "@/components/ui/text-link";
import { HeroSystemDiagram, HeroSystemDiagramMobile } from "@/components/visuals/hero-system-diagram";

export function Hero() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <Container width="page" className="lg:flex lg:items-center lg:gap-16">
        <div className="text-center lg:flex-1 lg:text-left">
          <p className="text-label font-semibold uppercase tracking-wide text-yale">
            Business, Technology, Data &amp; Growth
          </p>

          <h1 className="mt-3 text-balance text-display-sm font-bold tracking-tight text-navy lg:text-display">
            Growth, technology, and data — connected.
          </h1>

          <p className="mt-4 text-body-lg text-foreground-secondary lg:max-w-lg">
            Coonex brings growth, technology, customer data and AI together
            into connected business solutions.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
            <Button href="/contact" size="md" withArrow>
              Talk to Coonex
            </Button>
            <TextLink href="#solutions-ecosystem">See how it connects</TextLink>
          </div>
        </div>

        <div className="mt-12 flex justify-center lg:mt-0 lg:flex-1 lg:justify-end">
          <HeroSystemDiagram className="hidden lg:block" />
          <HeroSystemDiagramMobile className="lg:hidden" />
        </div>
      </Container>
    </section>
  );
}
