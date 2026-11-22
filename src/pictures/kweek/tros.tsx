import type { JSX } from 'react';
import { Ground, PAL, Shade } from '../kit';

/** A ripe tomato centred on (x, y): red, a green star of a calyx and a highlight (as in group24). */
function Tomato({ x, y, r }: { x: number; y: number; r: number }) {
  return (
    <g>
      <Shade color={PAL.redShade} opacity={1} at={[x + r * 0.9, y + r * 0.4, r * 0.6, r * 1.2]}>
        <circle cx={x} cy={y} r={r} fill={PAL.red} />
      </Shade>
      <path d={`M${x - r * 0.5} ${y - r * 0.82}L${x} ${y - r * 0.5}L${x + r * 0.5} ${y - r * 0.82}`} fill="none" stroke={PAL.greenShade} strokeWidth={r * 0.26} strokeLinecap="round" strokeLinejoin="round" />
      <path d={`M${x - r * 0.55} ${y - r * 0.05}Q${x - r * 0.5} ${y - r * 0.48} ${x - r * 0.15} ${y - r * 0.55}`} fill="none" stroke={PAL.white} strokeWidth={r * 0.2} strokeLinecap="round" opacity=".55" />
    </g>
  );
}

/** The tomatoes, back to front: [x, y, r, where its little stem joins the main stalk]. */
const FRUIT: [number, number, number, number, number][] = [
  [40, 44, 12, 38, 27],
  [64, 46, 12, 62, 26],
  [88, 58, 12, 86, 36],
  [30, 68, 12, 34, 30],
  [54, 70, 12.5, 52, 28],
  [78, 80, 12, 76, 31],
];

export default {
  // "de tros": the truss — a green branching stalk arching over six ripe red tomatoes that hang
  // from it on short little stems, each with its green calyx.
  'w.tros': () => (
    <g strokeLinejoin="round">
      <Ground cx={60} cy={104} rx={40} ry={4} />
      <g transform="translate(60 60) scale(1.12) translate(-58 -54)">
      {/* The main stalk: from the cut end on the left, arching over to the right */}
      <path d="M16 24Q52 14 96 38" fill="none" stroke={PAL.green} strokeWidth="6" strokeLinecap="round" />
      <path d="M16 24L12 20" stroke={PAL.greenShade} strokeWidth="6" strokeLinecap="round" />
      {/* The little stems down to each tomato */}
      {FRUIT.map(([x, y, r, sx, sy]) => (
        <path key={`s${x}`} d={`M${sx} ${sy}Q${(sx + x) / 2 - 3} ${(sy + y) / 2} ${x} ${y - r * 0.6}`} fill="none" stroke={PAL.greenShade} strokeWidth="3.4" strokeLinecap="round" />
      ))}
      {FRUIT.map(([x, y, r]) => (
        <Tomato key={x} x={x} y={y} r={r} />
      ))}
      <path d="M22 21Q50 13 80 24" fill="none" stroke={PAL.lime} strokeWidth="1.8" strokeLinecap="round" opacity=".8" />
      </g>
    </g>
  ),
} as Record<string, () => JSX.Element>;
