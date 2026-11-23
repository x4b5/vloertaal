import type { JSX } from 'react';
import { Ground, Move, PAL, Shade, Shine } from '../kit';

/** Copper (terracotta steps) and brass (darker steps of the hard-hat yellow). */
const CU = { base: PAL.clay, shade: PAL.clayShade, light: PAL.clayLight, inside: '#8f3a1a' };
const BRASS = { light: PAL.yellow, base: PAL.yellowShade, shade: '#b98a00' };

/** The pipe's axis and radius. */
const CY = 80;
const PR = 10;

const pipe = (x0: number, x1: number) => (
  <g>
    <rect x={x0} y={CY - PR} width={x1 - x0} height={2 * PR} fill={CU.base} />
    <rect x={x0} y={CY + 1.5} width={x1 - x0} height={PR - 1.5} fill={CU.shade} />
  </g>
);

/** A hex nut seen from the side, as three bands. */
const nut = (x: number, w: number, r: number) => (
  <g>
    <rect x={x} y={CY - r} width={w} height={2 * r} rx="2.5" fill={BRASS.base} />
    <rect x={x} y={CY - r} width={w} height={r * 0.62} rx="2.5" fill={BRASS.light} />
    <rect x={x} y={CY + r * 0.38} width={w} height={r * 0.62} rx="2.5" fill={BRASS.shade} />
  </g>
);

export default {
  // "de afsluiter": the stopcock — a brass ball valve on a copper pipe: a round body between two hex
  // ends, a short stem on top and a big red lever lying along the pipe (open).
  // On the intro card it plays once and slowly (it happens once: the valve opens).
  'w.afsluiter': () => (
    <g>
      <Ground cx={60} cy={104} rx={46} ry={4.5} />
      {pipe(12, 34)}
      {pipe(86, 108)}
      <ellipse cx={12} cy={CY} rx={4.6} ry={PR} fill={CU.light} />
      <ellipse cx={12.5} cy={CY} rx={2.5} ry={PR - 3} fill={CU.inside} />
      {nut(27, 16, 16)}
      {nut(77, 16, 16)}
      {/* The round body */}
      <Shade color={BRASS.shade} opacity={1} at={[80, CY + 6, 15, 26]}>
        <ellipse cx={60} cy={CY} rx={21} ry={20} fill={BRASS.base} />
      </Shade>
      <Shine d={`M47 ${CY - 6}Q50 ${CY - 13} 57 ${CY - 15}`} color={PAL.yellowShine} width={3.2} opacity={0.85} />
      {/* The stem and its nut */}
      <rect x={54} y={CY - 30} width={12} height={12} fill={BRASS.shade} />
      <rect x={51} y={CY - 37} width={18} height={9} rx="2" fill={PAL.steel} />
      {/* The big red lever, along the pipe */}
      <Move kind="turn" turn={90} at={[60, CY - 47]} once>
        <rect x={38} y={CY - 58} width={72} height={22} rx="8" fill={PAL.redShade} />
        <rect x={38} y={CY - 58} width={72} height={16} rx="8" fill={PAL.red} />
        <circle cx={60} cy={CY - 47} r={5} fill={PAL.redShade} />
        <Shine d={`M72 ${CY - 53}H103`} width={3.4} opacity={0.6} />
      </Move>
    </g>
  ),
} as Record<string, () => JSX.Element>;
