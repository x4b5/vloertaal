import type { JSX } from 'react';
import { PAL, Shade } from '../kit';

export default {
  // "de advertentie": the ad (a text that offers a job or a thing) — a newspaper page in grey
  // columns, with one framed ad box (a yellow hard hat and two lines) ringed with a red marker.
  'w.advertentie': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      <g transform="rotate(-5 60 60)">
        <rect x="14" y="14" width="88" height="92" rx="3" fill={PAL.mist} transform="translate(3 3)" />
        <Shade color={PAL.paperShade} opacity={1} at={[106, 60, 12, 70]}>
          <rect x="14" y="14" width="88" height="92" rx="3" fill={PAL.paper} />
        </Shade>
        <rect x="22" y="20" width="72" height="8" rx="2" fill={PAL.slate} />
        {/* Columns of text */}
        <path d="M22 36H52M22 42H50M22 48H52M22 54H46M22 60H52M22 66H50M22 72H52M22 78H48M22 84H52M22 90H50M22 96H44" stroke={PAL.line} strokeWidth="2.2" />
        <path d="M60 86H94M60 92H90M60 98H94" stroke={PAL.line} strokeWidth="2.2" />
        {/* The ad box */}
        <rect x="58" y="34" width="38" height="44" rx="2" fill={PAL.white} />
        <rect x="58" y="34" width="38" height="44" rx="2" fill="none" stroke={PAL.slate} strokeWidth="2" />
        <path d="M66 58Q66 44 77 43Q88 44 88 58Z" fill={PAL.yellow} />
        <path d="M84 46Q88 50 88 58H83Z" fill={PAL.yellowShade} />
        <rect x="63" y="57" width="28" height="4" rx="2" fill={PAL.yellowShade} />
        <path d="M64 67H90M64 72H84" stroke={PAL.slate} strokeWidth="2.4" />
      </g>
      {/* The red marker ring round the ad */}
      <ellipse cx="78" cy="54" rx="29" ry="31" fill="none" stroke={PAL.red} strokeWidth="4" transform="rotate(-12 78 54)" />
    </g>
  ),
} as Record<string, () => JSX.Element>;
