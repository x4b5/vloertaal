import type { JSX } from 'react';
import { PAL, Shine, r1 } from '../kit';

/** The depth axis of the slanted view: one unit of depth goes this far right and up. */
const DX = 0.6;
const DY = -0.8;

/** The front bottom left corner of the machine on the floor. */
const X0 = 12;
const Y0 = 104;

/** Darker steel (the right sides): one step under PAL.steel, as in group53. */
const STEEL_DARK = '#5d6a75';
/** The dark side of the blue head: one step under PAL.blueShade. */
const BLUE_DEEP = '#0e5690';
/** The clear film over the food: the light tint of the style guide. */
const FILM = '#e3f5ff';

type P = [number, number];
/** A point of the machine: u along the front, v into the card, z up. */
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

/** The steel base: width, depth, height. */
const BW = 78;
const BD = 24;
const BH = 20;
/** The food tray on the base: left end, front, width, depth, height, and the width of its sealed rim. */
const T = { u: 14, v: 3, w: 46, d: 16, h: 10, rim: 2.6 };
/** The blue heated head: left end, front, width, depth, bottom, height; the red heat plate under it. */
const H = { u: 8, v: 1, w: 62, d: 20, z: 53, h: 15, plate: 6 };
/** The two posts that carry the head, at the back of the base. */
const POST = { w: 6, v: 8, d: 7 };

export default {
  // "de sealmachine": the sealing machine — a tray sealer: a steel base with a black food tray on it,
  // clear film over the food and a thin red hot line round the rim where the film is sealed; above it
  // a blue head on two steel posts with a red-hot plate underneath, and red heat waves coming off it.
  'w.sealmachine': () => {
    const tz = BH + T.h;
    const r = T.rim;
    const heat = [24, 37, 50].map((u) => {
      const [x, y] = iso(u, 10, H.z - H.plate - 1);
      return `M${x} ${y}q-3.2 3 0 6q3.2 3 0 6`;
    });
    return (
      <g strokeLinejoin="round">
        {/* Shadow on the ground, under the footprint */}
        <path d={quad(iso(-3, -2, 0), iso(BW + 3, -2, 0), iso(BW + 3, BD + 2, 0), iso(-3, BD + 2, 0))} fill="#000" opacity="0.14" />
        {/* The steel base */}
        <Block u={0} v={0} z={0} w={BW} d={BD} h={BH} top={PAL.mist} front={PAL.steel} side={STEEL_DARK} />
        <Shine d={`M${iso(4, 0, BH - 3).join(' ')}L${iso(30, 0, BH - 3).join(' ')}`} width={2.4} opacity={0.7} />
        {/* The posts at the back, up to the head */}
        <Block u={1} v={POST.v} z={BH} w={POST.w} d={POST.d} h={H.z + H.h - BH} top={PAL.mist} front={PAL.steel} side={STEEL_DARK} />
        <Block u={BW - POST.w - 1} v={POST.v} z={BH} w={POST.w} d={POST.d} h={H.z + H.h - BH} top={PAL.mist} front={PAL.steel} side={STEEL_DARK} />
        {/* The black food tray; its top is the red sealed rim with the clear film inside */}
        <Block u={T.u} v={T.v} z={BH} w={T.w} d={T.d} h={T.h} top={PAL.red} front={PAL.slate} side={PAL.slateDark} />
        <path d={quad(iso(T.u + r, T.v + r, tz), iso(T.u + T.w - r, T.v + r, tz), iso(T.u + T.w - r, T.v + T.d - r, tz), iso(T.u + r, T.v + T.d - r, tz))} fill={FILM} />
        {/* The food under the film, in light tints */}
        {(() => {
          const [ax, ay] = iso(T.u + 11, T.v + 8, tz);
          const [bx, by] = iso(T.u + 24, T.v + 8, tz);
          const [cx, cy] = iso(T.u + 35, T.v + 8, tz);
          return (
            <g>
              <ellipse cx={ax} cy={ay} rx="7" ry="3.6" fill={PAL.lime} />
              <ellipse cx={bx} cy={by} rx="6.5" ry="3.4" fill={PAL.yellowLight} />
              <ellipse cx={cx} cy={cy} rx="7" ry="3.6" fill={PAL.lime} />
            </g>
          );
        })()}
        <Shine d={`M${iso(T.u + 6, T.v + T.d - 5, tz).join(' ')}L${iso(T.u + 16, T.v + 5, tz).join(' ')}`} width={2.2} opacity={0.9} />
        {/* Heat waves from the hot plate down to the tray */}
        <path d={heat.join('')} fill="none" stroke={PAL.red} strokeWidth="2.8" strokeLinecap="round" />
        {/* The red-hot plate and the blue head */}
        <Block u={H.u + 2} v={H.v + 2} z={H.z - H.plate} w={H.w - 4} d={H.d - 4} h={H.plate} top={PAL.red} front={PAL.red} side={PAL.redShade} />
        <Block u={H.u} v={H.v} z={H.z} w={H.w} d={H.d} h={H.h} top={PAL.blueLight} front={PAL.blue} side={BLUE_DEEP} />
        <Shine d={`M${iso(H.u + 4, H.v, H.z + H.h - 3).join(' ')}L${iso(H.u + 26, H.v, H.z + H.h - 3).join(' ')}`} width={2.4} opacity={0.7} />
      </g>
    );
  },
} as Record<string, () => JSX.Element>;
