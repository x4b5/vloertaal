import type { JSX } from 'react';
import { Move, PAL, Shine } from '../kit';

/** A rising heat wave (a wavy line) from (x, y) upwards. */
const wave = (x: number, y: number) => `M${x} ${y}q-5 -5 0 -10t0 -10t0 -10`;

export default {
  // "gloeiend": glowing hot (so hot that it shines red) — a lump of hot glass on a steel table, glowing
  // from red at its edge through orange to a yellow-white heart, a red-orange glow on the steel round it,
  // and orange heat waves above. On the intro card the heat waves keep rising (three rounds: it stays hot).
  'w.gloeiend': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      {/* The heat waves */}
      <Move kind="from" dy={20}>
        <path d={`${wave(42, 46)}${wave(60, 42)}${wave(78, 46)}`} fill="none" stroke={PAL.orange} strokeWidth="3.8" />
      </Move>
      {/* The steel table: top, front, legs */}
      <path d="M22 92V106M98 92V106" stroke={PAL.slate} strokeWidth="6" />
      <path d="M8 80L18 70H112L102 80Z" fill={PAL.mist} />
      <path d="M102 80L112 70V78L102 88Z" fill={PAL.slate} />
      <rect x="8" y="80" width="94" height="8" rx="1.6" fill={PAL.steel} />
      {/* The glow on the steel */}
      <ellipse cx="60" cy="76" rx="38" ry="6" fill={PAL.orange} opacity=".35" />
      {/* The glowing lump */}
      <path d="M30 76Q28 60 44 56Q54 50 66 54Q86 56 88 72Q88 78 80 78H38Q30 78 30 76Z" fill={PAL.red} />
      <path d="M36 74Q36 62 48 60Q58 56 68 59Q82 62 82 72Q82 75 77 75H41Q36 75 36 74Z" fill={PAL.orange} />
      <path d="M44 71Q45 64 54 63Q62 61 70 64Q76 67 75 71Z" fill={PAL.yellow} />
      <ellipse cx="58" cy="67" rx="8" ry="3" fill={PAL.yellowShine} />
      <Shine d="M14 74L18 72H40" width={2.4} opacity={0.6} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
