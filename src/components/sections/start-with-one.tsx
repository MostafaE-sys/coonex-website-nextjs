"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/visuals/reveal";
import { MOTION_DURATION, MOTION_EASE } from "@/lib/motion";

const ENTRY_POINTS = [
  { label: "Growth", left: 16 },
  { label: "Connection", left: 50 },
  { label: "Technology", left: 84 },
];

const TRUNK_START = 20;
const TRUNK_SPLIT = 52;
const BRANCH_END = 86;

export function StartWithOne() {
  const reducedMotion = useReducedMotion();
  const d = (value: number) => (reducedMotion ? 0 : value);
  const trunkDuration = d(0.3);
  const branchStart = d(trunkDuration + 0.1);
  const branchDuration = d(MOTION_DURATION.medium);
  const labelStart = d(branchStart + branchDuration - 0.1);

  return (
    <section className="bg-background-subtle py-8 lg:py-10">
      <Container width="narrow" className="text-center">
        <Reveal>
          <h2 className="text-h2 font-bold text-navy">Start with one. Connect more.</h2>
          <p className="mt-3 text-body-lg text-foreground-secondary">
            You don&apos;t need to solve everything at once. Start with the
            problem that matters most now, then connect more Coonex
            capabilities as your business grows.
          </p>
        </Reveal>

        <div className="relative mx-auto mt-10 h-[190px] max-w-md">
          <span className="absolute left-1/2 top-0 -translate-x-1/2 text-body-sm font-semibold uppercase tracking-wide text-foreground-muted">
            Start here
          </span>

          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
            className="absolute inset-0 h-full w-full"
          >
            {/* Trunk: from "Start here" down to the split point */}
            <motion.line
              x1="50"
              y1={TRUNK_START}
              x2="50"
              y2={TRUNK_SPLIT}
              className="stroke-navy/30"
              strokeWidth="0.6"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: trunkDuration, ease: MOTION_EASE }}
            />
            {/* Branches: split point out to each entry point */}
            {ENTRY_POINTS.map((point, index) => (
              <motion.path
                key={point.label}
                d={`M 50 ${TRUNK_SPLIT} L ${point.left} ${BRANCH_END}`}
                className="stroke-navy/30"
                strokeWidth="0.6"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: branchDuration, ease: MOTION_EASE, delay: branchStart + index * 0.08 }}
              />
            ))}
          </svg>

          {ENTRY_POINTS.map((point, index) => (
            <motion.span
              key={point.label}
              style={{ top: `${BRANCH_END}%`, left: `${point.left}%` }}
              className="absolute -translate-x-1/2 text-h4 font-bold text-navy"
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: d(MOTION_DURATION.fast + 0.1), ease: MOTION_EASE, delay: labelStart + index * 0.08 }}
            >
              {point.label}
            </motion.span>
          ))}
        </div>
      </Container>
    </section>
  );
}
