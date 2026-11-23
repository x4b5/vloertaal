import type { JSX } from 'react';
import { Ground, PAL, Shade, Shine } from '../kit';

export default {
  // "de thermoskan": the thermos jug — a tall, slim steel pump jug: a black pump top with a red push
  // button and a spout sticking out to the left, a black handle on the right, and steam from the spout
  // (the coffee stays hot).
  // On the intro card the steam rises out of the spout (three rounds).
  'w.thermoskan': () => (
    <g strokeLinejoin="round">
      <Ground cx={60} cy={105} rx={28} ry={4} />
      {/* Steam from the spout (drawn first, so it comes up from behind the spout) */}
      <Move kind="from" dy={22}>
        <path d="M14 26Q10 20 14 14Q18 8 14 2" fill="none" stroke={PAL.line} strokeWidth="3" strokeLinecap="round" opacity=".7" />
        <path d="M24 22Q20 16 24 10" fill="none" stroke={PAL.line} strokeWidth="3" strokeLinecap="round" opacity=".7" />
      </Move>
      {/* The handle */}
      <path d="M76 40H86Q90 40 90 46V82Q90 88 84 88H76" fill="none" stroke={PAL.slateDark} strokeWidth="7" strokeLinecap="round" />
      {/* The body */}
      <Shade color={PAL.steel} opacity={1} at={[78, 70, 8, 50]}>
        <rect x="40" y="34" width="38" height="70" rx="6" fill={PAL.mist} />
      </Shade>
      <rect x="40" y="96" width="38" height="8" rx="3" fill={PAL.slate} />
      <Shine d="M46 44V86" width={4} opacity={0.85} />
      {/* The pump top: the head, the spout to the left, the push button */}
      <rect x="38" y="24" width="42" height="14" rx="5" fill={PAL.slate} />
      <path d="M40 28H22Q16 28 16 32V34H40Z" fill={PAL.slate} />
      <path d="M16 32L12 36" stroke={PAL.slate} strokeWidth="4" strokeLinecap="round" />
      <path d="M46 24Q46 12 59 12Q72 12 72 24Z" fill={PAL.slateDark} />
      <ellipse cx="59" cy="14" rx="9" ry="4" fill={PAL.red} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
