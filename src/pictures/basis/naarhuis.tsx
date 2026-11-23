import type { JSX } from 'react';
import { CurveArrow, Ground, Move, PAL, SKIN, Shade, Shine } from '../kit';

export default {
  // "naar huis gaan": to go home — Jada in her work clothes walks along the path to her house (white
  // walls, red roof); a big curved arrow goes from her to the front door. On the intro card she walks
  // in from the left once and stops on the path.
  'w.naarhuis': () => {
    const [skin, skinShade] = SKIN.jada;
    return (
      <g strokeLinejoin="round">
        <Ground cx={60} cy={105} rx={50} ry={4} />
        {/* The house */}
        <Shade color={PAL.paperShade} opacity={1} at={[110, 84, 10, 30]}>
          <rect x="64" y="62" width="42" height="43" rx="2" fill={PAL.paper} />
        </Shade>
        <path d="M58 65L85 42L112 65Z" fill={PAL.clay} stroke={PAL.clay} strokeWidth="5" />
        <path d="M85 42L112 65H85Z" fill={PAL.clayShade} stroke={PAL.clayShade} strokeWidth="5" />
        <rect x="70" y="72" width="12" height="11" rx="1.5" fill={PAL.sky} />
        <rect x="88" y="80" width="12" height="25" rx="1.5" fill={PAL.wood} />
        <circle cx="97" cy="93" r="1.4" fill={PAL.yellow} />
        <Shine d="M66 62L80 50" width={3} opacity={0.5} />
        {/* The way home */}
        <CurveArrow from={[22, 36]} to={[80, 26]} bend={16} color={PAL.sky} width={7} head={12} />
        {/* Jada, walking to the right */}
        <Move kind="from" dx={-30} once>
          <g transform="translate(34 104) scale(1.45) translate(-34 -104)">
            <path d="M32 92L26 103M36 92L42 103" stroke={PAL.blue} strokeWidth="5.4" strokeLinecap="round" />
            <path d="M30 74L24 86" stroke={PAL.yellowShade} strokeWidth="4.6" strokeLinecap="round" />
            <Shade color={PAL.yellowShade} opacity={1} at={[42, 84, 4, 12]}>
              <rect x="27" y="72" width="14" height="22" rx="6" fill={PAL.yellow} />
            </Shade>
            <path d="M38 74L44 85" stroke={PAL.yellow} strokeWidth="4.6" strokeLinecap="round" />
            <circle cx="34" cy="65" r="6.5" fill={skin} />
            <circle cx="36.4" cy="66" r="4" fill={skinShade} opacity=".45" />
            <path d="M27.5 64Q27 56 34 56Q41 56 40.5 63Q36 60 27.5 64Z" fill={PAL.ink} />
          </g>
        </Move>
      </g>
    );
  },
} as Record<string, () => JSX.Element>;
