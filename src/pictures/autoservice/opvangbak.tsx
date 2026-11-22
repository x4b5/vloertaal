import type { JSX } from 'react';
import { Ground, PAL, Shade, Shine } from '../kit';

/** Used oil: a dark amber step of the hard-hat yellow, one step darker for its rings. */
const OIL = '#b98a00';
const OIL_DARK = '#8a6600';

/** The pan: centre x, the rim's half width and curve, the rim and the floor of the pan. */
const CX = 60;
const RX = 46;
const RY = 12;
const RIM = 78;
const FLOOR = 96;

export default {
  // "de opvangbak": the oil drain pan — a low wide dark pan on the floor with dark amber oil in it; from the
  // drain hole of the car's oil pan above, a thin golden stream of oil falls into it with a ring where it lands.
  'w.opvangbak': () => (
    <g strokeLinecap="round">
      <Ground cx={CX} cy={104} rx={44} ry={4.5} />
      {/* The car's oil pan above: its steel underside and the drain boss with the hole */}
      <path d="M26 10H94V16Q94 22 88 22H32Q26 22 26 16Z" fill={PAL.steel} />
      <path d="M26 18H94V16Q94 22 88 22H32Q26 22 26 16Z" fill={PAL.slate} />
      <rect x={CX - 7} y="20" width="14" height="6" rx="2" fill={PAL.mist} />
      <ellipse cx={CX} cy="26" rx="4" ry="1.6" fill={PAL.slateDark} />
      {/* The thin stream of oil */}
      <path d={`M${CX} 27V${RIM + 3}`} stroke={PAL.yellowShade} strokeWidth="4" />
      {/* The pan: its sloping front, shaded on the right */}
      <Shade color={PAL.slateDark} opacity={1} at={[CX + RX, 90, 22, 20]}>
        <path d={`M${CX - RX} ${RIM}A${RX} ${RY} 0 0 0 ${CX + RX} ${RIM}L${CX + RX - 6} ${FLOOR}A${RX - 6} ${RY - 2} 0 0 1 ${CX - RX + 6} ${FLOOR}Z`} fill={PAL.slate} />
      </Shade>
      {/* The rim (a light steel lip), the inside wall and the oil */}
      <ellipse cx={CX} cy={RIM} rx={RX} ry={RY} fill={PAL.steel} />
      <ellipse cx={CX} cy={RIM + 0.6} rx={RX - 3} ry={RY - 2} fill={PAL.slateDark} />
      <ellipse cx={CX} cy={RIM + 2.4} rx={RX - 8} ry={RY - 5} fill={OIL} />
      {/* Where the stream lands: a ring in the oil */}
      <ellipse cx={CX} cy={RIM + 3} rx="10" ry="3" fill="none" stroke={OIL_DARK} strokeWidth="1.8" />
      <ellipse cx={CX} cy={RIM + 3} rx="4" ry="1.4" fill={PAL.yellowShade} />
      <Shine d={`M${CX - 30} ${RIM + 1}Q${CX - 24} ${RIM - 2} ${CX - 16} ${RIM - 2.6}`} color={PAL.yellowShine} width={2} opacity={0.7} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
