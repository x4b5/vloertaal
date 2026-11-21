import type { JSX } from 'react';
import { Ground, PAL, Shine, r1 } from '../kit';

/** The depth axis of the slanted view: one unit of depth goes this far right and up. */
const DX = 0.6;
const DY = -0.8;

/** The bench: front left corner of the top's front edge, length, depth, top thickness, leg height. */
const OX = 12;
const OY = 72;
const L = 78;
const D = 22;
const T = 6;
const LEG = 31;
/** The back panel (pegboard): its height above the top. */
const PANEL = 36;

/** The light wooden top: lighter than cardboard, a step of the wood colour. */
const BEECH = '#f0c48a';

type P = [number, number];
const iso = (u: number, v: number, z = 0): P => [r1(OX + u + v * DX), r1(OY - z + v * DY)];
const quad = (...p: P[]) => `M${p.map(([x, y]) => `${x} ${y}`).join('L')}Z`;

export default {
  // "de montagetafel": the assembly workbench — a sturdy bench with a light wooden top on blue steel legs and a lower
  // shelf, a grey pegboard at the back with a spanner, a screwdriver and a hammer hanging on it, a lamp on an arm
  // over the top and a blue part lying on the top.
  'w.montagetafel': () => {
    const [px, py] = iso(0, D, 0);
    const pw = L;
    const peg = Array.from({ length: 5 }, (_, r) => Array.from({ length: 9 }, (_, c) => [px + 6 + c * 8.6, py - PANEL + 5 + r * 7.2]));
    return (
      <g strokeLinejoin="round">
        <Ground cx={64} cy={104} rx={48} ry={4} />
        {/* The back legs */}
        <rect x={iso(2, D)[0]} y={iso(2, D)[1]} width="5" height={LEG - 14} fill={PAL.blueShade} />
        <rect x={iso(L - 6, D)[0]} y={iso(2, D)[1]} width="5" height={LEG - 14} fill={PAL.blueShade} />
        {/* The pegboard: its depth on the right, then the board with its holes */}
        <rect x={px + 3} y={py - PANEL - 3} width={pw} height={PANEL} rx="2" fill={PAL.steel} />
        <rect x={px} y={py - PANEL} width={pw} height={PANEL} rx="2" fill={PAL.mist} />
        {peg.flat().map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="1.1" fill={PAL.line} />
        ))}
        {/* The tools on the board: a spanner, a screwdriver, a hammer */}
        <path d={`M${px + 12} ${py - 28}V${py - 10}`} stroke={PAL.steel} strokeWidth="4" strokeLinecap="round" />
        <circle cx={px + 12} cy={py - 29} r="4.4" fill={PAL.steel} />
        <circle cx={px + 12} cy={py - 31} r="2" fill={PAL.mist} />
        <path d={`M${px + 26} ${py - 30}V${py - 21}`} stroke={PAL.red} strokeWidth="5.4" strokeLinecap="round" />
        <path d={`M${px + 26} ${py - 21}V${py - 10}`} stroke={PAL.slate} strokeWidth="2" strokeLinecap="round" />
        <path d={`M${px + 40} ${py - 26}V${py - 8}`} stroke={PAL.wood} strokeWidth="4" strokeLinecap="round" />
        <rect x={px + 33} y={py - 31} width="14" height="6" rx="1.5" fill={PAL.slate} />
        {/* The lamp: an arm from the board's top right, the hood over the bench, the light */}
        <path d={`M${px + pw - 8} ${py - PANEL}L${px + pw - 14} ${py - PANEL - 10}L${px + pw - 32} ${py - PANEL - 6}`} stroke={PAL.slate} strokeWidth="3.2" strokeLinecap="round" fill="none" />
        <path d={`M${px + pw - 42} ${py - PANEL + 5}L${px + pw - 38} ${py - PANEL - 7}H${px + pw - 28}L${px + pw - 24} ${py - PANEL + 5}Z`} fill={PAL.yellow} />
        <path d={`M${px + pw - 30} ${py - PANEL - 7}L${px + pw - 24} ${py - PANEL + 5}H${px + pw - 29}Z`} fill={PAL.yellowShade} />
        <ellipse cx={px + pw - 33} cy={py - PANEL + 5} rx="9" ry="2" fill={PAL.yellowShine} />
        {/* The lower shelf */}
        <path d={quad(iso(2, 0, -LEG + 10), iso(L - 2, 0, -LEG + 10), iso(L - 2, D, -LEG + 10), iso(2, D, -LEG + 10))} fill={PAL.cardShade} />
        <path d={quad(iso(2, 0, -LEG + 10), iso(L - 2, 0, -LEG + 10), iso(L - 2, 0, -LEG + 7), iso(2, 0, -LEG + 7))} fill={PAL.cardDark} />
        {/* The top: right side, top surface, front edge */}
        <path d={quad(iso(L, 0, 0), iso(L, D, 0), iso(L, D, T), iso(L, 0, T))} fill={PAL.cardDark} />
        <path d={quad(iso(0, 0, T), iso(L, 0, T), iso(L, D, T), iso(0, D, T))} fill={BEECH} />
        <path d={quad(iso(0, 0, 0), iso(L, 0, 0), iso(L, 0, T), iso(0, 0, T))} fill={PAL.card} />
        <Shine d={`M${iso(4, 0, T - 2.4).join(' ')}L${iso(36, 0, T - 2.4).join(' ')}`} width={2} opacity={0.5} />
        {/* The part on the top */}
        <path d={quad(iso(44, 6, T), iso(62, 6, T), iso(62, 16, T), iso(44, 16, T))} fill={PAL.blueShade} transform="translate(0 -4)" />
        <path d={quad(iso(44, 6, T), iso(62, 6, T), iso(62, 6, T + 4), iso(44, 6, T + 4))} fill={PAL.blue} />
        <path d={quad(iso(44, 6, T + 4), iso(62, 6, T + 4), iso(62, 16, T + 4), iso(44, 16, T + 4))} fill={PAL.blueLight} />
        <ellipse cx={iso(53, 11, T + 4)[0]} cy={iso(53, 11, T + 4)[1]} rx="3" ry="1.6" fill={PAL.blueShade} />
        {/* The front legs */}
        <rect x={iso(1, 0)[0]} y={OY} width="6" height={LEG} fill={PAL.blue} />
        <rect x={iso(L - 7, 0)[0]} y={OY} width="6" height={LEG} fill={PAL.blue} />
        <rect x={iso(L - 3, 0)[0]} y={OY} width="2" height={LEG} fill={PAL.blueShade} />
      </g>
    );
  },
} as Record<string, () => JSX.Element>;
