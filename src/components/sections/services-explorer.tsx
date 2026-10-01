"use client";

/**
 * LEGACY / UNUSED — built during the project's initial (incorrect) manufacturing
 * positioning of Coonex and never updated for the current business model.
 * Not imported anywhere. Do not reuse as current Coonex content — the
 * "Solutions Ecosystem" pattern (solutions-explorer.tsx) replaced this.
 * Kept only in case its interaction engineering is useful as a reference.
 */

import { useState, type KeyboardEvent } from "react";
import { CheckCircle2, ImageOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SERVICES } from "@/lib/services-data";

export function ServicesExplorer() {
  const [activeId, setActiveId] = useState(SERVICES[0].id);
  const activeService = SERVICES.find((s) => s.id === activeId) ?? SERVICES[0];

  function focusTab(id: string) {
    setActiveId(id);
    requestAnimationFrame(() => {
      document.getElementById(`service-tab-${id}`)?.focus();
    });
  }

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    const index = SERVICES.findIndex((s) => s.id === activeId);
    if (index === -1) return;

    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      event.preventDefault();
      focusTab(SERVICES[(index + 1) % SERVICES.length].id);
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      event.preventDefault();
      focusTab(SERVICES[(index - 1 + SERVICES.length) % SERVICES.length].id);
    } else if (event.key === "Home") {
      event.preventDefault();
      focusTab(SERVICES[0].id);
    } else if (event.key === "End") {
      event.preventDefault();
      focusTab(SERVICES[SERVICES.length - 1].id);
    }
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[280px_1fr] lg:gap-12">
      <div className="min-w-0">
        <div
          role="group"
          aria-label="Service category"
          className="mb-4 inline-flex rounded-sm border border-border p-1"
        >
          <button type="button" aria-pressed="true" className="rounded-sm bg-navy px-4 py-1.5 text-body-sm font-semibold text-white">
            Services
          </button>
          <button
            type="button"
            disabled
            className="cursor-not-allowed rounded-sm px-4 py-1.5 text-body-sm font-medium text-foreground-muted opacity-60"
          >
            Use Cases<span className="sr-only"> (coming soon)</span>
          </button>
        </div>

        <div
          role="tablist"
          aria-label="Manufacturing services"
          aria-orientation="vertical"
          onKeyDown={handleKeyDown}
          className="flex min-w-0 gap-2 overflow-x-auto pb-2 lg:flex-col lg:gap-1 lg:overflow-visible lg:pb-0"
        >
          {SERVICES.map((service) => {
            const selected = service.id === activeId;
            return (
              <button
                key={service.id}
                id={`service-tab-${service.id}`}
                type="button"
                role="tab"
                aria-selected={selected}
                aria-controls={`service-panel-${service.id}`}
                tabIndex={selected ? 0 : -1}
                onClick={() => setActiveId(service.id)}
                className={`whitespace-nowrap rounded-sm px-4 py-3 text-left text-body-sm font-medium transition-colors lg:whitespace-normal ${
                  selected
                    ? "bg-navy text-white"
                    : "text-foreground-secondary hover:bg-background-subtle hover:text-navy"
                }`}
              >
                {service.name}
              </button>
            );
          })}
        </div>
      </div>

      <div
        id={`service-panel-${activeService.id}`}
        role="tabpanel"
        aria-labelledby={`service-tab-${activeService.id}`}
        tabIndex={0}
      >
        <div className="grid items-start gap-8 md:grid-cols-2 md:gap-10">
          <div>
            <p className="text-label font-semibold uppercase tracking-wide text-yale">
              {activeService.eyebrow}
            </p>
            <h3 className="mt-2 text-h3 font-bold text-navy">{activeService.name}</h3>
            <p className="mt-3 text-body text-foreground-secondary">
              {activeService.description}
            </p>
            <ul className="mt-5 space-y-2.5">
              {activeService.benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-2 text-body-sm text-foreground-secondary">
                  <CheckCircle2 aria-hidden="true" size={16} className="mt-0.5 shrink-0 text-seaweed" />
                  {benefit}
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Button href="/contact" size="sm">
                Request a Quote
              </Button>
            </div>
          </div>

          {/* TODO: COONEX SERVICE IMAGE — replace with real manufacturing photography */}
          <div className="flex aspect-[4/3] w-full flex-col items-center justify-center gap-2 rounded-md border border-dashed border-border bg-background-subtle text-foreground-muted">
            <ImageOff aria-hidden="true" size={28} />
            <span className="text-caption">TODO: COONEX SERVICE IMAGE</span>
          </div>
        </div>
      </div>
    </div>
  );
}
