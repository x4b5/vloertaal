import type { JSX } from 'react';
import { Ground, PAL, Shade, Shine } from '../kit';

/** A cast-iron weight: a wide trapezoid with a ring handle on top; bottom middle at (x, y), size s. */
const weight = (x: number, y: number, s: number) => (
  <g transform={`translate(${x} ${y}) scale(${s})`}>
    <path d="M-12 -52A12 12 0 1 1 12 -52" fill="none" stroke={PAL.slateDark} strokeWidth="8" strokeLinecap="round" />
    <Shade color={PAL.slateDark} opacity={1} at={[34, -26, 12, 34]}>
      <path d="M-26 -50H26Q32 -50 33 -44L40 -6Q41 0 35 0H-35Q-41 0 -40 -6L-33 -44Q-32 -50 -26 -50Z" fill={PAL.slate} />
    </Shade>
    <Shine d="M-26 -42L-31 -12" width={3.5} opacity={0.4} />
  </g>
);

export default {
  // "het gewicht": the weight — a big dark cast-iron weight with its ring handle on top: the classic shape
  // for "how heavy".
  'w.gewicht': () => (
    <g strokeLinejoin="round">
      <Ground cx={60} cy={104} rx={44} ry={4} />
      {weight(60, 104, 1.1)}
    </g>
  ),
} as Record<string, () => JSX.Element>;
