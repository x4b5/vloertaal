import type { JSX } from 'react';
import { PAL, Shade, Shine } from '../kit';

export default {
  // "de camerabeelden": the camera footage (what the camera has filmed) — a security camera on its wall
  // arm at the top, and under it a screen that plays back what it filmed: a corridor seen from above,
  // a person walking in it, a red recording dot, and a play bar with a play button along the bottom.
  'w.camerabeelden': () => (
    <g strokeLinejoin="round">
      {/* The camera on its arm */}
      <path d="M98 10V20H88" fill="none" stroke={PAL.steel} strokeWidth="4" strokeLinecap="round" />
      <g transform="rotate(18 76 20)">
        <Shade color={PAL.paperShade} opacity={1} at={[76, 28, 30, 5]}>
          <rect x="56" y="12" width="36" height="16" rx="5" fill={PAL.paper} />
        </Shade>
        <rect x="50" y="13" width="9" height="14" rx="3" fill={PAL.slate} />
      </g>
      {/* The screen */}
      <rect x="10" y="36" width="96" height="72" rx="5" fill={PAL.slateDark} transform="translate(3 3)" />
      <rect x="10" y="36" width="96" height="72" rx="5" fill={PAL.slate} />
      <rect x="15" y="41" width="86" height="50" rx="2" fill={PAL.mist} />
      {/* The corridor in the footage: the floor and the walls */}
      <path d="M15 91L40 60H76L101 91Z" fill={PAL.paperShade} />
      <path d="M15 41H101L76 60H40Z" fill={PAL.steel} opacity=".45" />
      {/* The person walking */}
      <path d="M57 78L53 88M61 78L66 88" stroke={PAL.slateDark} strokeWidth="4.4" strokeLinecap="round" />
      <rect x="52" y="62" width="14" height="19" rx="5" fill={PAL.slate} />
      <circle cx="59" cy="56" r="5.5" fill={PAL.slate} />
      {/* The recording dot */}
      <circle cx="23" cy="49" r="4" fill={PAL.red} />
      {/* The play bar */}
      <path d="M18 98L18 104L24 101Z" fill={PAL.white} stroke={PAL.white} strokeWidth="2" />
      <rect x="30" y="99" width="70" height="4" rx="2" fill={PAL.slateDark} />
      <rect x="30" y="99" width="44" height="4" rx="2" fill={PAL.red} />
      <circle cx="74" cy="101" r="3.6" fill={PAL.white} />
      <Shine d="M19 45H34" width={2.2} opacity={0.7} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
