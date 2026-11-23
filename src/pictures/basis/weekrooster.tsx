import type { JSX } from 'react';
import { PAL } from '../kit';

/** Which days (0-6, Monday to Sunday) each of the four colleagues works this week. */
const WEEK: [string, number[]][] = [
  [PAL.orange, [0, 1, 2, 3, 4]],
  [PAL.green, [2, 3, 4, 5, 6]],
  [PAL.blue, [0, 1, 4, 5]],
  [PAL.purple, [0, 1, 2, 3, 6]],
];

export default {
  // "het weekrooster": the weekly roster (who works when this week) — a sheet pinned up on the wall:
  // seven day columns under a dark header (the last two, the weekend, a little apart), and four rows,
  // one per colleague, with a coloured block on each day that person works. ("het rooster" of l.clock
  // is the long bars with the faces; this is one week, day by day.)
  'w.weekrooster': () => {
    const col = (d: number) => 18 + d * 12.6 + (d > 4 ? 2 : 0);
    return (
      <g strokeLinejoin="round" strokeLinecap="round">
        {/* The sheet */}
        <rect x="10" y="20" width="100" height="86" rx="5" fill={PAL.paperShade} transform="translate(0 4)" />
        <rect x="10" y="20" width="100" height="86" rx="5" fill={PAL.white} />
        {/* The day header */}
        {Array.from({ length: 7 }, (_, d) => (
          <rect key={d} x={col(d)} y="28" width="10" height="10" rx="2.5" fill={d > 4 ? PAL.steel : PAL.slate} />
        ))}
        {/* The four rows */}
        {WEEK.map(([c, days], r) =>
          Array.from({ length: 7 }, (_, d) => (
            <rect key={`${r}-${d}`} x={col(d)} y={46 + r * 14.5} width="10" height="10" rx="2.5" fill={days.includes(d) ? c : PAL.paperShade} />
          )),
        )}
        {/* The pins */}
        <circle cx="22" cy="20" r="5" fill={PAL.red} />
        <circle cx="98" cy="20" r="5" fill={PAL.red} />
        <circle cx="20.6" cy="18.6" r="1.6" fill={PAL.white} opacity=".7" />
        <circle cx="96.6" cy="18.6" r="1.6" fill={PAL.white} opacity=".7" />
      </g>
    );
  },
} as Record<string, () => JSX.Element>;
