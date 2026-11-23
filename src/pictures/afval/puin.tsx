import type { JSX } from 'react';
import { Ground, PAL } from '../kit';

/** A broken brick: a slanted block with its lit top and its shaded side. */
const brick = (x: number, y: number, w: number, rot: number) => (
  <g transform={`rotate(${rot} ${x} ${y})`}>
    <path d={`M${x} ${y}L${x + 5} ${y - 5}H${x + w + 5}L${x + w} ${y}Z`} fill={PAL.clayLight} />
    <path d={`M${x + w} ${y}L${x + w + 5} ${y - 5}V${y + 6}L${x + w} ${y + 11}Z`} fill={PAL.clayShade} />
    <rect x={x} y={y} width={w} height="11" fill={PAL.clay} />
  </g>
);

export default {
  // "het puin": the rubble — a heap of broken stuff on the ground: grey lumps of concrete, broken red bricks
  // lying every way, and small chips and dust around the foot of the heap.
  'w.puin': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      <Ground cx={60} cy={102} rx={54} ry={5} />
      {/* The heap of grey concrete */}
      <path d="M8 102L22 74L40 62L52 44L66 40L80 52L96 60L106 80L112 102Z" fill={PAL.mist} />
      <path d="M80 52L96 60L106 80L112 102H82L88 78Z" fill={PAL.steel} />
      <path d="M40 62L52 44L58 56L46 70Z" fill={PAL.paperShade} />
      {/* The lumps and the bricks */}
      <path d="M50 46L62 34L76 38L74 52L58 54Z" fill={PAL.line} />
      <path d="M62 34L76 38L74 52Z" fill={PAL.steel} />
      {brick(26, 76, 22, -16)}
      {brick(62, 66, 20, 12)}
      {brick(48, 90, 24, -4)}
      {brick(84, 84, 16, 24)}
      <path d="M16 90L28 86L32 96L20 98Z" fill={PAL.line} />
      {/* Chips and dust */}
      <g fill={PAL.steel}>
        <circle cx="12" cy="104" r="2.4" />
        <circle cx="104" cy="104" r="2.6" />
        <circle cx="96" cy="100" r="1.8" />
      </g>
      <rect x="40" y="100" width="6" height="4" rx="1" fill={PAL.clayShade} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
