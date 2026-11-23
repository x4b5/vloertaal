import type { JSX } from 'react';
import { PAL, Shine, Sparkle } from '../kit';

/** The nappy's outline: a wide waist, the two leg cut-outs, a narrow bottom. */
const NAPPY = 'M16 34Q16 30 20 30H100Q104 30 104 34V54Q86 58 80 74Q76 88 74 98H46Q44 88 40 74Q34 58 16 54Z';

export default {
  // "de luier": the nappy, the diaper — one clean disposable nappy seen from the front, as it is worn:
  // the wide soft waist with its light blue waistband, the two curved leg openings, the sky blue tapes
  // at the sides and a small yellow star printed on it.
  'w.luier': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      {/* The depth edge and the nappy */}
      <path d={NAPPY} fill={PAL.paperShade} stroke={PAL.paperShade} strokeWidth="4" transform="translate(0 4)" />
      <path d={NAPPY} fill={PAL.paper} stroke={PAL.paper} strokeWidth="4" />
      <path d="M78 30H100Q104 30 104 34V54Q88 58 82 70Z" fill={PAL.paperShade} opacity=".8" />
      {/* The waistband */}
      <path d="M16 34Q16 30 20 30H100Q104 30 104 34V40H16Z" fill={PAL.ice} stroke={PAL.ice} strokeWidth="4" />
      {/* The leg cuffs */}
      <path d="M18 56Q34 60 40 74Q44 86 46 96M102 56Q86 60 80 74Q76 86 74 96" fill="none" stroke={PAL.ice} strokeWidth="3" />
      {/* The tapes */}
      <path d="M14 42L4 40Q2 46 4 52L14 50Z" fill={PAL.sky} />
      <path d="M106 42L116 40Q118 46 116 52L106 50Z" fill={PAL.skyShade} />
      {/* The print */}
      <Sparkle x={60} y={56} r={9} color={PAL.yellow} />
      <Shine d="M22 46Q30 48 34 54" width={3} opacity={0.9} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
