import type { JSX } from 'react';
import { Ground, Move, PAL, Shine, r1 } from '../kit';

/** The depth axis of the slanted view: one unit of depth goes this far right and up. */
const DX = 0.6;
const DY = -0.8;
type P = [number, number];
/** A point of the chair: u across the front, v back into the card, z up. */
const iso = (u: number, v: number, z = 0): P => [r1(22 + u + v * DX), r1(104 - z + v * DY)];
const quad = (...p: P[]) => `M${p.map(([x, y]) => `${x} ${y}`).join('L')}Z`;
const line = (a: P, b: P) => `M${a[0]} ${a[1]}L${b[0]} ${b[1]}`;

const W = 58;
const D = 32;
const Z = 44;
const T = 5;

export default {
  // "de douchestoel": the shower chair — a white plastic seat full of drain holes on four aluminium legs with
  // grey rubber feet, a white back rest and two blue arm rests, in a slanted view; water drops fall on it.
  // On the intro card the drops fall from above (three rounds: water keeps running).
  'w.douchestoel': () => {
    const leg = (u: number, v: number, top: number) => (
      <g key={`${u}-${v}`}>
        <path d={line(iso(u, v, 2), iso(u, v, top))} stroke={PAL.steel} strokeWidth="4.4" />
        <ellipse cx={iso(u, v, 1)[0]} cy={iso(u, v, 1)[1]} rx="4" ry="2.6" fill={PAL.slate} />
      </g>
    );
    return (
      <g strokeLinejoin="round" strokeLinecap="round">
        <Ground cx={64} cy={104} rx={44} ry={4} />
        {/* Back legs and the back rest's posts */}
        {leg(4, D - 4, Z)}
        {leg(W - 4, D - 4, Z)}
        <path d={line(iso(5, D - 2, Z), iso(5, D - 2, Z + 40))} stroke={PAL.steel} strokeWidth="4.4" />
        <path d={line(iso(W - 5, D - 2, Z), iso(W - 5, D - 2, Z + 40))} stroke={PAL.steel} strokeWidth="4.4" />
        {/* The back rest */}
        <path d={quad(iso(2, D - 2, Z + 16), iso(W - 2, D - 2, Z + 16), iso(W - 2, D - 2, Z + 38), iso(2, D - 2, Z + 38))} fill={PAL.paperShade} transform="translate(2 1.5)" />
        <path d={quad(iso(2, D - 2, Z + 16), iso(W - 2, D - 2, Z + 16), iso(W - 2, D - 2, Z + 38), iso(2, D - 2, Z + 38))} fill={PAL.white} />
        <path d={line(iso(10, D - 2, Z + 27), iso(W - 10, D - 2, Z + 27))} stroke={PAL.mist} strokeWidth="2.4" />
        {/* The seat: front and side edges, then the top with its drain holes */}
        <path d={quad(iso(0, 0, Z - T), iso(W, 0, Z - T), iso(W, 0, Z), iso(0, 0, Z))} fill={PAL.paperShade} />
        <path d={quad(iso(W, 0, Z - T), iso(W, D, Z - T), iso(W, D, Z), iso(W, 0, Z))} fill={PAL.mist} />
        <path d={quad(iso(0, 0, Z), iso(W, 0, Z), iso(W, D, Z), iso(0, D, Z))} fill={PAL.white} />
        {[9, 21, 33, 45].map((u) => [9, 21].map((v) => {
          const [cx, cy] = iso(u + 2, v + 2, Z);
          return <ellipse key={`${u}-${v}`} cx={cx} cy={cy} rx="3.2" ry="2" fill={PAL.line} />;
        }))}
        {/* The front legs */}
        {leg(4, 4, Z - T)}
        {leg(W - 4, 4, Z - T)}
        {/* Blue arm rests on posts */}
        {[0, W].map((u) => (
          <g key={u}>
            <path d={line(iso(u, 6, Z), iso(u, 6, Z + 18))} stroke={PAL.steel} strokeWidth="4" />
            <path d={line(iso(u, 2, Z + 20), iso(u, D - 4, Z + 20))} stroke={PAL.skyShade} strokeWidth="8" />
            <path d={line(iso(u, 2, Z + 21), iso(u, D - 4, Z + 21))} stroke={PAL.sky} strokeWidth="5.4" />
          </g>
        ))}
        <Shine d={`M${iso(4, 2, Z).join(' ')}L${iso(30, 2, Z).join(' ')}`} color={PAL.ice} width={2.4} opacity={0.9} />
        {/* Water drops falling on it */}
        <Move kind="from" dy={-22}>
          {[[40, 22], [62, 12], [84, 20], [52, 36], [76, 32]].map(([x, y], i) => (
            <path key={i} d={`M${x} ${y - 6}Q${x + 4} ${y} ${x + 3.4} ${y + 2.4}A3.4 3.4 0 0 1 ${x - 3.4} ${y + 2.4}Q${x - 4} ${y} ${x} ${y - 6}Z`} fill={PAL.sky} />
          ))}
        </Move>
      </g>
    );
  },
} as Record<string, () => JSX.Element>;
