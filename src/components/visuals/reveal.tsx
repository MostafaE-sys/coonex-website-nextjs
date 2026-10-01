"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { MOTION_DURATION, MOTION_EASE, REVEAL_DISTANCE } from "@/lib/motion";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Stagger index — delays this child by `delay * index` seconds within a group. */
  index?: number;
  delay?: number;
  as?: "div" | "li" | "span";
}

/**
 * The one shared scroll-reveal behavior for the pilot sections: opacity + a
 * small translateY, once per element, respecting prefers-reduced-motion.
 * Headings/diagram groups can stagger children by passing an increasing `index`.
 */
export function Reveal({ children, className, index = 0, delay = 0.08, as = "div" }: RevealProps) {
  const reducedMotion = useReducedMotion();
  const Tag = motion[as];

  if (reducedMotion) {
    const StaticTag = as;
    return <StaticTag className={className}>{children}</StaticTag>;
  }

  const variants: Variants = {
    hidden: { opacity: 0, y: REVEAL_DISTANCE },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: MOTION_DURATION.medium,
        ease: MOTION_EASE,
        delay: index * delay,
      },
    },
  };

  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={variants}
    >
      {children}
    </Tag>
  );
}
