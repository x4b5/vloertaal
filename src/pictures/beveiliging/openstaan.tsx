import type { JSX } from 'react';
import { ExclaimMark, Ground, Move, PAL, Shine } from '../kit';

export default {
  // "openstaan": to be open (a door or window that should be closed) — a door in its grey frame stands
  // open: the dark room shows behind it and the wooden door leaf is swung towards us on its hinges at the
  // left; a yellow warning triangle with an exclamation mark hangs beside it: it should be closed.
  // Once: the door swings open.
  'w.openstaan': () => (
    <g strokeLinejoin="round">
      <Ground cx={52} cy={105} rx={40} ry={4} />
      {/* The frame and the dark room behind it */}
      <rect x="24" y="18" width="58" height="88" rx="3" fill={PAL.mist} />
      <rect x="77" y="18" width="5" height="88" fill={PAL.steel} />
      <rect x="30" y="24" width="46" height="82" fill={PAL.slateDark} />
      <path d="M30 96L76 96V106H30Z" fill={PAL.slate} />
      {/* The open door leaf */}
      <Move kind="grow" grow={2.6} once>
        <path d="M30 24L48 16V112L30 106Z" fill={PAL.card} />
        <path d="M43 18L48 16V112L43 110.5Z" fill={PAL.cardShade} />
        <rect x="39" y="60" width="4" height="10" rx="2" fill={PAL.slate} />
        <Shine d="M34 30V54" width={2.4} opacity={0.6} />
      </Move>
      {/* The warning */}
      <path d="M98 30L114 58H82Z" fill={PAL.yellowShade} stroke={PAL.yellowShade} strokeWidth="6" strokeLinejoin="round" transform="translate(0 3)" />
      <path d="M98 30L114 58H82Z" fill={PAL.yellow} stroke={PAL.yellow} strokeWidth="6" strokeLinejoin="round" />
      <ExclaimMark x={98} y={47} size={19} color={PAL.ink} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
