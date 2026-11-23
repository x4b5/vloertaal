import type { JSX } from 'react';
import { Move, PAL, Shine } from '../kit';

/** A water drop with its point up, centred on (x, y), about 2s wide. */
const drop = (x: number, y: number, s: number) =>
  `M${x} ${y - s * 1.7}C${x + s * 0.4} ${y - s * 0.9} ${x + s} ${y - s * 0.3} ${x + s} ${y + s * 0.3}A${s} ${s} 0 0 1 ${x - s} ${y + s * 0.3}C${x - s} ${y - s * 0.3} ${x - s * 0.4} ${y - s * 0.9} ${x} ${y - s * 1.7}Z`;

export default {
  // "de lekkage": the leak (water comes out) — a grey water pipe across the top with a coupling in the
  // middle; water sprays from the coupling and drops fall into a blue puddle on the floor.
  // Three rounds: the drops keep falling from the coupling (dripping).
  'w.lekkage': () => (
    <g strokeLinejoin="round">
      {/* The puddle on the floor */}
      <ellipse cx="60" cy="100" rx="34" ry="7" fill={PAL.sky} />
      <ellipse cx="54" cy="98.6" rx="18" ry="2.6" fill={PAL.ice} opacity=".8" />
      {/* The pipe: a long tube with a lit top and a shaded bottom */}
      <rect x="8" y="24" width="104" height="18" rx="4" fill={PAL.steel} />
      <rect x="8" y="24" width="104" height="7" rx="3" fill={PAL.mist} />
      <rect x="8" y="37" width="104" height="5" rx="2.5" fill={PAL.slate} opacity=".55" />
      {/* The coupling */}
      <rect x="48" y="18" width="24" height="30" rx="4" fill={PAL.slate} />
      <rect x="66" y="18" width="6" height="30" rx="2.5" fill={PAL.slateDark} />
      <rect x="51" y="21" width="5" height="22" rx="2.5" fill={PAL.steel} />
      {/* The spray from under the coupling */}
      <path d="M52 52L46 58M60 53V60M68 52L74 58" stroke={PAL.sky} strokeWidth="3.4" strokeLinecap="round" />
      {/* The drops: on the intro card they fall from the coupling */}
      <Move kind="drop" dy={-24}>
        <path d={drop(60, 72, 6)} fill={PAL.sky} />
        <path d={drop(44, 84, 4.6)} fill={PAL.sky} />
        <path d={drop(76, 84, 4.6)} fill={PAL.sky} />
      </Move>
      <Shine d="M14 27.5H40" width={2.6} opacity={0.9} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
