import type { JSX } from 'react';
import { Ground, Move, PAL, Shade, Shine } from '../kit';

export default {
  // "de tassencontrole": the bag check — an open brown shoulder bag with its flap folded back and a few
  // things inside (a bottle, a box), and a big magnifying glass looking into it. On the intro card the
  // glass moves across the opening: three rounds (looking through the bag).
  'w.tassencontrole': () => (
    <g strokeLinejoin="round">
      <Ground cx={52} cy={105} rx={40} ry={4} />
      {/* The strap */}
      <path d="M22 66Q20 22 52 20Q84 22 82 66" fill="none" stroke={PAL.brown} strokeWidth="5" strokeLinecap="round" />
      {/* Inside: the back wall and what is in the bag */}
      <path d="M16 62H88L84 70H20Z" fill={PAL.brown} />
      <rect x="30" y="44" width="10" height="24" rx="2" fill={PAL.green} />
      <rect x="32" y="40" width="6" height="6" rx="1.4" fill={PAL.greenShade} />
      <rect x="46" y="50" width="20" height="18" rx="2" fill={PAL.yellow} />
      <rect x="60" y="50" width="6" height="18" fill={PAL.yellowShade} />
      <rect x="70" y="54" width="10" height="14" rx="2" fill={PAL.red} />
      {/* The bag body */}
      <Shade color={PAL.cardDark} opacity={1} at={[94, 88, 12, 26]}>
        <path d="M14 66H90L94 100Q94 104 90 104H14Q10 104 10 100Z" fill={PAL.wood} />
      </Shade>
      {/* The flap folded back over the front */}
      <path d="M14 66H90L86 80Q52 88 18 80Z" fill={PAL.cardDark} />
      <rect x="47" y="80" width="10" height="7" rx="2" fill={PAL.yellow} />
      <Shine d="M16 88V98" width={2.6} opacity={0.4} />
      {/* The magnifying glass */}
      <Move kind="from" dx={-36} dy={8}>
        <path d="M86 56L106 80" stroke={PAL.slate} strokeWidth="9" strokeLinecap="round" />
        <circle cx="72" cy="40" r="22" fill={PAL.slateDark} />
        <circle cx="72" cy="40" r="17" fill={PAL.ice} opacity=".55" />
        <path d="M60 34Q64 26 72 25" fill="none" stroke={PAL.white} strokeWidth="3.4" strokeLinecap="round" opacity=".8" />
      </Move>
    </g>
  ),
} as Record<string, () => JSX.Element>;
