"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { SolutionsMegaMenu } from "@/components/navigation/solutions-mega-menu";
import { NavDropdown } from "@/components/navigation/nav-dropdown";
import { PRODUCTS_NAV, INDUSTRIES_NAV, PLAIN_NAV_LINKS } from "@/lib/nav-items";

const NAV_ITEM_CLASS =
  "block rounded-sm px-3 py-2.5 text-body-sm font-medium leading-snug text-foreground-secondary transition-colors hover:bg-background-subtle hover:text-navy";

export function DesktopNav() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!openMenu) return;

    function handlePointerDown(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenMenu(null);
      }
    }
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpenMenu(null);
    }

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [openMenu]);

  function toggle(id: string) {
    setOpenMenu((current) => (current === id ? null : id));
  }

  return (
    <nav aria-label="Primary" ref={navRef} className="hidden lg:block">
      <ul className="flex items-center gap-1.5">
        <li>
          <SolutionsMegaMenu
            open={openMenu === "solutions"}
            onToggle={() => toggle("solutions")}
            onClose={() => setOpenMenu(null)}
            triggerClassName={NAV_ITEM_CLASS}
          />
        </li>
        <li>
          <NavDropdown
            label="Products"
            items={PRODUCTS_NAV}
            open={openMenu === "products"}
            onToggle={() => toggle("products")}
            onClose={() => setOpenMenu(null)}
            triggerClassName={NAV_ITEM_CLASS}
          />
        </li>
        <li>
          <NavDropdown
            label="Industries"
            items={INDUSTRIES_NAV}
            open={openMenu === "industries"}
            onToggle={() => toggle("industries")}
            onClose={() => setOpenMenu(null)}
            triggerClassName={NAV_ITEM_CLASS}
          />
        </li>
        {PLAIN_NAV_LINKS.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className={NAV_ITEM_CLASS}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
