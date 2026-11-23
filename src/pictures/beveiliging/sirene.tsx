import type { JSX } from 'react';
import { Motion, PAL, Shade, Shine } from '../kit';

export default {
  // "de sirene": the siren — a big red siren horn on a grey wall bracket at the left: a round housing and a
  // wide bell-shaped horn opening to the right, with its dark mouth; thick sound lines go out of it.
  'w.sirene': () => (
    <g strokeLinejoin="round">
      {/* The wall bracket */}
      <rect x="10" y="34" width="10" height="52" rx="3" fill={PAL.steel} />
      <rect x="18" y="56" width="10" height="10" fill={PAL.slate} />
      {/* The housing */}
      <Shade color={PAL.redShade} opacity={1} at={[50, 76, 26, 12]}>
        <rect x="24" y="44" width="30" height="34" rx="10" fill={PAL.red} />
      </Shade>
      {/* The horn */}
      <Shade color={PAL.redShade} opacity={1} at={[76, 90, 26, 14]}>
        <path d="M50 50L84 32V90L50 72Z" fill={PAL.red} />
      </Shade>
      <ellipse cx="84" cy="61" rx="8" ry="29" fill={PAL.redShade} />
      <ellipse cx="85" cy="61" rx="5" ry="22" fill={PAL.slateDark} />
      <Shine d="M30 50Q34 47 40 47M56 50L76 40" width={3} opacity={0.5} />
      {/* The sound */}
      <Motion x={88} y={61} dir={0} spread={70} n={3} len={14} gap={8} color={PAL.red} width={5} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
