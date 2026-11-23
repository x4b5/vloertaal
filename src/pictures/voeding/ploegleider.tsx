import type { JSX } from 'react';
import { PAL, Shine } from '../kit';
import { Bust } from '../bust';

export default {
  // "de ploegleider": the shift leader — Henk (the boss) big in front with a yellow leader's badge on his
  // chest, and his team behind him: Bram and Jada, smaller, on either side.
  'w.ploegleider': () => (
    <g strokeLinejoin="round">
      {/* His team, behind him */}
      <Bust who="bram" x={26} y={96} scale={0.44} expr="pleased" bold />
      <Bust who="jada" x={94} y={96} scale={0.44} expr="pleased" bold />
      {/* The shift leader */}
      <Bust who="henk" x={60} y={124} scale={0.74} expr="pleased" bold />
      {/* His leader's badge */}
      <rect x="70" y="100" width="18" height="14" rx="3" fill={PAL.yellowShade} transform="translate(1.5 2.5)" />
      <rect x="70" y="100" width="18" height="14" rx="3" fill={PAL.yellow} />
      <path d="M79 103L81 106.6L85 107L82 109.6L83 113L79 111L75 113L76 109.6L73 107L77 106.6Z" fill={PAL.white} transform="translate(0 -2) scale(1)" />
      <Shine d="M72 102H76" width={1.6} opacity={0.8} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
