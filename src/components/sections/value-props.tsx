// LEGACY / UNUSED — manufacturing-era value propositions from the project's
// initial (incorrect) manufacturing positioning. Not imported anywhere;
// kept for reference only. Do not re-wire into any page without rewriting
// the content for Coonex's real positioning.
import { Layers, ShieldCheck, Truck, Zap } from "lucide-react";
import { Container } from "@/components/ui/container";
const VALUE_PROPS = [
  {
    icon: Zap,
    title: "Fast quoting",
    description: "Upload part files and get a quote back from vetted partners quickly.",
  },
  {
    icon: Layers,
    title: "Scalable production",
    description: "From single prototypes to full production runs.",
  },
  {
    icon: ShieldCheck,
    title: "Quality control",
    description: "Manufacturing partners are vetted for process quality and consistency.",
  },
  {
    icon: Truck,
    title: "Reliable delivery",
    description: "Clear timelines and tracking from quote to shipment.",
  },
];

export function ValueProps() {
  return (
    <section className="border-t border-border-subtle bg-white py-14 lg:py-20">
      <Container>
        <h2 className="sr-only">Why choose Coonex</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {VALUE_PROPS.map(({ icon: Icon, title, description }) => (
            <div key={title}>
              <Icon aria-hidden="true" size={22} className="text-navy" />
              <h3 className="mt-3 text-h4 font-bold text-navy">{title}</h3>
              <p className="mt-1.5 text-body-sm text-foreground-secondary">{description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
