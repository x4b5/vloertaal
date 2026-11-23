import type { JSX } from 'react';
import { Move, PAL } from '../kit';

export default {
  // "de afvoer": the drain — a big round steel floor drain with a slotted grate, set in a grey tiled
  // floor seen from above, and a stream of blue water running over the floor into it.
  // Three rounds: the water keeps running into the grate.
  'w.afvoer': () => (
    <g strokeLinejoin="round">
      {/* The tiled floor, seen from above at a slant */}
      <path d="M4 96L28 34H116L92 96Z" fill={PAL.mist} />
      <path d="M43 34L23 96M70 34L50 96M97 34L77 96M16 65H104" stroke={PAL.paperShade} strokeWidth="2" />
      {/* The drain: a steel rim, the dark hole and the grate */}
      <ellipse cx="62" cy="68" rx="32" ry="17" fill={PAL.steel} />
      <ellipse cx="62" cy="68" rx="26" ry="13" fill={PAL.slateDark} />
      <path d="M44 61H80M38 68H86M44 75H80" stroke={PAL.steel} strokeWidth="3.4" strokeLinecap="round" />
      <path d="M33 62A32 17 0 0 1 72 51.6" fill="none" stroke={PAL.paper} strokeWidth="2.6" strokeLinecap="round" opacity=".8" />
      {/* The water: a stream over the floor, ending in the drain */}
      <path d="M10 44Q20 58 40 64" fill="none" stroke={PAL.sky} strokeWidth="8" strokeLinecap="round" />
      <Move kind="from" dx={-24} dy={-14}>
        <path d="M24 52Q32 58 42 62" fill="none" stroke={PAL.ice} strokeWidth="3" strokeLinecap="round" />
        <circle cx="48" cy="66" r="4.4" fill={PAL.sky} />
        <circle cx="58" cy="70" r="3.4" fill={PAL.sky} />
      </Move>
    </g>
  ),
} as Record<string, () => JSX.Element>;
