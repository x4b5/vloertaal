import type { JSX } from 'react';
import { Hand, PAL, SKIN } from '../kit';

export default {
  // "de snijwond": the cut — an open hand, palm to us, with one short red cut across the palm (a mark, not a
  // wound drawn in detail), and the sharp shard of glass that did it, on the left.
  'w.snijwond': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      {/* The glass shard */}
      <path d="M12 92L22 50L30 66L36 58L32 96Z" fill={PAL.ice} />
      <path d="M30 66L36 58L32 96L26 94Z" fill={PAL.blueLight} />
      <path d="M17 86L22 62" stroke={PAL.white} strokeWidth="2.4" opacity=".8" />
      {/* The hand with the cut */}
      <Hand pose="open" x={68} y={104} scale={1.7} skin={SKIN.amina} sleeve={[PAL.blue, PAL.blueShade]} />
      <path d="M54 72L80 62" stroke={PAL.redLight} strokeWidth="7" opacity=".7" />
      <path d="M56 71L78 63" stroke={PAL.red} strokeWidth="3.4" />
    </g>
  ),
} as Record<string, () => JSX.Element>;
