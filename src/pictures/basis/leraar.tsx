import type { JSX } from 'react';
import { Bust } from '../bust';
import { Hand, PAL, SKIN } from '../kit';

export default {
  // "de leraar": the teacher — Henk in front of a green school board with chalk shapes on it (a
  // triangle, a circle, lines: no letters), pointing at it.
  'w.leraar': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      {/* The school board on its wooden frame */}
      <rect x="8" y="12" width="78" height="56" rx="4" fill={PAL.cardDark} />
      <rect x="12" y="16" width="70" height="48" rx="2" fill={PAL.ok} />
      <path d="M60 16H82V64H52Z" fill={PAL.okShade} opacity=".5" />
      <rect x="8" y="66" width="78" height="5" rx="2" fill={PAL.card} />
      <rect x="22" y="63" width="10" height="4" rx="1.5" fill={PAL.white} />
      {/* Chalk shapes */}
      <path d="M22 50L32 28L42 50Z" fill="none" stroke={PAL.white} strokeWidth="2.6" opacity=".9" />
      <circle cx="58" cy="36" r="8" fill="none" stroke={PAL.white} strokeWidth="2.6" opacity=".9" />
      <path d="M50 52H72M50 58H64" stroke={PAL.white} strokeWidth="2.4" opacity=".75" />
      {/* Bram, pointing at the board */}
      <Bust who="henk" x={84} y={120} scale={0.72} expr="pleased" flip bold />
      <path d="M70 110L56 84" stroke={PAL.navy} strokeWidth="10" />
      <Hand pose="point" x={56} y={86} rotate={-40} scale={0.56} skin={SKIN.henk} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
