import type { JSX } from 'react';
import { Ground, PAL, Shade, Shine } from '../kit';

/** A whole peanut shell: two lobes with a waist, a criss-cross pattern. */
const shell = (
  <g>
    <Shade color={PAL.cardShade} opacity={1} at={[70, 62, 12, 50]}>
      <path d="M40 16Q58 14 60 32Q60 42 56 48Q60 56 60 66Q58 86 40 86Q22 86 22 66Q22 56 26 48Q22 42 22 32Q24 14 40 16Z" fill="#e8c08c" />
    </Shade>
    <path d="M28 28L50 52M34 22L54 42M26 40L44 60M30 62L52 82M28 74L42 86M36 60L54 74M48 24L28 44M54 34L32 56M54 58L30 80M56 70L42 84" stroke={PAL.cardShade} strokeWidth="1.6" strokeLinecap="round" opacity=".8" />
    <Shine d="M28 30Q30 22 38 20" width={3} opacity={0.6} />
  </g>
);

export default {
  // "de pinda": the peanut — a whole peanut in its pale, criss-crossed shell with the narrow waist, and next
  // to it an open half shell with the two red-brown peanuts lying in it.
  'w.pinda': () => (
    <g strokeLinejoin="round">
      <Ground cx={60} cy={100} rx={48} ry={5} />
      <g transform="rotate(-14 40 52) translate(0 6)">{shell}</g>
      {/* The open half shell with two peanuts */}
      <path d="M62 78Q60 64 74 62Q86 62 90 70Q98 66 104 72Q112 82 102 92Q92 100 80 96Q66 94 62 78Z" fill={PAL.cardShade} />
      <path d="M66 78Q66 68 76 68Q84 68 88 74Q96 70 100 76Q104 84 98 88Q90 94 80 92Q68 90 66 78Z" fill={PAL.card} />
      <ellipse cx="78" cy="79" rx="10" ry="9" fill={PAL.clay} />
      <ellipse cx="96" cy="81" rx="8" ry="8" fill={PAL.clayShade} />
      <ellipse cx="95" cy="80" rx="6.4" ry="6.6" fill={PAL.clay} />
      <path d="M72 76Q74 72 78 72" fill="none" stroke={PAL.clayLight} strokeWidth="2.4" strokeLinecap="round" />
    </g>
  ),
} as Record<string, () => JSX.Element>;
