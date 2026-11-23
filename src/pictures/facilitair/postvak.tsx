import type { JSX } from 'react';
import { Ground, Move, PAL, Shine, r1 } from '../kit';

/** The depth axis of the slanted view: one unit of depth goes this far right and up. */
const DX = 0.6;
const DY = -0.8;

/** An envelope sticking out of a slot: its visible top part, from (x, y), `w` wide. */
const env = (x: number, y: number, w: number, rot = 0, key = '') => (
  <g key={key} transform={`rotate(${rot} ${x + w / 2} ${y + 8})`}>
    <rect x={x} y={y} width={w} height="14" rx="1.5" fill={PAL.white} />
    <path d={`M${x + 1} ${y + 1}L${r1(x + w / 2)} ${y + 7}L${x + w - 1} ${y + 1}`} fill="none" stroke={PAL.paperShade} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </g>
);

export default {
  // "het postvak": the pigeonhole — a wooden cabinet of nine open boxes, one per person, in the slanted
  // view; post sticks out of some of them, and a white envelope goes into the middle one.
  // On the intro card the envelope slides down into its box (three rounds: post is sorted in, again and again).
  'w.postvak': () => {
    const X = 16;
    const Y = 22;
    const W = 78;
    const H = 80;
    const D = 18;
    const cw = W / 3;
    const ch = H / 3;
    return (
      <g strokeLinejoin="round">
        <Ground cx={62} cy={104} rx={50} ry={4} />
        {/* Top and right side of the cabinet */}
        <path d={`M${X} ${Y}H${X + W}L${r1(X + W + D * DX)} ${r1(Y + D * DY)}H${r1(X + D * DX)}Z`} fill={PAL.card} />
        <path d={`M${X + W} ${Y}L${r1(X + W + D * DX)} ${r1(Y + D * DY)}V${r1(Y + H + D * DY)}L${X + W} ${Y + H}Z`} fill={PAL.cardDark} />
        {/* The front: the wooden face, then the dark boxes */}
        <rect x={X} y={Y} width={W} height={H} fill={PAL.cardShade} />
        {[0, 1, 2].map((r) =>
          [0, 1, 2].map((c) => (
            <g key={`${r}${c}`}>
              <rect x={X + c * cw + 3} y={Y + r * ch + 3} width={cw - 6} height={ch - 6} rx="1.5" fill={PAL.brown} />
              <path d={`M${X + c * cw + 3} ${Y + r * ch + 3}H${X + (c + 1) * cw - 3}L${X + (c + 1) * cw - 9} ${Y + r * ch + 9}H${X + c * cw + 3}Z`} fill={PAL.cardDark} />
            </g>
          )),
        )}
        <Shine d={`M${X + 2} ${Y + 6}V${Y + 40}`} width={2.4} opacity={0.5} />
        {/* Post in some boxes */}
        {env(X + 5, Y + 10, 16, -6, 'a')}
        {env(X + 2 * cw + 6, Y + 8, 14, 8, 'b')}
        {env(X + 4, Y + 2 * ch + 10, 18, 4, 'c')}
        <rect x={X + 2 * cw + 5} y={Y + 2 * ch + 12} width="16" height="12" rx="1.5" fill={PAL.card} />
        <rect x={X + 2 * cw + 5} y={Y + 2 * ch + 12} width="16" height="4" fill="#f0c48a" />
        {/* The envelope going into the middle box */}
        <Move kind="from" dy={-26}>
          <g>
            <rect x={X + cw + 4} y={Y + ch + 4} width="18" height="16" rx="1.5" fill={PAL.paperShade} transform="translate(1.5 2)" />
            <rect x={X + cw + 4} y={Y + ch + 4} width="18" height="16" rx="1.5" fill={PAL.white} />
            <path d={`M${X + cw + 5} ${Y + ch + 5}L${r1(X + cw + 13)} ${Y + ch + 12}L${X + cw + 21} ${Y + ch + 5}`} fill="none" stroke={PAL.paperShade} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <rect x={X + cw + 15} y={Y + ch + 7} width="5" height="5" rx="1" fill={PAL.red} />
          </g>
        </Move>
      </g>
    );
  },
} as Record<string, () => JSX.Element>;
