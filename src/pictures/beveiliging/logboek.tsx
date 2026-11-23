import type { JSX } from 'react';
import { Ground, PAL } from '../kit';

/** One entry on a page: a small clock face for the time, then a line of writing. */
const entry = (x: number, y: number, len: number) => (
  <g key={`${x}-${y}`}>
    <circle cx={x} cy={y} r="3.6" fill={PAL.white} stroke={PAL.sky} strokeWidth="1.6" />
    <path d={`M${x} ${y - 2}V${y}H${x + 1.8}`} fill="none" stroke={PAL.ink} strokeWidth="1.2" strokeLinecap="round" />
    <path d={`M${x + 7} ${y}H${x + 7 + len}`} stroke={PAL.line} strokeWidth="3" strokeLinecap="round" />
  </g>
);

export default {
  // "het logboek": the logbook (a book or an app where you write down everything) — a thick open book
  // with a dark blue cover; on both pages a column of entries, each with a small clock for the time and a
  // grey line of writing; a red ribbon hangs out at the bottom.
  'w.logboek': () => (
    <g strokeLinejoin="round">
      <Ground cx={60} cy={102} rx={50} ry={4} />
      {/* The cover and the thickness of the pages */}
      <path d="M8 34L60 40L112 34V92L60 100L8 92Z" fill={PAL.navy} />
      <path d="M11 32L60 37L109 32V88L60 95L11 88Z" fill={PAL.paperShade} />
      {/* The pages */}
      <path d="M13 26Q36 24 58 32V90Q36 82 13 84Z" fill={PAL.white} />
      <path d="M107 26Q84 24 62 32V90Q84 82 107 84Z" fill={PAL.paper} />
      <path d="M58 32V90L60 92L62 90V32L60 34Z" fill={PAL.mist} />
      {[0, 1, 2, 3, 4].map((i) => entry(20, 38 + i * 10, 26 - (i % 2) * 6))}
      {[0, 1, 2].map((i) => entry(68, 38 + i * 10, 26 - (i % 2) * 8))}
      {/* The ribbon */}
      <path d="M60 92L56 108L60 104L64 108L62 92Z" fill={PAL.red} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
