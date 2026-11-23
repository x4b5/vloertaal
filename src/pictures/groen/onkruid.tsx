import type { JSX } from 'react';
import { Ground, PAL, Shine } from '../kit';

/** A jagged weed leaf (a dandelion leaf) from its base (0, 0) pointing up: L long, W wide, teeth hooked back. */
const leaf = (L: number, W: number) => {
  const n = 4;
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
  // "het onkruid": the weeds (plants that must go) — a weed with jagged leaves and a yellow flower, growing
  // up out of the crack between two grey paving tiles, where nobody planted it.
  'w.onkruid': () => (
    <g strokeLinejoin="round">
      <Ground cx={60} cy={104} rx={50} ry={4.5} />
      {/* Two paving tiles in the slanted view, a dark crack between them */}
      <path d="M10 92L24 74H58L52 92Z" fill={PAL.mist} />
      <path d="M10 92H52V99H10Z" fill={PAL.steel} />
      <path d="M62 92L68 74H110L102 92Z" fill={PAL.mist} />
      <path d="M62 92H102V99H62Z" fill={PAL.steel} />
      <path d="M102 92L110 74V81L102 99Z" fill={PAL.line} />
      <path d="M52 92L58 74H68L62 92Z" fill={PAL.slate} />
      {/* The flower stalk and its yellow flower head */}
      <path d="M60 84Q66 60 70 34" fill="none" stroke={PAL.leafShade} strokeWidth="4" strokeLinecap="round" />
      <g fill={PAL.yellow}>
        {Array.from({ length: 10 }, (_, i) => (
          <ellipse key={i} cx="70" cy="22" rx="3.6" ry="8.5" transform={`rotate(${i * 36} 70 30)`} />
        ))}
      </g>
      <circle cx="70" cy="30" r="5.4" fill={PAL.yellowShade} />
      {/* The rosette of jagged leaves out of the crack */}
      {[
        [-72, 34, PAL.leafShade],
        [72, 34, PAL.leafShade],
        [-38, 40, PAL.leaf],
        [38, 40, PAL.leaf],
        [-8, 36, PAL.green],
      ].map(([rot, len, fill], i) => (
        <g key={i} transform={`translate(58 86) rotate(${rot})`}>
          <path d={leaf(len as number, 9)} fill={fill as string} />
          <path d={`M0 -2V${-(len as number) + 6}`} stroke={PAL.greenShade} strokeWidth="1.6" strokeLinecap="round" opacity=".7" />
        </g>
      ))}
      <Shine d="M26 78H48" width={2.6} opacity={0.8} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
