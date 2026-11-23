import type { JSX } from 'react';
import { Ground, PAL, Shade, Shine } from '../kit';

export default {
  // "het potje": the potty — a small sky blue plastic potty for a toddler, seen a little from above:
  // a round bowl with a white rim and a high back rest, a little splash guard at the front.
  'w.potje': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      <Ground cx={60} cy={102} rx={42} ry={5} />
      {/* The high back rest */}
      <path d="M30 60Q28 28 60 26Q92 28 90 60Z" fill={PAL.skyShade} />
      <path d="M36 58Q36 34 60 32Q84 34 84 58Z" fill={PAL.sky} />
      {/* The body, shaded on the right */}
      <Shade color={PAL.skyShade} opacity={1} at={[100, 84, 18, 30]}>
        <path d="M18 64Q18 58 26 58H94Q102 58 102 64L94 92Q92 102 80 102H40Q28 102 26 92Z" fill={PAL.sky} />
      </Shade>
      {/* The rim and the bowl */}
      <ellipse cx="60" cy="64" rx="40" ry="12" fill={PAL.white} />
      <ellipse cx="60" cy="65" rx="30" ry="7.6" fill={PAL.skyShade} />
      <ellipse cx="62" cy="67" rx="22" ry="4.6" fill={PAL.blueShade} opacity=".6" />
      {/* The splash guard at the front */}
      <path d="M50 76Q60 64 70 76Q66 80 60 80Q54 80 50 76Z" fill={PAL.ice} />
      <Shine d="M26 72Q28 86 34 92" width={3.6} opacity={0.6} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
