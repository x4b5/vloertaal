import { useId, type JSX } from 'react';
import { Ground, Move, PAL, Shine, r1 } from '../kit';

/** The depth axis of the slanted view: one unit of depth goes this far right and up. */
const DX = 0.6;
const DY = -0.8;

/** The product, a blue painted plate: front bottom left corner, width, depth, height. */
const PX = 12;
const PY = 103;
const PW = 70;
const PD = 26;
const PH = 11;

/** The lens: centre and radius of the glass (the rim is drawn on its edge). */
const LX = 47;
const LY = 47;
const LR = 26;
/** The handle leaves the rim to the top right, at this angle (degrees, 0 = right). */
const HANDLE = -36;

type P = [number, number];
/** A point on the plate: u along the front, v into the card, z up. */
const iso = (u: number, v: number, z = 0): P => [r1(PX + u + v * DX), r1(PY - z + v * DY)];
const quad = (...p: P[]) => p.map(([x, y]) => `${x},${y}`).join(' ');

/** A point along the handle, at distance d from the lens centre. */
const along = (d: number): P => {
  const a = (HANDLE * Math.PI) / 180;
  return [r1(LX + d * Math.cos(a)), r1(LY + d * Math.sin(a))];
};

/** The scratch, a thin sliver with a kink through the paint round (0, 0), pointed at both ends; drawn small on the
 *  plate and big in the lens. */
const SLIVER = 'M-14 5L-2.4 -1.2L2 0.2L14 -6L2.8 2.4L-1.6 1L-14 5Z';
/** The scratch at (cx, cy), k times its size: a navy groove under a bright line of bare metal. */
const scratch = (cx: number, cy: number, k: number) => (
  <g>
    <path d={SLIVER} transform={`translate(${r1(cx + 0.5 * k)} ${r1(cy + 1.1 * k)}) scale(${k})`} fill={PAL.navy} />
    <path d={SLIVER} transform={`translate(${cx} ${cy}) scale(${k})`} fill={PAL.white} />
  </g>
);

export default {
  // "de loep": the magnifying glass — a yellow loupe held over a blue painted plate; in the lens the
  // plate shows big, with a bright sliver of a scratch through the paint; the same scratch is small on the plate.
  'w.loep': () => {
    const id = `lp-${useId().replace(/[^a-zA-Z0-9_-]/g, '')}`;
    const [n0, n1] = [along(LR + 3), along(LR + 10)];
    const [g0, g1] = [along(LR + 12), along(LR + 40)];
    return (
      <g>
        <Ground cx={58} cy={104} rx={44} ry={4} />
        {/* The plate: light top, blue front, darker right side */}
        <polygon points={quad(iso(0, 0, PH), iso(PW, 0, PH), iso(PW, PD, PH), iso(0, PD, PH))} fill={PAL.blueLight} />
        <polygon points={quad(iso(0, 0, 0), iso(PW, 0, 0), iso(PW, 0, PH), iso(0, 0, PH))} fill={PAL.blue} />
        <polygon points={quad(iso(PW, 0, 0), iso(PW, PD, 0), iso(PW, PD, PH), iso(PW, 0, PH))} fill={PAL.blueShade} />
        {scratch(82, 80, 0.6)}
        {/* The loupe (and its shadow) moves over the plate to the scratch on the intro card */}
        <Move kind="from" dx={-24} dy={-4}>
          <ellipse cx="58" cy="84" rx="20" ry="4.5" fill={PAL.blue} />
          {/* The handle: a steel neck and a yellow grip, to the top right */}
          <path d={`M${n0[0]} ${n0[1]}L${n1[0]} ${n1[1]}`} stroke={PAL.steel} strokeWidth="7" strokeLinecap="round" />
          <path d={`M${g0[0]} ${g0[1]}L${g1[0]} ${g1[1]}`} stroke={PAL.yellow} strokeWidth="12" strokeLinecap="round" />
          <path d={`M${along(LR + 15)[0] + 2.2} ${along(LR + 15)[1] + 3}L${along(LR + 38)[0] + 2.2} ${along(LR + 38)[1] + 3}`} stroke={PAL.yellowShade} strokeWidth="4" strokeLinecap="round" />
          {/* In the lens: the plate's paint, big, with the scratch big */}
          <clipPath id={id}>
            <circle cx={LX} cy={LY} r={LR} />
          </clipPath>
          <g clipPath={`url(#${id})`}>
            <circle cx={LX} cy={LY} r={LR} fill={PAL.blueLight} />
            <Move kind="show">{scratch(LX, LY + 1, 1.55)}</Move>
          </g>
          {/* The rim: yellow, its lower right half in the shade step */}
          <circle cx={LX} cy={LY} r={LR} fill="none" stroke={PAL.yellow} strokeWidth="7" />
          <path
            d={`M${r1(LX + LR * Math.cos(-0.35))} ${r1(LY + LR * Math.sin(-0.35))}A${LR} ${LR} 0 0 1 ${r1(LX - LR * 0.7)} ${r1(LY + LR * 0.71)}`}
            fill="none"
            stroke={PAL.yellowShade}
            strokeWidth="7"
          />
          <Shine d={`M${LX - 17} ${LY - 4}A18 18 0 0 1 ${LX - 5} ${LY - 17}`} width={3.4} opacity={0.85} />
          <Shine d={`M${LX - 22} ${LY - 13}A26 26 0 0 1 ${LX - 13} ${LY - 22}`} color={PAL.yellowShine} width={2.4} opacity={0.8} />
        </Move>
      </g>
    );
  },
} as Record<string, () => JSX.Element>;
