import type { JSX } from 'react';
import { Hand, Move, PAL, SKIN, Sparkle } from '../kit';

const TINT = '#e3f5ff';

/** A clean nappy lying open and flat: the wide back with its tapes at the top, the narrow middle, the front. */
const OPEN = 'M36 44H88L86 58Q76 64 74 74Q74 82 80 90H44Q50 82 50 74Q48 64 38 58Z';

export default {
  // "verschonen": to change (a nappy) — on a padded green changing mat a hand from above lays down a
  // clean nappy, open and flat, its tapes ready; the used nappy lies rolled up and closed at the side.
  // (Only the mat and the nappies, no child.)
  // On the intro card the hand brings the clean nappy down onto the mat (once: one change).
  'w.verschonen': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      {/* The changing mat: raised padded edges, seen slanted */}
      <path d="M6 96L20 40H112L104 96Z" fill={PAL.leafShade} />
      <path d="M6 96H104V102Q104 106 100 106H10Q6 106 6 102Z" fill={PAL.green} />
      <path d="M14 91L26 46H106L98 91Z" fill={PAL.lime} />
      <path d="M6 96L20 40" stroke={PAL.leaf} strokeWidth="6" />
      {/* The used nappy, rolled up and taped shut */}
      <ellipse cx="25" cy="84" rx="10" ry="7.4" fill={PAL.paperShade} />
      <ellipse cx="24" cy="82" rx="9" ry="6.4" fill={PAL.paper} />
      <path d="M17 81H31" stroke={PAL.sky} strokeWidth="3.2" />
      {/* The clean nappy and the hand laying it down */}
      <Move kind="from" dy={-26} once>
        <path d={OPEN} fill={PAL.paperShade} stroke={PAL.paperShade} strokeWidth="4" transform="translate(0 3)" />
        <path d={OPEN} fill={TINT} stroke={TINT} strokeWidth="4" />
        <path d="M36 44H88L87.4 50H36.6Z" fill={PAL.ice} />
        <path d="M80 90H64Q70 80 70 72Q72 62 86 58Q76 64 74 74Q74 82 80 90Z" fill={PAL.paperShade} opacity=".7" />
        <path d="M37 46L28 47L29 55L38 54Z" fill={PAL.sky} />
        <path d="M87 46L96 47L95 55L86 54Z" fill={PAL.skyShade} />
        <Hand pose="hold" x={62} y={22} rotate={180} scale={0.6} skin={SKIN.henk} sleeve={[PAL.purple, PAL.purpleShade]} />
      </Move>
      <Sparkle x={100} y={68} r={7} color={PAL.yellow} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
