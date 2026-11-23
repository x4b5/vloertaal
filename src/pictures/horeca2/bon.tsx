import type { JSX } from 'react';
import { Arrow, Move, PAL, Shine } from '../kit';

/** One order ticket hanging from the rail at x, `h` long: a coloured top, lines for the dishes. */
const ticket = (x: number, h: number, top: string, rows: number[]) => (
  <g>
    <rect x={x + 3} y={27} width="30" height={h} rx="2" fill={PAL.paperShade} />
    <rect x={x} y={25} width="30" height={h} rx="2" fill={PAL.white} />
    <rect x={x} y={25} width="30" height="9" rx="2" fill={top} />
    {rows.map((w, i) => (
      <g key={i}>
        <circle cx={x + 6} cy={44 + i * 10} r="2" fill={PAL.slate} />
        <path d={`M${x + 11} ${44 + i * 10}H${x + 11 + w}`} stroke={PAL.line} strokeWidth="2.6" strokeLinecap="round" />
      </g>
    ))}
  </g>
);

export default {
  // "de bon": the order ticket (the order from the waiter to the kitchen) — a steel ticket rail across the top
  // with paper order slips hanging from it, each with a coloured top and a short line for each dish; a new slip
  // is slid in on the right, a blue arrow shows the way it came.
  // On the intro card the new slip slides in along the rail, once (an order comes in once).
  'w.bon': () => (
    <g strokeLinejoin="round">
      {ticket(14, 58, PAL.mist, [14, 10, 12])}
      {ticket(48, 50, PAL.mist, [12, 8])}
      <Move kind="from" dx={-40} once>
        {ticket(80, 70, PAL.yellow, [14, 10, 13, 9])}
      </Move>
      {/* The rail over the slips' tops */}
      <rect x="6" y="18" width="108" height="12" rx="4" fill={PAL.mist} />
      <rect x="6" y="25" width="108" height="5" rx="2.5" fill={PAL.steel} />
      <Shine d="M12 21H60" width={2.4} opacity={0.9} />
      <Arrow from={[58, 104]} to={[100, 104]} color={PAL.sky} width={6} head={10} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
