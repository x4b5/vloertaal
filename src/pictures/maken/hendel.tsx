import type { JSX } from 'react';
import { Ground, Move, PAL, Shade, Shine, r1 } from '../kit';

/** Darker steel (the boss, the arm's shade edge): one step under PAL.steel, as in group53. */
const STEEL_DARK = '#5d6a75';

/** The pivot (the axle) of the lever, on the machine's wall. */
const PIVOT: [number, number] = [28, 76];
/** A point at angle `deg` (0 = right, -90 = up) and distance `r` from the pivot. */
const at = (deg: number, r: number): [number, number] => {
  const a = (deg * Math.PI) / 180;
  return [r1(PIVOT[0] + Math.cos(a) * r), r1(PIVOT[1] + Math.sin(a) * r)];
};
/** The lever sticks out of the wall at -38 degrees; the ball sits at the end of the long arm. */
const ARM = -38;
const LEN = 72;
const BALL = at(ARM, LEN);
/** Offset a point `d` units to the right of the arm's direction (down-right, the shade side). */
const side = ([x, y]: [number, number], d: number): [number, number] => {
  const a = (ARM * Math.PI) / 180;
  return [r1(x - Math.sin(a) * d), r1(y + Math.cos(a) * d)];
};
/** The swing: an arc round the axle, on the right of the arm, its head at the bottom: pull it down. */
const ARC_R = 72;
const ARC_FROM = at(-24, ARC_R);
const ARC_TO = at(8, ARC_R);
const HEAD = (() => {
  const tip = at(15, ARC_R);
  const [bx, by] = ARC_TO;
  const ux = tip[0] - bx;
  const uy = tip[1] - by;
  const len = Math.hypot(ux, uy);
  const nx = -uy / len;
  const ny = ux / len;
  const h = 7.5;
  return `M${tip[0]} ${tip[1]}L${r1(bx + nx * h)} ${r1(by + ny * h)}L${r1(bx - nx * h)} ${r1(by - ny * h)}Z`;
})();

/** The machine: a tall blue plate along the left edge, its thickness D in the series' slanted view
 *  (as afscherming and sensor: one unit of depth goes .6 right and .8 up). */
const X = 11;
const Y = 20;
const W = 34;
const H = 80;
const D = 9;
const DX = r1(0.6 * D);
const DY = r1(-0.8 * D);

const seg = (a: [number, number], b: [number, number]) => `M${a[0]} ${a[1]}L${b[0]} ${b[1]}`;

export default {
  // "de hendel": the lever — a long steel arm with a red ball grip sticking out of a round boss on
  // a plain blue machine plate, a blue arc arrow from the ball down: you pull it.
  'w.hendel': () => (
    <g>
      <Ground cx={32} cy={102} rx={28} ry={4} />
      {/* The machine plate: its dark thickness, a light top edge, the blue front */}
      <path d={`M${X + W} ${Y}L${X + W + DX} ${Y + DY}V${Y + H + DY}L${X + W} ${Y + H}Z`} fill={PAL.blueShade} />
      <path d={`M${X} ${Y}L${X + W} ${Y}L${X + W + DX} ${Y + DY}L${X + DX} ${Y + DY}Z`} fill={PAL.blueLight} />
      <rect x={X} y={Y} width={W} height={H} fill={PAL.blue} />
      <Shine d={`M${X + 5} ${Y + 8}V${Y + 34}`} width={3} opacity={0.5} />
      {/* The swing arrow */}
      <path
        d={`M${ARC_FROM[0]} ${ARC_FROM[1]}A${ARC_R} ${ARC_R} 0 0 1 ${ARC_TO[0]} ${ARC_TO[1]}`}
        fill="none"
        stroke={PAL.sky}
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path d={HEAD} fill={PAL.sky} stroke={PAL.sky} strokeWidth="3" strokeLinejoin="round" />
      {/* The arm: steel, a dark edge on its lower right, a light edge on its upper left */}
      <Move kind="turn" turn={-22} at={PIVOT}>
        <path d={seg(PIVOT, BALL)} stroke={PAL.steel} strokeWidth="10" strokeLinecap="round" />
        <path d={seg(side(at(ARM, 8), 2.8), side(at(ARM, LEN - 6), 2.8))} stroke={STEEL_DARK} strokeWidth="4" strokeLinecap="round" />
        <path d={seg(side(at(ARM, 14), -2.4), side(at(ARM, LEN - 16), -2.4))} stroke={PAL.mist} strokeWidth="2" strokeLinecap="round" />
      </Move>
      {/* The hinge: a round dark boss the arm comes out of, with its axle */}
      <circle cx={PIVOT[0]} cy={PIVOT[1] + 2} r="13" fill={PAL.slate} />
      <circle cx={PIVOT[0]} cy={PIVOT[1]} r="13" fill={STEEL_DARK} />
      <circle cx={PIVOT[0]} cy={PIVOT[1]} r="5" fill={PAL.mist} />
      <Shine d={`M${PIVOT[0] - 9} ${PIVOT[1] - 2}A9 9 0 0 1 ${PIVOT[0] - 2} ${PIVOT[1] - 9}`} width={2.4} opacity={0.45} />
      {/* The ball grip (it swings with the arm: you pull it down) */}
      <Move kind="turn" turn={-22} at={PIVOT}>
        <Shade color={PAL.redShade} opacity={1} at={[BALL[0] + 12, BALL[1] + 6, 10, 15]}>
          <circle cx={BALL[0]} cy={BALL[1]} r="12" fill={PAL.red} />
        </Shade>
        <Shine d={`M${r1(BALL[0] - 7)} ${r1(BALL[1] - 1)}A7.5 7.5 0 0 1 ${r1(BALL[0] - 1)} ${r1(BALL[1] - 7)}`} width={3.2} opacity={0.6} />
      </Move>
    </g>
  ),
} as Record<string, () => JSX.Element>;
