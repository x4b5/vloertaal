import type { JSX } from 'react';
import { Ground, PAL, Shine } from '../kit';

export default {
  // "de gereedschapskist": the toolbox — a red metal toolbox seen from the front left, open at the top
  // with a hammer and a yellow screwdriver sticking out, a steel carrying handle across and a latch.
  'w.gereedschapskist': () => (
    <g strokeLinejoin="round">
      <Ground cx={60} cy={104} rx={46} ry={4} />
      {/* The inside back wall (dark) */}
      <path d="M14 56L28 44H106L92 56Z" fill={PAL.redShade} />
      {/* The tools sticking out */}
      <path d="M40 54L30 20" stroke={PAL.wood} strokeWidth="7" strokeLinecap="round" />
      <path d="M18 24L42 16" stroke={PAL.slate} strokeWidth="11" strokeLinecap="round" />
      <path d="M24 20L36 16" stroke={PAL.steel} strokeWidth="3" strokeLinecap="round" />
      <path d="M72 54L80 36" stroke={PAL.steel} strokeWidth="3.4" strokeLinecap="round" />
      <path d="M80 36L86 22" stroke={PAL.yellow} strokeWidth="9" strokeLinecap="round" />
      {/* The carrying handle on its two posts */}
      <path d="M50 48V34H72V48" fill="none" stroke={PAL.slate} strokeWidth="5" strokeLinecap="round" />
      {/* The box: right side and front */}
      <path d="M92 56L106 44V88L92 100Z" fill={PAL.redShade} />
      <rect x="14" y="56" width="78" height="44" rx="3" fill={PAL.red} />
      <path d="M14 70H92" stroke={PAL.redShade} strokeWidth="2.4" />
      {/* The latch */}
      <rect x="46" y="64" width="14" height="12" rx="2.5" fill={PAL.mist} />
      <rect x="49" y="67" width="8" height="4" rx="1.5" fill={PAL.steel} />
      <Shine d="M20 60H54" width={3} opacity={0.6} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
