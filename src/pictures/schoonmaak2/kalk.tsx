import type { JSX } from 'react';
import { PAL, Shine, r1 } from '../kit';

/**
 * A rough, chalky crust: a jagged blob round (cx, cy), r wide, `k` high, with a grey edge underneath
 * and a few speckles (seeded, so the picture never changes).
 */
const crust = (cx: number, cy: number, r: number, k = 0.6, seed = 1) => {
  const n = 28;
  const pts = Array.from({ length: n }, (_, i) => {
    const t = (i / n) * Math.PI * 2;
    const rr = r * (1 + 0.16 * Math.sin(3 * t + seed) + 0.1 * Math.sin(7 * t + seed * 2) + 0.05 * Math.sin(13 * t));
    return `${r1(cx + rr * Math.cos(t))} ${r1(cy + rr * k * Math.sin(t))}`;
  });
  const d = `M${pts.join('L')}Z`;
  return (
    <g>
      <path d={d} fill={PAL.line} transform="translate(0.8 1.8)" />
      <path d={d} fill={PAL.paper} />
      <circle cx={cx - r * 0.3} cy={cy} r={r * 0.12} fill={PAL.mist} />
      <circle cx={cx + r * 0.3} cy={cy + r * 0.15 * k} r={r * 0.1} fill={PAL.mist} />
    </g>
  );
};

export default {
  // "de kalk": the limescale — a chrome tap on a blue-tiled wall, its spout and arm thick with lumpy
  // white crust, and white chalky spots on the tiles around it.
  'w.kalk': () => (
    <g strokeLinejoin="round">
      {/* The tiles */}
      <rect x="10" y="12" width="100" height="94" rx="4" fill={PAL.sky} />
      <path d="M10 43H110M10 74H110M43 12V106M76 12V106" stroke={PAL.skyShade} strokeWidth="2.4" />
      {/* Chalky stains on the tiles */}
      {crust(26, 90, 9, 0.7)}
      {crust(96, 26, 8, 0.8, 4)}
      {crust(95, 94, 7, 0.8, 5)}
      {/* The tap: wall flange, arm, spout, handle */}
      <rect x="14" y="40" width="14" height="24" rx="4" fill={PAL.steel} />
      <rect x="24" y="44" width="56" height="12" rx="6" fill={PAL.steel} />
      <rect x="24" y="44" width="56" height="4" rx="2" fill={PAL.mist} />
      <rect x="68" y="44" width="14" height="30" rx="5" fill={PAL.steel} />
      <rect x="77" y="46" width="5" height="28" rx="2.5" fill={PAL.slate} />
      <rect x="44" y="30" width="6" height="14" rx="2" fill={PAL.slate} />
      <rect x="36" y="26" width="22" height="7" rx="3.5" fill={PAL.steel} />
      <Shine d="M30 46H50" width={2.4} opacity={0.9} />
      {/* The thick crust on the arm and round the spout's mouth */}
      {crust(42, 56, 11, 0.35)}
      {crust(75, 72, 14, 0.75, 2)}
      {crust(76, 84, 7, 0.9, 3)}
      <path d="M70 88V96M80 90V100" stroke={PAL.paper} strokeWidth="3.4" strokeLinecap="round" />
    </g>
  ),
} as Record<string, () => JSX.Element>;
