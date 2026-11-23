import type { JSX } from 'react';
import { Ground, Hand, Move, PAL, SKIN, Shade, Shine } from '../kit';

export default {
  // "schillen": to peel — a big brown potato with a pale peeled strip down its right side; a hand pulls the
  // orange peeler down along the strip and a ribbon of peel hangs from the blade.
  // On the intro card the hand and peeler stroke down along the potato (three rounds: a job done again and again).
  'w.schillen': () => (
    <g strokeLinejoin="round">
      <Ground cx={52} cy={104} rx={40} ry={4.5} />
      {/* The potato */}
      <Shade color={PAL.cardShade} opacity={1} at={[78, 70, 14, 34]}>
        <ellipse cx="46" cy="62" rx="31" ry="38" fill={PAL.card} transform="rotate(-12 46 62)" />
      </Shade>
      <circle cx="30" cy="48" r="2.2" fill={PAL.cardDark} />
      <circle cx="40" cy="80" r="2" fill={PAL.cardDark} />
      <circle cx="28" cy="70" r="1.8" fill={PAL.cardDark} />
      <Shine d="M24 40Q28 30 38 26" width={3.4} opacity={0.5} />
      {/* The peeled strip: pale flesh */}
      <path d="M56 28Q68 34 72 56Q74 74 66 90Q60 94 58 88Q64 72 62 54Q60 38 52 30Z" fill={PAL.yellowShine} />
      {/* The ribbon of peel, hanging from the blade */}
      <path d="M66 88Q76 94 72 100Q68 104 76 106" fill="none" stroke={PAL.cardShade} strokeWidth="6" strokeLinecap="round" />
      {/* The hand with the peeler */}
      <Move kind="from" dy={-34}>
        <g transform="rotate(-62 66 84)">
          <rect x="62" y="80" width="18" height="9" rx="3" fill={PAL.steel} />
          <rect x="62" y="80" width="18" height="4" rx="2" fill={PAL.mist} />
          <rect x="78" y="80" width="30" height="10" rx="5" fill={PAL.orange} />
        </g>
        <Hand pose="hold" x={89} y={66} rotate={-62} scale={0.62} skin={SKIN.amina} sleeve={[PAL.paper, PAL.paperShade]} />
      </Move>
    </g>
  ),
} as Record<string, () => JSX.Element>;
