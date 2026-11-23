import type { JSX } from 'react';
import { Ground, PAL, Shade, Shine } from '../kit';

export default {
  // "de kliko": the wheelie bin — a tall green bin on two wheels, a little from the right: the body narrows
  // to the bottom, a dark green lid with a lip over the top, the handle sticking out at the back and a black wheel.
  'w.kliko': () => (
    <g strokeLinejoin="round">
      <Ground cx={60} cy={104} rx={34} ry={4.5} />
      {/* The side of the body (in depth, to the right) */}
      <path d="M78 32L94 26L90 96L76 102Z" fill={PAL.greenShade} />
      {/* The wheel at the back */}
      <circle cx="84" cy="96" r="9" fill={PAL.ink} />
      <circle cx="84" cy="96" r="3.4" fill={PAL.steel} />
      {/* The front of the body */}
      <Shade color={PAL.greenShade} opacity={0.5} at={[84, 70, 8, 40]}>
        <path d="M30 32H78L74 100Q74 102 72 102H38Q36 102 36 100Z" fill={PAL.green} />
      </Shade>
      <path d="M40 46H70M41 60H69" stroke={PAL.greenShade} strokeWidth="2.2" strokeLinecap="round" />
      <Shine d="M36 42V84" width={3.6} opacity={0.5} />
      {/* The lid with its lip, and the handle bar behind it */}
      <path d="M92 20L106 17V24L96 27Z" fill={PAL.slateDark} />
      <path d="M26 26L84 20L100 18L98 24L80 30H28Z" fill={PAL.greenShade} />
      <rect x="26" y="26" width="54" height="9" rx="2.5" fill="#256b31" />
      <Shine d="M32 27H58" width={2.6} opacity={0.45} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
