import type { JSX } from 'react';
import { Ground, Move, PAL, Shine, r1 } from '../kit';

/** The depth axis of the slanted view: one unit of depth goes this far right and up. */
const DX = 0.6;
const DY = -0.8;

/** A block in the slanted view: front rectangle (x, y, w, h), its top and right faces `d` deep. */
const block = (x: number, y: number, w: number, h: number, d: number, front: string, top: string, side: string) => {
  const ox = r1(d * DX);
  const oy = r1(d * DY);
  return (
    <g>
      <path d={`M${x} ${y}L${x + w} ${y}L${r1(x + w + ox)} ${r1(y + oy)}L${r1(x + ox)} ${r1(y + oy)}Z`} fill={top} />
      <path d={`M${x + w} ${y}L${r1(x + w + ox)} ${r1(y + oy)}L${r1(x + w + ox)} ${r1(y + h + oy)}L${x + w} ${y + h}Z`} fill={side} />
      <rect x={x} y={y} width={w} height={h} fill={front} />
    </g>
  );
};

export default {
  // "de bankschroef": the bench vise — a heavy blue vise on a dark base, two jaws with steel jaw plates
  // clamping an upright steel bar, the screw coming out of the front jaw with its T-handle.
  'w.bankschroef': () => (
    <g strokeLinejoin="round">
      <Ground cx={60} cy={104} rx={46} ry={4} />
      {/* The dark base plate and the blue body (the slide) */}
      {block(20, 92, 76, 10, 16, PAL.slate, PAL.steel, PAL.slateDark)}
      {block(34, 76, 52, 16, 12, PAL.blue, PAL.blueLight, PAL.blueShade)}
      {/* The dark gap between the jaws */}
      <path d="M50 44H66L74.4 32.8V66H50Z" fill={PAL.slateDark} />
      {/* The moving jaw (left) with its dark jaw plate, and the screw with its T-handle: they slide in together */}
      <Move kind="from" dx={-22}>
        {block(28, 44, 22, 32, 14, PAL.blue, PAL.blueLight, PAL.blueShade)}
        <rect x="45" y="44" width="5" height="18" fill={PAL.slate} />
      </Move>
      {/* The steel bar in the jaws */}
      {block(50, 20, 16, 42, 14, PAL.mist, PAL.paper, PAL.steel)}
      <Shine d="M54 25V54" width={2.6} opacity={0.9} />
      {/* The fixed jaw (right) with its dark jaw plate */}
      {block(66, 44, 26, 32, 14, PAL.blue, PAL.blueLight, PAL.blueShade)}
      <rect x="66" y="44" width="5" height="18" fill={PAL.slate} />
      <Shine d="M76 50V68" width={3} opacity={0.6} />
      {/* The screw and its T-handle */}
      <Move kind="from" dx={-22}>
        <rect x="15" y="58" width="15" height="8" rx="2" fill={PAL.steel} />
        <path d="M15 40V84" stroke={PAL.slate} strokeWidth="6" strokeLinecap="round" />
        <circle cx="15" cy="39" r="5.5" fill={PAL.slateDark} />
        <circle cx="15" cy="85" r="5.5" fill={PAL.slateDark} />
        <circle cx="16" cy="62" r="6" fill={PAL.slate} />
      </Move>
    </g>
  ),
} as Record<string, () => JSX.Element>;
