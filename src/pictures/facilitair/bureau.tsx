import type { JSX } from 'react';
import { Ground, PAL, Shine, r1 } from '../kit';

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
  // "het bureau": the desk — an empty wooden office desk seen from the front left: a wide top, a grey
  // leg panel on the left and a block of three drawers with steel handles on the right.
  'w.bureau': () => (
    <g strokeLinejoin="round">
      <Ground cx={62} cy={104} rx={50} ry={4.5} />
      {/* The back leg on the right (seen under the top) */}
      {block(14, 54, 8, 48, 26, PAL.steel, PAL.mist, PAL.slate)}
      {/* The drawer block */}
      {block(66, 54, 32, 48, 26, PAL.card, '#f0c48a', PAL.cardShade)}
      {[58, 74, 90].map((y) => (
        <g key={y}>
          <rect x="69" y={y} width="26" height="12" rx="2" fill="#f0c48a" />
          <rect x="76" y={y + 5} width="12" height="3.4" rx="1.7" fill={PAL.steel} />
        </g>
      ))}
      {/* The top */}
      {block(6, 46, 98, 8, 26, PAL.cardShade, '#f0c48a', PAL.cardDark)}
      <Shine d="M20 40H64" color={PAL.white} width={3} opacity={0.6} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
