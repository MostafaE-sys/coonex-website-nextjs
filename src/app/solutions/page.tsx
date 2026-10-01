import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { TextLink } from "@/components/ui/text-link";
import { Journey } from "@/components/ui/journey";
import { CtaBand } from "@/components/sections/cta-band";
import { SOLUTION_GROUPS } from "@/lib/solutions-data";
import { SOLUTION_GROUP_INTROS, EXAMPLE_PATH } from "@/lib/solutions-hub-data";

export const metadata: Metadata = {
  title: "Solutions — Coonex",
  description:
    "Coonex combines growth, customer experience, technology, data and automation into connected solutions built around business problems.",
  alternates: { canonical: "/solutions" },
};

export default function SolutionsHubPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <section className="bg-white py-14 lg:py-20">
          <Container width="narrow" className="text-center">
            <p className="text-label font-semibold uppercase tracking-wide text-yale">
              Coonex Solutions
            </p>
            <h1 className="mt-3 text-balance text-h2 font-bold tracking-tight text-navy lg:text-h1">
              Connected solutions for growth, customers and technology.
            </h1>
            <p className="mt-4 text-body-lg text-foreground-secondary">
              Coonex combines growth, customer experience, technology, data
              and automation into connected solutions built around business
              problems.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="/contact" size="md" withArrow>
                Talk to Coonex
              </Button>
              <TextLink href="#grow">Explore a Solution</TextLink>
            </div>
          </Container>
        </section>

        {SOLUTION_GROUPS.map((group, groupIndex) => {
          const intro = SOLUTION_GROUP_INTROS.find((g) => g.id === group.id);
          const bg = groupIndex % 2 === 0 ? "bg-background-subtle" : "bg-white";
          return (
            <section key={group.id} id={group.id} className={`${bg} py-14 lg:py-20`}>
              <Container>
                <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] lg:gap-16">
                  <div className={intro?.reverse ? "lg:order-last" : ""}>
                    <h2 className="text-label font-semibold uppercase tracking-wide text-yale">
                      {group.label}
                    </h2>
                    {intro && (
                      <p className="mt-3 text-body-lg text-foreground-secondary">
                        {intro.statement}
                      </p>
                    )}
                  </div>
                  <div className={intro?.reverse ? "lg:order-first" : ""}>
                    <ul className="divide-y divide-border">
                      {group.solutions.map((solution) => (
                        <li key={solution.id} className="py-5">
                          <h3>
                            <Link
                              href={`/solutions/${solution.id}`}
                              className="text-h4 font-bold text-navy transition-colors hover:text-yale"
                            >
                              {solution.name}
                            </Link>
                          </h3>
                          <p className="mt-1.5 text-body-sm text-foreground-secondary">
                            {solution.message}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Container>
            </section>
          );
        })}

        <section className="bg-white py-14 lg:py-20">
          <Container width="narrow">
            <p className="text-label font-semibold uppercase tracking-wide text-yale">
              How Solutions connect
            </p>
            <h2 className="mt-2 text-h3 font-bold text-navy">
              Start with one. Connect more, over time.
            </h2>
            <p className="mt-3 text-body-lg text-foreground-secondary">
              A business doesn&apos;t need to adopt every Solution at once.
              Many start with the problem that matters most, then connect
              more Solutions as needs grow. One possible path:
            </p>
            <div className="mt-8">
              <Journey steps={EXAMPLE_PATH} />
            </div>
            <p className="mt-4 text-caption text-foreground-muted">
              This is one example path — not a required sequence.
            </p>
          </Container>
        </section>

        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
