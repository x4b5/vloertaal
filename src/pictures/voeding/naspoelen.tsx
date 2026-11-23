import type { JSX } from 'react';
import { Move, PAL, Sparkle } from '../kit';

export default {
  // "naspoelen": to rinse (to wash off with clean water) — a hose nozzle above a steel work table pours a
  // soft shower of clean water down; on the right the white foam is still there, on the left behind the
  // water the steel is clean and shines.
  // On the intro card the water moves along the table from left to right (three rounds: work you do
  // again and again).
  'w.naspoelen': () => (
    <g strokeLinejoin="round">
      {/* The steel table */}
      <path d="M8 78H112L106 90H14Z" fill={PAL.mist} />
      <rect x="14" y="90" width="92" height="7" rx="2" fill={PAL.steel} />
      <path d="M22 97V108M98 97V108" stroke={PAL.steel} strokeWidth="5" strokeLinecap="round" />
      {/* The foam still left on the right */}
      {[[78, 74, 8], [90, 70, 10], [102, 74, 7], [86, 78, 6]].map(([x, y, r]) => (
        <g key={`${x}${y}`}>
          <circle cx={x + 1} cy={y + 2.5} r={r} fill={PAL.paperShade} />
          <circle cx={x} cy={y} r={r} fill={PAL.white} />
        </g>
      ))}
      {/* Clean and shining on the left */}
      <path d="M16 84H34" stroke={PAL.white} strokeWidth="2.6" strokeLinecap="round" />
      <Sparkle x={24} y={64} r={7} color={PAL.sky} />
      <Move kind="from" dx={-26}>
        {/* The hose and its nozzle */}
        <path d="M30 10Q44 12 48 26" fill="none" stroke={PAL.green} strokeWidth="6" strokeLinecap="round" />
        <path d="M44 24H60L58 34H46Z" fill={PAL.slate} />
        {/* The shower of water */}
        <path d="M46 34H58L70 78H36Z" fill={PAL.ice} opacity=".8" />
        <path d="M48 38L42 74M52 38V74M56 38L62 74" stroke={PAL.sky} strokeWidth="2.4" strokeLinecap="round" strokeDasharray="6 5" />
        <path d="M34 80Q40 76 46 80M58 80Q64 76 70 80" fill="none" stroke={PAL.sky} strokeWidth="2.4" strokeLinecap="round" />
      </Move>
    </g>
  ),
} as Record<string, () => JSX.Element>;
