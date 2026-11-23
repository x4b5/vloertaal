import type { JSX } from 'react';
import { Clock, Ground, PAL, Shine } from '../kit';

/** A wine glass standing on the table at (x, y): its foot at y. */
const glass = (x: number, y: number) => (
  <g>
    <ellipse cx={x} cy={y} rx="6" ry="2" fill={PAL.mist} />
    <path d={`M${x - 1} ${y}V${y - 10}H${x + 1}V${y}Z`} fill={PAL.mist} />
    <path d={`M${x - 7} ${y - 26}H${x + 7}Q${x + 7} ${y - 10} ${x} ${y - 10}Q${x - 7} ${y - 10} ${x - 7} ${y - 26}Z`} fill={PAL.ice} />
    <path d={`M${x - 5} ${y - 22}V${y - 15}`} stroke={PAL.white} strokeWidth="1.8" strokeLinecap="round" />
  </g>
);

export default {
  // "de reservering": the reservation (a table booked before) — a round wooden table laid for two (two wine
  // glasses), and in the middle a white folded card standing up with a clock on it: this table is kept for a
  // set time.
  'w.reservering': () => (
    <g strokeLinejoin="round">
      <Ground cx={60} cy={106} rx={30} ry={4} />
      {/* The leg and foot */}
      <rect x="56" y="76" width="8" height="28" fill={PAL.slate} />
      <ellipse cx="60" cy="104" rx="18" ry="4" fill={PAL.slateDark} />
      {/* The table top */}
      <ellipse cx="60" cy="74" rx="50" ry="16" fill={PAL.cardDark} transform="translate(0 6)" />
      <ellipse cx="60" cy="74" rx="50" ry="16" fill={PAL.card} />
      <Shine d="M22 70Q30 62 46 60" width={3} opacity={0.45} />
      {glass(24, 76)}
      {glass(96, 76)}
      {/* The folded card */}
      <path d="M38 76L44 34H76L82 76Z" fill={PAL.paperShade} />
      <path d="M38 76L44 34H70L66 76Z" fill={PAL.white} />
      <Clock cx={55} cy={56} r={11} hour={7} minute={0} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
