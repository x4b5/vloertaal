import type { JSX } from 'react';
import { Ground, PAL, Shine, r1 } from '../kit';

/** The depth axis of the slanted view (as group55): one unit of depth goes this far right and up. */
const DX = 0.6;
const DY = -0.8;
/** The air cushion: a light ice tint, its shade one step down (the depth edge and the sealed ends). */
const AIR = '#e3f5ff';
const AIR_SHADE = PAL.ice;
/** The light top step of the cardboard (the flaps' inside). */
const CARD_TOP = '#f0c48a';

/** The box: front bottom left corner, width, depth and height. */
const BOX = { x: 20, y: 104, w: 62, d: 20, h: 32 };

type P = [number, number];
const poly = (...p: P[]) => `M${p.map(([a, b]) => `${r1(a)} ${r1(b)}`).join('L')}Z`;

/**
 * One air cushion: a plump pillow of light plastic, its middle at (x, y), turned by `turn` degrees.
 * The puffed body has a darker depth edge under it; at both ends a flat sealed strip, narrower than
 * the body, so the pillow pinches in at its ends.
 */
function Cushion({ x, y, w = 28, h = 17, turn = 0, shine = false }: {
  x: number; y: number; w?: number; h?: number; turn?: number; shine?: boolean;
}) {
  const end = 4.5;
  const bw = w - end * 2 + 2;
  const sh = h * 0.62;
  const shape = (fill: string, dy: number) => (
    <g transform={`translate(${x} ${y + dy}) rotate(${turn})`} fill={fill}>
      <rect x={-w / 2} y={-sh / 2} width={w} height={sh} rx="2" />
      <rect x={-bw / 2} y={-h / 2} width={bw} height={h} rx={h / 2.3} />
    </g>
  );
  return (
    <g strokeLinejoin="round">
      {shape(AIR_SHADE, 3)}
      {shape(AIR, 0)}
      <g transform={`translate(${x} ${y}) rotate(${turn})`}>
        <path
          d={`M${-w / 2 + end} ${-sh / 2 + 1.5}V${sh / 2 - 1.5}M${w / 2 - end} ${-sh / 2 + 1.5}V${sh / 2 - 1.5}`}
          stroke={AIR_SHADE}
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        {shine && <Shine d={`M${-bw / 2 + 5} ${-h / 2 + 4}Q${-bw / 2 + 9} ${-h / 2 + 2.8} ${bw / 2 - 8} ${-h / 2 + 3.4}`} width={2.6} opacity={0.9} />}
      </g>
    </g>
  );
}

export default {
  // "het vulmateriaal": packing material — an open cardboard box heaped high with light-blue air
  // cushions (pillows with sealed ends); an orange product just shows between them, one cushion hangs
  // over the front rim and one has fallen out onto the floor beside the box.
  'w.vulmateriaal': () => {
    const { x, y, w, d, h } = BOX;
    const ox = d * DX;
    const oy = d * DY;
    const top = y - h;
    return (
      <g strokeLinejoin="round">
        <Ground cx={60} cy={104} rx={47} ry={4.5} />
        {/* Back flap standing up, and the dark inside of the box */}
        <path d={poly([x + ox, top + oy], [x + w + ox, top + oy], [x + w + ox - 3, top + oy - 16], [x + ox - 3, top + oy - 16])} fill={PAL.cardShade} />
        <path d={poly([x, top], [x + w, top], [x + w + ox, top + oy], [x + ox, top + oy])} fill={PAL.cardDark} />
        {/* Back row of cushions, the heap's top */}
        <Cushion x={46} y={24} turn={-12} />
        <Cushion x={74} y={26} turn={14} />
        <Cushion x={30} y={40} turn={18} />
        <Cushion x={88} y={44} turn={-16} />
        {/* The product, just showing in a gap between the cushions */}
        <path d={poly([53, 40], [64, 40], [64 + 4, 40 - 5.2], [53 + 4, 40 - 5.2])} fill={PAL.orangeLight} />
        <path d={poly([64, 40], [68, 34.8], [68, 48], [64, 52])} fill={PAL.orangeShade} />
        <rect x="53" y="40" width="11" height="12" fill={PAL.orange} />
        {/* Front row of cushions, over the rim */}
        <Cushion x={40} y={54} turn={-8} shine />
        <Cushion x={70} y={52} turn={8} />
        <Cushion x={56} y={64} turn={2} />
        {/* Right side and front of the box */}
        <path d={poly([x + w, y], [x + w, top], [x + w + ox, top + oy], [x + w + ox, y + oy])} fill={PAL.cardShade} />
        <rect x={x} y={top} width={w} height={h} rx="2" fill={PAL.card} />
        <path d={`M${x + 3} ${top + 2.2}H${x + w - 3}`} stroke="#f6d3a2" strokeWidth="2" strokeLinecap="round" />
        {/* Front flap folded out towards the viewer */}
        <path d={poly([x, top], [x + w, top], [x + w - 4, top + 9], [x + 4, top + 9])} fill={CARD_TOP} />
        {/* Cushions spilt over the rim: one hangs over the left rim, one has fallen onto the floor */}
        <Cushion x={22} y={74} w={24} h={15} turn={-42} />
        <Cushion x={98} y={96} w={22} h={14} turn={-10} />
      </g>
    );
  },
} as Record<string, () => JSX.Element>;
