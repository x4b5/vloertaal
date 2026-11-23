import type { JSX } from 'react';
import { Move, PAL, Shine } from '../kit';

/** Where the two halves turn on each other (the bolt), and how the shears lie: blades to the top right. */
const PX = 62;
const PY = 50;
const LIE = 38;

export default {
  // "de snoeischaar": the pruning shears — big hand shears lying diagonally: a curved steel cutting
  // blade and a dark hooked anvil at the top right, a bolt where they cross, two red handles with a
  // spring between them down to the bottom left.
  // On the intro card the shears close: the blade with its handle swings shut (three rounds: the tool at work).
  'w.snoeischaar': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      <g transform={`translate(${PX} ${PY}) rotate(${LIE})`}>
        {/* The fixed half: the dark hooked anvil and the right handle */}
        <path d="M2 2Q16 -18 8 -40Q4 -44 1 -40Q4 -22 -3 -2Z" fill={PAL.slate} />
        <path d="M5 4L18 58" stroke={PAL.redShade} strokeWidth="13" />
        <path d="M14 30L19 56" stroke={PAL.red} strokeWidth="5" opacity=".6" />
        {/* The spring between the handles */}
        <path d="M-4 18L9 22L-3 27L10 31" fill="none" stroke={PAL.yellowShade} strokeWidth="2.6" />
      </g>
      {/* The moving half: the steel blade and the left handle */}
      <Move kind="turn" turn={-28} at={[PX, PY]}>
        <g transform={`translate(${PX} ${PY}) rotate(${LIE})`}>
          <path d="M-5 4Q-16 -18 -4 -48Q10 -30 6 2Z" fill={PAL.mist} />
          <path d="M-1 -40Q6 -24 4 0" stroke={PAL.steel} strokeWidth="4" fill="none" />
          <path d="M-5 4L-18 58" stroke={PAL.red} strokeWidth="13" />
          <circle cx="0" cy="0" r="6" fill={PAL.steel} />
          <circle cx="0" cy="0" r="2.4" fill={PAL.slateDark} />
        </g>
      </Move>
      <Shine d="M41 68L28 86" width={3} opacity={0.5} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
