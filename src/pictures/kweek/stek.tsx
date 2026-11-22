import type { JSX } from 'react';
import { Ground, PAL, Shine, r1 } from '../kit';

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
  // "de stek": the cutting — a short green stem with two big leaves, its light, slanting cut end just
  // going into the hole of a small brown block of soil; a little knife lies beside it.
  'w.stek': () => (
    <g strokeLinejoin="round">
      <Ground cx={60} cy={104} rx={46} ry={4} />
      {/* The block of soil, with the planting hole on top */}
      {block(26, 76, 40, 26, 18, '#8a5530', '#a46a3e', PAL.brown)}
      <path d="M30 84Q34 82 36 86M44 92Q48 90 50 94M54 82Q57 80 60 83" fill="none" stroke={PAL.brown} strokeWidth="1.6" strokeLinecap="round" />
      <ellipse cx="52" cy="69" rx="7" ry="3.4" fill="#3a2212" />
      {/* The stem, its cut end slanting into the hole */}
      <path d="M58 24L52 68" stroke={PAL.green} strokeWidth="6" strokeLinecap="round" />
      <path d="M49 66L55.4 70.6L52.6 64.4Z" fill={PAL.lime} />
      <path d="M49.2 64.8L55.6 69.4" stroke={PAL.lime} strokeWidth="3.4" strokeLinecap="round" />
      <path d="M55.5 30L52 56" stroke={PAL.lime} strokeWidth="1.6" strokeLinecap="round" opacity="0.7" />
      {/* The two leaves */}
      <path d="M56 40Q38 46 22 36Q34 22 56 40Z" fill={PAL.leaf} />
      <path d="M56 40Q40 38 28 36" fill="none" stroke={PAL.leafShade} strokeWidth="1.6" strokeLinecap="round" />
      <path d="M58 30Q76 34 92 20Q76 10 58 30Z" fill={PAL.leafShade} />
      <path d="M58 30Q74 26 86 20" fill="none" stroke={PAL.green} strokeWidth="1.6" strokeLinecap="round" />
      <path d="M58 24Q60 16 66 14Q64 22 58 24Z" fill={PAL.leaf} />
      <Shine d="M30 34Q38 31 46 34" width={2.4} opacity={0.7} />
      {/* The knife beside it */}
      <path d="M78 98L96 92L106 87Q104 92 96 96L80 101Z" fill={PAL.mist} />
      <path d="M80 101L96 96Q104 92 106 87" fill="none" stroke={PAL.steel} strokeWidth="1.6" strokeLinecap="round" />
      <path d="M66 103L80 99" stroke={PAL.orange} strokeWidth="7" strokeLinecap="round" />
      <path d="M68 101L76 98.6" stroke={PAL.orangeLight} strokeWidth="1.6" strokeLinecap="round" />
    </g>
  ),
} as Record<string, () => JSX.Element>;
