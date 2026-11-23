import type { JSX } from 'react';
import { Ground, Move, PAL, Shade, Shine } from '../kit';

/** Where the lift turns the bin over: on the back of the hopper. */
const P: [number, number] = [80, 58];
/** How far the lift turns the bin, from standing on the ground to upside down over the hopper. */
const TURN = 165;

export default {
  // "de kieplift": the bin lift — the back of a bin lorry: the green body, the dark hopper and on its back the
  // steel lift. Its arm holds a green wheelie bin upside down over the hopper; the rubbish falls out of it.
  // On the intro card the lift swings the bin up from the ground and over (one turn), then the rubbish falls.
  // Once and slowly: the machine lifts a load (as krik and tillift).
  'w.kieplift': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      <Ground cx={56} cy={104} rx={50} ry={4} />
      {/* The green body (cut off on the left) */}
      <Shade color={PAL.greenShade} opacity={1} at={[62, 66, 8, 40]}>
        <path d="M8 88V44Q8 34 18 34H56V88Z" fill={PAL.green} />
      </Shade>
      <rect x="8" y="70" width="48" height="6" fill={PAL.yellow} />
      <Shine d="M14 48Q14 40 22 40H38" width={3.4} opacity={0.5} />
      {/* The hopper, open at the top */}
      <path d="M56 50H84L88 90H56Z" fill={PAL.slate} />
      <path d="M58 50H84L82 56H60Z" fill={PAL.slateDark} />
      <path d="M84 50L88 90H84Z" fill={PAL.slateDark} />
      <rect x="8" y="86" width="82" height="7" rx="2" fill={PAL.slateDark} />
      <circle cx="30" cy="95" r="9" fill={PAL.ink} />
      <circle cx="30" cy="95" r="3.6" fill={PAL.steel} />
      {/* The lift's rails on the back */}
      <path d="M88 58V88" stroke={PAL.steel} strokeWidth="5" />
      {/* The rubbish falling into the hopper */}
      <Move kind="show" once>
        <rect x="57" y="38" width="9" height="9" rx="1.6" fill={PAL.card} transform="rotate(20 61 42)" />
        <circle cx="64" cy="52" r="4.4" fill={PAL.leaf} />
        <rect x="56" y="58" width="10" height="5" rx="1.6" fill={PAL.paper} transform="rotate(-15 61 60)" />
      </Move>
      {/* The arm and the bin: upright on the ground at the start, upside down over the hopper at the end */}
      <Move kind="turn" turn={TURN} at={P} once>
        <g transform={`rotate(${-TURN} ${P[0]} ${P[1]})`}>
          <path d={`M${P[0]} ${P[1]}L${P[0] + 4} ${P[1] + 16}`} stroke={PAL.steel} strokeWidth="5" />
          {/* The bin, upright in its own frame: centre 10 right and 24 under the pivot */}
          <g transform={`translate(${P[0] + 10} ${P[1] + 24}) scale(1.25)`}>
            <path d="M11 -15L16 -17L14 14L10 16Z" fill={PAL.greenShade} />
            <path d="M-12 -15H12L10 15Q10 16 9 16H-9Q-10 16 -10 15Z" fill={PAL.green} />
            <path d="M-8 -6H8M-7 2H7" stroke={PAL.greenShade} strokeWidth="1.8" />
            <path d="M-14 -19L14 -21L18 -21L17 -17H-14Z" fill="#256b31" />
            <circle cx="12" cy="14" r="4" fill={PAL.ink} />
          </g>
          <circle cx={P[0]} cy={P[1]} r="3.6" fill={PAL.slateDark} />
        </g>
      </Move>
    </g>
  ),
} as Record<string, () => JSX.Element>;
