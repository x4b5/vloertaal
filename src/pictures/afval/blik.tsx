import type { JSX } from 'react';
import { Ground, PAL, Shade, Shine } from '../kit';

export default {
  // "het blik": the can, the tin — an empty food tin with a red label and ribbed steel ends, its lid bent open
  // at the top, and a blue drinks can with its ring pull standing next to it.
  'w.blik': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      <Ground cx={60} cy={104} rx={48} ry={4.5} />
      {/* The drinks can, behind on the right */}
      <Shade color={PAL.blueShade} opacity={1} at={[106, 70, 6, 40]}>
        <path d="M78 36Q78 32 82 30H100Q104 32 104 36V98Q104 102 100 102H82Q78 102 78 98Z" fill={PAL.blue} />
      </Shade>
      <ellipse cx="91" cy="32" rx="12" ry="4" fill={PAL.mist} />
      <ellipse cx="94" cy="32" rx="4" ry="1.8" fill={PAL.steel} />
      <path d="M78 58H104" stroke={PAL.white} strokeWidth="4" opacity=".8" />
      <Shine d="M82 44V86" width={2.8} opacity={0.5} />
      {/* The food tin */}
      <Shade color={PAL.steel} opacity={1} at={[78, 76, 8, 40]}>
        <path d="M16 46V96A26 8 0 0 0 68 96V46Z" fill={PAL.mist} />
      </Shade>
      <Shade color={PAL.redShade} opacity={1} at={[76, 74, 10, 30]}>
        <path d="M16 56V88A26 8 0 0 0 68 88V56A26 8 0 0 1 16 56Z" fill={PAL.red} />
      </Shade>
      <path d="M28 66A26 8 0 0 0 56 66" fill="none" stroke={PAL.redLight} strokeWidth="2.4" />
      <ellipse cx="42" cy="46" rx="26" ry="8" fill={PAL.slate} />
      <ellipse cx="42" cy="46" rx="22" ry="6" fill={PAL.slateDark} />
      {/* The lid, bent open */}
      <path d="M22 44Q20 26 34 18Q46 14 54 22Q42 26 30 44Z" fill={PAL.steel} />
      <path d="M26 40Q26 28 36 22" fill="none" stroke={PAL.mist} strokeWidth="2.4" />
      <Shine d="M22 54V60M22 92V96" width={3} opacity={0.8} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
