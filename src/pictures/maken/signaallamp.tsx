import type { JSX } from 'react';
import { Motion, Move, PAL, Shade, Shine } from '../kit';

/** The tower's round column: centre x, half width, and the curve of its rings seen from above. */
const CX = 60;
const RX = 17;
const RY = 4.5;
/** The unlit lamps: pale, greyed tints of PAL.orange, PAL.green and PAL.blue (glass with no light behind it). */
const ORANGE_OFF = '#f3c9a0';
const GREEN_OFF = '#b7d9b5';
const BLUE_OFF = '#b4d3ec';

/** The front of one round ring of the tower, from y0 (top) to y1 (bottom), a little from above. */
const ring = (y0: number, y1: number, rx = RX, ry = RY) =>
  `M${CX - rx} ${y0}A${rx} ${ry} 0 0 0 ${CX + rx} ${y0}V${y1}A${rx} ${ry} 0 0 1 ${CX - rx} ${y1}Z`;

/** The rounded dark dome on top: half an egg over the column's top ring. */
const DOME = `M${CX - RX} 21A${RX} 13 0 0 1 ${CX + RX} 21A${RX} ${RY} 0 0 1 ${CX - RX} 21Z`;

/** One lamp of the stack in a solid fill, its right side shaded. */
const lamp = (y0: number, y1: number, fill: string, shade: string, opacity: number) => (
  <Shade color={shade} opacity={opacity} at={[CX + RX + 4, (y0 + y1) / 2 + 3, 9, 30]}>
    <path d={ring(y0, y1)} fill={fill} />
  </Shade>
);

export default {
  // "de signaallamp": the signal tower light — a tall round stack of four thin lamps (red, orange,
  // green, blue) between dark rings, a dark dome on top, on a short pole on the corner of a grey
  // machine: the red lamp on top is lit with rays, the others are off (pale glass).
  // On the intro card: the red lamp's rays appear, as it lights up (one fade, no blinking).
  // Once and slowly (a lamp goes on: it happens once).
  'w.signaallamp': () => (
    <g>
      {/* The machine's corner: ground shadow, front, right side, top */}
      <path d="M14 109L84 109L104 96L34 96Z" fill="#000" opacity="0.14" />
      <path d="M18 99L84 99L84 107L18 107Z" fill={PAL.steel} />
      <path d="M84 99L100 89L100 97L84 107Z" fill={PAL.slate} />
      <path d="M18 99L84 99L100 89L34 89Z" fill={PAL.mist} />
      {/* The rays of the lit lamp */}
      <Move kind="show" once>
        <Motion x={CX} y={30} dir={180} spread={64} n={3} len={7} gap={27} color={PAL.red} width={3.4} />
        <Motion x={CX} y={30} dir={0} spread={64} n={3} len={7} gap={27} color={PAL.red} width={3.4} />
      </Move>
      {/* The small round foot and the short pole */}
      <path d={ring(93, 95.5, 11, 3)} fill={PAL.slate} />
      <ellipse cx={CX} cy={93} rx={11} ry={3} fill={PAL.steel} />
      <rect x={CX - 4} y="86" width="8" height="8" fill={PAL.steel} />
      <rect x={CX} y="86" width="4" height="8" fill={PAL.slate} />
      {/* The dark core of the stack: the rings between the lamps and the base under them */}
      <Shade color={PAL.slateDark} opacity={1} at={[CX + RX + 4, 55, 9, 60]}>
        <path d={ring(20, 87)} fill={PAL.slate} />
      </Shade>
      {/* The four lamps: red lit, orange, green and blue off */}
      {lamp(23, 38, PAL.red, PAL.redShade, 0.85)}
      {lamp(42, 51, ORANGE_OFF, PAL.orangeShade, 0.3)}
      {lamp(55, 64, GREEN_OFF, PAL.greenShade, 0.3)}
      {lamp(68, 77, BLUE_OFF, PAL.blueShade, 0.3)}
      <path d={`M${CX - 11} 28V35`} stroke={PAL.redLight} strokeWidth="3.6" strokeLinecap="round" opacity=".8" />
      {/* The dark dome on top */}
      <Shade color={PAL.slateDark} opacity={1} at={[CX + RX + 4, 16, 10, 14]}>
        <path d={DOME} fill={PAL.slate} />
      </Shade>
      <Shine d={`M${CX - 11} 17Q${CX - 9} 12 ${CX - 3} 10.2`} width={2.4} opacity={0.5} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
