import type { JSX } from 'react';
import { PAL, Shine } from '../kit';

export default {
  // "de berm": the verge (the grass next to the road) — the edge of a dark road with its white side line,
  // and next to it a wide strip of long grass with a white roadside post standing in it.
  'w.berm': () => (
    <g strokeLinejoin="round">
      {/* The road, bottom left */}
      <path d="M6 58L66 108H6Z" fill={PAL.slate} />
      <path d="M8 70L52 106" stroke={PAL.white} strokeWidth="3.4" strokeLinecap="round" />
      {/* The verge: a wide strip of grass along the road */}
      <path d="M6 58L66 108H114V74L50 22H6Z" fill={PAL.leaf} />
      <path d="M50 22L114 74V84L44 26Z" fill={PAL.leafShade} opacity=".7" />
      <path d="M6 58L66 108H76L10 52Z" fill={PAL.leafShade} />
      {/* Tufts of long grass */}
      <g fill="none" stroke={PAL.green} strokeWidth="2.6" strokeLinecap="round">
        <path d="M22 44L24 34L26 44M28 46L31 37M40 64L42 54L44 64M64 92L66 82L68 92M70 92L73 84M92 92L94 82L96 92M30 30L32 22L34 30" />
      </g>
      {/* The roadside post: white, a black band at the top, an amber reflector */}
      <rect x="60" y="30" width="12" height="54" rx="2" fill={PAL.paperShade} transform="translate(2 2)" />
      <rect x="60" y="30" width="12" height="54" rx="2" fill={PAL.white} />
      <rect x="60" y="30" width="12" height="14" rx="2" fill={PAL.ink} />
      <rect x="63" y="34" width="6" height="6" rx="1.4" fill={PAL.orange} />
      <ellipse cx="66" cy="84" rx="10" ry="3" fill="#000" opacity=".14" />
      <Shine d="M16 40Q20 32 28 28" color={PAL.lime} width={3} opacity={0.6} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
