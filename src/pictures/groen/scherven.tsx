import type { JSX } from 'react';
import { Ground, PAL } from '../kit';

/** Bottle glass: a light face, a dark face, a glint. */
const GLASS = { light: '#5cbf6a', face: PAL.green, dark: PAL.greenShade };

export default {
  // "de scherven": the broken glass (sharp pieces) — a green bottle broken on the ground: the neck with its
  // jagged edge, and big and small sharp shards lying round it, each with a white glint.
  'w.scherven': () => (
    <g strokeLinejoin="round">
      <Ground cx={60} cy={100} rx={52} ry={6} />
      {/* The broken bottle neck, lying down, its jagged end to the right */}
      <rect x="8" y="58" width="7" height="14" rx="2" fill={GLASS.dark} />
      <path d="M14 59H28Q34 59 38 52H52L56 58L50 62L58 68L52 72L58 78L52 82H38Q34 73 28 73H14Z" fill={GLASS.face} />
      <path d="M14 68H28Q34 68 38 76H58L52 82H38Q34 73 28 73H14Z" fill={GLASS.dark} />
      <path d="M18 62H28Q33 62 37 56" fill="none" stroke={PAL.white} strokeWidth="2.6" strokeLinecap="round" opacity=".7" />
      {/* The shards */}
      <path d="M70 52L92 42L84 72Z" fill={GLASS.light} />
      <path d="M92 42L84 72L80 70Z" fill={GLASS.dark} />
      <path d="M86 84L110 76L100 98Z" fill={GLASS.face} />
      <path d="M110 76L100 98L96 94Z" fill={GLASS.dark} />
      <path d="M40 86L62 88L46 100Z" fill={GLASS.light} />
      <path d="M62 88L46 100L46 96Z" fill={GLASS.dark} />
      <path d="M18 88L30 84L26 98Z" fill={GLASS.face} />
      <path d="M68 92L78 96L68 102Z" fill={GLASS.face} />
      {/* Glints */}
      <path d="M76 52L86 48M92 82L102 79M46 90L56 91" stroke={PAL.white} strokeWidth="2.2" strokeLinecap="round" opacity=".8" />
    </g>
  ),
} as Record<string, () => JSX.Element>;
