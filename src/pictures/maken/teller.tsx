import type { JSX } from 'react';
import { PAL, Shine, r1 } from '../kit';

/** The depth axis of the slanted view: one unit of depth goes this far right and up. */
const DX = 0.6;
const DY = -0.8;

/** The counter box: front bottom left corner, width, depth, height. */
const HX = 12;
const HY = 102;
const W = 72;
const D = 24;
const H = 44;

/** How flat a round part looks lying on the top: its height over its width. */
const FLAT = 0.42;

type P = [number, number];
/** A point on the box: u along the front, v into the card, z up. */
const iso = (u: number, v: number, z = 0): P => [r1(HX + u + v * DX), r1(HY - z + v * DY)];
const quad = (...p: P[]) => `M${p.map(([x, y]) => `${x} ${y}`).join('L')}Z`;

/** The outline of an upright cylinder (side and top) standing at (cx, cy), radius r, height h. */
const can = (cx: number, cy: number, r: number, h: number) => {
  const ry = r1(r * FLAT);
  return `M${r1(cx - r)} ${cy - h}V${cy}A${r} ${ry} 0 0 0 ${r1(cx + r)} ${cy}V${cy - h}A${r} ${ry} 0 0 0 ${r1(cx - r)} ${cy - h}Z`;
};
/** The right half of a cylinder's side, for its shade. */
const canRight = (cx: number, cy: number, r: number, h: number) => {
  const ry = r1(r * FLAT);
  const x0 = r1(cx + r * 0.35);
  const y0 = r1(cy + ry * Math.sqrt(1 - 0.35 * 0.35));
  return `M${x0} ${r1(y0 - h)}V${y0}A${r} ${ry} 0 0 0 ${r1(cx + r)} ${cy}V${cy - h}Z`;
};

/** An upright cylinder: its side with the right part in shade, then its lit top. */
const cylinder = (cx: number, cy: number, r: number, h: number, top: string, side: string, deep: string) => (
  <g>
    <path d={can(cx, cy, r, h)} fill={side} />
    <path d={canRight(cx, cy, r, h)} fill={deep} />
    <ellipse cx={cx} cy={cy - h} rx={r} ry={r1(r * FLAT)} fill={top} />
  </g>
);

/** The number wheels: four alike white drums in the window, shaded top and bottom so they read as rolling. */
const WHEELS = 4;
const WW = 12.5;
const GAP = 2;
const WY = 67;
const WH = 25;

const wheel = (i: number) => {
  const x = r1(HX + W / 2 - (WHEELS * WW + (WHEELS - 1) * GAP) / 2 + i * (WW + GAP));
  return (
    <g key={i}>
      <rect x={x} y={WY} width={WW} height={WH} rx="1.6" fill={PAL.white} />
      <rect x={x} y={WY} width={WW} height="4" rx="1.6" fill={PAL.paperShade} />
      <rect x={x} y={WY + WH - 4} width={WW} height="4" rx="1.6" fill={PAL.paperShade} />
      <path d={`M${r1(x + 3.6)} ${r1(WY + WH / 2)}H${r1(x + WW - 3.6)}`} stroke={PAL.slate} strokeWidth="3" strokeLinecap="round" />
    </g>
  );
};

export default {
  // "de teller": the counter — a sturdy blue counter box with a row of white number wheels in a
  // dark window (four alike rolling drums, one short dark bar each, no digits) and a big orange press button on top.
  'w.teller': () => {
    const [cx, cy] = iso(W / 2, D / 2, H);
    return (
      <g strokeLinejoin="round">
        {/* Shadow on the ground, under the box's footprint */}
        <path d={quad(iso(-3, -2, -2), iso(W + 4, -2, -2), iso(W + 4, D + 2, -2), iso(-3, D + 2, -2))} fill="#000" opacity="0.14" />
        {/* The box: right side, front, top */}
        <path d={quad(iso(W, 0), iso(W, D), iso(W, D, H), iso(W, 0, H))} fill={PAL.blueShade} />
        <path d={quad(iso(0, 0), iso(W, 0), iso(W, 0, H), iso(0, 0, H))} fill={PAL.blue} />
        <path d={quad(iso(0, 0, H), iso(W, 0, H), iso(W, D, H), iso(0, D, H))} fill={PAL.blueLight} />
        <Shine d={`M${iso(5, 0, H - 4).join(' ')}L${iso(30, 0, H - 4).join(' ')}`} width={2.4} opacity={0.55} />
        {/* The window with the number wheels */}
        <rect x={HX + 4} y={WY - 3} width={W - 8} height={WH + 6} rx="3" fill={PAL.slateDark} />
        {Array.from({ length: WHEELS }, (_, i) => wheel(i))}
        {/* The reset knob on the side */}
        <ellipse cx={iso(W, D / 2, H / 2)[0]} cy={iso(W, D / 2, H / 2)[1]} rx="3.6" ry="6" fill={PAL.slate} />
        {/* The press button: a steel stem and a big orange cap */}
        {cylinder(cx, cy, 6, 10, PAL.mist, PAL.steel, '#5d6a75')}
        {cylinder(cx, cy - 10, 16, 7, PAL.orangeLight, PAL.orange, PAL.orangeShade)}
        <Shine d={`M${r1(cx - 11)} ${r1(cy - 18.5)}Q${r1(cx - 6)} ${r1(cy - 22)} ${r1(cx + 1)} ${r1(cy - 22.5)}`} width={2.6} opacity={0.7} />
      </g>
    );
  },
} as Record<string, () => JSX.Element>;
