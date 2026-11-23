import type { JSX } from 'react';
import { Ground, Move, PAL, Shine } from '../kit';

/** Grater holes on the front face: rows of small dark slots. */
const HOLES = [36, 46, 56, 66, 76, 86].flatMap((y, r) => [0, 1, 2].map((c) => [34 + (r % 2) * 4 + c * 11 + (y - 36) * 0.06, y] as const));

export default {
  // "raspen": to grate — a steel box grater standing up, rows of dark grating holes on its face and a black
  // handle on top; a yellow block of cheese is pushed down along the face and a heap of grated cheese lies at its foot.
  // On the intro card the cheese slides down the grater (three rounds: grating goes up and down again and again).
  'w.raspen': () => (
    <g strokeLinejoin="round">
      <Ground cx={60} cy={104} rx={44} ry={4.5} />
      {/* The handle on top */}
      <path d="M38 22Q38 10 52 10Q66 10 66 22" fill="none" stroke={PAL.slate} strokeWidth="6" strokeLinecap="round" />
      {/* The right side face, then the front face */}
      <path d="M68 20L82 14L88 94L74 102Z" fill={PAL.steel} />
      <path d="M36 20H68L74 102H28Z" fill={PAL.mist} />
      <path d="M36 20H68L69 26H35Z" fill={PAL.paper} />
      {HOLES.map(([x, y], i) => (
        <path key={i} d={`M${x} ${y + 1}Q${x + 3.5} ${y - 3} ${x + 7} ${y + 1}`} fill="none" stroke={PAL.slateDark} strokeWidth="2.6" strokeLinecap="round" />
      ))}
      <Shine d="M33 32L30 92" width={2.6} opacity={0.8} />
      {/* The heap of grated cheese at the foot */}
      {[[20, 100], [27, 97], [34, 101], [24, 104], [86, 100], [92, 97], [98, 101], [90, 104], [16, 104], [96, 104]].map(([x, y], i) => (
        <path key={i} d={`M${x - 3} ${y}Q${x} ${y - 4} ${x + 3} ${y}`} fill="none" stroke={i % 2 ? PAL.yellowShade : PAL.yellow} strokeWidth="2.6" strokeLinecap="round" />
      ))}
      {/* The cheese block, pushed down along the face */}
      <Move kind="from" dy={-30}>
        <path d="M44 58H66L72 52V72L66 78H44Z" fill={PAL.yellowShade} />
        <path d="M44 58L50 52H72L66 58Z" fill={PAL.yellowLight} />
        <rect x="42" y="58" width="24" height="20" rx="1.5" fill={PAL.yellow} />
        <circle cx="50" cy="65" r="2.6" fill={PAL.yellowShade} />
        <circle cx="59" cy="72" r="2" fill={PAL.yellowShade} />
      </Move>
    </g>
  ),
} as Record<string, () => JSX.Element>;
