"use client";

import { useState, type KeyboardEvent } from "react";
import { INDUSTRIES } from "@/lib/industries-data";
import { Journey } from "@/components/ui/journey";
import { TextLink } from "@/components/ui/text-link";

export function IndustriesExplorer() {
  const [activeId, setActiveId] = useState(INDUSTRIES[0].id);
  const active = INDUSTRIES.find((industry) => industry.id === activeId) ?? INDUSTRIES[0];

  function focusTab(id: string) {
    setActiveId(id);
    // All industry tab buttons are always mounted (only styling changes with
    // selection), so the target already exists — focus it synchronously
    // rather than deferring to requestAnimationFrame, which browsers can
    // throttle or pause entirely on a backgrounded tab.
    document.getElementById(`industry-tab-${id}`)?.focus();
  }

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    const index = INDUSTRIES.findIndex((industry) => industry.id === activeId);
    if (index === -1) return;

    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      event.preventDefault();
      focusTab(INDUSTRIES[(index + 1) % INDUSTRIES.length].id);
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      event.preventDefault();
      focusTab(INDUSTRIES[(index - 1 + INDUSTRIES.length) % INDUSTRIES.length].id);
    } else if (event.key === "Home") {
      event.preventDefault();
      focusTab(INDUSTRIES[0].id);
    } else if (event.key === "End") {
      event.preventDefault();
      focusTab(INDUSTRIES[INDUSTRIES.length - 1].id);
    }
  }

  return (
    <div>
      <div
        role="tablist"
        aria-label="Industries"
        onKeyDown={handleKeyDown}
        className="flex flex-wrap gap-x-6 gap-y-2 border-b border-border-subtle"
      >
        {INDUSTRIES.map((industry) => {
          const selected = industry.id === activeId;
          return (
            <button
              key={industry.id}
              id={`industry-tab-${industry.id}`}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-controls={`industry-panel-${industry.id}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActiveId(industry.id)}
              className={`pb-3 text-body font-semibold transition-colors ${
                selected
                  ? "border-b-2 border-yale text-navy"
                  : "border-b-2 border-transparent text-foreground-muted hover:text-navy"
              }`}
            >
              {industry.name}
            </button>
          );
        })}
      </div>

      <div
        id={`industry-panel-${active.id}`}
        role="tabpanel"
        aria-labelledby={`industry-tab-${active.id}`}
        tabIndex={0}
        className="mt-10"
      >
        <p className="max-w-xl text-body-lg text-foreground-secondary">{active.message}</p>
        <div className="mt-8">
          <Journey steps={active.journey} />
        </div>
        <TextLink href={active.href} withArrow className="mt-8">
          {active.ctaLabel}
        </TextLink>
      </div>
    </div>
  );
}
