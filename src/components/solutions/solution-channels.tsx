import { Container } from "@/components/ui/container";

interface SolutionChannelsProps {
  solutionName: string;
  channels: string[];
  note?: string;
}

export function SolutionChannels({ solutionName, channels, note }: SolutionChannelsProps) {
  return (
    <section className="bg-white py-10 lg:py-14">
      <Container width="narrow">
        <p className="text-label font-semibold uppercase tracking-wide text-yale">
          Connected systems &amp; channels
        </p>
        <p className="mt-3 text-body-lg text-foreground-secondary">
          {solutionName} doesn&apos;t sit alone — it connects with:
        </p>
        <ul className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2">
          {channels.map((channel, index) => (
            <li key={channel} className="flex items-center gap-3">
              <span className="text-body-sm font-medium text-foreground-secondary">{channel}</span>
              {index < channels.length - 1 && (
                <span aria-hidden="true" className="text-border">
                  ·
                </span>
              )}
            </li>
          ))}
        </ul>
        {note && <p className="mt-4 text-body-sm text-foreground-muted">{note}</p>}
      </Container>
    </section>
  );
}
