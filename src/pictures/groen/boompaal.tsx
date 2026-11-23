import type { JSX } from 'react';
import { Ground, PAL, Shine } from '../kit';

export default {
  // "de boompaal": the tree stake (a pole that holds a young tree) — a thick wooden pole stuck in the grass
  // next to a thin young tree, the two tied together with two black rubber bands.
  'w.boompaal': () => (
    <g strokeLinejoin="round">
      <Ground cx={60} cy={104} rx={36} ry={4.5} />
      {/* The young tree: a thin trunk and a small crown */}
      <path d="M68 104Q66 70 70 36" fill="none" stroke={PAL.cardDark} strokeWidth="5" strokeLinecap="round" />
      <circle cx="62" cy="30" r="15" fill={PAL.greenShade} />
      <circle cx="84" cy="28" r="14" fill={PAL.green} />
      <circle cx="74" cy="15" r="13" fill={PAL.leaf} />
      {/* The stake: a thick round pole, lit on the left, its top sawn off */}
      <rect x="40" y="20" width="16" height="86" rx="4" fill={PAL.wood} />
      <rect x="49" y="20" width="7" height="86" rx="3" fill={PAL.cardDark} />
      <ellipse cx="48" cy="21" rx="8" ry="3" fill={PAL.card} />
      <Shine d="M44 30V92" color="#f0c48a" width={2.6} opacity={0.9} />
      {/* The two ties round pole and trunk */}
      {[50, 78].map((y) => (
        <g key={y}>
          <path d={`M38 ${y}H70`} stroke={PAL.slateDark} strokeWidth="6" strokeLinecap="round" />
          <path d={`M58 ${y - 3}L62 ${y + 3}M62 ${y - 3}L58 ${y + 3}`} stroke={PAL.slate} strokeWidth="2" strokeLinecap="round" />
        </g>
      ))}
      {/* Grass at the foot */}
      <path d="M30 104L33 96L36 104M74 104L77 95L80 104M84 104L86 98L88 104" fill="none" stroke={PAL.green} strokeWidth="2.6" strokeLinecap="round" />
    </g>
  ),
} as Record<string, () => JSX.Element>;
