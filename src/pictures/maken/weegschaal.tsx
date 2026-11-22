import type { JSX } from 'react';
import { Move, PAL, Shine, r1 } from '../kit';

/** The depth axis of the slanted view: one unit of depth goes this far right and up. */
const DX = 0.6;
const DY = -0.8;

/** The front bottom left corner of the scale on the floor. */
const X0 = 12;
const Y0 = 104;

/** Darker steel (the right sides): one step under PAL.steel, as in group53. */
const STEEL_DARK = '#5d6a75';
/** A light step of cardboard for the top of the box (tekenstijl: cardboard light). */
const CARD_LIGHT = '#f0c48a';

type P = [number, number];
/** A point of the scale: u along the front, v into the card, z up. */
const iso = (u: number, v: number, z = 0): P => [r1(X0 + u + v * DX), r1(Y0 - z + v * DY)];
const quad = (...p: P[]) => `M${p.map(([x, y]) => `${x} ${y}`).join('L')}Z`;

type BlockProps = { u: number; v: number; z: number; w: number; d: number; h: number; top: string; front: string; side: string };

/** A block in the slanted view: a light top, a front and a darker right side. */
function Block({ u, v, z, w, d, h, top, front, side }: BlockProps) {
  return (
    <g>
      <path d={quad(iso(u + w, v, z), iso(u + w, v + d, z), iso(u + w, v + d, z + h), iso(u + w, v, z + h))} fill={side} />
      <path d={quad(iso(u, v, z + h), iso(u + w, v, z + h), iso(u + w, v + d, z + h), iso(u, v + d, z + h))} fill={top} />
      <path d={quad(iso(u, v, z), iso(u + w, v, z), iso(u + w, v, z + h), iso(u, v, z + h))} fill={front} />
    </g>
  );
}

/** The weighing plate: width, depth, and its bottom and top height. */
const PW = 70;
const PD = 24;
const PZ = 10;
const PH = 6;

/** The indicator head on its column at the back: left end, width, bottom, height, depth. */
const HU = 38;
const HW = 36;
const HZ = 46;
const HH = 24;
const HV = 20;
const HD = 6;

export default {
  // "de weegschaal": the scales — an industrial bench scale: a thick steel weighing plate on a low
  // blue base with dark feet, a cardboard product box on the plate, and at the back a steel column
  // carrying a blue indicator head whose dark screen shows three lit green bars.
  'w.weegschaal': () => {
    const [sx, sy] = iso(HU + 4, HV, HZ + HH - 4);
    return (
      <g>
        {/* Shadow on the ground, under the footprint */}
        <path d={quad(iso(-3, -2, 0), iso(PW + 3, -2, 0), iso(PW + 3, PD + 2, 0), iso(-3, PD + 2, 0))} fill="#000" opacity="0.14" />
        {/* Four dark feet (the back two hidden), the blue base, the steel plate */}
        <Block u={5} v={3} z={0} w={8} d={6} h={4} top={PAL.slate} front={PAL.slateDark} side={PAL.slateDark} />
        <Block u={PW - 13} v={3} z={0} w={8} d={6} h={4} top={PAL.slate} front={PAL.slateDark} side={PAL.slateDark} />
        <Block u={4} v={2} z={4} w={PW - 8} d={PD - 4} h={PZ - 4} top={PAL.blueShade} front={PAL.blue} side={PAL.blueShade} />
        {/* The column rises from the back of the base, behind the plate */}
        <Block u={HU + HW / 2 - 4} v={HV - 2} z={PZ} w={8} d={5} h={HZ - PZ} top={PAL.mist} front={PAL.steel} side={STEEL_DARK} />
        <Block u={0} v={0} z={PZ} w={PW} d={PD} h={PH} top={PAL.mist} front={PAL.steel} side={STEEL_DARK} />
        <Shine d={`M${iso(4, 0, PZ + PH / 2).join(' ')}L${iso(30, 0, PZ + PH / 2).join(' ')}`} width={2.4} opacity={0.7} />
        {/* The product: a cardboard box on the plate */}
        <Move kind="from" dy={-22}>
          <Block u={7} v={4} z={PZ + PH} w={28} d={14} h={24} top={CARD_LIGHT} front={PAL.card} side={PAL.cardShade} />
          <path d={`M${iso(21, 4, PZ + PH + 24).join(' ')}L${iso(21, 18, PZ + PH + 24).join(' ')}`} stroke={PAL.cardShade} strokeWidth="2" strokeLinecap="round" />
        </Move>
        {/* The indicator head: a blue housing, a dark screen with three lit bars */}
        <Block u={HU} v={HV} z={HZ} w={HW} d={HD} h={HH} top={PAL.blueLight} front={PAL.blue} side={PAL.blueShade} />
        <rect x={sx} y={sy} width={HW - 8} height={HH - 8} rx="2.5" fill={PAL.slateDark} />
        <Move kind="show">
          {[0, 1, 2].map((i) => (
            <rect key={i} x={r1(sx + 3.5 + i * 8.5)} y={r1(sy + (HH - 8) / 2 - 2)} width="6.5" height="4" rx="1.2" fill={PAL.lime} />
          ))}
        </Move>
      </g>
    );
  },
} as Record<string, () => JSX.Element>;
