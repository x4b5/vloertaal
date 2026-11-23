import type { JSX } from 'react';
import { PAL, Shade, Shine } from '../kit';

/** The sling laid out flat: a wide back part at the top, two leg flaps below with a gap between them. */
const SLING = 'M22 26Q22 16 32 16H88Q98 16 98 26V92Q98 102 88 102H78Q70 102 70 92V68Q60 60 50 68V92Q50 102 42 102H32Q22 102 22 92Z';

export default {
  // "de tilband": the sling — the purple padded sling of the hoist laid out flat: a wide back part, two leg
  // flaps with a gap between them, quilted seams, and coloured loops at the corners to hang it on the hoist.
  'w.tilband': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      {/* The loops */}
      <path d="M28 18Q16 4 26 2Q36 2 36 16M92 18Q104 4 94 2Q84 2 84 16" fill="none" stroke={PAL.orange} strokeWidth="5" />
      <path d="M28 98Q14 112 26 116Q38 116 38 100M92 98Q106 112 94 116Q82 116 82 100" fill="none" stroke={PAL.green} strokeWidth="5" />
      <path d={SLING} fill={PAL.purpleShade} transform="translate(2 3)" />
      <Shade color={PAL.purpleShade} opacity={1} at={[104, 60, 14, 60]}>
        <path d={SLING} fill={PAL.purple} />
      </Shade>
      {/* Quilted seams and the soft edge */}
      <path d="M30 40H90M30 54H90M36 70V94M84 70V94M60 24V52" fill="none" stroke={PAL.purpleLight} strokeWidth="2" opacity=".8" />
      <Shine d="M28 34Q28 24 36 22" color={PAL.purpleLight} width={3.4} opacity={0.9} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
