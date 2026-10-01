"use client";

import { useState, type KeyboardEvent } from "react";
import { Container } from "@/components/ui/container";
import { EcosystemFlow } from "@/components/sections/ecosystem-flow";
import { Reveal } from "@/components/visuals/reveal";
import { ECOSYSTEM_EXAMPLES } from "@/lib/ecosystem-data";

export function ConnectedEcosystem() {
  const [activeId, setActiveId] = useState(ECOSYSTEM_EXAMPLES[0].id);
  const active = ECOSYSTEM_EXAMPLES.find((example) => example.id === activeId) ?? ECOSYSTEM_EXAMPLES[0];

  function focusTab(id: string) {
    setActiveId(id);
    // All example buttons are always mounted — focus synchronously.
    document.getElementById(`ecosystem-tab-${id}`)?.focus();
  }

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    const index = ECOSYSTEM_EXAMPLES.findIndex((example) => example.id === activeId);
    if (index === -1) return;

    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      event.preventDefault();
      focusTab(ECOSYSTEM_EXAMPLES[(index + 1) % ECOSYSTEM_EXAMPLES.length].id);
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      event.preventDefault();
      focusTab(ECOSYSTEM_EXAMPLES[(index - 1 + ECOSYSTEM_EXAMPLES.length) % ECOSYSTEM_EXAMPLES.length].id);
    } else if (event.key === "Home") {
      event.preventDefault();
      focusTab(ECOSYSTEM_EXAMPLES[0].id);
    } else if (event.key === "End") {
      event.preventDefault();
      focusTab(ECOSYSTEM_EXAMPLES[ECOSYSTEM_EXAMPLES.length - 1].id);
    }
  }

  return (
    <section className="bg-navy py-20 lg:py-28">
      <Container width="wide">
        <div className="max-w-2xl">
          <Reveal>
            <p className="text-label font-semibold uppercase tracking-wide text-white/60">
              How it comes together
            </p>
            <h2 className="mt-2 text-h2 font-bold text-white">One connected ecosystem.</h2>
            <p className="mt-3 text-body-lg text-white/70">
              Solutions, Products and Industries are not separate categories at
              Coonex. They connect around real business problems, systems and
              outcomes.
            </p>
          </Reveal>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-2">
          <span className="text-body-sm text-white/60">Example:</span>
          <div
            role="tablist"
            aria-label="Ecosystem example industry"
            onKeyDown={handleKeyDown}
            className="flex flex-wrap gap-x-5 gap-y-1"
          >
            {ECOSYSTEM_EXAMPLES.map((example) => {
              const selected = example.id === activeId;
              return (
                <button
                  key={example.id}
                  id={`ecosystem-tab-${example.id}`}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  aria-controls={`ecosystem-panel-${example.id}`}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActiveId(example.id)}
                  className={`px-1 py-2 text-body-sm transition-colors ${
                    selected
                      ? "font-semibold text-white underline underline-offset-4"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  {example.name}
                </button>
              );
            })}
          </div>
        </div>

        <div
          id={`ecosystem-panel-${active.id}`}
          role="tabpanel"
          aria-labelledby={`ecosystem-tab-${active.id}`}
          tabIndex={0}
          className="mt-10 border-t border-white/15 pt-10"
        >
          <EcosystemFlow stages={active.stages} flowKey={active.id} />
        </div>
      </Container>
    </section>
  );
}
