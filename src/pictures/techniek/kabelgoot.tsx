import type { JSX } from 'react';
import { PAL, Shine, r1 } from '../kit';

/** The depth axis of this view: from a little higher than the series, so the inside of the duct shows. */
const DX = 0.35;
const DY = -1.25;

/** The duct: front bottom left corner, length, depth, height of its walls; the wall thickness. */
const OX = 9;
const OY = 97;
const L = 78;
const D = 36;
const H = 10;
const WALL = 3;
/** The lid: how far along it still covers, and how far its free end is lifted. */
const LID = 30;
const LIFT = 9;

/** Brown wire: the cardboard's darkest step, with coffee brown as its shade. */
const BROWN = PAL.cardDark;
const COPPER = PAL.clayLight;

type P = [number, number];
/** A point of the duct: u along it, v into the card (towards the wall), z up. */
const iso = (u: number, v: number, z = 0): P => [r1(OX + u + v * DX), r1(OY - z + v * DY)];
const quad = (...p: P[]) => `M${p.map(([x, y]) => `${x} ${y}`).join('L')}Z`;
const at = (p: P) => `${p[0]} ${p[1]}`;

/** The three cables, from the back (wall side) to the front: depth, colour, shade, stripe. */
const CABLES: { v: number; color: string; shade: string; stripe?: string }[] = [
  { v: 28, color: PAL.green, shade: PAL.greenShade, stripe: PAL.yellow },
  { v: 19.5, color: BROWN, shade: PAL.brown },
  { v: 11, color: PAL.blue, shade: PAL.blueShade },
];

/** A cable lying in the duct and leaving its open right end, drooping down to a bare copper tip. */
const cable = (v: number, color: string, shade: string, stripe: string | undefined, i: number) => {
  const a = iso(LID - 6, v, 5);
  const b = iso(L, v, 5);
  const end: P = [r1(b[0] + 8 + i * 4), r1(b[1] + 20 - i * 2)];
  const d = `M${at(a)}L${at(b)}Q${r1(b[0] + 10)} ${b[1]} ${end[0]} ${end[1]}`;
  return (
    <g key={i}>
      <path d={d} fill="none" stroke={shade} strokeWidth="9" strokeLinecap="round" />
      <path d={d} fill="none" stroke={color} strokeWidth="6" strokeLinecap="round" transform="translate(-0.6 -0.8)" />
      {stripe && <path d={d} fill="none" stroke={stripe} strokeWidth="6" strokeDasharray="5 5" transform="translate(-0.6 -0.8)" />}
      <path d={`M${end[0]} ${end[1]}l0.6 5`} stroke={COPPER} strokeWidth="3.4" strokeLinecap="round" />
    </g>
  );
};

export default {
  // "de kabelgoot": the cable duct — a length of light grey plastic trunking, its lid lifted off the right part,
  // three cables (blue, brown, green-yellow) lying in it and coming out of its open end
  'w.kabelgoot': () => (
    <g strokeLinejoin="round">
      {/* The inside: the back wall's inner face, then the floor */}
      <path d={quad(iso(0, D - WALL, H), iso(L, D - WALL, H), iso(L, D - WALL, 0), iso(0, D - WALL, 0))} fill={PAL.steel} />
      <path d={quad(iso(0, D - WALL, 0), iso(L, D - WALL, 0), iso(L, WALL, 0), iso(0, WALL, 0))} fill={PAL.line} />
      {/* The back wall's top edge */}
      <path d={quad(iso(0, D - WALL, H), iso(L, D - WALL, H), iso(L, D, H), iso(0, D, H))} fill={PAL.paper} />
      {/* The cables, back to front */}
      {CABLES.map((c, i) => cable(c.v, c.color, c.shade, c.stripe, i))}
      {/* The open right end: the U of the duct, in shade */}
      <path d={`M${at(iso(L, 0, 0))}L${at(iso(L, D, 0))}L${at(iso(L, D, H))}L${at(iso(L, D - WALL, H))}L${at(iso(L, D - WALL, WALL))}L${at(iso(L, WALL, WALL))}L${at(iso(L, WALL, H))}L${at(iso(L, 0, H))}Z`} fill={PAL.steel} />
      {/* The front wall: its face and its top edge */}
      <path d={quad(iso(0, 0, 0), iso(L, 0, 0), iso(L, 0, H), iso(0, 0, H))} fill={PAL.mist} />
      <path d={quad(iso(0, 0, H), iso(L, 0, H), iso(L, WALL, H), iso(0, WALL, H))} fill={PAL.paper} />
      {/* The lid on the left part, its right end lifted off: front edge, end, top */}
      <path d={quad(iso(-1, -1, H), iso(LID, -1, H + LIFT), iso(LID, -1, H + LIFT + 2.4), iso(-1, -1, H + 2.4))} fill={PAL.steel} />
      <path d={quad(iso(LID, -1, H + LIFT), iso(LID, D + 1, H + LIFT), iso(LID, D + 1, H + LIFT + 2.4), iso(LID, -1, H + LIFT + 2.4))} fill={PAL.steel} />
      <path d={quad(iso(-1, -1, H + 2.4), iso(LID, -1, H + LIFT + 2.4), iso(LID, D + 1, H + LIFT + 2.4), iso(-1, D + 1, H + 2.4))} fill={PAL.paper} />
      <Shine d={`M${at(iso(3, 4, H + 2.8))}L${at(iso(LID - 6, 4, H + LIFT + 1.6))}`} color={PAL.white} width={3} opacity={1} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
