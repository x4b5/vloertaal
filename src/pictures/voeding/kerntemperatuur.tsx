import type { JSX } from 'react';
import { Ground, Move, PAL, Shade, Shine } from '../kit';

export default {
  // "de kerntemperatuur": the core temperature (the temperature inside the food) — a piece of cooked
  // meat cut through: a brown crust round pink meat, and right in its middle the core, marked as a red
  // target; the steel probe of a thermometer reaches in from above to exactly that core.
  // On the intro card: the probe is pushed in along its length down to the core. Once.
  'w.kerntemperatuur': () => (
    <g strokeLinejoin="round">
      <Ground cx={60} cy={102} rx={48} ry={4} />
      {/* The cut meat: a brown crust (its right side in shade), the pink inside */}
      <Shade color={PAL.cardDark} opacity={1} at={[110, 74, 16, 34]}>
        <path d="M12 74Q12 44 42 40Q60 36 80 40Q108 46 108 74Q108 100 78 102H40Q12 100 12 74Z" fill={PAL.wood} />
      </Shade>
      <path d="M20 74Q20 50 44 47Q60 44 78 47Q100 52 100 74Q100 94 76 95H42Q20 94 20 74Z" fill={PAL.redLight} />
      <path d="M32 74Q32 60 50 58Q60 57 72 58Q88 62 88 74Q88 86 70 87H48Q32 86 32 74Z" fill={PAL.blush} opacity=".45" />
      {/* The core: a red target */}
      <ellipse cx="60" cy="73" rx="12" ry="9" fill="none" stroke={PAL.red} strokeWidth="3.6" />
      <circle cx="60" cy="73" r="4.2" fill={PAL.red} />
      <Shine d="M20 62Q26 48 40 44" width={3} opacity={0.5} />
      {/* The thermometer's probe, its tip at the core, and its dark handle */}
      <Move kind="from" dx={11} dy={-26} once>
      <path d="M61 70L80 24" stroke={PAL.mist} strokeWidth="4" strokeLinecap="round" />
      <path d="M80 24L85 12" stroke={PAL.slateDark} strokeWidth="10" strokeLinecap="round" />
      </Move>
    </g>
  ),
} as Record<string, () => JSX.Element>;
