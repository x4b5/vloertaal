import type { JSX } from 'react';
import { Ground, Move, PAL, SKIN, Shade, Shine } from '../kit';

export default {
  // "meerijden": to ride along (in someone else's car) — a red car seen from the front: behind the
  // windscreen Henk drives (his hands on the wheel) and Jada rides along next to him, smiling. On the
  // intro card the car comes towards you down the road (once, slowly: a vehicle comes in).
  'w.meerijden': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      <Ground cx={60} cy={105} rx={48} ry={4} />
      <Move kind="slow" dy={-24} once>
        {/* The wheels under the body */}
        <rect x="18" y="88" width="16" height="16" rx="4" fill={PAL.slateDark} />
        <rect x="86" y="88" width="16" height="16" rx="4" fill={PAL.slateDark} />
        {/* The body */}
        <Shade color={PAL.redShade} opacity={1} at={[110, 70, 18, 40]}>
          <path d="M12 94V70Q12 62 20 60L28 34Q30 26 38 26H82Q90 26 92 34L100 60Q108 62 108 70V94Q108 98 104 98H16Q12 98 12 94Z" fill={PAL.red} />
        </Shade>
        {/* The windscreen with the two people */}
        <path d="M33 32H87L95 60H25Z" fill={PAL.ice} />
        {/* Jada (rides along, left) */}
        <path d="M30 60Q31 50 44 50Q57 50 58 60Z" fill={PAL.orange} />
        <circle cx="44" cy="42" r="8" fill={SKIN.jada[0]} />
        <path d="M35.4 41Q35 32 44 32Q53 32 52.6 41Q48 36 35.4 41Z" fill={PAL.brown} />
        <path d="M40 45Q44 48.5 48 45" fill="none" stroke={PAL.ink} strokeWidth="1.6" />
        {/* Henk (drives, right) with the wheel */}
        <path d="M62 60Q63 50 76 50Q89 50 90 60Z" fill={PAL.navy} />
        <circle cx="76" cy="42" r="8" fill={SKIN.henk[0]} />
        <path d="M67.4 40Q67.6 33 76 33Q84.4 33 84.6 40Q80 37 67.4 40Z" fill={PAL.steel} />
        <path d="M65 60A11 7 0 0 1 87 60" fill="none" stroke={PAL.slateDark} strokeWidth="4" />
        <circle cx="68" cy="56" r="3" fill={SKIN.henk[0]} />
        <circle cx="84" cy="56" r="3" fill={SKIN.henk[0]} />
        <Shine d="M36 38L38 34" width={3} opacity={0.8} />
        {/* The front: lights, grille, bumper */}
        <ellipse cx="26" cy="72" rx="7" ry="5" fill={PAL.yellowLight} />
        <ellipse cx="94" cy="72" rx="7" ry="5" fill={PAL.yellowLight} />
        <rect x="40" y="68" width="40" height="10" rx="4" fill={PAL.slate} />
        <rect x="12" y="84" width="96" height="8" rx="4" fill={PAL.redShade} />
        <rect x="50" y="85" width="20" height="6" rx="1.6" fill={PAL.paper} />
      </Move>
    </g>
  ),
} as Record<string, () => JSX.Element>;
