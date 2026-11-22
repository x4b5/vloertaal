import type { JSX } from 'react';
import { Ground, Move, PAL, Shine, r1 } from '../kit';

type P = [number, number];
const poly = (p: P[]) => `M${p.map(([x, y]) => `${r1(x)} ${r1(y)}`).join('L')}Z`;

/** The joint, where the two halves cross. */
const J: P = [60, 58];

/** Saw teeth from a to b: n teeth sticking out 3.4 units along (nx, ny). */
const saw = (a: P, b: P, n: number, nx: number, ny: number): P[] => {
  const out: P[] = [];
  for (let i = 0; i < n; i++) {
    const t0 = i / n;
    const t1 = (i + 0.5) / n;
    out.push([a[0] + (b[0] - a[0]) * t0, a[1] + (b[1] - a[1]) * t0]);
    out.push([a[0] + (b[0] - a[0]) * t1 + nx * 3.4, a[1] + (b[1] - a[1]) * t1 + ny * 3.4]);
  }
  return out;
};

/** The upper jaw: up to the right, its tip hooking down, teeth on its underside. */
const UPPER = poly([
  [J[0] - 6, J[1] + 4],
  [J[0] - 4, J[1] - 8],
  [80, 26],
  [94, 17],
  [102, 19],
  [103, 27],
  ...saw([98, 30], [J[0] + 10, J[1] - 2], 5, -0.55, 0.83),
  [J[0] + 8, J[1] + 3],
]);
/** The lower jaw: out to the right, its tip hooking up, teeth on its top. */
const LOWER = poly([
  [J[0] - 4, J[1] + 8],
  [J[0] + 4, J[1] - 2],
  ...saw([J[0] + 14, J[1] - 3], [102, 42], 5, -0.24, -0.97),
  [108, 38],
  [111, 44],
  [104, 52],
  [J[0] + 10, J[1] + 10],
]);

export default {
  // "de waterpomptang": the slip-joint (water-pump) pliers — two long handles with blue grips going down
  // to the bottom left, the joint with its long slot of grooves, and two serrated steel jaws bent away
  // to the right and wide open.
  // On the intro card the front handle and the upper jaw swing open around the joint (from gripping).
  'w.waterpomptang': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      <Ground cx={58} cy={106} rx={44} ry={4} />
      {/* The back handle and the lower jaw */}
      <path d={`M${J[0]} ${J[1]}L18 98`} stroke={PAL.slate} strokeWidth="10" fill="none" />
      <path d="M44 74L18 98" stroke={PAL.blueShade} strokeWidth="13" fill="none" />
      <path d={LOWER} fill={PAL.slate} />
      {/* The front handle and the upper jaw */}
      <Move kind="turn" turn={24} at={J}>
        <path d={`M${J[0] + 2} ${J[1]}L36 104`} stroke={PAL.steel} strokeWidth="10" fill="none" />
        <path d="M50 80L36 104" stroke={PAL.blue} strokeWidth="13" fill="none" />
        <Shine d="M46 83L41 93" width={2.8} opacity={0.55} />
        <path d={UPPER} fill={PAL.steel} />
        <Shine d="M64 46L82 28" width={2.6} opacity={0.6} />
      </Move>
      {/* The joint plate with its slot of grooves, and the bolt */}
      <g transform={`rotate(-58 ${J[0]} ${J[1]})`}>
        <rect x={J[0] - 17} y={J[1] - 8} width={30} height={16} rx="8" fill={PAL.mist} />
        <rect x={J[0] - 13} y={J[1] - 3} width={22} height={6} rx="3" fill={PAL.slateDark} />
      </g>
      <circle cx={J[0]} cy={J[1]} r={5} fill={PAL.paper} />
      <circle cx={J[0]} cy={J[1]} r={2} fill={PAL.steel} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
