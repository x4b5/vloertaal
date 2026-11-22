import type { JSX } from 'react';
import { Ground, PAL, Shine, r1 } from '../kit';

/** The pads lie flat, friction side up, seen from the front and a little above: depth goes right and up. */
const DX = 0.3;
const DY = -0.75;
/** The outlines below are drawn this much bigger along the pad (KX) and into the picture (KZ). */
const KX = 1.6;
const KZ = 1.2;
/** Plan outlines (x along the pad, z into the picture): the friction block, a curved slab like the arc of the disc. */
const PAD: [number, number][] = [
  [3, 2], [12, 4.5], [21, 5.5], [30, 4.5], [39, 2], [41, 14], [32, 19], [21, 21], [10, 19], [1, 14],
];
/** The steel backing plate: a bit bigger, with an ear at each end. */
const PLATE: [number, number][] = [
  [-4, 4], [0, 0], [10, 2.5], [21, 3.5], [32, 2.5], [42, 0], [46, 4], [44, 15], [33, 21.5], [21, 23.5], [9, 21.5], [-2, 15],
];

/** One pad, the front left corner of its plate at (x, y) on the floor, its friction block `t` thick. */
const pad = (x: number, y: number, t: number) => {
  const P = (pts: [number, number][], h: number) =>
    `M${pts.map(([a, z]) => `${r1(x + a * KX + z * KZ * DX)} ${r1(y - h + z * KZ * DY)}`).join('L')}Z`;
  const sweep = (pts: [number, number][], h0: number, h1: number, fill: string) =>
    Array.from({ length: Math.ceil(h1 - h0) + 1 }, (_, i) => Math.min(h0 + i, h1)).map((h) => (
      <path key={`${fill}${h}`} d={P(pts, h)} fill={fill} stroke={fill} strokeWidth="1.2" strokeLinejoin="round" />
    ));
  const top = 4 + t;
  return (
    <g>
      {/* The steel plate: its edge, its top */}
      {sweep(PLATE, 0, 4, PAL.steel)}
      <path d={P(PLATE, 4)} fill={PAL.mist} stroke={PAL.mist} strokeWidth="1.2" strokeLinejoin="round" />
      {/* The friction block: its edge (as thick as it is), its face with the groove */}
      {sweep(PAD, 4, top, PAL.slateDark)}
      <path d={P(PAD, top)} fill={PAL.slate} stroke={PAL.slate} strokeWidth="1.2" strokeLinejoin="round" />
      <path d={`M${r1(x + 21 * KX + 7 * KZ * DX)} ${r1(y - top + 7 * KZ * DY)}L${r1(x + 21 * KX + 18 * KZ * DX)} ${r1(y - top + 18 * KZ * DY)}`} stroke={PAL.slateDark} strokeWidth="2.4" strokeLinecap="round" />
    </g>
  );
};

export default {
  // "het remblok": the brake pad — two pads lying friction side up, each a steel backing plate with a dark
  // friction block on it: at the back a new one with a thick block, in front a worn one with a thin block.
  'w.remblok': () => (
    <g>
      <Ground cx={62} cy={60} rx={44} ry={5} />
      {pad(18, 58, 18)}
      <Shine d="M27.5 26Q34 22.5 41 21.5" width={2.6} opacity={0.5} />
      <Ground cx={56} cy={102} rx={44} ry={5} />
      {pad(12, 100, 3)}
    </g>
  ),
} as Record<string, () => JSX.Element>;
