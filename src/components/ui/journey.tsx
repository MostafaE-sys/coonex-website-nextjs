import { ChevronRight } from "lucide-react";
import { ICON_SIZE } from "@/lib/icon-size";

export interface JourneyStep {
  label: string;
}

interface JourneyProps {
  steps: JourneyStep[];
}

/**
 * Reusable journey/sequence primitive. Renders the same ordered steps twice —
 * a horizontal flow (lg+) and a vertical flow (below lg) — so the visual
 * order and the screen-reader order are always identical, never re-derived.
 */
export function Journey({ steps }: JourneyProps) {
  return (
    <>
      <ol className="hidden flex-wrap items-center gap-x-2 gap-y-3 lg:flex">
        {steps.map((step, index) => (
          <li key={step.label} className="flex items-center gap-2">
            <span className="text-body-sm font-semibold text-navy">{step.label}</span>
            {index < steps.length - 1 && (
              <ChevronRight aria-hidden="true" size={ICON_SIZE.sm} className="text-border" />
            )}
          </li>
        ))}
      </ol>

      <ol className="flex flex-col lg:hidden">
        {steps.map((step, index) => (
          <li key={step.label} className="flex flex-col items-start">
            {index > 0 && <span aria-hidden="true" className="h-4 w-px bg-border" />}
            <span className="text-body-sm font-semibold text-navy">{step.label}</span>
          </li>
        ))}
      </ol>
    </>
  );
}
