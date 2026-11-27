import type { JSX } from 'react';
import { PAL } from '../kit';

/** A box on the form: a white square with a grey frame (a form's box is a line). */
const box = (x: number, y: number, s: number, key: string) => (
  <rect key={key} x={x} y={y} width={s} height={s} rx="2" fill={PAL.white} stroke={PAL.line} strokeWidth="2.6" />
);

export default {
  // "het vakje": the box (a small square on a form) — a form with two rows of small empty squares
  // under label lines; one square is picked out with a thick yellow ring and a blue frame (still
  // empty: no cross, unlike "aankruisen").
  'w.vakje': () => (
    <g strokeLinecap="round" strokeLinejoin="round">
      {/* The form: a depth edge, the sheet, a navy title bar */}
      <rect x="10" y="18" width="88" height="86" rx="4" fill={PAL.paperShade} />
      <rect x="10" y="14" width="88" height="86" rx="4" fill={PAL.white} />
      <rect x="18" y="22" width="34" height="7" rx="2.5" fill={PAL.navy} />
      {/* Row one: a label line and four boxes */}
      <path d="M18 40H50" stroke={PAL.line} strokeWidth="2.6" />
      {[18, 37, 56, 75].map((x) => box(x, 46, 15, `a${x}`))}
      {/* Row two: a label line and four boxes, the third one picked out */}
      <path d="M18 72H44" stroke={PAL.line} strokeWidth="2.6" />
      {[18, 37, 75].map((x) => box(x, 78, 15, `b${x}`))}
      <rect x="49" y="70" width="29" height="29" rx="7" fill="none" stroke={PAL.yellow} strokeWidth="6" />
      <rect x="54.5" y="75.5" width="18" height="18" rx="2.4" fill={PAL.white} stroke={PAL.sky} strokeWidth="3.6" />
      {/* Light on the ring's top left */}
      <path d="M52 86V78Q52 73 57 73H64" fill="none" stroke={PAL.yellowShine} strokeWidth="2.4" opacity=".9" />
    </g>
  ),
} as Record<string, () => JSX.Element>;
