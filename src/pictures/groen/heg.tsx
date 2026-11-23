import type { JSX } from 'react';
import { Ground, PAL, Shine } from '../kit';

/** Little leaf marks in rows over the front of the hedge: [x, y]. */
const MARKS: [number, number][] = [
  [20, 56], [34, 52], [48, 58], [62, 52], [76, 58], [86, 50],
  [24, 70], [38, 74], [52, 68], [66, 74], [80, 68],
  [18, 84], [32, 86], [46, 82], [60, 86], [74, 82], [86, 84],
];

export default {
  // "de heg": the hedge — a long, neatly trimmed green hedge in a slanted view: a flat light top, a
  // front full of leaves and a darker end, standing on the ground.
  'w.heg': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      <Ground cx={60} cy={103} rx={50} ry={4} />
      {/* The short stems under the hedge */}
      <path d="M22 92V102M44 92V102M66 92V102M86 92V102" stroke={PAL.cardDark} strokeWidth="4.5" />
      {/* The end (right side), the top and the front, with leafy bumps along their edges */}
      <path d="M92 46L106 34V82L92 94Z" fill={PAL.greenShade} stroke={PAL.greenShade} strokeWidth="3" />
      <path d="M10 46L24 34H106L92 46Z" fill={PAL.leaf} stroke={PAL.leaf} strokeWidth="3" />
      <g fill={PAL.leaf}>
        {[30, 42, 54, 66, 78, 90, 102].map((x) => <circle key={x} cx={x} cy="34" r="4.5" />)}
      </g>
      <rect x="10" y="46" width="82" height="48" rx="2" fill={PAL.green} />
      <g fill={PAL.green}>
        {[14, 26, 38, 50, 62, 74, 86].map((x) => <circle key={x} cx={x} cy="94" r="4.5" />)}
        {[52, 64, 76, 88].map((y) => <circle key={y} cx="10" cy={y} r="4" />)}
      </g>
      <g fill={PAL.greenShade}>
        {[44, 58, 72].map((y) => <circle key={y} cx="106" cy={y} r="4" />)}
      </g>
      {/* Leaf marks on the front, cut marks on the top */}
      <path d={MARKS.map(([x, y]) => `M${x - 4} ${y + 2}Q${x} ${y - 3} ${x + 4} ${y + 2}`).join('')} fill="none" stroke={PAL.greenShade} strokeWidth="2.2" />
      <path d="M30 40H44M56 38H72M80 42H92" stroke={PAL.leafShade} strokeWidth="2.2" />
      <Shine d="M16 52H50" color={PAL.lime} width={3} opacity={0.7} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
