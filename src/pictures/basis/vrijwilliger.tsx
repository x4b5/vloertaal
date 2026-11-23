import type { JSX } from 'react';
import { Bust } from '../bust';
import { Hand, PAL, SKIN } from '../kit';

/** A heart, centred near (x, y), `s` times 1. */
const heart = (x: number, y: number, s: number) =>
  `M${x} ${y - 4 * s}C${x} ${y - 12 * s} ${x - 14 * s} ${y - 12 * s} ${x - 14 * s} ${y - 2 * s}C${x - 14 * s} ${y + 6 * s} ${x} ${y + 12 * s} ${x} ${y + 14 * s}C${x} ${y + 12 * s} ${x + 14 * s} ${y + 6 * s} ${x + 14 * s} ${y - 2 * s}C${x + 14 * s} ${y - 12 * s} ${x} ${y - 12 * s} ${x} ${y - 4 * s}Z`;

export default {
  // "de vrijwilliger": the volunteer (someone who helps without pay) — Jada in a lime volunteer's
  // tabard with a big red heart on the chest, one hand raised: "I'll help".
  'w.vrijwilliger': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      {/* The raised arm, behind the body */}
      <path d="M72 100L90 66" stroke={SKIN.jada[0]} strokeWidth="11" />
      <Hand pose="open" x={91} y={66} rotate={14} scale={0.62} skin={SKIN.jada} />
      <Bust who="jada" x={52} y={122} scale={0.8} expr="pleased" bold />
      {/* The tabard over the shirt, open at the neck */}
      <g transform="translate(52 122) scale(0.8) translate(-60 -134)">
        <path d="M31 134L32 108Q34 97 46 94L54 94L60 112L66 94L74 94Q86 97 88 108L89 134Z" fill={PAL.lime} />
        <path d="M76 95Q86 98 88 108L89 134L78 134Z" fill={PAL.leaf} opacity=".7" />
        <path d={heart(60, 121, 0.62)} fill={PAL.red} />
      </g>
    </g>
  ),
} as Record<string, () => JSX.Element>;
