import type { JSX } from 'react';
import { Ground, PAL, Shine } from '../kit';

export default {
  // "bevroren": frozen — a piece of meat frozen hard inside a pale blue block of ice, with frost on top,
  // icicles hanging from its edge and a snowflake.
  'w.bevroren': () => (
    <g strokeLinejoin="round">
      <Ground cx={58} cy={104} rx={46} ry={4} />
      {/* The ice block: side, top, front */}
      <path d="M90 40L104 30V88L90 100Z" fill={PAL.sky} opacity=".7" />
      <path d="M16 40L30 30H104L90 40Z" fill={PAL.white} />
      <rect x="16" y="40" width="74" height="60" rx="4" fill={PAL.ice} />
      {/* The meat inside */}
      <path d="M28 64Q30 50 46 50Q62 48 74 56Q84 64 76 78Q66 90 48 88Q30 86 28 74Z" fill={PAL.clay} opacity=".85" />
      <path d="M40 60Q52 56 62 62Q68 68 62 74" fill="none" stroke={PAL.paper} strokeWidth="3" strokeLinecap="round" opacity=".8" />
      {/* The ice over the meat */}
      <rect x="16" y="40" width="74" height="60" rx="4" fill={PAL.ice} opacity=".35" />
      {/* Frost on the top edge and icicles */}
      <path d="M16 42Q22 48 28 42Q34 50 40 42Q46 48 52 42Q58 50 64 42Q70 48 76 42Q82 50 90 42V40H16Z" fill={PAL.white} />
      <path d="M24 100L27 108L30 100M60 100L62 106L64 100M78 100L81 109L84 100" fill={PAL.ice} />
      <Shine d="M22 52V74" width={3.4} opacity={0.9} />
      {/* The snowflake */}
      <g stroke={PAL.sky} strokeWidth="3.4" strokeLinecap="round">
        <path d="M96 6V30M85.6 12L106.4 24M85.6 24L106.4 12" />
      </g>
    </g>
  ),
} as Record<string, () => JSX.Element>;
