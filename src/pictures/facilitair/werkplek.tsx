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
  // "de werkplek": the workplace (the desk where someone works) — a desk set up for work: a big screen
  // with a blue window on it, a keyboard and a mouse in front and a red mug on the side.
  'w.werkplek': () => (
    <g strokeLinejoin="round">
      <Ground cx={60} cy={104} rx={50} ry={4.5} />
      {/* The legs */}
      {block(12, 74, 6, 30, 18, PAL.steel, PAL.mist, PAL.slate)}
      {block(92, 74, 6, 30, 18, PAL.steel, PAL.mist, PAL.slate)}
      {/* The top */}
      {block(8, 70, 94, 6, 22, PAL.cardShade, '#f0c48a', PAL.cardDark)}
      {/* The screen on its foot */}
      <path d="M52 62H72L68 58H56Z" fill={PAL.slate} />
      <rect x="59" y="46" width="6" height="14" fill={PAL.slate} />
      <rect x="26" y="12" width="72" height="44" rx="4" fill={PAL.slate} />
      <rect x="30" y="16" width="64" height="36" rx="2" fill={PAL.sky} />
      <rect x="36" y="22" width="30" height="22" rx="2" fill={PAL.ice} />
      <path d="M40 28H60M40 34H56M40 40H52" stroke={PAL.sky} strokeWidth="2" strokeLinecap="round" />
      <rect x="70" y="22" width="18" height="10" rx="2" fill={PAL.white} opacity=".7" />
      <Shine d="M29 18H44" width={2.4} opacity={0.5} />
      {/* The keyboard and mouse */}
      <path d="M26 72L30 66H70L66 72Z" fill={PAL.mist} />
      <path d="M33 68.5H65" stroke={PAL.steel} strokeWidth="1.6" strokeDasharray="3 2" />
      <ellipse cx="80" cy="68" rx="5" ry="3" fill={PAL.slate} />
      {/* The mug */}
      <rect x="10" y="54" width="12" height="14" rx="2" fill={PAL.red} />
      <rect x="17" y="54" width="5" height="14" rx="2" fill={PAL.redShade} />
      <ellipse cx="16" cy="54" rx="6" ry="2" fill={PAL.brown} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
