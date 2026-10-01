import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export function CtaBand() {
  return (
    <section className="bg-navy-hover py-14 lg:py-16">
      <Container width="narrow" className="text-center">
        <h2 className="text-h3 font-bold text-white">Let&apos;s talk about your business.</h2>
        <p className="mt-3 text-body-lg text-white/70">
          Start with the problem that matters most now. We&apos;ll show you
          how it connects to everything else.
        </p>
        <div className="mt-7">
          <Button href="/contact" size="md" withArrow>
            Talk to Coonex
          </Button>
        </div>
      </Container>
    </section>
  );
}
