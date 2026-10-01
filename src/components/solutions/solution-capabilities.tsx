import { Container } from "@/components/ui/container";
import type { SolutionCapabilityGroup } from "@/lib/solution-page-types";

interface SolutionCapabilitiesProps {
  groups: SolutionCapabilityGroup[];
}

export function SolutionCapabilities({ groups }: SolutionCapabilitiesProps) {
  return (
    <section className="bg-background-subtle py-14 lg:py-20">
      <Container>
        <div className="max-w-2xl">
          <p className="text-label font-semibold uppercase tracking-wide text-yale">Capabilities</p>
          <h2 className="mt-2 text-h2 font-bold text-navy">What this connects.</h2>
        </div>
        <div className="mt-10 grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-x-8 gap-y-10">
          {groups.map((group) => (
            <div key={group.name} className="border-t border-border pt-5">
              <h3 className="text-h4 font-bold text-navy">{group.name}</h3>
              <ul className="mt-3 space-y-1.5">
                {group.items.map((item) => (
                  <li key={item} className="text-body-sm text-foreground-secondary">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
