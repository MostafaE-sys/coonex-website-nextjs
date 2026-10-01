// LEGACY / UNUSED — manufacturing-era wrapper for ServicesExplorer. Not
// imported anywhere. Do not reuse as current Coonex content.
import { Container } from "@/components/ui/container";
import { ServicesExplorer } from "@/components/sections/services-explorer";

export function Services() {
  return (
    <section className="bg-white py-14 lg:py-20">
      <Container>
        <div className="max-w-2xl">
          <p className="text-label font-semibold uppercase tracking-wide text-yale">
            What we source
          </p>
          <h2 className="mt-2 text-h2 font-bold text-navy">
            Manufacturing capabilities
          </h2>
        </div>
        <div className="mt-10">
          <ServicesExplorer />
        </div>
      </Container>
    </section>
  );
}
