import type { JSX } from 'react';
import { Ground, Hand, Move, PAL, SKIN, Shine } from '../kit';

/** Small green herb bits in a heap on the board: [x, y, size, colour]. */
const BITS: [number, number, number, string][] = [
  [26, 90, 4, PAL.green], [32, 86, 4.4, PAL.leaf], [38, 91, 4, PAL.greenShade], [44, 85, 4.6, PAL.green],
  [50, 90, 4.2, PAL.leaf], [56, 86, 4, PAL.greenShade], [62, 91, 4.4, PAL.green], [68, 87, 4, PAL.leaf],
  [36, 82, 4, PAL.green], [48, 80, 4.2, PAL.greenShade], [60, 81, 4, PAL.leaf], [74, 92, 3.6, PAL.green],
  [30, 95, 3.6, PAL.leaf], [44, 96, 3.8, PAL.green], [58, 96, 3.6, PAL.greenShade], [70, 97, 3.6, PAL.leaf],
];

export default {
  // "hakken": to chop (very small) — on a wooden board a heap of tiny green herb bits; a chef's knife with its
  // point on the board rocks up and down over them, a hand on its black handle.
  // On the intro card the knife rocks on its point (three rounds: chopping is done again and again).
  'w.hakken': () => (
    <g strokeLinejoin="round">
      <Ground cx={60} cy={106} rx={52} ry={4} />
      {/* The board */}
      <rect x="8" y="78" width="104" height="26" rx="7" fill={PAL.cardDark} transform="translate(0 3)" />
      <rect x="8" y="78" width="104" height="26" rx="7" fill={PAL.card} />
      <Shine d="M16 82H44" width={2.6} opacity={0.4} />
      {BITS.map(([x, y, s, c], i) => (
        <rect key={i} x={x - s / 2} y={y - s / 2} width={s} height={s} rx="1.2" fill={c} transform={`rotate(${(i * 37) % 60} ${x} ${y})`} />
      ))}
      {/* The knife, its point on the board, rocking over the herbs */}
      <Move kind="turn" turn={-28} at={[16, 88]}>
        <g transform="translate(16 88) rotate(-14)">
          <path d="M0 0Q4 -11 20 -15L56 -21V2Q26 4 0 0Z" fill={PAL.mist} />
          <path d="M0 0Q26 -2 56 -4V2Q26 4 0 0Z" fill={PAL.steel} />
          <Shine d="M10 -10Q20 -15 50 -18" width={2.4} opacity={0.9} />
          <rect x="55" y="-22" width="6" height="25" rx="2" fill={PAL.steel} />
          <rect x="60" y="-17" width="34" height="13" rx="5.5" fill={PAL.ink} />
          <Hand pose="hold" x={77} y={2} scale={0.56} skin={SKIN.henk} sleeve={[PAL.paper, PAL.paperShade]} />
        </g>
      </Move>
    </g>
  ),
} as Record<string, () => JSX.Element>;
