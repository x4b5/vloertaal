import type { JSX } from 'react';
import { Ground, PAL, Shine } from '../kit';

export default {
  // "de glijbaan": the slide — a children's slide seen from the side: a blue ladder up on the left, a
  // small platform with a rail, and the long yellow chute curving down to the ground on the right.
  'w.glijbaan': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      <Ground cx={60} cy={105} rx={50} ry={4} />
      {/* The ladder: back rail, steps, front rail */}
      <path d="M30 30L22 104" stroke={PAL.blueShade} strokeWidth="5" />
      <path d="M27 46H40M25 62H38M23 78H36M21 94H34" stroke={PAL.mist} strokeWidth="4" />
      <path d="M42 30L34 104" stroke={PAL.blue} strokeWidth="5.5" />
      {/* The legs under the chute */}
      <path d="M48 36V104" stroke={PAL.blueShade} strokeWidth="5" />
      {/* The platform and its hand rail */}
      <rect x="26" y="28" width="26" height="7" rx="2" fill={PAL.blue} />
      <path d="M30 28V14Q30 10 34 10H48" fill="none" stroke={PAL.red} strokeWidth="4.5" />
      {/* The chute: its dark side edge, then the yellow bed, then the lit rim */}
      <path d="M50 36Q66 36 78 64Q88 90 108 96V104Q84 100 72 70Q62 46 50 44Z" fill={PAL.yellowShade} />
      <path d="M50 30Q68 30 81 60Q92 88 110 92V98Q88 94 77 66Q65 38 50 38Z" fill={PAL.yellow} />
      <Shine d="M54 33Q66 34 74 48" color={PAL.yellowShine} width={3.2} opacity={0.9} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
