import { useId, type JSX } from 'react';
import { Ground, Move, PAL, Shine, r1 } from '../kit';

/** The depth axis of the slanted view: one unit of depth goes this far right and up. */
const DX = 0.6;
const DY = -0.8;

/** The knife lies along a line rising to the top right (blade up, body down: the other way round from "het mes"). */
const ANGLE = -30;
/** Where the knife's local origin (the back end of the body) sits on the card. */
const OX = 12;
const OY = 93;

type P = [number, number];
const COS = Math.cos((ANGLE * Math.PI) / 180);
const SIN = Math.sin((ANGLE * Math.PI) / 180);
/** A point of the knife: x along it (to the blade), y across it (down), z its thickness (into the card). */
const at = (x: number, y: number, z = 0): P => [r1(OX + x * COS - y * SIN + z * DX), r1(OY + x * SIN + y * COS + z * DY)];
const path = (p: P[]) => `M${p.map(([x, y]) => `${x} ${y}`).join('L')}Z`;

/**
 * A flat part of the knife (a convex outline, clockwise in x/y), z0 to z1 thick: the side faces that
 * face the viewer (lit when they face up, in shade when they face right), then the front face.
 */
const slab = (pts: [number, number][], z0: number, z1: number, front: string, top: string, side: string) => {
  const faces = pts.map((p, i) => {
    const q = pts[(i + 1) % pts.length];
    const [ax, ay] = at(p[0], p[1], z0);
    const [bx, by] = at(q[0], q[1], z0);
    const len = Math.hypot(bx - ax, by - ay) || 1;
    const nx = (by - ay) / len;
    const ny = -(bx - ax) / len;
    if (nx * DX + ny * DY <= 0.02) return null;
    const fill = -ny > nx ? top : side;
    return <path key={i} d={path([at(p[0], p[1], z0), at(q[0], q[1], z0), at(q[0], q[1], z1), at(p[0], p[1], z1)])} fill={fill} stroke={fill} strokeWidth=".6" strokeLinejoin="round" />;
  });
  return (
    <g>
      {faces}
      <path d={path(pts.map(([x, y]) => at(x, y, z0)))} fill={front} />
    </g>
  );
};

/** The body: yellow plastic, rounded at the back, narrowing a little to the dark nose. */
const BODY: [number, number][] = [[0, -4], [4, -9], [52, -9], [58, -6.5], [58, 6.5], [52, 9], [4, 9], [0, 4]];
/** The blade: from inside the nose to the slanted tip (the point at the cutting edge, bottom). */
const B0 = 54;
const BT = -6.5;
const BB = 6.5;
const SLANT = 8;
const TIP = 104;
const BLADE: [number, number][] = [[B0, BT], [TIP - SLANT, BT], [TIP, BB], [B0, BB]];
/** On the intro card the blade slides out of the body this far, along the knife. */
const OUT = 36;
const OUT_DX = r1(-OUT * COS);
const OUT_DY = r1(-OUT * SIN);
/** The snap lines across the blade, parallel to the slanted tip. */
const SNAPS = [1, 2, 3, 4].map((k) => TIP - SLANT - k * 8.5);

export default {
  // "het afbreekmes": the snap-off knife — a yellow box cutter rising to the top right, black slider on its
  // back, a long steel blade with a slanted tip and diagonal snap lines across it.
  'w.afbreekmes': () => {
    const id = `am-${useId().replace(/[^a-zA-Z0-9_-]/g, '')}`;
    return (
      <g>
        <Ground cx={60} cy={104} rx={44} ry={4.5} />
        {/* Only out of the nose is the blade seen over the body (it slides out on the intro card) */}
        <clipPath id={id}>
          <path d={path([at(58, -40, 0), at(160, -40, 0), at(160, 40, 0), at(58, 40, 0)])} />
        </clipPath>
        {/* The blade sits in the middle of the body's thickness */}
        <Move kind="from" dx={OUT_DX} dy={OUT_DY}>
          {slab(BLADE, 2.5, 3.5, PAL.mist, PAL.paper, PAL.steel)}
        </Move>
        {/* The body */}
        {slab(BODY, 0, 6, PAL.yellow, PAL.yellowLight, PAL.yellowShade)}
        {/* The dark nose where the blade comes out */}
        {slab([[49, -9], [52, -9], [58, -6.5], [58, 6.5], [52, 9], [49, 9]], 0, 6, PAL.slate, PAL.steel, PAL.slateDark)}
        {/* The slider on the back, with its ridges */}
        {slab([[22, -14], [38, -14], [38, -9], [22, -9]], 1, 5, PAL.slate, PAL.steel, PAL.slateDark)}
        <path d={[26, 30, 34].map((x) => `M${at(x, -10.5, 1).join(' ')}L${at(x, -12.8, 1).join(' ')}`).join('')} stroke={PAL.slateDark} strokeWidth="1.6" strokeLinecap="round" />
        {/* The blade's front face over again, out of the nose, with the snap lines */}
        <g clipPath={`url(#${id})`}>
          <Move kind="from" dx={OUT_DX} dy={OUT_DY}>
            <path d={path(BLADE.map(([x, y]) => at(Math.max(x, 58), y, 2.5)))} fill={PAL.mist} />
            <path
              d={SNAPS.map((x) => `M${at(x, BT, 2.5).join(' ')}L${at(x + SLANT, BB, 2.5).join(' ')}`).join('')}
              stroke={PAL.slate}
              strokeWidth="2.4"
              strokeLinecap="round"
            />
          </Move>
        </g>
        <Shine d={`M${at(8, -5.5, 0).join(' ')}L${at(44, -5.5, 0).join(' ')}`} color={PAL.yellowShine} width={3} opacity={0.8} />
      </g>
    );
  },
} as Record<string, () => JSX.Element>;
