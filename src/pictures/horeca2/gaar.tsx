import type { JSX } from 'react';
import { Ground, Move, PAL, Shine, Tick } from '../kit';

/** The steak's outline (the same piece of meat as "rauw"). */
const STEAK = 'M24 66Q22 50 42 46Q62 42 80 50Q100 56 98 72Q96 88 72 92Q48 96 32 88Q24 82 24 66Z';

export default {
  // "gaar": cooked, done (ready to eat) — the same steak as "rauw", now browned with dark grill marks and a
  // golden fat rim, steam rising from it, and a green tick: it is done.
  // On the intro card the steam rises from the meat (three rounds: steam goes on).
  'w.gaar': () => (
    <g strokeLinejoin="round">
      <Ground cx={60} cy={104} rx={50} ry={5} />
      {/* The plate */}
      <ellipse cx="60" cy="78" rx="52" ry="24" fill={PAL.paperShade} transform="translate(0 4)" />
      <ellipse cx="60" cy="78" rx="52" ry="24" fill={PAL.white} />
      <ellipse cx="60" cy="78" rx="38" ry="15" fill={PAL.paper} />
      {/* The steak */}
      <path d={STEAK} fill={PAL.brown} transform="translate(0 7)" />
      <path d={STEAK} fill={PAL.wood} />
      <path d="M30 58Q40 46 62 45Q80 46 92 56" fill="none" stroke={PAL.card} strokeWidth="5" strokeLinecap="round" />
      {/* The grill marks */}
      <path d="M38 62L50 84M54 58L66 86M70 58L80 80" stroke={PAL.brown} strokeWidth="4.4" strokeLinecap="round" />
      <Shine d="M32 64Q34 56 42 53" width={3} opacity={0.4} color={PAL.yellowShine} />
      {/* The steam */}
      <Move kind="from" dy={22}>
        <path d="M44 38Q38 32 44 26Q50 20 44 14M62 36Q56 30 62 24Q68 18 62 12M80 38Q74 32 80 26" fill="none" stroke={PAL.mist} strokeWidth="4" strokeLinecap="round" />
      </Move>
      <Tick x={96} y={30} r={14} color={PAL.ok} shade={PAL.okShade} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
