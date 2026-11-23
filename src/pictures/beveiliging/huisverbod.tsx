import type { JSX } from 'react';
import { Ground, PAL, Shade, Shine } from '../kit';

export default {
  // "het huisverbod": the ban (you may not come in here any more) — a shop's glass entrance door with a
  // big red no-entry sign on it, and a person in a grey hood, turned away, sent off from it.
  'w.huisverbod': () => (
    <g strokeLinejoin="round">
      <Ground cx={60} cy={105} rx={52} ry={4} />
      {/* The door */}
      <rect x="12" y="14" width="56" height="90" rx="3" fill={PAL.slate} />
      <rect x="18" y="20" width="44" height="84" rx="2" fill={PAL.ice} />
      <path d="M22 26L34 22M22 36L44 28" stroke={PAL.white} strokeWidth="2.6" strokeLinecap="round" opacity=".8" />
      <rect x="54" y="56" width="5" height="18" rx="2.5" fill={PAL.slateDark} />
      {/* The no-entry sign */}
      <circle cx="40" cy="52" r="20" fill={PAL.redShade} transform="translate(0 2)" />
      <circle cx="40" cy="52" r="20" fill={PAL.red} />
      <rect x="27" y="47" width="26" height="10" rx="2" fill={PAL.white} />
      <Shine d="M25 44Q28 36 35 33" width={2.6} opacity={0.5} />
      {/* The banned person walks off */}
      <path d="M86 76L80 102M92 76L100 102" stroke={PAL.slateDark} strokeWidth="8.5" strokeLinecap="round" />
      <ellipse cx="79" cy="103" rx="6" ry="3" fill={PAL.ink} />
      <ellipse cx="103" cy="103" rx="6" ry="3" fill={PAL.ink} />
      <Shade color={PAL.slate} opacity={0.5} at={[104, 62, 8, 24]}>
        <path d="M76 56Q76 44 89 44Q102 44 102 56V80H76Z" fill={PAL.steel} />
      </Shade>
      <Shade color={PAL.slate} opacity={0.45} at={[100, 34, 6, 14]}>
        <circle cx="89" cy="34" r="11" fill={PAL.steel} />
      </Shade>
      <path d="M78 58L74 76" stroke={PAL.steel} strokeWidth="7" strokeLinecap="round" />
    </g>
  ),
} as Record<string, () => JSX.Element>;
