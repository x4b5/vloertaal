import type { JSX } from 'react';
import { PAL, Shine } from '../kit';

const STEEL_DARK = '#5d6a75';
const INK_DARK = '#1b232a';

export default {
  // "de barst": the crack — a thick grey cast disc (a flange) in a slanted view, split by a dark
  // zigzag crack that runs over the top and down the front edge.
  'w.barst': () => (
    <g strokeLinejoin="round">
      <ellipse cx="60" cy="98" rx="48" ry="9" fill="#000" opacity="0.14" />
      {/* The side of the disc, then its top */}
      <path d="M14 56V78A46 20 0 0 0 106 78V56Z" fill={STEEL_DARK} />
      <path d="M14 56V78A46 20 0 0 0 60 98V76A46 20 0 0 1 14 56Z" fill={PAL.steel} />
      <ellipse cx="60" cy="56" rx="46" ry="20" fill={PAL.mist} />
      {/* The hole in the middle */}
      <ellipse cx="60" cy="56" rx="12" ry="5.5" fill={PAL.slate} />
      <Shine d="M24 50Q34 40 50 38" opacity={0.7} width={3.4} />
      {/* The crack: a jagged dark wedge from the back rim to the front, and on down the side */}
      <path d="M43 36.5L53 44L46 50L51 52L50 61.5L62 66L56 70L66 76L61 86L65 96L59 96.5L55 86L58 77L48 71L54 67L43 62L44 53L39 50L46 44L40 37Z" fill={INK_DARK} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
