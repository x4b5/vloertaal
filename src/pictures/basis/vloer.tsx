import type { JSX } from 'react';
import { PAL, r1 } from '../kit';

/** A point on the floor seen from above at a slant: u to the right-front, v to the left-front. */
const fl = (u: number, v: number): [number, number] => [r1(60 + u * 0.95 - v * 0.95), r1(48 + u * 0.5 + v * 0.5)];
const quad = (...p: [number, number][]) => `M${p.map(([x, y]) => `${x} ${y}`).join('L')}Z`;

export default {
  // "de vloer": the floor — the corner of an empty room, seen from above at a slant: two pale low
  // walls behind, and the big wooden plank floor in front, which is the subject.
  'w.vloer': () => {
    const N = 6;
    const S = 56;
    const planks = Array.from({ length: N }, (_, i) => {
      const a = (S / N) * i;
      const b = (S / N) * (i + 1);
      return <path key={i} d={quad(fl(0, a), fl(S, a), fl(S, b), fl(0, b))} fill={i % 2 ? PAL.card : '#f0c48a'} />;
    });
    return (
      <g strokeLinejoin="round" strokeLinecap="round">
        {/* The two walls of the corner */}
        <path d={quad(fl(0, S), fl(0, 0), [60, 12], [fl(0, S)[0], fl(0, S)[1] - 36])} fill={PAL.paper} />
        <path d={quad(fl(0, 0), fl(S, 0), [fl(S, 0)[0], fl(S, 0)[1] - 36], [60, 12])} fill={PAL.paperShade} />
        {/* A door in the right wall */}
        <path d={quad(fl(20, 0), fl(34, 0), [fl(34, 0)[0], fl(34, 0)[1] - 26], [fl(20, 0)[0], fl(20, 0)[1] - 26])} fill={PAL.sky} />
        {/* The skirting boards */}
        <path d={`M${fl(0, S).join(' ')}L${fl(0, 0).join(' ')}L${fl(S, 0).join(' ')}`} fill="none" stroke={PAL.mist} strokeWidth="5" />
        {/* The floor: thickness edges, then the planks */}
        <path d={quad(fl(0, S), fl(S, S), [fl(S, S)[0], fl(S, S)[1] + 7], [fl(0, S)[0], fl(0, S)[1] + 7])} fill={PAL.cardShade} />
        <path d={quad(fl(S, S), fl(S, 0), [fl(S, 0)[0], fl(S, 0)[1] + 7], [fl(S, S)[0], fl(S, S)[1] + 7])} fill={PAL.cardDark} />
        {planks}
        {/* Plank joints */}
        <path d={[14, 34, 22, 42, 10, 30].map((u, i) => `M${fl(u, (S / N) * i).join(' ')}L${fl(u, (S / N) * (i + 1)).join(' ')}`).join('')} stroke={PAL.cardShade} strokeWidth="1.6" />
        <path d={`M${fl(6, 4).join(' ')}L${fl(24, 4).join(' ')}`} stroke={PAL.white} strokeWidth="3" opacity=".5" />
      </g>
    );
  },
} as Record<string, () => JSX.Element>;
