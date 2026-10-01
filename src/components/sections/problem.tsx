"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/visuals/reveal";
import { MOTION_DURATION, MOTION_EASE } from "@/lib/motion";

interface SystemNode {
  label: string;
  tier: 1 | 2 | 3;
  top: number;
  left: number;
}

// Real business systems that typically operate in isolation — not a decorative network.
// Grouped into two loose clusters (left/upper, right/lower) with a stray outlier (AI)
// so the layout itself reads as "fragmented" rather than an evenly-spaced grid.
const SYSTEMS: SystemNode[] = [
  { label: "Marketing", tier: 1, top: 8, left: 4 },
  { label: "Website / App", tier: 2, top: 2, left: 30 },
  { label: "Sales", tier: 2, top: 26, left: 10 },
  { label: "CRM", tier: 1, top: 14, left: 60 },
  { label: "Commerce", tier: 1, top: 4, left: 84 },
  { label: "Channels", tier: 2, top: 30, left: 76 },
  { label: "Customer Data", tier: 1, top: 62, left: 38 },
  { label: "Analytics", tier: 2, top: 68, left: 86 },
  { label: "AI", tier: 3, top: 90, left: 8 },
];

// Incomplete segments: short, unfinished strokes near a handful of nodes —
// implying an attempted connection that never resolves. Never a full mesh.
const BROKEN_LINKS: { x1: number; y1: number; x2: number; y2: number }[] = [
  { x1: 9, y1: 12, x2: 20, y2: 8 },
  { x1: 64, y1: 17, x2: 72, y2: 10 },
  { x1: 15, y1: 28, x2: 24, y2: 34 },
  { x1: 72, y1: 32, x2: 80, y2: 40 },
  { x1: 42, y1: 60, x2: 52, y2: 56 },
];

const TIER_CLASS: Record<SystemNode["tier"], string> = {
  1: "text-h4 font-bold text-navy",
  2: "text-body-lg font-semibold text-foreground-secondary",
  3: "text-body font-medium text-foreground-muted",
};

export function Problem() {
  const reducedMotion = useReducedMotion();
  const d = (value: number) => (reducedMotion ? 0 : value);
  const nodeDelay = (index: number) => d(0.05 * index);
  const linkDelay = d(SYSTEMS.length * 0.05 + 0.1);

  return (
    <section className="bg-white py-8 lg:py-10">
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <h2 className="text-h2 font-bold text-navy">
              Most businesses run on disconnected systems.
            </h2>
            <p className="mt-3 text-body-lg text-foreground-secondary">
              Marketing, CRM, commerce, and data often work in isolation —
              connected only by manual effort, if at all.
            </p>
          </Reveal>
        </div>

        {/* Desktop/tablet: grouped, fragmented field with unfinished connections */}
        <div className="relative mt-12 hidden h-[380px] lg:block">
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
            className="absolute inset-0 h-full w-full"
          >
            {BROKEN_LINKS.map((link, index) => (
              <motion.line
                key={index}
                x1={link.x1}
                y1={link.y1}
                x2={link.x2}
                y2={link.y2}
                className="stroke-border"
                strokeWidth="0.4"
                strokeDasharray="2 2"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: d(MOTION_DURATION.medium), ease: MOTION_EASE, delay: linkDelay + index * 0.05 }}
              />
            ))}
          </svg>
          {SYSTEMS.map((system, index) => (
            <motion.span
              key={system.label}
              style={{ top: `${system.top}%`, left: `${system.left}%` }}
              className={`absolute ${TIER_CLASS[system.tier]}`}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: d(MOTION_DURATION.medium), ease: MOTION_EASE, delay: nodeDelay(index) }}
            >
              {system.label}
            </motion.span>
          ))}
        </div>

        {/* Mobile: same real systems as a loose field of tags, not a scattered SVG field */}
        <div className="mt-8 flex flex-wrap gap-2 lg:hidden">
          {SYSTEMS.map((system) => (
            <span
              key={system.label}
              className="rounded-full border border-border px-3 py-1.5 text-body-sm font-medium text-foreground-secondary"
            >
              {system.label}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
