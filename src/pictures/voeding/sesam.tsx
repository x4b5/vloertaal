import type { JSX } from 'react';
import { Ground, PAL, Shade, Shine } from '../kit';

const SEEDS: [number, number, number][] = [
  [34, 46, -20], [44, 40, 10], [54, 36, -10], [66, 36, 20], [78, 40, -15], [88, 46, 15],
  [30, 56, 30], [40, 52, -30], [50, 48, 15], [62, 46, -20], [72, 48, 25], [84, 54, -10], [94, 58, 20],
  [44, 62, 10], [58, 58, -15], [70, 60, 30], [82, 64, -25],
];

export default {
  // "de sesam": the sesame (small seeds, for example on bread) — a round golden bread roll whose top is
  // covered with many small pale sesame seeds, and a few loose seeds in front of it.
  'w.sesam': () => (
    <g strokeLinejoin="round">
      <Ground cx={60} cy={100} rx={48} ry={5} />
      {/* The roll */}
      <path d="M14 86Q14 98 26 98H94Q106 98 106 86Z" fill={PAL.cardShade} />
      <Shade color={PAL.cardShade} opacity={1} at={[108, 70, 18, 36]}>
        <path d="M14 86Q12 32 60 30Q108 32 106 86Z" fill={PAL.card} />
      </Shade>
      <Shine d="M24 64Q28 46 42 38" width={3.4} opacity={0.45} />
      {/* The seeds */}
      {SEEDS.map(([x, y, r]) => (
        <ellipse key={`${x}-${y}`} cx={x} cy={y} rx="2.4" ry="4" fill="#fff6e0" transform={`rotate(${r} ${x} ${y})`} />
      ))}
      {/* Loose seeds in front */}
      {([[30, 104, 70], [42, 106, -60], [78, 105, 80], [90, 103, -70], [60, 107, 90]] as [number, number, number][]).map(([x, y, r]) => (
        <g key={`l${x}`}>
          <ellipse cx={x} cy={y + 1} rx="2.4" ry="4" fill={PAL.cardShade} transform={`rotate(${r} ${x} ${y + 1})`} />
          <ellipse cx={x} cy={y} rx="2.4" ry="4" fill="#fff6e0" transform={`rotate(${r} ${x} ${y})`} />
        </g>
      ))}
    </g>
  ),
} as Record<string, () => JSX.Element>;
