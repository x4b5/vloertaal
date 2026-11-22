import type { JSX } from 'react';
import { Ground, Move, PAL, Shine, r1 } from '../kit';

/** The depth axis of the slanted view: one unit of depth goes this far right and up. */
const DX = 0.6;
const DY = -0.8;

/** The base plate: front bottom left corner, width, depth, thickness. */
const OX = 12;
const OY = 101;
const W = 76;
const D = 32;
const T = 13;

type P = [number, number];
const iso = (u: number, v: number, z = 0): P => [r1(OX + u + v * DX), r1(OY - z + v * DY)];
const quad = (...p: P[]) => `M${p.map(([x, y]) => `${x} ${y}`).join('L')}Z`;

/** A box on the plate: u0..u1, v0..v1, z0..z1, with its front, top and right faces. */
const box = (u0: number, u1: number, v0: number, v1: number, z0: number, z1: number, front: string, top: string, side: string) => (
  <g>
    <path d={quad(iso(u1, v0, z0), iso(u1, v1, z0), iso(u1, v1, z1), iso(u1, v0, z1))} fill={side} />
    <path d={quad(iso(u0, v0, z1), iso(u1, v0, z1), iso(u1, v1, z1), iso(u0, v1, z1))} fill={top} />
    <path d={quad(iso(u0, v0, z0), iso(u1, v0, z0), iso(u1, v0, z1), iso(u0, v0, z1))} fill={front} />
  </g>
);

/** A steel locating pin standing at (u, v) on the plate. */
const pin = (u: number, v: number) => {
  const [x, y] = iso(u, v, T);
  return (
    <g>
      <rect x={x - 3} y={y - 11} width="6" height="11" fill={PAL.steel} />
      <rect x={x + 1} y={y - 11} width="2" height="11" fill={PAL.slate} opacity=".5" />
      <ellipse cx={x} cy={y - 11} rx="3" ry="1.4" fill={PAL.paper} />
      <ellipse cx={x} cy={y} rx="3" ry="1.4" fill={PAL.steel} />
    </g>
  );
};

/**
 * A toggle clamp standing at (u, v): a yellow foot, the yellow arm reaching `reach` units along u (minus = to the
 * left) at the height of the part, a dark rubber spindle pressing down, and the orange handle up in the air.
 */
const clamp = (u: number, v: number, reach: number) => {
  const s = Math.sign(reach);
  const [fx, fy] = iso(u, v, T);
  const [ax, ay] = iso(u + reach, v, T);
  return (
    <g>
      {/* The foot */}
      <rect x={fx - 7} y={fy - 8} width="14" height="8" rx="1.5" fill={PAL.yellowShade} />
      <rect x={fx - 7} y={fy - 8} width="11" height="8" rx="1.5" fill={PAL.yellow} />
      {/* The arm over the part, the spindle at its end: on the intro card it comes down from open */}
      <Move kind="turn" turn={-s * 40} at={[fx, fy - 19]}>
      <path d={`M${fx} ${fy - 19}L${ax} ${ay - 19}`} stroke={PAL.yellowShade} strokeWidth="8" strokeLinecap="round" />
      <path d={`M${fx} ${fy - 20.5}L${ax} ${ay - 20.5}`} stroke={PAL.yellow} strokeWidth="5" strokeLinecap="round" />
      <rect x={ax - 2.6} y={ay - 17} width="5.2" height="10" rx="1" fill={PAL.slate} />
      <rect x={ax - 4.4} y={ay - 9} width="8.8" height="4" rx="1.6" fill={PAL.slateDark} />
      </Move>
      {/* The body and pivot */}
      <path d={`M${fx} ${fy - 6}V${fy - 19}`} stroke={PAL.yellow} strokeWidth="9" strokeLinecap="round" />
      <path d={`M${fx + 3} ${fy - 6}V${fy - 18}`} stroke={PAL.yellowShade} strokeWidth="3" strokeLinecap="round" />
      {/* The handle, up and away from the part (it turns with the arm) */}
      <Move kind="turn" turn={-s * 40} at={[fx, fy - 19]}>
      <path d={`M${fx} ${fy - 19}L${fx - s * 11} ${fy - 46}`} stroke={PAL.orange} strokeWidth="6" strokeLinecap="round" />
      <path d={`M${fx - s * 7} ${fy - 38}L${fx - s * 12} ${fy - 48}`} stroke={PAL.red} strokeWidth="8" strokeLinecap="round" />
      </Move>
      <circle cx={fx} cy={fy - 19} r="3" fill={PAL.slate} />
    </g>
  );
};

export default {
  // On the intro card: both toggle clamps swing down from open and press the bracket onto the plate.
  // "de mal": the assembly jig — a dark steel base plate; a blue bracket (a flat foot with an upright back) lies on it
  // between steel locating pins, and two yellow toggle clamps (orange handles up) press it down from left and right.
  'w.mal': () => (
    <g strokeLinejoin="round">
      <Ground cx={60} cy={102} rx={48} ry={4.5} />
      {/* The base plate */}
      {box(0, W, 0, D, 0, T, PAL.slate, PAL.steel, PAL.slateDark)}
      {/* Back pins */}
      {pin(22, 24)}
      {pin(56, 24)}
      {/* The bracket: the upright back, then the flat foot with its hole */}
      {box(24, 54, 17, 21, T, T + 26, PAL.blue, PAL.blueLight, PAL.blueShade)}
      {box(24, 54, 5, 17, T, T + 4, PAL.blue, PAL.blueLight, PAL.blueShade)}
      <ellipse cx={iso(39, 11, T + 4)[0]} cy={iso(39, 11, T + 4)[1]} rx="4.4" ry="2.4" fill={PAL.navyShade} />
      <Shine d={`M${iso(27, 17, T + 23).join(' ')}L${iso(27, 17, T + 8).join(' ')}`} width={2.4} opacity={0.6} />
      {/* Front pins */}
      {pin(21, 4)}
      {pin(57, 4)}
      {/* The two toggle clamps */}
      {clamp(9, 9, 20)}
      {clamp(69, 9, -20)}
    </g>
  ),
} as Record<string, () => JSX.Element>;
