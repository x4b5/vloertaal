import type { JSX } from 'react';
import { Ground, PAL, Shine } from './kit';

/**
 * Word pictures, group 64 (keyed by word id). See docs/tekenstijl.md and ./kit.tsx.
 *
 * Numbers (u.numbers), the lesson "Shapes". The four flat shapes are cut-out pieces from one box:
 * a base fill, the same shape again in its shade colour a few units lower as a depth edge
 * (tekenstijl rule 4), and one shine on the top left. The two solids stand in the shallow slanted
 * view of the approved cabinet (a light top, a darker side, a ground shadow). Six silhouettes and
 * six colours, so no two can be mixed up in a picture choice: red square, wide green piece, purple
 * point, round orange piece, blue block, long yellow box.
 *
 *  - het vierkant: the square — a flat red square piece, exactly as wide as it is high.
 *  - de rechthoek: the rectangle — a flat green piece, clearly wider than it is high.
 *  - de driehoek: the triangle — a flat purple triangle piece standing on its base.
 *  - de cirkel: the circle — a flat round orange piece, the same cut-out as the square and the
 *    triangle.
 *  - de kubus: the cube — a blue block with equal edges: a square front, a light top, a dark side.
 *  - de balk: the cuboid — a plain yellow box lying down, a front about twice as long as it is high,
 *    so it is clearly not the cube.
 */

/** How far a flat piece's depth edge sits below it. */
const EDGE = 4;

/**
 * A box in the slanted view: the front face (x, y, w, h) and a depth of (dx, -dy) going back to
 * the top right. Top light, front base, right side shade. The faces carry no detail.
 */
function Solid({ x, y, w, h, dx, dy, top, front, side }: {
  x: number; y: number; w: number; h: number; dx: number; dy: number; top: string; front: string; side: string;
}) {
  const r = x + w;
  const b = y + h;
  const join = (fill: string) => ({ fill, stroke: fill, strokeWidth: 2, strokeLinejoin: 'round' as const });
  return (
    <g>
      <polygon points={`${x},${y} ${r},${y} ${r + dx},${y - dy} ${x + dx},${y - dy}`} {...join(top)} />
      <polygon points={`${r},${y} ${r + dx},${y - dy} ${r + dx},${b - dy} ${r},${b}`} {...join(side)} />
      <rect x={x} y={y} width={w} height={h} rx="1.5" fill={front} />
    </g>
  );
}

/** A flat triangle piece on its base (points as a polygon string), rounded corners. */
const tri = (points: string, fill: string) => (
  <polygon points={points} fill={fill} stroke={fill} strokeWidth="5" strokeLinejoin="round" />
);

export default {
  // "het vierkant": the square — a flat red square piece with a depth edge, four equal sides.
  'w.vierkant': () => (
    <g>
      <rect x="25" y={22 + EDGE} width="70" height="70" rx="4" fill={PAL.redShade} />
      <rect x="25" y="22" width="70" height="70" rx="4" fill={PAL.red} />
      <Shine d="M34 46Q34 32 48 31" width={4} opacity={0.6} />
    </g>
  ),

  // "de rechthoek": the rectangle — a flat green piece with a depth edge, wider than it is high.
  'w.rechthoek': () => (
    <g>
      <rect x="20" y={36 + EDGE} width="80" height="46" rx="4" fill={PAL.greenShade} />
      <rect x="20" y="36" width="80" height="46" rx="4" fill={PAL.green} />
      <Shine d="M29 57Q29 45 42 45" width={4} opacity={0.6} />
    </g>
  ),

  // "de driehoek": the triangle — a flat purple triangle piece with a depth edge, on its base.
  'w.driehoek': () => (
    <g>
      {tri(`60,${22 + EDGE} 101,${91 + EDGE} 19,${91 + EDGE}`, PAL.purpleShade)}
      {tri('60,22 101,91 19,91', PAL.purple)}
      <Shine d="M53 41L41 62" width={4} opacity={0.6} />
    </g>
  ),

  // "de cirkel": the circle — a flat round orange piece with a depth edge.
  'w.cirkel': () => (
    <g>
      <circle cx="60" cy={57 + EDGE} r="37" fill={PAL.orangeShade} />
      <circle cx="60" cy="57" r="37" fill={PAL.orange} />
      <Shine d="M35.5 45.6A27 27 0 0 1 50.8 31.6" width={4} opacity={0.6} />
    </g>
  ),

  // "de kubus": the cube — a blue block with equal edges in the shallow slanted view.
  'w.kubus': () => (
    <g>
      <Ground cx={64} cy={99} rx={42} ry={4.5} />
      <Solid x={24} y={44} w={54} h={54} dx={22} dy={17} top={PAL.blueLight} front={PAL.blue} side={PAL.blueShade} />
      <Shine d="M33 40L42 33" width={3.5} opacity={0.7} />
    </g>
  ),

  // "de balk": the cuboid — a plain yellow box lying on the ground, about twice as long as it is high.
  'w.balk': () => (
    <g>
      <Ground cx={62} cy={81} rx={42} ry={4.5} />
      <Solid x={17} y={48} w={66} h={32} dx={18} dy={14} top={PAL.yellowLight} front={PAL.yellow} side={PAL.yellowShade} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
