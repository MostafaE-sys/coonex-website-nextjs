import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SOLUTION_GROUPS } from "@/lib/solutions-data";
import type { RelatedSolutionRef } from "@/lib/solution-page-types";

function findSolutionName(id: string): string | undefined {
  for (const group of SOLUTION_GROUPS) {
    const match = group.solutions.find((solution) => solution.id === id);
    if (match) return match.name;
  }
  return undefined;
}

interface SolutionRelatedProps {
  related: RelatedSolutionRef[];
  eyebrow?: string;
  heading?: string;
}

export function SolutionRelated({
  related,
  eyebrow = "Related Solutions",
  heading = "Part of a larger system.",
}: SolutionRelatedProps) {
  return (
    <section className="bg-background-subtle py-14 lg:py-20">
      <Container width="narrow">
        <p className="text-label font-semibold uppercase tracking-wide text-yale">{eyebrow}</p>
        <h2 className="mt-2 text-h3 font-bold text-navy">{heading}</h2>
        <ul className="mt-8 divide-y divide-border">
          {related.map((ref) => {
            const name = findSolutionName(ref.id);
            if (!name) return null;
            return (
              <li key={ref.id} className="py-4">
                <h3>
                  <Link
                    href={`/solutions/${ref.id}`}
                    className="text-body-lg font-semibold text-navy transition-colors hover:text-yale"
                  >
                    {name}
                  </Link>
                </h3>
                <p className="mt-1 text-body-sm text-foreground-secondary">{ref.reason}</p>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
