import type { JSX } from 'react';
import { Hand, Move, PAL, SKIN, Shine, type Pt } from './kit';

/**
 * Word pictures, group 61 (keyed by word id). See docs/tekenstijl.md and ./kit.tsx.
 *
 * Lesson "Marking out" (u.ruwbouw): the carpenter's squares and marking tools, drawn like the tools
 * the owner approved. The three squares are flat tools (like the pincers and the folding ruler):
 * drawn face on with their thickness showing, no ground under them, each in its own shape and with
 * a handle of its own colour. The marking gauge, the compasses and the marking out are drawn in one
 * slanted view (like the tile cutter): a light top, a darker side, a ground shadow.
 *
 *  - the try square (de winkelhaak): a short thick reddish-wood stock standing up on the left, a
 *    long narrow steel blade straight out from its top to the right: a clean ┌.
 *  - the mitre square (de verstekhaak): a long steel blade lying level on top, a narrower blue
 *    stock hanging under its left part, slanting down to the right at 45 degrees: a ‾\ (a 7).
 *  - the sliding bevel (de zwaaihaak): a short orange handle, a long slotted steel blade swung open
 *    to an odd angle from a big brass knob at the handle's end (a V).
 *  - the marking gauge (het kruishout): at work on a light plank, a dark wooden block with a brass
 *    screw against its front edge, a brown stick through it running back over the plank, and the
 *    dark line its pin has scratched along the plank, parallel to the edge.
 *  - the compasses (de passer): two thick steel legs from a dark hinge with a red handle, the needle
 *    in the middle of a dark circle on a small light-blue sheet, a short red pencil on the circle.
 *  - to mark out (aftekenen): a plank seen from above, a hand in an orange sleeve holding a red
 *    pencil, drawing a dark line square across the top of the plank.
 *
 * The six stand side by side in a picture choice, so each has its own main shape and colour:
 * a red and steel ┌, a steel bar with a blue 45 degree leg under it (a 7), a steel blade swung open
 * from an orange handle (a V), a dark block on a plank with a stick and a line, grey legs on a
 * circle, a hand with an orange sleeve and a pencil on a plank.
 */

/** Light end grain and top of the wood. */
const WOOD_LIGHT = '#f0c48a';
/** A darker step of terracotta: the side of the try square's reddish-wood stock. */
const CLAY_DARK = '#9c4322';
/** A light tint for paper, so it never carries the silhouette in white. */
const TINT = '#e3f5ff';
/** One unit of depth, going back to the top right (the slant of the approved tile cutter). */
const E: Pt = [0.6, -0.78];
/** Light from the top left: a face turned this way gets the top colour, the others the side colour. */
const LIGHT: Pt = [-0.6, -0.8];

const pts = (p: Pt[]) => p.map(([x, y]) => `${Math.round(x * 10) / 10} ${Math.round(y * 10) / 10}`).join(' ');
/** The depth shift for something `t` deep. */
const dz = (t: number): Pt => [E[0] * t, E[1] * t];
/** A point in the room (x right, y down, z back) on the picture. */
const P = (x: number, y: number, z: number): Pt => [x + E[0] * z, y + E[1] * z];
/** Shift points by a depth offset. */
const shift = (p: Pt[], d: Pt): Pt[] => p.map(([x, y]) => [x + d[0], y + d[1]] as Pt);

/** A bar from a to b (its centre line), `w` wide, as four corners. */
const bar = (a: Pt, b: Pt, w: number): Pt[] => {
  const len = Math.hypot(b[0] - a[0], b[1] - a[1]) || 1;
  const nx = (-(b[1] - a[1]) / len) * (w / 2);
  const ny = ((b[0] - a[0]) / len) * (w / 2);
  return [[a[0] + nx, a[1] + ny], [b[0] + nx, b[1] + ny], [b[0] - nx, b[1] - ny], [a[0] - nx, a[1] - ny]];
};

/** A rectangle as four corners. */
const rect = (x: number, y: number, w: number, h: number): Pt[] => [[x, y], [x + w, y], [x + w, y + h], [x, y + h]];

/**
 * A flat convex shape `p` standing up, given thickness `d` (its depth shift): the faces along its
 * edges that turn to the viewer, light where they face the light, then the front.
 */
function Extrude({ p, d, front, top, side }: { p: Pt[]; d: Pt; front: string; top: string; side: string }) {
  const cx = p.reduce((s, q) => s + q[0], 0) / p.length;
  const cy = p.reduce((s, q) => s + q[1], 0) / p.length;
  const faces = p.flatMap((a, i) => {
    const b = p[(i + 1) % p.length];
    const len = Math.hypot(b[0] - a[0], b[1] - a[1]) || 1;
    let n: Pt = [(b[1] - a[1]) / len, -(b[0] - a[0]) / len];
    if (n[0] * ((a[0] + b[0]) / 2 - cx) + n[1] * ((a[1] + b[1]) / 2 - cy) < 0) n = [-n[0], -n[1]];
    if (n[0] * d[0] + n[1] * d[1] <= 0) return [];
    const fill = n[0] * LIGHT[0] + n[1] * LIGHT[1] > 0.3 ? top : side;
    const quad: Pt[] = [a, b, [b[0] + d[0], b[1] + d[1]], [a[0] + d[0], a[1] + d[1]]];
    return [<polygon key={i} points={pts(quad)} fill={fill} stroke={fill} strokeWidth="1.2" strokeLinejoin="round" />];
  });
  return (
    <g>
      {faces}
      <polygon points={pts(p)} fill={front} stroke={front} strokeWidth="1.2" strokeLinejoin="round" />
    </g>
  );
}

/** A box in the room from x0..x1, y0..y1 (y down), z0..z1 (back): its right side, top and front. */
function Slab({ x0, x1, y0, y1, z0, z1, top, front, side }: {
  x0: number; x1: number; y0: number; y1: number; z0: number; z1: number; top: string; front: string; side: string;
}) {
  const face = (q: Pt[], fill: string) => <polygon points={pts(q)} fill={fill} stroke={fill} strokeWidth="1" strokeLinejoin="round" />;
  return (
    <g>
      {face([P(x1, y0, z0), P(x1, y0, z1), P(x1, y1, z1), P(x1, y1, z0)], side)}
      {face([P(x0, y0, z0), P(x1, y0, z0), P(x1, y0, z1), P(x0, y0, z1)], top)}
      {face([P(x0, y0, z0), P(x1, y0, z0), P(x1, y1, z0), P(x0, y1, z0)], front)}
    </g>
  );
}

/** The shadow of something lying on the floor: its footprint at height y, a little to the right. */
const footprint = (x0: number, x1: number, y: number, z0: number, z1: number) => (
  <polygon
    points={pts([P(x0, y, z0), P(x1, y, z0), P(x1, y, z1), P(x0, y, z1)].map(([x, yy]) => [x + 3, yy + 2.5] as Pt))}
    fill="#000"
    opacity=".14"
  />
);

/** A brass rivet or screw head at (x, y). */
const Rivet = ({ x, y, r = 3.4 }: { x: number; y: number; r?: number }) => (
  <g>
    <circle cx={x} cy={y} r={r} fill={PAL.yellowShade} />
    <circle cx={x - 0.6} cy={y - 0.6} r={r * 0.62} fill={PAL.yellow} />
  </g>
);

/** A red pencil, its point at `tip`, lying along `ang` degrees (0 = the point on the left). */
function Pencil({ tip, ang, len = 52 }: { tip: Pt; ang: number; len?: number }) {
  return (
    <g transform={`translate(${tip[0]} ${tip[1]}) rotate(${ang})`}>
      <rect x="11" y="-4.5" width={len - 11} height="9" rx="2.5" fill={PAL.redShade} />
      <path d={`M11 -4.5H${len - 2.5}Q${len} -4.5 ${len} -2V0H11Z`} fill={PAL.red} />
      <path d="M11 -4.5V4.5L0 0Z" fill={PAL.card} stroke={PAL.card} strokeWidth="1" strokeLinejoin="round" />
      <path d="M11 -4.5V0H0Z" fill={WOOD_LIGHT} />
      <path d="M4.2 -1.7V1.7L-0.5 0Z" fill={PAL.ink} stroke={PAL.ink} strokeWidth="1" strokeLinejoin="round" />
    </g>
  );
}

/** A point on the circle of radius r round c, at `deg` degrees (0 = right, negative = up). */
const onArc = (c: Pt, r: number, deg: number): Pt => [c[0] + r * Math.cos((deg * Math.PI) / 180), c[1] + r * Math.sin((deg * Math.PI) / 180)];

/** The steel faces of a thin blade (front, light top edge, dark side edge). */
const STEEL = { d: dz(3), front: PAL.steel, top: PAL.mist, side: PAL.slate };

export default {
  // "de winkelhaak": the try square — a short thick reddish-wood stock standing up on the left, a
  // long narrow steel blade straight out from its top to the right: a clean ┌.
  'w.winkelhaak': () => (
    <g>
      <Extrude p={shift(rect(30, 40, 76, 13), dz(2))} {...STEEL} />
      <Shine d="M42 44.5H98" width={2.6} />
      <Extrude p={rect(14, 40, 20, 52)} d={dz(7)} front={PAL.clayShade} top={PAL.clay} side={CLAY_DARK} />
      <Shine d="M19 50V80" color={PAL.clay} width={3} opacity={0.9} />
    </g>
  ),

  // "de verstekhaak": the mitre square — a long steel blade lying level on top, a narrower blue
  // stock hanging under its left part, slanting down to the right at 45 degrees: a ‾\ (a 7).
  'w.verstekhaak': () => (
    <g>
      <Extrude p={bar([36, 45], [82, 91], 13)} d={dz(6)} front={PAL.blue} top={PAL.blueLight} side={PAL.blueShade} />
      <Shine d="M42 57L70 85" color={PAL.blueLight} width={2.6} opacity={0.9} />
      <Extrude p={rect(12, 37, 92, 13)} {...STEEL} />
      <Shine d="M18 41.5H98" width={2.6} />
    </g>
  ),

  // "de zwaaihaak": the sliding bevel — a short orange handle, a long slotted steel blade swung
  // open to an odd angle from a big brass knob at the handle's end (a V): you set it and lock it.
  'w.zwaaihaak': () => {
    const pivot: Pt = [28, 90];
    const ang = -58;
    const end = onArc(pivot, 84, ang);
    return (
      <g>
        {/* On the intro card the blade swings open round the knob to its angle */}
        <Move kind="turn" turn={44} at={pivot}>
        <Extrude p={bar(pivot, end, 14)} {...STEEL} />
        <path d={`M${pts([onArc(pivot, 20, ang)])}L${pts([onArc(pivot, 66, ang)])}`} stroke={PAL.slateDark} strokeWidth="4.4" strokeLinecap="round" />
        <Shine d={`M${pts([onArc([pivot[0] - 4.8, pivot[1] - 3], 28, ang)])}L${pts([onArc([pivot[0] - 4.8, pivot[1] - 3], 76, ang)])}`} width={2.4} />
        </Move>
        {/* The short handle */}
        <Extrude p={bar([pivot[0] - 4, pivot[1]], [98, pivot[1]], 16)} d={dz(6)} front={PAL.orange} top={PAL.orangeLight} side={PAL.orangeShade} />
        <path d={`M${pivot[0] + 16} ${pivot[1]}H92`} stroke={PAL.orangeShade} strokeWidth="3" strokeLinecap="round" />
        {/* The brass knob that locks the angle */}
        <circle cx={pivot[0]} cy={pivot[1]} r="9" fill={PAL.yellowShade} />
        <circle cx={pivot[0] - 1.2} cy={pivot[1] - 1.2} r="6.4" fill={PAL.yellow} />
        <path d={`M${pivot[0] - 4.6} ${pivot[1] + 2.2}L${pivot[0] + 2.2} ${pivot[1] - 4.6}`} stroke={PAL.yellowShade} strokeWidth="2.4" strokeLinecap="round" />
      </g>
    );
  },

  // "het kruishout": the marking gauge — at work on a plank: a dark wooden block with a brass
  // screw against the plank's front edge, a light stick through it running back over the plank, its
  // steel pin at the far end, and the dark line it has scratched along the plank, parallel to the edge.
  // On the intro card: the gauge slides along the plank from the left, scratching its line.
  'w.kruishout': () => {
    const plank = { x0: 10, x1: 76, y0: 84, y1: 94, z0: 0, z1: 42 };
    const gx = 58;
    const pinZ = 30;
    const stick = { x0: gx - 7, x1: gx + 7, y0: plank.y0 - 12, y1: plank.y0 - 0.5, top: PAL.wood, front: PAL.cardDark, side: PAL.cardDark };
    const pin = P(gx, plank.y0, pinZ);
    return (
      <g>
        {footprint(plank.x0, plank.x1, plank.y1, plank.z0, plank.z1)}
        <Slab {...plank} top={WOOD_LIGHT} front={PAL.card} side={PAL.cardShade} />
        {/* The line scratched along the plank, from its left end up to the pin */}
        <Move kind="grow" grow={0.25}>
          <path d={`M${pts([P(plank.x0 + 3, plank.y0, pinZ)])}L${pts([pin])}`} stroke={PAL.slateDark} strokeWidth="4" strokeLinecap="round" />
        </Move>
        <Move kind="from" dx={-30}>
        {/* The steel pin under the stick's far end */}
        <polygon points={pts([[pin[0] - 3.6, pin[1] - 9], [pin[0] + 3.6, pin[1] - 9], [pin[0], pin[1] + 1.5]])} fill={PAL.steel} stroke={PAL.steel} strokeWidth="1.4" strokeLinejoin="round" />
        {/* The stick, running back over the plank */}
        <Slab {...stick} z0={-4} z1={pinZ + 5} />
        {/* The block (the fence) against the plank's front edge, darker wood, a brass screw */}
        <Slab x0={gx - 14} x1={gx + 14} y0={plank.y0 - 19} y1={plank.y1 + 5} z0={-9} z1={-1} top={PAL.cardDark} front={PAL.brown} side={PAL.slateDark} />
        <Rivet x={P(gx, 0, -9)[0]} y={plank.y0 + 4 + dz(-9)[1]} r={4.6} />
        <Shine d={`M${pts([P(gx - 10, plank.y0 - 14, -9)])}L${pts([P(gx - 10, plank.y1, -9)])}`} color={PAL.wood} width={2.8} opacity={0.9} />
        </Move>
      </g>
    );
  },

  // "de passer": the compasses — two thick steel legs from a hinge with a red handle on top, the
  // needle leg standing in the middle of a dark circle, the pencil leg on the circle it has drawn.
  'w.passer': () => {
    const c: Pt = [52, 88];
    const ax: Pt = [24, 0];
    const ay: Pt = [7, -9.5];
    const at = (deg: number): Pt => {
      const t = (deg * Math.PI) / 180;
      return [c[0] + ax[0] * Math.cos(t) + ay[0] * Math.sin(t), c[1] + ax[1] * Math.cos(t) + ay[1] * Math.sin(t)];
    };
    const circle = Array.from({ length: 41 }, (_, i) => at(25 + i * 8.4));
    const pen = at(25);
    const hinge: Pt = [64, 26];
    const needle: Pt = [c[0], c[1] - 6];
    const lead: Pt = [pen[0] - 3.4, pen[1] - 20];
    const legD = dz(3.4);
    const sheet: Pt[] = [[20, 102], [80, 102], [96, 76], [36, 76]];
    return (
      <g>
        <polygon points={pts(sheet.map(([x, y]) => [x, y + 3] as Pt))} fill={PAL.ice} stroke={PAL.ice} strokeWidth="2" strokeLinejoin="round" />
        <polygon points={pts(sheet)} fill={TINT} stroke={TINT} strokeWidth="2" strokeLinejoin="round" />
        {/* The circle: the last stretch the pencil drew grows towards it */}
        <polyline points={pts(circle.slice(3))} fill="none" stroke={PAL.slate} strokeWidth="3.6" strokeLinecap="round" strokeLinejoin="round" />
        <Move kind="grow" grow={0.05}>
          <polyline points={pts(circle.slice(0, 4).reverse())} fill="none" stroke={PAL.slate} strokeWidth="3.6" strokeLinecap="round" strokeLinejoin="round" />
        </Move>
        {/* The compasses turn round the needle point, the pencil drawing the arc */}
        <Move kind="turn" turn={-20} at={c}>
          {/* The needle leg */}
          <Extrude p={bar(hinge, needle, 13)} {...STEEL} d={legD} />
          <path d={`M${needle[0]} ${needle[1] - 2}L${pts([c])}`} stroke={PAL.slateDark} strokeWidth="3" strokeLinecap="round" />
          {/* The pencil leg, holding a short red pencil at its foot */}
          <Extrude p={bar(hinge, lead, 13)} {...STEEL} d={legD} />
          <Pencil tip={pen} ang={-98} len={24} />
          <Shine d={`M${hinge[0] - 6} ${hinge[1] + 14}L${hinge[0] - 10} ${hinge[1] + 36}`} width={2.6} />
          {/* Handle and hinge */}
          <rect x={hinge[0] - 5} y={hinge[1] - 19} width="10" height="15" rx="3.5" fill={PAL.red} />
          <rect x={hinge[0] + 0.6} y={hinge[1] - 19} width="4.4" height="15" rx="2" fill={PAL.redShade} />
          <circle cx={hinge[0]} cy={hinge[1]} r="10" fill={PAL.slate} />
          <circle cx={hinge[0] - 2} cy={hinge[1] - 2} r="3.6" fill={PAL.steel} />
        </Move>
      </g>
    );
  },

  // "aftekenen": to mark out, draw where you will cut — a plank seen from above; a hand in an
  // orange sleeve holds a red pencil and draws a dark line square across the top of the plank.
  // On the intro card: the hand draws the pencil across the plank from the left, the line growing behind it.
  'w.aftekenen': () => {
    const plank = { x0: 12, x1: 72, y0: 84, y1: 95, z0: 0, z1: 44 };
    const lz = 22;
    const tip = P(56, plank.y0, lz);
    const ang = -64;
    const t = (ang * Math.PI) / 180;
    const grip: Pt = [tip[0] + Math.cos(t) * 30, tip[1] + Math.sin(t) * 30];
    const s = 0.9;
    const wrist: Pt = [grip[0] - s * 20 * Math.sin(t), grip[1] + s * 20 * Math.cos(t)];
    return (
      <g>
        {footprint(plank.x0, plank.x1, plank.y1, plank.z0, plank.z1)}
        <Slab {...plank} top={WOOD_LIGHT} front={PAL.card} side={PAL.cardShade} />
        {/* The pencil line: from the left edge to the point, square across the plank */}
        <Move kind="grow" grow={0.25}>
          <path d={`M${pts([P(plank.x0 + 1, plank.y0, lz)])}L${pts([tip])}`} stroke={PAL.slate} strokeWidth="3.4" strokeLinecap="round" />
        </Move>
        <Move kind="from" dx={-32}>
          <Pencil tip={tip} ang={ang} len={50} />
          {/* The hand round the pencil, the arm in an orange sleeve going off to the right */}
          <Hand pose="hold" x={wrist[0]} y={wrist[1]} rotate={ang} scale={s} skin={SKIN.bram} sleeve={[PAL.orange, PAL.orangeShade]} />
        </Move>
      </g>
    );
  },
} as Record<string, () => JSX.Element>;
