import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ButtonHTMLAttributes, ReactNode } from "react";
import { ICON_SIZE } from "@/lib/icon-size";

type ButtonVariant = "primary" | "secondary" | "dark";
type ButtonSize = "md" | "sm";

const BASE =
  "group inline-flex items-center justify-center gap-2 rounded-sm font-semibold transition-[color,background-color,border-color,transform,box-shadow] duration-150 ease-out hover:-translate-y-px active:translate-y-0 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0 disabled:active:scale-100 motion-reduce:transition-colors motion-reduce:hover:translate-y-0 motion-reduce:active:scale-100";

// Buttons read at 14-15px/weight 600 regardless of size — only height and
// padding change, so a compact "sm" CTA (header) never looks like a
// different typographic voice from the full-size "md" one.
const SIZE: Record<ButtonSize, string> = {
  md: "h-12 px-6 text-body-sm",
  sm: "h-11 px-5 text-body-sm",
};

const VARIANT: Record<ButtonVariant, string> = {
  // Primary CTA — Golden Orange background, Oxford Navy text, per brand spec.
  primary:
    "bg-orange text-navy shadow-subtle hover:bg-orange-hover hover:shadow-card active:bg-orange-hover disabled:hover:bg-orange disabled:hover:shadow-subtle",
  // Secondary — outlined, sits on white/light surfaces.
  secondary:
    "border border-navy text-navy bg-transparent hover:bg-background-subtle active:bg-border-subtle",
  // Dark-surface — for use on Oxford Navy backgrounds, keeps strong contrast.
  dark: "border border-white/40 text-white bg-transparent hover:bg-white/10 active:bg-white/15",
};

interface CommonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  className?: string;
  loading?: boolean;
  /** Trailing arrow that shifts on hover — for the "Talk to Coonex" CTA pattern. Never larger than the label text. */
  withArrow?: boolean;
}

interface ButtonAsButton
  extends CommonProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> {
  href?: undefined;
}

interface ButtonAsLink extends CommonProps {
  href: string;
  external?: boolean;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

function Spinner() {
  return (
    <span
      aria-hidden="true"
      className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"
    />
  );
}

function Arrow() {
  return (
    <ArrowUpRight
      aria-hidden="true"
      size={ICON_SIZE.sm}
      className="shrink-0 transition-transform duration-150 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0 motion-reduce:group-hover:translate-y-0"
    />
  );
}

export function Button(props: ButtonProps) {
  const {
    variant = "primary",
    size = "md",
    children,
    className = "",
    loading = false,
    withArrow = false,
    ...rest
  } = props;

  const classes = `${BASE} ${SIZE[size]} ${VARIANT[variant]} ${className}`;

  if ("href" in props && props.href) {
    const { href, external } = props;
    if (external) {
      return (
        <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
          {children}
          {withArrow && <Arrow />}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
        {withArrow && <Arrow />}
      </Link>
    );
  }

  // `rest` here only ever carries native <button> attributes: the ButtonAsLink
  // fields (href/external) were excluded by the branch above, so this spread
  // never leaks non-DOM props like `loading` onto the native element.
  const nativeButtonProps = rest as Omit<
    ButtonAsButton,
    "variant" | "size" | "children" | "className" | "loading" | "withArrow"
  >;
  return (
    <button
      {...nativeButtonProps}
      disabled={nativeButtonProps.disabled || loading}
      aria-busy={loading || undefined}
      className={classes}
    >
      {loading && <Spinner />}
      {children}
      {withArrow && !loading && <Arrow />}
    </button>
  );
}
