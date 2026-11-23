import type { JSX } from 'react';
import { PAL, Shine } from '../kit';
import { Bust } from '../bust';

export default {
  // "de bezoeker": the visitor — Jada (a guest from outside) in her coat, a bag over her shoulder, with
  // an orange visitor pass clipped to her chest.
  'w.bezoeker': () => (
    <g strokeLinejoin="round">
      <Bust who="jada" x={58} y={124} scale={0.84} expr="pleased" bold />
      {/* The bag strap across the chest and the bag at her side */}
      <path d="M36 92L84 122" stroke={PAL.brown} strokeWidth="4.5" strokeLinecap="round" />
      {/* The visitor pass: a white card with an orange band, clipped on */}
      <rect x="69" y="96" width="22" height="18" rx="3" fill={PAL.paperShade} transform="translate(1.5 2.5)" />
      <rect x="69" y="96" width="22" height="18" rx="3" fill={PAL.white} />
      <rect x="69" y="96" width="22" height="7" rx="3" fill={PAL.orange} />
      <rect x="69" y="100" width="22" height="3" fill={PAL.orange} />
      <path d="M74 108H86" stroke={PAL.line} strokeWidth="2" strokeLinecap="round" />
      <rect x="77" y="92" width="6" height="6" rx="1.5" fill={PAL.steel} />
      <Shine d="M72 99H78" width={1.6} opacity={0.7} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
