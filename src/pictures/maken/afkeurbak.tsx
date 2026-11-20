import type { JSX } from 'react';
import { Ground, PAL, Shine, r1 } from '../kit';

/** The depth axis of the slanted view (as group55): one unit of depth goes this far right and up. */
const DX = 0.6;
const DY = -0.8;
/** The light top step of alarm red (the rim), one step over PAL.red. */
const RED_TOP = '#ec6a52';
/** The dark inside of the bin, one step under PAL.redShade. */
const RED_DEEP = '#7e2416';

/** The bin: front bottom left corner, width, depth, height, and the rim's thickness. */
const BIN = { x: 16, y: 104, w: 68, d: 24, h: 54, rim: 4 };
/** The product: one half's width and height, and its depth. */
const PART = { w: 16, h: 34, d: 9 };

type P = [number, number];
const poly = (...p: P[]) => `M${p.map(([a, b]) => `${r1(a)} ${r1(b)}`).join('L')}Z`;

/** The crack down the middle of the product, top to bottom (x offsets from the cut line). */
const CRACK: P[] = [[0, 0], [-3.5, 8], [3.5, 15], [-3, 23], [2, 34]];

/**
 * One half of the broken product (a blue block), drawn round its own bottom middle.
 * `side` -1 is the left half (crack on its right), 1 the right half (crack on its left).
 */
function Half({ side, x, y, turn }: { side: -1 | 1; x: number; y: number; turn: number }) {
  const { w, h, d } = PART;
  const ox = d * DX;
  const oy = d * DY;
  // Local frame: the cut line at x 0, the top at y 0, the bottom at y h.
  const crack = CRACK.map(([cx, cy]) => [cx, cy] as P);
  const outer = side * w;
  const front: P[] = side < 0
    ? [[outer, 0], ...crack, [outer, h]]
    : [[outer, h], ...[...crack].reverse(), [outer, 0]];
  const top = poly([Math.min(0, outer), 0], [Math.max(0, outer), 0], [Math.max(0, outer) + ox, oy], [Math.min(0, outer) + ox, oy]);
  const right = side > 0 ? poly([outer, 0], [outer + ox, oy], [outer + ox, h + oy], [outer, h]) : null;
  // The broken face inside the left half, seen through the crack (dark).
  return (
    <g transform={`translate(${x} ${y}) rotate(${turn} 0 ${h})`} strokeLinejoin="round">
      {right && <path d={right} fill={PAL.blueShade} />}
      <path d={top} fill={PAL.blueLight} />
      <path d={poly(...front)} fill={PAL.blue} />
      {/* The product's white label band, broken with it */}
      <path d={side < 0 ? poly([outer + 3, 11], [-0.5, 11], [1.5, 13.5], [-1, 19], [outer + 3, 19]) : poly([outer - 3, 11], [2.2, 11], [3.5, 15], [1.2, 19], [outer - 3, 19])} fill={PAL.paper} />
    </g>
  );
}

export default {
  // "de afkeurbak": the reject bin — a big red bin seen from the front and above, a white tag with a
  // red cross on its front, a grip hole in its side; a blue product box, broken in two jagged halves
  // (its white label torn with it), drops into its dark opening.
  'w.afkeurbak': () => {
    const { x, y, w, d, h, rim } = BIN;
    const ox = d * DX;
    const oy = d * DY;
    const top = y - h;
    // The opening, inside the rim
    const ix = rim;
    const iy = rim * 0.8;
    return (
      <g strokeLinejoin="round">
        <Ground cx={58} cy={104} rx={46} ry={4.5} />
        {/* The bin: rim on top, the dark opening, the shaded right side */}
        <path d={poly([x, top], [x + w, top], [x + w + ox, top + oy], [x + ox, top + oy])} fill={RED_TOP} />
        <path d={poly([x + ix, top - iy], [x + w - ix, top - iy], [x + w + ox - ix * 0.6, top + oy + iy * 0.4], [x + ox + ix * 0.6, top + oy + iy * 0.4])} fill={RED_DEEP} />
        <path d={poly([x + ix, top - iy], [x + ox + ix * 0.6, top + oy + iy * 0.4], [x + ox + ix * 0.6, top + oy + 18], [x + ix, top - iy + 14])} fill={PAL.redShade} />
        {/* The broken product going in */}
        <Half side={-1} x={47} y={20} turn={-14} />
        <Half side={1} x={57} y={18} turn={13} />
        {/* Front and right side */}
        <path d={poly([x + w, y], [x + w, top], [x + w + ox, top + oy], [x + w + ox, y + oy])} fill={PAL.redShade} />
        <rect x={x} y={top} width={w} height={h} rx="2" fill={PAL.red} />
        <rect x={x} y={top} width={w} height="7" rx="2" fill={RED_TOP} />
        <rect x={x} y={top + 5} width={w} height="2.4" fill={PAL.redShade} />
        {/* The tag on the front: white, a red cross */}
        <rect x={x + w / 2 - 15} y={top + 19} width="30" height="26" rx="3" fill={PAL.paperShade} />
        <rect x={x + w / 2 - 15} y={top + 16} width="30" height="26" rx="3" fill={PAL.paper} />
        <path d={`M${x + w / 2 - 7} ${top + 22}L${x + w / 2 + 7} ${top + 36}M${x + w / 2 + 7} ${top + 22}L${x + w / 2 - 7} ${top + 36}`} stroke={PAL.red} strokeWidth="5" strokeLinecap="round" />
        {/* A grip hole in the right side */}
        <path d={poly([x + w + ox * 0.3, top + 10 + oy * 0.3], [x + w + ox * 0.7, top + 10 + oy * 0.7], [x + w + ox * 0.7, top + 16 + oy * 0.7], [x + w + ox * 0.3, top + 16 + oy * 0.3])} fill={RED_DEEP} />
        <Shine d={`M${x + 5} ${top + 13}V${y - 8}`} width={3} opacity={0.4} />
      </g>
    );
  },
} as Record<string, () => JSX.Element>;
