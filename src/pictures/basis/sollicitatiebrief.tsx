import type { JSX } from 'react';
import { PAL, Shade, Shine } from '../kit';

export default {
  // "de sollicitatiebrief": the application letter — a letter standing up out of an open envelope:
  // at its top a small brown work bag (it is about a job), then lines of text and a signature;
  // a blue pen lies beside it.
  'w.sollicitatiebrief': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      {/* The envelope's back and open flap */}
      <path d="M14 62L56 40L98 62Z" fill={PAL.mist} />
      <rect x="14" y="62" width="84" height="44" rx="4" fill={PAL.mist} />
      {/* The letter */}
      <Shade color={PAL.paperShade} opacity={1} at={[94, 50, 8, 50]}>
        <rect x="24" y="12" width="64" height="80" rx="3" fill={PAL.white} />
      </Shade>
      {/* The work bag at the top */}
      <rect x="30" y="22" width="22" height="16" rx="3" fill={PAL.cardDark} />
      <path d="M36 22V18H46V22" stroke={PAL.brown} strokeWidth="2.6" fill="none" />
      <rect x="30" y="28" width="22" height="3" fill={PAL.brown} opacity=".5" />
      <path d="M58 24H80M58 32H74" stroke={PAL.navy} strokeWidth="3" />
      <path d="M30 46H82M30 53H78M30 60H82M30 67H70" stroke={PAL.line} strokeWidth="2.4" />
      {/* The envelope's front */}
      <Shade color={PAL.paperShade} opacity={1} at={[102, 90, 12, 24]}>
        <path d="M14 66L56 86L98 66V102Q98 106 94 106H18Q14 106 14 102Z" fill={PAL.paper} />
      </Shade>
      <path d="M14 104L48 82M98 104L64 82" stroke={PAL.mist} strokeWidth="2" />
      {/* The signature, on the part of the letter that shows */}
      <path d="M34 76c3 -8 5 -9 6 -5s-3 7 1 5 4 -7 6 -5 2 5 5 2" fill="none" stroke={PAL.navy} strokeWidth="2.2" />
      {/* The pen */}
      <path d="M92 58L106 30" stroke={PAL.blue} strokeWidth="6" />
      <path d="M92 58L90 64L95 60Z" fill={PAL.ink} />
      <path d="M103 36L106 30" stroke={PAL.blueShade} strokeWidth="6" />
      <Shine d="M28 18H40" width={2.4} opacity={0.5} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
