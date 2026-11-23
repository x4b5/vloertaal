import type { JSX } from 'react';
import { CastHead } from '../../components/Characters';
import { PAL, Shine } from '../kit';

export default {
  // "de legitimatie": the ID (a passport or an ID card) — a dark red passport with a gold emblem lies
  // slanted at the back; in front of it an ID card: a photo of a face (Amina) on the left, grey lines
  // for the name and the date of birth, and a blue band along the top.
  'w.legitimatie': () => (
    <g strokeLinejoin="round">
      {/* The passport */}
      <g transform="rotate(-10 44 46)">
        <rect x="14" y="14" width="52" height="68" rx="5" fill={PAL.brown} transform="translate(3 3)" />
        <rect x="14" y="14" width="52" height="68" rx="5" fill={PAL.redShade} />
        <rect x="14" y="14" width="8" height="68" rx="3" fill={PAL.brown} opacity=".5" />
        <circle cx="42" cy="40" r="10" fill="none" stroke={PAL.yellow} strokeWidth="3" />
        <circle cx="42" cy="40" r="4" fill={PAL.yellow} />
        <path d="M32 62H52" stroke={PAL.yellow} strokeWidth="3" strokeLinecap="round" />
      </g>
      {/* The ID card */}
      <rect x="30" y="52" width="80" height="52" rx="5" fill={PAL.paperShade} transform="translate(0 4)" />
      <rect x="30" y="52" width="80" height="52" rx="5" fill={PAL.white} />
      <path d="M30 57Q30 52 35 52H105Q110 52 110 57V62H30Z" fill={PAL.sky} />
      <rect x="36" y="67" width="26" height="31" rx="2.5" fill={PAL.ice} />
      <svg x="36" y="67" width="26" height="31" viewBox="0 0 26 31" overflow="hidden">
        <g transform="translate(13 36) scale(0.3) translate(-60 -96)">
          <CastHead who="amina" expr="neutral" gaze={[0, 0]} bold />
        </g>
      </svg>
      <path d="M68 72H102M68 81H96M68 90H90" stroke={PAL.line} strokeWidth="3.4" strokeLinecap="round" />
      <Shine d="M36 57H58" width={2.4} opacity={0.6} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
