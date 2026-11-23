import type { JSX } from 'react';
import { PAL, SKIN, Sparkle, Tick } from '../kit';

export default {
  // "aangenomen": hired (you got the job) — a handshake: the boss's hand (navy sleeve, from the left)
  // and the new worker's hand (orange sleeve, from the right) clasped, with a blue tick badge and
  // sparkles above: the deal is done.
  'w.aangenomen': () => {
    const [hs, hsh] = SKIN.henk;
    const [js, jsh] = SKIN.jada;
    return (
      <g strokeLinejoin="round" strokeLinecap="round">
        <Tick x={60} y={26} r={16} />
        <Sparkle x={26} y={28} r={8} />
        <Sparkle x={94} y={20} r={6} />
        {/* The sleeves */}
        <path d="M2 104L30 74" stroke={PAL.navy} strokeWidth="22" />
        <path d="M26 79L34 70" stroke={PAL.navyShade} strokeWidth="23" strokeLinecap="butt" />
        <path d="M118 104L92 76" stroke={PAL.orange} strokeWidth="22" />
        <path d="M96 81L88 72" stroke={PAL.orangeShade} strokeWidth="23" strokeLinecap="butt" />
        {/* The boss's hand, behind: palm reaching right, its fingertips under the other hand */}
        <path d="M28 64Q36 54 50 54H72Q86 56 86 70V84Q86 92 78 92H62L34 86Q26 82 28 74Z" fill={hs} />
        <path d="M70 90Q82 90 84 80" stroke={hsh} strokeWidth="2.4" fill="none" />
        {/* The worker's hand in front: the back of the hand, and four fingers curled round */}
        <path d="M94 60Q84 54 70 56L60 58V90H72Q86 90 94 84Z" fill={js} />
        <path d="M80 58Q90 62 92 72V84Q86 88 80 88Z" fill={jsh} opacity=".5" />
        <rect x="40" y="58" width="28" height="7.4" rx="3.7" fill={js} />
        <rect x="38" y="66.4" width="30" height="7.4" rx="3.7" fill={js} />
        <rect x="39" y="74.8" width="29" height="7.4" rx="3.7" fill={js} />
        <rect x="42" y="83.2" width="26" height="7" rx="3.5" fill={js} />
        <path d="M62 60V88" stroke={jsh} strokeWidth="2" />
        {/* The boss's thumb, lying over the worker's hand */}
        <path d="M34 58Q50 48 70 52" stroke={hs} strokeWidth="9" fill="none" />
      </g>
    );
  },
} as Record<string, () => JSX.Element>;
