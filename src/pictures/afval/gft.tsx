import type { JSX } from 'react';
import { Ground, PAL, Shine } from '../kit';

export default {
  // "het gft": the food and garden waste — a heap on the ground: a yellow banana peel with its skin flaps open,
  // a red apple core with brown pips, and two green leaves with a twig.
  'w.gft': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      <Ground cx={60} cy={102} rx={50} ry={5} />
      {/* The leaves and the twig, behind */}
      <path d="M14 98L36 58" stroke={PAL.cardDark} strokeWidth="3.6" />
      <path d="M36 58Q18 54 16 34Q36 34 36 58Z" fill={PAL.leaf} />
      <path d="M36 58L22 40" stroke={PAL.leafShade} strokeWidth="1.8" />
      <path d="M26 78Q38 60 54 66Q44 84 26 78Z" fill={PAL.green} />
      <path d="M28 76L48 68" stroke={PAL.greenShade} strokeWidth="1.8" />
      {/* The apple core */}
      <path d="M78 24L80 14" stroke={PAL.brown} strokeWidth="3" />
      <path d="M80 16Q90 10 94 16Q86 20 80 16Z" fill={PAL.leaf} />
      <path d="M64 30Q80 22 96 30Q90 36 90 44Q86 52 90 60Q94 66 96 72Q80 82 64 72Q68 66 70 60Q74 52 70 44Q70 36 64 30Z" fill="#f6e7c4" />
      <path d="M64 30Q80 22 96 30Q90 30 80 30Q70 30 64 30Z" fill={PAL.red} />
      <path d="M64 30Q60 32 62 38Q66 34 70 40Q70 34 64 30ZM96 30Q100 32 98 38Q94 34 90 40Q90 34 96 30Z" fill={PAL.red} />
      <path d="M64 72Q80 82 96 72Q98 78 92 82Q80 88 68 82Q62 78 64 72Z" fill={PAL.redShade} />
      <ellipse cx="77" cy="50" rx="2" ry="3.4" fill={PAL.brown} />
      <ellipse cx="83" cy="54" rx="2" ry="3.4" fill={PAL.brown} />
      {/* The banana peel, in front */}
      <path d="M44 100Q34 92 40 84Q50 90 58 88Q70 84 80 88Q96 90 108 82Q110 92 100 98Q86 104 66 104Q52 104 44 100Z" fill={PAL.yellow} />
      <path d="M70 100Q90 102 104 92Q108 88 108 82Q110 92 100 98Q86 104 70 100Z" fill={PAL.yellowShade} />
      <path d="M58 88Q50 72 56 62Q62 76 66 86Z" fill={PAL.yellowLight} />
      <path d="M76 88Q86 72 96 70Q92 80 84 90Z" fill={PAL.yellow} />
      <path d="M38 84L34 80" stroke={PAL.brown} strokeWidth="4" />
      <Shine d="M48 94Q56 96 66 94" color={PAL.yellowShine} width={2.8} opacity={0.9} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
