import type { JSX } from 'react';
import { PAL, Shine } from '../kit';

/** The fan's centre and the outer radius of its ring. */
const CX = 68;
const CY = 62;
const R = 34;

/** One blade, pointing up from the hub (rotated into place). */
const BLADE = `M-4 -7C-12 -18 -10 -27 0 -${R - 8}C10 -27 12 -18 4 -7Z`;

export default {
  // "de ventilator": the fan — a big round circulation fan hanging from two rods: a steel ring with a
  // dark inside, four light blades round a hub, and air lines blowing out to the left.
  'w.ventilator': () => (
    <g strokeLinejoin="round">
      {/* The two hanging rods */}
      <path d="M54 10V32M82 10V32" stroke={PAL.slate} strokeWidth="3.5" strokeLinecap="round" />
      {/* The housing: its depth behind, the ring and the dark inside */}
      <circle cx={CX + 6} cy={CY - 5} r={R} fill={PAL.slateDark} />
      <circle cx={CX} cy={CY} r={R} fill={PAL.steel} />
      <circle cx={CX} cy={CY} r={R - 6} fill={PAL.slate} />
      <Shine d={`M${CX - 29} ${CY - 6}A30 30 0 0 1 ${CX - 10} ${CY - 29}`} width={3} opacity={0.7} />
      {/* The blades and the hub */}
      {[20, 110, 200, 290].map((a) => (
        <path key={a} d={BLADE} fill={PAL.mist} transform={`translate(${CX} ${CY}) rotate(${a})`} />
      ))}
      <circle cx={CX} cy={CY} r="7" fill={PAL.slateDark} />
      <circle cx={CX - 2} cy={CY - 2} r="2.2" fill={PAL.steel} />
      {/* The air blowing out to the left */}
      <path d="M26 46H12M28 62H10M26 78H12" stroke={PAL.sky} strokeWidth="4" strokeLinecap="round" />
    </g>
  ),
} as Record<string, () => JSX.Element>;
