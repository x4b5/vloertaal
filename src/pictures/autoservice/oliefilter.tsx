import type { JSX } from 'react';
import { Ground, PAL, Shade, Shine, r1 } from '../kit';

/** The can: centre x, half width, the curve of its rims seen from above, top and bottom rim. */
const CX = 60;
const RX = 30;
const RY = 12;
const TOP = 32;
const BOT = 90;
/** A band of the can's front between two heights: the front halves of both rims. */
const band = (y0: number, y1: number) => `M${CX - RX} ${y0}A${RX} ${RY} 0 0 0 ${CX + RX} ${y0}V${y1}A${RX} ${RY} 0 0 1 ${CX - RX} ${y1}Z`;
/** The small oil holes round the threaded hole in the base plate. */
const HOLES = Array.from({ length: 8 }, (_, i) => {
  const a = (i / 8) * Math.PI * 2 + 0.3;
  return [r1(CX + Math.cos(a) * 16), r1(TOP + Math.sin(a) * 6.2)] as [number, number];
});

export default {
  // "het oliefilter": the oil filter — an upright orange spin-on can with a blue band, seen a little from
  // above: on top the steel base plate with a ring of small oil holes, the big threaded hole in the
  // middle and the dark rubber sealing ring round its edge.
  'w.oliefilter': () => (
    <g>
      <Ground cx={CX} cy={103} rx={38} ry={4} />
      {/* The orange can and its blue band, shaded on the right */}
      <Shade color={PAL.orangeShade} opacity={1} at={[CX + RX + 4, 66, 16, 50]}>
        <path d={band(TOP, BOT)} fill={PAL.orange} />
      </Shade>
      <Shade color={PAL.blueShade} opacity={1} at={[CX + RX + 4, 66, 16, 50]}>
        <path d={band(56, 74)} fill={PAL.blue} />
      </Shade>
      <Shine d={`M${CX - RX + 5} ${TOP + 14}V${TOP + 20}`} width={3.4} opacity={0.6} />
      <Shine d={`M${CX - RX + 5} ${80}V${86}`} width={3.4} opacity={0.6} />
      {/* The rubber sealing ring, the steel base plate inside it */}
      <ellipse cx={CX} cy={TOP} rx={RX} ry={RY} fill={PAL.slateDark} />
      <ellipse cx={CX} cy={TOP + 0.6} rx={RX - 6} ry={RY - 3.2} fill={PAL.mist} />
      {HOLES.map(([x, y]) => (
        <ellipse key={`${x}-${y}`} cx={x} cy={y} rx="2.4" ry="1.6" fill={PAL.slate} />
      ))}
      {/* The threaded hole: a steel collar with the dark hole in it */}
      <ellipse cx={CX} cy={TOP + 0.6} rx="9" ry="4.2" fill={PAL.steel} />
      <ellipse cx={CX} cy={TOP + 1} rx="6" ry="2.6" fill={PAL.slateDark} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
