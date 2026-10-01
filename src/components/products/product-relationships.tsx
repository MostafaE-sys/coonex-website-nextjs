import { Container } from "@/components/ui/container";

interface ProductRelationshipsProps {
  heading: string;
  intro?: string;
  productName: string;
  connections: string[];
}

/**
 * Product-centered relationship diagram — the Product sits in the middle,
 * the Solutions it supports sit either side. Deliberately distinct from
 * Omnichannel's customer-centered `SolutionHub` (a vertical stack: customer
 * card above a grid of channels): this is a horizontal line with the
 * Product in the middle, so the two visuals never read as the same
 * composition. Purely diagrammatic (plain labels, not links) — the
 * clickable, reasoned list of supported Solutions follows in a separate
 * section.
 */
export function ProductRelationships({ heading, intro, productName, connections }: ProductRelationshipsProps) {
  const mid = Math.ceil(connections.length / 2);
  const left = connections.slice(0, mid);
  const right = connections.slice(mid);

  const centerCard = (
    <div className="w-full max-w-xs shrink-0 rounded-md bg-navy px-6 py-5 text-center">
      <p className="text-label font-semibold uppercase tracking-wide text-white/70">Coonex Product</p>
      <p className="mt-1 text-h4 font-bold text-white">{productName}</p>
    </div>
  );

  return (
    <section className="bg-background-subtle py-14 lg:py-20">
      <Container>
        <div className="max-w-2xl">
          <h2 className="text-h2 font-bold text-navy">{heading}</h2>
          {intro && <p className="mt-3 text-body-lg text-foreground-secondary">{intro}</p>}
        </div>

        <p className="sr-only">{productName} supports:</p>

        <div className="mt-10 hidden items-center gap-4 lg:flex">
          <ul className="flex flex-1 flex-col gap-3">
            {left.map((label) => (
              <li key={label} className="rounded-sm border border-border bg-white px-4 py-3 text-center text-body-sm font-semibold text-navy">
                {label}
              </li>
            ))}
          </ul>
          <span aria-hidden="true" className="h-px flex-1 bg-border" />
          {centerCard}
          <span aria-hidden="true" className="h-px flex-1 bg-border" />
          <ul className="flex flex-1 flex-col gap-3">
            {right.map((label) => (
              <li key={label} className="rounded-sm border border-border bg-white px-4 py-3 text-center text-body-sm font-semibold text-navy">
                {label}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 flex flex-col items-center gap-3 lg:hidden">
          <ul className="flex w-full max-w-sm flex-col gap-3">
            {left.map((label) => (
              <li key={label} className="rounded-sm border border-border bg-white px-4 py-3 text-center text-body-sm font-semibold text-navy">
                {label}
              </li>
            ))}
          </ul>
          <span aria-hidden="true" className="h-6 w-px bg-border" />
          {centerCard}
          <span aria-hidden="true" className="h-6 w-px bg-border" />
          <ul className="flex w-full max-w-sm flex-col gap-3">
            {right.map((label) => (
              <li key={label} className="rounded-sm border border-border bg-white px-4 py-3 text-center text-body-sm font-semibold text-navy">
                {label}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
