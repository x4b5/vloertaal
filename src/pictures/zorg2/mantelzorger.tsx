import type { JSX } from 'react';
import { CastHead } from '../../components/Characters';
import { Bust } from '../bust';
import { PAL, SKIN } from '../kit';

/** A heart, centred near (x, y), `s` times 1. */
const heart = (x: number, y: number, s: number) =>
  `M${x} ${y - 4 * s}C${x} ${y - 12 * s} ${x - 14 * s} ${y - 12 * s} ${x - 14 * s} ${y - 2 * s}C${x - 14 * s} ${y + 6 * s} ${x} ${y + 12 * s} ${x} ${y + 14 * s}C${x} ${y + 12 * s} ${x + 14 * s} ${y + 6 * s} ${x + 14 * s} ${y - 2 * s}C${x + 14 * s} ${y - 12 * s} ${x} ${y - 12 * s} ${x} ${y - 4 * s}Z`;

export default {
  // "de mantelzorger": the family carer — Amina, in her own clothes (no uniform), stands close beside her
  // old father Henk in his purple cardigan, her arm round his shoulders; a red heart above them.
  'w.mantelzorger': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      <path d={heart(60, 22, 0.95)} fill={PAL.redShade} transform="translate(1.5 2)" />
      <path d={heart(60, 22, 0.95)} fill={PAL.red} />
      {/* Henk, the client, in his cardigan */}
      <g transform="translate(80 124) scale(0.62) translate(-60 -134)">
        <path d="M18 134C18 104 35 92 60 92C85 92 102 104 102 134Z" fill={PAL.purple} />
        <path d="M50 92L60 116L70 92Z" fill={PAL.paper} />
        <path d="M50 92L60 116L70 92" fill="none" stroke={PAL.purpleShade} strokeWidth="3" />
        <path d="M86 102C95 108 102 118 102 134H86Z" fill={PAL.purpleShade} opacity=".6" />
        <CastHead who="henk" expr="pleased" />
      </g>
      {/* Amina, his daughter */}
      <Bust who="amina" x={38} y={124} scale={0.62} expr="pleased" />
      {/* Her arm round his shoulders, her hand on his far shoulder */}
      <path d="M46 106Q70 94 96 100" fill="none" stroke="#2f8f3e" strokeWidth="8" />
      <circle cx="97" cy="100" r="5.4" fill={SKIN.amina[0]} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
