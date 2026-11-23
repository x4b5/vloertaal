import type { JSX } from 'react';
import { Ground, PAL, Shine } from '../kit';

export default {
  // "de kinderstoel": the high chair — a tall wooden high chair from the front: four long legs spread
  // wide, a footrest, a small seat with a high back, and a white tray in front at table height.
  'w.kinderstoel': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      <Ground cx={60} cy={105} rx={44} ry={4} />
      {/* The back legs */}
      <path d="M48 64L38 102M72 64L82 102" stroke={PAL.cardDark} strokeWidth="5" />
      {/* The high back */}
      <rect x="40" y="14" width="40" height="50" rx="10" fill={PAL.cardShade} />
      <rect x="40" y="14" width="34" height="50" rx="10" fill={PAL.card} />
      <rect x="48" y="24" width="20" height="30" rx="6" fill={PAL.cardShade} opacity=".6" />
      {/* The seat */}
      <rect x="36" y="60" width="48" height="8" rx="3" fill={PAL.cardDark} />
      {/* The front legs and the footrest */}
      <path d="M40 66L20 104M80 66L100 104" stroke={PAL.card} strokeWidth="7" />
      <path d="M80 66L100 104" stroke={PAL.cardShade} strokeWidth="7" />
      <path d="M30 86H90" stroke={PAL.cardShade} strokeWidth="6" />
      {/* The tray in front */}
      <path d="M22 50Q22 44 28 44H92Q98 44 98 50V54H22Z" fill={PAL.paper} />
      <rect x="22" y="52" width="76" height="8" rx="3" fill={PAL.paperShade} />
      <path d="M30 48H72" stroke={PAL.white} strokeWidth="2.6" />
      <Shine d="M45 26Q46 20 52 18" width={3.4} opacity={0.6} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
