import type { JSX } from 'react';
import { Arrow, Ground, PAL, Shine, r1 } from '../kit';

/** The depth axis of the slanted view: one unit of depth goes this far right and up. */
const DX = 0.6;
const DY = -0.8;

/** The conveyor: front left corner of the rollers' top line, length, width (depth). */
const OX = 10;
const OY = 78;
const L = 84;
const D = 24;
/** Roller places along the length. */
const ROLLERS = [6, 17, 28, 39, 50, 61, 72];

type P = [number, number];
const iso = (u: number, v: number, z = 0): P => [r1(OX + u + v * DX), r1(OY - z + v * DY)];
const quad = (...p: P[]) => `M${p.map(([x, y]) => `${x} ${y}`).join('L')}Z`;
const line = (a: P, b: P) => `M${a[0]} ${a[1]}L${b[0]} ${b[1]}`;

export default {
  // "de rolbaan": the roller conveyor — a short slanted section on four legs: two steel side rails with a row of
  // light steel rollers between them, a cardboard box riding on the rollers and a blue arrow showing where it goes.
  'w.rolbaan': () => {
    const box = { u0: 34, u1: 62, v0: 3, v1: 21, h: 24 };
    return (
      <g strokeLinejoin="round">
        <Ground cx={62} cy={104} rx={48} ry={4} />
        {/* The back legs */}
        <path d={line(iso(4, D, -6), iso(4, D, -40))} stroke={PAL.slateDark} strokeWidth="4" />
        <path d={line(iso(L - 4, D, -6), iso(L - 4, D, -40))} stroke={PAL.slateDark} strokeWidth="4" />
        {/* The back rail */}
        <path d={quad(iso(0, D, 2), iso(L, D, 2), iso(L, D, -7), iso(0, D, -7))} fill={PAL.slate} />
        {/* The rollers: each a light band from front to back, a shade line on its underside */}
        {ROLLERS.map((u) => (
          <g key={u}>
            <path d={line(iso(u, 1), iso(u, D - 1))} stroke={PAL.steel} strokeWidth="7" strokeLinecap="round" />
            <path d={line(iso(u - 0.8, 1, 0.8), iso(u - 0.8, D - 1, 0.8))} stroke={PAL.mist} strokeWidth="3.6" strokeLinecap="round" />
          </g>
        ))}
        {/* The box riding on the rollers: right side, top, front */}
        <path d={quad(iso(box.u1, box.v0, 3), iso(box.u1, box.v1, 3), iso(box.u1, box.v1, 3 + box.h), iso(box.u1, box.v0, 3 + box.h))} fill={PAL.cardShade} />
        <path d={quad(iso(box.u0, box.v0, 3 + box.h), iso(box.u1, box.v0, 3 + box.h), iso(box.u1, box.v1, 3 + box.h), iso(box.u0, box.v1, 3 + box.h))} fill="#f0c48a" />
        <path d={quad(iso(box.u0, box.v0, 3), iso(box.u1, box.v0, 3), iso(box.u1, box.v0, 3 + box.h), iso(box.u0, box.v0, 3 + box.h))} fill={PAL.card} />
        <path d={quad(iso(46, box.v0, 3 + box.h), iso(50, box.v0, 3 + box.h), iso(50, box.v1, 3 + box.h), iso(46, box.v1, 3 + box.h))} fill="#f6dcae" />
        <path d={quad(iso(46, box.v0, 3 + box.h), iso(50, box.v0, 3 + box.h), iso(50, box.v0, 3 + box.h - 8), iso(46, box.v0, 3 + box.h - 8))} fill="#f6dcae" />
        {/* The front legs and the front rail */}
        <path d={line(iso(4, 0, -6), iso(4, 0, -26))} stroke={PAL.slate} strokeWidth="5" />
        <path d={line(iso(L - 4, 0, -6), iso(L - 4, 0, -26))} stroke={PAL.slate} strokeWidth="5" />
        <rect x={iso(1, 0, -26)[0]} y={iso(0, 0, -26)[1] - 1} width="6" height="3" rx="1" fill={PAL.slateDark} />
        <rect x={iso(L - 7, 0, -26)[0]} y={iso(0, 0, -26)[1] - 1} width="6" height="3" rx="1" fill={PAL.slateDark} />
        <path d={quad(iso(L, 0, 3), iso(L, D, 3), iso(L, D, -7), iso(L, 0, -7))} fill={PAL.slateDark} />
        <path d={quad(iso(0, 0, 3), iso(L, 0, 3), iso(L, 0, -7), iso(0, 0, -7))} fill={PAL.steel} />
        <Shine d={line(iso(3, 0, 0.5), iso(30, 0, 0.5))} width={2.2} opacity={0.6} />
        {/* The direction */}
        <Arrow from={[34, 28]} to={[82, 28]} color={PAL.sky} width={8} head={13} />
      </g>
    );
  },
} as Record<string, () => JSX.Element>;
