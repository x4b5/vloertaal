import type { JSX } from 'react';
import { Arrow, Ground, PAL, Shine } from '../kit';

/** The depth axis of the slanted view (as in group55): one unit of depth goes this far right and up. */
const DX = 0.6;
const DY = -0.8;

const pts = (p: [number, number][]) => p.map(([a, b]) => `${a},${b}`).join(' ');

/** The belt: front face from BELT_X0 to BELT_X1, top edge at BELT_Y, BELT_H high, BELT_D deep. */
const BELT_X0 = 12;
const BELT_X1 = 94;
const BELT_Y = 88;
const BELT_H = 8;
const BELT_D = 12;
/** The jars stand halfway back on the belt. */
const STAND = BELT_Y + (BELT_D / 2) * DY;
const SHIFT = (BELT_D / 2) * DX;
/** Where the jars stand along the belt; the third place is empty: that jar is the sample. */
const PLACES = [26, 46, 66, 86].map((x) => x + SHIFT);
const TAKEN = 2;

/** The clear sample bag (a light tint), with its zip strip on top. */
const BAG = { x: 50, y: 18, w: 34, h: 38 };
const BAG_TINT = '#e3f5ff';
/** The bag's outline: a straight top under the zip, sides that bulge out a little, a rounded bottom. */
const bag = (x: number, y: number) => {
  const r = x + BAG.w;
  const b = y + BAG.h;
  return `M${x} ${y}H${r}Q${r + 3} ${y + BAG.h / 2} ${r} ${b - 6}Q${r} ${b} ${r - 6} ${b}H${x + 6}Q${x} ${b} ${x} ${b - 6}Q${x - 3} ${y + BAG.h / 2} ${x} ${y}Z`;
};

/** One product: a squat orange jar with a dark screw lid, standing with its foot at (cx, by). */
const jar = (cx: number, by: number) => (
  <g key={`${cx}-${by}`}>
    <rect x={cx - 7.5} y={by - 19} width="15" height="19" rx="3.5" fill={PAL.orange} />
    <rect x={cx + 2} y={by - 19} width="5.5" height="19" rx="3" fill={PAL.orangeShade} />
    <rect x={cx - 6} y={by - 25} width="12" height="7" rx="2" fill={PAL.slate} />
    <rect x={cx + 2} y={by - 25} width="4" height="7" rx="2" fill={PAL.slateDark} />
    <path d={`M${cx - 4.5} ${by - 15}V${by - 6}`} stroke={PAL.orangeLight} strokeWidth="2.4" strokeLinecap="round" />
  </g>
);

export default {
  // "het monster": the sample — a row of identical orange jars on a short belt, one place empty;
  // that jar goes up out of the gap (a small blue arrow) in a clear zip bag with a green tag.
  'w.monster': () => (
    <g>
      <Ground cx={58} cy={104} rx={48} ry={4} />
      {/* The short belt on two legs */}
      <path d="M22 94V102M86 94V102" stroke={PAL.steel} strokeWidth="5" strokeLinecap="round" />
      <polygon
        points={pts([[BELT_X0, BELT_Y], [BELT_X1, BELT_Y], [BELT_X1 + BELT_D * DX, BELT_Y + BELT_D * DY], [BELT_X0 + BELT_D * DX, BELT_Y + BELT_D * DY]])}
        fill={PAL.slate}
      />
      <rect x={BELT_X0} y={BELT_Y} width={BELT_X1 - BELT_X0} height={BELT_H} rx="2" fill={PAL.slateDark} />
      <polygon
        points={pts([[BELT_X1, BELT_Y + BELT_H], [BELT_X1, BELT_Y], [BELT_X1 + BELT_D * DX, BELT_Y + BELT_D * DY], [BELT_X1 + BELT_D * DX, BELT_Y + BELT_H + BELT_D * DY]])}
        fill={PAL.slateDark}
      />
      {[BELT_X0 + 5, BELT_X1 - 5].map((x) => (
        <circle key={x} cx={x} cy={BELT_Y + BELT_H / 2} r="3" fill={PAL.steel} />
      ))}
      {/* The row of jars, one place empty */}
      {PLACES.map((x, i) => (i === TAKEN ? null : jar(x, STAND)))}
      {/* The small arrow up out of the gap */}
      <Arrow from={[PLACES[TAKEN], STAND - 3]} to={[PLACES[TAKEN], BAG.y + BAG.h + 4]} color={PAL.sky} width={5} head={10} />
      {/* The clear bag: soft bulging sides, a pale depth edge, the tint, the jar inside, a shine */}
      <path d={bag(BAG.x + 3, BAG.y + 3)} fill={PAL.ice} />
      <path d={bag(BAG.x, BAG.y)} fill={BAG_TINT} />
      {jar(BAG.x + BAG.w / 2, BAG.y + BAG.h - 6)}
      <rect x={BAG.x - 2} y={BAG.y - 6} width={BAG.w + 4} height="7" rx="2.5" fill={PAL.blue} />
      <path d={`M${BAG.x + 1} ${BAG.y - 2.5}H${BAG.x + BAG.w - 1}`} stroke={PAL.blueShade} strokeWidth="1.6" strokeLinecap="round" />
      <Shine d={`M${BAG.x + 3.5} ${BAG.y + 8}Q${BAG.x + 2} ${BAG.y + 18} ${BAG.x + 3.5} ${BAG.y + 28}`} width={3} opacity={0.9} />
      {/* The green tag on a short cord */}
      <path d={`M${BAG.x + BAG.w - 3} ${BAG.y}L${BAG.x + BAG.w + 8} ${BAG.y + 12}`} stroke={PAL.line} strokeWidth="1.6" strokeLinecap="round" />
      <g transform={`rotate(24 ${BAG.x + BAG.w + 14} ${BAG.y + 18})`}>
        <rect x={BAG.x + BAG.w + 6} y={BAG.y + 11} width="17" height="13" rx="2.5" fill={PAL.green} />
        <rect x={BAG.x + BAG.w + 16} y={BAG.y + 11} width="7" height="13" rx="2.5" fill={PAL.greenShade} />
        <circle cx={BAG.x + BAG.w + 10} cy={BAG.y + 17.5} r="1.8" fill={PAL.paper} />
      </g>
    </g>
  ),
} as Record<string, () => JSX.Element>;
