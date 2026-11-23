import type { JSX } from 'react';
import { Ground, PAL, Shine } from '../kit';

/** One carrot cube: front face at (x, y), size s, the top and right side faces behind it. */
const cube = (x: number, y: number, s: number, key: string) => {
  const dx = s * 0.42;
  const dy = -s * 0.34;
  return (
    <g key={key}>
      <path d={`M${x} ${y}L${x + dx} ${y + dy}H${x + s + dx}L${x + s} ${y}Z`} fill={PAL.orangeLight} />
      <path d={`M${x + s} ${y}L${x + s + dx} ${y + dy}V${y + s + dy}L${x + s} ${y + s}Z`} fill={PAL.orangeShade} />
      <rect x={x} y={y} width={s} height={s} fill={PAL.orange} />
    </g>
  );
};

export default {
  // "de blokjes": the cubes (small square pieces) — a neat heap of orange carrot cubes on a wooden board, each a
  // little block with a light top and a darker right side; no knife (that is "hakken" and "snijden").
  'w.blokjes': () => (
    <g strokeLinejoin="round">
      <Ground cx={60} cy={104} rx={52} ry={4} />
      {/* The board, seen from above at a slant */}
      <path d="M8 78L26 58H112L94 78Z" fill={PAL.card} />
      <path d="M8 78H94V86H8Z" fill={PAL.cardShade} />
      <path d="M94 78L112 58V66L94 86Z" fill={PAL.cardDark} />
      <Shine d="M18 75L30 62" width={2.6} opacity={0.4} />
      {/* The cubes: back row, front row, two on top */}
      {[34, 50, 66, 82].map((x, i) => cube(x, 54, 14, `b${i}`))}
      {[26, 42, 58, 74].map((x, i) => cube(x, 64, 14, `f${i}`))}
      {[38, 56].map((x, i) => cube(x, 44, 14, `t${i}`))}
      {cube(64, 34, 14, 'top')}
      <Shine d="M30 66H36" width={2.2} opacity={0.6} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
