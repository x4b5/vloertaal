import type { JSX } from 'react';
import { PAL, Shine } from '../kit';
import { Bust } from '../bust';

export default {
  // "de huisgenoot": the housemate (a person who lives in the same house) — Bram and Jada side by side,
  // together under one roof (a big clay roof with a chimney over both of them).
  'w.huisgenoot': () => (
    <g strokeLinejoin="round">
      {/* The house: light wall behind them, one roof over both */}
      <rect x="18" y="48" width="84" height="62" fill="#e3f5ff" />
      <rect x="80" y="14" width="10" height="22" rx="2" fill={PAL.slate} />
      <path d="M8 52L60 14L112 52Z" fill={PAL.clay} stroke={PAL.clay} strokeWidth="6" />
      <path d="M60 14L112 52H60Z" fill={PAL.clayShade} stroke={PAL.clayShade} strokeWidth="6" />
      <Shine d="M20 45L50 23" width={3} opacity={0.4} />
      <Bust who="bram" x={38} y={122} scale={0.6} expr="pleased" bold />
      <Bust who="jada" x={84} y={122} scale={0.6} expr="pleased" flip bold />
    </g>
  ),
} as Record<string, () => JSX.Element>;
