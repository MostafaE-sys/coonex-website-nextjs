"use client";

import { useState, type KeyboardEvent } from "react";
import { Container } from "@/components/ui/container";
import { Journey } from "@/components/ui/journey";
import type { SolutionWorkflowExample } from "@/lib/solution-page-types";

interface SolutionWorkflowProps {
  heading: string;
  intro?: string;
  examples: SolutionWorkflowExample[];
}

/**
 * A selector over parallel, documented concept workflows. Deliberately no
 * animation beyond an instant content swap — a selector + Journey display,
 * not a chat demo or automation builder. Follows the same accessible
 * tablist pattern already used by IndustriesExplorer / SolutionsExplorer.
 */
export function SolutionWorkflow({ heading, intro, examples }: SolutionWorkflowProps) {
  const [activeId, setActiveId] = useState(examples[0].id);
  const active = examples.find((example) => example.id === activeId) ?? examples[0];

  function focusTab(id: string) {
    setActiveId(id);
    document.getElementById(`workflow-tab-${id}`)?.focus();
  }

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    const index = examples.findIndex((example) => example.id === activeId);
    if (index === -1) return;

    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      event.preventDefault();
      focusTab(examples[(index + 1) % examples.length].id);
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      event.preventDefault();
      focusTab(examples[(index - 1 + examples.length) % examples.length].id);
    } else if (event.key === "Home") {
      event.preventDefault();
      focusTab(examples[0].id);
    } else if (event.key === "End") {
      event.preventDefault();
      focusTab(examples[examples.length - 1].id);
    }
  }

  return (
    <section className="bg-white py-14 lg:py-20">
      <Container>
        <div className="max-w-2xl">
          <h2 className="text-h2 font-bold text-navy">{heading}</h2>
          {intro && <p className="mt-3 text-body-lg text-foreground-secondary">{intro}</p>}
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,280px)_1fr]">
          <div
            role="tablist"
            aria-label="Workflow examples"
            aria-orientation="vertical"
            onKeyDown={handleKeyDown}
            className="flex flex-row flex-wrap gap-2 lg:flex-col lg:gap-1"
          >
            {examples.map((example) => {
              const selected = example.id === activeId;
              return (
                <button
                  key={example.id}
                  id={`workflow-tab-${example.id}`}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  aria-controls={`workflow-panel-${example.id}`}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActiveId(example.id)}
                  className={`rounded-sm px-4 py-3 text-left text-body-sm font-semibold transition-colors ${
                    selected
                      ? "bg-background-subtle text-navy border-l-2 border-yale"
                      : "text-foreground-muted border-l-2 border-transparent hover:text-navy"
                  }`}
                >
                  {example.label}
                </button>
              );
            })}
          </div>

          <div
            id={`workflow-panel-${active.id}`}
            role="tabpanel"
            aria-labelledby={`workflow-tab-${active.id}`}
            tabIndex={0}
            className="rounded-md bg-background-subtle p-6 lg:p-8"
          >
            <h3 className="text-body-sm font-semibold uppercase tracking-wide text-yale">
              {active.label}
            </h3>
            <div className="mt-6">
              <Journey steps={active.steps} />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
