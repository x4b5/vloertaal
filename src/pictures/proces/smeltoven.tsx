import type { JSX } from 'react';
import { Ground, Move, PAL, Shine } from '../kit';

/** A rising heat wave (a wavy line) from (x, y) upwards. */
const wave = (x: number, y: number) => `M${x} ${y}q-5 -5 0 -10t0 -10t0 -10`;

export default {
  // "de smeltoven": the furnace — a big dark furnace block with a hood and a chimney, a wide arched opening
  // in its front glowing orange and yellow (the melt inside), and orange heat waves rising above it.
  // On the intro card the heat waves keep rising (three rounds: it is always this hot).
  'w.smeltoven': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      <Ground cx={58} cy={105} rx={50} ry={4} />
      {/* The heat waves */}
      <Move kind="from" dy={14}>
        <path d={`${wave(30, 40)}${wave(46, 36)}${wave(62, 40)}`} fill="none" stroke={PAL.orange} strokeWidth="3.6" />
      </Move>
      {/* The chimney */}
      <rect x="80" y="14" width="14" height="34" rx="1.5" fill={PAL.slate} />
      <rect x="88" y="14" width="6" height="34" fill={PAL.slateDark} />
      {/* The furnace block: top, side, front */}
      <path d="M10 48L22 40H110L98 48Z" fill={PAL.steel} />
      <path d="M98 48L110 40V96L98 104Z" fill={PAL.slateDark} />
      <rect x="10" y="48" width="88" height="56" rx="3" fill={PAL.slate} />
      <path d="M10 62H98M10 80H98" stroke={PAL.slateDark} strokeWidth="2" opacity=".7" />
      <Shine d="M14 52H44" width={2.6} opacity={0.35} />
      {/* The glowing opening */}
      <path d="M24 104V82Q24 60 54 60Q84 60 84 82V104Z" fill={PAL.clayShade} />
      <path d="M30 104V84Q30 66 54 66Q78 66 78 84V104Z" fill={PAL.orange} />
      <path d="M38 104V88Q38 76 54 76Q70 76 70 88V104Z" fill={PAL.yellow} />
      <path d="M46 104V94Q46 88 54 88Q62 88 62 94V104Z" fill={PAL.yellowShine} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
