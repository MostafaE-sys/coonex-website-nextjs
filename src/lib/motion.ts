// Shared motion tokens for the homepage visual-enrichment pilot.
// Three restrained categories, matched to what each interaction needs —
// never arbitrary per-component durations.
export const MOTION_DURATION = {
  /** Micro-interactions: hover, press, underline, arrow shift. */
  fast: 0.18,
  /** Content reveal: a section or node fading/lifting into place. */
  medium: 0.5,
  /** Diagram / story progression: staged multi-step sequences. */
  slow: 0.9,
} as const;

// A restrained "settle" curve — decelerates without overshoot, so diagrams
// come to rest instead of bouncing. Used for every reveal/line-draw.
export const MOTION_EASE = [0.16, 1, 0.3, 1] as const;

export const REVEAL_DISTANCE = 16;
