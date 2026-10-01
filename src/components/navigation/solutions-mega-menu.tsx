"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { SOLUTION_GROUPS } from "@/lib/solutions-data";
import { ICON_SIZE } from "@/lib/icon-size";

interface SolutionsMegaMenuProps {
  open: boolean;
  onToggle: () => void;
  onClose: () => void;
  triggerClassName: string;
}

export function SolutionsMegaMenu({
  open,
  onToggle,
  onClose,
  triggerClassName,
}: SolutionsMegaMenuProps) {
  return (
    <div className="relative">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="solutions-menu-panel"
        onClick={onToggle}
        className={`flex items-center gap-1 ${triggerClassName} ${open ? "text-navy" : ""}`}
      >
        Solutions
        <ChevronDown
          aria-hidden="true"
          size={ICON_SIZE.xs}
          className={`transition-transform duration-150 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div
          id="solutions-menu-panel"
          className="absolute left-0 top-full z-50 mt-2 w-[640px] rounded-md border border-border bg-white p-6 shadow-elevated"
        >
          <div className="grid grid-cols-3 gap-8">
            {SOLUTION_GROUPS.map((group) => (
              <div key={group.id}>
                <p className="text-label font-semibold uppercase tracking-wide text-yale">
                  {group.label}
                </p>
                <ul className="mt-3 space-y-2.5">
                  {group.solutions.map((solution) => (
                    <li key={solution.id}>
                      <Link
                        href={`/solutions/${solution.id}`}
                        onClick={onClose}
                        className="text-body-sm text-foreground-secondary transition-colors hover:text-navy"
                      >
                        {solution.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
