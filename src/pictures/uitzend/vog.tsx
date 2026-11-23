import type { JSX } from 'react';
import { PAL, Shine, Tick, twinkle } from '../kit';

export default {
  // "de VOG": the certificate of conduct — an official paper: a navy band along the top, grey lines of
  // text, a round gold government seal with a star at the bottom left, and a big green tick badge at the
  // bottom right. No readable text.
  'w.vog': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      {/* The paper and its depth edge */}
      <rect x="22" y="10" width="70" height="96" rx="4" fill={PAL.paperShade} transform="translate(3 3)" />
      <rect x="22" y="10" width="70" height="96" rx="4" fill={PAL.white} />
      <path d="M22 14Q22 10 26 10H88Q92 10 92 14V24H22Z" fill={PAL.navy} />
      <path d="M30 17H50" stroke={PAL.white} strokeWidth="3" opacity=".7" />
      {/* Lines of text */}
      <path d="M30 34H84M30 43H80M30 52H84M30 61H70" stroke={PAL.line} strokeWidth="3" />
      {/* The seal: a gold rosette with a star */}
      <circle cx="42" cy="86" r="14" fill={PAL.yellowShade} />
      <circle cx="42" cy="85" r="13" fill={PAL.yellow} />
      <circle cx="42" cy="85" r="9" fill="none" stroke={PAL.yellowShade} strokeWidth="1.6" />
      <path d={twinkle(42, 85, 6)} fill={PAL.yellowShade} />
      <path d="M36 97L32 108L38 105L41 109L42 98Z" fill={PAL.red} />
      {/* The tick */}
      <Tick x={82} y={88} r={17} color={PAL.green} shade={PAL.greenShade} />
      <Shine d="M27 30V54" width={3} opacity={0.4} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
