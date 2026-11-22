import type { JSX } from 'react';
import { Ground, Move, PAL, Shade, Shine, r1 } from '../kit';

/** The depth axis of the slanted view (as in group55): one unit of depth goes this far right and up. */
const DX = 0.6;
const DY = -0.8;

const pts = (p: [number, number][]) => p.map(([a, b]) => `${r1(a)},${r1(b)}`).join(' ');

type SlabProps = { x: number; y: number; w: number; d: number; h: number; top: string; front: string; side: string };

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

/** The dial: centre, bezel radius, face radius, and the case depth (into the card). */
const CX = 50;
const CY = 46;
const R = 31;
const FACE = 26;
const CASE_D = 6;
/** The needle's angle in degrees (0 = up, clockwise): a little past the top. */
const NEEDLE = 38;

/** A point on the dial at angle `deg` (0 = up, clockwise) and radius `rad`. */
const at = (deg: number, rad: number): [number, number] => {
  const a = (deg * Math.PI) / 180;
  return [CX + Math.sin(a) * rad, CY - Math.cos(a) * rad];
};

/** The scale: 50 fine ticks all round (a dense dark ring, unlike a clock), every tenth one long. */
const ticks = (long: boolean) =>
  Array.from({ length: 50 }, (_, i) => i)
    .filter((i) => (i % 10 === 0) === long)
    .map((i) => {
      const [x0, y0] = at(i * 7.2, FACE - 1.5);
      const [x1, y1] = at(i * 7.2, FACE - (long ? 8 : 5));
      return `M${r1(x0)} ${r1(y0)}L${r1(x1)} ${r1(y1)}`;
    })
    .join('');

/** The round steel case seen a little from the right: its side band between the front and the back. */
const caseSide = () => {
  const ox = CASE_D * DX;
  const oy = CASE_D * DY;
  const nx = 0.8 * R;
  const ny = 0.6 * R;
  return (
    <g>
      <circle cx={CX + ox} cy={CY + oy} r={R} fill={PAL.steel} />
      <polygon points={pts([[CX + nx, CY + ny], [CX - nx, CY - ny], [CX - nx + ox, CY - ny + oy], [CX + nx + ox, CY + ny + oy]])} fill={PAL.steel} />
    </g>
  );
};

export default {
  // "de meetklok": the dial gauge — a big round steel gauge with a white face, a ring of fine
  // ticks all round and a long red needle; below it the stem and plunger rest with their ball tip
  // on a blue part, and a dark magnetic stand on the right holds the gauge by a steel arm.
  'w.meetklok': () => (
    <g>
      <Ground cx={64} cy={104} rx={44} ry={4} />
      {/* The magnetic stand: dark base, steel post, arm to the back of the gauge */}
      <Slab x={86} y={104} w={18} d={8} h={14} top={PAL.steel} front={PAL.slate} side={PAL.slateDark} />
      <rect x="97" y="44" width="5" height="48" rx="2" fill={PAL.mist} />
      <rect x="99.5" y="44" width="2.5" height="48" rx="1.2" fill={PAL.steel} />
      <rect x="78" y="44" width="24" height="6" rx="2" fill={PAL.steel} />
      <rect x="78" y="47" width="24" height="3" rx="1.5" fill={PAL.slate} />
      <rect x="94" y="41" width="11" height="12" rx="2.5" fill={PAL.slate} />
      {/* The blue part being measured */}
      <Slab x={26} y={104} w={42} d={10} h={8} top={PAL.blueLight} front={PAL.blue} side={PAL.blueShade} />
      {/* The stem under the dial: collar, shank, plunger and its ball tip on the part */}
      <rect x={CX - 6} y={CY + R - 3} width="12" height="9" rx="2" fill={PAL.steel} />
      <rect x={CX} y={CY + R - 3} width="6" height="9" rx="2" fill={PAL.slate} />
      <rect x={CX - 3} y={CY + R + 5} width="6" height="7" rx="1.5" fill={PAL.mist} />
      <rect x={CX - 1.5} y={CY + R + 11} width="3" height="5" fill={PAL.steel} />
      <circle cx={CX} cy={CY + R + 16} r="2.8" fill={PAL.slate} />
      {/* The round case: its side, the steel bezel, the white face */}
      {caseSide()}
      <Shade color={PAL.steel} opacity={1} at={[CX + R * 1.15, CY + 4, R * 0.5, R * 1.3]}>
        <circle cx={CX} cy={CY} r={R} fill={PAL.mist} />
      </Shade>
      <Shade color={PAL.paperShade} opacity={1} at={[CX + FACE * 1.15, CY + 4, FACE * 0.5, FACE * 1.3]}>
        <circle cx={CX} cy={CY} r={FACE} fill={PAL.white} />
      </Shade>
      {/* The scale: fine ticks, every tenth long */}
      <path d={ticks(false)} stroke={PAL.slate} strokeWidth="1.4" strokeLinecap="round" />
      <path d={ticks(true)} stroke={PAL.ink} strokeWidth="2.4" strokeLinecap="round" />
      {/* The long red needle with a short tail, on a dark hub */}
      <Move kind="turn" turn={-NEEDLE} at={[CX, CY]}>
        <path d={`M${pts([at(NEEDLE + 180, 7)]).replace(',', ' ')}L${pts([at(NEEDLE, FACE - 3)]).replace(',', ' ')}`} stroke={PAL.red} strokeWidth="2.6" strokeLinecap="round" />
      </Move>
      <circle cx={CX} cy={CY} r="4.2" fill={PAL.slate} />
      <circle cx={CX - 1} cy={CY - 1} r="1.6" fill={PAL.steel} />
      <Shine d={`M${CX - R + 4.5} ${CY - 6}Q${CX - R + 7} ${CY - R + 10} ${CX - 10} ${CY - R + 4}`} width={3} opacity={0.8} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
