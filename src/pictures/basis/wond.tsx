import type { JSX } from 'react';
import { Hand, Motion, PAL, SKIN, Shade, Shine } from '../kit';

const SK = SKIN.henk;

export default {
  // "de wond": the wound — a bare forearm lying across the card (blue sleeve on the left, the hand on the
  // right), with one red, sore patch in a pink rim on it and short red pain lines above; no blood.
  'w.wond': () => (
    <g>
      {/* Hand at the end of the arm, fingers to the right */}
      <Hand pose="open" x={86} y={66} rotate={90} scale={0.78} skin={SK} />
      {/* The forearm */}
      <Shade color={SK[1]} opacity={0.9} at={[60, 84, 70, 9]}>
        <path d="M22 50Q56 47 88 54L88 78Q56 84 22 82Z" fill={SK[0]} />
      </Shade>
      {/* Sleeve with cuff */}
      <path d="M6 44H26V88H6Z" fill={PAL.blue} />
      <rect x="22" y="44" width="9" height="44" rx="2.4" fill={PAL.blueShade} />
      <Shine d="M38 54Q56 51 76 55" opacity={0.45} width={3} />
      {/* The wound: a pink rim, a red patch, a darker middle */}
      <ellipse cx="57" cy="66" rx="17" ry="10" fill={PAL.redLight} />
      <path d="M44 66Q46 59 55 60Q66 58 70 64Q71 71 61 73Q48 74 44 66Z" fill={PAL.red} />
      <path d="M51 66Q55 63 62 64Q65 67 60 69Q54 70 51 66Z" fill={PAL.redShade} />
      {/* It hurts */}
      <Motion x={57} y={42} dir={-90} spread={70} n={3} len={8} gap={8} color={PAL.red} width={3.4} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
