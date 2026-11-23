import type { JSX } from 'react';
import { Ground, Move, PAL, Shade, Shine } from '../kit';

/** The boot's shaded side: one step under coffee brown. */
const BROWN_DARK = '#4f2e18';

export default {
  // "de voetpedaal": the foot pedal — a heavy industrial foot switch on the floor, seen from the side: a big yellow hood on a dark
  // base, its dark opening at the front with the ribbed pedal inside, a black cable out of the back, and a brown work
  // boot stepping in from the left with its toe in the opening, on the pedal.
  'w.voetpedaal': () => (
    <g strokeLinejoin="round">
      <Ground cx={60} cy={103} rx={50} ry={4.5} />
      {/* The cable: out of the back, along the floor */}
      <path d="M104 88C112 88 112 100 104 103H92" stroke={PAL.slateDark} strokeWidth="4.4" strokeLinecap="round" fill="none" />
      {/* The base */}
      <rect x="36" y="90" width="70" height="13" rx="3" fill={PAL.slateDark} />
      {/* The hood: a big yellow shell over the base, its right side shaded */}
      <Shade color={PAL.yellowShade} opacity={1} at={[110, 64, 20, 44]}>
        <path d="M40 92V50Q40 26 66 26H86Q108 26 108 50V92Z" fill={PAL.yellow} />
      </Shade>
      {/* The opening at the front: dark inside, the ribbed pedal on the floor of it */}
      <path d="M46 92V56Q46 38 62 38Q78 38 78 56V92Z" fill={PAL.slateDark} />
      <path d="M46 92V84L78 80V92Z" fill={PAL.slate} />
      <path d="M50 87.4L75 84.4" stroke={PAL.steel} strokeWidth="2" strokeLinecap="round" />
      {/* The boot: sole, upper (shaded on the right), collar, laces; its toe in the opening on the pedal */}
      <Move kind="from" dy={-20}>
      <g transform="translate(20 100) rotate(-12) scale(0.95)">
        <rect x="-2" y="-7" width="58" height="7" rx="3" fill={PAL.ink} />
        <Shade color={BROWN_DARK} opacity={1} at={[58, -14, 14, 30]}>
          <path d="M0 -7V-44Q0 -48 5 -48H22Q26 -48 26 -44V-32Q29 -24 40 -22H46Q56 -21 56 -7Z" fill={PAL.brown} />
        </Shade>
        <rect x="-1" y="-52" width="28" height="8" rx="3.5" fill={BROWN_DARK} />
        <path d="M27 -36L20 -36M29 -29L22 -30M33 -24L27 -26" stroke={PAL.card} strokeWidth="2" strokeLinecap="round" />
        <Shine d="M4 -14V-38" color={PAL.card} width={2.6} opacity={0.6} />
      </g>
      </Move>
      {/* The hood's front rim again, over the boot: the toe goes into the opening */}
      <Shade color={PAL.yellowShade} opacity={1} at={[110, 64, 20, 44]}>
        <path d="M40 92V50Q40 26 66 26H86Q108 26 108 50V92ZM46 92V56Q46 38 62 38Q78 38 78 56V92Z" fill={PAL.yellow} fillRule="evenodd" />
      </Shade>
      <Shine d="M50 34Q56 31 66 31" color={PAL.yellowShine} width={3.4} opacity={0.9} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
