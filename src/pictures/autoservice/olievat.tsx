import type { JSX } from 'react';
import { Ground, PAL, Shade, Shine } from '../kit';

/** The drum: centre x, half width, the curve of its rims seen from above, top and bottom rim. */
const CX = 60;
const RX = 31;
const RY = 9;
const TOP = 22;
const BOT = 94;
const FRONT = `M${CX - RX} ${TOP}A${RX} ${RY} 0 0 0 ${CX + RX} ${TOP}V${BOT}A${RX} ${RY} 0 0 1 ${CX - RX} ${BOT}Z`;
/** A rolled hoop round the drum at height y: the front half of a rim. */
const hoop = (y: number) => `M${CX - RX} ${y}A${RX} ${RY} 0 0 0 ${CX + RX} ${y}`;

export default {
  // "het olievat": the oil drum — an upright blue steel drum with two rolled hoops, a light lid with a steel
  // bung and a small vent cap, and a golden oil drop on its front.
  'w.olievat': () => (
    <g strokeLinecap="round">
      <Ground cx={CX} cy={103} rx={40} ry={4.5} />
      <Shade color={PAL.blueShade} opacity={1} at={[CX + RX + 2, 60, 15, 50]}>
        <path d={FRONT} fill={PAL.blue} />
      </Shade>
      {/* The two rolled hoops and the bottom rim */}
      <path d={hoop(46)} fill="none" stroke={PAL.navy} strokeWidth="3.6" />
      <path d={hoop(72)} fill="none" stroke={PAL.navy} strokeWidth="3.6" />
      <path d={hoop(BOT - 2)} fill="none" stroke={PAL.navy} strokeWidth="3" />
      <Shine d={`M${CX - RX + 5} 32V40`} width={3.4} opacity={0.6} />
      <Shine d={`M${CX - RX + 5} 56V64`} width={3.4} opacity={0.6} />
      {/* The golden oil drop on the front */}
      <path d={`M${CX - 4} 49Q${CX + 6} 59 ${CX + 6} 63.5A10 10 0 0 1 ${CX - 14} 63.5Q${CX - 14} 59 ${CX - 4} 49Z`} fill={PAL.yellow} />
      <path d={`M${CX - 9.5} 63Q${CX - 9.3} 60 ${CX - 7.5} 58`} fill="none" stroke={PAL.yellowShine} strokeWidth="2" />
      {/* The lid: the rolled top rim, the lid, the bung and the vent */}
      <ellipse cx={CX} cy={TOP} rx={RX} ry={RY} fill={PAL.blueShade} />
      <ellipse cx={CX} cy={TOP + 0.5} rx={RX - 3} ry={RY - 2.2} fill={PAL.blueLight} />
      <ellipse cx={CX + 13} cy={TOP + 0.5} rx="6" ry="2.8" fill={PAL.steel} />
      <rect x={CX + 9} y={TOP - 4.5} width="8" height="4.5" rx="1" fill={PAL.mist} />
      <ellipse cx={CX + 13} cy={TOP - 4.5} rx="4" ry="1.8" fill={PAL.paper} />
      <ellipse cx={CX - 14} cy={TOP + 1} rx="3.6" ry="1.7" fill={PAL.steel} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
