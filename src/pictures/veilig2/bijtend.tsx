import type { JSX } from 'react';
import { PAL, Shine } from '../kit';

/** A diamond (a square on its point) centred on (cx, cy), half its diagonal r. */
const diamond = (cx: number, cy: number, r: number) => `M${cx} ${cy - r}L${cx + r} ${cy}L${cx} ${cy + r}L${cx - r} ${cy}Z`;

/** A falling drop, its point at (x, y). */
const drop = (x: number, y: number) => `M${x} ${y}Q${x + 3.4} ${y + 5} ${x + 3.4} ${y + 7}A3.4 3.4 0 0 1 ${x - 3.4} ${y + 7}Q${x - 3.4} ${y + 5} ${x} ${y}Z`;

export default {
  // "bijtend": corrosive — one big GHS hazard pictogram (GHS05): a red-bordered diamond on white, with two
  // black test tubes tipped over at the top, drops falling from them onto a hand (left) and a metal bar
  // (right), both eaten away at the edge. No text.
  'w.bijtend': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      {/* The depth edge, the red rim and the white field */}
      <path d={diamond(60, 62, 48)} fill={PAL.redShade} stroke={PAL.redShade} strokeWidth="8" />
      <path d={diamond(60, 58, 48)} fill={PAL.red} stroke={PAL.red} strokeWidth="8" />
      <path d={diamond(60, 58, 37)} fill={PAL.white} stroke={PAL.white} strokeWidth="4" />
      <path d="M60 95L97 58L80 58L60 78Z" fill={PAL.paperShade} opacity=".7" />
      <g fill={PAL.ink}>
        {/* The two test tubes, tipped to pour */}
        <rect x="38" y="34" width="20" height="8" rx="4" transform="rotate(-20 48 38)" />
        <rect x="62" y="34" width="20" height="8" rx="4" transform="rotate(20 72 38)" />
        {/* The drops */}
        <path d={drop(42, 46)} />
        <path d={drop(78, 46)} />
        {/* The hand (left) with a bite out of it, and the bar (right) with a bite */}
        <path d="M30 66H52Q55 66 55 69V76Q55 79 52 79H38L34 74L30 74Z" />
        <path d="M66 66H88V79H66Z" />
      </g>
      <circle cx="44" cy="66" r="4" fill={PAL.white} />
      <circle cx="78" cy="66" r="4" fill={PAL.white} />
      {/* The base line */}
      <rect x="38" y="84" width="44" height="5" rx="2" fill={PAL.ink} />
      <Shine d="M24 50L52 22" width={3.6} opacity={0.55} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
