import type { JSX } from 'react';
import { Ground, Move, PAL, Shine } from '../kit';

/** Copper (terracotta steps) and brass (darker steps of the hard-hat yellow). */
const CU = { base: PAL.clay, shade: PAL.clayShade, light: PAL.clayLight, inside: '#8f3a1a' };
const BRASS = { light: PAL.yellow, base: PAL.yellowShade, shade: '#b98a00', deep: '#97700a' };

/** The fitting's axis, level on the card, and the pipe radius. */
const CY = 58;
const PR = 14;

/** A copper pipe from x0 to x1: base, shaded underside, highlight. */
const pipe = (x0: number, x1: number) => (
  <g>
    <rect x={x0} y={CY - PR} width={x1 - x0} height={2 * PR} fill={CU.base} />
    <rect x={x0} y={CY + 3} width={x1 - x0} height={PR - 3} fill={CU.shade} />
    <path d={`M${x0 + 6} ${CY - PR + 4.5}H${x1 - 4}`} stroke={PAL.white} strokeWidth="3" strokeLinecap="round" opacity=".5" />
  </g>
);

/**
 * A hex nut seen from the side, a little from the top left: the three faces as bands (the top one lit,
 * the bottom one in shade) and its right end face, darker, as a narrow strip with slanted corners.
 */
const nut = (x: number, w: number, r: number) => {
  const e = 6;
  const b = r * 0.38;
  return (
    <g strokeLinejoin="round">
      <path d={`M${x + w} ${CY - r}L${x + w + e} ${CY - r + 6}V${CY + r - 6}L${x + w} ${CY + r}Z`} fill={BRASS.deep} />
      <rect x={x} y={CY - r} width={w} height={2 * r} fill={BRASS.base} />
      <rect x={x} y={CY - r} width={w} height={r - b} fill={BRASS.light} />
      <rect x={x} y={CY + b} width={w} height={r - b} fill={BRASS.shade} />
    </g>
  );
};

export default {
  // "de koppeling": the pipe fitting — a big brass compression coupling: a body between two large hex
  // nuts (lit top face, dark bottom face and right end), joining two thick copper pipe ends that come
  // in from left and right; the left pipe's open end shows. On the intro card the two pipe ends slide
  // in from both sides into the nuts.
  // On the intro card it plays once and slowly (it happens once: the pipes are joined).
  'w.koppeling': () => (
    <g>
      <Ground cx={60} cy={98} rx={50} ry={5} />
      <Move kind="from" dx={-16} once>
        {pipe(12, 30)}
        {/* The left pipe's open end, facing the viewer */}
        <ellipse cx={12} cy={CY} rx={5.5} ry={PR} fill={CU.light} />
        <ellipse cx={12.6} cy={CY} rx={3.2} ry={PR - 4} fill={CU.inside} />
      </Move>
      <Move kind="from" dx={16}>{pipe(88, 108)}</Move>
      {/* The body in the middle, slimmer than the nuts */}
      {nut(48, 24, 19)}
      {/* The two big nuts */}
      {nut(26, 24, 30)}
      {nut(66, 24, 30)}
      <Shine d={`M31 ${CY - 24}H45`} color={PAL.yellowShine} width={3.4} opacity={0.9} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
