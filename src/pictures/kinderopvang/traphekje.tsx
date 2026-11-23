import type { JSX } from 'react';
import { Ground, Move, PAL, Shine } from '../kit';

/** The steps from the bottom up: each a little narrower and lower, as stairs going up and away. */
const STEPS = [0, 1, 2, 3, 4, 5].map((i) => {
  const half = 42 - i * 4.4;
  const y = 92 - i * 14.4;
  return { x: 60 - half, w: half * 2, y };
});

export default {
  // "het traphekje": the stair gate — stairs going up and away between two walls, a hand rail on the
  // left wall, and at the foot of the stairs a white safety gate with bars and a green lock.
  // On the intro card the gate swings shut from its hinge on the left, once.
  'w.traphekje': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      <Ground cx={60} cy={106} rx={52} ry={4} />
      {/* The walls, narrowing up the stairs */}
      <path d="M8 106L8 10H36L18 106Z" fill={PAL.mist} />
      <path d="M112 106L112 10H84L102 106Z" fill={PAL.steel} />
      {/* The steps: a riser, then the lit tread on top */}
      {STEPS.slice().reverse().map(({ x, w, y }) => (
        <g key={y}>
          <rect x={x} y={y} width={w} height="14.4" fill={PAL.cardShade} />
          <rect x={x} y={y} width={w} height="4.4" fill={PAL.card} />
        </g>
      ))}
      {/* The hand rail on the left wall */}
      <path d="M12 74L32 14" stroke={PAL.wood} strokeWidth="4.4" />
      {/* The gate at the foot of the stairs */}
      <Move kind="grow" grow={0.35} once>
        <rect x="20" y="62" width="80" height="6" rx="3" fill={PAL.white} />
        <rect x="20" y="98" width="80" height="6" rx="3" fill={PAL.paperShade} />
        <rect x="20" y="62" width="6" height="42" rx="3" fill={PAL.white} />
        <rect x="94" y="62" width="6" height="42" rx="3" fill={PAL.paperShade} />
        <path d="M35 68V98M44 68V98M53 68V98M62 68V98M71 68V98M80 68V98" stroke={PAL.paper} strokeWidth="4.2" />
        <path d="M37 68V98M46 68V98M55 68V98M64 68V98M73 68V98M82 68V98" stroke={PAL.paperShade} strokeWidth="1.4" />
        <rect x="86" y="70" width="14" height="16" rx="4" fill={PAL.green} />
        <rect x="94" y="70" width="6" height="16" rx="3" fill={PAL.greenShade} />
      </Move>
      <Shine d="M24 65H40" width={2.4} opacity={0.9} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
