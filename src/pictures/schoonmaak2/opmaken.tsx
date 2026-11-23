import type { JSX } from 'react';
import { Ground, Move, PAL, Shine, Sparkle } from '../kit';

export default {
  // "opmaken": to make (a bed) — a hotel bed seen from the front left, made up neatly: the white pillow
  // against the wooden headboard, the light-blue duvet smooth over the white sheet, its top edge folded
  // back; two sparkles: done.
  // Once: the duvet comes down onto the bed and settles, then the sparkles appear.
  'w.opmaken': () => (
    <g strokeLinejoin="round">
      <Ground cx={58} cy={105} rx={54} ry={4.5} />
      <g transform="translate(58 104) scale(1.14 1.22) translate(-58 -104)">
      {/* The headboard */}
      <path d="M12 40Q12 34 18 34H26Q32 34 32 40V60L12 84Z" fill={PAL.wood} />
      <path d="M26 34Q32 34 32 40V60L26 68Z" fill={PAL.cardDark} />
      {/* The bed base */}
      <path d="M12 86H90L104 68V82L90 100H12Z" fill={PAL.card} />
      <path d="M90 86L104 68V82L90 100Z" fill={PAL.cardDark} />
      {/* The mattress with the sheet */}
      <path d="M12 70L28 50H104L90 70Z" fill={PAL.paper} />
      <rect x="12" y="70" width="78" height="16" fill={PAL.paperShade} />
      <path d="M90 70L104 50V68L90 86Z" fill={PAL.mist} />
      {/* The pillow */}
      <path d="M22 60Q20 52 28 50L40 46Q46 46 46 52L42 62Q40 66 34 66H26Q22 66 22 60Z" fill={PAL.white} />
      <path d="M42 62Q40 66 34 66H26Q30 62 40 60Z" fill={PAL.paperShade} />
      {/* The duvet */}
      <Move kind="from" dy={-26} once>
        <path d="M44 70L58 50H105L91 70Z" fill={PAL.ice} />
        <path d="M44 70H91V90H44Z" fill={PAL.sky} />
        <path d="M91 70L105 50V70L91 90Z" fill={PAL.skyShade} />
        {/* The folded-back top edge */}
        <path d="M44 70L58 50H66L52 70Z" fill={PAL.white} />
        <path d="M52 70H44V90" fill="none" stroke={PAL.skyShade} strokeWidth="1.6" />
        <Shine d="M66 58H96" width={2.6} color={PAL.white} opacity={0.8} />
      </Move>
      </g>
      <Move kind="show">
        <Sparkle x={102} y={20} r={9} />
        <Sparkle x={84} y={13} r={6} />
      </Move>
    </g>
  ),
} as Record<string, () => JSX.Element>;
