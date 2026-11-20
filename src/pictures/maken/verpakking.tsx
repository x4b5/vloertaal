import type { JSX } from 'react';
import { Ground, PAL, Shine, r1 } from '../kit';

/** The depth axis of the slanted view (as group55): one unit of depth goes this far right and up. */
const DX = 0.6;
const DY = -0.8;
/** The clear plastic: its front (a light tint), its light top and its shaded right side. */
const CLEAR = '#e3f5ff';
const CLEAR_TOP = PAL.white;
const CLEAR_SIDE = PAL.ice;

/** The backing card: front left x, top y (of the card under the tab), width, bottom y, thickness. */
const CARD = { x: 22, y: 30, w: 64, b: 102, d: 6 };
/** The hang tab on top of the card: its width and height. */
const TAB = { w: 24, h: 14 };
/** The plastic bubble: its back rectangle on the card, and how far it stands out to the front. */
const BUB = { x: 36, y: 38, w: 40, h: 46, d: 10 };

type P = [number, number];
const poly = (...p: P[]) => `M${p.map(([a, b]) => `${r1(a)} ${r1(b)}`).join('L')}Z`;

/** One battery inside the bubble: a green body with a shaded right strip and a metal nub. */
function Battery({ x, y }: { x: number; y: number }) {
  return (
    <g>
      <rect x={x + 3.5} y={y - 4} width="6" height="5" rx="1.5" fill={PAL.steel} />
      <rect x={x} y={y} width="13" height="38" rx="3" fill={PAL.green} />
      <path d={`M${x + 9} ${y}H${x + 10}Q${x + 13} ${y} ${x + 13} ${y + 3}V${y + 35}Q${x + 13} ${y + 38} ${x + 10} ${y + 38}H${x + 9}Z`} fill={PAL.greenShade} />
      <rect x={x} y={y + 8} width="13" height="5" fill={PAL.lime} />
      <rect x={x + 9} y={y + 8} width="4" height="5" fill={PAL.leaf} />
    </g>
  );
}

export default {
  // "de verpakking": the packaging — a yellow blister card with a hang tab, and on it a clear
  // plastic bubble (light blue, standing out to the front) with two green batteries inside:
  // the product you see through the wrapping that is sold around it.
  'w.verpakking': () => {
    const { x, y, w, b, d } = CARD;
    const ox = d * DX;
    const oy = d * DY;
    const tx = x + (w - TAB.w) / 2;
    const ty = y - TAB.h;
    const fx = -BUB.d * DX;
    const fy = -BUB.d * DY;
    const bx0 = BUB.x;
    const by0 = BUB.y;
    const bx1 = BUB.x + BUB.w;
    const by1 = BUB.y + BUB.h;
    return (
      <g strokeLinejoin="round">
        <Ground cx={58} cy={103} rx={40} ry={4.5} />
        {/* The card's right edge and top edge (its thickness), with the tab's */}
        <path d={poly([x + w, b], [x + w, y], [x + w + ox, y + oy], [x + w + ox, b + oy])} fill={PAL.yellowShade} />
        <path d={poly([tx + TAB.w, y], [tx + TAB.w, ty + 4], [tx + TAB.w + ox, ty + 4 + oy], [tx + TAB.w + ox, y + oy])} fill={PAL.yellowShade} />
        <path d={poly([x, y], [tx, y], [tx + ox, y + oy], [x + ox, y + oy])} fill={PAL.yellowLight} />
        <path d={poly([tx + TAB.w, y], [x + w, y], [x + w + ox, y + oy], [tx + TAB.w + ox, y + oy])} fill={PAL.yellowLight} />
        <path d={`M${tx + 4} ${ty}H${tx + TAB.w - 4}L${tx + TAB.w - 4 + ox} ${ty + oy}H${tx + 4 + ox}Z`} fill={PAL.yellowLight} />
        {/* The card's front, with the tab */}
        <rect x={x} y={y} width={w} height={b - y} rx="2.5" fill={PAL.yellow} />
        <path d={`M${tx} ${y + 2}V${ty + 4}Q${tx} ${ty} ${tx + 4} ${ty}H${tx + TAB.w - 4}Q${tx + TAB.w} ${ty} ${tx + TAB.w} ${ty + 4}V${y + 2}Z`} fill={PAL.yellow} />
        {/* The hang slot in the tab */}
        <rect x={tx + 6} y={ty + 4} width={TAB.w - 12} height="5.5" rx="2.75" fill={PAL.slateDark} />
        {/* The print on the card: an orange band at the bottom */}
        <path d={`M${x} ${b - 11}H${x + w}V${b - 2.5}Q${x + w} ${b} ${x + w - 2.5} ${b}H${x + 2.5}Q${x} ${b} ${x} ${b - 2.5}Z`} fill={PAL.orange} />
        {/* The flat rim of the plastic, sealed onto the card round the bubble */}
        <rect x={bx0 - 4} y={by0 - 4} width={BUB.w + 8} height={BUB.h + 8} rx="4" fill={CLEAR} />
        {/* The plastic bubble: its top and right side, then its clear front */}
        <path d={poly([bx0 + fx, by0 + fy], [bx1 + fx, by0 + fy], [bx1, by0], [bx0, by0])} fill={CLEAR_TOP} />
        <path d={poly([bx1 + fx, by0 + fy], [bx1, by0], [bx1, by1], [bx1 + fx, by1 + fy])} fill={CLEAR_SIDE} />
        <rect x={bx0 + fx} y={by0 + fy} width={BUB.w} height={BUB.h} rx="3" fill={CLEAR} />
        {/* The product inside */}
        <Battery x={bx0 + fx + 6} y={by0 + fy + 6} />
        <Battery x={bx0 + fx + 21} y={by0 + fy + 6} />
        {/* Light on the plastic */}
        <Shine d={`M${bx0 + fx + 3.5} ${by0 + fy + 8}V${by1 + fy - 8}`} width={3} opacity={0.9} />
        <Shine d={`M${x + 4} ${y + 6}V${y + 30}`} color={PAL.yellowShine} width={3} opacity={0.6} />
      </g>
    );
  },
} as Record<string, () => JSX.Element>;
