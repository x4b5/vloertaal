import type { JSX } from 'react';
import { Hand, Motion, Move, PAL, SKIN, Shade } from '../kit';

export default {
  // "zich verslikken": to choke (food goes the wrong way) — a toddler leans forward and coughs, eyes
  // squeezed shut, mouth open; a piece of grape comes out with cough lines. An adult's hand pats its back.
  // On the intro card the hand pats the back (three rounds).
  'w.verslikken': () => {
    const [s, sh] = SKIN.bram;
    return (
      <g strokeLinejoin="round" strokeLinecap="round">
        {/* The toddler's body, leaning forward */}
        <g transform="rotate(14 50 104)">
          <Shade color={PAL.greenShade} opacity={1} at={[70, 90, 6, 22]}>
            <rect x="32" y="70" width="36" height="44" rx="14" fill={PAL.green} />
          </Shade>
        </g>
        {/* The head, coughing */}
        <g transform="translate(60 52) rotate(12)">
          <circle cx="0" cy="-3" r="22" fill={PAL.cardDark} />
          <circle cx="-20" cy="2" r="5" fill={s} />
          <Shade color={sh} opacity={1} at={[22, 6, 9, 26]}>
            <ellipse cx="0" cy="2" rx="19.4" ry="18.6" fill={s} />
          </Shade>
          <path d="M-20.6 -2Q-20 -22 0 -22.6Q20 -22 20.6 -2Q13 -11 2 -11.6Q-7 -7 -20.6 -2Z" fill={PAL.cardDark} />
          {/* Eyes squeezed shut, open mouth */}
          <path d="M-11 0L-6 2.6L-11 5M11 0L6 2.6L11 5" fill="none" stroke={PAL.ink} strokeWidth="2.2" />
          <ellipse cx="2" cy="12" rx="5" ry="4.4" fill={PAL.mouth} />
          <circle cx="-12" cy="10" r="3.4" fill={PAL.blush} opacity=".5" />
        </g>
        {/* The piece of grape and the cough lines */}
        <circle cx="86" cy="80" r="5.6" fill={PAL.purple} />
        <circle cx="84.6" cy="78.6" r="1.8" fill={PAL.purpleLight} />
        <Motion x={70} y={70} dir={20} spread={70} n={3} len={9} gap={18} color={PAL.line} />
        {/* The adult's hand, patting the back */}
        <Move kind="fast" dx={-22}>
          <Hand pose="open" x={22} y={96} rotate={64} scale={0.62} skin={SKIN.amina} sleeve={[PAL.purple, PAL.purpleShade]} />
        </Move>
      </g>
    );
  },
} as Record<string, () => JSX.Element>;
