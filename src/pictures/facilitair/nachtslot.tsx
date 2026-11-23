import type { JSX } from 'react';
import { Move, PAL, Shine } from '../kit';

export default {
  // "het nachtslot": the deadlock (the extra lock for the night) — on a wooden door, a sturdy steel lock box
  // with its round key cylinder, its thick bolt shot out into the keeper on the door frame, and a yellow moon above.
  // Once: the bolt shoots out of the lock into the frame.
  'w.nachtslot': () => (
    <g strokeLinejoin="round">
      {/* The door and the frame on the right */}
      <rect x="6" y="28" width="76" height="84" rx="3" fill={PAL.card} />
      <rect x="86" y="28" width="22" height="84" rx="2" fill={PAL.mist} />
      <rect x="100" y="28" width="8" height="84" rx="2" fill={PAL.steel} />
      {/* The keeper on the frame */}
      <rect x="84" y="58" width="20" height="34" rx="3" fill={PAL.steel} />
      <rect x="88" y="68" width="12" height="14" rx="2" fill={PAL.slateDark} />
      {/* The bolt shoots out into the keeper */}
      <Move kind="fast" dx={-24} once>
        <rect x="68" y="69" width="30" height="12" rx="2" fill={PAL.mist} />
        <rect x="68" y="77" width="30" height="4" rx="1.5" fill={PAL.steel} />
      </Move>
      {/* The lock box with its cylinder */}
      <rect x="22" y="54" width="52" height="42" rx="6" fill={PAL.slate} />
      <rect x="62" y="54" width="12" height="42" rx="5" fill={PAL.slateDark} />
      <circle cx="42" cy="83" r="10" fill={PAL.yellow} />
      <path d="M42 69V81" stroke={PAL.yellowShade} strokeWidth="3.4" strokeLinecap="round" />
      <Shine d="M27 60H52" width={2.6} opacity={0.4} />
      {/* The moon: for the night */}
      <path d="M22 8A12 12 0 1 0 34 26A9.5 9.5 0 1 1 22 8Z" fill={PAL.yellow} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
