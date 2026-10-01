import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { ICON_SIZE } from "@/lib/icon-size";

interface TextLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  /** Shows a trailing arrow that shifts on hover — for "Explore X" style links. */
  withArrow?: boolean;
}

/**
 * The one shared micro-interaction for inline text links across the pilot
 * sections: underline expands from the left, arrow (if present) shifts
 * right. CSS-only — no motion library needed for a hover/focus state.
 */
export function TextLink({ href, children, className = "", withArrow = false }: TextLinkProps) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-1.5 text-body-sm font-semibold text-yale transition-colors duration-150 hover:text-navy ${className}`}
    >
      <span className="relative">
        {children}
        <span
          aria-hidden="true"
          className="absolute inset-x-0 -bottom-0.5 h-px scale-x-0 bg-current transition-transform duration-150 ease-out group-hover:scale-x-100 motion-reduce:transition-none"
          style={{ transformOrigin: "left" }}
        />
      </span>
      {withArrow && (
        <ArrowRight
          aria-hidden="true"
          size={ICON_SIZE.sm}
          className="shrink-0 transition-transform duration-150 ease-out group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
        />
      )}
    </Link>
  );
}
