import type { JSX } from 'react';
import { PAL, Shine, r1 } from '../kit';

/** The depth axis of the slanted view: one unit of depth goes this far right and up. */
const DX = 0.6;
const DY = -0.8;

/** The clear body: front bottom left corner, width, depth, height. */
const OX = 30;
const OY = 82;
const W = 58;
const D = 30;
const H = 24;

/** Copper: a lighter and a darker step of terracotta (no new hue). */
const COPPER = PAL.clayLight;
/** Brown wire: the cardboard's darkest step, with coffee brown as its shade. */
const BROWN = PAL.cardDark;
const BROWN_SHADE = PAL.brown;

type P = [number, number];
/** A point of the connector: u along the front, v into the card, z up. */
const iso = (u: number, v: number, z = 0): P => [r1(OX + u + v * DX), r1(OY - z + v * DY)];
const quad = (...p: P[]) => `M${p.map(([x, y]) => `${x} ${y}`).join('L')}Z`;
const at = (p: P) => `${p[0]} ${p[1]}`;

/** The two ports: where along the front they are, and how high. */
const PORTS = [15, 43];
const PZ = 8;

/** A lever lying on the top over one port: a flat orange slab with a lip over the front. */
const lever = (u: number, key: string) => {
  const u0 = u - 11;
  const u1 = u + 11;
  const z0 = H;
  const z1 = H + 5;
  return (
    <g key={key}>
      <path d={quad(iso(u1, -3, z0 - 3), iso(u1, D - 3, z0), iso(u1, D - 3, z1), iso(u1, -3, z1))} fill={PAL.orangeShade} />
      <path d={quad(iso(u0, -3, z0 - 3), iso(u1, -3, z0 - 3), iso(u1, -3, z1), iso(u0, -3, z1))} fill={PAL.orangeShade} />
      <path d={quad(iso(u0, -3, z1), iso(u1, -3, z1), iso(u1, D - 3, z1), iso(u0, D - 3, z1))} fill={PAL.orange} />
      <path d={`M${at(iso(u0 + 3, 0, z1))}L${at(iso(u0 + 3, D - 7, z1))}`} stroke={PAL.orangeLight} strokeWidth="2.4" strokeLinecap="round" />
    </g>
  );
};

/** A wire pushed into a port: insulation coming from the front, and its copper core seen through the clear body. */
const wire = (u: number, color: string, shade: string, end: P, key: string) => {
  const [hx, hy] = iso(u, 0, PZ);
  const [cx, cy] = iso(u, D - 6, PZ);
  const [ix, iy] = iso(u, 6, PZ);
  return {
    inside: (
      <g key={`${key}i`} opacity=".85">
        <path d={`M${hx} ${hy}L${ix} ${iy}`} stroke={color} strokeWidth="6" strokeLinecap="round" />
        <path d={`M${ix} ${iy}L${cx} ${cy}`} stroke={COPPER} strokeWidth="3.4" strokeLinecap="round" />
      </g>
    ),
    outside: (
      <g key={`${key}o`}>
        <path d={`M${hx} ${hy}Q${r1(hx - 10)} ${r1(hy + 14)} ${end[0]} ${end[1]}`} fill="none" stroke={shade} strokeWidth="8" strokeLinecap="round" />
        <path d={`M${hx} ${hy}Q${r1(hx - 10)} ${r1(hy + 14)} ${end[0]} ${end[1]}`} fill="none" stroke={color} strokeWidth="5.4" strokeLinecap="round" transform="translate(-0.8 -0.8)" />
      </g>
    ),
  };
};

export default {
  // "de lasklem": the lever wire connector — a small clear grey block with two orange levers on top, a blue and a
  // brown wire pushed in from the front, their copper cores visible inside
  'w.lasklem': () => {
    const blue = wire(PORTS[0], PAL.blue, PAL.blueShade, [12, 106], 'b');
    const brown = wire(PORTS[1], BROWN, BROWN_SHADE, [40, 108], 'r');
    return (
      <g strokeLinejoin="round">
        {/* Shadow under the block */}
        <path d={quad(iso(-3, -3, -1.5), iso(W + 4, -3, -1.5), iso(W + 4, D + 2, -1.5), iso(-3, D + 2, -1.5))} fill="#000" opacity="0.14" />
        {/* The clear body: right side, top, front */}
        <path d={quad(iso(W, 0), iso(W, D), iso(W, D, H), iso(W, 0, H))} fill={PAL.steel} />
        <path d={quad(iso(0, 0, H), iso(W, 0, H), iso(W, D, H), iso(0, D, H))} fill={PAL.paperShade} />
        <path d={quad(iso(0, 0), iso(W, 0), iso(W, 0, H), iso(0, 0, H))} fill={PAL.mist} />
        {/* Inside, seen through the clear front: the wires going in, their copper cores */}
        {blue.inside}
        {brown.inside}
        {/* A light glaze over the front: it is clear plastic */}
        <path d={quad(iso(0, 0), iso(W, 0), iso(W, 0, H), iso(0, 0, H))} fill={PAL.white} opacity="0.22" />
        <Shine d={`M${at(iso(3, 0, H - 4))}L${at(iso(3, 0, 6))}`} width={2.6} opacity={0.85} />
        {/* The two levers, closed */}
        {PORTS.map((u, i) => lever(u, `l${i}`))}
        {/* The ports in the front, and the wires coming out towards the viewer */}
        {PORTS.map((u, i) => {
          const [x, y] = iso(u, 0, PZ);
          return <ellipse key={`h${i}`} cx={x} cy={y} rx="5" ry="5" fill={PAL.slate} />;
        })}
        {blue.outside}
        {brown.outside}
      </g>
    );
  },
} as Record<string, () => JSX.Element>;
