import type { JSX } from 'react';
import { Ground, PAL, Shine } from '../kit';

/** Copper (terracotta steps) and brass (darker steps of the hard-hat yellow). */
const CU = { base: PAL.clay, shade: PAL.clayShade, light: PAL.clayLight, inside: '#8f3a1a' };
const BRASS = { light: PAL.yellow, base: PAL.yellowShade, shade: '#b98a00' };

/** The fitting's axis, level on the card, and the pipe radius. */
const CY = 62;
const PR = 11;

/** A copper pipe from x0 to x1: base, shaded underside, highlight. */
const pipe = (x0: number, x1: number) => (
  <g>
    <rect x={x0} y={CY - PR} width={x1 - x0} height={2 * PR} fill={CU.base} />
    <rect x={x0} y={CY + 1.5} width={x1 - x0} height={PR - 1.5} fill={CU.shade} />
    <path d={`M${x0 + 5} ${CY - PR + 3}H${x1 - 3}`} stroke={PAL.white} strokeWidth="2.4" strokeLinecap="round" opacity=".5" />
  </g>
);

/** A hex nut seen from the side: three faces as bands, the top lit, the bottom in shade. */
const nut = (x: number, w: number, r: number) => (
  <g>
    <rect x={x} y={CY - r} width={w} height={2 * r} rx="2.5" fill={BRASS.base} />
    <rect x={x} y={CY - r} width={w} height={r * 0.62} rx="2.5" fill={BRASS.light} />
    <rect x={x} y={CY + r * 0.38} width={w} height={r * 0.62} rx="2.5" fill={BRASS.shade} />
  </g>
);

export default {
  // "de koppeling": the pipe fitting — a brass compression coupling, a short body between two big hex
  // nuts, joining two copper pipe ends that come in from left and right; the left pipe's open end shows.
  'w.koppeling': () => (
    <g>
      <Ground cx={60} cy={94} rx={48} ry={4.5} />
      {pipe(14, 36)}
      {pipe(84, 108)}
      {/* The left pipe's open end, facing the viewer */}
      <ellipse cx={14} cy={CY} rx={5} ry={PR} fill={CU.light} />
      <ellipse cx={14.5} cy={CY} rx={2.8} ry={PR - 3.2} fill={CU.inside} />
      {/* The body in the middle, a little slimmer than the nuts */}
      {nut(46, 28, 15)}
      {/* The two big nuts */}
      {nut(28, 22, 22)}
      {nut(70, 22, 22)}
      <Shine d={`M33 ${CY - 16.5}H45`} color={PAL.yellowShine} width={3} opacity={0.9} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
