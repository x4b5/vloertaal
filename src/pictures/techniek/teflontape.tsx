import type { JSX } from 'react';
import { Ground, PAL, Shine } from '../kit';

/** Brass (darker steps of the hard-hat yellow). */
const BRASS = { light: PAL.yellow, base: PAL.yellowShade, shade: '#b98a00', inside: '#8a6500' };
/** The tape: a light blue-white face (reads on the white card), its grey side. */
const TAPE = { face: '#e3f5ff', side: PAL.mist, sideDeep: PAL.line };

/** The roll: the centre of its face, the face's radii, and how far its side goes back to the right. */
const RX0 = 64;
const RY0 = 50;
const FRX = 23;
const FRY = 31;
const DEPTH = 15;

/** The small pipe end in front, bottom left: level, its thread on the right. */
const CY = 94;
const PR = 9;
const X0 = 8;
const TX = 28;
const WX = 38;
const EX = 50;

export default {
  // "de teflontape": the PTFE thread tape — a big roll of white tape seen slanted (light blue-white face,
  // grey side, a cardboard core round the hole), its band running down to a small brass pipe end in front
  // with a few turns of tape round its thread.
  'w.teflontape': () => (
    <g>
      <Ground cx={66} cy={102} rx={40} ry={4.5} />
      {/* The roll: its side (to the right), then the face */}
      <ellipse cx={RX0 + DEPTH} cy={RY0} rx={FRX} ry={FRY} fill={TAPE.sideDeep} />
      <rect x={RX0} y={RY0 - FRY} width={DEPTH} height={2 * FRY} fill={TAPE.side} />
      <path d={`M${RX0} ${RY0 - FRY}H${RX0 + DEPTH}A${FRX} ${FRY} 0 0 1 ${RX0 + DEPTH} ${RY0 + FRY}H${RX0}Z`} fill={TAPE.side} />
      <ellipse cx={RX0} cy={RY0} rx={FRX} ry={FRY} fill={TAPE.face} />
      <ellipse cx={RX0} cy={RY0} rx={FRX - 6} ry={FRY - 8} fill="none" stroke={PAL.paperShade} strokeWidth="1.6" />
      {/* The cardboard core and the hole */}
      <ellipse cx={RX0} cy={RY0} rx={10} ry={13.5} fill={PAL.card} />
      <ellipse cx={RX0 + 1.6} cy={RY0 + 0.6} rx={6.4} ry={9.5} fill={PAL.slate} />
      <Shine d={`M${RX0 - 17} ${RY0 - 8}Q${RX0 - 14} ${RY0 - 22} ${RX0 - 5} ${RY0 - 27}`} width={3.4} opacity={0.9} />
      {/* The band from the roll down to the thread */}
      <path d={`M${RX0 - 14} ${RY0 + 22}L${RX0 - 4} ${RY0 + 28}L${WX} ${CY + PR - 1}L${TX + 2} ${CY + PR - 1}Z`} fill={TAPE.side} />
      <path d={`M${RX0 - 14} ${RY0 + 22}L${RX0 - 8} ${RY0 + 26}L${WX - 4} ${CY + PR - 1}L${TX + 2} ${CY + PR - 1}Z`} fill={TAPE.face} />
      {/* The small brass pipe end: base, shaded underside, the thread as slanted grooves */}
      <rect x={X0} y={CY - PR} width={EX - X0} height={2 * PR} fill={BRASS.base} />
      <rect x={X0} y={CY + 2} width={EX - X0} height={PR - 2} fill={BRASS.shade} />
      <path d={`M${X0 + 3} ${CY - PR + 3}H${TX - 4}`} stroke={PAL.yellowShine} strokeWidth="2.4" strokeLinecap="round" opacity=".8" />
      <path d={`M${WX + 2} ${CY + PR - 1}L${WX + 5} ${CY - PR + 1}M${WX + 7} ${CY + PR - 1}L${WX + 10} ${CY - PR + 1}`} stroke={BRASS.inside} strokeWidth="2.2" strokeLinecap="round" />
      {/* A few turns of tape round the thread */}
      <rect x={TX} y={CY - PR - 1.5} width={WX - TX + 1} height={2 * PR + 3} rx="2" fill={TAPE.face} />
      <rect x={TX} y={CY + 3} width={WX - TX + 1} height={PR - 1.5} rx="2" fill={TAPE.side} />
      {/* The open end */}
      <ellipse cx={EX} cy={CY} rx={3.8} ry={PR} fill={BRASS.light} />
      <ellipse cx={EX + 0.4} cy={CY} rx={2} ry={PR - 3} fill={BRASS.inside} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
