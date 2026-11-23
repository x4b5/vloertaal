import type { JSX } from 'react';
import { Ground, Motion, Move, PAL, Shine } from '../kit';

export default {
  // "vegen": to sweep — a long push broom (red head, dark bristles) sweeping a heap of dust to the
  // left over the floor, with motion lines. On the intro card the broom sweeps in from the right
  // towards the heap (three rounds: sweeping).
  'w.vegen': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      <Ground cx={60} cy={104} rx={50} ry={4} />
      {/* The dust heap */}
      <path d="M8 104Q12 90 22 92Q30 88 34 96Q38 98 38 104Z" fill={PAL.line} />
      <path d="M26 92Q32 90 34 96Q38 98 38 104H28Z" fill={PAL.steel} />
      <circle cx="44" cy="101" r="2.4" fill={PAL.line} />
      <circle cx="50" cy="98" r="1.8" fill={PAL.line} />
      <Move kind="from" dx={26}>
        {/* The handle */}
        <path d="M96 12L68 86" stroke={PAL.wood} strokeWidth="6" />
        <Shine d="M93 18L86 36" width={2} opacity={0.5} />
        {/* The bristles and the head */}
        <path d="M44 92H94L96 104H42Z" fill={PAL.slate} />
        <path d="M84 92H94L96 104H86Z" fill={PAL.slateDark} />
        <rect x="42" y="84" width="54" height="10" rx="3" fill={PAL.red} />
        <rect x="84" y="84" width="12" height="10" rx="3" fill={PAL.redShade} />
        <Motion x={104} y={96} dir={0} spread={40} n={3} len={8} gap={2} />
      </Move>
    </g>
  ),
} as Record<string, () => JSX.Element>;
