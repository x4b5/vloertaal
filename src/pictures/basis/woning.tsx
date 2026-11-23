import type { JSX } from 'react';
import { Ground, PAL, Shade, Shine } from '../kit';

export default {
  // "de woning": the home — a house or a flat: a small white house with a red roof in front, and a
  // block of flats with rows of windows and balconies beside it.
  'w.woning': () => (
    <g strokeLinejoin="round">
      <Ground cx={60} cy={105} rx={50} ry={4} />
      {/* The flats: right side, front, windows, balconies */}
      <path d="M102 24L108 20V101L102 105Z" fill={PAL.cardDark} />
      <Shade color={PAL.cardShade} opacity={1} at={[104, 60, 10, 50]}>
        <rect x="58" y="24" width="44" height="81" rx="3" fill={PAL.card} />
      </Shade>
      <path d="M58 24L64 20H108L102 24Z" fill={PAL.cardShade} />
      {[32, 50, 68].map((y) => (
        <g key={y}>
          <rect x="64" y={y} width="12" height="11" rx="1.5" fill={PAL.ice} />
          <rect x="83" y={y} width="12" height="11" rx="1.5" fill={PAL.ice} />
          <rect x="62" y={y + 11} width="36" height="3.4" rx="1.5" fill={PAL.cardDark} />
        </g>
      ))}
      <rect x="74" y="88" width="12" height="17" rx="1.5" fill={PAL.slate} />
      {/* The house: wall, roof, door, window */}
      <Shade color={PAL.paperShade} opacity={1} at={[64, 84, 10, 30]}>
        <rect x="14" y="64" width="46" height="41" rx="2" fill={PAL.paper} />
      </Shade>
      <path d="M8 67L37 42L66 67Z" fill={PAL.clay} stroke={PAL.clay} strokeWidth="5" />
      <path d="M37 42L66 67H37Z" fill={PAL.clayShade} stroke={PAL.clayShade} strokeWidth="5" />
      <rect x="21" y="72" width="13" height="12" rx="1.5" fill={PAL.sky} />
      <rect x="40" y="80" width="12" height="25" rx="1.5" fill={PAL.wood} />
      <circle cx="49" cy="93" r="1.4" fill={PAL.yellow} />
      <Shine d="M16 62L32 48" width={3} opacity={0.5} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
