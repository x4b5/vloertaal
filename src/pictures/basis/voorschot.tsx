import type { JSX } from 'react';
import { Calendar, CurveArrow, Move, PAL } from '../kit';

/** A banknote, its top left at (x, y). */
const note = (x: number, y: number, rot: number) => (
  <g transform={`rotate(${rot} ${x + 18} ${y + 11})`}>
    <rect x={x} y={y} width="36" height="22" rx="3" fill={PAL.green} />
    <rect x={x + 24} y={y} width="12" height="22" rx="3" fill={PAL.greenShade} />
    <circle cx={x + 18} cy={y + 11} r="6" fill={PAL.lime} />
    <rect x={x + 3} y={y + 3} width="30" height="16" rx="2" fill="none" stroke={PAL.lime} strokeWidth="1.4" opacity=".7" />
  </g>
);

export default {
  // "het voorschot": the advance (part of your pay before payday) — a brown pay envelope; one
  // banknote comes out of it early, while the payday on the small calendar (the last day, ringed)
  // is still far off: a curved arrow from that day back to now.
  'w.voorschot': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      <Calendar x={68} y={14} w={42} h={44} mark={11} />
      <CurveArrow from={[94, 64]} to={[64, 64]} bend={-12} color={PAL.sky} width={6} head={10} />
      {/* The pay envelope: back, notes inside, front */}
      <path d="M12 66L44 42L76 66Z" fill={PAL.cardShade} />
      <rect x="12" y="62" width="64" height="44" rx="4" fill={PAL.cardDark} />
      {note(22, 52, -4)}
      {/* The one note taken out early */}
      <Move kind="from" dy={26} once>
        {note(34, 26, 8)}
      </Move>
      <path d="M12 70L44 86L76 70V102Q76 106 72 106H16Q12 106 12 102Z" fill={PAL.card} />
      <path d="M12 104L36 84M76 104L52 84" stroke={PAL.cardShade} strokeWidth="2.4" />
      <path d="M12 70L44 86L76 70" stroke={PAL.cardDark} strokeWidth="3" fill="none" />
    </g>
  ),
} as Record<string, () => JSX.Element>;
