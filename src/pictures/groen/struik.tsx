import type { JSX } from 'react';
import { Ground, PAL, Shade, Shine } from '../kit';

export default {
  // "de struik": the bush — a low, wide, round green shrub of several leafy clumps, a few short brown
  // stems under it, standing on the ground.
  'w.struik': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      <Ground cx={60} cy={102} rx={46} ry={5} />
      {/* The short stems */}
      <path d="M50 100L46 82M60 100V80M70 100L76 82" stroke={PAL.cardDark} strokeWidth="5" />
      {/* The leafy clumps: back ones dark, front ones light */}
      <g fill={PAL.greenShade}>
        <circle cx="38" cy="48" r="20" />
        <circle cx="64" cy="38" r="24" />
        <circle cx="88" cy="52" r="18" />
      </g>
      <Shade color={PAL.greenShade} opacity={1} at={[112, 76, 22, 34]}>
        <g fill={PAL.green}>
          <circle cx="26" cy="72" r="16" />
          <circle cx="44" cy="62" r="20" />
          <circle cx="68" cy="58" r="22" />
          <circle cx="92" cy="72" r="17" />
          <rect x="18" y="66" width="86" height="22" rx="11" />
        </g>
      </Shade>
      {/* Leaf marks */}
      <path d="M34 66Q38 62 42 66M58 52Q62 48 66 52M80 64Q84 60 88 64M48 80Q52 76 56 80M70 78Q74 74 78 78" fill="none" stroke={PAL.greenShade} strokeWidth="2" />
      <Shine d="M30 60Q34 50 44 46" color={PAL.lime} width={3.5} opacity={0.7} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
