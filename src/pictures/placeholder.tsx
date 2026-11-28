import type { JSX } from 'react';
import { PAL } from './kit';

/**
 * A TEMPORARY word picture (23 November 2026): a tinted rounded square with the word's emoji in
 * it, for the new sectors Groen and Facilitair (and, the same day, Beveiliging, Voedingsindustrie,
 * Afval en recycling and Kinderopvang; and the five units of Schoonmaak, Horeca, Zorg, Winkel and
 * uitzendwerk; and the new lessons of the basis units at four lessons, "Veiligheid op het werk" and
 * "Operator in de procesindustrie"; and the eight new lessons of 26 November 2026, and the four of 27 November) until their words are drawn. It breaks two rules of
 * docs/tekenstijl.md on purpose ("no text in pictures" and "only SVG, no emoji"), so a picture
 * choice can still be answered meanwhile. Illustrators replace each file in ./groen,
 * ./facilitair, ./beveiliging, ./voeding, ./afval, ./kinderopvang, ./schoonmaak2, ./horeca2, ./zorg2,
 * ./winkel2, ./uitzend, ./basis, ./veilig2, ./proces, ./top8 and ./extra4 with a real drawing; when the last one is gone, this file goes too.
 */
const TINT = {
  groen: [PAL.lime, PAL.leafShade],
  facilitair: [PAL.ice, PAL.blueShade],
  // Beveiliging, Voedingsindustrie, Afval en recycling and Kinderopvang (23 November 2026).
  beveiliging: [PAL.mist, PAL.navy],
  voeding: [PAL.yellowShine, PAL.yellowShade],
  afval: [PAL.paperShade, PAL.greenShade],
  kinderopvang: [PAL.redLight, PAL.purple],
  // The second own units of Schoonmaak, Horeca, Zorg and Winkel, and "Werken via een uitzendbureau"
  // (23 November 2026).
  schoonmaak2: [PAL.sky, PAL.skyShade],
  horeca2: [PAL.orangeLight, PAL.orangeShade],
  zorg2: [PAL.purpleLight, PAL.purpleShade],
  winkel2: [PAL.yellowLight, PAL.greenShade],
  uitzend: [PAL.blueLight, PAL.navy],
  // The basis units at four lessons (23 November 2026): their 26 new lessons.
  basis: [PAL.clayLight, PAL.clayShade],
  // "Veiligheid op het werk" (u.safework, 23 November 2026).
  veilig2: [PAL.yellowLight, PAL.redShade],
  // "Operator in de procesindustrie" (u.process, 23 November 2026).
  proces: [PAL.mist, PAL.slateDark],
  // The eight new lessons of 26 November 2026 (src/pictures/groupTop8.tsx).
  top8: [PAL.ice, PAL.purpleShade],
  // The four new lessons of 27 November 2026 (src/pictures/groupExtra4.tsx).
  extra4: [PAL.yellowShine, PAL.navy],
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
