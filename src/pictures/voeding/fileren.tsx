import type { JSX } from 'react';
import { Move, PAL, Shade } from '../kit';

export default {
  // "fileren": to fillet (to cut fish or meat into flat pieces) — a silver fish on a board, its flat
  // orange fillet peeled up off its back at the tail end; a long thin filleting knife slides in between.
  // On the intro card the knife slides along the fish under the fillet (three rounds: work you do
  // again and again).
  'w.fileren': () => (
    <g strokeLinejoin="round">
      {/* The board */}
      <rect x="8" y="92" width="104" height="12" rx="4" fill={PAL.cardShade} />
      <rect x="8" y="90" width="104" height="8" rx="4" fill={PAL.card} />
      {/* The fish: silver body, light belly, tail fin on the right */}
      <path d="M90 78L108 64V96Z" fill={PAL.steel} />
      <Shade color={PAL.steel} opacity={1} at={[96, 84, 10, 14]}>
        <path d="M12 80Q16 64 40 64H82Q94 66 96 78Q94 90 82 92H40Q16 92 12 80Z" fill={PAL.mist} />
      </Shade>
      <path d="M16 84Q24 92 42 92H82Q90 90 94 84Z" fill={PAL.paper} />
      <circle cx="24" cy="76" r="3.4" fill={PAL.slateDark} />
      <path d="M34 66Q38 78 34 90" fill="none" stroke={PAL.steel} strokeWidth="2" strokeLinecap="round" />
      {/* The knife: handle on the right, a long thin blade in under the fillet */}
      <Move kind="from" dx={26}>
        <path d="M40 60L86 58V63L44 64Z" fill={PAL.mist} />
        <path d="M44 64L86 63V60.5Z" fill={PAL.steel} />
        <path d="M88 60H106" stroke={PAL.slateDark} strokeWidth="9" strokeLinecap="round" />
        <path d="M92 57H102" stroke={PAL.slate} strokeWidth="2.4" strokeLinecap="round" />
      </Move>
      {/* The fillet: flat, orange, white fat lines, lifting up at its right end */}
      <path d="M22 64Q24 54 40 54H62Q76 50 88 38L94 44Q82 60 64 62H40Q30 64 22 64Z" fill={PAL.clay} />
      <path d="M28 58Q36 56 46 56H62Q74 54 84 44" fill="none" stroke={PAL.clayLight} strokeWidth="4" strokeLinecap="round" />
      <path d="M42 56L46 62M54 56L58 62M66 54L70 60" stroke={PAL.redLight} strokeWidth="1.6" strokeLinecap="round" />
    </g>
  ),
} as Record<string, () => JSX.Element>;
