import type { JSX } from 'react';
import { Ground, PAL, Shade, Shine } from '../kit';

/** The washer lies flat, seen from a little above: centre, outer and hole radii, thickness. */
const CX = 58;
const CY = 74;
const RX = 44;
const RY = 21;
const HX = 16;
const HY = 7.6;
const T = 6;

export default {
  // "de sluitring": the washer — a big flat zinc washer lying flat, seen from a little above, with its dark hole; a steel
  // hex bolt stands above it, its threaded end just going into the hole.
  'w.sluitring': () => (
    <g strokeLinejoin="round">
      <Ground cx={CX} cy={CY + T + RY - 1} rx={46} ry={4} />
      {/* The washer: the thickness edge, the light top face (shade on the right), the hole */}
      <ellipse cx={CX} cy={CY + T} rx={RX} ry={RY} fill={PAL.steel} />
      <rect x={CX - RX} y={CY} width={RX * 2} height={T} fill={PAL.steel} />
      <Shade color={PAL.paperShade} opacity={1} at={[CX + 40, CY + 12, 30, 24]}>
        <ellipse cx={CX} cy={CY} rx={RX} ry={RY} fill={PAL.paper} />
      </Shade>
      <ellipse cx={CX} cy={CY} rx={HX} ry={HY} fill={PAL.slate} />
      <path d={`M${CX - HX} ${CY}A${HX} ${HY} 0 0 0 ${CX + HX} ${CY}V${CY + 1}A${HX} ${HY - 2} 0 0 1 ${CX - HX} ${CY + 1}Z`} fill={PAL.steel} />
      <ellipse cx={CX} cy={CY + 3} rx={HX - 3} ry={HY - 3.4} fill={PAL.slateDark} />
      <Shine d={`M${CX - 34} ${CY - 9}Q${CX - 22} ${CY - 17} ${CX - 4} ${CY - 18}`} width={3.4} opacity={0.9} />
      {/* The bolt: threaded shank going down into the hole, then the hex head on top */}
      <rect x={CX - 7} y="24" width="14" height="52" rx="3" fill={PAL.steel} />
      <path d={`M${CX - 7} 44L${CX + 7} 41M${CX - 7} 50L${CX + 7} 47M${CX - 7} 56L${CX + 7} 53M${CX - 7} 62L${CX + 7} 59M${CX - 7} 68L${CX + 7} 65`} stroke={PAL.slate} strokeWidth="1.6" strokeLinecap="round" />
      <polygon points={`${CX - 15},18 ${CX - 8},14 ${CX + 8},14 ${CX + 15},18 ${CX + 15},28 ${CX - 15},28`} fill={PAL.steel} />
      <rect x={CX - 15} y="18" width="10" height="10" fill={PAL.mist} />
      <rect x={CX - 5} y="18" width="10" height="10" fill={PAL.steel} />
      <rect x={CX + 5} y="18" width="10" height="10" fill={PAL.slate} />
      <polygon points={`${CX - 15},18 ${CX - 8},12 ${CX + 8},12 ${CX + 15},18`} fill={PAL.paper} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
