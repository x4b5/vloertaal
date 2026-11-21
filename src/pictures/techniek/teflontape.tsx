import type { JSX } from 'react';
import { Ground, PAL, Shine } from '../kit';

/** Brass (darker steps of the hard-hat yellow). */
const BRASS = { light: PAL.yellow, base: PAL.yellowShade, shade: '#b98a00', inside: '#8a6500' };

/** The pipe end: level, upper left; the thread from TX to the open end at EX. */
const CY = 36;
const PR = 14;
const X0 = 10;
const TX = 38;
const EX = 80;
/** The tape already wound: from TX to WX. */
const WX = 60;

/** The roll of tape, standing on its edge at the bottom right. */
const RC: [number, number] = [80, 80];
const RR = 23;

export default {
  // "de teflontape": the PTFE thread tape — a brass pipe end with a thread, the white tape wound round
  // half of the thread, and the band running down to a small white roll (grey edge) standing below it.
  'w.teflontape': () => (
    <g>
      <Ground cx={82} cy={105} rx={27} ry={4} />
      {/* The brass pipe: base, the shaded underside, the thread as slanted grooves */}
      <rect x={X0} y={CY - PR} width={EX - X0} height={2 * PR} fill={BRASS.base} />
      <rect x={X0} y={CY + 2} width={EX - X0} height={PR - 2} fill={BRASS.shade} />
      <Shine d={`M${X0 + 4} ${CY - PR + 4}H${TX - 4}`} color={PAL.yellowShine} width={3} opacity={0.8} />
      <path
        d={Array.from({ length: 6 }, (_, i) => `M${TX + 4 + i * 7} ${CY + PR - 1}L${TX + 9 + i * 7} ${CY - PR + 1}`).join('')}
        stroke={BRASS.inside}
        strokeWidth="2.8"
        strokeLinecap="round"
      />
      {/* The open end */}
      <ellipse cx={EX} cy={CY} rx={5.6} ry={PR} fill={BRASS.light} />
      <ellipse cx={EX + 0.4} cy={CY} rx={3.2} ry={PR - 3.6} fill={BRASS.inside} />
      {/* The band from the wound part down to the roll */}
      <path d={`M${WX - 8} ${CY + PR - 1}L${WX} ${CY + PR - 1}L${RC[0] + 4} ${RC[1] - RR + 1}L${RC[0] - 6} ${RC[1] - RR + 2}Z`} fill={PAL.paperShade} />
      <path d={`M${WX - 8} ${CY + PR - 1}L${WX - 2} ${CY + PR - 1}L${RC[0] - 1} ${RC[1] - RR + 1}L${RC[0] - 6} ${RC[1] - RR + 2}Z`} fill={PAL.white} />
      {/* The wound tape round the thread */}
      <rect x={TX - 1} y={CY - PR - 1.5} width={WX - TX + 1} height={2 * PR + 3} rx="2.5" fill={PAL.white} />
      <rect x={TX - 1} y={CY + 3} width={WX - TX + 1} height={PR - 1.5} rx="2.5" fill={PAL.paperShade} />
      <path d={`M${TX + 6} ${CY + PR}L${TX + 11} ${CY - PR}M${TX + 13} ${CY + PR}L${TX + 18} ${CY - PR}`} stroke={PAL.paperShade} strokeWidth="1.6" strokeLinecap="round" />
      {/* The roll: its grey edge (depth), the white face, the core and the hole */}
      <circle cx={RC[0] + 4} cy={RC[1] + 1} r={RR} fill={PAL.line} />
      <circle cx={RC[0]} cy={RC[1]} r={RR} fill={PAL.white} />
      <circle cx={RC[0]} cy={RC[1]} r={RR} fill="none" stroke={PAL.paperShade} strokeWidth="2" />
      <circle cx={RC[0]} cy={RC[1]} r={11} fill={PAL.mist} />
      <circle cx={RC[0] + 1} cy={RC[1] + 0.5} r={7} fill={PAL.slate} />
      <Shine d={`M${RC[0] - 15} ${RC[1] - 6}Q${RC[0] - 12} ${RC[1] - 14} ${RC[0] - 5} ${RC[1] - 16}`} color={PAL.paperShade} width={2.4} opacity={1} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
