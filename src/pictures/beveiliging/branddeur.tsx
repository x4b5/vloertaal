import type { JSX } from 'react';
import { Ground, Move, PAL, Shine } from '../kit';

export default {
  // "de branddeur": the fire door (it stops fire and smoke) — a heavy grey steel door in its frame, with a
  // narrow window of wired glass, a long push bar, a door closer arm at the top, and a round red sign with
  // a white flame on it; an orange flame burns at the foot of the wall beside it, but the door is shut.
  // Once: the door swings shut (the door closer pulls it to).
  'w.branddeur': () => (
    <g strokeLinejoin="round">
      <Ground cx={56} cy={105} rx={46} ry={4} />
      {/* The frame and the doorway */}
      <rect x="22" y="12" width="66" height="94" rx="3" fill={PAL.slate} />
      <rect x="28" y="18" width="54" height="88" fill={PAL.slateDark} />
      {/* The door leaf */}
      <Move kind="grow" grow={0.3} once>
        <rect x="28" y="18" width="54" height="88" fill={PAL.mist} />
        <rect x="74" y="18" width="8" height="88" fill={PAL.steel} />
        <rect x="58" y="28" width="10" height="30" rx="2" fill={PAL.ice} />
        <path d="M58 38H68M58 48H68M63 28V58" stroke={PAL.steel} strokeWidth="1.2" />
        <rect x="34" y="66" width="40" height="6" rx="3" fill={PAL.slate} />
        <circle cx="42" cy="40" r="10" fill={PAL.red} />
        <path d="M42 33Q48 40 45 45Q43 47 41 46Q37 44 39 39Q40 42 42 41Q44 38 42 33Z" fill={PAL.white} />
        <Shine d="M32 24V50" width={2.4} opacity={0.8} />
      </Move>
      {/* The door closer at the top */}
      <rect x="50" y="20" width="22" height="6" rx="2.5" fill={PAL.slateDark} />
      {/* The fire beside the door */}
      <path d="M100 106Q88 104 90 92Q91 86 96 82Q95 90 99 90Q98 80 104 72Q104 82 110 88Q114 96 110 102Q107 106 100 106Z" fill={PAL.orange} />
      <path d="M100 106Q95 104 96 98Q97 94 100 92Q101 97 103 97Q106 100 104 104Q102 106 100 106Z" fill={PAL.yellow} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
