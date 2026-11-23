import type { JSX } from 'react';
import { Arrow, Hand, Move, PAL } from '../kit';

/** A jagged weed leaf from its base (0, 0) pointing up: L long, W wide. */
const leaf = (L: number, W: number) => {
  const n = 3;
  const step = L / n;
  const pts: [number, number][] = [];
  for (let i = 0; i < n; i++) {
    const w = W * (1 - (i / n) * 0.5);
    pts.push([-w, -(i * step + step * 0.55)], [-w * 0.3, -(i + 1) * step + step * 0.1]);
  }
  const right = pts.slice().reverse().map(([x, y]) => [-x, y] as [number, number]);
  return `M0 0${pts.map(([x, y]) => `L${x} ${y}`).join('')}L0 ${-L}${right.map(([x, y]) => `L${x} ${y}`).join('')}Z`;
};

export default {
  // "wieden": to weed (to pull out weeds) — a hand pulls a weed up out of the soil, its pale roots hanging
  // under the fist, the empty hole left in the soil, a blue arrow up.
  // Three rounds on the intro card: the hand pulls the weed up out of the soil (work you do again and again).
  'w.wieden': () => (
    <g strokeLinejoin="round">
      {/* The soil bed */}
      <path d="M8 96Q60 84 112 96V106H8Z" fill={PAL.brown} />
      <path d="M8 96Q60 84 112 96Q60 92 8 100Z" fill={PAL.cardDark} />
      <ellipse cx="52" cy="92" rx="9" ry="3.2" fill="#3a2414" />
      <Arrow from={[22, 84]} to={[22, 30]} color={PAL.sky} width={8} head={13} />
      <Move kind="from" dy={24}>
        {/* The roots under the fist */}
        <path d="M52 64V86M52 70L44 80M52 74L60 84M44 80L40 86M52 80L48 88" fill="none" stroke={PAL.card} strokeWidth="2.6" strokeLinecap="round" />
        {/* The weed: stem and jagged leaves */}
        <path d="M52 64V30" stroke={PAL.leafShade} strokeWidth="4" strokeLinecap="round" />
        {[
          [-50, 30, PAL.leafShade],
          [50, 30, PAL.leafShade],
          [-18, 34, PAL.leaf],
          [18, 34, PAL.leaf],
        ].map(([rot, len, fill], i) => (
          <g key={i} transform={`translate(52 46) rotate(${rot})`}>
            <path d={leaf(len as number, 8)} fill={fill as string} />
          </g>
        ))}
        {/* The hand round the stem, the sleeve off to the right */}
        <Hand pose="hold" x={66} y={66} rotate={-60} scale={0.8} skin={['#b97a52', '#9c6141']} sleeve={['#2f8f3e', '#23722f']} />
      </Move>
    </g>
  ),
} as Record<string, () => JSX.Element>;
