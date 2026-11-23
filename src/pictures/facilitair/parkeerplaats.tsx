import type { JSX } from 'react';
import { PAL, Shade, Shine } from '../kit';

export default {
  // "de parkeerplaats": the parking space — a grey car park seen from behind and a little above: white
  // lines mark the spaces, and a red car stands neatly in the middle one (seen from the back).
  'w.parkeerplaats': () => (
    <g strokeLinejoin="round">
      {/* The asphalt */}
      <path d="M4 108L18 52H102L116 108Z" fill={PAL.steel} />
      <path d="M4 108L18 52H32L22 108Z" fill={PAL.white} opacity=".08" />
      {/* The white lines of the spaces: the back line and the side lines */}
      <path d="M20 56H100" stroke={PAL.white} strokeWidth="3" strokeLinecap="round" />
      <path d="M26 56L14 106M94 56L106 106" stroke={PAL.white} strokeWidth="4" strokeLinecap="round" />
      {/* The car's shadow */}
      <ellipse cx="60" cy="98" rx="36" ry="5" fill="#000" opacity=".2" />
      {/* The wheels */}
      <rect x="28" y="84" width="12" height="16" rx="3" fill={PAL.slateDark} />
      <rect x="80" y="84" width="12" height="16" rx="3" fill={PAL.slateDark} />
      {/* The cabin and the rear window */}
      <path d="M36 66L42 42Q43 38 48 38H72Q77 38 78 42L84 66Z" fill={PAL.redShade} />
      <path d="M41 62L46 44Q47 42 50 42H70Q73 42 74 44L79 62Z" fill={PAL.ice} />
      <path d="M50 44H58L52 60H45Z" fill={PAL.white} opacity=".5" />
      {/* The body */}
      <Shade color={PAL.redShade} opacity={1} at={[96, 80, 14, 24]}>
        <rect x="24" y="62" width="72" height="30" rx="8" fill={PAL.red} />
      </Shade>
      {/* The rear lights and the bumper */}
      <rect x="28" y="68" width="14" height="8" rx="3" fill={PAL.yellow} />
      <rect x="78" y="68" width="14" height="8" rx="3" fill={PAL.yellow} />
      <rect x="48" y="72" width="24" height="8" rx="2" fill={PAL.white} />
      <rect x="26" y="84" width="68" height="8" rx="4" fill={PAL.slate} />
      <Shine d="M30 64H50" width={2.8} opacity={0.6} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
