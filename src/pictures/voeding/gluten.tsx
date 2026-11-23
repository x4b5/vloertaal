import type { JSX } from 'react';
import { Ground, PAL, Shade, Shine } from '../kit';

/** One grain of the ear, a drop shape pointing up, at (x, y), turned `r` degrees. */
const grain = (x: number, y: number, r: number, fill: string) => (
  <ellipse cx={x} cy={y} rx="5" ry="8.5" fill={fill} transform={`rotate(${r} ${x} ${y})`} />
);

export default {
  // "de gluten": the gluten (in wheat, so in bread and cake) — a golden ear of wheat standing up on the
  // left, and in front a loaf of bread and a slice of it: the wheat is in the bread.
  'w.gluten': () => (
    <g strokeLinejoin="round">
      <Ground cx={64} cy={104} rx={46} ry={4} />
      {/* The ear of wheat */}
      <path d="M30 104V40" stroke={PAL.yellowShade} strokeWidth="3.6" strokeLinecap="round" />
      <path d="M30 18V10M24 22L20 14M36 22L40 14" stroke={PAL.yellowShade} strokeWidth="1.8" strokeLinecap="round" />
      {grain(30, 24, 0, PAL.yellow)}
      {[34, 46, 58, 70].map((y) => (
        <g key={y}>
          {grain(24, y, -28, PAL.yellow)}
          {grain(36, y, 28, PAL.yellowShade)}
        </g>
      ))}
      {/* The loaf */}
      <Shade color={PAL.cardDark} opacity={1} at={[110, 88, 14, 30]}>
        <path d="M44 100V82Q44 58 74 58Q104 58 104 82V100Z" fill={PAL.cardShade} />
      </Shade>
      <path d="M58 66L64 76M72 62L78 72M86 64L92 74" stroke={PAL.cardDark} strokeWidth="3" strokeLinecap="round" />
      <Shine d="M50 80Q52 66 64 62" width={3} opacity={0.4} />
      {/* A slice in front */}
      <path d="M40 104V88Q34 84 36 78Q40 72 50 74Q58 70 64 76Q70 82 64 88V104Z" fill={PAL.cardShade} />
      <path d="M43 102V88Q39 85 40 80Q43 76 50 77Q57 74 61 79Q65 84 61 88V102Z" fill="#f0c48a" />
    </g>
  ),
} as Record<string, () => JSX.Element>;
