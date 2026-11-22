import type { JSX } from 'react';
import { Ground, PAL, Shine } from '../kit';

/** The ticks of the scale, from top to bottom. */
const TICKS = [24, 33, 42, 51, 60, 69, 78];

export default {
  // "de thermometer": the thermometer — a classic thermometer on a white board: a glass tube with a
  // red bulb and a red column halfway up a grey scale, a small sun beside it.
  'w.thermometer': () => (
    <g strokeLinejoin="round">
      <Ground cx={58} cy={106} rx={22} ry={3.5} />
      {/* The sun */}
      <circle cx="94" cy="26" r="9" fill={PAL.yellow} />
      <path d="M94 10V13M94 39V42M78 26H81M107 26H110M82.7 14.7L84.8 16.8M103.2 35.2L105.3 37.3M82.7 37.3L84.8 35.2M103.2 16.8L105.3 14.7" stroke={PAL.yellow} strokeWidth="3" strokeLinecap="round" />
      {/* The board: its depth, then the front */}
      <rect x="40" y="12" width="36" height="92" rx="10" fill={PAL.mist} />
      <rect x="36" y="14" width="36" height="92" rx="10" fill={PAL.paper} />
      {/* The glass tube and the bulb */}
      <rect x="44" y="18" width="12" height="76" rx="6" fill={PAL.paperShade} />
      <circle cx="50" cy="90" r="10" fill={PAL.red} />
      <rect x="46.5" y="44" width="7" height="48" rx="3.5" fill={PAL.red} />
      <path d="M53 84A6 6 0 0 1 56 92" stroke={PAL.redShade} strokeWidth="3" strokeLinecap="round" fill="none" />
      <Shine d="M46.4 86.6Q47 84.8 48.6 84" width={2.2} opacity={0.8} />
      {/* The scale */}
      {TICKS.map((y, i) => (
        <path key={y} d={`M60 ${y}H${i % 2 ? 64 : 67}`} stroke={PAL.line} strokeWidth="2.4" strokeLinecap="round" />
      ))}
    </g>
  ),
} as Record<string, () => JSX.Element>;
