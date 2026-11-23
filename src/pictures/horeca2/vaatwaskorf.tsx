import type { JSX } from 'react';
import { Ground, PAL, Shine } from '../kit';

export default {
  // "de vaatwaskorf": the dish rack (the basket that goes into the dishwasher) — a square blue plastic rack seen
  // from the front at a slant, an open grid in its sides, with four white plates standing up in it.
  'w.vaatwaskorf': () => (
    <g strokeLinejoin="round">
      <Ground cx={58} cy={104} rx={50} ry={4.5} />
      {/* The back and left inner walls */}
      <path d="M12 58L30 42H108L90 58Z" fill={PAL.blueShade} />
      {/* The plates standing in the pegs */}
      {[26, 44, 62, 80].map((x) => (
        <g key={x}>
          <ellipse cx={x + 3} cy={44} rx="11" ry="20" fill={PAL.paperShade} transform={`rotate(-14 ${x + 3} 44)`} />
          <ellipse cx={x} cy={43} rx="11" ry="20" fill={PAL.white} transform={`rotate(-14 ${x} 43)`} />
          <ellipse cx={x} cy={43} rx="6.4" ry="12.6" fill="none" stroke={PAL.ice} strokeWidth="2.4" transform={`rotate(-14 ${x} 43)`} />
        </g>
      ))}
      {/* The right side, then the front with its open grid */}
      <path d="M90 58L108 42V82L90 98Z" fill={PAL.blueShade} />
      {[52, 62, 72, 82].map((y) => <path key={y} d={`M93 ${y + 1}L105 ${y - 10}`} stroke={PAL.navy} strokeWidth="3.4" strokeLinecap="round" />)}
      <rect x="10" y="58" width="82" height="42" rx="3" fill={PAL.blue} />
      {[0, 1, 2, 3, 4, 5].map((c) => [0, 1].map((r) => (
        <rect key={`${c}${r}`} x={15 + c * 12.6} y={64 + r * 16} width="8.6" height="11" rx="2" fill={PAL.navy} />
      )))}
      <Shine d="M14 62H52" width={2.6} opacity={0.6} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
