import type { JSX } from 'react';
import { Ground, Move, PAL, Shade, Shine } from '../kit';

/** The depth axis of the slanted view: one unit of depth goes this far right and up. */
const DX = 0.6;
const DY = -0.8;

/** The oil pan (sump): front x, width, top, height and depth; the drain hole on its front. */
const SX = 10;
const SW = 52;
const SY = 20;
const SH = 30;
const SD = 12;
const HX = 32;
const HY = 38;

/** The plug standing on its hex head: centre x, the head's top and the shank's top. */
const PX = 84;
const HEAD = 86;
const SHANK = 46;

export default {
  // "de aftapplug": the drain plug — a short steel bolt standing on its hex head with a copper sealing ring,
  // next to the steel oil pan whose open drain hole drips golden oil onto a little puddle.
  'w.aftapplug': () => (
    <g strokeLinecap="round">
      <Ground cx={70} cy={104} rx={40} ry={4} />
      {/* The oil pan: right side, light top, front */}
      <path d={`M${SX + SW} ${SY}L${SX + SW + SD * DX} ${SY + SD * DY}V${SY + SH + SD * DY}L${SX + SW} ${SY + SH}Z`} fill={PAL.slate} />
      <path d={`M${SX} ${SY}H${SX + SW}L${SX + SW + SD * DX} ${SY + SD * DY}H${SX + SD * DX}Z`} fill={PAL.mist} />
      <rect x={SX} y={SY} width={SW} height={SH} rx="2" fill={PAL.steel} />
      {/* The drain boss with the open hole */}
      <circle cx={HX} cy={HY} r="9" fill={PAL.mist} />
      <circle cx={HX} cy={HY} r="5" fill={PAL.slateDark} />
      {/* The oil running out and dripping onto a puddle */}
      <path d={`M${HX} ${HY + 3}V${HY + 16}`} stroke={PAL.yellowShade} strokeWidth="3.4" />
      {/* On the intro card the drop comes out of the hole and falls down the stream */}
      <Move kind="drop" dy={-24}>
        <path d={`M${HX} 66Q${HX + 5} 72 ${HX + 5} 75A5 5 0 0 1 ${HX - 5} 75Q${HX - 5} 72 ${HX} 66Z`} fill={PAL.yellowShade} />
      </Move>
      <ellipse cx={HX} cy="100" rx="16" ry="3.6" fill={PAL.yellowShade} />
      <ellipse cx={HX - 3} cy="99.2" rx="5" ry="1.2" fill={PAL.yellow} />
      {/* The plug: the hex head (three faces) */}
      <path d={`M${PX - 20} ${HEAD}V99L${PX - 10} 104V${HEAD + 5}Z`} fill={PAL.mist} />
      <path d={`M${PX - 10} ${HEAD + 5}V104H${PX + 10}V${HEAD + 5}Z`} fill={PAL.steel} />
      <path d={`M${PX + 10} ${HEAD + 5}V104L${PX + 20} 99V${HEAD}Z`} fill={PAL.slate} />
      <path d={`M${PX - 20} ${HEAD}L${PX - 10} ${HEAD + 5}H${PX + 10}L${PX + 20} ${HEAD}L${PX + 10} ${HEAD - 5}H${PX - 10}Z`} fill={PAL.paper} />
      {/* The copper sealing ring on the head */}
      <ellipse cx={PX} cy={HEAD - 1} rx="16" ry="5.4" fill={PAL.clayShade} />
      <ellipse cx={PX} cy={HEAD - 3} rx="16" ry="5.4" fill={PAL.clay} />
      {/* The threaded shank, shaded on the right, with its threads */}
      <Shade color={PAL.steel} opacity={1} at={[PX + 12, 66, 6, 26]}>
        <rect x={PX - 9} y={SHANK} width="18" height={HEAD - SHANK - 3} rx="2" fill={PAL.mist} />
      </Shade>
      {[53, 60, 67, 74].map((y) => (
        <path key={y} d={`M${PX - 8} ${y + 2}L${PX + 8} ${y - 2}`} stroke={PAL.line} strokeWidth="2" />
      ))}
      <ellipse cx={PX} cy={SHANK} rx="9" ry="3" fill={PAL.paper} />
      <Shine d={`M${SX + 5} ${SY + 6}V${SY + 14}`} width={3} opacity={0.6} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
