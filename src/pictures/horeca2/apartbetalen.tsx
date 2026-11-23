import type { JSX } from 'react';
import { Move, PAL } from '../kit';

/** One small bill at x (left edge) with a bank card in front of it in the payer's own colour. */
const share = (x: number, card: string, cardShade: string) => (
  <g>
    <path d={`M${x + 2} 22H${x + 30}V70L${x + 26} 67L${x + 22} 70L${x + 18} 67L${x + 14} 70L${x + 10} 67L${x + 6} 70L${x + 2} 67Z`} fill={PAL.paperShade} transform="translate(2 2)" />
    <path d={`M${x + 2} 22H${x + 30}V70L${x + 26} 67L${x + 22} 70L${x + 18} 67L${x + 14} 70L${x + 10} 67L${x + 6} 70L${x + 2} 67Z`} fill={PAL.white} />
    <path d={`M${x + 7} 32H${x + 25}M${x + 7} 40H${x + 20}M${x + 7} 48H${x + 23}`} stroke={PAL.line} strokeWidth="2.4" strokeLinecap="round" />
    <path d={`M${x + 7} 58H${x + 25}`} stroke={PAL.ink} strokeWidth="3.4" strokeLinecap="round" />
    <g transform={`rotate(-10 ${x + 16} 88)`}>
      <rect x={x + 1} y={79} width="30" height="20" rx="3" fill={cardShade} transform="translate(1.5 2)" />
      <rect x={x + 1} y={79} width="30" height="20" rx="3" fill={card} />
      <rect x={x + 5} y={84} width="7" height="6" rx="1.5" fill={PAL.yellow} />
      <path d={`M${x + 5} 94H${x + 24}`} stroke={PAL.white} strokeWidth="1.8" strokeLinecap="round" opacity=".6" />
    </g>
  </g>
);

export default {
  // "apart betalen": to pay separately (each person pays for himself) — three small bills side by side, each
  // with its own bank card in front of it in a different colour (blue, green, purple): the bill is split, and
  // each person pays his own part.
  // On the intro card the left and right bills slide out from behind the middle one, once (one bill becomes three).
  'w.apartbetalen': () => (
    <g strokeLinejoin="round">
      <Move kind="from" dx={36} once>
        {share(10, PAL.blue, PAL.blueShade)}
      </Move>
      <Move kind="from" dx={-36} once>
        {share(78, PAL.purple, PAL.purpleShade)}
      </Move>
      {share(44, PAL.green, PAL.greenShade)}
    </g>
  ),
} as Record<string, () => JSX.Element>;
