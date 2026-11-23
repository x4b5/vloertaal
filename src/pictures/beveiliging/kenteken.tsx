import type { JSX } from 'react';
import { Ground, PAL, Shade, Shine } from '../kit';

/** Dark blocks for the letters and numbers on the plate (shapes, no real characters), in three groups. */
const GLYPHS = [32, 41, 56, 65, 80, 89].map((x) => `M${x} 74H${x + 6}V90H${x}Z`).join('');

export default {
  // "het kenteken": the registration number (the letters and numbers of a car) — the back of a red car:
  // the rear window, the two tail lights, the bumper, and big in the middle the yellow Dutch number
  // plate with its blue band on the left and three dark groups of characters, a dash between them.
  'w.kenteken': () => (
    <g strokeLinejoin="round">
      <Ground cx={60} cy={106} rx={50} ry={4} />
      {/* The wheels */}
      <rect x="14" y="92" width="16" height="14" rx="4" fill={PAL.slateDark} />
      <rect x="90" y="92" width="16" height="14" rx="4" fill={PAL.slateDark} />
      {/* The body */}
      <Shade color={PAL.redShade} opacity={1} at={[112, 70, 16, 50]}>
        <path d="M30 22H90Q96 22 98 28L104 50Q110 52 110 60V92Q110 98 104 98H16Q10 98 10 92V60Q10 52 16 50L22 28Q24 22 30 22Z" fill={PAL.red} />
      </Shade>
      {/* The rear window */}
      <path d="M32 28H88L94 48H26Z" fill={PAL.slate} />
      <path d="M36 32H50L44 44H32Z" fill={PAL.ice} opacity=".45" />
      {/* The tail lights */}
      <rect x="13" y="56" width="16" height="9" rx="3" fill={PAL.orange} />
      <rect x="91" y="56" width="16" height="9" rx="3" fill={PAL.orange} />
      {/* The bumper */}
      <rect x="10" y="92" width="100" height="8" rx="3" fill={PAL.slateDark} />
      {/* The number plate */}
      <rect x="20" y="68" width="80" height="28" rx="4" fill={PAL.slateDark} />
      <rect x="22" y="70" width="76" height="24" rx="3" fill={PAL.yellow} />
      <path d="M22 73Q22 70 25 70H29V94H25Q22 94 22 91Z" fill={PAL.blue} />
      <path d={GLYPHS} fill={PAL.ink} />
      <path d="M50 82H53M74 82H77" stroke={PAL.ink} strokeWidth="2.6" strokeLinecap="round" />
      <Shine d="M18 54Q19 50 23 49" width={3} opacity={0.6} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
