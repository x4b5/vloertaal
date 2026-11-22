import type { JSX } from 'react';
import { Ground, PAL, Shade, Shine } from '../kit';

export default {
  // "de potgrond": the potting soil — a fat open green bag of potting soil with a light leaf badge on
  // the front, its top rolled down, dark soil heaped in the opening and a trowel stuck in it.
  'w.potgrond': () => (
    <g strokeLinejoin="round">
      <Ground cx={60} cy={104} rx={44} ry={4} />
      {/* The right side of the bag */}
      <path d="M78 44L94 34Q98 66 94 96L80 103Z" fill={PAL.greenShade} />
      {/* The front of the bag, a little bulging */}
      <Shade color={PAL.greenShade} opacity={1} at={[88, 74, 10, 40]}>
        <path d="M20 44H80Q85 74 80 103H20Q15 74 20 44Z" fill={PAL.green} />
      </Shade>
      {/* The rolled-down top: a darker band */}
      <path d="M19 42H81L96 32V40L81 51H19Z" fill={PAL.greenShade} />
      <path d="M19 42H81L96 32" fill="none" stroke={PAL.leaf} strokeWidth="2" strokeLinecap="round" />
      {/* The soil heaped in the opening */}
      <path d="M20 43Q24 28 40 26Q52 18 66 24Q84 22 94 34L81 43Z" fill={PAL.brown} />
      <path d="M32 34Q40 30 46 32M60 28Q66 26 72 28" fill="none" stroke="#8a5530" strokeWidth="2" strokeLinecap="round" />
      {/* The trowel stuck in the soil */}
      <path d="M70 32L80 12Q82 24 76 34Z" fill={PAL.mist} />
      <path d="M77 22L90 8" stroke={PAL.steel} strokeWidth="3" strokeLinecap="round" />
      <path d="M86 12L96 2" stroke={PAL.orange} strokeWidth="7" strokeLinecap="round" />
      {/* The leaf badge on the front */}
      <circle cx="49" cy="74" r="17" fill={PAL.lime} />
      <path d="M40 84Q38 66 58 62Q60 82 40 84Z" fill={PAL.green} />
      <path d="M41 83L54 67" stroke={PAL.lime} strokeWidth="2" strokeLinecap="round" />
      <Shine d="M24 56Q23 66 24 76" width={3} opacity={0.5} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
