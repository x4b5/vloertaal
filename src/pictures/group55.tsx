import type { JSX } from 'react';
import { Arrow, Ground, PAL, Shade, Shine, r1 } from './kit';

/**
 * Word pictures, group 55 (keyed by word id). See docs/tekenstijl.md and ./kit.tsx.
 *
 * The lesson "Plastering" (u.afbouw): six tools of the plasterer. Where depth makes a tool clearer
 * it gets the slanted view of the approved tiling tools (a light top, a darker front and right
 * side, a shadow on the ground); the filling knife is flat, straight on, as on the teacher's sheet.
 *
 *  - the plastering trowel (de stucspaan): a big flat grey steel plate seen at an angle, its thin
 *    edge showing, an arched wooden grip on two dark posts, a lump of plaster on its front corner
 *    (redrawn 20 November 2026 at the owner's request).
 *  - the hawk (de oplegspaan): a square blue board with a big heap of grey plaster on it, standing
 *    on the dark round handle under its middle.
 *  - the filling knife (het spackmes): straight on, a very wide grey blade across the top, a dark
 *    riveted neck and an orange handle with a hanging hole pointing down.
 *  - the straightedge (de rei): a long aluminium bar laid across a freshly plastered wall, the
 *    plaster smooth below it and still rough above, an orange arrow: it is pulled up (redrawn
 *    20 November 2026 at the owner's request).
 *  - the sponge float (de sponsspaan): seen from the side, a long thin green plate with a thick
 *    yellow sponge under it and a tall green arched grip on top.
 *  - the corner bead (het hoekprofiel): a long thin metal angle standing upright from the ground
 *    to the top of the card, a column of holes in both narrow wings, a light rounded nose.
 *
 * The six stand side by side in a picture choice, so each has its own main shape and colour:
 * a big grey plate with a brown arch, a blue square on a stalk, a wide grey blade on an orange
 * handle, a long grey bar on a slant, a green and yellow float, and a tall thin perforated angle.
 */

/** The depth axis of the slanted view: one unit of depth goes this far right and up. */
const DX = 0.6;
const DY = -0.8;

/** A darker step of fleece green for the shaded side of the sponge float's plate. */
const GREEN_DEEP = '#256b31';

type SlabProps = {
  /** The front bottom left corner. */
  x: number;
  y: number;
  /** Width (left to right), depth (into the card) and height. */
  w: number;
  d: number;
  h: number;
  top: string;
  front: string;
  side: string;
};

const pts = (p: [number, number][]) => p.map(([a, b]) => `${a},${b}`).join(' ');

/** A box in the slanted view: a light top, a front and a darker right side. */
function Slab({ x, y, w, d, h, top, front, side }: SlabProps) {
  const ox = d * DX;
  const oy = d * DY;
  return (
    <g>
      <polygon points={pts([[x, y - h], [x + w, y - h], [x + w + ox, y - h + oy], [x + ox, y - h + oy]])} fill={top} />
      <rect x={x} y={y - h} width={w} height={h} fill={front} />
      <polygon points={pts([[x + w, y], [x + w, y - h], [x + w + ox, y - h + oy], [x + w + ox, y + oy]])} fill={side} />
    </g>
  );
}

/** Pores in the sponge: small dots of uneven size. */
const PORES: [number, number, number][] = [
  [20, 88, 1.6], [32, 94, 1.9], [44, 87, 1.4], [56, 93, 1.8], [68, 88, 1.9], [80, 94, 1.5], [91, 88, 1.7],
];

/** The corner bead: the nose (fold) at NOSE_X, from BEAD_TOP down to BEAD_BOTTOM. */
const NOSE_X = 54;
const BEAD_TOP = 28;
const BEAD_BOTTOM = 104;
/** Width of the front wing, and depth of the side wing. */
const WING = 15;
const WING_D = 22;
/** Holes in the wings, top to bottom (y on the front wing). */
const HOLES = [37, 49, 61, 73, 85, 97];

/** The filling knife's blade: very wide at the top edge, a little narrower at the neck. */
const BLADE = 'M17 18H103Q106.5 18 105.8 21.5L100.5 46Q99.6 50 95.5 50H24.5Q20.4 50 19.5 46L14.2 21.5Q13.5 18 17 18Z';

/** Fresh plaster on the trowel: a warm off-white. */
const PLASTER = '#e8dccb';
/** Rough plaster and the wall's side: one step darker. */
const PLASTER_DARK = '#cdbda6';
/** The trowel plate's thin front edge: one step under PAL.steel. */
const STEEL_DARK = '#5d6a75';

/** The trowel's plate seen at an angle: (u, v) on the plate, z up from it. */
const spaanIso = (u: number, v: number, z = 0): [number, number] => [r1(10 + u + 0.4 * v), r1(86 - 0.7 * v - z)];
const spaanQuad = (...p: [number, number][]) => `M${p.map(([x, y]) => `${x} ${y}`).join('L')}Z`;
const spaanSeg = (a: [number, number], b: [number, number]) => `M${a[0]} ${a[1]}L${b[0]} ${b[1]}`;

export default {
  // "de stucspaan": the plastering trowel — a big flat steel plate seen at an angle, its thin edge
  // showing, a wooden grip standing up on two dark posts, a smear of plaster on the front of the plate.
  'w.stucspaan': () => {
    const W = 82;
    const D = 42;
    const T = 3;
    const mid = D / 2;
    return (
      <g>
        <path d={spaanQuad(spaanIso(3, -3), spaanIso(W + 3, -3), spaanIso(W + 3, D - 3), spaanIso(3, D - 3))} fill="#000" opacity="0.14" />
        {/* The steel plate: thin front and side edge, top */}
        <path d={spaanQuad(spaanIso(0, 0, 0), spaanIso(W, 0, 0), spaanIso(W, 0, T), spaanIso(0, 0, T))} fill={STEEL_DARK} />
        <path d={spaanQuad(spaanIso(W, 0, 0), spaanIso(W, D, 0), spaanIso(W, D, T), spaanIso(W, 0, T))} fill={PAL.slate} />
        <path d={spaanQuad(spaanIso(0, 0, T), spaanIso(W, 0, T), spaanIso(W, D, T), spaanIso(0, D, T))} fill={PAL.steel} />
        <path d={spaanSeg(spaanIso(6, D - 6, T), spaanIso(34, D - 6, T))} stroke={PAL.white} strokeWidth="2.8" strokeLinecap="round" opacity="0.6" />
        {/* A lump of plaster on the front corner of the plate */}
        <path d={`M${spaanIso(4, 2, T).join(' ')}Q${spaanIso(6, 12, T + 4).join(' ')} ${spaanIso(16, 11, T + 3).join(' ')}Q${spaanIso(26, 9, T + 4).join(' ')} ${spaanIso(28, 2, T).join(' ')}Z`} fill={PLASTER} />
        <path d={`M${spaanIso(8, 7, T + 3).join(' ')}Q${spaanIso(12, 10, T + 4).join(' ')} ${spaanIso(17, 9, T + 3).join(' ')}`} fill="none" stroke={PAL.white} strokeWidth="2" strokeLinecap="round" opacity="0.8" />
        {/* The grip: a wooden bow on two dark posts */}
        {[16, W - 16].map((u) => (
          <path key={u} d={spaanSeg(spaanIso(u, mid, T), spaanIso(u, mid, T + 13))} stroke={PAL.slate} strokeWidth="6" strokeLinecap="round" />
        ))}
        <path d={`M${spaanIso(14, mid, T + 13).join(' ')}Q${spaanIso(W / 2, mid, T + 30).join(' ')} ${spaanIso(W - 14, mid, T + 13).join(' ')}`} fill="none" stroke={PAL.cardDark} strokeWidth="11" strokeLinecap="round" />
        <path d={`M${spaanIso(14, mid, T + 14.5).join(' ')}Q${spaanIso(W / 2, mid, T + 31.5).join(' ')} ${spaanIso(W - 14, mid, T + 14.5).join(' ')}`} fill="none" stroke={PAL.wood} strokeWidth="7.5" strokeLinecap="round" />
        <path d={`M${spaanIso(24, mid, T + 19.5).join(' ')}Q${spaanIso(34, mid, T + 25).join(' ')} ${spaanIso(44, mid, T + 25.5).join(' ')}`} fill="none" stroke={PAL.card} strokeWidth="2.4" strokeLinecap="round" />
      </g>
    );
  },

  // "de oplegspaan": the hawk — a square blue board with a big heap of grey plaster on it, standing
  // on the dark round handle under its middle.
  'w.oplegspaan': () => (
    <g strokeLinejoin="round">
      <ellipse cx="62" cy="101" rx="34" ry="4.5" fill="#000" opacity=".14" />
      {/* The handle under the board */}
      <Shade color={PAL.slateDark} opacity={1} at={[72, 80, 6, 30]}>
        <rect x="53" y="50" width="15" height="52" rx="7" fill={PAL.slate} />
      </Shade>
      <ellipse cx="60.5" cy="68.5" rx="11" ry="3" fill="#000" opacity=".2" />
      <Slab x={15} y={66} w={60} d={50} h={5} top={PAL.blue} front={PAL.blueShade} side={PAL.navy} />
      {/* The plaster: a big lumpy grey heap */}
      <Shade color={PAL.slate} opacity={0.4} at={[92, 40, 15, 24]}>
        <path d="M28 52C27 42 37 37 43 32C48 23 57 18 66 21C75 24 79 30 85 34C93 39 92 47 86 50Q57 57 28 52Z" fill={PAL.line} />
      </Shade>
      <Shine d="M40 39Q46 30 55 25" width={3.2} opacity={0.75} />
    </g>
  ),

  // "het spackmes": the filling knife — straight on, a very wide grey blade across the top, a dark
  // riveted neck and an orange handle with a hanging hole pointing down.
  'w.spackmes': () => (
    <g strokeLinejoin="round">
      {/* The blade: its depth edge, then the steel with its shade on the right */}
      <path d={BLADE} fill={PAL.slate} transform="translate(0 3)" />
      <Shade color={PAL.slate} opacity={0.3} at={[114, 34, 22, 30]}>
        <path d={BLADE} fill={PAL.steel} />
      </Shade>
      <Shine d="M22 23.5H58" width={3} opacity={0.7} />
      {/* The neck with two rivets */}
      <path d="M48.5 50H71.5L67.5 64H52.5Z" fill={PAL.slate} />
      <circle cx="55.5" cy="56" r="2.3" fill={PAL.steel} />
      <circle cx="64.5" cy="56" r="2.3" fill={PAL.steel} />
      {/* The handle, its hanging hole near the end */}
      <Shade color={PAL.orangeShade} opacity={1} at={[77, 84, 9, 30]}>
        <path d="M52 61H68Q71.5 61 71 65L69.5 97Q69 106 60 106Q51 106 50.5 97L49 65Q48.5 61 52 61Z" fill={PAL.orange} />
      </Shade>
      <ellipse cx="60" cy="96" rx="3.2" ry="3.8" fill={PAL.slate} />
      <Shine d="M54.5 68V84" width={3} opacity={0.6} />
    </g>
  ),

  // "de rei": the straightedge — a long aluminium bar laid flat across a freshly plastered wall:
  // below it the plaster is smooth, above it still rough with lumps; an arrow: it is pulled up.
  'w.rei': () => (
    <g>
      {/* The wall: plaster, its right edge a shade darker */}
      <rect x="14" y="14" width="92" height="92" rx="4" fill={PLASTER} />
      <rect x="98" y="14" width="8" height="92" rx="3" fill={PLASTER_DARK} />
      {/* Rough plaster above the bar */}
      {[[26, 30, 7], [46, 24, 5], [64, 33, 8], [86, 26, 6], [36, 44, 6], [78, 46, 5]].map(([cx, cy, r]) => (
        <ellipse key={`${cx}-${cy}`} cx={cx} cy={cy} rx={r} ry={r * 0.7} fill={PLASTER_DARK} />
      ))}
      {/* The bar: top face, front face, end face, a heap of plaster it pushes in front of it */}
      <path d="M22 56Q60 49 98 56L98 58L22 58Z" fill={PLASTER_DARK} />
      <path d="M8 58H104L112 52H16Z" fill={PAL.mist} />
      <rect x="8" y="58" width="96" height="13" fill={PAL.steel} />
      <path d="M104 58L112 52V65L104 71Z" fill={PAL.slate} />
      <path d="M14 61.5H60" stroke={PAL.white} strokeWidth="2.6" strokeLinecap="round" opacity="0.6" />
      {/* Upward arrow: the bar goes up the wall */}
      <Arrow from={[60, 96]} to={[60, 78]} color={PAL.orange} width={6} head={10} />
    </g>
  ),

  // "de sponsspaan": the sponge float — seen from the side, a long thin green plate with a thick
  // yellow sponge under it and a tall green arched grip on top.
  'w.sponsspaan': () => (
    <g strokeLinejoin="round">
      <polygon points="14,104 102,104 108,96 20,96" fill="#000" opacity=".14" />
      {/* The sponge: its shaded side, its front, the pores */}
      <polygon points="98,82 104,74 104,93 98,101" fill={PAL.yellowShade} />
      <path d="M12 82H98V98Q98 101 95 101H15Q12 101 12 98Z" fill={PAL.yellow} />
      <g fill={PAL.yellowShade}>
        {PORES.map(([cx, cy, r]) => (
          <ellipse key={`${cx}-${cy}`} cx={cx} cy={cy} rx={r * 1.4} ry={r * 1.2} />
        ))}
      </g>
      {/* The plate */}
      <Slab x={12} y={82} w={86} d={10} h={5} top={PAL.green} front={PAL.greenShade} side={GREEN_DEEP} />
      {/* The grip: its shadow on the plate, then the arch */}
      <ellipse cx="58" cy="73.5" rx="30" ry="2.6" fill="#000" opacity=".18" />
      <Shade color={PAL.greenShade} opacity={1} at={[96, 54, 14, 28]}>
        <path d="M30 74Q30 38 58 38Q86 38 86 74H77Q77 47 58 47Q39 47 39 74Z" fill={PAL.green} />
      </Shade>
      <Shine d="M35 62Q37 46 49 41.6" color={PAL.lime} width={2.6} opacity={0.8} />
    </g>
  ),

  // "het hoekprofiel": the corner bead — a long thin metal angle standing upright from the ground
  // to the top of the card, a column of holes in both narrow wings, a light rounded nose.
  'w.hoekprofiel': () => {
    const ox = WING_D * DX;
    const oy = WING_D * DY;
    return (
      <g strokeLinejoin="round">
        <Ground cx={62} cy={104} rx={24} ry={3.6} />
        {/* The front wing and the side wing going back */}
        <rect x={NOSE_X - WING} y={BEAD_TOP} width={WING} height={BEAD_BOTTOM - BEAD_TOP} fill={PAL.line} />
        <polygon
          points={pts([[NOSE_X, BEAD_TOP], [NOSE_X + ox, BEAD_TOP + oy], [NOSE_X + ox, BEAD_BOTTOM + oy], [NOSE_X, BEAD_BOTTOM]])}
          fill={PAL.steel}
        />
        {/* The holes in both wings */}
        {HOLES.map((y) => (
          <g key={y}>
            <ellipse cx={NOSE_X - WING / 2} cy={y} rx={2.6} ry={3.6} fill={PAL.slateDark} />
            <ellipse cx={NOSE_X + ox / 2} cy={y + oy / 2} rx={2} ry={3.6} fill={PAL.slateDark} />
          </g>
        ))}
        {/* The rounded nose along the fold */}
        <path d={`M${NOSE_X} ${BEAD_TOP + 1}V${BEAD_BOTTOM - 1}`} stroke={PAL.paper} strokeWidth="4.5" strokeLinecap="round" />
      </g>
    );
  },
} as Record<string, () => JSX.Element>;
