import type { JSX } from 'react';
import { Ground, PAL, Shine } from '../kit';

/** A cherry tomato centred on (x, y): red, a dark green calyx dot and a highlight. */
const cherry = (x: number, y: number, r = 7.5) => (
  <g key={`${x}-${y}`}>
    <circle cx={x} cy={y} r={r} fill={PAL.red} />
    <path d={`M${x + r * 0.15} ${y + r * 0.95}A${r} ${r} 0 0 0 ${x + r * 0.95} ${y - r * 0.2}`} fill="none" stroke={PAL.redShade} strokeWidth={r * 0.45} strokeLinecap="round" />
    <path d={`M${x - r * 0.4} ${y - r * 0.75}L${x} ${y - r * 0.5}L${x + r * 0.4} ${y - r * 0.75}`} fill="none" stroke={PAL.greenShade} strokeWidth="1.8" strokeLinecap="round" />
    <circle cx={x - r * 0.4} cy={y - r * 0.15} r={r * 0.2} fill={PAL.white} opacity=".6" />
  </g>
);

/** The punnet in the slanted view: the front's top corners, its tapered bottom and the depth step. */
const DXX = 18;
const DYY = -22;

export default {
  // "het bakje": the punnet — a small green plastic punnet in the slanted 3/4 view, heaped full
  // of shiny red cherry tomatoes that rise above its rim.
  'w.bakje': () => (
    <g strokeLinejoin="round">
      <Ground cx={62} cy={100} rx={42} ry={5} />
      {/* The inside: the back wall seen over the front, dark */}
      <path d={`M22 64L${22 + DXX} ${64 + DYY}H${88 + DXX}L88 64Z`} fill={PAL.greenShade} />
      {/* The tomatoes, heaped in three rows from the back */}
      {[50, 64, 78].map((x) => cherry(x, 38, 7.2))}
      {[48, 62, 76, 90, 102].map((x, i) => cherry(x, 42 + (i === 4 ? 4 : 0), 7.5))}
      {[40, 54, 68, 82, 96].map((x) => cherry(x, 50, 7.8))}
      {[30, 44, 58, 72, 86].map((x) => cherry(x, 60, 8))}
      {/* The right side, in the shade */}
      <path d={`M88 64L${88 + DXX} ${64 + DYY}L${84 + DXX} ${96 + DYY}L84 96Z`} fill={PAL.leafShade} />
      {/* The front, tapering to the bottom, with its rim and ribs */}
      <path d="M22 64H88L84 96H26Z" fill={PAL.leaf} />
      <path d="M21 63H89V68H21Z" fill={PAL.lime} />
      <path d="M38 74V90M55 74V90M72 74V90" stroke={PAL.leafShade} strokeWidth="2" strokeLinecap="round" />
      <path d={`M89 63L${89 + DXX} ${63 + DYY}`} stroke={PAL.lime} strokeWidth="4" strokeLinecap="round" />
      <Shine d="M28 73V88" width={3} opacity={0.55} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
