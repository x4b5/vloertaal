import type { JSX } from 'react';
import { Clock, Move, PAL, Shine } from '../kit';

export default {
  // "de sluitingstijd": the closing time — a big clock at nine o'clock over a small shop door, and on the
  // door's glass a red hanging sign (closed, no text) on its string. On the intro card the hands run on to
  // nine (Clock `ran`), then the red sign appears on the door: once (the shop closes once a day).
  'w.sluitingstijd': () => (
    <g strokeLinejoin="round">
      <ellipse cx="38" cy="106" rx="30" ry="4" fill="#000" opacity=".14" />
      {/* The shop door: frame, glass, handle */}
      <rect x="12" y="44" width="52" height="62" rx="2" fill={PAL.slate} />
      <rect x="17" y="49" width="42" height="57" fill={PAL.ice} />
      <rect x="47" y="49" width="12" height="57" fill={PAL.sky} opacity=".25" />
      <rect x="50" y="72" width="4" height="16" rx="2" fill={PAL.steel} />
      <Shine d="M21 54V74" width={2.6} opacity={0.7} />
      {/* The closed sign */}
      <Move kind="show" once>
        <path d="M28 64L37 56L46 64" fill="none" stroke={PAL.slateDark} strokeWidth="1.8" strokeLinecap="round" />
        <rect x="22" y="64" width="30" height="16" rx="3" fill={PAL.redShade} />
        <rect x="22" y="62" width="30" height="16" rx="3" fill={PAL.red} />
        <path d="M28 70H46" stroke={PAL.white} strokeWidth="3" strokeLinecap="round" />
      </Move>
      {/* The clock at nine */}
      <Clock cx={78} cy={42} r={30} hour={9} minute={0} ran={60} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
