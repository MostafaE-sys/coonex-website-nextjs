import Link from "next/link";
import { SOLUTION_GROUPS } from "@/lib/solutions-data";
import { PRODUCTS_NAV, INDUSTRIES_NAV } from "@/lib/nav-items";
import { Accordion } from "@/components/ui/accordion";
import { Container } from "@/components/ui/container";

const COMPANY_LINKS = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

// NEEDS REAL LEGAL CONTENT — no approved Privacy or Terms copy exists yet.
// Left empty rather than linking to unbuilt routes or inventing generic
// legal text; add real entries once real, approved documents exist.
const LEGAL_LINKS: { label: string; href: string }[] = [];

const LINK_CLASS = "text-body-sm text-white/70 transition-colors hover:text-white";
const MOBILE_TRIGGER_CLASS =
  "flex w-full items-center justify-between py-4 text-body-lg font-medium text-white";

function SolutionsColumn() {
  return (
    <div>
      <Link
        href="/solutions"
        className="text-label font-semibold uppercase tracking-wide text-white/60 transition-colors hover:text-white"
      >
        Solutions
      </Link>
      <div className="mt-4 space-y-4">
        {SOLUTION_GROUPS.map((group) => (
          <div key={group.id}>
            <p className="text-caption font-semibold uppercase tracking-wide text-white/60">
              {group.label}
            </p>
            <ul className="mt-2 space-y-1.5">
              {group.solutions.map((solution) => (
                <li key={solution.id}>
                  <Link href={`/solutions/${solution.id}`} className={LINK_CLASS}>
                    {solution.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

function LinkColumn({
  heading,
  headingHref,
  items,
}: {
  heading: string;
  headingHref?: string;
  items: { label: string; href: string }[];
}) {
  return (
    <div>
      {headingHref ? (
        <Link
          href={headingHref}
          className="text-label font-semibold uppercase tracking-wide text-white/60 transition-colors hover:text-white"
        >
          {heading}
        </Link>
      ) : (
        <p className="text-label font-semibold uppercase tracking-wide text-white/60">{heading}</p>
      )}
      <ul className="mt-4 space-y-2">
        {items.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className={LINK_CLASS}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-navy">
      <Container>
        <div className="border-b border-white/15 py-10">
          <span className="text-h4 font-bold tracking-tight text-white">Coonex</span>
          <p className="mt-2 max-w-sm text-body-sm text-white/70">
            Business, technology, data and growth — connected.
          </p>
        </div>

        {/* Desktop: dense multi-column grid */}
        <div className="hidden gap-10 py-12 md:grid md:grid-cols-4">
          <SolutionsColumn />
          <LinkColumn heading="Products" items={PRODUCTS_NAV} />
          <LinkColumn heading="Industries" headingHref="/industries" items={INDUSTRIES_NAV} />
          <LinkColumn heading="Company" items={[...COMPANY_LINKS, { label: "Insights", href: "/insights" }]} />
        </div>

        {/* Mobile: accessible accordion groups */}
        <div className="md:hidden">
          <Accordion
            label="Solutions"
            wrapperClassName="border-t border-white/15"
            triggerClassName={MOBILE_TRIGGER_CLASS}
          >
            <div className="space-y-4 pb-2 pl-4">
              {SOLUTION_GROUPS.map((group) => (
                <div key={group.id}>
                  <p className="text-caption font-semibold uppercase tracking-wide text-white/60">
                    {group.label}
                  </p>
                  <ul className="mt-2 space-y-2">
                    {group.solutions.map((solution) => (
                      <li key={solution.id}>
                        <Link href={`/solutions/${solution.id}`} className={LINK_CLASS}>
                          {solution.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Accordion>
          <Accordion
            label="Products"
            wrapperClassName="border-t border-white/15"
            triggerClassName={MOBILE_TRIGGER_CLASS}
          >
            <ul className="space-y-2 pb-2 pl-4">
              {PRODUCTS_NAV.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={LINK_CLASS}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Accordion>
          <Accordion
            label="Industries"
            wrapperClassName="border-t border-white/15"
            triggerClassName={MOBILE_TRIGGER_CLASS}
          >
            <ul className="space-y-2 pb-2 pl-4">
              {INDUSTRIES_NAV.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={LINK_CLASS}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Accordion>
          <Accordion
            label="Company"
            wrapperClassName="border-t border-b border-white/15"
            triggerClassName={MOBILE_TRIGGER_CLASS}
          >
            <ul className="space-y-2 pb-2 pl-4">
              {[...COMPANY_LINKS, { label: "Insights", href: "/insights" }].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={LINK_CLASS}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Accordion>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/15 py-6 text-caption text-white/60 md:flex-row md:items-center md:justify-between">
          <p>&copy; {new Date().getFullYear()} Coonex. All rights reserved.</p>
          <div className="flex gap-5">
            {LEGAL_LINKS.map((link) => (
              <Link key={link.href} href={link.href} className="text-white/60 transition-colors hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
