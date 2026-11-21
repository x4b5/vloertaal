import type { JSX } from 'react';
import { Arrow, Ground, PAL, Shine, r1, type Pt } from './kit';

/**
 * Word pictures, group 59 (keyed by word id). See docs/tekenstijl.md and ./kit.tsx.
 *
 * Lesson "A straight wall" (u.ruwbouw): how a bricklayer keeps a wall straight and level, drawn like
 * the tools the owner approved (group53, group58): one object, large, slanted, a light top, a darker
 * side and a shadow.
 *
 *  - the brick line (het metseltouw): a thick orange string pulled tight and level between two
 *    wooden L-shaped line blocks that face each other, a few turns wound round each block.
 *  - the line block (de klos): one big wooden L-shaped block on its own (a tall leg and a low foot,
 *    light tops), a few turns of orange string wound round its leg, the loose end hanging down and
 *    lying curled on the ground.
 *  - the gauge rod (de lagenmaatlat): one tall wooden lath, leaning a little, divided into equal rows
 *    by dark marks across its full width, a hole at its foot.
 *  - the corner profile (het profiel): one tall grey steel post standing at the end of a low brick
 *    wall, a mark on the post at every joint of the wall.
 *  - the header (de kop): one brick seen end-on, its short end facing us, a blue arrow pointing at it.
 *  - the stretcher (de strek): one brick seen from the side, its long side facing us, a blue arrow
 *    pointing at it.
 *
 * The six stand side by side in a picture choice, so each has its own main shape: a long level line
 * between two small blocks, one big L-shaped block with string wound on it, a leaning striped lath,
 * a tall grey post beside a low wall, and one brick with either its small end or its long side
 * towards us.
 */

type Proj = (x: number, y: number, z: number) => Pt;

/** The slanted view: x to the right, y up, z back into the picture (drawn up and to the right). */
const view = (ox: number, oy: number, kx = 0.55, ky = 0.45): Proj => (x, y, z) => [r1(ox + x + z * kx), r1(oy - y - z * ky)];

/** A flat face through the points `p`. */
const poly = (p: Pt[], fill: string, opacity?: number) => (
  <path d={`M${p.map(([x, y]) => `${x} ${y}`).join('L')}Z`} fill={fill} opacity={opacity} />
);

/** A straight line from a to b with round ends. */
const bar = (a: Pt, b: Pt, w: number, color: string) => (
  <path d={`M${a[0]} ${a[1]}L${b[0]} ${b[1]}`} stroke={color} strokeWidth={w} strokeLinecap="round" />
);

/** A box from (x0, y0, z0) to (x1, y1, z1) in the slanted view: its front, right side and top. */
function Cube({ P, x0, x1, y0, y1, z0, z1, front, side, top }: {
  P: Proj; x0: number; x1: number; y0: number; y1: number; z0: number; z1: number; front: string; side: string; top: string;
}) {
  return (
    <g>
      {poly([P(x1, y0, z0), P(x1, y0, z1), P(x1, y1, z1), P(x1, y1, z0)], side)}
      {poly([P(x0, y1, z0), P(x1, y1, z0), P(x1, y1, z1), P(x0, y1, z1)], top)}
      {poly([P(x0, y0, z0), P(x1, y0, z0), P(x1, y1, z0), P(x0, y1, z0)], front)}
    </g>
  );
}

const CLAY = { front: PAL.clay, side: PAL.clayShade, top: PAL.clayLight };
const STEEL = { front: PAL.steel, side: PAL.slate, top: PAL.mist };

/** The mortar joints on the front of a wall from x0 to x1, courses of 12 high, half-brick bond. */
function joints(P: Proj, x0: number, x1: number, rows: number) {
  const d: string[] = [];
  for (let r = 0; r < rows; r += 1) {
    const y = r * 12;
    if (r > 0) d.push(`M${P(x0, y, 0).join(' ')}L${P(x1, y, 0).join(' ')}`);
    for (let jx = x1 - (r % 2 ? 12 : 24); jx > x0 + 3; jx -= 24) d.push(`M${P(jx, y, 0).join(' ')}L${P(jx, y + 12, 0).join(' ')}`);
  }
  return d.join('');
}

/** The size of an L-shaped line block: leg width t, leg height h, total width w, foot height f, depth d. */
type LSize = { t: number; h: number; w: number; f: number; d: number };

/**
 * A wooden L-shaped line block in the slanted view: a tall leg and a low foot, light tops, dark right
 * sides. `flip` puts the leg on the right and the foot on the left. `turns` are the heights of the
 * turns of string wound round the leg.
 */
function LineBlock({ P, s, flip = false, turns }: { P: Proj; s: LSize; flip?: boolean; turns: number[] }) {
  const { t, h, w, f, d } = s;
  const [l0, l1] = flip ? [w - t, w] : [0, t];
  const [f0, f1] = flip ? [0, w - t] : [t, w];
  const front = flip
    ? [P(0, 0, 0), P(w, 0, 0), P(w, h, 0), P(l0, h, 0), P(l0, f, 0), P(0, f, 0)]
    : [P(0, 0, 0), P(w, 0, 0), P(w, f, 0), P(t, f, 0), P(t, h, 0), P(0, h, 0)];
  const side = (x: number, y0: number, y1: number) => poly([P(x, y0, 0), P(x, y0, d), P(x, y1, d), P(x, y1, 0)], PAL.cardDark);
  const top = (x0: number, x1: number, y: number) => poly([P(x0, y, 0), P(x1, y, 0), P(x1, y, d), P(x0, y, d)], PAL.card);
  return (
    <g>
      {flip ? null : side(t, f, h)}
      {top(f0, f1, f)}
      {flip ? side(w, 0, h) : side(w, 0, f)}
      {top(l0, l1, h)}
      {poly(front, PAL.wood)}
      {turns.map((y) => (
        <g key={y}>{bar(P(l0 - 0.5, y, 0), P(l1 + 0.5, y + 1, 0), 3.4, PAL.orange)}</g>
      ))}
    </g>
  );
}

/** One brick in the slanted view: `facing` is the face towards us, a blue arrow points at it. */
function FacingBrick({ facing }: { facing: 'end' | 'side' }) {
  const isEnd = facing === 'end';
  // Front width, height, depth back into the picture, and where the near bottom-left corner sits.
  const [w, h, d, ox, oy] = isEnd ? [46, 26, 60, 24, 80] : [72, 22, 34, 16, 72];
  const P = isEnd ? view(ox, oy, 0.45, 0.55) : view(ox, oy);
  const mid = ox + w / 2;
  return (
    <g>
      {poly([P(0, 0, 0), P(w, 0, 0), P(w, 0, d), P(0, 0, d)].map(([x, y]) => [x + 3, y + 4] as Pt), '#000', 0.14)}
      <Cube P={P} x0={0} x1={w} y0={0} y1={h} z0={0} z1={d} {...CLAY} />
      <Shine d={`M${P(4, h - 5, 0).join(' ')}L${P(isEnd ? 16 : 22, h - 5, 0).join(' ')}`} color={PAL.clayLight} width={3} opacity={1} />
      <Arrow from={[mid, 108]} to={[mid, oy + 3]} color={PAL.sky} width={7} head={11} />
    </g>
  );
}

export default {
  // "het metseltouw": the brick line — a thick orange string pulled tight and level between two
  // wooden L-shaped line blocks facing each other.
  'w.metseltouw': () => {
    const s: LSize = { t: 15, h: 46, w: 30, f: 15, d: 12 };
    const L = view(12, 98);
    const R = view(70, 98);
    const y = 36;
    return (
      <g>
        <Ground cx={31} cy={99} rx={22} ry={3.5} />
        <Ground cx={89} cy={99} rx={22} ry={3.5} />
        <LineBlock P={L} s={s} turns={[26, 31]} />
        {/* The string, tight and level from block to block */}
        {bar(L(s.t, y, s.d / 2), R(s.w - s.t, y, s.d / 2), 3.6, PAL.orange)}
        <LineBlock P={R} s={s} flip turns={[26, 31]} />
        <Shine d={`M${L(3, 42, 0).join(' ')}L${L(3, 32, 0).join(' ')}`} color={PAL.card} width={2.6} opacity={1} />
      </g>
    );
  },

  // "de klos": the line block — one big wooden L-shaped block, string wound round its leg, the loose
  // end hanging down and curled on the ground.
  'w.klos': () => {
    const s: LSize = { t: 26, h: 70, w: 60, f: 24, d: 22 };
    const P = view(30, 100);
    const [ex, ey] = P(0, 41, 0);
    return (
      <g>
        <Ground cx={62} cy={101} rx={42} ry={4.5} />
        <LineBlock P={P} s={s} turns={[36, 42, 48]} />
        {/* The loose end of the string, hanging from the turns and curled on the ground */}
        <path d={`M${ex} ${ey}c-8 4 -10 16 -7 28s1 12 -4 15c-4 2 -7 -1 -5 -4`} fill="none" stroke={PAL.orange} strokeWidth="3.4" strokeLinecap="round" />
        <Shine d={`M${P(4, 64, 0).join(' ')}L${P(4, 54, 0).join(' ')}`} color={PAL.card} width={3} opacity={1} />
      </g>
    );
  },

  // "de lagenmaatlat": the gauge rod — one tall wooden lath leaning a little, divided into equal rows
  // by marks across its full width, a hole at its foot.
  'w.lagenmaatlat': () => {
    const P = view(44, 104);
    const [w, h] = [26, 90];
    const rows = Array.from({ length: 9 }, (_, i) => {
      const y = 12 + i * 8;
      return `M${P(0, y, 0).join(' ')}L${P(w, y, 0).join(' ')}`;
    }).join('');
    const hole = P(w / 2, 6, 0);
    return (
      <g>
        <Ground cx={60} cy={105} rx={24} ry={3.5} />
        <g transform="rotate(10 57 104)">
          <Cube P={P} x0={0} x1={w} y0={0} y1={h} z0={0} z1={6} front={PAL.wood} side={PAL.cardDark} top={PAL.card} />
          <path d={rows} stroke={PAL.brown} strokeWidth="2.2" />
          <circle cx={hole[0]} cy={hole[1]} r={2.4} fill={PAL.brown} />
          <Shine d={`M${P(4, 87, 0).join(' ')}L${P(4, 80, 0).join(' ')}`} color={PAL.card} width={2.6} opacity={1} />
        </g>
      </g>
    );
  },

  // "het profiel": the corner profile — one tall grey steel post at the end of a low brick wall, a
  // mark on the post at every joint of the wall.
  'w.profiel': () => {
    const P = view(76, 104);
    const marks = Array.from({ length: 6 }, (_, i) => {
      const y = 12 + i * 12;
      return `M${P(0, y, 0).join(' ')}L${P(6, y, 0).join(' ')}`;
    }).join('');
    return (
      <g>
        <Ground cx={56} cy={105} rx={44} ry={4} />
        {/* The low wall, four courses, its end against the post */}
        <Cube P={P} x0={-60} x1={0} y0={0} y1={48} z0={0} z1={22} {...CLAY} />
        <path d={joints(P, -60, 0, 4)} fill="none" stroke={PAL.clayShade} strokeWidth="1.6" strokeLinecap="round" />
        {/* The post, much taller than the wall */}
        <Cube P={P} x0={0} x1={12} y0={0} y1={84} z0={0} z1={12} {...STEEL} />
        <path d={marks} stroke={PAL.slateDark} strokeWidth="2" strokeLinecap="round" />
      </g>
    );
  },

  // "de kop": the header — one brick seen end-on, its short end towards us, an arrow pointing at it.
  'w.kop': () => <FacingBrick facing="end" />,

  // "de strek": the stretcher — one brick from the side, its long side towards us, an arrow at it.
  'w.strek': () => <FacingBrick facing="side" />,
} as Record<string, () => JSX.Element>;
