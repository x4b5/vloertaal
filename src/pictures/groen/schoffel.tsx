import type { JSX } from 'react';
import { Move, PAL, Shine } from '../kit';

export default {
  // "de schoffel": the hoe — a long wooden handle down to a flat steel blade that lies on the soil and
  // pushes just under it, a small weed in front of the blade.
  // Three rounds on the intro card: the hoe pushes along the soil to the weed.
  'w.schoffel': () => (
    <g strokeLinejoin="round">
      {/* The soil bed */}
      <path d="M6 94Q60 84 114 94V106H6Z" fill={PAL.brown} />
      <path d="M6 94Q60 84 114 94Q60 90 6 98Z" fill={PAL.cardDark} />
      {/* A small weed ahead of the blade */}
      <path d="M18 92V78" stroke={PAL.leafShade} strokeWidth="3" strokeLinecap="round" />
      <path d="M18 84Q8 80 10 72Q18 76 18 84ZM18 82Q28 76 26 68Q18 72 18 82Z" fill={PAL.leaf} />
      <Move kind="from" dx={24} dy={-4}>
        {/* The long handle */}
        <path d="M106 12L62 82" stroke={PAL.cardDark} strokeWidth="8" strokeLinecap="round" />
        <path d="M104 14L62 80" stroke={PAL.wood} strokeWidth="5" strokeLinecap="round" />
        <rect x="98" y="8" width="10" height="9" rx="3" fill={PAL.slate} transform="rotate(32 103 12)" />
        {/* The steel neck down to the blade */}
        <path d="M63 80Q58 90 48 90" fill="none" stroke={PAL.steel} strokeWidth="5" strokeLinecap="round" />
        {/* The flat blade on the soil, its front edge sharp */}
        <path d="M26 96L34 86H66L60 96Z" fill={PAL.mist} />
        <path d="M26 96H60V100H26Z" fill={PAL.steel} />
        <path d="M60 96L66 86V90L60 100Z" fill={PAL.slate} />
        <Shine d="M36 89H58" width={2.4} opacity={0.9} />
      </Move>
    </g>
  ),
} as Record<string, () => JSX.Element>;
