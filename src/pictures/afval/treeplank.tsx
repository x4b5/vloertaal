import type { JSX } from 'react';
import { Ground, PAL, SKIN, Shade, Shine } from '../kit';

export default {
  // "de treeplank": the back step — the back of a bin lorry, close up: the green body, the dark loading hopper,
  // and sticking out at the back a yellow step with dark grip lines; a loader in hi-vis orange stands on it,
  // one hand on the grab bar.
  'w.treeplank': () => {
    const [s, sh] = SKIN.jada;
    return (
      <g strokeLinejoin="round" strokeLinecap="round">
        <Ground cx={56} cy={104} rx={50} ry={4} />
        {/* The green body (cut off on the left) */}
        <Shade color={PAL.greenShade} opacity={1} at={[64, 60, 8, 40]}>
          <path d="M8 84V30Q8 20 18 20H58V84Z" fill={PAL.green} />
        </Shade>
        <rect x="8" y="62" width="50" height="6" fill={PAL.yellow} />
        <Shine d="M14 34Q14 26 22 26H40" width={3.4} opacity={0.5} />
        {/* The hopper at the back */}
        <path d="M58 22L72 28L80 86H58Z" fill={PAL.slate} />
        <path d="M72 28L80 86H74Z" fill={PAL.slateDark} />
        <rect x="8" y="84" width="74" height="7" rx="2" fill={PAL.slateDark} />
        <circle cx="30" cy="94" r="9" fill={PAL.ink} />
        <circle cx="30" cy="94" r="3.6" fill={PAL.steel} />
        {/* The grab bar */}
        <path d="M86 30V82" stroke={PAL.steel} strokeWidth="4.5" />
        <path d="M80 30H86M80 82H86" stroke={PAL.steel} strokeWidth="4" />
        {/* The loader standing on the step, side on */}
        <path d="M98 54L97 70L98 84" fill="none" stroke={PAL.navy} strokeWidth="10" />
        <rect x="92" y="80" width="17" height="7" rx="3.5" fill={PAL.slateDark} />
        <path d="M99 32L98 54" stroke={PAL.orange} strokeWidth="15" />
        <path d="M95 32L92 50" stroke={PAL.yellowLight} strokeWidth="2" opacity=".9" />
        <path d="M99 34L88 44L86 42" fill="none" stroke={PAL.orangeShade} strokeWidth="6" />
        <circle cx="86" cy="42" r="4" fill={s} />
        <circle cx="101" cy="18" r="9" fill={s} />
        <circle cx="104" cy="19.5" r="5.5" fill={sh} opacity=".45" />
        <path d="M92 16A9.5 9.5 0 0 1 110 15Z" fill={PAL.yellow} />
        {/* The step itself: a yellow plate with grip lines, its front edge in shade */}
        <path d="M76 86H114V92H76Z" fill={PAL.yellowShade} />
        <path d="M78 82H112L114 86H76Z" fill={PAL.yellow} />
        <path d="M84 84H90M96 84H102M106 84H110" stroke={PAL.slateDark} strokeWidth="1.6" />
        <path d="M80 92L82 98M110 92L108 98" stroke={PAL.slate} strokeWidth="3" />
      </g>
    );
  },
} as Record<string, () => JSX.Element>;
