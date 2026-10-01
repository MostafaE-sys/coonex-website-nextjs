import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import type { IndustryApplication } from "@/lib/solution-page-types";

interface SolutionIndustriesProps {
  applications: IndustryApplication[];
}

export function SolutionIndustries({ applications }: SolutionIndustriesProps) {
  return (
    <section className="bg-background-subtle py-14 lg:py-20">
      <Container>
        <div className="max-w-2xl">
          <p className="text-label font-semibold uppercase tracking-wide text-yale">
            Industry Applications
          </p>
          <h2 className="mt-2 text-h2 font-bold text-navy">Applied to your industry.</h2>
        </div>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {applications.map((app) => (
            <div key={app.industryId}>
              <h3>
                <Link
                  href={`/industries/${app.industryId}`}
                  className="text-h4 font-bold text-navy transition-colors hover:text-yale"
                >
                  {app.industryName}
                </Link>
              </h3>
              <p className="mt-2 flex flex-wrap items-center gap-x-1.5 gap-y-1 text-body-sm text-foreground-secondary">
                {app.path.map((step, index) => (
                  <span key={step} className="flex items-center gap-1.5">
                    {step}
                    {index < app.path.length - 1 &&
                      (app.ordered === false ? (
                        <span aria-hidden="true" className="text-border">
                          ·
                        </span>
                      ) : (
                        <ChevronRight aria-hidden="true" size={12} className="text-border" />
                      ))}
                  </span>
                ))}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
