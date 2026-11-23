import type { JSX } from 'react';
import { Arrow, Hand, Move, PAL } from '../kit';

export default {
  // "planten": to plant — a hand lowers a young plant with its ball of soil into a hole in the grass, a
  // heap of dug soil beside it and a blue arrow down.
  // Once on the intro card: the hand lowers the plant into the hole (it is put in once).
  'w.planten': () => (
    <g strokeLinejoin="round">
      {/* The grass, the hole and the heap of soil */}
      <ellipse cx="58" cy="96" rx="52" ry="11" fill={PAL.leaf} />
      <path d="M8 96Q10 104 30 106H86Q108 104 110 96Q100 104 58 107Q16 104 8 96Z" fill={PAL.leafShade} />
      <ellipse cx="52" cy="95" rx="22" ry="7.5" fill="#3a2414" />
      <path d="M86 98Q88 84 98 82Q108 84 110 96Q100 102 86 98Z" fill={PAL.brown} />
      <path d="M92 86Q98 82 104 86" fill="none" stroke={PAL.cardDark} strokeWidth="2.4" strokeLinecap="round" />
      <Arrow from={[92, 30]} to={[92, 70]} color={PAL.sky} width={8} head={13} />
      <Move kind="from" dy={-26} once>
        {/* The ball of soil and the young plant */}
        <circle cx="52" cy="88" r="12" fill={PAL.brown} />
        <circle cx="56" cy="91" r="7" fill="#4f2d17" opacity=".6" />
        <path d="M52 78V44" stroke={PAL.greenShade} strokeWidth="3.4" strokeLinecap="round" />
        <path d="M52 62Q36 62 32 50Q48 48 52 62Z" fill={PAL.green} />
        <path d="M52 54Q68 54 72 42Q56 40 52 54Z" fill={PAL.leaf} />
        <path d="M52 46Q42 38 46 26Q56 32 52 46Z" fill={PAL.green} />
        {/* The hand round the stem, coming in from the left */}
        <Hand pose="hold" x={36} y={70} rotate={90} scale={0.8} skin={['#f7c49b', '#e2a376']} sleeve={[PAL.blue, PAL.blueShade]} />
      </Move>
      {/* The front lip of the hole over the ball */}
      <path d="M30 95Q52 106 74 95Q70 101 52 102.5Q34 101 30 95Z" fill={PAL.leaf} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
