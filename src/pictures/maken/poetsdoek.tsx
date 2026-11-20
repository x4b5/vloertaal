import type { JSX } from 'react';
import { Ground, PAL, Shine, r1 } from '../kit';

/** The depth axis of the slanted view (as group55): one unit of depth goes this far right and up. */
const DX = 0.6;
const DY = -0.8;
/** The light top step of alarm red (the rag's lit fold), one step over PAL.red. */
const RED_TOP = '#ec6a52';
/** The deepest fold of the rag, one step under PAL.redShade. */
const RED_DEEP = '#7e2416';

/** The steel plate: front bottom left corner, width, depth and thickness. */
const PLATE = { x: 8, y: 100, w: 76, d: 44, t: 8 };

type P = [number, number];
const poly = (...p: P[]) => `M${p.map(([a, b]) => `${r1(a)} ${r1(b)}`).join('L')}Z`;

/** A point on the plate's top face: u along the width, v into the depth (both 0..1). */
const top = (u: number, v: number): P => {
  const { x, y, w, d, t } = PLATE;
  return [x + u * w + v * d * DX, y - t + v * d * DY];
};
/** A straight line between two points. */
const line = (a: P, b: P) => `M${r1(a[0])} ${r1(a[1])}L${r1(b[0])} ${r1(b[1])}`;
/** A path through points on the top face, as smooth quadratic curves through midpoints. */
const blob = (uv: P[]) => {
  const p = uv.map(([u, v]) => top(u, v));
  const mid = (a: P, b: P): P => [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
  const start = mid(p[p.length - 1], p[0]);
  const segs = p.map((q, i) => {
    const m = mid(q, p[(i + 1) % p.length]);
    return `Q${r1(q[0])} ${r1(q[1])} ${r1(m[0])} ${r1(m[1])}`;
  });
  return `M${r1(start[0])} ${r1(start[1])}${segs.join('')}Z`;
};

export default {
  // "de poetsdoek": the cleaning rag — a red shop rag, gathered to a crumpled tuft, its corners spread on
  // a flat steel plate, its hem soaked black: the left half wiped clean and shiny, the right still oily.
  'w.poetsdoek': () => {
    const { x, y, w, d, t } = PLATE;
    const ox = d * DX;
    const oy = d * DY;
    return (
      <g strokeLinejoin="round">
        <Ground cx={58} cy={102} rx={50} ry={4.5} />
        {/* The steel plate: light top, front edge, shaded right side */}
        <path d={poly([x + w, y], [x + w, y - t], [x + w + ox, y - t + oy], [x + w + ox, y + oy])} fill={PAL.slate} />
        <path d={poly([x, y - t], [x + w, y - t], [x + w + ox, y - t + oy], [x + ox, y - t + oy])} fill={PAL.mist} />
        <rect x={x} y={y - t} width={w} height={t} fill={PAL.steel} />
        {/* The oil still on the right half, running off the front edge */}
        <path
          d={blob([[0.56, 0.1], [0.7, 0.04], [0.86, 0.08], [0.97, 0.05], [0.99, 0.5], [0.97, 0.95], [0.8, 0.93], [0.62, 0.96], [0.55, 0.78], [0.6, 0.55], [0.54, 0.32]])}
          fill={PAL.slateDark}
        />
        <path d={`M${r1(top(0.9, 0)[0])} ${y - t}V${y - 1}`} stroke={PAL.slateDark} strokeWidth="4" strokeLinecap="round" />
        <Shine d={line(top(0.84, 0.75), top(0.95, 0.75))} width={2.6} opacity={0.3} />
        {/* The wiped half: clean steel, two shine streaks */}
        <Shine d={line(top(0.1, 0.8), top(0.34, 0.8))} width={3.4} opacity={0.9} />
        <Shine d={line(top(0.04, 0.5), top(0.16, 0.5))} width={3.4} opacity={0.9} />
        {/* The rag: a red cloth gathered up in the middle, its corners spread on the steel */}
        <path d="M50 40Q66 56 84 76Q86 70 90 66Q70 54 50 40Z" fill={RED_DEEP} />
        <path d="M50 40Q36 60 16 84Q26 83 30 89Q33 93 36 96Q42 70 50 40Z" fill={RED_TOP} />
        <path d="M50 40Q42 70 36 96Q46 90 54 93Q62 96 70 94Q60 66 50 40Z" fill={PAL.red} />
        <path d="M50 40Q60 66 70 94Q74 85 84 76Q66 58 50 40Z" fill={PAL.redShade} />
        {/* The gathered top: a crumpled tuft */}
        <path d="M41 50Q36 42 43 39Q43 31 51 33Q57 28 60 36Q67 39 62 47Q57 53 50 51Q45 54 41 50Z" fill={PAL.red} />
        <path d="M60 36Q67 39 62 47Q57 53 50 51Q56 46 60 36Z" fill={PAL.redShade} />
        <path d="M43 45Q42 40 46 39M47 36Q49 33 53 34" fill="none" stroke={RED_TOP} strokeWidth="3" strokeLinecap="round" />
        {/* Folds running down from the top */}
        <path d="M46 56Q38 70 28 82M52 56Q52 72 50 88M58 58Q66 72 74 82" fill="none" stroke={PAL.redShade} strokeWidth="2.4" strokeLinecap="round" />
        {/* Oil soaked into the cloth where it wipes */}
        <path d="M44 91Q54 88 62 92Q68 90 72 88Q76 82 82 78L84 76Q74 85 70 94Q62 96 54 93Q46 90 36 96Q40 92 44 91Z" fill={PAL.slateDark} />
        <path d="M53 70Q58 63 64 68Q70 70 68 77Q63 82 57 79Q51 76 53 70Z" fill={PAL.slate} />
        <path d="M30 76Q35 73 38 77Q35 81 31 80Z" fill={PAL.slate} />
      </g>
    );
  },
} as Record<string, () => JSX.Element>;
