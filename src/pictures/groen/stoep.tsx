import type { JSX } from 'react';
import { PAL } from '../kit';

export default {
  // "de stoep": the pavement (the path next to the road) — a raised strip of square grey paving tiles,
  // its kerb stone stepping down to the dark road beside it, with the road's white edge line.
  'w.stoep': () => (
    <g strokeLinejoin="round">
      {/* The road below the kerb, with its white edge line */}
      <path d="M6 78H114V108H6Z" fill={PAL.slate} />
      <path d="M10 96H110" stroke={PAL.white} strokeWidth="3.4" strokeLinecap="round" />
      {/* The pavement: tiles on top (seen from above, a little in depth) */}
      <path d="M6 70L22 22H98L114 70Z" fill={PAL.mist} />
      <g stroke={PAL.line} strokeWidth="2" strokeLinecap="round">
        <path d="M11 54H109M16 38H104" />
        <path d="M41 22L35 70M60 22V70M79 22L85 70" />
      </g>
      <path d="M22 22H98L100 28H20Z" fill={PAL.paper} />
      {/* The kerb stone: its top edge and its face down to the road */}
      <rect x="6" y="68" width="108" height="5" rx="1.6" fill={PAL.paper} />
      <rect x="6" y="73" width="108" height="8" rx="1.6" fill={PAL.steel} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
