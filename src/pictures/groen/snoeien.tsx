import type { JSX } from 'react';
import { Ground, Hand, Move, PAL, SKIN, Shade } from '../kit';

/** A leaf from its stalk at (x, y), `len` long, pointing `deg` degrees (0 = right). */
const leaf = (x: number, y: number, len: number, deg: number, c: string) => (
  <path transform={`translate(${x} ${y}) rotate(${deg})`} d={`M0 0Q${len * 0.45} ${-len * 0.36} ${len} 0Q${len * 0.45} ${len * 0.36} 0 0Z`} fill={c} />
);

/** The bolt of the shears, and how they lie: blades to the left round the branch, handles to the right. */
const PX = 62;
const PY = 42;
const LIE = -90;
const K = 0.62;

export default {
  // "snoeien": to prune — a green bush with one branch growing up out of it; a hand from the right
  // holds red pruning shears round the branch, and the cut-off top, with its leaves, lies on the ground.
  // On the intro card the shears close, then the top falls off the branch onto the ground (once: a
  // story with an end).
  'w.snoeien': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      <Ground cx={58} cy={103} rx={48} ry={4} />
      {/* The branch up out of the bush, cut at the shears */}
      <path d="M38 70L46 44" stroke={PAL.wood} strokeWidth="6" />
      {/* The bush */}
      <Shade color={PAL.greenShade} opacity={1} at={[62, 90, 14, 26]}>
        <g fill={PAL.green}>
          <circle cx="22" cy="78" r="15" />
          <circle cx="38" cy="70" r="17" />
          <circle cx="52" cy="84" r="14" />
          <rect x="8" y="78" width="56" height="24" rx="11" />
        </g>
      </Shade>
      <path d="M24 76Q28 72 32 76M40 90Q44 86 48 90" fill="none" stroke={PAL.greenShade} strokeWidth="2" />
      {/* The cut-off top: it falls from the branch and lies on the ground */}
      <Move kind="drop" dx={-34} dy={-66} once>
        <Move kind="tip" turn={-55} at={[84, 94]}>
          <path d="M70 100L98 88" stroke={PAL.wood} strokeWidth="5" />
          {leaf(98, 88, 15, -60, PAL.leaf)}
          {leaf(98, 88, 14, 10, PAL.green)}
          {leaf(86, 93, 13, -110, PAL.leaf)}
        </Move>
      </Move>
      {/* The shears: the fixed half (anvil and handle) */}
      <g transform={`translate(${PX} ${PY}) rotate(${LIE}) scale(${K})`}>
        <path d="M2 2Q16 -18 8 -40Q4 -44 1 -40Q4 -22 -3 -2Z" fill={PAL.slate} />
        <path d="M5 4L18 58" stroke={PAL.redShade} strokeWidth="13" />
      </g>
      {/* The moving half: the blade and the other handle */}
      <Move kind="turn" turn={-28} at={[PX, PY]}>
        <g transform={`translate(${PX} ${PY}) rotate(${LIE}) scale(${K})`}>
          <path d="M-5 4Q-16 -18 -4 -48Q10 -30 6 2Z" fill={PAL.mist} />
          <path d="M-5 4L-18 58" stroke={PAL.red} strokeWidth="13" />
          <circle cx="0" cy="0" r="6" fill={PAL.steel} />
        </g>
      </Move>
      {/* The hand round the handles */}
      <Hand pose="hold" x={112} y={42} rotate={-90} scale={0.62} skin={SKIN.jada} sleeve={[PAL.green, PAL.greenShade]} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
