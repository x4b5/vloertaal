import type { JSX } from 'react';
import { Ground, PAL, Shine } from '../kit';

export default {
  // "de pantry": the pantry (the small kitchen in an office) — a short kitchen unit seen from the front: a wall
  // cupboard, a grey worktop with a steel sink and a tall tap, a kettle beside it, and two wooden cupboard doors
  // and a drawer under it.
  'w.pantry': () => (
    <g strokeLinejoin="round">
      <Ground cx={60} cy={106} rx={52} ry={4} />
      {/* The wall cupboard */}
      <rect x="14" y="12" width="92" height="24" rx="3" fill={PAL.cardShade} />
      <rect x="14" y="12" width="45" height="24" rx="3" fill={PAL.card} />
      <rect x="61" y="12" width="45" height="24" rx="3" fill={PAL.card} />
      <rect x="51" y="20" width="4" height="10" rx="2" fill={PAL.slate} />
      <rect x="65" y="20" width="4" height="10" rx="2" fill={PAL.slate} />
      {/* The kettle */}
      <path d="M78 58Q78 48 88 48Q98 48 98 58V64H78Z" fill={PAL.steel} />
      <path d="M90 48Q98 48 98 58V64H92Z" fill={PAL.slate} />
      <path d="M82 48Q88 40 94 48" fill="none" stroke={PAL.slate} strokeWidth="3.4" strokeLinecap="round" />
      <path d="M78 54L72 50" stroke={PAL.steel} strokeWidth="4" strokeLinecap="round" />
      {/* The tap */}
      <path d="M42 62V46Q42 40 48 40Q54 40 54 46V50" fill="none" stroke={PAL.steel} strokeWidth="4.4" strokeLinecap="round" />
      <rect x="37" y="58" width="10" height="6" rx="2" fill={PAL.slate} />
      {/* The worktop with the sink */}
      <rect x="8" y="64" width="104" height="8" rx="2" fill={PAL.slate} />
      <rect x="8" y="64" width="104" height="3" rx="1.5" fill={PAL.steel} />
      <rect x="36" y="64" width="30" height="3" rx="1.5" fill={PAL.slateDark} />
      {/* The cupboards under it */}
      <rect x="12" y="72" width="96" height="32" fill={PAL.cardShade} />
      <rect x="14" y="74" width="30" height="28" rx="2" fill={PAL.card} />
      <rect x="46" y="74" width="30" height="28" rx="2" fill={PAL.card} />
      <rect x="78" y="74" width="28" height="12" rx="2" fill={PAL.card} />
      <rect x="78" y="88" width="28" height="14" rx="2" fill={PAL.card} />
      <rect x="38" y="80" width="3.4" height="10" rx="1.7" fill={PAL.slate} />
      <rect x="49" y="80" width="3.4" height="10" rx="1.7" fill={PAL.slate} />
      <rect x="86" y="78" width="12" height="3.4" rx="1.7" fill={PAL.slate} />
      <rect x="86" y="93" width="12" height="3.4" rx="1.7" fill={PAL.slate} />
      <Shine d="M18 16H40" width={2.4} color={PAL.white} opacity={0.6} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
