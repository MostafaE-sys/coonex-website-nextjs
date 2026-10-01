import { Container } from "@/components/ui/container";
import type { SolutionHubChannel } from "@/lib/solution-page-types";

interface SolutionHubProps {
  eyebrow: string;
  heading: string;
  centerLabel: string;
  channels: SolutionHubChannel[];
}

/**
 * A customer-centered hub, not a left-to-right sequence: one center (the
 * customer) with documented channels connecting into it. Deliberately not a
 * decorative orbit/network graphic — every node is a real, documented
 * channel, and the "hub" reads through composition (a prominent center
 * anchor above a connected grid of channels) rather than a literal circular
 * diagram. Same DOM order and visual order on every breakpoint, so no
 * spatial reasoning is required to understand it.
 */
export function SolutionHub({ eyebrow, heading, centerLabel, channels }: SolutionHubProps) {
  return (
    <section className="bg-background-subtle py-14 lg:py-20">
      <Container>
        <div className="max-w-2xl">
          <p className="text-label font-semibold uppercase tracking-wide text-yale">{eyebrow}</p>
          <h2 className="mt-2 text-h2 font-bold text-navy">{heading}</h2>
        </div>

        <div className="mt-10 flex flex-col items-center">
          <div className="w-full max-w-sm rounded-md bg-navy px-6 py-5 text-center">
            <h3 className="text-label font-semibold uppercase tracking-wide text-white/70">
              At the center
            </h3>
            <p className="mt-1 text-h4 font-bold text-white">{centerLabel}</p>
          </div>

          <span aria-hidden="true" className="my-6 h-6 w-px bg-border" />

          <p className="text-body-sm font-medium text-foreground-secondary">
            Connected through every channel:
          </p>

          <ol className="mt-6 grid w-full grid-cols-2 gap-3 sm:grid-cols-4">
            {channels.map((channel) => (
              <li
                key={channel.label}
                className="rounded-sm border-t-2 border-border bg-white px-3 py-3 text-center"
              >
                <span className="text-body-sm font-semibold text-navy">{channel.label}</span>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
