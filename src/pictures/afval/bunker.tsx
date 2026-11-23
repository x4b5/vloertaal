import type { JSX } from 'react';
import { PAL, r1 } from '../kit';

/** The depth axis of the slanted view: one unit of depth goes this far right and up. */
const DX = 0.6;
const DY = -0.8;
type P = [number, number];
/** A point of the bay: u across the front, v back into the card, z up. */
const iso = (u: number, v: number, z = 0): P => [r1(12 + u + v * DX), r1(98 - z + v * DY)];
const quad = (...p: P[]) => `M${p.map(([x, y]) => `${x} ${y}`).join('L')}Z`;

const CONCRETE = PAL.mist;
const CONCRETE_TOP = PAL.paper;
const CONCRETE_SIDE = PAL.steel;
const HW = 26;

/** A wall of concrete blocks from (u0, v0) to (u1, v1) (an axis-aligned box), HW high. */
const wall = (u0: number, u1: number, v0: number, v1: number) => (
  <g>
    {/* Right face, top, front face */}
    <path d={quad(iso(u1, v0), iso(u1, v1), iso(u1, v1, HW), iso(u1, v0, HW))} fill={CONCRETE_SIDE} />
    <path d={quad(iso(u0, v0, HW), iso(u1, v0, HW), iso(u1, v1, HW), iso(u0, v1, HW))} fill={CONCRETE_TOP} />
    <path d={quad(iso(u0, v0), iso(u1, v0), iso(u1, v0, HW), iso(u0, v0, HW))} fill={CONCRETE} />
  </g>
);

export default {
  // "de bunker": the bay — a three-sided bay of big grey concrete blocks on the yard, seen slanted from
  // the front: a back wall and two side walls, open at the front, with one heap of one kind of waste in
  // it (broken wooden planks).
  'w.bunker': () => {
    const seam = (a: P, b: P, k: string) => <path key={k} d={`M${a[0]} ${a[1]}L${b[0]} ${b[1]}`} stroke={PAL.line} strokeWidth="1.6" strokeLinecap="round" />;
    return (
      <g strokeLinejoin="round" strokeLinecap="round">
        {/* The floor and its shadow */}
        <path d={quad(iso(-4, -4, 0), iso(92, -4, 0), iso(92, 52, 0), iso(-4, 52, 0))} fill="#000" opacity=".1" />
        <path d={quad(iso(8, 0), iso(76, 0), iso(76, 40), iso(8, 40))} fill={PAL.paperShade} />
        {/* The back wall and its blocks */}
        {wall(0, 84, 40, 48)}
        {[21, 42, 63].map((u) => seam(iso(u, 40, 0), iso(u, 40, HW), `b${u}`))}
        {seam(iso(0, 40, HW / 2), iso(84, 40, HW / 2), 'bh')}
        {/* The left wall: its inner face is lit */}
        {wall(0, 8, 0, 40)}
        {[20].map((v) => seam(iso(8, v, 0), iso(8, v, HW), `l${v}`))}
        {seam(iso(8, 0, HW / 2), iso(8, 40, HW / 2), 'lh')}
        {/* The heap of broken planks */}
        <path d={`M${iso(10, 4).join(' ')}Q${iso(18, 30, 34).join(' ')} ${iso(46, 26, 30).join(' ')}Q${iso(70, 24, 24).join(' ')} ${iso(76, 6).join(' ')}Z`} fill={PAL.cardShade} />
        <g stroke={PAL.cardDark} strokeWidth="5">
          <path d={`M${iso(18, 6, 10).join(' ')}L${iso(44, 14, 22).join(' ')}`} />
          <path d={`M${iso(56, 6, 6).join(' ')}L${iso(40, 18, 26).join(' ')}`} />
        </g>
        <g stroke={PAL.card} strokeWidth="5">
          <path d={`M${iso(26, 4, 4).join(' ')}L${iso(54, 12, 14).join(' ')}`} />
          <path d={`M${iso(30, 16, 22).join(' ')}L${iso(58, 22, 20).join(' ')}`} />
          <path d={`M${iso(62, 4, 4).join(' ')}L${iso(70, 16, 12).join(' ')}`} />
        </g>
        <path d={`M${iso(14, 12, 18).join(' ')}L${iso(34, 22, 26).join(' ')}`} stroke="#f0c48a" strokeWidth="5" />
        {/* The right wall */}
        {wall(76, 84, 0, 40)}
        {seam(iso(84, 20, 0), iso(84, 20, HW), 'r20')}
        {seam(iso(76, 0, HW / 2), iso(84, 0, HW / 2), 'rf')}
        {seam(iso(84, 0, HW / 2), iso(84, 40, HW / 2), 'rh')}
      </g>
    );
  },
} as Record<string, () => JSX.Element>;
