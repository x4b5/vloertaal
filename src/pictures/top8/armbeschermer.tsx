import type { JSX } from 'react';
import { Hand, PAL, Shine } from '../kit';

export default {
  // "de armbeschermer": the arm guard (a sleeve that protects your arm against cuts) — a forearm coming
  // in from the bottom left in a long grey knitted cut-resistant sleeve (its ribs and a dark cuff at the
  // wrist), the hand in a light grey cut-resistant glove, holding a big pane of glass by its bottom edge.
  'w.armbeschermer': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      <g transform="translate(42 96) rotate(14)">
        {/* The pane of glass, held by its bottom edge */}
        <path d="M-10 -20L-6 -82H50L46 -20Z" fill={PAL.ice} opacity=".9" />
        <path d="M46 -20L50 -82L55 -80L51 -18Z" fill={PAL.sky} />
        <rect x="-10" y="-22" width="56" height="4" rx="1.4" fill={PAL.sky} />
        <path d="M14 -42L20 -70M26 -38L30 -58" stroke={PAL.white} strokeWidth="3" opacity=".9" />
        {/* The long knitted sleeve, past the elbow (cut off by the card) */}
        <rect x="-15" y="2" width="30" height="80" rx="6" fill={PAL.steel} />
        <rect x="6" y="2" width="9" height="80" rx="4" fill={PAL.slate} opacity=".45" />
        <path d="M-12 14H12M-12 22H12M-12 30H12M-12 38H12M-12 46H12M-12 54H12" stroke={PAL.slate} strokeWidth="1.4" opacity=".55" />
        <rect x="-16" y="-2" width="32" height="8" rx="3" fill={PAL.slate} />
        {/* The gloved hand */}
        <Hand pose="hold" x={0} y={0} scale={1.05} skin={[PAL.mist, PAL.steel]} />
        <Shine d="M-10 70V20" width={2.6} opacity={0.4} />
      </g>
    </g>
  ),
} as Record<string, () => JSX.Element>;
