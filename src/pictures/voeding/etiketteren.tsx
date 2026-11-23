import type { JSX } from 'react';
import { Box, Ground, Hand, Move, PAL, SKIN } from '../kit';

export default {
  // "etiketteren": to label (to put labels on) — a hand (Amina's, in her green sleeve) comes down and
  // presses a white label with grey lines onto the front of a cardboard box.
  // On the intro card the hand brings the label down onto the box (three rounds: work you do again
  // and again).
  'w.etiketteren': () => (
    <g strokeLinejoin="round">
      <Ground cx={62} cy={104} rx={44} ry={4} />
      <Box x={22} y={52} w={58} h={50} depth={20} />
      <Move kind="from" dy={-26}>
        {/* The label */}
        <rect x="30" y="66" width="34" height="24" rx="2.5" fill={PAL.paperShade} transform="translate(1.5 2.5)" />
        <rect x="30" y="66" width="34" height="24" rx="2.5" fill={PAL.white} />
        <path d="M35 73H58M35 79H52M35 85H55" stroke={PAL.line} strokeWidth="2.2" strokeLinecap="round" />
        {/* The hand pressing it on, coming down from above */}
        <Hand pose="point" x={54} y={28} rotate={180} scale={0.92} skin={SKIN.amina} sleeve={['#2f8f3e', '#23722f']} />
      </Move>
    </g>
  ),
} as Record<string, () => JSX.Element>;
