import type { JSX } from 'react';
import { PAL, r1 } from '../kit';

/** The depth axis of the slanted view: one unit of depth goes this far right and up. */
const DX = 0.6;
const DY = -0.8;

/** The wall plate: front face top left, size, thickness into the wall. */
const X = 18;
const Y = 24;
const S = 78;
const T = 7;
/** The rocker: front face left, top, width, height; how far its bottom stands out of the plate. */
const RX = 35;
const RY = 33;
const RW = 44;
const RH = 60;
const OUT = 9;

export default {
  // "de schakelaar": the light switch — a white wall plate with one big rocker, tilted: the top half pushed in,
  // the bottom half standing out (its wedge-shaped side and bottom edge show)
  'w.schakelaar': () => {
    const dx = r1(T * DX);
    const dy = r1(T * DY);
    // The rocker's bottom stands OUT towards the viewer: down-left by OUT along the depth axis.
    const ox = r1(-OUT * DX);
    const oy = r1(-OUT * DY);
    const mid = RY + RH / 2;
    // Front face of the rocker: the top edge lies in the plate, the bottom edge is moved out.
    const top: [number, number][] = [[RX, RY], [RX + RW, RY], [RX + RW + ox * 0.5, mid + oy * 0.5], [RX + ox * 0.5, mid + oy * 0.5]];
    const bottom: [number, number][] = [[RX + ox * 0.5, mid + oy * 0.5], [RX + RW + ox * 0.5, mid + oy * 0.5], [RX + RW + ox, RY + RH + oy], [RX + ox, RY + RH + oy]];
    const poly = (p: [number, number][]) => `M${p.map(([x, y]) => `${r1(x)} ${r1(y)}`).join('L')}Z`;
    return (
      <g strokeLinejoin="round">
        {/* The plate's top edge (lit) and right edge (shade), going back into the wall */}
        <path d={`M${X + 4} ${Y}L${X + 4 + dx} ${Y + dy}H${X + S + dx - 2}L${X + S} ${Y + 2}Z`} fill={PAL.paperShade} />
        <path d={`M${X + S} ${Y + 3}L${X + S + dx} ${Y + dy + 3}V${Y + S + dy - 4}L${X + S} ${Y + S - 4}Z`} fill={PAL.line} />
        {/* The front face */}
        <rect x={X} y={Y} width={S} height={S} rx="9" fill={PAL.paperShade} />
        <rect x={X} y={Y} width={S} height={S - 4} rx="9" fill={PAL.paper} />
        {/* The opening the rocker sits in */}
        <rect x={RX - 3} y={RY - 3} width={RW + 6} height={RH + 6} rx="4" fill={PAL.line} />
        {/* The rocker's right side: a wedge, thin at the top, thick at the bottom */}
        <path d={poly([[RX + RW, RY], [RX + RW + ox, RY + RH + oy], [RX + RW, RY + RH]])} fill={PAL.steel} />
        {/* Its bottom edge, standing out */}
        <path d={poly([[RX + ox, RY + RH + oy], [RX + RW + ox, RY + RH + oy], [RX + RW, RY + RH], [RX, RY + RH]])} fill={PAL.steel} />
        {/* The front: the top half tilted back (a little darker), the bottom half facing the light */}
        <path d={poly(top)} fill={PAL.paperShade} />
        <path d={poly(bottom)} fill={PAL.white} />
        <path d={`M${r1(RX + ox * 0.5 + 2)} ${r1(mid + oy * 0.5)}H${r1(RX + RW + ox * 0.5 - 2)}`} stroke={PAL.mist} strokeWidth="1.6" strokeLinecap="round" />
      </g>
    );
  },
} as Record<string, () => JSX.Element>;
