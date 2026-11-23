import type { JSX } from 'react';
import { Clock, ExclaimMark, PAL } from '../kit';

export default {
  // "het tijdstip": the time (when something happened) — a big clock with its hands at twenty to three,
  // and pinned to its top right edge a red badge with an exclamation mark: at that moment it happened.
  'w.tijdstip': () => (
    <g strokeLinejoin="round">
      <Clock cx={56} cy={62} r={42} hour={2.67} minute={40} rim={PAL.navy} rimShade={PAL.navyShade} />
      {/* The badge: this is when it happened */}
      <circle cx="94" cy="28" r="15" fill={PAL.redShade} />
      <circle cx="94" cy="26" r="15" fill={PAL.red} />
      <ExclaimMark x={94} y={26} size={22} color={PAL.white} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
