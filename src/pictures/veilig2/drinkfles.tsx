import type { JSX } from 'react';
import { Ground, PAL, Shade, Shine } from '../kit';

export default {
  // "de drinkfles": the drinks bottle — a plain see-through water bottle: a light blue body with the water
  // inside up to two thirds, two grooves round its waist, and a blue sports cap with a pull spout. No label.
  'w.drinkfles': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      <Ground cx={60} cy={106} rx={26} ry={4} />
      {/* The sports cap: a pull spout on a screw cap, a small ring at its side */}
      <rect x="54" y="8" width="12" height="9" rx="3" fill={PAL.blueLight} />
      <rect x="47" y="15" width="26" height="14" rx="4" fill={PAL.blue} />
      <rect x="63" y="15" width="10" height="14" rx="3" fill={PAL.blueShade} />
      <path d="M51 18V26M56 18V26" stroke={PAL.blueShade} strokeWidth="1.6" />
      {/* The see-through bottle */}
      <Shade color={PAL.ice} opacity={0.9} at={[90, 70, 14, 50]}>
        <path d="M50 28H70Q84 34 84 46V98Q84 106 76 106H44Q36 106 36 98V46Q36 34 50 28Z" fill="#e3f5ff" />
      </Shade>
      {/* The water */}
      <Shade color={PAL.sky} opacity={0.6} at={[90, 80, 12, 40]}>
        <path d="M37 54H83V98Q83 105 76 105H44Q37 105 37 98Z" fill={PAL.ice} />
      </Shade>
      <path d="M37 54H83" stroke={PAL.sky} strokeWidth="2.4" />
      {/* Grooves round the waist */}
      <path d="M37 70Q60 76 83 70M37 80Q60 86 83 80" fill="none" stroke={PAL.sky} strokeWidth="1.8" opacity=".7" />
      <Shine d="M44 42V96" width={4} opacity={0.85} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
