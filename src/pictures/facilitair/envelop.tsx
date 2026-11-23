import type { JSX } from 'react';
import { PAL, Shine } from '../kit';

export default {
  // "de envelop": the envelope — one big closed white envelope, a little tilted, seen from the back: its
  // flap folded down to a point and closed with a round red seal.
  'w.envelop': () => (
    <g strokeLinejoin="round" transform="rotate(-8 60 64)">
      {/* The depth edge */}
      <rect x="14" y="30" width="92" height="64" rx="5" fill={PAL.paperShade} transform="translate(3 5)" />
      {/* The envelope */}
      <rect x="14" y="30" width="92" height="64" rx="5" fill={PAL.white} />
      {/* The side and bottom folds */}
      <path d="M16 92L54 62M104 92L66 62" stroke={PAL.paperShade} strokeWidth="3" strokeLinecap="round" />
      {/* The flap */}
      <path d="M15 33Q14 30 18 30H102Q106 30 105 33L64 68Q60 71 56 68Z" fill={PAL.paper} />
      <path d="M15 33L56 68Q60 71 64 68L105 33" fill="none" stroke={PAL.mist} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      {/* The red seal on the flap's point */}
      <circle cx="60" cy="66" r="7" fill={PAL.red} />
      <circle cx="60" cy="66" r="3.4" fill={PAL.redShade} />
      <Shine d="M20 40Q20 36 24 35" width={3} opacity={0.9} color={PAL.white} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
