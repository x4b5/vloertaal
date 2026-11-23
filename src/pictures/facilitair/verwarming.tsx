import type { JSX } from 'react';
import { Ground, Move, PAL, Shine } from '../kit';

export default {
  // "de verwarming": the heating — a white panel radiator with upright ribs on two short feet, a
  // round valve knob on its left, and three orange wavy heat lines rising from it.
  // Three rounds: the warm air keeps rising from the radiator.
  'w.verwarming': () => (
    <g strokeLinejoin="round">
      <Ground cx={60} cy={104} rx={44} ry={4} />
      {/* The feet */}
      <rect x="26" y="92" width="7" height="12" rx="2" fill={PAL.slate} />
      <rect x="84" y="92" width="7" height="12" rx="2" fill={PAL.slate} />
      {/* The radiator body: top and right depth faces, then the ribbed front */}
      <path d="M16 54L22 47H104L98 54Z" fill={PAL.white} />
      <path d="M98 54L104 47V91L98 98Z" fill={PAL.mist} />
      <rect x="16" y="54" width="82" height="44" rx="3" fill={PAL.paper} />
      {[22, 33, 44, 55, 66, 77, 88].map((x) => (
        <rect key={x} x={x} y="58" width="4" height="36" rx="2" fill={PAL.paperShade} />
      ))}
      <rect x="16" y="92" width="82" height="6" rx="3" fill={PAL.paperShade} />
      <Shine d="M20 60V86" width={3} opacity={0.9} />
      {/* The valve knob */}
      <rect x="6" y="80" width="12" height="7" rx="2" fill={PAL.steel} />
      <circle cx="10" cy="74" r="6.5" fill={PAL.white} />
      <path d="M10 70V78" stroke={PAL.mist} strokeWidth="2" strokeLinecap="round" />
      {/* The heat rising */}
      <Move kind="from" dy={20}>
        {[34, 57, 80].map((x) => (
          <path key={x} d={`M${x} 42C${x - 7} 36 ${x + 7} 30 ${x} 24C${x - 7} 18 ${x + 7} 14 ${x} 8`} fill="none" stroke={PAL.orange} strokeWidth="5" strokeLinecap="round" />
        ))}
      </Move>
    </g>
  ),
} as Record<string, () => JSX.Element>;
