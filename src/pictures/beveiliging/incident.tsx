import type { JSX } from 'react';
import { ExclaimMark, Ground, PAL, Shade } from '../kit';

export default {
  // "het incident": the incident (something that went wrong) — a big warning sign (a white triangle with
  // a thick red edge and a black exclamation mark), and at its foot a cardboard box that fell over and
  // burst open, some of what was in it spilled on the floor.
  'w.incident': () => (
    <g strokeLinejoin="round">
      <Ground cx={60} cy={105} rx={48} ry={4} />
      {/* The warning sign */}
      <path d="M50 12L88 78H12Z" fill={PAL.redShade} stroke={PAL.redShade} strokeWidth="10" transform="translate(0 3)" />
      <path d="M50 12L88 78H12Z" fill={PAL.red} stroke={PAL.red} strokeWidth="10" />
      <path d="M50 28L74 70H26Z" fill={PAL.white} stroke={PAL.white} strokeWidth="4" />
      <ExclaimMark x={50} y={53} size={28} color={PAL.ink} />
      {/* The box that fell over */}
      <g transform="rotate(-24 88 92)">
        <Shade color={PAL.cardShade} opacity={1} at={[106, 92, 8, 20]}>
          <rect x="72" y="78" width="34" height="26" rx="2.5" fill={PAL.card} />
        </Shade>
        <path d="M72 78L64 70M106 78L112 68" stroke={PAL.cardDark} strokeWidth="4" strokeLinecap="round" />
      </g>
      {/* What spilled out */}
      <circle cx="58" cy="100" r="5" fill={PAL.sky} />
      <rect x="40" y="96" width="10" height="8" rx="2" fill={PAL.yellow} transform="rotate(20 45 100)" />
      <circle cx="30" cy="102" r="3.5" fill={PAL.leaf} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
