import { useId, type JSX } from 'react';
import { Ground, Move, PAL, Shade, Shine } from '../kit';

/** The depth axis of the slanted view: one unit of depth goes this far right and up. */
const DX = 0.6;
const DY = -0.8;
/** The body: front x, top y, width, height, depth. */
const X = 22;
const Y = 26;
const W = 56;
const H = 78;
const D = 22;
const ox = D * DX;
const oy = D * DY;

export default {
  // "de balenpers": the baler — a tall blue vertical baler in a slanted view: the dark motor and
  // the press cylinder on top, the loading opening with cardboard in it, the bale door below with its
  // two big latches, and a control box with a red emergency stop on the side.
  // On the intro card the press plate goes down in the opening onto the cardboard (three rounds:
  // the machine at work).
  'w.balenpers': () => {
    const id = `balenpers-${useId().replace(/[^a-zA-Z0-9_-]/g, '')}`;
    return (
      <g strokeLinejoin="round" strokeLinecap="round">
        <Ground cx={60} cy={104} rx={46} ry={4.5} />
        {/* The press cylinder and the motor on top */}
        <rect x="44" y="6" width="12" height="20" rx="2" fill={PAL.steel} />
        <rect x="52" y="6" width="4" height="20" fill={PAL.line} />
        <path d={`M${X + 6} ${Y}L${X + 6 + ox} ${Y + oy}H${X + 22 + ox}L${X + 22} ${Y}Z`} fill={PAL.slate} />
        {/* The body: side, top, front */}
        <path d={`M${X + W} ${Y}L${X + W + ox} ${Y + oy}V${Y + H + oy}L${X + W} ${Y + H}Z`} fill={PAL.blueShade} />
        <path d={`M${X} ${Y}L${X + ox} ${Y + oy}H${X + W + ox}L${X + W} ${Y}Z`} fill={PAL.blueLight} />
        <rect x={X} y={Y} width={W} height={H} rx="2" fill={PAL.blue} />
        {/* The loading opening, the cardboard in it, and the press plate coming down */}
        <rect x={X + 6} y={Y + 8} width={W - 12} height="28" rx="2" fill={PAL.slateDark} />
        <clipPath id={id}>
          <rect x={X + 6} y={Y + 8} width={W - 12} height="28" rx="2" />
        </clipPath>
        <g clipPath={`url(#${id})`}>
          <rect x={X + 8} y={Y + 30} width={W - 16} height="6" fill={PAL.card} />
          <rect x={X + 8} y={Y + 33} width={W - 16} height="2" fill={PAL.cardDark} />
          <Move kind="from" dy={-20}>
            <rect x={X + 6} y={Y - 20} width={W - 12} height="48" fill={PAL.steel} />
            <rect x={X + 6} y={Y + 24} width={W - 12} height="6" fill={PAL.slate} />
          </Move>
        </g>
        <rect x={X + 4} y={Y + 6} width={W - 8} height="3.6" rx="1.6" fill={PAL.yellow} />
        {/* The bale door with its latches */}
        <rect x={X + 6} y={Y + 42} width={W - 12} height="30" rx="2" fill={PAL.blueShade} />
        <rect x={X + 8} y={Y + 44} width={W - 16} height="26" rx="2" fill={PAL.blue} />
        <rect x={X + 12} y={Y + 50} width="8" height="14" rx="2" fill={PAL.slate} />
        <rect x={X + 36} y={Y + 50} width="8" height="14" rx="2" fill={PAL.slate} />
        {/* The control box and its emergency stop */}
        <path d={`M${X + W + 3} ${Y + 18}L${X + W + 11} ${Y + 12}V${Y + 34}L${X + W + 3} ${Y + 40}Z`} fill={PAL.mist} />
        <circle cx={X + W + 7} cy={Y + 22} r="3.4" fill={PAL.red} />
        <circle cx={X + W + 7} cy={Y + 32} r="2.2" fill={PAL.ok} />
        <Shade color="#000" opacity={0.12} at={[X + W, Y + H / 2, 6, H]}>
          <rect x={X} y={Y + H - 4} width={W} height="4" fill={PAL.blueShade} />
        </Shade>
        <Shine d={`M${X + 3} ${Y + 44}V${Y + 70}`} width={3} opacity={0.5} />
      </g>
    );
  },
} as Record<string, () => JSX.Element>;
