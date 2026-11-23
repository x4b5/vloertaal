import type { JSX } from 'react';
import { PAL } from '../kit';

export default {
  // "de straat": the street — a road running away from you, with a white dashed middle line, a
  // pavement on both sides and rows of house fronts along it, smaller and smaller towards the back.
  'w.straat': () => (
    <g strokeLinejoin="round">
      {/* The pavements and the road */}
      <path d="M6 110L52 44H68L114 110Z" fill={PAL.mist} />
      <path d="M22 110L55 44H65L98 110Z" fill={PAL.slate} />
      <path d="M60 50V58M60 68V80M60 92V108" stroke={PAL.white} strokeWidth="3.4" strokeLinecap="round" />
      {/* The house fronts on the left, getting smaller towards the back */}
      <path d="M8 104V52L30 40V72Z" fill={PAL.clay} />
      <path d="M30 72V40L44 32V52Z" fill={PAL.card} />
      <path d="M44 52V32L52 28V44Z" fill={PAL.clay} />
      <path d="M8 52L30 40L28 34L6 46Z" fill={PAL.slate} />
      <path d="M30 40L44 32L43 27L28 34Z" fill={PAL.steel} />
      <path d="M14 60L22 56V68L14 72ZM14 84L22 80V92L14 96Z" fill={PAL.ice} />
      <path d="M34 50L40 47V55L34 58Z" fill={PAL.ice} />
      {/* The house fronts on the right */}
      <path d="M112 104V52L90 40V72Z" fill={PAL.card} />
      <path d="M90 72V40L76 32V52Z" fill={PAL.clay} />
      <path d="M76 52V32L68 28V44Z" fill={PAL.card} />
      <path d="M112 52L90 40L92 34L114 46Z" fill={PAL.clayShade} />
      <path d="M90 40L76 32L77 27L92 34Z" fill={PAL.slate} />
      <path d="M106 60L98 56V68L106 72ZM106 84L98 80V92L106 96Z" fill={PAL.ice} />
      <path d="M86 50L80 47V55L86 58Z" fill={PAL.ice} />
      {/* The shade side of the right row */}
      <path d="M112 52L90 40V72L112 104Z" fill={PAL.cardDark} opacity=".25" />
    </g>
  ),
} as Record<string, () => JSX.Element>;
