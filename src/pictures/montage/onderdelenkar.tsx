import type { JSX } from 'react';
import { Ground, Move, PAL, Shine, r1 } from '../kit';

/** The depth axis of the slanted view: one unit of depth goes this far right and up. */
const DX = 0.6;
const DY = -0.8;

/** A block in the slanted view: front rectangle (x, y, w, h), its top and right faces `d` deep. */
const block = (x: number, y: number, w: number, h: number, d: number, front: string, top: string, side: string) => {
  const ox = r1(d * DX);
  const oy = r1(d * DY);
  return (
    <g>
      <path d={`M${x} ${y}L${x + w} ${y}L${r1(x + w + ox)} ${r1(y + oy)}L${r1(x + ox)} ${r1(y + oy)}Z`} fill={top} />
      <path d={`M${x + w} ${y}L${r1(x + w + ox)} ${r1(y + oy)}L${r1(x + w + ox)} ${r1(y + h + oy)}L${x + w} ${y + h}Z`} fill={side} />
      <rect x={x} y={y} width={w} height={h} fill={front} />
    </g>
  );
};

/** A blue parts bin standing on a shelf at (x, bottom y): the scooped front, its dark inside, its side. */
const bin = (x: number, y: number, w: number, h: number) => (
  <g key={`${x}-${y}`}>
    {block(x, y - h, w, h, 9, PAL.blue, PAL.blueShade, PAL.blueShade)}
    <path d={`M${x + 2} ${y - h}H${x + w - 2}L${r1(x + w + 3)} ${r1(y - h - 5.6)}H${r1(x + 7)}Z`} fill={PAL.navyShade} />
    <path d={`M${x} ${y - h}Q${x + w / 2} ${y - h + 7} ${x + w} ${y - h}`} fill={PAL.navyShade} />
    <path d={`M${x + 4} ${y - h + 7}V${y - 4}`} stroke={PAL.blueLight} strokeWidth="2" strokeLinecap="round" />
  </g>
);

export default {
  // "de onderdelenkar": the parts trolley — a low steel trolley with two shelves on four caster wheels
  // and a push handle, with blue parts bins on both shelves. On the intro card it rolls in from the left.
  // Once and slowly (it arrives: it happens once).
  'w.onderdelenkar': () => (
    <g strokeLinejoin="round">
      <Ground cx={58} cy={105} rx={46} ry={4} />
      <Move kind="from" dx={-26} once>
      {/* The back uprights */}
      <path d="M26.6 44V84M86.6 44V84" stroke={PAL.steel} strokeWidth="4" strokeLinecap="round" />
      {/* The push handle on the right */}
      <path d="M90 88V38Q90 30 98 30" fill="none" stroke={PAL.slate} strokeWidth="6" strokeLinecap="round" />
      <path d="M96 30H104" stroke={PAL.slateDark} strokeWidth="7" strokeLinecap="round" />
      {/* The bottom shelf and its bins */}
      {block(16, 84, 72, 6, 14, PAL.steel, PAL.mist, PAL.slate)}
      {bin(22, 84, 26, 15)}
      {bin(54, 84, 26, 15)}
      {/* The top shelf and its bins */}
      {block(16, 56, 72, 6, 14, PAL.steel, PAL.mist, PAL.slate)}
      {bin(22, 56, 26, 15)}
      {bin(54, 56, 26, 15)}
      {/* The front uprights */}
      <path d="M18 56V90M86 56V90" stroke={PAL.slate} strokeWidth="4" strokeLinecap="round" />
      <Shine d="M20 58H44" width={2} opacity={0.7} />
      {/* The caster wheels */}
      {[24, 80].map((wx) => (
        <g key={wx}>
          <rect x={wx - 3} y="89" width="6" height="6" fill={PAL.slate} />
          <circle cx={wx} cy="97" r="7" fill={PAL.slateDark} />
          <circle cx={wx} cy="97" r="2.6" fill={PAL.mist} />
        </g>
      ))}
      </Move>
    </g>
  ),
} as Record<string, () => JSX.Element>;
