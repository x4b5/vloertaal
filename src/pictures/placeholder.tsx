import type { JSX } from 'react';
import { PAL } from './kit';

/**
 * A TEMPORARY word picture (23 November 2026): a tinted rounded square with the word's emoji in
 * it, for the new sectors Groen and Facilitair until their words are drawn. It breaks two rules of
 * docs/tekenstijl.md on purpose ("no text in pictures" and "only SVG, no emoji"), so a picture
 * choice can still be answered meanwhile. Illustrators replace each file in ./groen and
 * ./facilitair with a real drawing; when the last one is gone, this file goes too.
 */
const TINT = {
  groen: [PAL.lime, PAL.leafShade],
  facilitair: [PAL.ice, PAL.blueShade],
} as const;

export const placeholder = (emoji: string, kind: keyof typeof TINT) => (): JSX.Element => (
  <g>
    <rect x="14" y="14" width="92" height="92" rx="20" fill={TINT[kind][0]} />
    <rect x="14" y="14" width="92" height="92" rx="20" fill="none" stroke={TINT[kind][1]} strokeWidth="3" strokeDasharray="8 6" />
    <text x="60" y="62" textAnchor="middle" dominantBaseline="central" fontSize="54" fontFamily="'Apple Color Emoji', 'Segoe UI Emoji', 'Noto Color Emoji', sans-serif">
      {emoji}
    </text>
  </g>
);
