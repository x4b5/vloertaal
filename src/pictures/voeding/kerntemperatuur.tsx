import type { JSX } from 'react';
import { Ground, PAL, Shine } from '../kit';

export default {
  // "de kerntemperatuur": the core temperature (the temperature inside the food) — a brown roast tied with
  // white string, lying on its side and cut open at the front: pink meat, and right in its middle the
  // core, marked as a red target; the steel probe of a thermometer reaches in from above to that core.
  'w.kerntemperatuur': () => (
    <g strokeLinejoin="round">
      <Ground cx={64} cy={102} rx={46} ry={4} />
      {/* The roast lying on its side: its long brown body going back to the right */}
      <path d="M44 40H88Q110 40 110 70Q110 100 88 100H44Z" fill={PAL.cardDark} />
      <path d="M88 40Q110 40 110 70Q110 100 88 100H82Q100 96 100 70Q100 44 82 40Z" fill={PAL.brown} />
      <path d="M64 40Q70 70 64 100M84 40Q90 70 84 100" fill="none" stroke={PAL.paper} strokeWidth="3" />
      <Shine d="M52 46H80" width={3} opacity={0.5} color={PAL.card} />
      {/* The cut face: crust, pink meat, the core as a red target */}
      <ellipse cx="44" cy="70" rx="30" ry="30" fill={PAL.wood} />
      <ellipse cx="44" cy="70" rx="25" ry="25" fill={PAL.redLight} />
      <circle cx="44" cy="70" r="11" fill="none" stroke={PAL.red} strokeWidth="3.6" />
      <circle cx="44" cy="70" r="4.5" fill={PAL.red} />
      {/* The thermometer's probe, its tip at the core */}
      <path d="M45 67L60 22" stroke={PAL.mist} strokeWidth="4" strokeLinecap="round" />
      <path d="M60 22L64 10" stroke={PAL.slateDark} strokeWidth="10" strokeLinecap="round" />
    </g>
  ),
} as Record<string, () => JSX.Element>;
