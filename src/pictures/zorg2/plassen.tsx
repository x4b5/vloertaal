import type { JSX } from 'react';
import { Ground, Move, PAL, Shade, Shine } from '../kit';

/** A yellow drop, its point up, centred near (x, y). */
const drop = (x: number, y: number, s = 1) =>
  `M${x} ${y - 8 * s}Q${x + 6 * s} ${y} ${x + 5 * s} ${y + 3 * s}A5 5 0 0 1 ${x - 5 * s} ${y + 3 * s}Q${x - 6 * s} ${y} ${x} ${y - 8 * s}Z`;

export default {
  // "plassen": to pee — a white toilet from the side, its lid up, and yellow drops falling into the bowl.
  // On the intro card the drops fall into the bowl (three rounds: drops keep falling).
  'w.plassen': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      <Ground cx={62} cy={105} rx={40} ry={4} />
      {/* The cistern and the raised lid */}
      <rect x="80" y="24" width="24" height="40" rx="5" fill={PAL.paperShade} />
      <rect x="80" y="24" width="18" height="40" rx="5" fill={PAL.white} />
      <rect x="77" y="20" width="30" height="7" rx="3" fill={PAL.mist} />
      <rect x="72" y="30" width="7" height="34" rx="3" fill={PAL.mist} />
      {/* The bowl and its foot */}
      <Shade color={PAL.paperShade} opacity={1} at={[90, 84, 18, 30]}>
        <path d="M22 66H96V72Q94 92 74 94L72 104H50L52 94Q24 90 22 72Z" fill={PAL.white} />
      </Shade>
      <path d="M22 66H96V72Q94 92 74 94L72 104H50L52 94Q24 90 22 72Z" fill="none" stroke={PAL.mist} strokeWidth="1.4" />
      {/* The seat */}
      <rect x="18" y="60" width="62" height="8" rx="4" fill={PAL.mist} />
      <rect x="18" y="59" width="62" height="6" rx="3" fill={PAL.paperShade} />
      <Shine d="M30 74Q34 84 46 88" color={PAL.mist} width={3} opacity={0.9} />
      {/* Yellow drops falling into the bowl */}
      <Move kind="from" dy={-22}>
        <path d={drop(48, 26)} fill={PAL.yellow} />
        <path d={drop(48, 46, 0.8)} fill={PAL.yellow} />
      </Move>
    </g>
  ),
} as Record<string, () => JSX.Element>;
