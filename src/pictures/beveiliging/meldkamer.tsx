import type { JSX } from 'react';
import { PAL, Shine } from '../kit';
import { Bust } from '../bust';

/** One small screen of the wall, its top left at (x, y), with a simple camera view in it. */
const screen = (x: number, y: number, k: number) => (
  <g key={`${x}-${y}`}>
    <rect x={x} y={y} width="30" height="22" rx="2.5" fill={PAL.slateDark} />
    <rect x={x + 2.5} y={y + 2.5} width="25" height="17" rx="1.5" fill={k % 2 ? PAL.sky : PAL.blueLight} />
    <path d={`M${x + 2.5} ${y + 19.5}L${x + 10} ${y + 11}H${x + 20}L${x + 27.5} ${y + 19.5}Z`} fill={k % 2 ? PAL.skyShade : PAL.blue} />
  </g>
);

export default {
  // "de meldkamer": the control room (where people watch the cameras and take calls) — a wall of six
  // screens with camera views, and in front of it at the desk a guard (Henk) with a headset and its
  // microphone at his mouth.
  'w.meldkamer': () => (
    <g strokeLinejoin="round">
      {/* The wall of screens */}
      <rect x="10" y="10" width="100" height="58" rx="5" fill={PAL.slate} />
      {[0, 1, 2].map((i) => screen(14 + i * 32, 14, i))}
      {[0, 1, 2].map((i) => screen(14 + i * 32, 41, i + 1))}
      <Shine d="M17 17H28" width={2.2} opacity={0.7} />
      {/* The guard */}
      <Bust who="henk" x={60} y={116} scale={0.6} expr="neutral" bold />
      {/* The headset: the band, the ear cups, the microphone */}
      <path d="M44 58Q44 38 60 38Q76 38 76 58" fill="none" stroke={PAL.slateDark} strokeWidth="3.4" />
      <rect x="40" y="55" width="7" height="12" rx="3" fill={PAL.slateDark} />
      <rect x="73" y="55" width="7" height="12" rx="3" fill={PAL.slateDark} />
      <path d="M43 66Q44 76 54 78" fill="none" stroke={PAL.slateDark} strokeWidth="2.4" strokeLinecap="round" />
      <circle cx="55" cy="78" r="2.8" fill={PAL.slateDark} />
      {/* The desk */}
      <rect x="10" y="98" width="100" height="12" rx="3" fill={PAL.card} />
      <rect x="10" y="106" width="100" height="4" rx="2" fill={PAL.cardShade} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
