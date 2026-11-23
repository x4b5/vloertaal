import type { JSX } from 'react';
import { Ground, PAL, Shine } from '../kit';

/** The steak's outline (the same piece of meat as "gaar"). */
const STEAK = 'M24 60Q22 44 42 40Q62 36 80 44Q100 50 98 66Q96 82 72 86Q48 90 32 82Q24 76 24 60Z';

export default {
  // "rauw": raw (not cooked) — a raw red steak with a white fat rim and pale marbling on a white plate; no
  // steam and no grill marks (the same steak cooked is "gaar").
  'w.rauw': () => (
    <g strokeLinejoin="round">
      <Ground cx={60} cy={100} rx={50} ry={5} />
      {/* The plate */}
      <ellipse cx="60" cy="72" rx="52" ry="26" fill={PAL.paperShade} transform="translate(0 4)" />
      <ellipse cx="60" cy="72" rx="52" ry="26" fill={PAL.white} />
      <ellipse cx="60" cy="72" rx="38" ry="17" fill={PAL.paper} />
      {/* The steak: its cut side, then the top */}
      <path d={STEAK} fill={PAL.redShade} transform="translate(0 8)" />
      <path d={STEAK} fill={PAL.red} />
      {/* The fat rim along the top edge */}
      <path d="M30 52Q40 40 62 39Q80 40 92 50" fill="none" stroke={PAL.paper} strokeWidth="5" strokeLinecap="round" />
      {/* The marbling */}
      <path d="M40 64Q50 58 58 64M64 72Q74 66 84 70M46 76Q54 72 60 78" fill="none" stroke={PAL.redLight} strokeWidth="2.2" strokeLinecap="round" />
      <Shine d="M34 58Q36 50 44 47" width={3} opacity={0.45} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
