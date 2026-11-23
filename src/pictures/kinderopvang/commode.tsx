import type { JSX } from 'react';
import { Ground, PAL, Shine, r1 } from '../kit';

/** The depth axis of the slanted view: one unit of depth goes this far right and up. */
const DX = 0.6;
const DY = -0.8;
type P = [number, number];
/** A point of the table: u across the front, v back into the card, z up. */
const iso = (u: number, v: number, z = 0): P => [r1(14 + u + v * DX), r1(104 - z + v * DY)];
const quad = (...p: P[]) => `M${p.map(([x, y]) => `${x} ${y}`).join('L')}Z`;

const W = 66;
const D = 34;
const H = 52;

export default {
  // "de commode": the changing table — a wooden chest of drawers at standing height in a slanted view,
  // two big drawers with round knobs, and on top a padded green changing mat with raised edges, a small
  // stack of clean nappies at its side.
  'w.commode': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      <Ground cx={58} cy={104} rx={46} ry={4} />
      {/* The chest: side, front, drawers */}
      <path d={quad(iso(W, 0), iso(W, D), iso(W, D, H), iso(W, 0, H))} fill={PAL.cardShade} />
      <path d={quad(iso(0, 0), iso(W, 0), iso(W, 0, H), iso(0, 0, H))} fill={PAL.card} />
      {[6, 28].map((z) => (
        <g key={z}>
          <path d={quad(iso(5, 0, z), iso(W - 5, 0, z), iso(W - 5, 0, z + 18), iso(5, 0, z + 18))} fill="#f0c48a" />
          <circle cx={iso(W / 2, 0, z + 9)[0]} cy={iso(W / 2, 0, z + 9)[1]} r="3.4" fill={PAL.cardDark} />
        </g>
      ))}
      {/* The top */}
      <path d={quad(iso(0, 0, H), iso(W, 0, H), iso(W, D, H), iso(0, D, H))} fill={PAL.cardDark} />
      {/* The changing mat: a lime pad with raised green edges */}
      <path d={quad(iso(2, 2, H), iso(W - 18, 2, H), iso(W - 18, D - 2, H), iso(2, D - 2, H))} fill={PAL.green} />
      <path d={quad(iso(2, 2, H), iso(W - 18, 2, H), iso(W - 18, 2, H + 6), iso(2, 2, H + 6))} fill={PAL.green} />
      <path d={quad(iso(6, 6, H + 4), iso(W - 22, 6, H + 4), iso(W - 22, D - 6, H + 4), iso(6, D - 6, H + 4))} fill={PAL.lime} />
      <path d={quad(iso(2, D - 2, H), iso(W - 18, D - 2, H), iso(W - 18, D - 2, H + 10), iso(2, D - 2, H + 10))} fill={PAL.leaf} />
      {/* The stack of nappies */}
      {[0, 6, 12].map((z) => (
        <path key={z} d={quad(iso(W - 14, 8, H + z), iso(W - 2, 8, H + z), iso(W - 2, 8, H + z + 5), iso(W - 14, 8, H + z + 5))} fill={z === 6 ? PAL.ice : PAL.paper} />
      ))}
      <path d={quad(iso(W - 14, 8, H + 17), iso(W - 2, 8, H + 17), iso(W - 2, 26, H + 17), iso(W - 14, 26, H + 17))} fill={PAL.white} />
      <path d={quad(iso(W - 2, 8, H), iso(W - 2, 26, H), iso(W - 2, 26, H + 17), iso(W - 2, 8, H + 17))} fill={PAL.paperShade} />
      <Shine d={`M${iso(3, 0, 8).join(' ')}L${iso(3, 0, 46).join(' ')}`} width={3} opacity={0.6} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
