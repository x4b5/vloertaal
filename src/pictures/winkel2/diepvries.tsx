import type { JSX } from 'react';
import { PAL, Shine } from '../kit';

/** The depth axis of the slanted view: one unit of depth goes this far right and up. */
const DX = 0.6;
const DY = -0.8;
/** The chest: front bottom left corner, width, depth, height. */
const X = 6;
const Y = 104;
const W = 84;
const D = 36;
const H = 48;
type P = [number, number];
const iso = (u: number, v: number, z = 0): P => [Math.round((X + u + v * DX) * 10) / 10, Math.round((Y - z + v * DY) * 10) / 10];
const quad = (...p: P[]) => `M${p.map(([x, y]) => `${x} ${y}`).join('L')}Z`;

export default {
  // "de diepvries": the freezer — a white shop chest freezer seen from above at a slant: two sliding
  // glass lids on top, through them frozen packs (a pizza box, a bag of peas, an ice-cream tub) and white
  // frost along the rim; a blue band on the front. Low and wide, not the upright fridge of "het koelvak".
  // A thing: it stays still.
  'w.diepvries': () => (
    <g strokeLinejoin="round">
      <path d={quad(iso(-3, -3, -1), iso(W + 3, -3, -1), iso(W + 3, D + 2, -1), iso(-3, D + 2, -1))} fill="#000" opacity=".14" />
      {/* Body: right side, front */}
      <path d={quad(iso(W, 0), iso(W, D), iso(W, D, H), iso(W, 0, H))} fill={PAL.paperShade} />
      <path d={quad(iso(0, 0), iso(W, 0), iso(W, 0, H), iso(0, 0, H))} fill={PAL.paper} />
      <path d={quad(iso(0, 0, 14), iso(W, 0, 14), iso(W, 0, 22), iso(0, 0, 22))} fill={PAL.sky} />
      <path d={quad(iso(W, 0, 14), iso(W, D, 14), iso(W, D, 22), iso(W, 0, 22))} fill={PAL.skyShade} />
      <path d={quad(iso(0, 0, 2), iso(W, 0, 2), iso(W, 0, 6), iso(0, 0, 6))} fill={PAL.mist} />
      {/* The top: rim, the cold inside, the goods */}
      <path d={quad(iso(0, 0, H), iso(W, 0, H), iso(W, D, H), iso(0, D, H))} fill={PAL.mist} />
      <path d={quad(iso(4, 4, H), iso(W - 4, 4, H), iso(W - 4, D - 4, H), iso(4, D - 4, H))} fill={PAL.ice} />
      {/* Pizza box */}
      <path d={quad(iso(8, 8, H), iso(30, 8, H), iso(30, 26, H), iso(8, 26, H))} fill={PAL.red} />
      <circle cx={iso(19, 17, H)[0]} cy={iso(19, 17, H)[1]} r="5.4" fill={PAL.yellowLight} />
      {/* Bag of peas */}
      <path d={quad(iso(36, 6, H), iso(56, 9, H), iso(54, 28, H), iso(34, 26, H))} fill={PAL.leaf} />
      <circle cx={iso(45, 17, H)[0]} cy={iso(45, 17, H)[1]} r="3.4" fill={PAL.lime} />
      {/* Ice-cream tub */}
      <path d={quad(iso(62, 8, H), iso(76, 8, H), iso(76, 26, H), iso(62, 26, H))} fill={PAL.purpleLight} />
      <path d={quad(iso(62, 8, H), iso(76, 8, H), iso(76, 12, H), iso(62, 12, H))} fill={PAL.purple} />
      {/* Frost along the front rim */}
      <path d={`M${iso(4, 3, H).join(' ')}L${iso(W - 4, 3, H).join(' ')}`} stroke={PAL.white} strokeWidth="3" strokeLinecap="round" strokeDasharray="6 3" />
      {/* Glass lids: a light film with a dividing rail */}
      <path d={quad(iso(0, 0, H), iso(W, 0, H), iso(W, D, H), iso(0, D, H))} fill={PAL.white} opacity=".22" />
      <path d={`M${iso(W / 2, 0, H).join(' ')}L${iso(W / 2, D, H).join(' ')}`} stroke={PAL.steel} strokeWidth="2.4" />
      <Shine d={`M${iso(6, D - 6, H).join(' ')}L${iso(24, D - 6, H).join(' ')}`} width={3} opacity={0.8} />
      <Shine d={`M${iso(4, 0, H - 6).join(' ')}L${iso(4, 0, 8).join(' ')}`} width={2.4} opacity={0.5} />
      {/* A snow crystal on the front, so it reads as freezing */}
      <g transform={`translate(${iso(W - 14, 0, 30).join(' ')})`} stroke={PAL.sky} strokeWidth="2.4" strokeLinecap="round">
        <path d="M0 -6V6M-5.2 -3L5.2 3M-5.2 3L5.2 -3" />
      </g>
    </g>
  ),
} as Record<string, () => JSX.Element>;
