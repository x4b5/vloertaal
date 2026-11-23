import type { JSX } from 'react';
import { PAL, Shade, Shine } from '../kit';

export default {
  // "de werkjas": the work coat — a long white work coat on a hanger: collar and lapels, a row of press
  // studs down the front, two pockets, the long sleeves hanging down.
  'w.werkjas': () => (
    <g strokeLinejoin="round">
      {/* The hanger */}
      <path d="M60 22V14Q60 8 66 8" fill="none" stroke={PAL.steel} strokeWidth="3.4" strokeLinecap="round" />
      <path d="M36 26L60 18L84 26" fill="none" stroke={PAL.steel} strokeWidth="4" strokeLinecap="round" />
      {/* The sleeves */}
      <path d="M30 28L20 40L16 96H30L36 52Z" fill={PAL.paperShade} />
      <path d="M90 28L100 40L104 96H90L84 52Z" fill={PAL.mist} />
      <rect x="15" y="90" width="16" height="7" rx="2" fill={PAL.mist} />
      <rect x="89" y="90" width="16" height="7" rx="2" fill={PAL.steel} opacity=".6" />
      {/* The body of the coat */}
      <Shade color={PAL.paperShade} opacity={1} at={[96, 66, 16, 50]}>
        <path d="M30 28L46 22H74L90 28L88 108H32Z" fill={PAL.white} />
      </Shade>
      {/* Collar and lapels */}
      <path d="M46 22L60 50L74 22L68 20H52Z" fill={PAL.slate} opacity=".18" />
      <path d="M46 22L60 50L52 52L40 30Z" fill={PAL.paperShade} />
      <path d="M74 22L60 50L68 52L80 30Z" fill={PAL.mist} />
      <path d="M60 50V108" stroke={PAL.mist} strokeWidth="2" />
      {/* Press studs and pockets */}
      <g fill={PAL.steel}>
        <circle cx="64" cy="60" r="2.2" />
        <circle cx="64" cy="74" r="2.2" />
        <circle cx="64" cy="88" r="2.2" />
      </g>
      <rect x="36" y="80" width="18" height="14" rx="2" fill={PAL.paperShade} />
      <rect x="70" y="80" width="16" height="14" rx="2" fill={PAL.mist} />
      <rect x="72" y="40" width="12" height="9" rx="2" fill={PAL.mist} />
      <rect x="76" y="34" width="3" height="10" rx="1.2" fill={PAL.sky} />
      <Shine d="M36 36Q35 50 36 66" width={3.4} opacity={0.9} color={PAL.paper} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
