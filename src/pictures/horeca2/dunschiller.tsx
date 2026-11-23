import type { JSX } from 'react';
import { Ground, PAL, Shade, Shine } from '../kit';

export default {
  // "de dunschiller": the vegetable peeler — a Dutch swivel peeler lying on a slant: a round orange handle with
  // a hanging hole, a steel neck, and the blade frame with its long slot; a curl of potato peel lies beside it.
  'w.dunschiller': () => (
    <g strokeLinejoin="round">
      <Ground cx={60} cy={100} rx={46} ry={5} />
      {/* A curl of peel beside the blade */}
      <path d="M82 94Q70 98 66 90Q64 84 72 84Q78 86 74 90" fill="none" stroke={PAL.cardShade} strokeWidth="6" strokeLinecap="round" />
      <path d="M82 94Q70 98 66 90Q64 84 72 84" fill="none" stroke={PAL.card} strokeWidth="3" strokeLinecap="round" />
      <g transform="rotate(-38 60 60)">
        {/* The handle */}
        <Shade color={PAL.orangeShade} opacity={1} at={[34, 72, 40, 6]}>
          <rect x="2" y="51" width="56" height="18" rx="9" fill={PAL.orange} />
        </Shade>
        <circle cx="13" cy="60" r="3.6" fill={PAL.orangeShade} />
        <Shine d="M20 55H48" width={2.8} opacity={0.55} />
        {/* The neck */}
        <path d="M56 54H66L70 58V62L66 66H56Z" fill={PAL.steel} />
        {/* The blade frame round its long slot */}
        <rect x="66" y="49" width="46" height="22" rx="5" fill={PAL.mist} />
        <rect x="66" y="63" width="46" height="8" rx="4" fill={PAL.steel} />
        <rect x="72" y="57" width="34" height="5.5" rx="2.7" fill={PAL.slateDark} />
        <Shine d="M71 53H106" width={2.4} opacity={0.9} />
      </g>
    </g>
  ),
} as Record<string, () => JSX.Element>;
