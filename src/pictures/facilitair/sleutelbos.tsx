import type { JSX } from 'react';
import { PAL } from '../kit';

/** A key hanging from the ring: its bow at the top (local 0, 0), the blade going down, teeth on the right. */
const key = (rot: number, bow: string, blade: string, shade: string, len: number) => (
  <g transform={`translate(58 30) rotate(${rot}) translate(0 20)`}>
    <rect x="-4" y="10" width="8" height={len} rx="2.5" fill={blade} />
    <rect x="1" y="10" width="3" height={len} rx="1.5" fill={shade} />
    <path d={`M4 ${len - 6}H10V${len - 1}H4ZM4 ${len - 18}H9V${len - 12}H4Z`} fill={blade} />
    <circle cx="0" cy="4" r="11" fill={bow} />
    <circle cx="0" cy="-1" r="3.6" fill={shade} />
  </g>
);

export default {
  // "de sleutelbos": the bunch of keys — a steel key ring at the top with four keys hanging from it,
  // fanned out: a brass one, a steel one, one with a blue head and one with a red head.
  'w.sleutelbos': () => (
    <g strokeLinejoin="round">
      {/* The keys, behind the ring */}
      {key(38, PAL.red, PAL.mist, PAL.steel, 40)}
      {key(12, PAL.yellow, PAL.yellow, PAL.yellowShade, 50)}
      {key(-14, PAL.mist, PAL.mist, PAL.steel, 46)}
      {key(-40, PAL.sky, PAL.mist, PAL.steel, 40)}
      {/* The ring */}
      <circle cx="58" cy="26" r="15" fill="none" stroke={PAL.steel} strokeWidth="5" />
      <path d="M46 18A15 15 0 0 1 62 11.4" fill="none" stroke={PAL.paper} strokeWidth="2" strokeLinecap="round" />
    </g>
  ),
} as Record<string, () => JSX.Element>;
