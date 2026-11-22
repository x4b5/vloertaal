import type { JSX } from 'react';
import { Ground, Move, PAL, Shade, Shine } from '../kit';

export default {
  // "de spanningzoeker": the voltage tester — a small screwdriver lying on a slant, its red see-through
  // handle with a little lamp glowing orange inside, a steel shaft and a flat tip.
  'w.spanningzoeker': () => (
    <g>
      <Ground cx={60} cy={104} rx={40} ry={4} />
      {/* On the intro card the tip comes forward (to the contact), then the lamp lights up */}
      <Move kind="from" dx={-6} dy={5}>
      <g transform="translate(58 63) rotate(-38) scale(1.1)">
        {/* The steel shaft and the flat blade: lit top half, darker bottom half */}
        <rect x="16" y="-3.2" width="31" height="6.4" rx="1.5" fill={PAL.steel} />
        <rect x="16" y="-3.2" width="31" height="3" rx="1.5" fill={PAL.mist} />
        <path d="M45 -3.2L54 -5L54 5L45 3.2Z" fill={PAL.steel} />
        <path d="M45 -3.2L54 -5L54 0L45 0Z" fill={PAL.mist} />
        {/* The metal cap at the end you touch */}
        <rect x="-53" y="-6.5" width="10" height="13" rx="3" fill={PAL.steel} />
        <rect x="-53" y="-6.5" width="10" height="5" rx="2.5" fill={PAL.mist} />
        {/* The red handle, darker underneath */}
        <Shade color={PAL.redShade} opacity={1} at={[-16, 13, 44, 9]}>
          <rect x="-46" y="-10" width="64" height="20" rx="9" fill={PAL.red} />
        </Shade>
        {/* The see-through window with the glowing lamp */}
        <rect x="-37" y="-6" width="32" height="12" rx="5.5" fill={PAL.redLight} />
        <Move kind="show">
          <circle cx="-21" cy="0" r="15" fill={PAL.yellow} opacity="0.35" />
          <ellipse cx="-21" cy="0" rx="9" ry="4.6" fill={PAL.orange} />
          <ellipse cx="-21" cy="-0.4" rx="4.6" ry="2.4" fill={PAL.yellowShine} />
          {/* Glow rays */}
          <path d="M-21 -17V-24M-33 -14L-37 -20M-9 -14L-5 -20" stroke={PAL.orange} strokeWidth="3" strokeLinecap="round" />
        </Move>
        <Shine d="M-40 -6.5H-38" width={3} opacity={0.7} />
      </g>
      </Move>
    </g>
  ),
} as Record<string, () => JSX.Element>;
