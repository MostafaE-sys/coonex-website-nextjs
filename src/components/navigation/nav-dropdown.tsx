"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import type { NavLinkItem } from "@/lib/nav-items";
import { ICON_SIZE } from "@/lib/icon-size";

interface NavDropdownProps {
  label: string;
  items: NavLinkItem[];
  open: boolean;
  onToggle: () => void;
  onClose: () => void;
  triggerClassName: string;
}

export function NavDropdown({
  label,
  items,
  open,
  onToggle,
  onClose,
  triggerClassName,
}: NavDropdownProps) {
  const panelId = `${label.toLowerCase().replace(/\s+/g, "-")}-menu-panel`;

  return (
    <div className="relative">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={onToggle}
        className={`flex items-center gap-1 ${triggerClassName} ${open ? "text-navy" : ""}`}
      >
        {label}
        <ChevronDown
          aria-hidden="true"
          size={ICON_SIZE.xs}
          className={`transition-transform duration-150 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div
          id={panelId}
          className="absolute left-0 top-full z-50 mt-2 w-56 rounded-md border border-border bg-white p-2 shadow-elevated"
        >
          <ul>
            {items.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="block rounded-sm px-3 py-2 text-body-sm text-foreground-secondary transition-colors hover:bg-background-subtle hover:text-navy"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
