import type { JSX } from 'react';
import { PAL, Shine, r1 } from '../kit';

/** The depth axis of the slanted view: one unit of depth goes this far right and up. */
const DX = 0.6;
const DY = -0.8;

/** The console body: front bottom left corner, width, depth, height at the front and at the back. */
const HX = 13;
const HY = 104;
const W = 72;
const D = 34;
const HF = 20;
const HB = 54.8;

/** Darker steel (the body's right side): one step under PAL.steel, as in group53. */
const STEEL_DARK = '#5d6a75';
/** The panel face: between PAL.line and PAL.mist, so its edge holds on a white card. */
const FACE = '#b3bdc4';

type P = [number, number];
/** A point on the body: u along the front, v into the card, z up. */
const iso = (u: number, v: number, z = 0): P => [r1(HX + u + v * DX), r1(HY - z + v * DY)];
const quad = (...p: P[]) => `M${p.map(([x, y]) => `${x} ${y}`).join('L')}Z`;

/**
 * The sloping panel face as a plane of its own: local x runs 0–72 along the edge, local y 0–62
 * from the back (top) edge down to the front edge. F maps a local point to the picture.
 */
const [BX, BY] = iso(0, D, HB);
const [FX, FY] = iso(0, 0, HF);
const SLANT = (BX - FX) / (FY - BY);
const SLOPE = `matrix(1 0 ${r1(-SLANT * 1000) / 1000} 1 ${BX} ${BY})`;
const F = (u: number, v: number): P => [r1(BX + u - SLANT * v), r1(BY + v)];

/** A round push button standing on the face: a dark depth edge under a coloured cap. */
const button = (u: number, v: number, fill: string, shade: string) => {
  const [x, y] = F(u, v);
  return (
    <g>
      <ellipse cx={x} cy={y + 3} rx="8.2" ry="7" fill={shade} />
      <ellipse cx={x} cy={y} rx="8.2" ry="7" fill={fill} />
    </g>
  );
};

export default {
  // "het bedieningspaneel": the control panel — a low steel console body fixed on the floor, its
  // big sloping grey face with a lit blue screen (two short bars), a rotary dial and a blue and an
  // orange push button.
  'w.bedieningspaneel': () => {
    const [dx, dy] = F(16, 44);
    return (
      <g>
        {/* Shadow on the ground, under the body's footprint */}
        <path d={quad(iso(-3, -2, -2), iso(W + 4, -2, -2), iso(W + 4, D + 2, -2), iso(-3, D + 2, -2))} fill="#000" opacity="0.14" />
        {/* The body: right side, front, then the sloping face */}
        <path d={quad(iso(W, 0), iso(W, D), iso(W, D, HB), iso(W, 0, HF))} fill={STEEL_DARK} />
        <path d={quad(iso(0, 0), iso(W, 0), iso(W, 0, HF), iso(0, 0, HF))} fill={PAL.steel} />
        <path d={quad(iso(0, 0, HF), iso(W, 0, HF), iso(W, D, HB), iso(0, D, HB))} fill={FACE} />
        <path d={`M${iso(5, 0, HF - 4.5).join(' ')}L${iso(36, 0, HF - 4.5).join(' ')}`} stroke={PAL.white} strokeWidth="2.4" strokeLinecap="round" opacity="0.5" />
        <Shine d={`M${F(3, 4).join(' ')}L${F(3, 22).join(' ')}`} width={2.6} opacity={0.75} />
        <g transform={SLOPE}>
          {/* The screen: a dark frame, a lit face with two short bars */}
          <rect x="8" y="4" width="57" height="24" rx="3" fill={PAL.slate} />
          <rect x="12" y="7.5" width="49" height="17" rx="1.5" fill={PAL.sky} />
          <path d="M18 12.5H39M18 19.5H31" stroke={PAL.ice} strokeWidth="3.4" strokeLinecap="round" />
        </g>
        {/* The rotary dial with its pointer */}
        <ellipse cx={dx} cy={dy + 3.5} rx="12.5" ry="11" fill={PAL.slate} />
        <ellipse cx={dx} cy={dy} rx="12.5" ry="11" fill={PAL.mist} />
        <path d={`M${dx} ${dy}L${r1(dx - 5.5)} ${r1(dy - 7)}`} stroke={PAL.slateDark} strokeWidth="3.6" strokeLinecap="round" />
        {/* Two push buttons: blue and orange */}
        {button(41.5, 44, PAL.blue, PAL.blueShade)}
        {button(60, 44, PAL.orange, PAL.orangeShade)}
      </g>
    );
  },
} as Record<string, () => JSX.Element>;
