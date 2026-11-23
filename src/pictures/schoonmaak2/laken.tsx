import type { JSX } from 'react';
import { Ground, PAL, Shine } from '../kit';

export default {
  // "het laken": the sheet (on a bed) — a bare mattress on a low wooden bed base, a smooth white sheet
  // stretched over it and hanging over the front edge; its front-left corner is folded back, so the
  // blue mattress shows under it. No pillow or duvet (that is "opmaken").
  'w.laken': () => (
    <g strokeLinejoin="round">
      <Ground cx={58} cy={103} rx={52} ry={4.5} />
      {/* The bed base */}
      <rect x="8" y="86" width="82" height="15" rx="2" fill={PAL.card} />
      <path d="M90 86L108 60V75L90 101Z" fill={PAL.cardDark} />
      {/* The mattress (seen at the folded corner) */}
      <path d="M8 56L26 30H108L90 56Z" fill={PAL.ice} />
      <rect x="8" y="56" width="82" height="30" fill={PAL.sky} />
      <path d="M90 56L108 30V60L90 86Z" fill={PAL.skyShade} />
      {/* The sheet: top, right side, front with its hanging hem */}
      <path d="M36 56L18 42L26 30H108L90 56Z" fill={PAL.paper} />
      <path d="M90 56L108 30V62L90 90Z" fill={PAL.mist} />
      <path d="M36 56H90V90Q80 95 70 90Q60 95 50 90Q42 94 36 90Z" fill={PAL.paperShade} />
      <path d="M52 62V86M72 62V86" stroke={PAL.mist} strokeWidth="2" strokeLinecap="round" />
      {/* The folded-back corner: the sheet's underside */}
      <path d="M36 56L18 42L42 40Z" fill={PAL.mist} />
      <Shine d="M50 36H96" width={3} color={PAL.white} opacity={1} />
      <Shine d="M46 46H80" width={2.4} color={PAL.paperShade} opacity={1} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
