import type { JSX } from 'react';
import { Ground, PAL, Shade, Shine } from '../kit';

export default {
  // "de boom": the tree — a tall brown trunk that splits into two limbs, under a big round green crown
  // of leafy clumps, on the ground.
  'w.boom': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      <Ground cx={60} cy={104} rx={26} ry={4} />
      {/* The trunk, flaring at the foot, and its two limbs */}
      <path d="M50 104Q54 92 54 74V58H66V74Q66 92 72 104Z" fill={PAL.wood} />
      <path d="M62 58H66V74Q66 92 72 104H64Q63 90 62 74Z" fill={PAL.cardDark} />
      <path d="M57 64L44 46M63 62L76 44" stroke={PAL.wood} strokeWidth="6" />
      {/* The crown: back clumps dark, front clumps light */}
      <g fill={PAL.greenShade}>
        <circle cx="40" cy="36" r="20" />
        <circle cx="80" cy="36" r="20" />
        <circle cx="60" cy="26" r="20" />
      </g>
      <Shade color={PAL.greenShade} opacity={1} at={[106, 52, 22, 34]}>
        <g fill={PAL.green}>
          <circle cx="30" cy="52" r="16" />
          <circle cx="48" cy="40" r="19" />
          <circle cx="72" cy="40" r="19" />
          <circle cx="90" cy="54" r="15" />
          <rect x="22" y="48" width="78" height="20" rx="10" />
        </g>
      </Shade>
      <path d="M40 54Q44 50 48 54M64 50Q68 46 72 50M80 60Q84 56 88 60" fill="none" stroke={PAL.greenShade} strokeWidth="2" />
      <Shine d="M30 42Q36 30 48 26" color={PAL.lime} width={3.5} opacity={0.7} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
