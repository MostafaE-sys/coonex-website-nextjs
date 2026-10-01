"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { SOLUTION_GROUPS } from "@/lib/solutions-data";
import { PRODUCTS_NAV, INDUSTRIES_NAV, PLAIN_NAV_LINKS, type NavLinkItem } from "@/lib/nav-items";
import { Button } from "@/components/ui/button";
import { Accordion } from "@/components/ui/accordion";

const FOCUSABLE_SELECTOR = 'button, a[href], input, [tabindex]:not([tabindex="-1"])';

function MobileSolutionsAccordion({ onNavigate }: { onNavigate: () => void }) {
  return (
    <Accordion label="Solutions">
      <div className="space-y-4 pl-4">
        {SOLUTION_GROUPS.map((group) => (
          <div key={group.id}>
            <p className="text-label font-semibold uppercase tracking-wide text-yale">
              {group.label}
            </p>
            <ul className="mt-2 space-y-2">
              {group.solutions.map((solution) => (
                <li key={solution.id}>
                  <Link
                    href={`/solutions/${solution.id}`}
                    onClick={onNavigate}
                    className="block py-1.5 text-body text-foreground-secondary"
                  >
                    {solution.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Accordion>
  );
}

function MobileSimpleAccordion({
  label,
  items,
  onNavigate,
}: {
  label: string;
  items: NavLinkItem[];
  onNavigate: () => void;
}) {
  return (
    <Accordion label={label}>
      <ul className="space-y-2 pl-4">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              onClick={onNavigate}
              className="block py-1.5 text-body text-foreground-secondary"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </Accordion>
  );
}

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
        return;
      }
      if (event.key === "Tab" && panelRef.current) {
        const focusable = panelRef.current.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR);
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    }

    if (open) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
      closeRef.current?.focus();
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  function close() {
    setOpen(false);
    toggleRef.current?.focus();
  }

  return (
    <div className="lg:hidden">
      <button
        ref={toggleRef}
        type="button"
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((v) => !v)}
        className="flex h-11 w-11 items-center justify-center rounded-sm text-navy transition-colors hover:bg-background-subtle"
      >
        {open ? <X aria-hidden="true" size={22} /> : <Menu aria-hidden="true" size={22} />}
      </button>

      {open && (
        <div
          id="mobile-nav-panel"
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          className="fixed inset-0 z-50 flex flex-col bg-white"
        >
          <div className="flex h-[76px] items-center justify-between border-b border-border px-4">
            <span className="text-h3 font-bold tracking-tight text-navy">Coonex</span>
            <button
              ref={closeRef}
              type="button"
              aria-label="Close menu"
              onClick={close}
              className="flex h-11 w-11 items-center justify-center rounded-sm text-navy transition-colors hover:bg-background-subtle"
            >
              <X aria-hidden="true" size={22} />
            </button>
          </div>

          <nav aria-label="Primary" className="flex flex-1 flex-col overflow-y-auto px-4 py-2">
            <div className="flex flex-col">
              <MobileSolutionsAccordion onNavigate={close} />
              <MobileSimpleAccordion label="Products" items={PRODUCTS_NAV} onNavigate={close} />
              <MobileSimpleAccordion label="Industries" items={INDUSTRIES_NAV} onNavigate={close} />
              {PLAIN_NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={close}
                  className="border-b border-border-subtle py-4 text-body-lg font-medium text-foreground"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <Button href="/contact" className="mt-6 w-full" withArrow>
              Talk to Coonex
            </Button>
          </nav>
        </div>
      )}
    </div>
  );
}
