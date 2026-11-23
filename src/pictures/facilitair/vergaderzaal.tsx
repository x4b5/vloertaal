import type { JSX } from 'react';
import { Ground, PAL, Shine, r1 } from '../kit';

/** The depth axis of the slanted view: one unit of depth goes this far right and up. */
const DX = 0.6;
const DY = -0.8;

/** A chair seen from behind: its back and seat edge, the top centre of the back at (x, y). */
const chair = (x: number, y: number, k: number, key: string) => (
  <g key={key} transform={`translate(${x} ${y}) scale(${k})`}>
    <rect x="-9" y="0" width="18" height="20" rx="5" fill={PAL.slate} />
    <rect x="3" y="0" width="6" height="20" rx="3" fill={PAL.slateDark} />
  </g>
);

export default {
  // "de vergaderzaal": the meeting room — one long wooden table in the slanted view with chairs all
  // round it (three along the back, two at the front, seen from behind), a big screen on the wall.
  'w.vergaderzaal': () => {
    const x0 = 12;
    const y0 = 80;
    const W = 74;
    const D = 40;
    const ox = r1(D * DX);
    const oy = r1(D * DY);
    return (
      <g strokeLinejoin="round">
        <Ground cx={62} cy={104} rx={52} ry={4} />
        {/* The screen on the wall */}
        <rect x="64" y="8" width="44" height="28" rx="3" fill={PAL.slateDark} />
        <rect x="67" y="11" width="38" height="22" rx="1.5" fill={PAL.sky} />
        <path d="M72 28L80 20L86 25L94 16L100 22" fill="none" stroke={PAL.white} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
        {/* The chairs along the back */}
        {[0.22, 0.52, 0.82].map((f, i) => chair(r1(x0 + ox + W * f), r1(y0 + oy - 14), 0.9, `b${i}`))}
        {/* The table: its top, its front edge, its right end, two legs */}
        <path d={`M${x0} ${y0}H${x0 + W}L${x0 + W + ox} ${y0 + oy}H${x0 + ox}Z`} fill={PAL.card} />
        <path d={`M${x0 + W} ${y0}L${x0 + W + ox} ${y0 + oy}V${y0 + oy + 6}L${x0 + W} ${y0 + 6}Z`} fill={PAL.cardDark} />
        <rect x={x0} y={y0} width={W} height="6" fill={PAL.cardShade} />
        <path d={`M${x0 + 6} ${y0 + 6}V104M${x0 + W - 6} ${y0 + 6}V104`} stroke={PAL.cardDark} strokeWidth="4.5" strokeLinecap="round" />
        <Shine d={`M${x0 + ox + 4} ${y0 + oy + 4}H${x0 + ox + 30}`} width={2.6} opacity={0.7} />
        {/* Notepads on the table */}
        <rect x="30" y="66" width="12" height="7" rx="1.5" fill={PAL.white} />
        <rect x="56" y="60" width="12" height="7" rx="1.5" fill={PAL.white} />
        {/* The chairs at the front, seen from behind */}
        {chair(34, 80, 1.15, 'f1')}
        {chair(68, 80, 1.15, 'f2')}
      </g>
    );
  },
} as Record<string, () => JSX.Element>;
