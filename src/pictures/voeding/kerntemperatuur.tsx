import type { JSX } from 'react';
import { Ground, PAL, Shine } from '../kit';

export default {
  // "de kerntemperatuur": the core temperature (the temperature inside the food) — a round roast cut
  // through: a brown crust, pink meat, and right in its middle the core, marked as a red target; the
  // steel tip of a thermometer reaches in from the top right to exactly that core.
  'w.kerntemperatuur': () => (
    <g strokeLinejoin="round">
      <Ground cx={56} cy={104} rx={42} ry={4} />
      {/* The roast: its uncut back, then the cut face */}
      <ellipse cx="62" cy="68" rx="40" ry="34" fill={PAL.brown} />
      <circle cx="54" cy="68" r="36" fill={PAL.wood} />
      <circle cx="54" cy="68" r="30" fill={PAL.redLight} />
      <circle cx="54" cy="68" r="19" fill={PAL.blush} opacity=".55" />
      {/* The core: a red target */}
      <circle cx="54" cy="68" r="10" fill="none" stroke={PAL.red} strokeWidth="3.6" />
      <circle cx="54" cy="68" r="4.5" fill={PAL.red} />
      <Shine d="M26 56Q30 42 44 36" width={3} opacity={0.5} />
      {/* The thermometer's probe, its tip at the core, its handle at the top right */}
      <path d="M57 65L96 24" stroke={PAL.mist} strokeWidth="4" strokeLinecap="round" />
      <path d="M96 24L106 13" stroke={PAL.slateDark} strokeWidth="10" strokeLinecap="round" />
    </g>
  ),
} as Record<string, () => JSX.Element>;
