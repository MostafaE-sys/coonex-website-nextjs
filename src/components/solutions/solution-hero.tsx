import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

interface SolutionHeroProps {
  groupLabel: string;
  headline: string;
  support: string;
}

export function SolutionHero({ groupLabel, headline, support }: SolutionHeroProps) {
  return (
    <section className="bg-white py-14 lg:py-20">
      <Container width="narrow" className="text-center">
        <p className="text-label font-semibold uppercase tracking-wide text-yale">{groupLabel}</p>
        <h1 className="mt-3 text-balance text-h2 font-bold tracking-tight text-navy lg:text-h1">
          {headline}
        </h1>
        <p className="mt-4 text-body-lg text-foreground-secondary">{support}</p>
        <div className="mt-8">
          <Button href="/contact" size="md" withArrow>
            Talk to Coonex
          </Button>
        </div>
      </Container>
    </section>
  );
}
