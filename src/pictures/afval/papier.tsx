import type { JSX } from 'react';
import { Ground, PAL, Shine } from '../kit';

export default {
  // "het papier": the paper — a stack of old newspapers, a little from above: the sheets show as layers on the
  // front, the top paper has a dark headline bar, a photo box and grey text lines (no letters); a brown string
  // is tied round the stack (not the brown boxes of "het karton").
  'w.papier': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      <Ground cx={60} cy={102} rx={50} ry={5} />
      {/* The side and front of the stack, in layers */}
      <path d="M96 56L110 46V84L96 96Z" fill={PAL.mist} />
      <rect x="12" y="56" width="84" height="40" rx="2" fill={PAL.paperShade} />
      <path d="M14 64H94M14 72H94M14 80H94M14 88H94M98 63L108 55M98 71L108 63M98 79L108 71M98 87L108 79" stroke={PAL.mist} strokeWidth="1.6" />
      {/* The top newspaper */}
      <path d="M12 56L26 46H110L96 56Z" fill={PAL.paper} />
      <path d="M12 56L28 30H112L110 46L96 56Z" fill={PAL.paper} transform="translate(0 0)" />
      <path d="M22 44L28 34H62L56 44Z" fill={PAL.slate} />
      <path d="M68 44L72 34H104L100 44Z" fill={PAL.mist} />
      <path d="M22 50H54M58 50H92M20 53H50" stroke={PAL.line} strokeWidth="1.6" />
      <path d="M70 40H100" stroke={PAL.line} strokeWidth="1.6" />
      <Shine d="M18 52L26 40" width={2.6} opacity={0.9} />
      {/* The string round the stack */}
      <path d="M54 30L40 56V96M90 30L76 56V96M12 76H96L110 66" fill="none" stroke={PAL.cardDark} strokeWidth="2.4" />
    </g>
  ),
} as Record<string, () => JSX.Element>;
