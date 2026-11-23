import type { JSX } from 'react';
import { Ground, Move, PAL } from '../kit';

/** A big leaf from its stalk at (x, y), `len` long, pointing `deg` degrees (0 = right): blade, midrib, side veins and stalk. */
const leaf = (x: number, y: number, len: number, deg: number, c: string, rib: string) => (
  <g key={`${x}-${y}`} transform={`translate(${x} ${y}) rotate(${deg})`}>
    <path d={`M-6 0H2`} stroke={rib} strokeWidth="2.4" />
    <path d={`M0 0Q${len * 0.3} ${-len * 0.48} ${len} 0Q${len * 0.3} ${len * 0.48} 0 0Z`} fill={c} />
    <path d={`M2 0H${len * 0.84}M${len * 0.3} 0l${len * 0.14} ${-len * 0.16}M${len * 0.3} 0l${len * 0.14} ${len * 0.16}M${len * 0.55} 0l${len * 0.12} ${-len * 0.12}M${len * 0.55} 0l${len * 0.12} ${len * 0.12}`} stroke={rib} strokeWidth="1.6" />
  </g>
);

export default {
  // "de bladeren": the leaves — a heap of big fallen autumn leaves on the ground, in orange, yellow,
  // red-brown and a last green one, each with its midrib, veins and stalk.
  // On the intro card the last two leaves drift down onto the heap: once, slowly.
  'w.bladeren': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      <Ground cx={60} cy={102} rx={50} ry={5} />
      {leaf(22, 90, 34, -30, PAL.clay, PAL.clayShade)}
      {leaf(96, 92, 34, -150, PAL.yellow, PAL.yellowShade)}
      <Move kind="slow" dx={-24} dy={-52} once>
        <Move kind="turn" turn={40} at={[48, 70]}>
          {leaf(48, 70, 36, -80, PAL.leaf, PAL.leafShade)}
        </Move>
      </Move>
      {leaf(36, 100, 38, -10, PAL.orange, PAL.orangeShade)}
      {leaf(86, 100, 36, -160, PAL.red, PAL.redShade)}
      <Move kind="slow" dx={20} dy={-60}>
        <Move kind="turn" turn={-35} at={[62, 96]}>
          {leaf(62, 96, 38, -70, PAL.yellow, PAL.yellowShade)}
        </Move>
      </Move>
    </g>
  ),
} as Record<string, () => JSX.Element>;
