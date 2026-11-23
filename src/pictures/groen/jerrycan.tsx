import type { JSX } from 'react';
import { Ground, PAL, Shine } from '../kit';

export default {
  // "de jerrycan": the jerrycan — a red fuel can in a slanted view: a flat body with the big pressed X
  // on its front, the narrow dark-red side, three grips in the frame on top and a dark spout cap at the
  // front corner.
  'w.jerrycan': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      <Ground cx={62} cy={102} rx={38} ry={4} />
      {/* The side, the top and the front of the body */}
      <path d="M82 34L94 24V90L82 100Z" fill={PAL.redShade} stroke={PAL.redShade} strokeWidth="3" />
      <path d="M28 34L40 24H94L82 34Z" fill={PAL.redLight} stroke={PAL.redLight} strokeWidth="3" />
      <rect x="28" y="34" width="54" height="66" rx="4" fill={PAL.red} />
      {/* The pressed X and the rim round it */}
      <rect x="34" y="40" width="42" height="54" rx="3" fill="none" stroke={PAL.redShade} strokeWidth="2.6" />
      <path d="M38 44L72 90M72 44L38 90" stroke={PAL.redShade} strokeWidth="5" />
      <path d="M38 42L72 88M72 42L38 88" stroke={PAL.redLight} strokeWidth="1.8" opacity=".6" />
      {/* The frame on top with its three grips */}
      <path d="M48 28L56 10H92L86 26Z" fill={PAL.red} />
      <g fill={PAL.redShade}>
        <rect x="60" y="15" width="7" height="8" rx="2.5" />
        <rect x="70" y="15" width="7" height="8" rx="2.5" />
        <rect x="80" y="15" width="6" height="8" rx="2.5" />
      </g>
      {/* The spout cap */}
      <rect x="30" y="18" width="14" height="14" rx="3" fill={PAL.slate} transform="rotate(-20 37 25)" />
      <rect x="34" y="14" width="8" height="6" rx="2" fill={PAL.yellow} transform="rotate(-20 38 17)" />
      <Shine d="M32 46V76" width={3.4} opacity={0.5} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
