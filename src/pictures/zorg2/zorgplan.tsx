import type { JSX } from 'react';
import { PAL, Shine } from '../kit';

export default {
  // "het zorgplan": the care plan — a sheet with a green header (the client's head and shoulders) and three
  // rows, each with what care is given and lines on how: a blue water drop (washing), a red-and-white pill
  // (medicines) and a small clock (when).
  'w.zorgplan': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      <rect x="18" y="10" width="84" height="100" rx="6" fill={PAL.paperShade} transform="translate(3 3)" />
      <rect x="18" y="10" width="84" height="100" rx="6" fill={PAL.white} />
      {/* Header: the client */}
      <path d="M18 16Q18 10 24 10H96Q102 10 102 16V34H18Z" fill={PAL.green} />
      <circle cx="34" cy="20" r="5.4" fill={PAL.white} />
      <path d="M25 34Q25 26 34 26Q43 26 43 34Z" fill={PAL.white} />
      <path d="M52 20H90M52 27H78" stroke={PAL.lime} strokeWidth="3" />
      {/* Row 1: washing */}
      <path d="M32 40Q38 48 38 52A6 6 0 0 1 26 52Q26 48 32 40Z" fill={PAL.sky} />
      <path d="M48 46H90M48 54H78" stroke={PAL.line} strokeWidth="2.8" />
      {/* Row 2: a pill */}
      <g transform="rotate(-35 32 72)">
        <rect x="22" y="67" width="20" height="10" rx="5" fill={PAL.paperShade} />
        <path d="M27 67H32V77H27A5 5 0 0 1 27 67Z" fill={PAL.red} />
      </g>
      <path d="M48 68H90M48 76H82" stroke={PAL.line} strokeWidth="2.8" />
      {/* Row 3: a clock */}
      <circle cx="32" cy="94" r="8" fill={PAL.orange} />
      <circle cx="32" cy="94" r="5.6" fill={PAL.white} />
      <path d="M32 90.5V94L34.6 95.6" stroke={PAL.ink} strokeWidth="1.6" />
      <path d="M48 90H90M48 98H74" stroke={PAL.line} strokeWidth="2.8" />
      <Shine d="M22 42V104" color={PAL.ice} width={2.4} opacity={0.8} />
      <path d="M22 59H98M22 81H98" stroke={PAL.paperShade} strokeWidth="1.6" />
    </g>
  ),
} as Record<string, () => JSX.Element>;
