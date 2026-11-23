import type { JSX } from 'react';
import { Ground, PAL, Shade, Shine } from '../kit';

export default {
  // "het kopje": the cup — one white cup with a blue band and an ear-shaped handle, full of coffee, on
  // its saucer (no jug: that is "de koffie" and "de thermoskan").
  'w.kopje': () => (
    <g strokeLinejoin="round">
      <Ground cx={58} cy={104} rx={48} ry={4} />
      {/* The saucer */}
      <ellipse cx="58" cy="96" rx="48" ry="10" fill={PAL.paperShade} />
      <ellipse cx="58" cy="93" rx="48" ry="10" fill={PAL.white} />
      <ellipse cx="58" cy="93" rx="30" ry="5.4" fill={PAL.paper} />
      {/* The handle */}
      <path d="M86 50Q106 48 104 64Q102 78 84 76" fill="none" stroke={PAL.paperShade} strokeWidth="8" strokeLinecap="round" />
      {/* The cup */}
      <Shade color={PAL.paperShade} opacity={1} at={[92, 66, 14, 34]}>
        <path d="M24 40H92V62Q92 92 64 92H52Q24 92 24 62Z" fill={PAL.white} />
      </Shade>
      <path d="M24 50H92V58H24Z" fill={PAL.blue} />
      <path d="M78 50H92V58H78Z" fill={PAL.blueShade} />
      {/* The coffee */}
      <ellipse cx="58" cy="40" rx="34" ry="8" fill={PAL.paperShade} />
      <ellipse cx="58" cy="41" rx="29" ry="5.6" fill={PAL.brown} />
      <Shine d="M30 64Q31 78 40 86" width={3.4} opacity={1} color={PAL.paper} />
      {/* A little steam */}
      <path d="M48 30Q44 24 48 18M66 30Q62 24 66 18" fill="none" stroke={PAL.line} strokeWidth="3" strokeLinecap="round" opacity=".6" />
    </g>
  ),
} as Record<string, () => JSX.Element>;
