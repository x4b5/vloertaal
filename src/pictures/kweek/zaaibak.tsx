import type { JSX } from 'react';
import { Ground, PAL, Shine, r1 } from '../kit';

/** The depth axis of the slanted view: one unit of depth goes this far right and up. */
const DX = 0.6;
const DY = -0.8;

/** The tray: front-left corner of its top, width, depth and the height of its front. */
const X0 = 10;
const Y0 = 80;
const W = 76;
const D = 40;
const H = 16;
const COLS = 5;
const ROWS = 3;

/** A point on the top of the tray: u from left to right, v from front to back (both 0..1). */
const P = (u: number, v: number) => `${r1(X0 + u * W + v * D * DX)} ${r1(Y0 + v * D * DY)}`;
const quad = (u0: number, v0: number, u1: number, v1: number) =>
  `M${P(u0, v0)}L${P(u1, v0)}L${P(u1, v1)}L${P(u0, v1)}Z`;

/** Cells that hold a seedling: [column, row]. */
const SPROUTS = new Set(['0,2', '2,2', '4,2', '1,1', '3,1', '0,0', '2,0', '4,0']);

/** A seedling standing in the cell whose centre is (x, y). */
const seedling = (x: number, y: number) => (
  <g>
    <path d={`M${x} ${y}V${y - 9}`} stroke={PAL.green} strokeWidth="2.4" strokeLinecap="round" />
    <path d={`M${x} ${y - 8}Q${x - 9} ${y - 8} ${x - 10} ${y - 15}Q${x - 2} ${y - 15} ${x} ${y - 8}Z`} fill={PAL.leaf} />
    <path d={`M${x} ${y - 8}Q${x + 9} ${y - 8} ${x + 10} ${y - 15}Q${x + 2} ${y - 15} ${x} ${y - 8}Z`} fill={PAL.leafShade} />
  </g>
);

export default {
  // "de zaaibak": the seed tray — a black plastic tray seen from above and the front, its top a grid of
  // square cells filled with brown soil, small two-leaved green seedlings standing in most cells.
  'w.zaaibak': () => {
    const cells = [];
    for (let j = ROWS - 1; j >= 0; j -= 1) {
      for (let i = 0; i < COLS; i += 1) {
        const u0 = i / COLS;
        const v0 = j / ROWS;
        const eu = 0.022;
        const ev = 0.05;
        cells.push(<path key={`c${i}-${j}`} d={quad(u0 + eu, v0 + ev, u0 + 1 / COLS - eu, v0 + 1 / ROWS - ev)} fill={PAL.brown} />);
      }
    }
    const sprouts = [];
    for (let j = ROWS - 1; j >= 0; j -= 1) {
      for (let i = 0; i < COLS; i += 1) {
        if (!SPROUTS.has(`${i},${j}`)) continue;
        const u = (i + 0.5) / COLS;
        const v = (j + 0.5) / ROWS;
        sprouts.push(<g key={`s${i}-${j}`}>{seedling(r1(X0 + u * W + v * D * DX), r1(Y0 + v * D * DY + 2))}</g>);
      }
    }
    return (
      <g strokeLinejoin="round">
        <Ground cx={58} cy={104} rx={48} ry={4} />
        {/* The right side and the front of the tray */}
        <path d={`M${P(1, 0)}L${P(1, 1)}L${r1(X0 + W + D * DX)} ${r1(Y0 + D * DY + H)}L${X0 + W} ${Y0 + H}Z`} fill={PAL.slateDark} />
        <rect x={X0} y={Y0} width={W} height={H} fill={PAL.slate} />
        <path d={`M${X0 + 4} ${Y0 + 7}H${X0 + W - 4}`} stroke={PAL.slateDark} strokeWidth="1.6" strokeLinecap="round" />
        {/* The top: the dark grid with the soil in its cells */}
        <path d={quad(0, 0, 1, 1)} fill={PAL.slate} />
        {cells}
        <Shine d={`M${X0 + 3} ${Y0 + 3}H${X0 + 30}`} width={2.4} opacity={0.5} />
        {sprouts}
      </g>
    );
  },
} as Record<string, () => JSX.Element>;
