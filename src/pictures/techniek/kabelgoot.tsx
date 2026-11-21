import type { JSX } from 'react';
import { PAL, Shine, r1 } from '../kit';

/** The depth axis of the slanted view: one unit of depth goes this far right and up. */
const DX = 0.6;
const DY = -0.8;

/** The duct runs into the card: its open front end's bottom left corner, width, length, wall height, wall thickness. */
const OX = 12;
const OY = 97;
const W = 56;
const LEN = 58;
const H = 13;
const WALL = 4;

/** The shaded side and the dark floor: one step under PAL.steel (as in maken/startknop). */
const STEEL_DARK = '#5d6a75';
/** Brown wire: the cardboard's darkest step, with coffee brown as its shade. */
const BROWN = PAL.cardDark;
const COPPER = PAL.clayLight;

type P = [number, number];
/** A point of the duct: u across it (to the right), v along it (into the card), z up. */
const iso = (u: number, v: number, z = 0): P => [r1(OX + u + v * DX), r1(OY - z + v * DY)];
const quad = (...p: P[]) => `M${p.map(([x, y]) => `${x} ${y}`).join('L')}Z`;
const at = (p: P) => `${p[0]} ${p[1]}`;

/** The three cables, left (back) to right (front): where across the duct, colour, shade, stripe, where its end lands. */
const CABLES: { u: number; color: string; shade: string; stripe?: string; end: P }[] = [
  { u: 15, color: PAL.green, shade: PAL.greenShade, stripe: PAL.yellow, end: [66, 14] },
  { u: 27, color: BROWN, shade: PAL.brown, end: [80, 12] },
  { u: 39, color: PAL.blue, shade: PAL.blueShade, end: [94, 15] },
];
const CZ = 4;

/** A cable as a band: its shade, then its colour a little up and left, and the stripe of earth wire. */
const band = (d: string, c: (typeof CABLES)[number], key: string) => (
  <g key={key}>
    <path d={d} fill="none" stroke={c.shade} strokeWidth="8.4" strokeLinecap="round" strokeLinejoin="round" />
    <path d={d} fill="none" stroke={c.color} strokeWidth="5.6" strokeLinecap="round" strokeLinejoin="round" transform="translate(-0.7 -0.9)" />
    {c.stripe && <path d={d} fill="none" stroke={c.stripe} strokeWidth="5.6" strokeDasharray="5 6" strokeLinejoin="round" transform="translate(-0.7 -0.9)" />}
  </g>
);
/** The part of a cable lying in the duct. */
const inside = (c: (typeof CABLES)[number]) => `M${at(iso(c.u, LEN, CZ))}L${at(iso(c.u, 0.5, CZ))}`;
/** The part leaving the far end of the duct and bending up the wall. */
const outside = (c: (typeof CABLES)[number]) => {
  const a = iso(c.u, LEN - 2, CZ);
  const b = iso(c.u, LEN + 5, CZ);
  return `M${at(a)}L${at(b)}Q${r1(b[0] + 3)} ${r1(b[1] - 10)} ${c.end[0]} ${c.end[1]}`;
};

export default {
  // "de kabelgoot": the cable duct — a long light grey U-shaped trunking running into the card, thick walls with light top
  // edges and a dark inside, three cables (green-yellow, brown, blue) lying in it, cut ends in the open front, bending up out of the far end
  'w.kabelgoot': () => (
    <g strokeLinejoin="round">
      {/* Shadow on the ground under the duct */}
      <path d={quad(iso(-2, -2, -1), iso(W + 3, -2, -1), iso(W + 3, LEN + 1, -1), iso(-2, LEN + 1, -1))} fill="#000" opacity="0.14" />
      {/* Behind it all: the cables leaving the far end and bending up the wall, each with a bare copper tip */}
      {CABLES.map((c, i) => band(outside(c), c, `o${i}`))}
      {CABLES.map((c, i) => (
        <path key={`t${i}`} d={`M${c.end[0]} ${c.end[1]}v-4`} stroke={COPPER} strokeWidth="3.4" strokeLinecap="round" />
      ))}
      {/* The dark inside: the floor, then the left wall's inner face */}
      <path d={quad(iso(WALL, 0, WALL), iso(W - WALL, 0, WALL), iso(W - WALL, LEN, WALL), iso(WALL, LEN, WALL))} fill={STEEL_DARK} />
      <path d={quad(iso(WALL, 0, WALL), iso(WALL, LEN, WALL), iso(WALL, LEN, H), iso(WALL, 0, H))} fill={PAL.steel} />
      {/* The cables lying in it */}
      {CABLES.map((c, i) => band(inside(c), c, `i${i}`))}
      {/* The right wall: its outer side in shade, its light top edge */}
      <path d={quad(iso(W, 0), iso(W, LEN), iso(W, LEN, H), iso(W, 0, H))} fill={STEEL_DARK} />
      <path d={quad(iso(W - WALL, 0, H), iso(W, 0, H), iso(W, LEN, H), iso(W - WALL, LEN, H))} fill={PAL.white} />
      {/* The left wall's light top edge */}
      <path d={quad(iso(0, 0, H), iso(WALL, 0, H), iso(WALL, LEN, H), iso(0, LEN, H))} fill={PAL.white} />
      {/* The open front end: the U of the duct */}
      <path d={`M${at(iso(0, 0, 0))}L${at(iso(W, 0, 0))}L${at(iso(W, 0, H))}L${at(iso(W - WALL, 0, H))}L${at(iso(W - WALL, 0, WALL))}L${at(iso(WALL, 0, WALL))}L${at(iso(WALL, 0, H))}L${at(iso(0, 0, H))}Z`} fill={PAL.mist} />
      <Shine d={`M${at(iso(2, 8, H + 0.4))}L${at(iso(2, LEN - 10, H + 0.4))}`} color={PAL.paperShade} width={1.6} opacity={1} />
      {/* The cut ends of the cables in the open end, the copper core in each */}
      {CABLES.map((c, i) => {
        const [x, y] = iso(c.u, 0.5, CZ);
        return (
          <g key={`e${i}`}>
            <circle cx={x - 0.7} cy={y - 0.9} r="3.6" fill={c.shade} />
            <circle cx={x - 0.7} cy={y - 0.9} r="1.6" fill={COPPER} />
          </g>
        );
      })}
    </g>
  ),
} as Record<string, () => JSX.Element>;
