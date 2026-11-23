import type { JSX } from 'react';
import { PAL, Shine } from '../kit';

/** One row of the list: a little door (the room), a line for its number, and its box (ticked or not). */
const row = (y: number, done: boolean) => (
  <g key={y}>
    <rect x="34" y={y - 8} width="12" height="16" rx="1.5" fill={PAL.card} />
    <rect x="41" y={y - 8} width="5" height="16" fill={PAL.cardShade} />
    <circle cx="43" cy={y + 1} r="1.4" fill={PAL.slate} />
    <path d={`M52 ${y}H72`} stroke={PAL.line} strokeWidth="3" strokeLinecap="round" />
    <rect x="77" y={y - 7} width="14" height="14" rx="3" fill={done ? PAL.ok : PAL.white} stroke={done ? PAL.ok : PAL.line} strokeWidth="2" />
    {done && <path d={`M80.5 ${y}L83.5 ${y + 3}L88 ${y - 3}`} fill="none" stroke={PAL.white} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />}
  </g>
);

export default {
  // "de kamerlijst": the room list — a clipboard with today's list of rooms: each row a small brown door,
  // a line for the room number and a box; the top two rooms are done (green ticks), the rest still open.
  'w.kamerlijst': () => (
    <g strokeLinejoin="round">
      {/* The board with its depth edge */}
      <rect x="24" y="18" width="76" height="92" rx="6" fill={PAL.cardDark} />
      <rect x="20" y="14" width="76" height="92" rx="6" fill={PAL.card} />
      {/* The paper */}
      <rect x="27" y="24" width="69" height="78" rx="3" fill={PAL.paperShade} />
      <rect x="27" y="24" width="66" height="76" rx="3" fill={PAL.white} />
      {row(40, true)}
      {row(59, true)}
      {row(78, false)}
      {/* The clip */}
      <rect x="42" y="8" width="32" height="12" rx="4" fill={PAL.steel} />
      <rect x="66" y="8" width="8" height="12" rx="3" fill={PAL.slate} />
      <rect x="50" y="12" width="16" height="4" rx="2" fill={PAL.slate} />
      <Shine d="M24 30V54" width={3} opacity={0.5} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
