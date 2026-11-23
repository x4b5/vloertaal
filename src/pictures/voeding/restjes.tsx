import type { JSX } from 'react';
import { PAL, Shine } from '../kit';

export default {
  // "de restjes": the leftovers (small bits of food) — the end of a steel work table seen from above,
  // with small bits of food left lying on it: red scraps of meat, crumbs of bread, a green bit of herb
  // and a slice of carrot.
  'w.restjes': () => (
    <g strokeLinejoin="round">
      {/* The steel table top, seen from above at a slant, and its front edge */}
      <path d="M14 96L30 34H106L102 96Z" fill={PAL.mist} />
      <path d="M14 96H102V104H14Z" fill={PAL.steel} />
      <path d="M102 96L106 34V42L102 104Z" fill={PAL.steel} />
      <Shine d="M32 42L26 66" width={3} opacity={0.8} />
      {/* Red scraps of meat */}
      <path d="M40 60Q44 54 50 58Q54 64 48 66Q42 66 40 60Z" fill={PAL.red} />
      <path d="M72 80Q76 74 84 78Q86 84 78 85Q72 84 72 80Z" fill={PAL.red} />
      <path d="M78 44Q82 42 86 46Q84 50 80 50Q76 48 78 44Z" fill={PAL.red} />
      <path d="M48 62Q52 63 53 60" fill="none" stroke={PAL.redLight} strokeWidth="1.6" strokeLinecap="round" />
      {/* Crumbs of bread */}
      <rect x="58" y="52" width="7" height="6" rx="2" fill={PAL.card} transform="rotate(20 61 55)" />
      <rect x="34" y="80" width="8" height="6" rx="2" fill={PAL.card} transform="rotate(-15 38 83)" />
      <rect x="90" y="62" width="6" height="5" rx="2" fill={PAL.cardShade} />
      <rect x="50" y="84" width="5" height="5" rx="1.8" fill={PAL.cardShade} />
      {/* A bit of herb and a slice of carrot */}
      <path d="M60 72Q64 64 70 66Q66 72 60 72Z" fill={PAL.green} />
      <circle cx="44" cy="44" r="5" fill={PAL.orange} />
      <circle cx="44" cy="44" r="2" fill={PAL.orangeLight} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
