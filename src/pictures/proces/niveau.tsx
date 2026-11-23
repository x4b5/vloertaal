import type { JSX } from 'react';
import { Arrow, Ground, Move, PAL, Shade, Shine } from '../kit';

export default {
  // "het niveau": the level — a tall steel tank with a see-through sight glass down its front; the blue
  // liquid in it stands half-way, and an orange arrow points at the line where it stops.
  // On the intro card the liquid rises in the glass to its level (once: the tank fills).
  'w.niveau': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      <Ground cx={56} cy={104} rx={40} ry={4.5} />
      {/* The tank: body with its right side in shade, a lit lid, two seams */}
      <Shade color={PAL.steel} opacity={1} at={[96, 60, 18, 60]}>
        <path d="M22 24V98Q22 104 32 104H80Q90 104 90 98V24Z" fill={PAL.mist} />
      </Shade>
      <ellipse cx="56" cy="24" rx="34" ry="9" fill={PAL.paper} />
      <ellipse cx="56" cy="24" rx="10" ry="3" fill={PAL.steel} />
      <path d="M22 44Q56 52 90 44M22 84Q56 92 90 84" fill="none" stroke={PAL.steel} strokeWidth="2" />
      <Shine d="M27 34V76" width={3} opacity={0.8} />
      {/* The sight glass: a dark frame, the empty part light, the liquid blue */}
      <rect x="44" y="34" width="20" height="62" rx="6" fill={PAL.slate} />
      <rect x="48.5" y="38.5" width="11" height="53" rx="3" fill={PAL.white} />
      <Move kind="sag" grow={0.25} once>
        <rect x="48.5" y="64" width="11" height="27.5" rx="3" fill={PAL.sky} />
        <path d="M49 64.5H59" stroke={PAL.skyShade} strokeWidth="2.4" strokeLinecap="butt" />
      </Move>
      {/* The marks along the glass */}
      <path d="M38 44H42M38 54H42M38 64H42M38 74H42M38 84H42" stroke={PAL.slate} strokeWidth="2" />
      {/* The arrow at the level */}
      <Arrow from={[110, 64]} to={[68, 64]} color={PAL.orange} width={7} head={12} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
