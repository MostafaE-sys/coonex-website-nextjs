"use client";

import { AnimatePresence, motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { ChevronRight } from "lucide-react";
import { STAGE_LABELS, type EcosystemStage } from "@/lib/ecosystem-data";
import { MOTION_DURATION, MOTION_EASE } from "@/lib/motion";
import { ICON_SIZE } from "@/lib/icon-size";

interface EcosystemFlowProps {
  stages: EcosystemStage[];
  flowKey: string;
}

// Challenge/outcome stages carry a phrase and deserve more width; the rest
// are short labels. This is what creates the varied-width layout instead of
// five identical equal-size boxes.
const PHRASE_TYPES = new Set(["challenge", "outcome"]);

function StageContent({ stage, isOutcome }: { stage: EcosystemStage; isOutcome: boolean }) {
  const isPhrase = PHRASE_TYPES.has(stage.type);
  return (
    <div className="min-w-0">
      <p className="text-caption font-semibold uppercase tracking-wide text-white/60">
        {STAGE_LABELS[stage.type]}
      </p>
      <p
        className={
          isPhrase
            ? `mt-1.5 text-body ${isOutcome ? "font-semibold text-white" : "text-white/90"}`
            : "mt-1.5 text-body font-semibold text-white"
        }
      >
        {stage.type === "product" && (
          <span
            aria-hidden="true"
            className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-seaweed align-middle"
          />
        )}
        {stage.value}
      </p>
      {/* The outcome is the resolved state the whole flow builds toward — a
          small accent rule marks it instead of another identical stage box. */}
      {isOutcome && <span aria-hidden="true" className="mt-2 block h-0.5 w-8 rounded-full bg-orange" />}
    </div>
  );
}

export function EcosystemFlow({ stages, flowKey }: EcosystemFlowProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  // `once: true` latches to `true` forever after the first real viewport
  // entry, so this alone distinguishes "first reveal" (staged, per-stage)
  // from every later industry switch (no re-trigger on scroll).
  const hasEnteredOnce = useInView(containerRef, { once: true, margin: "-80px" });
  const reducedMotion = useReducedMotion();

  const d = (value: number) => (reducedMotion ? 0 : value);

  return (
    <div ref={containerRef}>
      {/* AnimatePresence's own `initial={false}` means the flow present on
          first mount never plays this wrapper's fade — only a later switch
          (a new `flowKey` from changing industry) exits the old flow and
          fades in the new one. The staged stage-by-stage reveal below is
          driven separately by real viewport entry, once. */}
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={flowKey}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: d(MOTION_DURATION.fast + 0.05), ease: MOTION_EASE }}
        >
          {/* Desktop/tablet: horizontal flow, stage widths vary by content type */}
          <ol className="relative hidden items-start gap-4 lg:flex">
            <span aria-hidden="true" className="absolute left-0 right-0 top-[11px] h-px bg-white/15" />
            {stages.map((stage, index) => {
              const isOutcome = index === stages.length - 1;
              return (
                <motion.li
                  key={`${stage.type}-${index}`}
                  className={`relative flex items-start gap-4 ${
                    PHRASE_TYPES.has(stage.type) ? "flex-[1.4]" : "flex-1"
                  }`}
                  initial={hasEnteredOnce ? false : { opacity: 0, y: 10 }}
                  animate={{ opacity: hasEnteredOnce ? 1 : 0, y: hasEnteredOnce ? 0 : 10 }}
                  transition={{
                    duration: d(MOTION_DURATION.medium),
                    ease: MOTION_EASE,
                    delay: hasEnteredOnce ? 0 : d(index * 0.18),
                  }}
                >
                  <span
                    aria-hidden="true"
                    className={`mt-1 h-3.5 w-3.5 shrink-0 rounded-full border-2 bg-navy ${
                      isOutcome ? "border-orange" : "border-white/40"
                    }`}
                  />
                  <StageContent stage={stage} isOutcome={isOutcome} />
                  {index < stages.length - 1 && (
                    <ChevronRight aria-hidden="true" size={ICON_SIZE.sm} className="mt-1 shrink-0 text-white/40" />
                  )}
                </motion.li>
              );
            })}
          </ol>

          {/* Mobile/narrow tablet: vertical flow with a connecting line */}
          <ol className="flex flex-col lg:hidden">
            {stages.map((stage, index) => {
              const isOutcome = index === stages.length - 1;
              return (
                <li key={`${stage.type}-${index}`} className="flex flex-col items-start">
                  {index > 0 && <span aria-hidden="true" className="mt-2 h-5 w-px bg-white/40" />}
                  <div className={index > 0 ? "mt-2" : ""}>
                    <StageContent stage={stage} isOutcome={isOutcome} />
                  </div>
                </li>
              );
            })}
          </ol>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
