import type { JSX } from 'react';
import { Ground, Move, PAL, Shade, Shine } from '../kit';

/** The depth axis of the slanted view: one unit of depth goes this far right and up. */
const DX = 0.6;
const DY = -0.8;

/** The funnel: centre x, the mouth's half width and curve, the mouth and where the cone meets the spout. */
const CX = 58;
const RX = 32;
const RY = 10;
const MOUTH = 32;
const NECK = 70;
/** The engine block it stands in: front x, width, top edge, depth; the filler hole on its top. */
const BX = 18;
const BW = 74;
const BY = 92;
const BD = 12;
const HOLE_Y = BY + (BD / 2) * DY;

export default {
  // "de trechter": the funnel — a red plastic funnel standing in the filler hole on top of a steel engine
  // block; a golden stream of oil falls into its wide mouth, which is full of oil.
  'w.trechter': () => (
    <g strokeLinecap="round">
      <Ground cx={60} cy={105} rx={46} ry={4} />
      {/* The engine block: right side, light top, front */}
      <path d={`M${BX + BW} ${BY}L${BX + BW + BD * DX} ${BY + BD * DY}V${104 + BD * DY}L${BX + BW} 104Z`} fill={PAL.slate} />
      <path d={`M${BX} ${BY}H${BX + BW}L${BX + BW + BD * DX} ${BY + BD * DY}H${BX + BD * DX}Z`} fill={PAL.mist} />
      <rect x={BX} y={BY} width={BW} height={104 - BY} fill={PAL.steel} />
      {/* The filler hole: a dark collar */}
      <ellipse cx={CX + 3} cy={HOLE_Y} rx="11" ry="3.6" fill={PAL.slateDark} />
      {/* The spout going down into the hole */}
      <path d={`M${CX - 5} ${NECK - 2}L${CX - 3} ${HOLE_Y}H${CX + 3}L${CX + 5} ${NECK - 2}Z`} fill={PAL.redShade} />
      {/* The cone, shaded on the right */}
      <Shade color={PAL.redShade} opacity={1} at={[CX + RX, 52, 16, 30]}>
        <path d={`M${CX - RX} ${MOUTH}A${RX} ${RY} 0 0 0 ${CX + RX} ${MOUTH}L${CX + 6} ${NECK}H${CX - 6}Z`} fill={PAL.red} />
      </Shade>
      <Shine d={`M${CX - 23} ${MOUTH + 10}L${CX - 14} ${MOUTH + 24}`} width={3.2} opacity={0.55} />
      {/* The mouth: the red rim, the dark inside and the oil in it */}
      <ellipse cx={CX} cy={MOUTH} rx={RX} ry={RY} fill={PAL.redShade} />
      <ellipse cx={CX} cy={MOUTH + 0.6} rx={RX - 4} ry={RY - 2.6} fill={PAL.yellowShade} />
      <ellipse cx={CX} cy={MOUTH + 1} rx="7" ry="2.2" fill={PAL.yellow} />
      {/* The stream of oil falling into it (on the intro card it comes down from above) */}
      <Move kind="from" dy={-24}>
        <path d={`M${CX} 10V${MOUTH}`} stroke={PAL.yellow} strokeWidth="5" />
      </Move>
    </g>
  ),
} as Record<string, () => JSX.Element>;
