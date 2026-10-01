import { ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import type { SolutionTransformationLayer as TransformationLayerData } from "@/lib/solution-page-types";

interface SolutionTransformationLayerProps {
  heading: string;
  intro?: string;
  layer: TransformationLayerData;
}

/**
 * Before → Connection Layer → After. Semantically distinct from StageFlow
 * (which is a multi-stage sequence a customer or lifecycle moves through):
 * this is a business-state transformation with exactly one connecting
 * layer — Coonex itself — so the middle panel is always the emphasized one,
 * not the last.
 */
export function SolutionTransformationLayer({
  heading,
  intro,
  layer,
}: SolutionTransformationLayerProps) {
  return (
    <section className="bg-white py-14 lg:py-20">
      <Container>
        <div className="max-w-2xl">
          <h2 className="text-h2 font-bold text-navy">{heading}</h2>
          {intro && <p className="mt-3 text-body-lg text-foreground-secondary">{intro}</p>}
        </div>

        <div className="mt-10">
          <div className="hidden items-start gap-4 lg:flex">
            <div className="flex-1 rounded-sm border-t-2 border-border p-6">
              <h3 className="text-label font-semibold uppercase tracking-wide text-foreground-secondary">
                {layer.before.label}
              </h3>
              <ul className="mt-3 space-y-1.5">
                {layer.before.items.map((item) => (
                  <li key={item} className="text-body-sm font-medium text-navy">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <ChevronRight aria-hidden="true" size={18} className="mt-6 shrink-0 text-border" />

            <div className="flex-1 rounded-md bg-navy p-6">
              <h3 className="text-label font-semibold uppercase tracking-wide text-white/70">
                {layer.connection.label}
              </h3>
              <ul className="mt-3 space-y-1.5">
                {layer.connection.items.map((item) => (
                  <li key={item} className="text-body-sm font-medium text-white">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <ChevronRight aria-hidden="true" size={18} className="mt-6 shrink-0 text-border" />

            <div className="flex-1 rounded-sm border-t-2 border-seaweed p-6">
              <h3 className="text-label font-semibold uppercase tracking-wide text-foreground-secondary">
                {layer.after.label}
              </h3>
              {layer.after.description && (
                <p className="mt-3 text-body-sm font-medium text-navy">{layer.after.description}</p>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-6 lg:hidden">
            <div className="rounded-sm border-t-2 border-border p-6">
              <h3 className="text-label font-semibold uppercase tracking-wide text-foreground-secondary">
                {layer.before.label}
              </h3>
              <ul className="mt-3 space-y-1.5">
                {layer.before.items.map((item) => (
                  <li key={item} className="text-body-sm font-medium text-navy">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <span aria-hidden="true" className="mx-auto h-6 w-px bg-border" />

            <div className="rounded-md bg-navy p-6">
              <h3 className="text-label font-semibold uppercase tracking-wide text-white/70">
                {layer.connection.label}
              </h3>
              <ul className="mt-3 space-y-1.5">
                {layer.connection.items.map((item) => (
                  <li key={item} className="text-body-sm font-medium text-white">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <span aria-hidden="true" className="mx-auto h-6 w-px bg-border" />

            <div className="rounded-sm border-t-2 border-seaweed p-6">
              <h3 className="text-label font-semibold uppercase tracking-wide text-foreground-secondary">
                {layer.after.label}
              </h3>
              {layer.after.description && (
                <p className="mt-3 text-body-sm font-medium text-navy">{layer.after.description}</p>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
