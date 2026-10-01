import { ReactNode } from "react";

type ContainerWidth = "page" | "narrow" | "wide";

const WIDTH_VAR: Record<ContainerWidth, string> = {
  page: "var(--container-page)",
  narrow: "var(--container-narrow)",
  wide: "var(--container-wide)",
};

interface ContainerProps {
  children: ReactNode;
  width?: ContainerWidth;
  className?: string;
  as?: "div" | "section" | "header" | "footer";
}

/**
 * The single source of truth for horizontal page gutters and content width.
 * Every section aligns through this component instead of inventing its own max-width.
 */
export function Container({
  children,
  width = "page",
  className = "",
  as: Tag = "div",
}: ContainerProps) {
  return (
    <Tag
      className={`mx-auto w-full px-4 sm:px-6 lg:px-8 ${className}`}
      style={{ maxWidth: WIDTH_VAR[width] }}
    >
      {children}
    </Tag>
  );
}
