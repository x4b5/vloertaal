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
  // row; a hand (Jada's) grips one single pack from above and lifts it up out of it to check it.
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
        <rect x="45" y="36" width="30" height="26" rx="2" fill={PAL.white} />
        <rect x="45" y="36" width="30" height="8" rx="2" fill={PAL.red} />
        <rect x="68" y="36" width="7" height="26" rx="2" fill={PAL.paperShade} />
        <path d="M49 51H63M49 56H59" stroke={PAL.line} strokeWidth="1.8" strokeLinecap="round" />
        <Hand pose="hold" x={60} y={8} rotate={180} scale={0.8} skin={SKIN.jada} sleeve={['#ffc929', PAL.yellowShade]} />
      </Move>
    </g>
  ),
} as Record<string, () => JSX.Element>;
