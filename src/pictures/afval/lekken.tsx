import type { JSX } from 'react';
import { Ground, Move, PAL, Shade, Shine } from '../kit';

/** A drop with its point up at (x, y), `s` times the size of a 12-tall drop. */
const drop = (x: number, y: number, s = 1) =>
  `M${x} ${y}Q${x + 5 * s} ${y + 7 * s} ${x + 5 * s} ${y + 9.5 * s}A${5 * s} ${5 * s} 0 0 1 ${x - 5 * s} ${y + 9.5 * s}Q${x - 5 * s} ${y + 7 * s} ${x} ${y}Z`;

export default {
  // "lekken": to leak — a white plastic can of chemicals with a crack low in its side: blue drops
  // run out of the crack and fall into a growing puddle on the floor.
  // On the intro card a drop falls from the crack into the puddle (three rounds: it keeps dripping).
  'w.lekken': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      <Ground cx={50} cy={102} rx={32} ry={4} />
      {/* The puddle */}
      <path d="M58 100Q60 94 74 95Q84 92 96 95Q110 96 108 101Q104 106 88 105Q70 107 60 104Q56 103 58 100Z" fill={PAL.sky} />
      <path d="M70 98Q78 96 88 97" fill="none" stroke={PAL.ice} strokeWidth="2.2" opacity=".8" />
      {/* The can: its side, its top, the handle and the cap */}
      <path d="M66 34L78 24V90L66 100Z" fill={PAL.paperShade} />
      <path d="M18 34L30 24H78L66 34Z" fill={PAL.white} />
      <Shade color={PAL.paperShade} opacity={1} at={[70, 70, 8, 40]}>
        <rect x="18" y="34" width="48" height="66" rx="4" fill={PAL.paper} />
      </Shade>
      <path d="M42 30L50 12H72L70 26" fill="none" stroke={PAL.mist} strokeWidth="6" />
      <rect x="24" y="16" width="14" height="13" rx="3" fill={PAL.red} />
      <rect x="24" y="16" width="14" height="4" rx="2" fill={PAL.redLight} />
      {/* The label */}
      <rect x="25" y="46" width="34" height="20" rx="2" fill={PAL.mist} />
      <path d="M30 53H54M30 59H46" stroke={PAL.line} strokeWidth="2" />
      <Shine d="M23 40V84" width={3} opacity={0.9} />
      {/* The crack and the liquid running out of it */}
      <path d="M58 76L62 80L59 84L64 88" fill="none" stroke={PAL.slate} strokeWidth="2.2" />
      <path d="M63 86Q70 86 70 92" fill="none" stroke={PAL.sky} strokeWidth="4.4" />
      {/* The falling drop */}
      <Move kind="drop" dy={-18}>
        <path d={drop(76, 80, 0.9)} fill={PAL.sky} />
      </Move>
    </g>
  ),
} as Record<string, () => JSX.Element>;
