import type { JSX } from 'react';
import { Ground, PAL, Shine } from '../kit';

export default {
  // "de batterij": the battery — a big round AA battery lying at a slant, rising to the right: a dark body,
  // a yellow cap at the plus end with its steel nub, and a yellow lightning bolt on the body.
  'w.batterij': () => (
    <g strokeLinejoin="round">
      <Ground cx={58} cy={100} rx={44} ry={5} />
      <g transform="rotate(-28 60 64)">
        {/* The flat minus end (seen a little) */}
        <ellipse cx="16" cy="64" rx="7" ry="17" fill={PAL.steel} />
        {/* The dark body and the yellow plus-end cap */}
        <rect x="16" y="47" width="62" height="34" fill={PAL.slate} />
        <rect x="78" y="47" width="22" height="34" fill={PAL.yellow} />
        <rect x="16" y="71" width="84" height="10" fill="#000" opacity=".18" />
        {/* The round plus end and its nub */}
        <ellipse cx="100" cy="64" rx="7" ry="17" fill={PAL.yellowShade} />
        <rect x="102" y="58" width="8" height="12" rx="3" fill={PAL.steel} />
        {/* The lightning bolt */}
        <path d="M52 51L40 66H49L44 78L58 61H49Z" fill={PAL.yellow} />
        <Shine d="M24 52H72" width={3.4} opacity={0.45} />
        <Shine d="M82 52H96" color={PAL.yellowShine} width={3.4} opacity={0.9} />
      </g>
    </g>
  ),
} as Record<string, () => JSX.Element>;
