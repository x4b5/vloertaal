import type { JSX } from 'react';
import { PAL, Shine } from '../kit';

/** A fence post at (x, y) (its foot). */
const post = (x: number, y: number) => <rect key={`${x}-${y}`} x={x - 2} y={y - 12} width="4" height="13" rx="1.5" fill={PAL.slate} />;

export default {
  // "het terrein": the grounds (the land around a building) — a plot of green land seen from above at a
  // slant: a building with a flat roof at the back, a grey road from the gate to its door, a few trees,
  // and a steel fence with posts all round the edge of the land.
  'w.terrein': () => (
    <g strokeLinejoin="round">
      {/* The land, its depth edge */}
      <path d="M60 104L112 74L60 44L8 74Z" fill={PAL.greenShade} transform="translate(0 5)" />
      <path d="M60 104L112 74L60 44L8 74Z" fill={PAL.leaf} />
      {/* The road from the gate to the door */}
      <path d="M33 89L71 67" stroke={PAL.mist} strokeWidth="9" strokeLinecap="butt" />
      {/* The building */}
      <path d="M50 58L70 46V26L50 38Z" fill={PAL.mist} />
      <path d="M70 46L92 58V38L70 26Z" fill={PAL.steel} />
      <path d="M50 38L70 26L92 38L72 50Z" fill={PAL.slate} />
      <path d="M50 38L70 26L92 38L72 50Z" fill={PAL.slate} />
      <path d="M50 58V38L72 50V70Z" fill={PAL.paper} />
      <path d="M72 70V50L92 38V58Z" fill={PAL.mist} />
      <path d="M57 47V52M64 51V56" stroke={PAL.sky} strokeWidth="4" strokeLinecap="round" />
      <path d="M78 53V58M85 49V54" stroke={PAL.skyShade} strokeWidth="4" strokeLinecap="round" />
      <path d="M68 62V68" stroke={PAL.cardDark} strokeWidth="5" />
      {/* Trees */}
      <circle cx="28" cy="70" r="7" fill={PAL.green} />
      <circle cx="26" cy="68" r="3" fill={PAL.lime} opacity=".6" />
      <circle cx="94" cy="76" r="7" fill={PAL.green} />
      <circle cx="92" cy="74" r="3" fill={PAL.lime} opacity=".6" />
      {/* The fence round the edge: the wires and the posts */}
      <path d="M8 74L60 44L112 74M8 68L60 38L112 68" fill="none" stroke={PAL.steel} strokeWidth="1.6" />
      {[[8, 74], [21, 66.5], [34, 59], [47, 51.5], [60, 44], [73, 51.5], [86, 59], [99, 66.5], [112, 74]].map(([x, y]) => post(x, y))}
      <path d="M8 74L27 85M43 94L60 104L112 74M8 68L27 79M43 88L60 98L112 68" fill="none" stroke={PAL.line} strokeWidth="1.8" />
      {[[8, 74], [27, 85], [43, 94], [60, 104], [73, 96.5], [86, 89], [99, 81.5], [112, 74]].map(([x, y]) => post(x, y))}
      <Shine d="M18 74L44 59" width={2.6} opacity={0.5} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
