import type { JSX } from 'react';
import { PAL, Shine } from '../kit';

export default {
  // "het lotnummer": the batch number (one number for one batch of products) — a white product label with
  // grey text lines and a barcode; one printed code line is marked yellow, and a magnifying glass looks
  // at it. (No digits: the code is drawn as dark blocks.)
  'w.lotnummer': () => (
    <g strokeLinejoin="round">
      {/* The label, with its depth edge */}
      <rect x="12" y="20" width="76" height="80" rx="5" fill={PAL.paperShade} transform="translate(2 4)" />
      <rect x="12" y="20" width="76" height="80" rx="5" fill={PAL.white} />
      <path d="M22 32H66M22 40H56" stroke={PAL.line} strokeWidth="3" strokeLinecap="round" />
      {/* The barcode */}
      <path d="M23 50V70M27 50V70M33 50V70M36 50V70M41 50V70M47 50V70M50 50V70M55 50V70" stroke={PAL.slateDark} strokeWidth="2.4" />
      {/* The batch code, marked */}
      <rect x="18" y="78" width="56" height="14" rx="3" fill={PAL.yellowLight} />
      <path d="M24 85H30M34 85H40M44 85H50M54 85H60M64 85H68" stroke={PAL.slateDark} strokeWidth="5" />
      {/* The magnifying glass over the code */}
      <path d="M86 98L104 112" stroke={PAL.slateDark} strokeWidth="9" strokeLinecap="round" />
      <circle cx="72" cy="84" r="20" fill={PAL.ice} opacity=".35" />
      <circle cx="72" cy="84" r="20" fill="none" stroke={PAL.sky} strokeWidth="6" />
      <Shine d="M60 76Q63 70 69 68" width={3} opacity={0.9} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
