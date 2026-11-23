import type { JSX } from 'react';
import { Move, PAL, SKIN, Shade, Shine } from '../kit';

const SK = SKIN.henk;
const drop = (x: number, y: number, r = 3.2) =>
  `M${x} ${y - r * 1.8}Q${x + r * 1.2} ${y} ${x + r} ${y + r * 0.7}A${r} ${r} 0 0 1 ${x - r} ${y + r * 0.7}Q${x - r * 1.2} ${y} ${x} ${y - r * 1.8}Z`;

export default {
  // "de oogdouche": the eye wash — a green squeeze bottle with a blue eye cup, tipped over an open eye (in a patch
  // of skin with a brow), rinsing it with a stream of water. On the intro card the drops keep running (three rounds).
  'w.oogdouche': () => (
    <g>
      {/* The eye, in a patch of skin, with its brow */}
      <Shade color={SK[1]} opacity={0.8} at={[108, 84, 22, 40]}>
        <ellipse cx="70" cy="84" rx="40" ry="24" fill={SK[0]} />
      </Shade>
      <path d="M40 66Q66 52 96 64" stroke={PAL.brown} strokeWidth="6" fill="none" strokeLinecap="round" />
      <path d="M44 86Q70 66 98 86Q70 104 44 86Z" fill={PAL.white} />
      <circle cx="71" cy="86" r="10" fill="#7a4a2a" />
      <circle cx="71" cy="86" r="5" fill={PAL.ink} />
      <circle cx="67.5" cy="82.5" r="2.4" fill={PAL.white} />
      <path d="M44 86Q70 66 98 86" stroke={PAL.ink} strokeWidth="2.4" fill="none" strokeLinecap="round" />
      {/* The water, from the cup down into the eye */}
      <path d="M50 52Q58 60 62 74" stroke={PAL.ice} strokeWidth="5" fill="none" strokeLinecap="round" opacity=".9" />
      <Move kind="from" dx={-14} dy={-16}>
        <path d={drop(58, 62)} fill={PAL.sky} />
        <path d={drop(64, 74, 2.8)} fill={PAL.sky} />
      </Move>
      {/* The bottle, tipped towards the eye */}
      <g transform="rotate(-140 36 34)">
        <rect x="22" y="20" width="28" height="40" rx="7" fill={PAL.greenShade} transform="translate(2 1)" />
        <rect x="22" y="20" width="28" height="40" rx="7" fill={PAL.green} />
        <rect x="27" y="30" width="18" height="18" rx="3" fill={PAL.white} />
        <path d="M36 33V45M30 39H42" stroke={PAL.green} strokeWidth="4" strokeLinecap="round" />
        <rect x="28" y="12" width="16" height="9" rx="2" fill={PAL.blueShade} />
        <path d="M26 13Q36 -2 46 13Z" fill={PAL.sky} />
      </g>
      <Shine d="M18 50Q14 42 18 34" opacity={0.6} width={2.6} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
