import type { JSX } from 'react';
import { Ground, PAL, Shine } from '../kit';

/** The bottle's front: a straight body with round shoulders up to the neck. */
const BOTTLE = 'M34 62Q34 50 46 46L50 44V36H64V44L68 46Q80 50 80 62V97Q80 103 74 103H40Q34 103 34 97Z';

export default {
  // "de remvloeistof": the brake fluid — a see-through plastic bottle in 3/4 view with golden-yellow fluid
  // inside, its level between the two marks on the side (max above, min below), and a ribbed yellow cap.
  'w.remvloeistof': () => (
    <g strokeLinejoin="round">
      <Ground cx={60} cy={104} rx={30} ry={4.5} />
      {/* The bottle's depth: the same outline set back to the right, the fluid in it */}
      <path d={BOTTLE} transform="translate(8 -5)" fill={PAL.paperShade} />
      <path d="M80 75L88 70V93Q88 98 82 98H80Z" fill={PAL.yellowShade} />
      {/* The front: clear plastic, the fluid up to its level */}
      <path d={BOTTLE} fill={PAL.paper} />
      <path d="M34 75H80V97Q80 103 74 103H40Q34 103 34 97Z" fill={PAL.yellow} />
      <path d="M34 75H80" stroke={PAL.yellowShade} strokeWidth="2.2" />
      {/* The max and min marks */}
      <path d="M40 65H54M40 89H54" stroke={PAL.slate} strokeWidth="3" strokeLinecap="round" />
      {/* The ribbed cap */}
      <path d="M44 22H68L73 18V34L68 38H44Z" fill={PAL.yellowShade} />
      <rect x="44" y="20" width="24" height="18" rx="3" fill={PAL.yellow} />
      {[50, 56, 62].map((x) => <path key={x} d={`M${x} 24V34`} stroke={PAL.yellowShade} strokeWidth="2.2" strokeLinecap="round" />)}
      <Shine d="M39 56Q40 51 45 49" width={3.4} opacity={0.9} color={PAL.white} />
      <Shine d="M38.5 80V96" width={3} opacity={0.75} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
