import type { JSX } from 'react';
import { Ground, PAL, Shade, Shine } from '../kit';

/** Light sand: the light step of cardboard (docs/tekenstijl.md palette). */
const SAND = '#f0c48a';

export default {
  // "de zandbak": the sandpit — a low square wooden frame full of sand, seen from the front and a little
  // from above, with a sand castle, a red bucket and a blue spade stuck in the sand.
  'w.zandbak': () => (
    <g strokeLinejoin="round">
      <Ground cx={60} cy={106} rx={52} ry={4} />
      {/* The wooden frame: back rim, sand, right side and front plank */}
      <path d="M10 82L34 56H110L86 82Z" fill={PAL.wood} />
      <path d="M17 80L37 59H103L83 80Z" fill={SAND} />
      <path d="M86 82L110 56V74L86 100Z" fill={PAL.cardDark} />
      <rect x="10" y="82" width="76" height="18" rx="2" fill={PAL.card} />
      <path d="M14 91H82" stroke={PAL.cardShade} strokeWidth="1.6" strokeLinecap="round" />
      <Shine d="M16 86H40" width={3} opacity={0.55} />
      {/* The sand castle */}
      <path d="M32 74V56H37V52H42V56H47V52H52V56H57V74Z" fill={PAL.card} />
      <rect x="49" y="52" width="8" height="22" fill={PAL.cardShade} />
      <path d="M41 74V66A3 3 0 0 1 47 66V74Z" fill={PAL.cardDark} />
      {/* The red bucket */}
      <Shade color={PAL.redShade} opacity={1} at={[84, 64, 4, 14]}>
        <path d="M62 50H84L81 72H65Z" fill={PAL.red} />
      </Shade>
      <ellipse cx="73" cy="50" rx="11" ry="3" fill={PAL.redShade} />
      <path d="M63 50Q73 34 83 50" fill="none" stroke={PAL.slate} strokeWidth="2" strokeLinecap="round" />
      {/* The blue spade stuck in the sand */}
      <path d="M94 26L90 58" stroke={PAL.blue} strokeWidth="4.4" strokeLinecap="round" />
      <rect x="90" y="20" width="10" height="6" rx="3" fill={PAL.blue} transform="rotate(7 95 23)" />
      <path d="M84 58H96L94 70Q90 74 86 70Z" fill={PAL.blueShade} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
