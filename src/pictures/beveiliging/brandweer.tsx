import type { JSX } from 'react';
import { Ground, PAL, Shine } from '../kit';

/** A wheel at (x, y). */
const wheel = (x: number, y: number) => (
  <g key={x}>
    <circle cx={x} cy={y} r="10" fill={PAL.slateDark} />
    <circle cx={x} cy={y} r="4.4" fill={PAL.steel} />
  </g>
);

export default {
  // "de brandweer": the fire brigade — a red fire engine from the side, driving to the right: the cab with
  // its window and a blue light on its roof, the long body with silver lockers and a white band, a ladder
  // lying on the roof, and big dark wheels.
  'w.brandweer': () => (
    <g strokeLinejoin="round">
      <Ground cx={60} cy={100} rx={52} ry={4} />
      {/* The ladder on the roof */}
      <rect x="12" y="34" width="72" height="9" rx="2" fill={PAL.mist} />
      <path d="M18 34V43M26 34V43M34 34V43M42 34V43M50 34V43M58 34V43M66 34V43M74 34V43" stroke={PAL.steel} strokeWidth="2.6" />
      {/* The body */}
      <rect x="10" y="44" width="72" height="44" rx="4" fill={PAL.red} />
      <rect x="16" y="50" width="18" height="20" rx="2" fill={PAL.mist} />
      <rect x="38" y="50" width="18" height="20" rx="2" fill={PAL.mist} />
      <rect x="60" y="50" width="16" height="20" rx="2" fill={PAL.mist} />
      <path d="M30 52V68M52 52V68M72 52V68" stroke={PAL.steel} strokeWidth="2" />
      {/* The cab */}
      <path d="M82 40H96Q102 40 104 46L110 64V88H82Z" fill={PAL.red} />
      <path d="M86 46H96L102 62H86Z" fill={PAL.ice} />
      <path d="M88 48H94L92 54H88Z" fill={PAL.white} opacity=".6" />
      <rect x="86" y="33" width="12" height="7" rx="3" fill={PAL.sky} />
      <rect x="104" y="72" width="6" height="6" rx="2" fill={PAL.yellow} />
      {/* The white band and the shade along the bottom */}
      <rect x="10" y="74" width="100" height="5" fill={PAL.white} />
      <rect x="10" y="80" width="100" height="8" rx="2" fill={PAL.redShade} />
      <Shine d="M14 48H30" width={2.6} opacity={0.5} />
      {[28, 66, 96].map((x) => wheel(x, 90))}
    </g>
  ),
} as Record<string, () => JSX.Element>;
