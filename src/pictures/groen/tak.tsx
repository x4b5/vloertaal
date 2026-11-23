import type { JSX } from 'react';
import { PAL } from '../kit';

/** A leaf from its stalk at (x, y), `len` long, pointing `deg` degrees (0 = right), with its midrib. */
const leaf = (x: number, y: number, len: number, deg: number, c: string, rib: string) => (
  <g transform={`translate(${x} ${y}) rotate(${deg})`}>
    <path d={`M0 0Q${len * 0.45} ${-len * 0.36} ${len} 0Q${len * 0.45} ${len * 0.36} 0 0Z`} fill={c} />
    <path d={`M2 0H${len * 0.8}`} stroke={rib} strokeWidth="1.4" strokeLinecap="round" />
  </g>
);

export default {
  // "de tak": the branch — one cut-off branch lying diagonally: thick brown wood at the bottom left with
  // its light cut end, thinner towards the top right, two side twigs, green leaves at the ends.
  'w.tak': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      {/* The side twigs */}
      <path d="M48 70Q46 52 34 40" fill="none" stroke={PAL.wood} strokeWidth="5" />
      <path d="M72 50Q86 54 96 66" fill="none" stroke={PAL.wood} strokeWidth="4.5" />
      {/* The main branch, tapering, its lower side in shade */}
      <path d="M14 92L20 100L98 24L94 20Z" fill={PAL.wood} />
      <path d="M20 100L98 24L96 22L19 96Z" fill={PAL.cardDark} />
      <path d="M30 80L60 52" stroke={PAL.card} strokeWidth="2" opacity=".7" />
      {/* The cut end: light wood */}
      <ellipse cx="17" cy="96" rx="5" ry="6.5" transform="rotate(-45 17 96)" fill={PAL.card} />
      <ellipse cx="17" cy="96" rx="2" ry="2.8" transform="rotate(-45 17 96)" fill={PAL.cardShade} />
      {/* The leaves */}
      {leaf(34, 40, 20, -130, PAL.leaf, PAL.leafShade)}
      {leaf(36, 42, 18, -70, PAL.green, PAL.greenShade)}
      {leaf(96, 66, 20, 50, PAL.green, PAL.greenShade)}
      {leaf(96, 66, 18, -10, PAL.leaf, PAL.leafShade)}
      {leaf(96, 22, 22, -80, PAL.leaf, PAL.leafShade)}
      {leaf(96, 22, 20, -20, PAL.green, PAL.greenShade)}
      {leaf(80, 38, 16, -100, PAL.green, PAL.greenShade)}
    </g>
  ),
} as Record<string, () => JSX.Element>;
