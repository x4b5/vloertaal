import type { JSX } from 'react';
import { Ground, PAL, Shine } from '../kit';

/** The three courses as three dots under the dish: this one (the last) is filled. */
const courses = (n: number) => [48, 60, 72].map((x, i) => <circle key={x} cx={x} cy={106} r={i === n ? 4.6 : 3.2} fill={i === n ? PAL.orange : PAL.mist} />);

export default {
  // "het nagerecht": the dessert — a glass dish on a stem with three scoops of ice cream (pink, white, brown),
  // a red cherry on top and a wafer; under it three dots for the three courses, the last one filled orange.
  'w.nagerecht': () => (
    <g strokeLinejoin="round">
      <Ground cx={60} cy={94} rx={30} ry={4} />
      {/* The stem and foot */}
      <path d="M57 70H63V88H57Z" fill={PAL.mist} />
      <ellipse cx="60" cy="90" rx="20" ry="5" fill={PAL.mist} />
      <ellipse cx="60" cy="89" rx="20" ry="4" fill={PAL.paper} />
      {/* The scoops */}
      <circle cx="44" cy="50" r="14" fill={PAL.redLight} />
      <circle cx="76" cy="50" r="14" fill={PAL.brown} />
      <circle cx="60" cy="38" r="15" fill={PAL.paper} />
      <path d="M71 34A15 15 0 0 1 60 53A15 15 0 0 0 72 40Z" fill={PAL.paperShade} />
      <Shine d="M50 34Q52 28 58 26" width={3} opacity={0.9} />
      {/* The wafer */}
      <path d="M80 36L98 14L104 20L86 42Z" fill={PAL.card} />
      <path d="M86 26L94 34M92 20L100 26" stroke={PAL.cardShade} strokeWidth="1.6" />
      {/* The cherry */}
      <path d="M60 22Q62 14 68 10" fill="none" stroke={PAL.greenShade} strokeWidth="2" strokeLinecap="round" />
      <circle cx="60" cy="24" r="6" fill={PAL.red} />
      <circle cx="58" cy="22" r="1.8" fill={PAL.white} opacity=".7" />
      {/* The glass dish */}
      <path d="M26 52H94Q92 74 60 74Q28 74 26 52Z" fill={PAL.ice} opacity=".85" />
      <path d="M80 52H94Q92 74 60 74Q80 68 80 52Z" fill={PAL.sky} opacity=".35" />
      <Shine d="M32 58Q36 66 44 69" width={3} opacity={0.9} />
      {courses(2)}
    </g>
  ),
} as Record<string, () => JSX.Element>;
