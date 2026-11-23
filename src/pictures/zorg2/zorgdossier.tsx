import type { JSX } from 'react';
import { Ground, PAL, Shade, Shine } from '../kit';

export default {
  // "het zorgdossier": the care file — a thick blue ring binder standing up, slightly turned: on its cover a
  // white label with a client's head and shoulders and a red heart; coloured tabs stick out of the pages.
  'w.zorgdossier': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      <Ground cx={62} cy={106} rx={40} ry={4} />
      {/* Pages and their tabs, seen at the right edge */}
      <path d="M86 18L98 12V96L86 104Z" fill={PAL.paperShade} />
      <path d="M86 18L98 12V96L86 104Z" fill="none" stroke={PAL.mist} strokeWidth="1.2" />
      <rect x="94" y="24" width="12" height="10" rx="2.5" fill={PAL.yellow} />
      <rect x="94" y="44" width="12" height="10" rx="2.5" fill={PAL.green} />
      <rect x="94" y="64" width="12" height="10" rx="2.5" fill={PAL.red} />
      {/* The back cover's edge and the spine */}
      <rect x="18" y="14" width="14" height="92" rx="4" fill={PAL.blueShade} />
      {/* The front cover */}
      <Shade color={PAL.blueShade} opacity={1} at={[96, 60, 12, 60]}>
        <rect x="26" y="14" width="64" height="92" rx="4" fill={PAL.blue} />
      </Shade>
      <circle cx="22" cy="86" r="4" fill={PAL.navy} />
      {/* The label: a client and a heart */}
      <rect x="36" y="26" width="44" height="40" rx="4" fill={PAL.paperShade} transform="translate(1.5 2)" />
      <rect x="36" y="26" width="44" height="40" rx="4" fill={PAL.white} />
      <circle cx="50" cy="40" r="6.4" fill={PAL.steel} />
      <path d="M40 60Q40 49 50 49Q60 49 60 60Z" fill={PAL.steel} />
      <path d="M70 48C70 44 64 42 64 47C64 51 70 55 70 55C70 55 76 51 76 47C76 42 70 44 70 48Z" fill={PAL.red} />
      <path d="M40 80H76M40 88H66" stroke={PAL.blueLight} strokeWidth="3" />
      <Shine d="M31 22V60" width={3} opacity={0.5} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
