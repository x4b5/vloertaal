import type { JSX } from 'react';
import { Move, PAL, Shine } from '../kit';

/** One corner bracket of the zoom frame: its corner at (x, y), its arms going (sx, sy). */
const corner = (x: number, y: number, sx: number, sy: number) => (
  <path d={`M${x} ${y + sy * 11}V${y}H${x + sx * 11}`} fill="none" stroke={PAL.white} strokeWidth="4.4" strokeLinecap="round" strokeLinejoin="round" />
);

export default {
  // "inzoomen": to zoom in — a screen with a person on it, big, from the waist up; four white corner
  // brackets close in round the head, and a magnifying glass with a plus sits at the bottom right of
  // the screen.
  // Three rounds: the four brackets close in on the head from the corners of the screen.
  'w.inzoomen': () => (
    <g strokeLinejoin="round">
      {/* The screen */}
      <rect x="10" y="14" width="92" height="80" rx="5" fill={PAL.slateDark} transform="translate(3 3)" />
      <rect x="10" y="14" width="92" height="80" rx="5" fill={PAL.slate} />
      <rect x="15" y="19" width="82" height="70" rx="2" fill={PAL.mist} />
      {/* The person, big */}
      <path d="M30 89Q30 66 46 64H66Q82 66 82 89Z" fill={PAL.steel} />
      <circle cx="56" cy="46" r="13" fill={PAL.steel} />
      <Shine d="M19 24H34" width={2.2} opacity={0.8} />
      {/* The brackets close in on the head */}
      <Move kind="from" dx={-16} dy={-10}>{corner(39, 29, 1, 1)}</Move>
      <Move kind="from" dx={16} dy={-10}>{corner(73, 29, -1, 1)}</Move>
      <Move kind="from" dx={-16} dy={18}>{corner(39, 64, 1, -1)}</Move>
      <Move kind="from" dx={16} dy={18}>{corner(73, 64, -1, -1)}</Move>
      {/* The magnifying glass with the plus */}
      <path d="M98 96L110 108" stroke={PAL.slateDark} strokeWidth="8" strokeLinecap="round" />
      <circle cx="88" cy="86" r="15" fill={PAL.sky} />
      <circle cx="88" cy="86" r="11" fill={PAL.ice} />
      <path d="M82 86H94M88 80V92" stroke={PAL.skyShade} strokeWidth="3.6" strokeLinecap="round" />
    </g>
  ),
} as Record<string, () => JSX.Element>;
