import type { JSX } from 'react';
import { Ground, Move, PAL, Shade, Shine, r1 } from '../kit';

/** The wheel stands with its face turned to the right: a face circle of radius R squashed to SX across. */
const CX = 40;
const CY = 60;
const R = 40;
const SX = 0.5;
/** The tread's thickness, going to the left behind the face. */
const T = 16;
const P = (a: number, r: number): [number, number] => {
  const t = (a * Math.PI) / 180;
  return [r1(CX + Math.cos(t) * r * SX), r1(CY + Math.sin(t) * r)];
};
/** The wheel bolts on their circle; the wrench sits on the one at the right. */
const BOLTS = [-90, -18, 54, 126, 198];
const RB = 11;

/** The darker side of the black parts. */
const INK = '#1b232a';

export default {
  // "de slagmoersleutel": the impact wrench — a red-and-black cordless impact wrench with its battery
  // under the grip, its steel socket on a wheel bolt of a wheel that stands turned towards it.
  // On the intro card the wrench comes in from the right and sets its socket on the bolt.
  'w.slagmoersleutel': () => {
    const [bx, by] = P(-18, RB);
    return (
      <g strokeLinejoin="round">
        <Ground cx={60} cy={103} rx={50} ry={4.5} />
        {/* The wheel: the tread behind, the sidewall, the rim */}
        <ellipse cx={CX - T} cy={CY} rx={R * SX} ry={R} fill={INK} />
        <rect x={CX - T} y={CY - R} width={T} height={R * 2} fill={PAL.slateDark} />
        <ellipse cx={CX} cy={CY} rx={R * SX} ry={R} fill={PAL.slate} />
        <ellipse cx={CX} cy={CY} rx={26 * SX} ry={26} fill={PAL.mist} />
        <ellipse cx={CX + 1} cy={CY} rx={21 * SX} ry={21} fill={PAL.steel} />
        <ellipse cx={CX} cy={CY} rx={15 * SX} ry={15} fill={PAL.mist} />
        {BOLTS.map((a) => {
          const [x, y] = P(a, RB);
          return <ellipse key={a} cx={x} cy={y} rx={2.8} ry={3.4} fill={PAL.slate} />;
        })}
        <path d={`M${CX - T - 4} ${CY - 22}Q${CX - T - 9} ${CY} ${CX - T - 4} ${CY + 22}`} stroke={PAL.slate} strokeWidth="2.4" fill="none" strokeLinecap="round" />
        {/* The wrench, its nose to the left on the bolt */}
        <Move kind="from" dx={22}>
        <g transform={`translate(${bx} ${by})`}>
          {/* The socket and the anvil */}
          <rect x="0" y="-6.5" width="14" height="13" rx="2.5" fill={PAL.mist} />
          <rect x="0" y="1" width="14" height="5.5" rx="2" fill={PAL.steel} />
          {/* The black nose (the hammer case) */}
          <rect x="12" y="-10" width="14" height="20" rx="4" fill={PAL.slateDark} />
          {/* The grip, slanting down and back, with the trigger */}
          <path d="M48 6L56 34" stroke={PAL.slateDark} strokeWidth="14" strokeLinecap="round" />
          <path d="M37 10Q36 17 41 21" stroke={PAL.slateDark} strokeWidth="5" strokeLinecap="round" fill="none" />
          {/* The red motor body */}
          <Shade color={PAL.redShade} opacity={1} at={[30, 14, 40, 8]}>
            <rect x="22" y="-13" width="44" height="26" rx="11" fill={PAL.red} />
          </Shade>
          <rect x="56" y="-9" width="9" height="18" rx="4" fill={PAL.slateDark} />
          <Shine d="M30 -8H50" width={3} opacity={0.6} />
          {/* The battery pack under the grip */}
          <rect x="40" y="34" width="32" height="13" rx="3" fill={PAL.slateDark} />
          <rect x="40" y="43" width="32" height="4" rx="2" fill={INK} />
          <rect x="44" y="37" width="20" height="3.5" rx="1.5" fill={PAL.red} />
        </g>
        </Move>
        <Shine d={`M${P(196, R - 4).join(' ')}Q${P(225, R - 4).join(' ')} ${P(245, R - 4).join(' ')}`} color={PAL.steel} width={3} opacity={0.9} />
      </g>
    );
  },
} as Record<string, () => JSX.Element>;
