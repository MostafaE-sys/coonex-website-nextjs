"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MOTION_DURATION, MOTION_EASE } from "@/lib/motion";

interface SystemNode {
  key: string;
  label: string;
  top: number;
  left: number;
  align: "left" | "right";
}

// Four business layers becoming one connected system — the same idea the
// Hero copy states in words, shown as a structured relationship instead of
// a decorative network. Coordinates are percentages, shared between the
// SVG connector lines and the HTML labels positioned over them.
const NODES: SystemNode[] = [
  { key: "growth", label: "Growth", top: 10, left: 6, align: "left" },
  { key: "technology", label: "Technology", top: 10, left: 94, align: "right" },
  { key: "data", label: "Data", top: 84, left: 6, align: "left" },
  { key: "ai", label: "AI", top: 84, left: 94, align: "right" },
];

const CENTER = { top: 47, left: 50 };
const NODE_STAGGER = 0.11;
const LINES_START = NODES.length * NODE_STAGGER + 0.15;
const CENTER_START = LINES_START + MOTION_DURATION.slow + 0.15;

export function HeroSystemDiagram({ className = "" }: { className?: string }) {
  const reducedMotion = useReducedMotion();
  const d = (value: number) => (reducedMotion ? 0 : value);

  return (
    <div className={`relative aspect-square w-full max-w-[380px] ${className}`}>
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full"
      >
        {NODES.map((node, index) => (
          <motion.line
            key={node.key}
            x1={node.left}
            y1={node.top}
            x2={CENTER.left}
            y2={CENTER.top}
            className="stroke-yale/40"
            strokeWidth="0.6"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              duration: d(MOTION_DURATION.slow),
              ease: MOTION_EASE,
              delay: d(LINES_START + index * 0.06),
            }}
          />
        ))}
        <motion.circle
          cx={CENTER.left}
          cy={CENTER.top}
          r="1.8"
          className="fill-seaweed"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: d(MOTION_DURATION.medium), ease: MOTION_EASE, delay: d(CENTER_START) }}
          style={{ transformBox: "fill-box", transformOrigin: "center" }}
        />
      </svg>

      {NODES.map((node, index) => (
        <motion.span
          key={node.key}
          style={
            node.align === "right"
              ? { top: `${node.top}%`, right: `${100 - node.left}%` }
              : { top: `${node.top}%`, left: `${node.left}%` }
          }
          className="absolute whitespace-nowrap text-body font-semibold text-navy"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: d(MOTION_DURATION.medium), ease: MOTION_EASE, delay: d(index * NODE_STAGGER) }}
        >
          {node.label}
        </motion.span>
      ))}

      <motion.span
        style={{ top: `${CENTER.top + 8}%`, left: `${CENTER.left}%`, transform: "translateX(-50%)" }}
        className="absolute whitespace-nowrap text-caption font-semibold uppercase tracking-wide text-seaweed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: d(MOTION_DURATION.medium), ease: MOTION_EASE, delay: d(CENTER_START + 0.1) }}
      >
        Connected
      </motion.span>
    </div>
  );
}

const MOBILE_LABELS = ["Growth", "Technology", "Data", "AI"];

/** Mobile recomposition: the same four elements resolve vertically instead of shrinking the desktop grid. */
export function HeroSystemDiagramMobile({ className = "" }: { className?: string }) {
  const reducedMotion = useReducedMotion();
  const d = (value: number) => (reducedMotion ? 0 : value);

  return (
    <div className={`flex flex-col items-center ${className}`}>
      {MOBILE_LABELS.map((label, index) => (
        <div key={label} className="flex flex-col items-center">
          {index > 0 && (
            <motion.span
              aria-hidden="true"
              className="h-5 w-px origin-top bg-yale/30"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: d(0.3), ease: MOTION_EASE, delay: d(index * NODE_STAGGER) }}
            />
          )}
          <motion.span
            className="mt-2 text-body font-semibold text-navy"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: d(MOTION_DURATION.medium), ease: MOTION_EASE, delay: d(index * NODE_STAGGER) }}
          >
            {label}
          </motion.span>
        </div>
      ))}
      <motion.span
        aria-hidden="true"
        className="mt-2 h-5 w-px origin-top bg-yale/30"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: d(0.3), ease: MOTION_EASE, delay: d(MOBILE_LABELS.length * NODE_STAGGER) }}
      />
      <motion.span
        className="mt-2 h-3 w-3 rounded-full bg-seaweed"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: d(MOTION_DURATION.medium), ease: MOTION_EASE, delay: d(MOBILE_LABELS.length * NODE_STAGGER + 0.2) }}
      />
      <motion.span
        className="mt-2 text-caption font-semibold uppercase tracking-wide text-seaweed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: d(MOTION_DURATION.medium), ease: MOTION_EASE, delay: d(MOBILE_LABELS.length * NODE_STAGGER + 0.3) }}
      >
        Connected
      </motion.span>
    </div>
  );
}
