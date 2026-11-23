import type { JSX } from 'react';
import { Ground, PAL, Shade, Shine } from '../kit';

export default {
  // "het grofvuil": the bulky waste (big things, like a sofa) — an old two-seat sofa in terracotta, a little from
  // the right, put out on the street: one seat cushion lifted and torn (a light tear), one leg broken off so it
  // leans, and a dark shade under it.
  'w.grofvuil': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      <Ground cx={60} cy={102} rx={54} ry={5} />
      <g transform="rotate(-4 60 90)">
        {/* The back rest and the arm on the right (in depth) */}
        <path d="M100 40L112 34V88L100 94Z" fill={PAL.clayShade} />
        <Shade color={PAL.clayShade} opacity={0.7} at={[104, 50, 14, 20]}>
          <path d="M18 70V40Q18 30 28 30H92Q102 30 102 40V70Z" fill={PAL.clay} />
        </Shade>
        <path d="M60 34V66" stroke={PAL.clayShade} strokeWidth="2" />
        <Shine d="M24 44Q24 36 32 36H48" width={3.4} opacity={0.4} />
        {/* The seat cushions: the right one lifted, with a light tear */}
        <rect x="20" y="62" width="40" height="14" rx="5" fill={PAL.clayLight} />
        <rect x="60" y="56" width="40" height="14" rx="5" fill={PAL.clayLight} transform="rotate(-8 80 63)" />
        <path d="M70 62L76 58L80 64L86 58" fill="none" stroke={PAL.paper} strokeWidth="3" />
        {/* The front and the arms */}
        <rect x="16" y="74" width="88" height="16" rx="3" fill={PAL.clayShade} />
        <rect x="8" y="50" width="16" height="40" rx="6" fill={PAL.clay} />
        <rect x="96" y="50" width="16" height="40" rx="6" fill={PAL.clayShade} />
        {/* The legs: one broken */}
        <rect x="14" y="90" width="6" height="8" rx="1.6" fill={PAL.brown} />
        <rect x="100" y="90" width="6" height="3" rx="1.2" fill={PAL.brown} />
      </g>
    </g>
  ),
} as Record<string, () => JSX.Element>;
