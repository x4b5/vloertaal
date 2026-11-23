import type { JSX } from 'react';
import { Ground, PAL, Shine } from '../kit';

/** A sandwich standing up: the slice behind, the filling peeking out over it, the front slice (crust, crumb). */
const toast = (x: number, y: number, rot: number, filling: string) => {
  const slice = 'M2 28V11Q-2 2 7 1Q13 -2 18 1Q27 2 23 11V28Z';
  return (
    <g transform={`translate(${x} ${y}) rotate(${rot} 12 28)`}>
      <path d={slice} fill={PAL.cardDark} transform="translate(3 -3)" />
      <path d="M1 9Q5 3 9 7Q13 2 17 7Q21 3 25 9V14H1Z" fill={filling} />
      <path d={slice} fill={PAL.cardShade} />
      <path d={slice} fill="#f0c48a" transform="translate(3.6 3.6) scale(0.7)" />
    </g>
  );
};

export default {
  // "de broodtrommel": the lunch box — an open blue plastic box seen from the front and a little above, its
  // lid standing open behind it; inside two sandwiches (bread with cheese and lettuce) and a red apple.
  'w.broodtrommel': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      <Ground cx={62} cy={104} rx={48} ry={4} />
      {/* The lid, hinged open at the back */}
      <path d="M30 52L100 52L104 20Q104 16 100 16H34Q30 16 30 20Z" fill={PAL.ice} />
      <path d="M36 22H98L96 48H38Z" fill={PAL.blueLight} />
      {/* The inside of the box */}
      <path d="M16 68L30 52H100L86 68Z" fill={PAL.blueShade} />
      {/* The two sandwiches, standing up, and the apple */}
      {toast(22, 44, -8, PAL.yellow)}
      {toast(44, 42, 6, PAL.leaf)}
      <circle cx="80" cy="60" r="10" fill={PAL.red} />
      <circle cx="74" cy="60" r="8.6" fill={PAL.red} />
      <path d="M80 52Q86 58 82 68Q90 64 88 56Q86 51 80 52Z" fill={PAL.redShade} />
      <path d="M77 52V46" stroke={PAL.brown} strokeWidth="2.4" />
      <path d="M78 48Q84 42 88 46Q83 50 78 48Z" fill={PAL.leaf} />
      <Shine d="M70 56Q71 53 74 52" width={2.4} opacity={0.7} />
      {/* The box: front and side */}
      <path d="M86 68L100 52V84L86 100Z" fill={PAL.blueShade} />
      <path d="M16 68H86V96Q86 100 82 100H20Q16 100 16 96Z" fill={PAL.blue} />
      <path d="M16 68H86" stroke={PAL.blueLight} strokeWidth="3" />
      <rect x="44" y="72" width="14" height="5" rx="2" fill={PAL.blueShade} />
      <Shine d="M21 76V92" width={2.6} opacity={0.5} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
