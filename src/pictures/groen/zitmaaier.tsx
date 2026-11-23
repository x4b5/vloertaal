import type { JSX } from 'react';
import { Ground, Move, PAL, SKIN, Shade, Shine } from '../kit';

export default {
  // "de zitmaaier": the ride-on mower — a small green tractor-like mower from the side, a worker in a
  // hi-vis shirt sitting on its yellow seat with the hands on the steering wheel, the grey cutting deck
  // under its belly, a big wheel at the back and a small one at the front.
  // On the intro card the mower drives in from the left and stops: once, slowly (a vehicle drives, 23 November 2026).
  'w.zitmaaier': () => {
    const [s, sh] = SKIN.amina;
    return (
      <g strokeLinejoin="round" strokeLinecap="round">
        <Ground cx={60} cy={105} rx={48} ry={4} />
        <Move kind="slow" dx={-40} once>
        {/* The cutting deck under the belly */}
        <rect x="40" y="88" width="52" height="11" rx="4" fill={PAL.steel} />
        <rect x="40" y="94" width="52" height="5" rx="2.5" fill={PAL.slate} opacity=".5" />
        {/* The green body: the hood at the front, the low back under the seat */}
        <Shade color={PAL.greenShade} opacity={1} at={[106, 80, 16, 26]}>
          <path d="M20 88V74Q20 68 26 68H62L66 58Q68 54 74 54H96Q104 54 106 62L108 82Q108 90 100 90H20Z" fill={PAL.green} />
        </Shade>
        <path d="M74 62H98" stroke={PAL.lime} strokeWidth="3" opacity=".7" />
        {/* The steering column and the wheel */}
        <path d="M70 56L62 40" stroke={PAL.slateDark} strokeWidth="4" />
        <path d="M54 40H70" stroke={PAL.slateDark} strokeWidth="6" />
        {/* The worker: legs to the footrest, body, arm to the wheel, head with a cap */}
        <path d="M34 62L52 62L56 80" fill="none" stroke={PAL.navy} strokeWidth="10" />
        <rect x="51" y="78" width="14" height="7" rx="3.5" fill={PAL.slateDark} />
        <path d="M32 62L32 38" stroke={PAL.orange} strokeWidth="15" />
        <path d="M37 37L37 63" stroke={PAL.orangeShade} strokeWidth="5" />
        <path d="M33 40L56 42" stroke={PAL.orangeShade} strokeWidth="6.5" />
        <circle cx="58" cy="41" r="4.2" fill={s} />
        <circle cx="33" cy="22" r="9.5" fill={s} />
        <circle cx="36" cy="23.5" r="5.8" fill={sh} opacity=".45" />
        <path d="M23 20Q24 11 33 11Q42 11 43 20Z" fill={PAL.yellow} />
        <path d="M40 19H47" stroke={PAL.yellowShade} strokeWidth="3.4" />
        {/* The yellow seat with its back */}
        <rect x="22" y="62" width="26" height="7" rx="3.5" fill={PAL.yellow} />
        <rect x="18" y="44" width="7" height="24" rx="3.5" fill={PAL.yellowShade} />
        {/* The wheels: big at the back, small at the front */}
        <circle cx="32" cy="90" r="15" fill={PAL.slateDark} />
        <circle cx="32" cy="90" r="6" fill={PAL.yellow} />
        <circle cx="98" cy="96" r="9" fill={PAL.slateDark} />
        <circle cx="98" cy="96" r="3.6" fill={PAL.yellow} />
        <Shine d="M24 74Q26 71 34 71" width={3} opacity={0.5} />
        </Move>
      </g>
    );
  },
} as Record<string, () => JSX.Element>;
