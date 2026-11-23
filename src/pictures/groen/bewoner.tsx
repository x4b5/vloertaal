import type { JSX } from 'react';
import { PAL, Shade } from '../kit';
import { Bust } from '../bust';

export default {
  // "de bewoner": the resident (someone who lives here) — Amina at home, standing in front of her own
  // house: a small house with a red roof, a window and a blue front door, her bust in front of it.
  'w.bewoner': () => (
    <g strokeLinejoin="round">
      {/* The house: wall, roof, chimney, window and front door */}
      <rect x="92" y="18" width="9" height="18" rx="1.6" fill={PAL.clayShade} />
      <Shade color={PAL.paperShade} opacity={1} at={[110, 74, 10, 40]}>
        <rect x="40" y="44" width="70" height="64" rx="2" fill={PAL.paper} />
      </Shade>
      <path d="M32 48L75 12L118 48Z" fill={PAL.clay} stroke={PAL.clay} strokeWidth="4" />
      <path d="M75 12L118 48H100Z" fill={PAL.clayShade} stroke={PAL.clayShade} strokeWidth="4" />
      <rect x="80" y="56" width="22" height="18" rx="2" fill={PAL.ice} />
      <path d="M91 56V74M80 65H102" stroke={PAL.paper} strokeWidth="2.4" />
      <rect x="80" y="80" width="20" height="28" rx="2" fill={PAL.blue} />
      <circle cx="96" cy="95" r="1.8" fill={PAL.yellow} />
      {/* Amina in front of her house */}
      <Bust who="amina" x={46} y={112} scale={0.66} expr="pleased" />
    </g>
  ),
} as Record<string, () => JSX.Element>;
