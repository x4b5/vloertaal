import type { JSX } from 'react';
import { Ground, PAL } from '../kit';

/** A leaf from its stalk at (x, y), `len` long, pointing `deg` degrees (0 = right). */
const leaf = (x: number, y: number, len: number, deg: number, c: string) => (
  <path key={`${x}-${y}-${deg}`} transform={`translate(${x} ${y}) rotate(${deg})`} d={`M0 0Q${len * 0.45} ${-len * 0.36} ${len} 0Q${len * 0.45} ${len * 0.36} 0 0Z`} fill={c} />
);

/** A cut branch from a to b with its light cut end at a. */
const stick = (a: [number, number], b: [number, number], w: number) => (
  <g key={`${a[0]}-${a[1]}`}>
    <path d={`M${a[0]} ${a[1]}L${b[0]} ${b[1]}`} stroke={PAL.wood} strokeWidth={w} />
    <circle cx={a[0]} cy={a[1]} r={w / 2} fill={PAL.card} />
  </g>
);

export default {
  // "het snoeiafval": the green waste — a messy heap of cut-off branches and leaves on the ground:
  // brown sticks with light cut ends poking out every way, green and wilting yellow-green leaves.
  'w.snoeiafval': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      <Ground cx={60} cy={103} rx={50} ry={4} />
      {/* The bottom of the heap */}
      <path d="M12 102Q18 72 44 66Q60 56 80 66Q104 72 108 102Z" fill={PAL.greenShade} />
      {/* The sticks, back ones first */}
      {stick([16, 70], [70, 92], 5)}
      {stick([104, 60], [50, 88], 5.5)}
      {stick([40, 40], [64, 84], 5)}
      {[[30, 72, -150], [44, 62, -100], [70, 58, -60], [86, 66, -20], [24, 88, 170], [96, 86, 10]].map(([x, y, d], i) => leaf(x, y, 18, d, i % 2 ? PAL.green : PAL.leaf))}
      {stick([12, 92], [62, 76], 5)}
      {stick([108, 84], [70, 72], 4.5)}
      {stick([76, 38], [70, 70], 4)}
      {[[50, 76, -130], [56, 80, -40], [80, 80, 160], [40, 92, 160], [66, 92, 20], [60, 64, -80]].map(([x, y, d], i) => leaf(x, y, 16, d, i % 2 ? PAL.leaf : PAL.lime))}
    </g>
  ),
} as Record<string, () => JSX.Element>;
