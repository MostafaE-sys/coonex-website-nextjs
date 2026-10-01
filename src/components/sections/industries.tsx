import { Container } from "@/components/ui/container";
import { IndustriesExplorer } from "@/components/sections/industries-explorer";

export function Industries() {
  return (
    <section className="bg-background-subtle py-16 lg:py-24">
      <Container>
        <div className="max-w-2xl">
          <h2 className="text-h2 font-bold text-navy">Built around your industry.</h2>
        </div>
        <div className="mt-10">
          <IndustriesExplorer />
        </div>
      </Container>
    </section>
  );
}
