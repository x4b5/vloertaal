import type { JSX } from 'react';
import { Ground, PAL, SKIN } from '../kit';

export default {
  // "de rugpijn": the back pain — a loader in hi-vis orange seen from the side, bent a little forward, one
  // hand pressed on the small of his back; a red burst of pain lines there, and the heavy black rubbish bag he
  // just put down at his feet.
  'w.rugpijn': () => {
    const [s, sh] = SKIN.bram;
    return (
      <g strokeLinejoin="round" strokeLinecap="round">
        <Ground cx={58} cy={104} rx={44} ry={4.5} />
        {/* The bag */}
        <path d="M14 104Q10 84 22 78Q30 74 36 78Q48 84 44 104Z" fill={PAL.slate} />
        <path d="M24 78L22 70M30 76L34 68" stroke={PAL.slateDark} strokeWidth="3" />
        {/* Legs, body, arm and head */}
        <path d="M70 66L66 84L64 100" fill="none" stroke={PAL.navy} strokeWidth="11" />
        <rect x="56" y="96" width="18" height="8" rx="4" fill={PAL.slateDark} />
        <path d="M73 64L62 34" stroke={PAL.orange} strokeWidth="17" />
        <path d="M66 56L57 32" stroke={PAL.yellowLight} strokeWidth="2.4" opacity=".9" />
        {/* The hand on the back */}
        <path d="M66 40L86 50L82 60" fill="none" stroke={PAL.orangeShade} strokeWidth="7" />
        <circle cx="82" cy="61" r="5" fill={s} />
        <circle cx="57" cy="20" r="10" fill={s} />
        <circle cx="54" cy="21.5" r="6" fill={sh} opacity=".45" />
        <path d="M47 18A10.5 10.5 0 0 1 67 15L69 18Z" fill={PAL.yellow} />
        {/* The pain */}
        <path d="M90 60L100 56M90 68L102 70M86 76L94 84M88 50L96 42" stroke={PAL.red} strokeWidth="3.6" />
      </g>
    );
  },
} as Record<string, () => JSX.Element>;
