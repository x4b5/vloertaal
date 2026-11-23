import type { JSX } from 'react';
import { Ground, PAL } from '../kit';

/** The depth axis of the slanted view: one unit of depth goes this far right and up. */
const DX = 0.6;
const DY = -0.8;
const X = 14;
const Y = 46;
const W = 62;
const H = 56;
const D = 34;
const ox = D * DX;
const oy = D * DY;

/** Layers of pressed cardboard: wavy lines across a face from (x0, y) to (x1, y + dy). */
const layer = (x0: number, y0: number, x1: number, y1: number) =>
  `M${x0} ${y0}Q${(x0 + x1) / 2 - 6} ${(y0 + y1) / 2 + 2} ${(x0 + x1) / 2} ${(y0 + y1) / 2}T${x1} ${y1}`;

export default {
  // "de baal": the bale — one pressed block of cardboard in a slanted view: the flat layers of
  // cardboard show on the front and the side, bits of printed cardboard between them, and three
  // steel baling wires round it.
  'w.baal': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      <Ground cx={58} cy={103} rx={46} ry={4.5} />
      {/* Top, side, front */}
      <path d={`M${X} ${Y}L${X + W} ${Y}L${X + W + ox} ${Y + oy}L${X + ox} ${Y + oy}Z`} fill="#f0c48a" />
      <path d={`M${X + W} ${Y}L${X + W + ox} ${Y + oy}V${Y + H + oy}L${X + W} ${Y + H}Z`} fill={PAL.cardShade} />
      <rect x={X} y={Y} width={W} height={H} rx="2" fill={PAL.card} />
      {/* The pressed layers */}
      <g fill="none" stroke={PAL.cardDark} strokeWidth="1.8" opacity=".7">
        {[8, 16, 24, 32, 40, 48].map((t) => (
          <path key={t} d={layer(X + 2, Y + t, X + W - 2, Y + t)} />
        ))}
        {[8, 16, 24, 32, 40, 48].map((t) => (
          <path key={`s${t}`} d={`M${X + W + 1} ${Y + t}L${X + W + ox - 1} ${Y + t + oy}`} />
        ))}
      </g>
      {/* Bits of printed cardboard and paper */}
      <rect x={X + 8} y={Y + 18} width="12" height="4" rx="1.5" fill={PAL.blue} />
      <rect x={X + 38} y={Y + 34} width="14" height="4" rx="1.5" fill={PAL.red} />
      <rect x={X + 22} y={Y + 42} width="10" height="3.6" rx="1.5" fill={PAL.white} />
      <rect x={X + 30} y={Y + 10} width="9" height="3.6" rx="1.5" fill={PAL.leaf} />
      {/* The three wires: down the front, over the top, down the side */}
      <g fill="none" stroke={PAL.slate} strokeWidth="2.6">
        {[14, 31, 48].map((u) => (
          <path key={u} d={`M${X + u} ${Y + H}V${Y}L${X + u + ox} ${Y + oy}`} />
        ))}
        <path d={`M${X + W} ${Y + 18}L${X + W + ox} ${Y + 18 + oy}M${X + W} ${Y + 40}L${X + W + ox} ${Y + 40 + oy}`} />
      </g>
      <path d={`M${X + 3} ${Y + 2.4}H${X + W - 4}`} stroke="#f6d3a2" strokeWidth="2.2" />
    </g>
  ),
} as Record<string, () => JSX.Element>;
