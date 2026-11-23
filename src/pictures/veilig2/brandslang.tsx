import type { JSX } from 'react';
import { PAL, Shade, Shine } from '../kit';

export default {
  // "de brandslang": the fire hose — a red hose reel in an open red wall cabinet: the round reel with the
  // red hose wound on it in rings, a steel hub, and the black nozzle hanging down at the front.
  'w.brandslang': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      {/* The cabinet: depth edge, red frame, dark inside */}
      <rect x="14" y="12" width="92" height="94" rx="5" fill={PAL.redShade} transform="translate(0 3)" />
      <rect x="14" y="12" width="92" height="94" rx="5" fill={PAL.red} />
      <rect x="22" y="20" width="76" height="78" rx="3" fill={PAL.slateDark} />
      {/* The reel disc */}
      <circle cx="60" cy="56" r="33" fill={PAL.redShade} />
      {/* The hose in rings */}
      <Shade color={PAL.redShade} opacity={1} at={[96, 64, 16, 34]}>
        <circle cx="58" cy="56" r="30" fill={PAL.red} />
      </Shade>
      <g fill="none" stroke={PAL.redShade} strokeWidth="2">
        <circle cx="58" cy="56" r="24" />
        <circle cx="58" cy="56" r="18" />
      </g>
      {/* The hub */}
      <circle cx="58" cy="56" r="11" fill={PAL.mist} />
      <circle cx="58" cy="56" r="4.5" fill={PAL.steel} />
      {/* The end of the hose and the nozzle hanging down */}
      <path d="M36 74Q30 84 36 90" fill="none" stroke={PAL.red} strokeWidth="6" />
      <rect x="32" y="86" width="9" height="12" rx="2.5" fill={PAL.ink} />
      <Shine d="M36 42Q40 32 50 28" width={3.6} opacity={0.6} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
