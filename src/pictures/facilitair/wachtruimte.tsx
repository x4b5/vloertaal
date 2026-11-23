import type { JSX } from 'react';
import { Clock, Ground, PAL, Shine } from '../kit';

/** One chair of the row: seat, back and two legs; (x, y) is the front left corner of the seat. */
const chair = (x: number, y: number, key: number) => (
  <g key={key}>
    {/* The back */}
    <rect x={x + 3} y={y - 30} width="22" height="28" rx="5" fill={PAL.blueShade} />
    <rect x={x + 3} y={y - 30} width="18" height="26" rx="5" fill={PAL.blue} />
    {/* The seat */}
    <path d={`M${x} ${y}L${x + 6} ${y - 6}H${x + 30}L${x + 26} ${y}Z`} fill={PAL.blueLight} />
    <rect x={x} y={y} width="26" height="6" rx="2" fill={PAL.blueShade} />
  </g>
);

export default {
  // "de wachtruimte": the waiting area — a row of three blue chairs joined on one steel rail, a small
  // low table with a magazine at the end, and a clock on the wall above (you wait).
  'w.wachtruimte': () => (
    <g strokeLinejoin="round">
      <Ground cx={58} cy={104} rx={52} ry={4} />
      {/* The clock on the wall */}
      <Clock cx={84} cy={30} r={18} hour={10} minute={10} rim={PAL.slate} rimShade={PAL.slateDark} />
      {/* The steel rail and its legs */}
      <rect x="12" y="84" width="82" height="5" rx="2" fill={PAL.steel} />
      <path d="M18 88L14 104M88 88L92 104" stroke={PAL.slate} strokeWidth="4.5" strokeLinecap="round" />
      {[0, 1, 2].map((i) => chair(12 + i * 28, 78, i))}
      <Shine d="M18 52V66" width={2.6} opacity={0.6} />
      {/* The low table with a magazine */}
      <rect x="96" y="78" width="16" height="5" rx="2" fill={PAL.wood} />
      <rect x="102" y="83" width="4" height="21" rx="1.5" fill={PAL.cardDark} />
      <path d="M97 78L100 73H111L109 78Z" fill={PAL.red} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
