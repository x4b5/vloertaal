import type { JSX } from 'react';
import { CurveArrow, PAL, Shine } from '../kit';

/** Copper (terracotta steps). */
const CU = { base: PAL.clay, shade: PAL.clayShade, light: PAL.clayLight, inside: '#8f3a1a' };

/** The pipe runs level across the card. */
const CY = 50;
const PR = 10;

/** The frame: a red loop round the pipe; outer box and bar width. */
const FX0 = 30;
const FX1 = 78;
const FY0 = 18;
const FY1 = 80;
const T = 9;

export default {
  // "de pijpsnijder": the pipe cutter — a red frame clamped round a copper pipe: steel rollers on
  // top of the pipe, the big steel cutting wheel pressing up under it, the screw down to a red knob, and
  // a curved arrow beside it: the cutter turns round the pipe.
  'w.pijpsnijder': () => (
    <g>
      {/* The copper pipe, its open end on the left */}
      <rect x={12} y={CY - PR} width={98} height={2 * PR} fill={CU.base} />
      <rect x={12} y={CY + 2} width={98} height={PR - 2} fill={CU.shade} />
      <ellipse cx={12} cy={CY} rx={4.6} ry={PR} fill={CU.light} />
      <ellipse cx={12.5} cy={CY} rx={2.5} ry={PR - 3} fill={CU.inside} />
      {/* The frame: a loop with the pipe through its middle; the right side and bottom in shade */}
      <path
        d={`M${FX0 + 7} ${FY0}H${FX1 - 7}Q${FX1} ${FY0} ${FX1} ${FY0 + 7}V${FY1 - 7}Q${FX1} ${FY1} ${FX1 - 7} ${FY1}H${FX0 + 7}Q${FX0} ${FY1} ${FX0} ${FY1 - 7}V${FY0 + 7}Q${FX0} ${FY0} ${FX0 + 7} ${FY0}Z` +
          `M${FX0 + T} ${FY0 + T}V${FY1 - T}H${FX1 - T}V${FY0 + T}Z`}
        fill={PAL.red}
        fillRule="evenodd"
      />
      <rect x={FX1 - 4.5} y={FY0 + 6} width={4.5} height={FY1 - FY0 - 12} fill={PAL.redShade} />
      <rect x={FX0 + 6} y={FY1 - 4.5} width={FX1 - FX0 - 12} height={4.5} fill={PAL.redShade} />
      <Shine d={`M${FX0 + 3.5} ${FY1 - 14}V${FY0 + 8}Q${FX0 + 3.5} ${FY0 + 3.5} ${FX0 + 10} ${FY0 + 3.5}H${FX1 - 14}`} width={2.6} opacity={0.55} />
      {/* The rollers resting on the pipe, on a short post from the top bar */}
      <rect x={50} y={FY0 + T - 1} width={8} height={10} fill={PAL.slate} />
      <rect x={41} y={CY - PR - 9} width={26} height={9} rx="4.5" fill={PAL.steel} />
      <path d={`M45 ${CY - PR - 4.5}H63`} stroke={PAL.mist} strokeWidth="2" strokeLinecap="round" />
      {/* The cutting wheel pressing up under the pipe, in its slider */}
      <rect x={46} y={CY + PR + 6} width={16} height={FY1 - T - CY - PR - 5} fill={PAL.slate} />
      <circle cx={54} cy={CY + PR + 5} r={8} fill={PAL.mist} />
      <circle cx={54} cy={CY + PR + 5} r={2.6} fill={PAL.slate} />
      {/* The screw and the knob under the frame */}
      <rect x={50} y={FY1 - 1} width={8} height={7} fill={PAL.steel} />
      <rect x={40} y={FY1 + 5} width={28} height={18} rx="5" fill={PAL.red} />
      <rect x={55} y={FY1 + 5} width={13} height={18} rx="5" fill={PAL.redShade} />
      <path d={`M47 ${FY1 + 10}V${FY1 + 18}M54 ${FY1 + 10}V${FY1 + 18}M61 ${FY1 + 10}V${FY1 + 18}`} stroke={PAL.redShade} strokeWidth="2" strokeLinecap="round" />
      {/* It turns round the pipe */}
      <CurveArrow from={[86, 18]} to={[90, 84]} bend={-18} color={PAL.sky} width={7} head={13} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
