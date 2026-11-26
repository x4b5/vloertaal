import type { JSX } from 'react';
import { PAL, Shine } from '../kit';

export default {
  // "de blauwe envelop": the blue envelope (letters from the Belastingdienst come in it) — a blue
  // envelope with a white address window, lying a little crooked on a brown doormat just inside the
  // door. No text and no logo: grey lines in the window only.
  'w.blauweenvelop': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      {/* The doormat: its thick front edge, then its top */}
      <path d="M6 98H114V106H6Z" fill={PAL.brown} />
      <path d="M26 40H94L114 98H6Z" fill={PAL.cardDark} />
      <path d="M31 45H89L105 93H15Z" fill={PAL.card} />
      <path d="M29 51H91M27 59H93M24 67H96M21 75H99M18 83H102M16 90H104" stroke={PAL.cardShade} strokeWidth="2" />
      {/* The envelope on the mat */}
      <g transform="translate(60 70) rotate(-9) scale(0.82) translate(-60 -72)">
        <rect x="22" y="50" width="76" height="44" rx="4" fill={PAL.navy} transform="translate(2 4)" />
        <rect x="22" y="50" width="76" height="44" rx="4" fill={PAL.blue} />
        <path d="M76 50H94Q98 50 98 54V90Q98 94 94 94H76Z" fill={PAL.blueShade} opacity=".7" />
        <rect x="30" y="62" width="40" height="20" rx="2.4" fill={PAL.white} />
        <path d="M35 68H60M35 73H64M35 78H54" stroke={PAL.line} strokeWidth="2" />
        <Shine d="M27 60Q27 55 31 54" width={2.8} opacity={0.6} />
      </g>
    </g>
  ),
} as Record<string, () => JSX.Element>;
