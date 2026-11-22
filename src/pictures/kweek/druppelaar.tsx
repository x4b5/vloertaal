import type { JSX } from 'react';
import { Ground, PAL, Shine, r1 } from '../kit';

/** The depth axis of the slanted view: one unit of depth goes this far right and up. */
const DX = 0.6;
const DY = -0.8;

/** Rockwool fibres (the block's top) and the shade of its white wrap. */
const WOOL = '#f0c48a';

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
  // "de druppelaar": the dripper — a black drip line with a dark emitter, a thin tube down to a dripper
  // peg stuck into a rockwool block, and a big blue drop falling from the peg onto the block.
  'w.druppelaar': () => (
    <g strokeLinejoin="round">
      <Ground cx={58} cy={104} rx={44} ry={4} />
      {/* The rockwool block: white wrap, fibrous top, a wet spot */}
      {block(18, 70, 66, 32, 26, PAL.paperShade, WOOL, PAL.mist)}
      <path d="M18 70H84" stroke={WOOL} strokeWidth="3" />
      <ellipse cx="54" cy="61" rx="16" ry="5" fill={PAL.cardShade} opacity=".55" />
      <Shine d="M22 76V94" width={3} opacity={0.9} />
      {/* The black drip line across the top, with the emitter on it */}
      <path d="M10 22Q60 30 110 20" fill="none" stroke={PAL.slateDark} strokeWidth="7" strokeLinecap="round" />
      <rect x="28" y="18" width="14" height="13" rx="3" fill={PAL.slate} />
      {/* The thin tube from the emitter down to the peg */}
      <path d="M35 30C35 44 70 30 72 44" fill="none" stroke={PAL.slateDark} strokeWidth="3.4" strokeLinecap="round" />
      {/* The dripper peg, stuck slanting into the block */}
      <path d="M72 46L62 62" stroke={PAL.slate} strokeWidth="5" strokeLinecap="round" />
      <rect x="66.5" y="40" width="10" height="8" rx="2.4" fill={PAL.slateDark} transform="rotate(32 71.5 44)" />
      {/* The falling water drop */}
      <path d="M50 36Q58 47 58 51.5A8 8 0 0 1 42 51.5Q42 47 50 36Z" fill={PAL.sky} />
      <path d="M45.6 52Q45.8 48.8 47.6 46.8" stroke={PAL.ice} strokeWidth="1.8" strokeLinecap="round" fill="none" />
    </g>
  ),
} as Record<string, () => JSX.Element>;
