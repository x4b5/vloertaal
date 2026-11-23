import type { JSX } from 'react';
import { Hand, Move, PAL, SKIN, Shade, Shine } from '../kit';

export default {
  // "de blusdeken": the fire blanket — a red pouch on the wall with a white flame mark, and a hand pulling
  // the off-white blanket half out of its bottom by one of its two black tapes.
  // Once and slowly: the hand pulls the blanket down out of the pouch.
  'w.blusdeken': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      {/* The blanket comes down out of the pouch, pulled by its tape */}
      <Move kind="from" dy={-30} once>
        <Shade color={PAL.paperShade} opacity={1} at={[92, 76, 14, 40]}>
          <path d="M30 44H90L92 86Q84 92 74 88Q64 84 54 90Q42 94 28 88Z" fill={PAL.paper} />
        </Shade>
        <path d="M48 56Q50 70 46 86M74 56Q72 70 75 84" fill="none" stroke={PAL.mist} strokeWidth="2.2" />
        {/* The black tapes: the right one hangs, the left one is in the hand */}
        <path d="M88 82L90 94" stroke={PAL.ink} strokeWidth="4" />
        <path d="M32 86L41 104" stroke={PAL.ink} strokeWidth="4" />
        <Hand pose="hold" x={44} y={126} rotate={-10} scale={0.7} skin={SKIN.amina} sleeve={['#2f8f3e', '#23722f']} />
      </Move>
      {/* The pouch on the wall, its depth edge */}
      <rect x="24" y="12" width="72" height="44" rx="6" fill={PAL.redShade} transform="translate(0 3)" />
      <Shade color={PAL.redShade} opacity={1} at={[100, 34, 12, 30]}>
        <rect x="24" y="12" width="72" height="44" rx="6" fill={PAL.red} />
      </Shade>
      <rect x="24" y="46" width="72" height="10" rx="4" fill={PAL.redShade} />
      {/* A white flame mark on the pouch */}
      <path d="M60 18C65 24 70 27 70 34C70 39 66 42 60 42C54 42 50 39 50 34C50 29 54 27 55 23C57 27 58 28 59 28C59 24 59 21 60 18Z" fill={PAL.white} />
      <Shine d="M30 20H44" width={3} opacity={0.6} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
