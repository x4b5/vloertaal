import type { JSX } from 'react';
import { Hand, PAL, SKIN, Shine } from '../kit';

const [SK, SKS] = SKIN.amina;

export default {
  // "de huid": the skin — a bare forearm and hand lying flat, and a big magnifying glass over the arm that
  // shows the skin close up: its fine lines and little pores.
  'w.huid': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      {/* The forearm (a sleeve at the left) and the hand */}
      <rect x="2" y="68" width="22" height="30" rx="4" fill={PAL.green} />
      <rect x="20" y="68" width="6" height="30" rx="2" fill={PAL.greenShade} />
      <rect x="24" y="71" width="58" height="24" rx="10" fill={SK} />
      <rect x="24" y="86" width="58" height="9" rx="4.5" fill={SKS} />
      <Hand pose="open" x={80} y={83} rotate={90} scale={0.72} skin={SKIN.amina} />
      {/* The magnifying glass */}
      <path d="M30 52L12 24" stroke={PAL.slate} strokeWidth="9" />
      <circle cx="46" cy="72" r="26" fill={PAL.slate} />
      <circle cx="46" cy="72" r="21" fill={SK} />
      <path d="M25 66H67" stroke={SKS} strokeWidth="0" />
      {/* The skin close up: lines and pores */}
      <path d="M30 62Q38 58 46 62Q54 66 62 62M28 74Q36 70 44 74Q52 78 64 74M30 86Q38 82 46 86Q54 90 60 86" fill="none" stroke={SKS} strokeWidth="1.8" />
      {[[36, 67], [52, 68], [40, 80], [56, 81], [46, 92], [34, 55], [58, 56]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="1.6" fill={SKS} />
      ))}
      <Shine d="M30 60Q34 52 42 50" width={3.4} opacity={0.7} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
