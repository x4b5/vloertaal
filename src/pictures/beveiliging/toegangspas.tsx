import type { JSX } from 'react';
import { Hand, Motion, Move, PAL, SKIN, Shade, Shine } from '../kit';

export default {
  // "de toegangspas": the access card (a card that opens the door) — a dark card reader on the wall,
  // with the round wave sign of a contactless card and a light; a hand holds a blue access card with a
  // gold chip up against it, and the light goes green.
  // Twice (two steps): the hand brings the card to the reader, then the green light and its lines come on.
  'w.toegangspas': () => (
    <g strokeLinejoin="round">
      {/* The reader, its depth edge */}
      <rect x="62" y="14" width="42" height="72" rx="8" fill={PAL.slateDark} transform="translate(3 3)" />
      <Shade color={PAL.slateDark} opacity={1} at={[106, 50, 8, 40]}>
        <rect x="62" y="14" width="42" height="72" rx="8" fill={PAL.slate} />
      </Shade>
      <Shine d="M67 22V44" width={2.6} opacity={0.5} />
      <path d="M77 46Q83 40 77 34M84 50Q94 40 84 30" fill="none" stroke={PAL.steel} strokeWidth="3" strokeLinecap="round" />
      <circle cx="73" cy="40" r="3" fill={PAL.steel} />
      {/* The light goes green */}
      <circle cx="83" cy="72" r="6" fill={PAL.slateDark} />
      <Move kind="show">
        <circle cx="83" cy="72" r="5" fill={PAL.leaf} />
        <Motion x={83} y={72} dir={0} spread={80} n={3} len={6} gap={10} color={PAL.leaf} width={3} />
      </Move>
      {/* The hand with the card */}
      <Move kind="from" dx={-30} dy={14}>
        <g transform="rotate(-14 50 54)">
          <rect x="34" y="30" width="44" height="30" rx="4" fill={PAL.blueShade} transform="translate(2 3)" />
          <rect x="34" y="30" width="44" height="30" rx="4" fill={PAL.sky} />
          <rect x="40" y="38" width="10" height="8" rx="1.6" fill={PAL.yellow} />
          <path d="M40 52H66" stroke={PAL.ice} strokeWidth="3" strokeLinecap="round" />
        </g>
        <Hand pose="hold" x={36} y={104} rotate={20} scale={0.9} skin={SKIN.henk} sleeve={[PAL.navy, PAL.navyShade]} />
      </Move>
    </g>
  ),
} as Record<string, () => JSX.Element>;
