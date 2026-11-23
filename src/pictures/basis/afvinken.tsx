import type { JSX } from 'react';
import { Hand, Move, PAL, SKIN } from '../kit';

export default {
  // "afvinken": to tick off — close up on one line of a list: a big check box with the job's line
  // behind it, and a hand with a pen that has just put a big blue tick in the box.
  // On the intro card the hand with the pen comes to the box, then the tick appears (three rounds:
  // you tick off one job after another).
  'w.afvinken': () => (
    <g strokeLinejoin="round">
      {/* The paper */}
      <rect x="10" y="30" width="100" height="62" rx="5" fill={PAL.paperShade} transform="translate(0 4)" />
      <rect x="10" y="30" width="100" height="62" rx="5" fill={PAL.white} />
      <path d="M20 84H66" stroke={PAL.mist} strokeWidth="3" strokeLinecap="round" />
      {/* The box and the job */}
      <rect x="20" y="42" width="30" height="30" rx="5" fill={PAL.white} stroke={PAL.line} strokeWidth="3" />
      <path d="M60 52H98M60 63H86" stroke={PAL.line} strokeWidth="4.4" strokeLinecap="round" />
      {/* The tick */}
      <Move kind="show">
        <path d="M25 56L33 66L52 36" fill="none" stroke={PAL.blue} strokeWidth="6.4" strokeLinecap="round" />
      </Move>
      {/* The hand with the pen, its tip at the end of the tick */}
      <Move kind="from" dx={-26} dy={18}>
        <Hand pose="hold" x={74} y={70} rotate={-30} scale={0.62} skin={SKIN.amina} sleeve={[PAL.purple, PAL.purpleShade]} />
        <g transform="rotate(-30 54 36)">
          <rect x="50" y="36" width="8" height="44" rx="3" fill={PAL.blue} />
          <path d="M50 40L54 29L58 40Z" fill={PAL.paperShade} />
          <path d="M52.8 32.4L54 29L55.2 32.4Z" fill={PAL.ink} />
          <rect x="50" y="70" width="8" height="10" rx="3" fill={PAL.blueShade} />
        </g>
      </Move>
    </g>
  ),
} as Record<string, () => JSX.Element>;
