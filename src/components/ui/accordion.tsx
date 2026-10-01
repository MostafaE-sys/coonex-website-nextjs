"use client";

import { useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";

interface AccordionProps {
  label: string;
  children: ReactNode;
  triggerClassName?: string;
  wrapperClassName?: string;
}

const DEFAULT_TRIGGER_CLASS =
  "flex w-full items-center justify-between py-4 text-body-lg font-medium text-foreground";
const DEFAULT_WRAPPER_CLASS = "border-b border-border-subtle";

export function Accordion({ label, children, triggerClassName, wrapperClassName }: AccordionProps) {
  const [open, setOpen] = useState(false);
  return (
    <div className={wrapperClassName ?? DEFAULT_WRAPPER_CLASS}>
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className={triggerClassName ?? DEFAULT_TRIGGER_CLASS}
      >
        {label}
        <ChevronDown
          aria-hidden="true"
          size={18}
          className={`transition-transform duration-150 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && <div className="pb-4">{children}</div>}
    </div>
  );
}
