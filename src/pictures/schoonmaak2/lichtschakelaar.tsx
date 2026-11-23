import type { JSX } from 'react';
import { PAL, Shine } from '../kit';

export default {
  // "de lichtschakelaar": the light switch — a white switch plate on a light wall, its rocker down (on), and
  // above it a ceiling lamp that is lit, with yellow rays: this switch is for the light. (The lamp keeps it
  // apart from "de schakelaar", the plain rocker switch.)
  'w.lichtschakelaar': () => (
    <g strokeLinejoin="round">
      {/* The lamp: cord, shade, bulb and rays */}
      <path d="M86 8V18" stroke={PAL.slate} strokeWidth="2.4" strokeLinecap="round" />
      <path d="M86 32m-9 0a9 9 0 0 0 18 0Z" fill={PAL.yellow} />
      <path d="M72 32L78 18H94L100 32Z" fill={PAL.slate} />
      <path d="M94 18L100 32H95Z" fill={PAL.slateDark} />
      <path d="M86 46V54M72 42L67 48M100 42L105 48M64 34H58M108 34H114" stroke={PAL.yellow} strokeWidth="3.4" strokeLinecap="round" transform="translate(0 0) scale(1)" />
      {/* The switch plate with its depth edge */}
      <rect x="16" y="46" width="58" height="58" rx="9" fill={PAL.paperShade} transform="translate(3 3)" />
      <rect x="16" y="46" width="58" height="58" rx="9" fill={PAL.white} />
      <rect x="27" y="57" width="36" height="36" rx="5" fill={PAL.mist} />
      {/* The rocker: its bottom half pressed in */}
      <path d="M30 60H60V75H30Z" fill={PAL.white} />
      <path d="M30 75H60V90H30Z" fill={PAL.paperShade} />
      <path d="M30 75H60" stroke={PAL.line} strokeWidth="1.6" />
      <Shine d="M22 56V70" width={3} color={PAL.paperShade} opacity={1} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
