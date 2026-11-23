import type { JSX } from 'react';
import { PAL, Shine } from '../kit';

/** The bib: a round shape with the neck hole cut out at the top and two ties. */
const BIB = 'M60 46Q50 46 48 34L40 18Q24 18 20 34Q14 52 16 72Q20 104 60 104Q100 104 104 72Q106 52 100 34Q96 18 80 18L72 34Q70 46 60 46Z';

export default {
  // "het slabbetje": the bib — a round red bib for a toddler, lying flat: the neck cut out at the
  // top, two straps with a press stud, and a yellow catch pocket along the bottom.
  'w.slabbetje': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      {/* The depth edge and the bib */}
      <path d={BIB} fill={PAL.redShade} stroke={PAL.redShade} strokeWidth="4" transform="translate(0 4)" />
      <path d={BIB} fill={PAL.red} stroke={PAL.red} strokeWidth="4" />
      <path d="M84 40Q98 50 98 72Q96 96 70 102Q96 92 102 72Q104 54 96 36Z" fill={PAL.redShade} opacity=".6" />
      {/* The press stud on the strap */}
      <circle cx="30" cy="24" r="4" fill={PAL.white} />
      <circle cx="30" cy="24" r="1.8" fill={PAL.paperShade} />
      {/* The catch pocket */}
      <path d="M20 76Q60 70 100 76Q98 100 60 102Q22 100 20 76Z" fill={PAL.yellow} />
      <path d="M20 76Q60 70 100 76" fill="none" stroke={PAL.yellowShade} strokeWidth="3" />
      <path d="M86 78Q98 78 99 80Q96 98 70 101Q92 92 86 78Z" fill={PAL.yellowShade} opacity=".7" />
      <Shine d="M22 50Q24 38 32 36" width={3.6} opacity={0.6} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
