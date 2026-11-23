import type { JSX } from 'react';
import { PAL, Shine } from '../kit';

export default {
  // "de wortel": the root (of a plant) — a block of soil cut open like a slice of cake: a small plant on
  // the grass on top, and under the ground its pale roots branching out through the dark soil.
  'w.wortel': () => (
    <g strokeLinejoin="round">
      {/* The soil block: grass on top, the cut face in front, the side on the right */}
      <path d="M14 52L24 40H108L98 52Z" fill={PAL.leaf} />
      <path d="M98 52L108 40V92L98 104Z" fill="#4f2d17" />
      <rect x="14" y="52" width="84" height="52" rx="2" fill={PAL.brown} />
      <path d="M14 52H98V57H14Z" fill={PAL.leafShade} />
      {/* The plant above the ground */}
      <path d="M58 46V24" stroke={PAL.greenShade} strokeWidth="3.4" strokeLinecap="round" />
      <path d="M58 40Q42 38 38 24Q54 24 58 40Z" fill={PAL.green} />
      <path d="M58 34Q74 32 78 18Q62 18 58 34Z" fill={PAL.leaf} />
      <path d="M58 26Q50 18 54 8Q62 14 58 26Z" fill={PAL.green} />
      {/* The roots under the ground */}
      <g fill="none" stroke={PAL.card} strokeLinecap="round">
        <path d="M58 54Q57 72 60 98" strokeWidth="5" />
        <path d="M58 64Q44 70 30 86M59 72Q74 76 84 94M58 62Q72 62 86 70M57 80Q46 86 42 98" strokeWidth="3.4" />
        <path d="M30 86L22 88M30 86L28 96M84 94L92 98M86 70L94 66M42 76L36 70M72 78L76 70" strokeWidth="2.2" />
      </g>
      <Shine d="M30 44H62" color={PAL.lime} width={2.6} opacity={0.8} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
