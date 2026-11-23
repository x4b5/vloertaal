import type { JSX } from 'react';
import { PAL, SKIN, Shade, Shine } from '../kit';

const SK = SKIN.amina;

export default {
  // "de snee": the cut — one big finger standing up, with a thin straight red line across its tip in a pink rim
  // (a small cut, no blood), and the yellow box-cutter that did it lying at the bottom right.
  'w.snee': () => (
    <g>
      {/* The box-cutter, lying on a slant */}
      <g transform="rotate(-28 86 92)">
        <path d="M98 84H108L118 96H98Z" fill={PAL.mist} />
        <path d="M98 84H108L111 88H98Z" fill={PAL.white} />
        <path d="M104 84L108 96M110 87L112 96" stroke={PAL.steel} strokeWidth="1.3" />
        <rect x="58" y="84" width="44" height="13" rx="4" fill={PAL.yellow} />
        <rect x="58" y="91" width="44" height="6" rx="3" fill={PAL.yellowShade} />
        <rect x="66" y="82" width="9" height="4" rx="1.6" fill={PAL.slate} />
        <Shine d="M63 87H90" color={PAL.yellowShine} width={2.4} opacity={0.8} />
      </g>
      {/* The finger, cut off at the bottom (a hand below the card) */}
      <Shade color={SK[1]} opacity={0.85} at={[66, 60, 9, 60]}>
        <path d="M30 120V36Q30 14 48 14Q66 14 66 36V120Z" fill={SK[0]} />
      </Shade>
      {/* Nail */}
      <path d="M38 34Q38 22 48 22Q58 22 58 34V40Q48 44 38 40Z" fill="#d9a585" />
      <path d="M41 30Q42 25 47 24" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" opacity=".55" fill="none" />
      {/* Knuckle lines */}
      <path d="M38 76Q48 79 58 76M39 81Q48 84 57 81" stroke={SK[1]} strokeWidth="1.6" strokeLinecap="round" fill="none" />
      {/* The cut: a pink rim and a thin red line */}
      <path d="M33 61L63 51" stroke={PAL.redLight} strokeWidth="8" strokeLinecap="round" />
      <path d="M35 60.4L61 51.6" stroke={PAL.red} strokeWidth="3" strokeLinecap="round" />
    </g>
  ),
} as Record<string, () => JSX.Element>;
