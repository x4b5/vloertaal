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
  // "de balie": the front desk, the counter — an empty high wooden counter in the slanted view, a white
  // ledge on top, a lower desk behind it with a screen, and a desk bell on the ledge (no person: that is
  // "de receptie").
  'w.balie': () => (
    <g strokeLinejoin="round">
      <Ground cx={58} cy={104} rx={50} ry={4} />
      {/* The screen on the desk behind, facing away from us (its back and stand) */}
      <rect x="60" y="34" width="5" height="16" rx="1.5" fill={PAL.slateDark} />
      {block(46, 22, 32, 20, 4, PAL.slate, PAL.steel, PAL.slateDark)}
      {/* The counter: wooden front, a light ledge on top */}
      {block(12, 56, 82, 46, 16, PAL.card, PAL.cardShade, PAL.cardDark)}
      {block(8, 48, 90, 8, 22, PAL.paperShade, PAL.white, PAL.mist)}
      {/* A dark band (the kick plate) and two wooden panels */}
      <rect x="12" y="96" width="82" height="6" fill={PAL.cardDark} />
      <path d="M40 62V90M67 62V90" stroke={PAL.cardShade} strokeWidth="2" strokeLinecap="round" />
      <Shine d="M17 63V88" width={3} opacity={0.5} />
      {/* The desk bell on the ledge */}
      <ellipse cx="34" cy="43" rx="12" ry="3.4" fill={PAL.slate} />
      <path d="M23 42A11 11 0 0 1 45 42Z" fill={PAL.yellow} />
      <path d="M38 32.2A11 11 0 0 1 45 42H38Z" fill={PAL.yellowShade} />
      <rect x="32" y="26" width="4" height="6" rx="1.5" fill={PAL.slate} />
      <Shine d="M27.5 38.5Q28.5 35 32 33.5" color={PAL.yellowShine} width={2.4} opacity={0.85} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
