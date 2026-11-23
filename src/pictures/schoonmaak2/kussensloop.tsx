import type { JSX } from 'react';
import { PAL, Shade, Shine } from '../kit';

export default {
  // "de kussensloop": the pillowcase — a white pillowcase with a blue band at its open end; the light-blue
  // pillow sticks out of the opening on the right (half in).
  'w.kussensloop': () => (
    <g strokeLinejoin="round">
      {/* Depth edge */}
      <path d="M14 46Q12 36 22 36Q50 40 80 36Q88 36 88 46V86Q88 96 80 96Q50 92 22 96Q12 96 14 86Z" fill={PAL.paperShade} transform="translate(0 4)" />
      {/* The pillow sticking out of the open end */}
      <Shade color={PAL.skyShade} opacity={0.5} at={[112, 66, 10, 30]}>
        <path d="M80 42Q98 40 106 44Q110 48 108 66Q110 84 106 88Q98 92 80 90Z" fill={PAL.ice} />
      </Shade>
      <path d="M104 44L110 40M104 88L110 92" stroke={PAL.ice} strokeWidth="4" strokeLinecap="round" />
      {/* The case */}
      <Shade color={PAL.paperShade} opacity={1} at={[60, 104, 60, 20]}>
        <path d="M14 46Q12 36 22 36Q50 40 80 36Q88 36 88 46V86Q88 96 80 96Q50 92 22 96Q12 96 14 86Q16 66 14 46Z" fill={PAL.paper} />
      </Shade>
      <path d="M18 38L10 32M18 94L10 100" stroke={PAL.paper} strokeWidth="5" strokeLinecap="round" />
      {/* The band at the open end */}
      <path d="M74 37Q81 36.5 82 37V95Q81 95.5 74 95Z" fill={PAL.sky} />
      <path d="M82 37Q88 37 88 46V86Q88 95 82 95Z" fill={PAL.skyShade} />
      <path d="M32 60Q48 64 64 60M30 74Q46 78 62 74" fill="none" stroke={PAL.mist} strokeWidth="2" strokeLinecap="round" />
      <Shine d="M22 46Q36 44 54 46" width={3.2} color={PAL.white} opacity={1} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
