import type { JSX } from 'react';
import { Box, Ground, Move, PAL, r1 } from '../kit';

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

/** The cage: the front frame's left, right, top and bottom, and its depth. */
const L = 24;
const R = 82;
const T = 18;
const B = 90;
const D = 16;
const ox = r1(D * DX);
const oy = r1(D * DY);

/** A wire mesh over the rectangle (x0, y0)–(x1, y1): verticals and horizontals every `step`. */
const mesh = (x0: number, y0: number, x1: number, y1: number, step: number) => {
  let d = '';
  for (let x = x0 + step; x < x1 - 1; x += step) d += `M${x} ${y0}V${y1}`;
  for (let y = y0 + step; y < y1 - 1; y += step) d += `M${x0} ${y}H${x1}`;
  return d;
};

export default {
  // "de rolcontainer": the roll cage — a tall steel wire cage on a low base with four wheels, cardboard
  // boxes stacked inside behind the wire mesh.
  // On the intro card: the roll cage rolls in from the left to its place.
  // On the intro card it plays once and slowly (it happens once: it rolls in to its place).
  'w.rolcontainer': () => (
    <g strokeLinejoin="round">
      <Ground cx={57} cy={105} rx={40} ry={4} />
      <Move kind="from" dx={-26} once>
      {/* The back frame */}
      <path d={`M${L + ox} ${T + oy}H${R + ox}V${B + oy}`} fill="none" stroke={PAL.steel} strokeWidth="3.4" strokeLinecap="round" />
      {/* The boxes inside */}
      <Box x={L + 5} y={56} w={30} h={30} depth={9} />
      <Box x={L + 36} y={62} w={20} h={24} depth={8} tape={false} />
      <Box x={L + 8} y={30} w={26} h={26} depth={8} tape={false} />
      {/* The base and its wheels */}
      {block(L - 2, B, R - L + 4, 6, D, PAL.slate, PAL.steel, PAL.slateDark)}
      {[L + 6, R - 6].map((wx) => (
        <g key={wx}>
          <circle cx={wx} cy="99" r="6" fill={PAL.slateDark} />
          <circle cx={wx} cy="99" r="2.2" fill={PAL.mist} />
        </g>
      ))}
      {/* The side mesh on the right */}
      <path d={`M${R} ${T}L${R + ox} ${T + oy}V${B + oy}L${R} ${B}Z`} fill={PAL.slate} opacity=".18" />
      <path d={`M${R} ${T + 12}l${ox} ${oy}M${R} ${T + 24}l${ox} ${oy}M${R} ${T + 36}l${ox} ${oy}M${R} ${T + 48}l${ox} ${oy}M${R} ${T + 60}l${ox} ${oy}M${R + ox / 2} ${T + oy / 2}V${B + oy / 2}`} stroke={PAL.steel} strokeWidth="1.6" strokeLinecap="round" />
      {/* The top of the cage */}
      <path d={`M${L} ${T}L${L + ox} ${T + oy}H${R + ox}L${R} ${T}`} fill="none" stroke={PAL.mist} strokeWidth="3.4" strokeLinecap="round" />
      {/* The front mesh and frame */}
      <path d={mesh(L, T, R, B, 14.4)} stroke={PAL.steel} strokeWidth="1.6" strokeLinecap="round" />
      <rect x={L} y={T} width={R - L} height={B - T} fill="none" stroke={PAL.mist} strokeWidth="3.6" />
      <path d={`M${R} ${T}V${B}`} stroke={PAL.steel} strokeWidth="3.6" />
      <path d={`M${R + ox} ${T + oy}V${B + oy}`} stroke={PAL.steel} strokeWidth="3.4" strokeLinecap="round" />
      </Move>
    </g>
  ),
} as Record<string, () => JSX.Element>;
