import type { JSX } from 'react';
import { Ground, Move, PAL, Shine, r1 } from '../kit';

/** The depth axis of the slanted view (as in group55): one unit of depth goes this far right and up. */
const DX = 0.6;
const DY = -0.8;

/** The pack: two rows of three bottles; the front row stands at FRONT_Y, PITCH apart from FRONT_X. */
const FRONT_X = 19;
const FRONT_Y = 102;
const PITCH = 18;
/** The back row stands one bottle deeper. */
const BACK_DX = PITCH * DX;
const BACK_DY = PITCH * DY;
/** Half the width of a bottle, the height of its body, and the top of its cap above the foot. */
const HALF = 8.5;
const BODY = 30;
const CAP_TOP = 48;
/** How far the film stands out round the bottles. */
const RIM = 2.5;

/** The clear film: the pale ice tint for its faces, a step darker for its open end (the right side). */
const FILM = PAL.ice;
const FILM_END = PAL.blueLight;

/** The tip of the heat gun's nozzle. */
const GUN: [number, number] = [86, 28];

const pts = (p: [number, number][]) => p.map(([a, b]) => `${r1(a)},${r1(b)}`).join(' ');

/** One bottle with its foot centred at (cx, by): a green body, shoulders, a neck and a cap. */
const bottle = (cx: number, by: number) => (
  <g key={`${cx}-${by}`}>
    <path
      d={`M${cx - HALF} ${by - 4}V${by - BODY + 4}Q${cx - HALF} ${by - BODY - 6} ${cx - 4} ${by - BODY - 8}V${by - CAP_TOP + 6}H${cx + 4}V${by - BODY - 8}Q${cx + HALF} ${by - BODY - 6} ${cx + HALF} ${by - BODY + 4}V${by - 4}Q${cx + HALF} ${by} ${cx + HALF - 4} ${by}H${cx - HALF + 4}Q${cx - HALF} ${by} ${cx - HALF} ${by - 4}Z`}
      fill={PAL.green}
    />
    <path
      d={`M${cx + 3} ${by}V${by - BODY - 4}Q${cx + HALF} ${by - BODY - 4} ${cx + HALF} ${by - BODY + 4}V${by - 4}Q${cx + HALF} ${by} ${cx + HALF - 4} ${by}Z`}
      fill={PAL.greenShade}
    />
    <rect x={cx - 5} y={by - CAP_TOP} width="10" height="7" rx="2" fill={PAL.blue} />
    <rect x={cx + 1.5} y={by - CAP_TOP} width="3.5" height="7" rx="1.5" fill={PAL.blueShade} />
  </g>
);

/** The film round one row: tight over the caps, pulled down into the gaps between the necks. */
const rowFilm = (x0: number, by: number) => {
  const l = x0 - HALF - RIM;
  const r = x0 + 2 * PITCH + HALF + RIM;
  const top = by - CAP_TOP - RIM;
  const dip = by - BODY - 6;
  const caps = [0, 1, 2].map((i) => x0 + i * PITCH);
  let d = `M${l} ${by + RIM - 3}V${by - BODY + 4}Q${l} ${by - BODY - 8} ${caps[0] - 6} ${top + 4}Q${caps[0] - 6} ${top} ${caps[0]} ${top}`;
  for (let i = 0; i < 2; i++) {
    d += `L${caps[i] + 6} ${top + 1}L${(caps[i] + caps[i + 1]) / 2} ${dip}L${caps[i + 1] - 6} ${top + 1}L${caps[i + 1]} ${top}`;
  }
  d += `Q${caps[2] + 6} ${top} ${caps[2] + 6} ${top + 4}Q${r} ${by - BODY - 8} ${r} ${by - BODY + 4}V${by + RIM - 3}Q${r} ${by + RIM} ${r - 3} ${by + RIM}H${l + 3}Q${l} ${by + RIM} ${l} ${by + RIM - 3}Z`;
  return d;
};

/** A wavy heat line from (x, y), going `len` along the angle `deg` (0 = right, 90 = down). */
const wave = (x: number, y: number, deg: number, len = 18, amp = 2.6) => {
  const a = (deg * Math.PI) / 180;
  const ux = Math.cos(a);
  const uy = Math.sin(a);
  const step = len / 4;
  let d = `M${r1(x)} ${r1(y)}`;
  for (let i = 0; i < 4; i++) {
    const s = i % 2 === 0 ? amp : -amp;
    const cx = x + ux * step * (i + 0.5) - uy * s;
    const cy = y + uy * step * (i + 0.5) + ux * s;
    d += `Q${r1(cx)} ${r1(cy)} ${r1(x + ux * step * (i + 1))} ${r1(y + uy * step * (i + 1))}`;
  }
  return d;
};

export default {
  // "de krimpfolie": the shrink wrap — a pack of six green bottles held together by clear film,
  // pulled tight over the caps and down between the necks, with white shine streaks; a hi-vis
  // orange heat gun at the top right blows orange heat waves at it.
  // On the intro card: the film shrinks tight round the bottles, once and slowly (a change of state: it happens once).
  'w.krimpfolie': () => {
    const bx = FRONT_X + BACK_DX;
    const by = FRONT_Y + BACK_DY;
    const fr = FRONT_X + 2 * PITCH + HALF + RIM;
    const front = [0, 1, 2].map((i) => FRONT_X + i * PITCH);
    const back = front.map((x) => x + BACK_DX);
    return (
      <g>
        <Ground cx={52} cy={104} rx={44} ry={4} />
        {/* The film behind: the back row's sleeve and the open end on the right */}
        <Move kind="sag" grow={1.4} once>
          <path d={rowFilm(bx, by)} fill={FILM} />
        </Move>
        <polygon
          points={pts([
            [fr, FRONT_Y + RIM - 2],
            [fr, FRONT_Y - BODY + 2],
            [fr + BACK_DX, by - BODY + 2],
            [fr + BACK_DX, by + RIM - 2],
          ])}
          fill={FILM_END}
        />
        {back.map((x) => bottle(x, by))}
        {/* The film in front, then the front row */}
        <Move kind="sag" grow={1.4}>
          <path d={rowFilm(FRONT_X, FRONT_Y)} fill={FILM} />
        </Move>
        {front.map((x) => bottle(x, FRONT_Y))}
        {/* Shine on the tight film, across bottles and gaps alike */}
        <Shine d={`M${FRONT_X - 6} ${FRONT_Y - 8}L${FRONT_X + 16} ${FRONT_Y - 40}`} width={3.4} opacity={0.9} />
        <Shine d={`M${FRONT_X + 24} ${FRONT_Y - 4}L${FRONT_X + 34} ${FRONT_Y - 20}`} width={3} opacity={0.9} />
        {/* The heat gun at the top right, its nozzle aimed down at the pack */}
        <g transform={`translate(${GUN[0]} ${GUN[1]}) rotate(-35)`}>
          <rect x="0" y="-4" width="12" height="8" rx="2" fill={PAL.slate} />
          <rect x="10" y="-7.5" width="24" height="15" rx="6" fill={PAL.orange} />
          <rect x="10" y="2" width="24" height="5.5" rx="2.7" fill={PAL.orangeShade} />
          <rect x="21" y="4" width="8.5" height="15" rx="3" fill={PAL.slateDark} />
        </g>
        {/* Heat waves from the nozzle to the pack */}
        {[-5, 0, 5].map((o) => {
          const a = (145 * Math.PI) / 180;
          return (
            <path
              key={o}
              d={wave(GUN[0] - 3 - Math.sin(a) * o, GUN[1] + 2 + Math.cos(a) * o, 145, 13, 2)}
              fill="none"
              stroke={PAL.orange}
              strokeWidth="2.6"
              strokeLinecap="round"
            />
          );
        })}
      </g>
    );
  },
} as Record<string, () => JSX.Element>;
