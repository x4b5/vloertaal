import type { JSX } from 'react';
import { Ground, Hand, Move, PAL, SKIN } from '../kit';

/** A pack's top seen above the crate's edge: white with a red band. */
const top = (x: number, y: number) => (
  <g>
    <rect x={x} y={y} width="14" height="12" rx="1.5" fill={PAL.white} />
    <rect x={x} y={y} width="14" height="4" rx="1.5" fill={PAL.red} />
    <rect x={x + 10} y={y} width="4" height="12" rx="1.5" fill={PAL.paperShade} />
  </g>
);

export default {
  // "de steekproef": the spot check (you test a few products) — a blue crate full of the same packs in a
  // row; a hand (Jada's) lifts one single pack up out of it to check it.
  // On the intro card the hand lifts the pack up out of the crate. Once and slowly (one is taken out).
  'w.steekproef': () => (
    <g strokeLinejoin="round">
      <Ground cx={60} cy={104} rx={48} ry={4} />
      {/* The packs in the crate */}
      {[18, 34, 66, 82].map((x) => top(x, 66))}
      {/* The crate */}
      <rect x="12" y="74" width="96" height="30" rx="3" fill={PAL.blue} />
      <rect x="96" y="74" width="12" height="30" rx="3" fill={PAL.blueShade} />
      <rect x="20" y="80" width="70" height="5" rx="2.5" fill={PAL.blueShade} />
      <rect x="12" y="74" width="96" height="3" rx="1.5" fill={PAL.blueLight} />
      {/* The one pack, lifted out by the hand */}
      <Move kind="from" dy={30} once>
        <Hand pose="hold" x={60} y={66} scale={0.9} skin={SKIN.jada} sleeve={['#ffc929', PAL.yellowShade]} />
        <rect x="46" y="32" width="26" height="22" rx="2" fill={PAL.white} />
        <rect x="46" y="32" width="26" height="7" rx="2" fill={PAL.red} />
        <rect x="65" y="32" width="7" height="22" rx="2" fill={PAL.paperShade} />
        <path d="M50 45H62M50 49H58" stroke={PAL.line} strokeWidth="1.8" strokeLinecap="round" />
      </Move>
    </g>
  ),
} as Record<string, () => JSX.Element>;
