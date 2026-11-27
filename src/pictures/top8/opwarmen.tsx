import type { JSX } from 'react';
import { CastHead } from '../../components/Characters';
import { Move, PAL, SKIN, Shade } from '../kit';

/** A rising curl of steam (a wavy line) from (x, y) upwards. */
const steam = (x: number, y: number) => `M${x} ${y}q-4 -4 0 -8t0 -8t0 -8`;

export default {
  // "opwarmen": to warm up (in a warm place, after working in the cold) — Jada in her thick navy thermal
  // jacket and a red knitted hat holds a hot drink in both hands, steam rising from it, in the warm
  // break room; behind her a window white with frost: outside it is freezing. On the intro card the steam
  // keeps rising (three rounds).
  'w.opwarmen': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      {/* The frosted window behind her */}
      <rect x="10" y="12" width="46" height="46" rx="3" fill={PAL.mist} />
      <rect x="14" y="16" width="38" height="38" rx="1.6" fill={PAL.ice} />
      <path d="M14 22Q22 18 26 16H14ZM52 48Q44 52 40 54H52ZM14 54Q18 46 24 54Z" fill={PAL.white} opacity=".9" />
      <path d="M33 16V54M14 35H52" stroke={PAL.mist} strokeWidth="3" />
      <path d="M23 25V33M19 29H27M20.2 26.2L25.8 31.8M25.8 26.2L20.2 31.8" stroke={PAL.white} strokeWidth="1.6" />
      {/* Jada in her thermal jacket */}
      <Shade color={PAL.navyShade} opacity={1} at={[104, 92, 12, 30]}>
        <path d="M34 120L36 92Q38 76 56 74H84Q102 76 104 92L106 120Z" fill={PAL.navy} />
      </Shade>
      <path d="M44 88V120M96 88V120M60 76Q70 84 80 76" fill="none" stroke={PAL.navyShade} strokeWidth="2" />
      <path d="M56 74H84L80 80H60Z" fill={PAL.slate} />
      <g transform="translate(70 76) scale(0.52) translate(-60 -96)">
        <CastHead who="jada" expr="pleased" squint gaze={[0, 0]} bold />
      </g>
      {/* The knitted hat */}
      <path d="M53 40Q53 18 70 18Q87 18 87 40Z" fill={PAL.red} />
      <path d="M77 20Q87 24 87 40H78Z" fill={PAL.redShade} />
      <rect x="51" y="36" width="38" height="8" rx="3.5" fill={PAL.redShade} />
      <path d="M58 37V43M64 37V43M70 37V43M76 37V43M82 37V43" stroke={PAL.red} strokeWidth="1.6" />
      <circle cx="70" cy="16" r="5" fill={PAL.redLight} />
      {/* The steam from the drink */}
      <Move kind="from" dy={14}>
        <path d={`${steam(84, 70)}${steam(94, 68)}`} fill="none" stroke={PAL.line} strokeWidth="3" />
      </Move>
      {/* The mug in both hands */}
      <path d="M100 90Q106 90 106 96Q106 102 100 102" fill="none" stroke={PAL.orangeShade} strokeWidth="3.4" />
      <Shade color={PAL.orangeShade} opacity={1} at={[102, 96, 5, 14]}>
        <rect x="80" y="82" width="22" height="24" rx="4" fill={PAL.orange} />
      </Shade>
      <ellipse cx="91" cy="82.6" rx="10" ry="2.4" fill={PAL.brown} />
      <circle cx="80" cy="98" r="5.4" fill={SKIN.jada[0]} />
      <circle cx="102" cy="99" r="5" fill={SKIN.jada[1]} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
