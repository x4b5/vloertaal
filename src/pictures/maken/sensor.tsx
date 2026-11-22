import type { JSX } from 'react';
import { Ground, Move, PAL, Shine } from '../kit';

/** The depth axis of the slanted view (as in group55): one unit of depth goes this far right and up. */
const DX = 0.6;
const DY = -0.8;

const pts = (p: [number, number][]) => p.map(([a, b]) => `${a},${b}`).join(' ');

type SlabProps = { x: number; y: number; w: number; d: number; h: number; top: string; front: string; side: string };

/** A box in the slanted view: a light top, a front and a darker right side. */
function Slab({ x, y, w, d, h, top, front, side }: SlabProps) {
  const ox = d * DX;
  const oy = d * DY;
  return (
    <g>
      <polygon points={pts([[x, y - h], [x + w, y - h], [x + w + ox, y - h + oy], [x + ox, y - h + oy]])} fill={top} />
      <rect x={x} y={y - h} width={w} height={h} fill={front} />
      <polygon points={pts([[x + w, y], [x + w, y - h], [x + w + ox, y - h + oy], [x + w + ox, y + oy]])} fill={side} />
    </g>
  );
}

/** A light step of cardboard for the top of the box (tekenstijl: cardboard light). */
const CARD_LIGHT = '#f0c48a';
/** Darker steel for the underside of the barrel (as STEEL_DARK in group53). */
const STEEL_DARK = '#5d6a75';
/** The core of the light beam: one step lighter than PAL.ice. */
const ICE_LIGHT = '#d4f3ff';

/** The barrel lies along the x axis of a group turned this far, round the point where it goes through the bracket. */
const TILT = -30;
const PIVOT: [number, number] = [82, 48];
/** Along the barrel: the lens tip, the threaded part, the plastic back end. */
const TIP = -38;
const THREAD: [number, number] = [-34, 14];
const BACK = 22;
const R = 10;

/** One hex nut seen from the side, its three flats as bands, centred on x along the barrel. */
const nut = (x: number) => (
  <g>
    <rect x={x - 3.5} y={-14.5} width="7" height="29" rx="1.5" fill={PAL.steel} />
    <rect x={x - 3.5} y={-14.5} width="7" height="9" rx="1.5" fill={PAL.mist} />
    <rect x={x - 3.5} y={5.5} width="7" height="9" rx="1.5" fill={PAL.slate} />
  </g>
);

/** A band of light from the lens tip to x = x1 (it goes on under the box), widening from w0 to w1. */
const beam = (w0: number, w1: number, x1: number) => pts([[TIP, -w0], [x1, -w1], [x1, w1], [TIP, w0]]);

export default {
  // "de sensor": the sensor — a big steel threaded sensor barrel held by two hex nuts in a yellow
  // bracket, a green light and a black cable at the back; from its pale lens a band of light falls
  // on the corner of a cardboard box.
  'w.sensor': () => (
    <g>
      <Ground cx={88} cy={104} rx={22} ry={4} />
      {/* A strip of belt under the box, and the box */}
      <rect x="10" y="95" width="36" height="5" rx="1.5" fill={PAL.steel} />
      <rect x="10" y="100" width="36" height="3" rx="1.5" fill={PAL.slateDark} />
      {/* The light: a pale band with a lighter core from the lens to the box */}
      <Move kind="show">
        <g transform={`translate(${PIVOT[0]} ${PIVOT[1]}) rotate(${TILT})`}>
          <polygon points={beam(5, 8, -66)} fill={PAL.ice} />
          <polygon points={beam(2, 3.4, -66)} fill={ICE_LIGHT} />
        </g>
      </Move>
      <Move kind="from" dx={-24}>
        <Slab x={12} y={95} w={16} d={10} h={26} top={CARD_LIGHT} front={PAL.card} side={PAL.cardShade} />
      </Move>
      {/* The yellow bracket: a foot on the floor and an upright plate */}
      <Slab x={68} y={104} w={30} d={10} h={4} top={PAL.yellowLight} front={PAL.yellow} side={PAL.yellowShade} />
      <Slab x={74} y={100} w={8} d={10} h={62} top={PAL.yellowLight} front={PAL.yellow} side={PAL.yellowShade} />
      {/* The barrel through the plate */}
      <g transform={`translate(${PIVOT[0]} ${PIVOT[1]}) rotate(${TILT})`}>
        {/* The short black cable out of the back */}
        <path d={`M${BACK} 0Q${BACK + 9} 0 ${BACK + 10} 9`} fill="none" stroke={PAL.slateDark} strokeWidth="5" strokeLinecap="round" />
        <path d={`M${BACK} -1.4Q${BACK + 7.6} -1.4 ${BACK + 8.6} 6`} fill="none" stroke={PAL.steel} strokeWidth="1.4" strokeLinecap="round" />
        {/* The plastic back end with its lit green light */}
        <rect x={THREAD[1] - 2} y={-R + 1} width={BACK - THREAD[1] + 2} height={2 * R - 2} rx="3" fill={PAL.slate} />
        <Move kind="show">
          <circle cx={BACK - 4} cy={-R + 1.5} r="3" fill={PAL.leaf} />
          <circle cx={BACK - 4.6} cy={-R + 0.9} r="1.2" fill={PAL.lime} />
        </Move>
        {/* The threaded steel barrel: light top, dark underside, thread bands */}
        <rect x={THREAD[0]} y={-R} width={THREAD[1] - THREAD[0]} height={2 * R} rx="2" fill={PAL.steel} />
        <rect x={THREAD[0]} y={3} width={THREAD[1] - THREAD[0]} height={R - 3} rx="2" fill={STEEL_DARK} />
        <path
          d={Array.from({ length: 11 }, (_, i) => `M${THREAD[0] + 3 + i * 4.4} ${-R + 1}V${R - 1}`).join('')}
          stroke={PAL.mist}
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        {/* The pale lens at the tip */}
        <rect x={TIP} y={-6.5} width={6} height={13} rx="3" fill={PAL.ice} />
        <rect x={TIP + 1.2} y={-4} width={2.4} height={5} rx="1.2" fill={PAL.white} />
      </g>
      {/* The plate's face hides the barrel where it goes through */}
      <rect x="74" y="38" width="8" height="62" fill={PAL.yellow} />
      <Shine d="M76.5 42V60" color={PAL.yellowShine} width={2.4} opacity={0.8} />
      {/* The two nuts, one each side of the plate */}
      <g transform={`translate(${PIVOT[0]} ${PIVOT[1]}) rotate(${TILT})`}>
        {nut(-11)}
        {nut(13)}
      </g>
    </g>
  ),
} as Record<string, () => JSX.Element>;
