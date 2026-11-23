import type { JSX } from 'react';
import { Move, PAL, Shine } from '../kit';

/** The teeth along the bottom edge of the blade, from (18, 66) to (74, 64). */
const TEETH = Array.from({ length: 9 }, (_, i) => {
  const x = 20 + i * 6;
  const y = 66 - (i * 6 * 2) / 56;
  return `M${x} ${y}L${x + 3} ${y + 4.5}L${x + 6} ${y}`;
}).join('');

export default {
  // "de snoeizaag": the pruning saw — a curved steel saw blade with big teeth and an orange pistol grip,
  // its blade across an upright brown branch with leaves at the top.
  // On the intro card the saw saws along its blade through the branch (three rounds: the tool at work).
  'w.snoeizaag': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      {/* The branch, up from the bottom, with a few leaves at the top */}
      <path d="M38 106L56 20" stroke={PAL.wood} strokeWidth="15" />
      <path d="M44 104L60 24" stroke={PAL.cardDark} strokeWidth="5" />
      <path d="M56 22Q46 10 36 14Q44 24 56 22Z" fill={PAL.green} />
      <path d="M56 22Q66 8 78 12Q70 24 56 22Z" fill={PAL.leaf} />
      <Move kind="from" dx={24} dy={-4}>
        {/* The blade and its teeth */}
        <path d={TEETH} fill={PAL.slate} stroke={PAL.slate} strokeWidth="1.2" />
        <path d="M12 60Q38 46 78 48L78 64L18 66Q12 66 12 60Z" fill={PAL.mist} />
        <path d="M20 59Q40 50 74 52" fill="none" stroke={PAL.white} strokeWidth="2.6" opacity=".7" />
        <path d="M18 66L78 64" stroke={PAL.steel} strokeWidth="2.4" />
        {/* The orange pistol grip */}
        <path d="M74 46H92Q100 46 102 54L107 80Q108 87 101 87H97Q92 87 91 81L87 64H74Z" fill={PAL.orange} />
        <path d="M94 58L99 82" stroke={PAL.orangeShade} strokeWidth="5" />
        <circle cx="80" cy="55" r="2.6" fill={PAL.slate} />
        <Shine d="M78 50H90" width={2.6} opacity={0.6} />
      </Move>
    </g>
  ),
} as Record<string, () => JSX.Element>;
