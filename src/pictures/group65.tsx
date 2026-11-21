import type { JSX } from 'react';
import { Ground, PAL, Shade, Shine, r1, type Pt } from './kit';

/**
 * Word pictures, group 65 (keyed by word id). See docs/tekenstijl.md and ./kit.tsx.
 *
 * Numbers (u.numbers), the lesson "Angles and round shapes". The words are drawn as the shapes
 * themselves (not as a tool or a building that has them), in the box of the approved tile
 * drawings: a flat shape is a cut-out with its depth edge in the shade colour under it and one
 * shine on the top left; the one solid (the cylinder) stands in the slanted view with a light top,
 * a darker right side and a ground shadow. Six silhouettes and six colours, so none can be taken
 * for another: a navy L, an orange quarter split in two, an ice-blue triangle, a purple curved band
 * on a dotted circle, a red upright block and a yellow leaning four-sided shape.
 *
 *  - de hoek: the angle — two navy bars meeting at a right angle (an L), a green arc in the
 *    corner between them.
 *  - de graad: the degree — a right angle split by a third line into two equal orange parts (the
 *    size of an angle, counted in degrees).
 *  - de geodriehoek: the set square with a protractor — a flat ice-blue triangle on its long
 *    side, a half-round scale with a few ticks inside and ruler marks along the bottom.
 *  - de boog: the arc, the curve — one thick purple piece of a circle, the rest of the circle
 *    dotted around it.
 *  - de cilinder: the cylinder — a red round block standing up, a light top, a darker right side,
 *    and the hidden back edge of its bottom dashed in a light line, as in a maths drawing of a solid.
 *  - het parallellogram: the parallelogram — one flat yellow shape, taller than wide, leaning to
 *    the right, its depth edge straight under it (a cut-out seen from the front, not a tile seen
 *    from above).
 */

/** A point at `deg` degrees (0 = right, counter-clockwise, as on a protractor) and radius r. */
const polar = (c: Pt, r: number, deg: number): Pt => [
  r1(c[0] + r * Math.cos((deg * Math.PI) / 180)),
  r1(c[1] - r * Math.sin((deg * Math.PI) / 180)),
];

/** Radial tick marks from rIn to rOut around c, every `step` degrees from `from` to `to`. */
const ticks = (c: Pt, rIn: number, rOut: number, from: number, to: number, step: number) => {
  const d: string[] = [];
  for (let a = from; a <= to + 0.01; a += step) {
    const p = polar(c, rIn, a);
    const q = polar(c, rOut, a);
    d.push(`M${p[0]} ${p[1]}L${q[0]} ${q[1]}`);
  }
  return d.join('');
};

/** A pie wedge around c with radius r, from angle a to angle b (counter-clockwise, b - a < 180). */
const wedge = (c: Pt, r: number, a: number, b: number) => {
  const p = polar(c, r, a);
  const q = polar(c, r, b);
  return `M${c[0]} ${c[1]}L${p[0]} ${p[1]}A${r} ${r} 0 0 0 ${q[0]} ${q[1]}Z`;
};

/** The approved depth edge of a flat cut-out: the same shape in its shade colour, moved down. */
const DEPTH = 'translate(0 4)';

export default {
  // "de hoek": the angle — a navy L (two bars at a right angle) with a green arc in its corner.
  'w.hoek': () => {
    const L = 'M23 16H29Q34 16 34 21V80H99Q104 80 104 85V91Q104 96 99 96H23Q18 96 18 91V21Q18 16 23 16Z';
    const arc = 'M66 80A32 32 0 0 0 34 48';
    return (
      <g strokeLinejoin="round">
        <path d={L} fill={PAL.navyShade} transform={DEPTH} />
        <path d={L} fill={PAL.navy} />
        <path d={arc} fill="none" stroke={PAL.leafShade} strokeWidth="7" strokeLinecap="round" transform="translate(0 3)" />
        <path d={arc} fill="none" stroke={PAL.leaf} strokeWidth="7" strokeLinecap="round" />
        <Shine d="M23.5 23V64" width={3.4} opacity={0.5} />
      </g>
    );
  },

  // "de graad": the degree — a right angle split by a middle line into two equal orange parts.
  'w.graad': () => {
    const c: Pt = [22, 98];
    const R = 64;
    const low = wedge(c, R, 0, 45);
    const high = wedge(c, R, 45, 90);
    const ends = [polar(c, 80, 0), polar(c, 80, 45), polar(c, 80, 90)];
    const rays = ends.map((e) => `M${c[0]} ${c[1]}L${e[0]} ${e[1]}`).join('');
    return (
      <g strokeLinejoin="round">
        <path d={low + high} fill={PAL.orangeShade} transform={DEPTH} />
        <path d={low} fill={PAL.orange} />
        <path d={high} fill={PAL.orangeLight} />
        <path d={rays} stroke={PAL.slate} strokeWidth="6" strokeLinecap="round" />
        <circle cx={c[0]} cy={c[1]} r="6" fill={PAL.slate} />
        <Shine d={`M${c[0] + 12} ${c[1] - 56}A58 58 0 0 1 ${c[0] + 34} ${c[1] - 47}`} width={3.4} opacity={0.7} />
      </g>
    );
  },

  // "de geodriehoek": the set square with a protractor — a flat ice-blue triangle, a half-round
  // scale with a few ticks inside and ruler marks along the long side.
  'w.geodriehoek': () => {
    const c: Pt = [60, 84];
    const marks: string[] = [];
    for (let x = 24, i = 0; x <= 96; x += 12, i += 1) marks.push(`M${x} 84V${i % 2 ? 80 : 77}`);
    const tri = '17,84 103,84 60,41';
    return (
      <g strokeLinejoin="round">
        <polygon points={tri} fill={PAL.skyShade} stroke={PAL.skyShade} strokeWidth="6" transform={DEPTH} />
        <polygon points={tri} fill={PAL.ice} stroke={PAL.ice} strokeWidth="6" />
        <path d="M32 84A28 28 0 0 1 88 84" fill="none" stroke={PAL.sky} strokeWidth="3" />
        <path d={ticks(c, 21, 28, 30, 150, 30)} stroke={PAL.sky} strokeWidth="2.6" strokeLinecap="round" />
        <path d={marks.join('')} stroke={PAL.skyShade} strokeWidth="2.4" strokeLinecap="round" />
        <path d="M60 84V70" stroke={PAL.skyShade} strokeWidth="3" strokeLinecap="round" />
        <Shine d="M28 76L46 58" width={3.4} opacity={0.8} />
      </g>
    );
  },

  // "de boog": the arc — one thick purple piece of a circle, the rest of the circle dotted.
  'w.boog': () => {
    const c: Pt = [60, 60];
    const R = 42;
    const a = polar(c, R, 75);
    const b = polar(c, R, 215);
    const band = `M${a[0]} ${a[1]}A${R} ${R} 0 0 0 ${b[0]} ${b[1]}`;
    const r0 = polar(c, R, 228);
    const r1End = polar(c, R, 62);
    const rest = `M${r0[0]} ${r0[1]}A${R} ${R} 0 1 0 ${r1End[0]} ${r1End[1]}`;
    const s0 = polar(c, R + 2, 165);
    const s1 = polar(c, R + 2, 115);
    return (
      <g>
        <path d={rest} fill="none" stroke={PAL.line} strokeWidth="3.6" strokeDasharray="0 8.6" strokeLinecap="round" />
        <circle cx={c[0]} cy={c[1]} r="4" fill={PAL.steel} />
        <path d={band} fill="none" stroke={PAL.purpleShade} strokeWidth="13" strokeLinecap="round" transform={DEPTH} />
        <path d={band} fill="none" stroke={PAL.purple} strokeWidth="13" strokeLinecap="round" />
        <Shine d={`M${s0[0]} ${s0[1]}A${R + 2} ${R + 2} 0 0 1 ${s1[0]} ${s1[1]}`} width={3.4} opacity={0.6} />
      </g>
    );
  },

  // "de cilinder": the cylinder — a red round block, a light top, its hidden bottom edge dashed.
  'w.cilinder': () => (
    <g>
      <Ground cx={60} cy={95} rx={36} ry={5} />
      <Shade color={PAL.redShade} opacity={1} at={[96, 60, 20, 60]}>
        <path d="M32 28V88A28 9 0 0 0 88 88V28Z" fill={PAL.red} />
      </Shade>
      <ellipse cx="60" cy="28" rx="28" ry="9" fill={PAL.redLight} />
      <path d="M32 88A28 9 0 0 1 88 88" fill="none" stroke={PAL.redLight} strokeWidth="3" strokeDasharray="5 5" strokeLinecap="round" />
      <Shine d="M39 44V76" width={4} opacity={0.55} />
    </g>
  ),

  // "het parallellogram": the parallelogram — a flat yellow shape, taller than wide, leaning right.
  'w.parallellogram': () => {
    const shape = '46,24 102,24 74,92 18,92';
    return (
      <g strokeLinejoin="round">
        <polygon points={shape} fill={PAL.yellowShade} stroke={PAL.yellowShade} strokeWidth="4" transform={DEPTH} />
        <polygon points={shape} fill={PAL.yellow} stroke={PAL.yellow} strokeWidth="4" />
        <Shine d="M35 64L46 37" color={PAL.yellowShine} width={3.6} opacity={0.9} />
      </g>
    );
  },
} as Record<string, () => JSX.Element>;
