import type { JSX } from 'react';
import { Ground, PAL, Shine, type Pt } from './kit';

/**
 * Word pictures, group 66 (keyed by word id). See docs/tekenstijl.md and ./kit.tsx.
 *
 * "Length, area and volume" (u.numbers):
 *
 *  - de lengte: a long wooden block, a sky double arrow lying flat across its long front face; its long bottom edge in sky.
 *  - de breedte: the same block, the double arrow lying on its top face, from the front edge to the back edge.
 *  - de hoogte: the same block, the double arrow standing upright on its front face, from the bottom to the top.
 *  - de oppervlakte: a flat floor of light-blue tiles in rows, seen at a slant (length times width).
 *  - de inhoud: the same block made into an open wooden box, filled to near the rim with sky-blue water.
 *  - de centimeter: a plain yellow ruler with a few marks; one centimetre between two long marks is spanned by a sky arrow above it.
 *
 * Six silhouettes and colours: wood + flat arrow, wood + slanting arrow, wood + upright arrow,
 * flat blue grid, open wooden box with blue inside, yellow strip with arrow.
 */

const pts = (p: Pt[]) => p.map(([x, y]) => `${Math.round(x * 10) / 10} ${Math.round(y * 10) / 10}`).join(' ');

/** A lighter step of the cardboard / wood colour (tekenstijl.md palette table). */
const WOOD_TOP = '#f0c48a';

/** A double-headed dimension arrow from a to b. */
function DimArrow({ a, b, color = PAL.sky, width = 6.5, head = 11 }: { a: Pt; b: Pt; color?: string; width?: number; head?: number }) {
  const len = Math.hypot(b[0] - a[0], b[1] - a[1]) || 1;
  const ux = (b[0] - a[0]) / len;
  const uy = (b[1] - a[1]) / len;
  const half = head * 0.78;
  const tip = (p: Pt, s: number): Pt[] => {
    const base: Pt = [p[0] - s * ux * head, p[1] - s * uy * head];
    return [p, [base[0] - uy * half, base[1] + ux * half], [base[0] + uy * half, base[1] - ux * half]];
  };
  return (
    <g>
      <path d={`M${a[0] + ux * head * 0.8} ${a[1] + uy * head * 0.8}L${b[0] - ux * head * 0.8} ${b[1] - uy * head * 0.8}`} stroke={color} strokeWidth={width} strokeLinecap="round" />
      <polygon points={pts(tip(a, -1))} fill={color} stroke={color} strokeWidth="3" strokeLinejoin="round" />
      <polygon points={pts(tip(b, 1))} fill={color} stroke={color} strokeWidth="3" strokeLinejoin="round" />
    </g>
  );
}

/** The wooden block of lengte, breedte, hoogte and inhoud: front x 14–80, y 49–89, 30 deep (to x 104). */
const B = { x: 14, y: 49, w: 66, h: 40, dx: 24, dy: -18 };

/** The point a fraction `f` of the way from the block's front edge to its back edge, `along` units from the left. */
const back = (along: number, f: number): Pt => [B.x + along + B.dx * f, B.y + B.dy * f];

/** The open top of the box for inhoud: a rim, the dark inside, and the water 5 units below the rim. */
function OpenTop() {
  const rim = 5;
  const [ax, ay] = back(rim, 0.15);
  const W = B.w - 2 * rim;
  const ddx = B.dx * 0.7;
  const ddy = B.dy * 0.7;
  const d = 5;
  const hole: Pt[] = [[ax, ay], [ax + W, ay], [ax + W + ddx, ay + ddy], [ax + ddx, ay + ddy]];
  const water: Pt[] = [
    [ax + (ddx * d) / -ddy, ay],
    [ax + W, ay],
    [ax + W + ddx * (1 - d / -ddy), ay + ddy + d],
    [ax + ddx, ay + ddy + d],
  ];
  return (
    <g>
      <polygon points={pts(hole)} fill={PAL.cardDark} />
      <polygon points={pts(water)} fill={PAL.sky} />
      <Shine d={`M${ax + 14} ${ay - 3}L${ax + 30} ${ay - 3}`} color={PAL.ice} width={3} opacity={0.9} />
    </g>
  );
}

/** The block, with the measured edge `edge` drawn in sky blue, or open and full of water (`edge` none). */
function Block({ edge }: { edge: 'length' | 'width' | 'height' | 'none' }) {
  const { x, y, w, h, dx, dy } = B;
  const top: Pt[] = [[x, y], [x + w, y], [x + w + dx, y + dy], [x + dx, y + dy]];
  const side: Pt[] = [[x + w, y], [x + w + dx, y + dy], [x + w + dx, y + h + dy], [x + w, y + h]];
  const edges = {
    length: `M${x} ${y + h}H${x + w}`,
    width: `M${x + w} ${y}L${x + w + dx} ${y + dy}`,
    height: `M${x + w} ${y}V${y + h}`,
    none: '',
  };
  return (
    <g>
      <Ground cx={64} cy={90} rx={48} ry={6} />
      <polygon points={pts(side)} fill={PAL.cardDark} stroke={PAL.cardDark} strokeWidth="1.5" strokeLinejoin="round" />
      <polygon points={pts(top)} fill={WOOD_TOP} stroke={WOOD_TOP} strokeWidth="1.5" strokeLinejoin="round" />
      <rect x={x} y={y} width={w} height={h} fill={PAL.card} />
      {edge === 'none' ? <OpenTop /> : <path d={edges[edge]} stroke={PAL.sky} strokeWidth="4" strokeLinecap="round" />}
    </g>
  );
}

/** A slanted grid face: corner o, step u along one side (n times), step v along the other (m times). */
function Grid({ o, u, v, n, m, fill, line, width = 1.8 }: { o: Pt; u: Pt; v: Pt; n: number; m: number; fill: string; line: string; width?: number }) {
  const at = (i: number, j: number): Pt => [o[0] + u[0] * i + v[0] * j, o[1] + u[1] * i + v[1] * j];
  const lines: string[] = [];
  for (let i = 1; i < n; i += 1) lines.push(`M${pts([at(i, 0)])}L${pts([at(i, m)])}`);
  for (let j = 1; j < m; j += 1) lines.push(`M${pts([at(0, j)])}L${pts([at(n, j)])}`);
  return (
    <g>
      <polygon points={pts([at(0, 0), at(n, 0), at(n, m), at(0, m)])} fill={fill} stroke={fill} strokeWidth="1.2" strokeLinejoin="round" />
      <path d={lines.join('')} stroke={line} strokeWidth={width} strokeLinecap="round" />
    </g>
  );
}

export default {
  // "de lengte": the length — the long wooden block, a double arrow lying across its long front face.
  'w.lengte': () => (
    <g>
      <Block edge="length" />
      <DimArrow a={[B.x + 4, B.y + B.h / 2]} b={[B.x + B.w - 4, B.y + B.h / 2]} width={7} head={12} />
    </g>
  ),

  // "de breedte": the width — the same block, the double arrow lying on its top face, front edge to back edge.
  'w.breedte': () => (
    <g>
      <Block edge="width" />
      <DimArrow a={back(B.w / 2, -0.12)} b={back(B.w / 2, 1.12)} width={7} head={10} />
    </g>
  ),

  // "de hoogte": the height — the same block, the double arrow standing upright on its front face.
  'w.hoogte': () => (
    <g>
      <Block edge="height" />
      <DimArrow a={[B.x + B.w / 2, B.y + 4]} b={[B.x + B.w / 2, B.y + B.h - 4]} width={7} head={12} />
    </g>
  ),

  // "de oppervlakte": the area — a flat floor of light-blue tiles, four by three, seen at a slant.
  'w.oppervlakte': () => (
    <g>
      <Ground cx={62} cy={93} rx={50} ry={6} />
      {/* The edge of the floor: front and side */}
      <polygon points="12 86 80 86 80 93 12 93" fill={PAL.steel} />
      <polygon points="80 86 108 46 108 53 80 93" fill={PAL.slate} />
      <Grid o={[12, 86]} u={[17, 0]} v={[7, -10]} n={4} m={4} fill={PAL.ice} line={PAL.sky} width={2.2} />
      <Shine d="M24 79L34 79" width={3} opacity={0.75} />
    </g>
  ),

  // "de inhoud": the volume — the same block made into an open wooden box, full of water.
  'w.inhoud': () => (
    <g>
      <Block edge="none" />
    </g>
  ),

  // "de centimeter": the centimetre — a plain yellow ruler with a few marks; one centimetre, between
  // two long marks, is spanned by a sky double arrow standing on those marks.
  'w.centimeter': () => (
    <g>
      <rect x="16" y="62" width="88" height="26" rx="3" fill={PAL.yellowShade} />
      <rect x="16" y="58" width="88" height="26" rx="3" fill={PAL.yellow} />
      {/* Long marks at the whole centimetres, short ones at the halves */}
      <path d="M44 58V78M76 58V78" stroke={PAL.ink} strokeWidth="3.4" strokeLinecap="round" />
      <path d="M28 58V68M60 58V68M92 58V68" stroke={PAL.ink} strokeWidth="2.6" strokeLinecap="round" />
      {/* The one centimetre */}
      <path d="M44 34V56M76 34V56" stroke={PAL.sky} strokeWidth="3" strokeLinecap="round" />
      <DimArrow a={[45, 42]} b={[75, 42]} width={6} head={10} />
      <Shine d="M22 78H34" color={PAL.yellowShine} width={3} opacity={0.8} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
