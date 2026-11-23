import type { JSX } from 'react';
import { ExclaimMark, PAL, Shine } from '../kit';

export default {
  // "het waarschuwingsbord": the warning sign — a yellow triangle with its point up and a black edge, as
  // in ISO 7010 (W001, general warning), with a black exclamation mark inside. No text.
  'w.waarschuwingsbord': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      {/* The depth edge, the black edge and the yellow field */}
      <path d="M60 18L106 100H14Z" fill={PAL.slateDark} stroke={PAL.slateDark} strokeWidth="12" transform="translate(0 4)" />
      <path d="M60 18L106 100H14Z" fill={PAL.ink} stroke={PAL.ink} strokeWidth="12" />
      <path d="M60 32L94 93H26Z" fill={PAL.yellow} stroke={PAL.yellow} strokeWidth="5" />
      <path d="M77 62L94 93H60Z" fill={PAL.yellowShade} opacity=".55" />
      <ExclaimMark x={60} y={70} size={38} color={PAL.ink} />
      <Shine d="M46 44L36 62" color={PAL.yellowShine} width={4} opacity={0.9} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
