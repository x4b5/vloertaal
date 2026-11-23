import type { JSX } from 'react';
import { Ground, PAL, Shine } from '../kit';

export default {
  // "de snijplank": the cutting board — a thick green plastic cutting board seen from above at a slant,
  // with a hanging hole at its corner and a few knife marks, an empty board with a chef's knife lying on it.
  'w.snijplank': () => (
    <g strokeLinejoin="round">
      <Ground cx={60} cy={100} rx={50} ry={5} />
      {/* The board's thickness, then its top face */}
      <path d="M10 76L72 98L110 62V68L72 104L10 82Z" fill={PAL.greenShade} />
      <path d="M10 76L48 42L110 62L72 98Z" fill={PAL.green} />
      <path d="M72 98L110 62V68L72 104Z" fill="#256b31" />
      {/* The hanging hole */}
      <ellipse cx="28" cy="70" rx="6" ry="4" fill="#256b31" />
      {/* Knife marks */}
      <path d="M58 58L74 64M54 66L66 70M78 72L88 76" stroke={PAL.greenShade} strokeWidth="1.6" strokeLinecap="round" />
      <Shine d="M18 74L44 50" width={3} opacity={0.5} color={PAL.lime} />
      {/* The knife lying on it */}
      <path d="M44 84L88 56Q94 54 96 58L56 86Z" fill={PAL.mist} />
      <path d="M56 86L96 58Q97 62 92 64L58 88Z" fill={PAL.steel} />
      <path d="M28 94L44 84" stroke={PAL.slateDark} strokeWidth="9" strokeLinecap="round" />
      <circle cx="35" cy="89" r="1.6" fill={PAL.mist} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
