import { Container } from "@/components/ui/container";
import { TextLink } from "@/components/ui/text-link";
import { INSIGHT_TOPICS } from "@/lib/insights-data";

export function Insights() {
  return (
    <section className="bg-white py-8 lg:py-10">
      <Container width="narrow" className="text-center">
        <h2 className="text-h2 font-bold text-navy">Insights</h2>
        <p className="mt-3 text-body-lg text-foreground-secondary">
          Perspectives on growth, technology, data and connected business.
        </p>
        <ul className="mt-6 flex flex-wrap items-center justify-center gap-2">
          {INSIGHT_TOPICS.map((topic) => (
            <li key={topic}>
              <span className="rounded-full border border-border px-3 py-1.5 text-body-sm text-foreground-muted">
                {topic}
              </span>
            </li>
          ))}
        </ul>
        <TextLink href="/insights" withArrow className="mt-6">
          Explore Insights
        </TextLink>
      </Container>
    </section>
  );
}
