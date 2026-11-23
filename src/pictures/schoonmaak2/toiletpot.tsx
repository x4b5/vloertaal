import type { JSX } from 'react';
import { Ground, PAL, Shade, Shine } from '../kit';

export default {
  // "de toiletpot": the toilet bowl — a white wall-hung toilet bowl seen a little from above, its lid
  // up behind it: the open white seat, the deep bowl with blue water at the bottom (no cistern, so it
  // stays apart from "de wc").
  'w.toiletpot': () => (
    <g strokeLinejoin="round">
      <Ground cx={60} cy={105} rx={26} ry={4} />
      {/* The lid, up */}
      <Shade color={PAL.paperShade} opacity={1} at={[92, 34, 12, 30]}>
        <rect x="30" y="10" width="60" height="50" rx="24" fill={PAL.paper} />
      </Shade>
      <rect x="38" y="18" width="44" height="34" rx="17" fill={PAL.mist} opacity=".45" />
      {/* The hinges */}
      <rect x="40" y="52" width="10" height="7" rx="2" fill={PAL.steel} />
      <rect x="70" y="52" width="10" height="7" rx="2" fill={PAL.steel} />
      {/* The bowl's body */}
      <Shade color={PAL.paperShade} opacity={1} at={[96, 84, 16, 26]}>
        <path d="M16 66Q18 90 44 94L48 104H72L76 94Q102 90 104 66Z" fill={PAL.paper} />
      </Shade>
      {/* The seat (a ring) and the inside of the bowl */}
      <ellipse cx="60" cy="66" rx="45" ry="15" fill={PAL.white} />
      <path d="M15 66A45 15 0 0 0 105 66" fill="none" stroke={PAL.mist} strokeWidth="2" />
      <ellipse cx="60" cy="67" rx="31" ry="9" fill={PAL.mist} />
      <ellipse cx="62" cy="70" rx="18" ry="5" fill={PAL.sky} />
      <path d="M50 69.5Q56 67.5 62 68" stroke={PAL.ice} strokeWidth="2" strokeLinecap="round" fill="none" />
      <Shine d="M22 76Q28 86 40 89" width={3.2} color={PAL.mist} opacity={1} />
      <Shine d="M38 18Q34 26 34 34" width={3} opacity={0.9} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
