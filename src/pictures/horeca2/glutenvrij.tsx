import type { JSX } from 'react';
import { Ground, PAL, Shade, Shine } from '../kit';

/** One grain of the ear, a drop shape, at (x, y), turned `r` degrees. */
const grain = (x: number, y: number, r: number, fill: string) => (
  <ellipse cx={x} cy={y} rx="4.4" ry="7.4" fill={fill} transform={`rotate(${r} ${x} ${y})`} />
);

export default {
  // "glutenvrij": gluten-free (without gluten) — an ear of wheat (the sign of "de gluten") struck through in a
  // red ring with a red bar, and in front a round loaf of bread: this bread has no wheat in it.
  'w.glutenvrij': () => (
    <g strokeLinejoin="round">
      <Ground cx={74} cy={104} rx={36} ry={4} />
      {/* The ear of wheat in the ring */}
      <circle cx="42" cy="44" r="30" fill={PAL.white} />
      <path d="M42 70V30" stroke={PAL.yellowShade} strokeWidth="3" strokeLinecap="round" />
      {grain(42, 26, 0, PAL.yellow)}
      {[36, 46, 56].map((y) => (
        <g key={y}>
          {grain(37, y, -28, PAL.yellow)}
          {grain(47, y, 28, PAL.yellowShade)}
        </g>
      ))}
      <circle cx="42" cy="44" r="30" fill="none" stroke={PAL.red} strokeWidth="7" />
      <path d="M21 23L63 65" stroke={PAL.red} strokeWidth="7" strokeLinecap="round" />
      {/* The loaf */}
      <Shade color={PAL.cardDark} opacity={1} at={[112, 90, 14, 30]}>
        <path d="M48 102V88Q48 66 76 66Q104 66 104 88V102Z" fill={PAL.cardShade} />
      </Shade>
      <path d="M62 74L68 82M76 70L82 78M90 72L96 80" stroke={PAL.cardDark} strokeWidth="3" strokeLinecap="round" />
      <Shine d="M54 88Q56 76 66 72" width={3} opacity={0.45} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
