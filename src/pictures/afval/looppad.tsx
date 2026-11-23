import type { JSX } from 'react';
import { PAL } from '../kit';

export default {
  // "het looppad": the walkway — a green path painted on the grey yard, running away from the viewer
  // between two yellow lines, a big white walking figure painted on it, and a yellow-and-black
  // railing along its side that keeps the machines out.
  'w.looppad': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      {/* The yard */}
      <path d="M8 104L36 30H84L112 104Z" fill={PAL.mist} />
      {/* The path and its yellow lines */}
      <path d="M22 104L46 30H74L90 104Z" fill={PAL.green} />
      <path d="M22 104L46 30M90 104L74 30" stroke={PAL.yellow} strokeWidth="4.4" />
      <path d="M56 104L60 30H74L90 104Z" fill={PAL.greenShade} opacity=".35" />
      {/* The walking figure painted on it */}
      <g fill={PAL.white}>
        <circle cx="57" cy="50" r="5.4" />
      </g>
      <g stroke={PAL.white} fill="none">
        <path d="M56 58L54 74" strokeWidth="7" />
        <path d="M54 74L46 88M54 74L62 88" strokeWidth="6" />
        <path d="M56 60L46 68M56 60L65 67" strokeWidth="5" />
      </g>
      {/* The railing along the right side */}
      <path d="M96 100V64M86 66V40M80 48V32" stroke={PAL.slate} strokeWidth="3.6" />
      <path d="M96 66L80 34" stroke={PAL.yellow} strokeWidth="7" />
      <path d="M93 60L89 52M86 46L83 40" stroke={PAL.ink} strokeWidth="6" strokeLinecap="butt" />
      <path d="M96 84L80 46" stroke={PAL.yellow} strokeWidth="5" />
    </g>
  ),
} as Record<string, () => JSX.Element>;
