import type { JSX } from 'react';
import { PAL, Shine, r1 } from '../kit';

/** The depth axis of the slanted view (as group55): one unit of depth goes this far right and up. */
const DX = 0.6;
const DY = -0.8;

/** The front bottom left corner of the tray on the floor. */
const X0 = 12;
const Y0 = 102;

/** The tray: width, depth, height, wall thickness and the height of its floor inside. */
const TRAY = { w: 68, d: 40, h: 13, t: 3.5, f: 2 };
/** The oil pool on the tray's floor: centre (u, v) and radii along u and v. */
const POOL = { u: 33, v: 23, ru: 19, rv: 11 };

/** The dark inside wall of the tray, one step under PAL.yellowShade. */
const YEL_DEEP = '#b98600';
/** Darker steel (the underside of the pipe), one step under PAL.steel, as in group53. */
const STEEL_DARK = '#5d6a75';

type P = [number, number];
/** A point of the tray: u along the front, v into the card, z up. */
const iso = (u: number, v: number, z = 0): P => [r1(X0 + u + v * DX), r1(Y0 - z + v * DY)];
const quad = (...p: P[]) => `M${p.map(([x, y]) => `${x} ${y}`).join('L')}Z`;

/** The pool as a closed path of points on the tray floor (a flat blob, slightly uneven). */
const poolPath = () => {
  const { u, v, ru, rv } = POOL;
  const n = 16;
  const pts = Array.from({ length: n }, (_, i) => {
    const a = (i / n) * Math.PI * 2;
    const wob = 1 + 0.08 * Math.sin(a * 3 + 0.6);
    return iso(u + Math.cos(a) * ru * wob, v + Math.sin(a) * rv * wob, TRAY.f);
  });
  return quad(...pts);
};

/** The screen x of the pool's centre: the drop falls straight down onto it. */
const DROP_X = iso(POOL.u, POOL.v, TRAY.f)[0];

export default {
  // "de lekbak": the drip tray — a low, wide, shallow yellow tray on the floor, seen from the front
  // and above, with a pool of dark oil on its floor; above it a leaking steel pipe with a bolted
  // flange, and a dark drop of oil falling from the flange into the pool, which ripples.
  'w.lekbak': () => {
    const { w, d, h, t, f } = TRAY;
    const [px, py] = iso(POOL.u, POOL.v, f);
    return (
      <g strokeLinejoin="round">
        {/* Shadow on the floor, under the footprint */}
        <path d={quad(iso(-3, -2, 0), iso(w + 3, -2, 0), iso(w + 3, d + 2, 0), iso(-3, d + 2, 0))} fill="#000" opacity="0.14" />

        {/* The pipe across the top, with a bolted flange where it leaks */}
        <rect x="16" y="16" width="88" height="13" rx="3" fill={PAL.steel} />
        <rect x="16" y="16" width="88" height="4.5" rx="2.2" fill={PAL.mist} />
        <rect x="16" y="25" width="88" height="4" rx="2" fill={STEEL_DARK} />
        <rect x={DROP_X - 7} y="10" width="14" height="26" rx="3" fill={STEEL_DARK} />
        <rect x={DROP_X - 7} y="10" width="11" height="26" rx="3" fill={PAL.steel} />
        <rect x={DROP_X - 7} y="10" width="11" height="5" rx="2.5" fill={PAL.mist} />
        <circle cx={DROP_X - 1.5} cy="19" r="2.4" fill={PAL.slate} />
        <circle cx={DROP_X - 1.5} cy="29" r="2.4" fill={PAL.slate} />
        <Shine d="M22 18.5H44" width={2.2} opacity={0.7} />
        {/* The drop forming under the flange */}
        <path d={`M${DROP_X - 3} 35Q${DROP_X} 36 ${DROP_X + 3} 35Q${DROP_X + 3.6} 40 ${DROP_X} 41Q${DROP_X - 3.6} 40 ${DROP_X - 3} 35Z`} fill={PAL.slateDark} />

        {/* The tray's light rim (its whole top), then the inside: back wall, left wall, floor */}
        <path d={quad(iso(0, 0, h), iso(w, 0, h), iso(w, d, h), iso(0, d, h))} fill={PAL.yellowLight} />
        <path d={quad(iso(t, d - t, f), iso(w - t, d - t, f), iso(w - t, d - t, h), iso(t, d - t, h))} fill={PAL.yellowShade} />
        <path d={quad(iso(t, t, f), iso(t, d - t, f), iso(t, d - t, h), iso(t, t, h))} fill={YEL_DEEP} />
        <path d={quad(iso(t, t, f), iso(w - t, t, f), iso(w - t, d - t, f), iso(t, d - t, f))} fill={PAL.yellow} />

        {/* The dark oil on the floor, with a ripple where the drop lands and a gleam */}
        <path d={poolPath()} fill={PAL.slateDark} />
        <ellipse cx={px} cy={py} rx="8" ry="3" fill="none" stroke={PAL.slate} strokeWidth="1.8" />
        <path d={`M${px - 15} ${py + 4}Q${px - 9} ${py + 6.5} ${px - 2} ${py + 6}`} fill="none" stroke={PAL.steel} strokeWidth="1.8" strokeLinecap="round" />

        {/* The falling drop, over the tray's inside wall */}
        <path d={`M${DROP_X} 51Q${DROP_X + 6.5} 61 ${DROP_X + 6.5} 65A6.5 6.5 0 0 1 ${DROP_X - 6.5} 65Q${DROP_X - 6.5} 61 ${DROP_X} 51Z`} fill={PAL.slateDark} />
        <path d={`M${DROP_X - 2.8} 65Q${DROP_X - 2.8} 62.5 ${DROP_X - 1} 60.5`} fill="none" stroke={PAL.steel} strokeWidth="1.6" strokeLinecap="round" />

        {/* The right side (shade) and the front of the tray */}
        <path d={quad(iso(w, 0, 0), iso(w, d, 0), iso(w, d, h), iso(w, 0, h))} fill={PAL.yellowShade} />
        <path d={quad(iso(0, 0, 0), iso(w, 0, 0), iso(w, 0, h), iso(0, 0, h))} fill={PAL.yellow} />
        <path d={`M${iso(0, 0, h - 3).join(' ')}L${iso(w, 0, h - 3).join(' ')}`} stroke={PAL.yellowShade} strokeWidth="1.6" />
        <Shine d={`M${iso(4, 0, h - 7).join(' ')}L${iso(30, 0, h - 7).join(' ')}`} color={PAL.yellowShine} width={2.6} opacity={0.8} />
      </g>
    );
  },
} as Record<string, () => JSX.Element>;
