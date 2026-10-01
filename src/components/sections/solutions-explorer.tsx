"use client";

import { useState, type KeyboardEvent } from "react";
import { TrendingUp, Link2, Sparkles } from "lucide-react";
import { TextLink } from "@/components/ui/text-link";
import { SOLUTION_GROUPS } from "@/lib/solutions-data";
import { ICON_SIZE } from "@/lib/icon-size";

const GROUP_ICON: Record<string, typeof TrendingUp> = {
  grow: TrendingUp,
  connect: Link2,
  transform: Sparkles,
};

export function SolutionsExplorer() {
  const [activeGroupId, setActiveGroupId] = useState(SOLUTION_GROUPS[0].id);
  const activeGroup = SOLUTION_GROUPS.find((g) => g.id === activeGroupId) ?? SOLUTION_GROUPS[0];
  const [activeSolutionId, setActiveSolutionId] = useState(activeGroup.solutions[0].id);

  const activeSolution =
    activeGroup.solutions.find((s) => s.id === activeSolutionId) ?? activeGroup.solutions[0];

  function selectGroup(groupId: string) {
    const group = SOLUTION_GROUPS.find((g) => g.id === groupId);
    if (!group) return;
    setActiveGroupId(groupId);
    setActiveSolutionId(group.solutions[0].id);
  }

  function focusGroupTab(id: string) {
    selectGroup(id);
    // Group tab buttons are always mounted — focus synchronously rather
    // than via requestAnimationFrame, which can be throttled/paused on a
    // backgrounded tab.
    document.getElementById(`group-tab-${id}`)?.focus();
  }

  function handleGroupKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    const index = SOLUTION_GROUPS.findIndex((g) => g.id === activeGroupId);
    if (index === -1) return;
    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      event.preventDefault();
      focusGroupTab(SOLUTION_GROUPS[(index + 1) % SOLUTION_GROUPS.length].id);
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      event.preventDefault();
      focusGroupTab(SOLUTION_GROUPS[(index - 1 + SOLUTION_GROUPS.length) % SOLUTION_GROUPS.length].id);
    } else if (event.key === "Home") {
      event.preventDefault();
      focusGroupTab(SOLUTION_GROUPS[0].id);
    } else if (event.key === "End") {
      event.preventDefault();
      focusGroupTab(SOLUTION_GROUPS[SOLUTION_GROUPS.length - 1].id);
    }
  }

  function focusSolutionTab(id: string) {
    setActiveSolutionId(id);
    // Solution tab buttons within the active group are always mounted —
    // focus synchronously rather than via requestAnimationFrame.
    document.getElementById(`solution-tab-${id}`)?.focus();
  }

  function handleSolutionKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    const solutions = activeGroup.solutions;
    const index = solutions.findIndex((s) => s.id === activeSolutionId);
    if (index === -1) return;

    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      event.preventDefault();
      focusSolutionTab(solutions[(index + 1) % solutions.length].id);
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      event.preventDefault();
      focusSolutionTab(solutions[(index - 1 + solutions.length) % solutions.length].id);
    } else if (event.key === "Home") {
      event.preventDefault();
      focusSolutionTab(solutions[0].id);
    } else if (event.key === "End") {
      event.preventDefault();
      focusSolutionTab(solutions[solutions.length - 1].id);
    }
  }

  return (
    <div>
      {/* Level 1 — GROW / CONNECT / TRANSFORM */}
      <div
        role="tablist"
        aria-label="Solution groups"
        onKeyDown={handleGroupKeyDown}
        className="flex gap-2 border-b border-border-subtle"
      >
        {SOLUTION_GROUPS.map((group) => {
          const selected = group.id === activeGroupId;
          const GroupIcon = GROUP_ICON[group.id];
          return (
            <button
              key={group.id}
              id={`group-tab-${group.id}`}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-controls={`group-panel-${group.id}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => selectGroup(group.id)}
              className={`flex items-center gap-1.5 px-4 py-3 text-label font-semibold uppercase tracking-wide transition-colors ${
                selected
                  ? "border-b-2 border-navy text-navy"
                  : "border-b-2 border-transparent text-foreground-muted hover:text-navy"
              }`}
            >
              {GroupIcon && <GroupIcon aria-hidden="true" size={ICON_SIZE.xs} />}
              {group.label}
            </button>
          );
        })}
      </div>

      {/* Level 2 — solutions within the selected group, plus content panel */}
      <div
        id={`group-panel-${activeGroup.id}`}
        role="tabpanel"
        aria-labelledby={`group-tab-${activeGroup.id}`}
        className="mt-8 grid gap-8 lg:grid-cols-[280px_1fr] lg:gap-12"
      >
        <div
          role="tablist"
          aria-label={`${activeGroup.label} solutions`}
          aria-orientation="vertical"
          onKeyDown={handleSolutionKeyDown}
          className="flex min-w-0 gap-2 overflow-x-auto pb-2 lg:flex-col lg:gap-1 lg:overflow-visible lg:pb-0"
        >
          {activeGroup.solutions.map((solution) => {
            const selected = solution.id === activeSolutionId;
            return (
              <button
                key={solution.id}
                id={`solution-tab-${solution.id}`}
                type="button"
                role="tab"
                aria-selected={selected}
                aria-controls={`solution-panel-${solution.id}`}
                tabIndex={selected ? 0 : -1}
                onClick={() => setActiveSolutionId(solution.id)}
                className={`whitespace-nowrap rounded-sm px-4 py-3 text-left text-body font-semibold transition-colors lg:whitespace-normal ${
                  selected
                    ? "bg-navy text-white"
                    : "text-foreground-secondary hover:bg-background-subtle hover:text-navy"
                }`}
              >
                {solution.name}
              </button>
            );
          })}
        </div>

        <div
          id={`solution-panel-${activeSolution.id}`}
          role="tabpanel"
          aria-labelledby={`solution-tab-${activeSolution.id}`}
          tabIndex={0}
          className="max-w-xl"
        >
          <p className="text-label font-semibold uppercase tracking-wide text-yale">
            {activeGroup.label}
          </p>
          <h3 className="mt-2 text-h3 font-bold text-navy">{activeSolution.name}</h3>
          <p className="mt-3 text-body text-foreground-secondary">{activeSolution.message}</p>
          <TextLink href={`/solutions/${activeSolution.id}`} withArrow className="mt-5">
            Explore {activeSolution.name}
          </TextLink>
        </div>
      </div>
    </div>
  );
}
