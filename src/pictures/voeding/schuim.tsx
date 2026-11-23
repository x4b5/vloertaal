import type { JSX } from 'react';
import { Move, PAL, Shine } from '../kit';

/** The foam: [cx, cy, r] bubbles, back ones first. */
const BUBBLES: [number, number, number][] = [
  [40, 46, 14], [62, 38, 17], [84, 46, 14], [28, 62, 13], [50, 58, 15], [74, 58, 15], [94, 62, 12],
  [20, 76, 10], [38, 74, 12], [60, 72, 13], [82, 74, 12], [100, 76, 9],
];

export default {
  // "het schuim": the foam — a big heap of thick white cleaning foam on a steel work table, round
  // bubbles with a grey shade below and a few loose bubbles floating up.
  // On the intro card the loose bubbles float up off the heap (three rounds).
  'w.schuim': () => (
    <g strokeLinejoin="round">
      {/* The steel table top and its front edge */}
      <path d="M8 80H112L106 92H14Z" fill={PAL.mist} />
      <rect x="14" y="92" width="92" height="7" rx="2" fill={PAL.steel} />
      <path d="M22 99V108M98 99V108" stroke={PAL.steel} strokeWidth="5" strokeLinecap="round" />
      {/* The foam: a grey shade layer, then the white bubbles */}
      {BUBBLES.map(([x, y, r]) => <circle key={`s${x}${y}`} cx={x + 1.5} cy={y + 3} r={r} fill={PAL.paperShade} />)}
      {BUBBLES.map(([x, y, r]) => <circle key={`b${x}${y}`} cx={x} cy={y} r={r} fill={PAL.white} />)}
      {BUBBLES.slice(0, 7).map(([x, y, r]) => <circle key={`h${x}${y}`} cx={x - r * 0.4} cy={y - r * 0.4} r={r * 0.22} fill={PAL.ice} opacity=".7" />)}
      <path d="M86 84Q90 82 94 84" stroke={PAL.paperShade} strokeWidth="2" strokeLinecap="round" />
      {/* Loose bubbles floating up */}
      <Move kind="slow" dy={24}>
        <circle cx="92" cy="22" r="5" fill={PAL.paperShade} />
        <circle cx="91" cy="21" r="5" fill={PAL.white} />
        <circle cx="104" cy="32" r="3.5" fill={PAL.paperShade} />
        <circle cx="103" cy="31" r="3.5" fill={PAL.white} />
        <circle cx="26" cy="28" r="4" fill={PAL.paperShade} />
        <circle cx="25" cy="27" r="4" fill={PAL.white} />
      </Move>
      <Shine d="M54 30Q58 25 64 24" width={3} opacity={0.9} color={PAL.ice} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
