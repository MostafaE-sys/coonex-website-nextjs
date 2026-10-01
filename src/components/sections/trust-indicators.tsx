// LEGACY / UNUSED — manufacturing-era certification/compliance strip. Not
// imported anywhere; kept for reference only. Coonex has no confirmed
// certifications to display — do not re-wire this without real, verified
// labels.
import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/container";
const PLACEHOLDER_LABELS = [
  "TODO: Certification",
  "TODO: Certification",
  "TODO: Certification",
  "TODO: Certification",
];

export function TrustIndicators() {
  return (
    <section className="border-t border-border-subtle bg-white py-6">
      <Container>
        <div className="flex flex-col items-center gap-3">
          <p className="flex items-center gap-1.5 text-body-sm font-medium text-foreground-muted">
            <CheckCircle2 aria-hidden="true" size={16} className="text-seaweed" />
            Certifications &amp; compliance
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1.5">
            {PLACEHOLDER_LABELS.map((label, index) => (
              <li key={index} className="flex items-center gap-2">
                <span className="text-caption text-foreground-muted">{label}</span>
                {index < PLACEHOLDER_LABELS.length - 1 && (
                  <span aria-hidden="true" className="text-border">
                    ·
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
