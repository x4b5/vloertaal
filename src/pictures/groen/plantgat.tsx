import type { JSX } from 'react';
import { PAL, Shine } from '../kit';

export default {
  // "het plantgat": the planting hole — a deep round hole dug in the grass, its back wall of brown soil
  // showing, and the heap of dug-out soil beside it.
  'w.plantgat': () => (
    <g strokeLinejoin="round">
      {/* The patch of grass */}
      <ellipse cx="60" cy="80" rx="52" ry="22" fill={PAL.leaf} />
      <path d="M8 80Q10 96 40 101H80Q110 96 112 80Q104 102 60 104Q16 102 8 80Z" fill={PAL.leafShade} />
      {/* The hole: the dark bottom, the soil wall at the back */}
      <ellipse cx="50" cy="78" rx="28" ry="12" fill="#3a2414" />
      <path d="M22 78A28 12 0 0 1 78 78Q50 72 22 78Z" fill={PAL.brown} />
      <path d="M25 82Q50 75 75 82A26 7.5 0 0 1 25 82Z" fill="#26160b" />
      {/* The heap of dug-out soil */}
      <path d="M74 86Q78 58 94 56Q110 58 112 82Q100 92 74 86Z" fill={PAL.brown} />
      <path d="M96 58Q108 62 112 82Q104 88 96 88Z" fill="#4f2d17" />
      <circle cx="86" cy="74" r="3.6" fill={PAL.cardDark} />
      <circle cx="96" cy="68" r="3" fill={PAL.cardDark} />
      {/* Grass tufts */}
      <path d="M18 92L20 84L22 92M24 90L26 84L28 91M66 98L68 90L70 98" fill="none" stroke={PAL.green} strokeWidth="2.4" strokeLinecap="round" />
      <Shine d="M18 70Q22 64 32 62" width={3} opacity={0.6} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
