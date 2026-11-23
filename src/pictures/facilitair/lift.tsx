import type { JSX } from 'react';
import { Ground, Move, PAL, Shine } from '../kit';

export default {
  // "de lift": the lift — two steel doors in a steel frame, slid open on a lit cabin, a lit up arrow
  // over the doors and the panel with an up and a down button beside them.
  // On the intro card the doors slide open from the middle. Once and slowly (the doors open once).
  'w.lift': () => (
    <g strokeLinejoin="round">
      <Ground cx={56} cy={105} rx={46} ry={3.5} />
      {/* The frame */}
      <rect x="14" y="14" width="76" height="92" rx="4" fill={PAL.steel} />
      <rect x="84" y="14" width="6" height="92" rx="2" fill={PAL.slate} opacity=".5" />
      {/* The display over the doors: a lit up arrow */}
      <rect x="38" y="18" width="28" height="13" rx="3" fill={PAL.slateDark} />
      <path d="M52 21L58 28H46Z" fill={PAL.leaf} />
      {/* The cabin: lit walls, a handrail, a floor */}
      <rect x="22" y="34" width="60" height="72" fill={PAL.yellowShine} />
      <rect x="22" y="34" width="60" height="72" fill={PAL.white} opacity=".35" />
      <path d="M22 98H82V106H22Z" fill={PAL.mist} />
      <path d="M30 74H74" stroke={PAL.steel} strokeWidth="3" strokeLinecap="round" />
      {/* The doors, slid open to the sides */}
      <Move kind="from" dx={20} once>
        <rect x="22" y="34" width="14" height="72" fill={PAL.mist} />
        <rect x="32" y="34" width="4" height="72" fill={PAL.steel} />
        <Shine d="M26 40V64" width={2.6} opacity={0.8} />
      </Move>
      <Move kind="from" dx={-20} once>
        <rect x="68" y="34" width="14" height="72" fill={PAL.mist} />
        <rect x="78" y="34" width="4" height="72" fill={PAL.steel} />
        <rect x="68" y="34" width="3" height="72" fill={PAL.white} opacity=".6" />
      </Move>
      {/* The button panel */}
      <rect x="94" y="48" width="14" height="30" rx="3" fill={PAL.slate} />
      <circle cx="101" cy="57" r="4.6" fill={PAL.steel} />
      <circle cx="101" cy="70" r="4.6" fill={PAL.steel} />
      <path d="M101 54L104 59H98Z" fill={PAL.leaf} />
      <path d="M101 73L104 68H98Z" fill={PAL.white} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
