import type { JSX } from 'react';
import { PAL, Shine } from '../kit';

export default {
  // "de splinter": the splinter (a small sharp piece) — a thin, jagged sliver of broken wood with a needle
  // point, held up in the open V of a pair of steel tweezers, with a small yellow glint at its sharp point.
  'w.splinter': () => (
    <g strokeLinejoin="round">
      {/* The tweezers: two steel arms in a V, joined at the top */}
      <path d="M86 12L60 58" stroke={PAL.mist} strokeWidth="7" strokeLinecap="round" />
      <path d="M86 12L80 64" stroke={PAL.steel} strokeWidth="7" strokeLinecap="round" />
      <circle cx="86" cy="12" r="6" fill={PAL.steel} />
      <Shine d="M80 24L70 42" width={2} opacity={0.9} />
      {/* The splinter: a jagged sliver, light wood on top and dark wood below, broken off at the right */}
      <path d="M12 100L56 70L62 62L66 68L74 60L78 68L88 64L84 74L64 78Z" fill={PAL.card} />
      <path d="M12 100L64 76L84 72L82 78L68 80L58 82Z" fill={PAL.cardDark} />
      <path d="M30 88L60 70M44 84L72 70" stroke={PAL.cardShade} strokeWidth="1.6" strokeLinecap="round" />
      {/* The tips of the tweezers pinch it */}
      <path d="M60 58L60 66M80 64L80 72" stroke={PAL.steel} strokeWidth="6" strokeLinecap="round" />
      {/* The sharp point glints */}
      <path d="M13 86V78M22 88L26 83" stroke={PAL.yellow} strokeWidth="2.6" strokeLinecap="round" />
    </g>
  ),
} as Record<string, () => JSX.Element>;
