import type { JSX } from 'react';
import { PAL, Shine } from '../kit';

/** A lumpy white crust: a row of bumps along a base path, with a grey underside. */
const crust = (pts: [number, number, number][]) => (
  <g>
    {pts.map(([x, y, r], i) => <circle key={`s${i}`} cx={x + 0.8} cy={y + 1.4} r={r} fill={PAL.line} />)}
    {pts.map(([x, y, r], i) => <circle key={`c${i}`} cx={x} cy={y} r={r} fill={PAL.paper} />)}
  </g>
);

export default {
  // "de kalk": the limescale — a chrome tap on a blue-tiled wall, its spout and arm thick with lumpy
  // white crust, and white chalky spots on the tiles around it.
  'w.kalk': () => (
    <g strokeLinejoin="round">
      {/* The tiles */}
      <rect x="10" y="12" width="100" height="94" rx="4" fill={PAL.sky} />
      <path d="M10 43H110M10 74H110M43 12V106M76 12V106" stroke={PAL.skyShade} strokeWidth="2.4" />
      {/* Chalky spots on the tiles */}
      {crust([[22, 88, 3], [27, 92, 2.4], [96, 24, 3], [101, 28, 2.2], [92, 92, 2.6], [98, 96, 3.2], [24, 24, 2.4]])}
      {/* The tap: wall flange, arm, spout, handle */}
      <rect x="14" y="40" width="14" height="24" rx="4" fill={PAL.steel} />
      <rect x="24" y="44" width="56" height="12" rx="6" fill={PAL.steel} />
      <rect x="24" y="44" width="56" height="4" rx="2" fill={PAL.mist} />
      <rect x="68" y="44" width="14" height="30" rx="5" fill={PAL.steel} />
      <rect x="77" y="46" width="5" height="28" rx="2.5" fill={PAL.slate} />
      <rect x="44" y="30" width="6" height="14" rx="2" fill={PAL.slate} />
      <rect x="36" y="26" width="22" height="7" rx="3.5" fill={PAL.steel} />
      <Shine d="M30 46H50" width={2.4} opacity={0.9} />
      {/* The crust on the arm and round the spout's mouth */}
      {crust([[34, 56, 3.2], [40, 57, 2.6], [56, 56, 3], [62, 57.5, 3.6]])}
      {crust([[66, 72, 4.4], [72, 76, 5.4], [79, 75, 4.6], [84, 71, 3.6], [74, 81, 3.4], [70, 66, 3], [84, 64, 2.6]])}
      {crust([[72, 86, 2.4], [78, 90, 2]])}
    </g>
  ),
} as Record<string, () => JSX.Element>;
