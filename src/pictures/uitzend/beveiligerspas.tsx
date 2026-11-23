import type { JSX } from 'react';
import { CastHead } from '../../components/Characters';
import { PAL, Shine } from '../kit';

export default {
  // "de beveiligerspas": the security guard pass — a white card on a navy lanyard: a photo of a face
  // (Henk) at the top, a navy shield with a gold star under it, grey lines for the name. No readable text.
  'w.beveiligerspas': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      {/* The lanyard: two straps down to the clip */}
      <path d="M30 6L54 30M90 6L66 30" stroke={PAL.navyShade} strokeWidth="8" />
      <path d="M30 6L54 30M90 6L66 30" stroke={PAL.navy} strokeWidth="5" />
      <rect x="52" y="26" width="16" height="10" rx="3" fill={PAL.steel} />
      <rect x="56" y="34" width="8" height="8" rx="2" fill={PAL.slate} />
      {/* The card */}
      <rect x="30" y="40" width="60" height="70" rx="5" fill={PAL.paperShade} transform="translate(2 3)" />
      <rect x="30" y="40" width="60" height="70" rx="5" fill={PAL.white} />
      <rect x="54" y="44" width="12" height="3" rx="1.5" fill={PAL.mist} />
      {/* The photo */}
      <rect x="36" y="52" width="24" height="30" rx="2.5" fill={PAL.ice} />
      <svg x="36" y="52" width="24" height="30" viewBox="0 0 24 30" overflow="hidden">
        <g transform="translate(12 35) scale(0.29) translate(-60 -96)">
          <CastHead who="henk" expr="neutral" gaze={[0, 0]} bold />
        </g>
      </svg>
      {/* The shield with a star */}
      <path d="M75 52L86 56V66Q86 76 75 82Q64 76 64 66V56Z" fill={PAL.navy} />
      <path d="M75 52L86 56V66Q86 76 75 82Z" fill={PAL.navyShade} />
      <path d="M75 59L77.4 64.2L83 64.8L78.8 68.4L80 74L75 71.2L70 74L71.2 68.4L67 64.8L72.6 64.2Z" fill={PAL.yellow} />
      {/* Name lines */}
      <path d="M38 92H82M38 101H70" stroke={PAL.line} strokeWidth="3.2" />
      <Shine d="M35 48V58" width={2.4} opacity={0.5} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
