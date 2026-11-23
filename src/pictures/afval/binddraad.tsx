import type { JSX } from 'react';
import { Ground, PAL } from '../kit';

export default {
  // "het binddraad": the baling wire — a coil of steel wire lying on the floor, seen a little from
  // above, its loose end running out to the front right and ending in a small closed loop (the eye
  // the other end is pushed through round a bale).
  'w.binddraad': () => (
    <g fill="none" strokeLinejoin="round" strokeLinecap="round">
      <Ground cx={54} cy={94} rx={46} ry={8} />
      {/* The coil: the far halves of the rings (darker), then the near halves (lit) */}
      {[0, 1, 2, 3].map((i) => (
        <path key={`b${i}`} d={`M${14 + i * 2} ${70 - i * 7}A${40 - i * 2} ${22} 0 0 1 ${94 - i * 2} ${70 - i * 7}`} stroke={PAL.line} strokeWidth="3.6" />
      ))}
      {[0, 1, 2, 3].map((i) => (
        <path key={`f${i}`} d={`M${14 + i * 2} ${70 - i * 7}A${40 - i * 2} ${22} 0 0 0 ${94 - i * 2} ${70 - i * 7}`} stroke={i === 3 ? PAL.mist : PAL.steel} strokeWidth="4" />
      ))}
      <path d="M24 80Q32 88 44 90" stroke={PAL.white} strokeWidth="1.8" opacity=".8" />
      {/* The loose end and its eye */}
      <path d="M88 82Q97 88 98 96" stroke={PAL.steel} strokeWidth="4" />
      <path d="M98 94Q99 100 96 102" stroke={PAL.steel} strokeWidth="4" />
      <circle cx="98" cy="106" r="5" stroke={PAL.steel} strokeWidth="3.6" />
      {/* The red tape that holds the coil */}
      <rect x="50" y="64" width="8" height="30" rx="2" fill={PAL.red} transform="rotate(-4 54 79)" />
    </g>
  ),
} as Record<string, () => JSX.Element>;
