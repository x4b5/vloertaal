import type { JSX } from 'react';
import { PAL, Shine } from '../kit';

/** A diamond (a square on its point) centred on (cx, cy), half its diagonal r. */
const diamond = (cx: number, cy: number, r: number) => `M${cx} ${cy - r}L${cx + r} ${cy}L${cx} ${cy + r}L${cx - r} ${cy}Z`;

export default {
  // "het gevarensymbool": the hazard symbol — one big hazard diamond as on a can of chemicals: a red
  // diamond, white inside, with a black flame on a black base line (the "flammable" pictogram).
  'w.gevarensymbool': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      {/* The depth edge and the red rim */}
      <path d={diamond(60, 62, 48)} fill={PAL.redShade} stroke={PAL.redShade} strokeWidth="8" />
      <path d={diamond(60, 58, 48)} fill={PAL.red} stroke={PAL.red} strokeWidth="8" />
      {/* The white field */}
      <path d={diamond(60, 58, 37)} fill={PAL.white} stroke={PAL.white} strokeWidth="4" />
      <path d="M60 95L97 58L80 58L60 78Z" fill={PAL.paperShade} opacity=".7" />
      {/* The flame on its base line */}
      <path d="M60 32C66 42 76 46 76 60C76 70 69 76 60 76C51 76 44 70 44 60C44 52 50 48 52 42C55 48 56 51 58 52C58 44 58 38 60 32Z" fill={PAL.ink} />
      <path d="M60 58C64 62 66 64 66 68C66 72 63 74 60 74C57 74 54 72 54 68C54 65 57 62 60 58Z" fill={PAL.white} />
      <rect x="40" y="78" width="40" height="5" rx="2" fill={PAL.ink} />
      <Shine d="M24 50L52 22" width={3.6} opacity={0.55} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
