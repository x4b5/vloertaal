import type { JSX } from 'react';
import { PAL, Shine } from '../kit';

export default {
  // "de zaagbroek": the chainsaw trousers — sturdy work trousers seen from the front: dark grey, with
  // thick orange protective panels down the front of both legs, a waistband with belt loops and a
  // pocket on the thigh.
  'w.zaagbroek': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      {/* The trousers */}
      <path d="M32 16H88L94 104H66L60 48L54 104H26Z" fill={PAL.slate} stroke={PAL.slate} strokeWidth="3" />
      <path d="M77 16H88L94 104H84Z" fill={PAL.slateDark} />
      {/* The orange panels down the front of the legs */}
      <path d="M34 26H54L56 50L52 98H34L32 60Z" fill={PAL.orange} />
      <path d="M66 26H86L88 60L86 98H68L64 50Z" fill={PAL.orangeShade} />
      <path d="M38 62H50M70 62H82" stroke={PAL.orangeShade} strokeWidth="2.4" />
      <path d="M70 62H82" stroke={PAL.orange} strokeWidth="2.4" opacity=".5" />
      {/* The waistband and its loops */}
      <rect x="30" y="12" width="60" height="11" rx="3" fill={PAL.slateDark} />
      <path d="M38 12V23M60 12V23M82 12V23" stroke={PAL.slate} strokeWidth="3" />
      {/* A pocket on the thigh */}
      <rect x="22" y="36" width="10" height="20" rx="3" fill={PAL.slateDark} />
      <Shine d="M38 30V50" width={3.4} opacity={0.5} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
