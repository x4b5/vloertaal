import type { JSX } from 'react';
import { Ground, PAL, Shade, Shine } from '../kit';

export default {
  // "de kluit": the root ball (the soil around the roots) — a young tree standing on a big round ball of
  // soil wrapped in jute cloth, tied at the top round the trunk, a few roots poking out underneath.
  'w.kluit': () => (
    <g strokeLinejoin="round">
      <Ground cx={60} cy={104} rx={34} ry={4.5} />
      {/* The trunk and the small crown */}
      <rect x="57" y="26" width="7" height="38" rx="3" fill={PAL.cardDark} />
      <circle cx="48" cy="26" r="12" fill={PAL.greenShade} />
      <circle cx="72" cy="24" r="12" fill={PAL.green} />
      <circle cx="60" cy="16" r="12" fill={PAL.leaf} />
      {/* Roots poking out under the ball */}
      <path d="M44 98L38 106M60 102V110M76 98L82 106" stroke={PAL.card} strokeWidth="2.8" strokeLinecap="round" />
      {/* The ball of soil in jute */}
      <Shade color={PAL.cardDark} opacity={0.9} at={[90, 84, 18, 30]}>
        <path d="M34 62Q48 56 60 56Q72 56 86 62Q94 72 92 84Q88 102 60 104Q32 102 28 84Q26 72 34 62Z" fill={PAL.card} />
      </Shade>
      {/* The jute weave and the tie */}
      <path d="M32 74Q60 82 90 74M28 88Q60 96 92 88M44 60Q38 80 44 102M60 56V104M76 60Q82 80 76 102" fill="none" stroke={PAL.cardShade} strokeWidth="1.8" strokeLinecap="round" />
      <path d="M46 58Q60 64 74 58" fill="none" stroke={PAL.brown} strokeWidth="4" strokeLinecap="round" />
      <Shine d="M36 70Q40 62 48 60" color="#f6d3a2" width={3.4} opacity={0.9} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
