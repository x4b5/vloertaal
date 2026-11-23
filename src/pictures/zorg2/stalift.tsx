import type { JSX } from 'react';
import { Ground, Move, PAL, Shine } from '../kit';

/** A castor wheel under the base. */
const castor = (cx: number, cy: number) => (
  <g key={cx}>
    <circle cx={cx} cy={cy} r="5.4" fill={PAL.slate} />
    <circle cx={cx} cy={cy} r="2" fill={PAL.steel} />
  </g>
);

export default {
  // "de stalift": the standing hoist — from the side: a low base on castors with a grey foot plate, a sky-blue
  // column with a black knee pad, and at the top an arm with a hand grip and a purple belt loop that goes round
  // the client's back to help them up.
  // On the intro card the arm lifts the belt up from low. Once and slowly (it helps the client stand up once).
  'w.stalift': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      <Ground cx={60} cy={106} rx={48} ry={4} />
      {/* The base, the castors, the foot plate */}
      <path d="M16 96H100" stroke={PAL.steel} strokeWidth="7" />
      {castor(20, 101)}
      {castor(96, 101)}
      <rect x="40" y="88" width="30" height="7" rx="2.5" fill={PAL.slate} />
      <rect x="40" y="86" width="30" height="5" rx="2" fill={PAL.line} />
      {/* The column and the knee pad */}
      <path d="M80 96V30" stroke={PAL.skyShade} strokeWidth="11" />
      <path d="M78 94V32" stroke={PAL.sky} strokeWidth="7" />
      <rect x="62" y="62" width="12" height="20" rx="5" fill={PAL.slateDark} />
      <path d="M74 72H78" stroke={PAL.steel} strokeWidth="4" />
      {/* The arm, the grip and the belt */}
      <Move kind="turn" turn={-28} at={[80, 30]} once>
        <path d="M80 30L36 22" stroke={PAL.sky} strokeWidth="9" />
        <Shine d="M74 26L44 21" width={2.4} opacity={0.6} />
        <path d="M60 25V36" stroke={PAL.slate} strokeWidth="6" />
        <Move kind="turn" turn={28} at={[36, 22]}>
          <path d="M36 22V34" stroke={PAL.slate} strokeWidth="4" />
          <path d="M28 34Q20 64 36 64Q52 64 44 34" fill="none" stroke={PAL.purpleShade} strokeWidth="9" />
          <path d="M28 33Q21 61 36 61Q51 61 44 33" fill="none" stroke={PAL.purple} strokeWidth="6" />
          <path d="M28 34H44" stroke={PAL.slate} strokeWidth="4" />
        </Move>
      </Move>
    </g>
  ),
} as Record<string, () => JSX.Element>;
