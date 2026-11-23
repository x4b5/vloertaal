import type { JSX } from 'react';
import { Ground, PAL, Shine } from '../kit';

/** A flower: five round petals round a yellow heart, on a short stem with two leaves. */
const flower = (x: number, y: number, petal: string, stem: number, key: number) => (
  <g key={key}>
    <path d={`M${x} ${y}V${y + stem}`} stroke={PAL.greenShade} strokeWidth="2.6" strokeLinecap="round" />
    <path d={`M${x} ${y + stem - 4}Q${x - 9} ${y + stem - 8} ${x - 8} ${y + stem - 14}Q${x - 1} ${y + stem - 10} ${x} ${y + stem - 4}Z`} fill={PAL.green} />
    <path d={`M${x} ${y + stem - 6}Q${x + 9} ${y + stem - 10} ${x + 8} ${y + stem - 16}Q${x + 1} ${y + stem - 12} ${x} ${y + stem - 6}Z`} fill={PAL.leaf} />
    {[0, 72, 144, 216, 288].map((a) => (
      <circle key={a} cx={x + Math.cos(((a - 90) * Math.PI) / 180) * 4.6} cy={y + Math.sin(((a - 90) * Math.PI) / 180) * 4.6} r="4" fill={petal} />
    ))}
    <circle cx={x} cy={y} r="2.8" fill={PAL.yellowLight} />
  </g>
);

export default {
  // "het perk": the flower bed — a low bed with a wooden edge, dark soil, and two rows of bright flowers
  // (red, yellow, purple) standing in it.
  'w.perk': () => (
    <g strokeLinejoin="round">
      <Ground cx={60} cy={102} rx={52} ry={4.5} />
      {/* The bed: dark soil on top, the wooden edge in front and on the right */}
      <path d="M10 80L26 60H110L96 80Z" fill={PAL.brown} />
      <path d="M96 80L110 60V74L96 96Z" fill={PAL.cardDark} />
      <rect x="10" y="80" width="86" height="16" rx="2" fill={PAL.card} />
      <path d="M12 88H94" stroke={PAL.cardShade} strokeWidth="1.6" strokeLinecap="round" />
      <path d="M38 80V96M68 80V96" stroke={PAL.cardShade} strokeWidth="1.6" strokeLinecap="round" />
      <Shine d="M14 83H50" color="#f6d3a2" width={2.2} opacity={0.9} />
      {/* The back row, then the front row */}
      {[
        [38, 38, PAL.purple],
        [60, 36, PAL.red],
        [82, 38, PAL.yellow],
        [102, 40, PAL.purple],
      ].map(([x, y, c], i) => flower(x as number, y as number, c as string, 26, i))}
      {[
        [24, 54, PAL.yellow],
        [46, 52, PAL.red],
        [68, 54, PAL.purple],
        [88, 52, PAL.red],
      ].map(([x, y, c], i) => flower(x as number, y as number, c as string, 24, 10 + i))}
    </g>
  ),
} as Record<string, () => JSX.Element>;
