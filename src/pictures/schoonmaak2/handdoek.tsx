import type { JSX } from 'react';
import { PAL, Shade, Shine } from '../kit';

export default {
  // "de handdoek": the towel — a thick white towel hanging over a chrome towel rail: two blue stripes
  // near the bottom, a fringe of short tufts, and its back half showing behind on the right.
  'w.handdoek': () => (
    <g strokeLinejoin="round">
      {/* The rail and its wall brackets */}
      <rect x="10" y="16" width="9" height="16" rx="3" fill={PAL.slate} />
      <rect x="101" y="16" width="9" height="16" rx="3" fill={PAL.slate} />
      <rect x="12" y="20" width="96" height="7" rx="3.5" fill={PAL.steel} />
      <rect x="12" y="20" width="96" height="2.6" rx="1.3" fill={PAL.mist} />
      {/* The back half of the towel, a little shorter */}
      <path d="M32 24H90V86Q90 90 86 90H36Z" fill={PAL.paperShade} transform="translate(6 0)" />
      {/* The front half */}
      <Shade color={PAL.paperShade} opacity={1} at={[92, 60, 14, 50]}>
        <path d="M30 22Q30 18 34 18H84Q88 18 88 22V98H30Z" fill={PAL.paper} />
      </Shade>
      <path d="M30 26Q59 32 88 26" fill="none" stroke={PAL.mist} strokeWidth="2.4" strokeLinecap="round" />
      {/* The stripes */}
      <rect x="30" y="72" width="58" height="6" fill={PAL.sky} />
      <rect x="30" y="82" width="58" height="3.4" fill={PAL.sky} />
      <rect x="80" y="72" width="8" height="6" fill={PAL.skyShade} />
      <rect x="80" y="82" width="8" height="3.4" fill={PAL.skyShade} />
      {/* The fringe */}
      <path d="M34 98V104M41 98V104M48 98V104M55 98V104M62 98V104M69 98V104M76 98V104M83 98V104" stroke={PAL.mist} strokeWidth="3.2" strokeLinecap="round" />
      <path d="M36 40V64M44 40V64" stroke={PAL.white} strokeWidth="3" strokeLinecap="round" opacity=".9" />
      <Shine d="M36 34V40" width={3} color={PAL.white} opacity={1} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
