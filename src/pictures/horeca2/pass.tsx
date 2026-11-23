import type { JSX } from 'react';
import { Ground, PAL, Shine } from '../kit';

/** A plate of food seen at a slant: meat, potatoes, greens. */
const dish = (cx: number, cy: number) => (
  <g>
    <ellipse cx={cx} cy={cy + 3} rx="21" ry="9" fill={PAL.paperShade} />
    <ellipse cx={cx} cy={cy} rx="21" ry="9" fill={PAL.white} />
    <ellipse cx={cx - 5} cy={cy - 3} rx="8" ry="5" fill={PAL.wood} />
    <ellipse cx={cx - 6} cy={cy - 4.5} rx="5" ry="2.4" fill={PAL.card} />
    <circle cx={cx + 6} cy={cy - 2} r="3.6" fill={PAL.yellow} />
    <circle cx={cx + 10} cy={cy + 1} r="3.2" fill={PAL.yellowShade} />
    <path d={`M${cx - 4} ${cy + 4}L${cx + 4} ${cy + 1}`} stroke={PAL.leaf} strokeWidth="3.4" strokeLinecap="round" />
  </g>
);

export default {
  // "de pass": the pass (the counter where the plates wait for the waiter) — a long steel counter seen at a
  // slant with two full plates waiting on it and the round service bell at its right end.
  'w.pass': () => (
    <g strokeLinejoin="round">
      <Ground cx={60} cy={106} rx={52} ry={4} />
      {/* The legs */}
      <rect x="16" y="80" width="6" height="26" rx="2" fill={PAL.steel} />
      <rect x="98" y="80" width="6" height="26" rx="2" fill={PAL.steel} />
      {/* The counter top, its front edge and its right end */}
      <path d="M6 68L22 48H114L98 68Z" fill={PAL.mist} />
      <path d="M6 68H98V82H6Z" fill={PAL.steel} />
      <path d="M98 68L114 48V62L98 82Z" fill={PAL.slate} />
      <Shine d="M14 66L26 52" width={2.6} opacity={0.8} />
      {/* The plates waiting */}
      {dish(34, 56)}
      {dish(70, 58)}
      {/* The service bell */}
      <ellipse cx="100" cy="56" rx="10" ry="3.6" fill={PAL.slateDark} />
      <path d="M91 55A9 9 0 0 1 109 55Z" fill={PAL.yellowShade} />
      <path d="M91 55A9 9 0 0 1 102 46.2V55Z" fill={PAL.yellow} />
      <rect x="98" y="41" width="4" height="6" rx="1.5" fill={PAL.slate} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
