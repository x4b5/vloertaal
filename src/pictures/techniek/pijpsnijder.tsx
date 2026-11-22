import type { JSX } from 'react';
import { CurveArrow, Move, PAL, Shine } from '../kit';

/** Copper (terracotta steps). */
const CU = { base: PAL.clay, shade: PAL.clayShade, light: PAL.clayLight, inside: '#8f3a1a' };

/** The thick pipe runs level across the card. */
const CY = 44;
const PR = 15;
/** The C-frame: a thick arc round the pipe's middle, open to the left. */
const C: [number, number] = [56, CY];
const FR = 28;

/** A point on a circle round C at angle a (degrees, clockwise from the right). */
const on = (r: number, a: number) => {
  const t = (a * Math.PI) / 180;
  return `${Math.round((C[0] + r * Math.cos(t)) * 10) / 10} ${Math.round((C[1] + r * Math.sin(t)) * 10) / 10}`;
};
/** An arc round C from angle a0 clockwise to a1. */
const arc = (r: number, a0: number, a1: number) => `M${on(r, a0)}A${r} ${r} 0 ${a1 - a0 > 180 ? 1 : 0} 1 ${on(r, a1)}`;

const WY = CY + PR + 1;

export default {
  // "de pijpsnijder": the pipe cutter — a thick red C-frame open to the left, clamped round a thick copper
  // pipe: two small rollers on top of the pipe, a round steel cutting wheel biting into it from below, a long
  // red turning knob sticking out downwards, and a curved arrow beside it: the cutter turns round the pipe.
  'w.pijpsnijder': () => (
    <g strokeLinecap="round">
      {/* The copper pipe, its open end on the left */}
      <rect x={10} y={CY - PR} width={100} height={2 * PR} fill={CU.base} />
      <rect x={10} y={CY + 3} width={100} height={PR - 3} fill={CU.shade} />
      <path d={`M16 ${CY - PR + 4.5}H32`} stroke={PAL.white} strokeWidth="3" opacity=".5" />
      <ellipse cx={10} cy={CY} rx={6} ry={PR} fill={CU.light} />
      <ellipse cx={10.6} cy={CY} rx={3.4} ry={PR - 4.2} fill={CU.inside} />
      {/* The C-frame: base, its outer right and bottom in shade, a light edge top left */}
      <path d={arc(FR, 225, 495)} stroke={PAL.red} strokeWidth="11" fill="none" />
      <path d={arc(FR + 3.4, 320, 470)} stroke={PAL.redShade} strokeWidth="4.4" fill="none" />
      <Shine d={arc(FR - 2.5, 238, 285)} width={2.4} opacity={0.6} />
      {/* Two rollers resting on the pipe */}
      <circle cx={48} cy={CY - PR - 3.6} r={4.4} fill={PAL.steel} />
      <circle cx={64} cy={CY - PR - 3.6} r={4.4} fill={PAL.steel} />
      {/* The cutting wheel biting into the pipe from below, on its slider */}
      <rect x={50} y={WY + 2} width={12} height={12} rx="2" fill={PAL.slate} />
      <circle cx={C[0]} cy={WY} r={9.5} fill={PAL.mist} />
      <circle cx={C[0]} cy={WY} r={9.5} fill="none" stroke={PAL.paper} strokeWidth="2" opacity=".8" />
      <circle cx={C[0]} cy={WY} r={3} fill={PAL.slate} />
      {/* The screw and the long turning knob sticking out downwards */}
      <rect x={52} y={CY + FR + 4} width={8} height={7} fill={PAL.steel} />
      <rect x={45} y={CY + FR + 10} width={22} height={30} rx="6" fill={PAL.red} />
      <rect x={57} y={CY + FR + 10} width={10} height={30} rx="5" fill={PAL.redShade} />
      <path d={`M51 ${CY + FR + 15}V${CY + FR + 34}M57 ${CY + FR + 15}V${CY + FR + 34}`} stroke={PAL.redShade} strokeWidth="2" />
      {/* It turns round the pipe */}
      <Move kind="turn" turn={-80} at={C}>
        <CurveArrow from={[92, 14]} to={[96, 74]} bend={-15} color={PAL.sky} width={7} head={13} />
      </Move>
    </g>
  ),
} as Record<string, () => JSX.Element>;
