import type { JSX } from 'react';
import { PAL, Sparkle } from '../kit';

export default {
  // "scherp": sharp — one big jagged shard of broken glass, in a light blue tint, standing on its broad end,
  // its long point up; a white glint flashes on the point and on one sharp edge.
  'w.scherp': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      <ellipse cx="58" cy="104" rx="40" ry="4.5" fill="#000" opacity=".14" />
      <path d="M22 104L34 76L30 62L48 44L70 12L66 44L82 56L76 78L96 104Z" fill={PAL.ice} />
      <path d="M70 12L66 44L82 56L76 78L96 104H68L74 74L60 58Z" fill={PAL.blueLight} />
      <path d="M22 104L34 76L30 62L48 44L70 12" fill="none" stroke={PAL.white} strokeWidth="2.4" opacity=".9" />
      <path d="M36 92L42 70" stroke={PAL.white} strokeWidth="3.4" opacity=".7" />
      <Sparkle x={70} y={14} r={11} color={PAL.white} />
      <Sparkle x={70} y={14} r={6} color={PAL.yellowShine} />
      <Sparkle x={31} y={63} r={7} color={PAL.yellow} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
