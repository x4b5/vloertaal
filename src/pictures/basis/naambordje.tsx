import type { JSX } from 'react';
import { PAL, Shade, Shine } from '../kit';

export default {
  // "het naambordje": the name sign — a brass plate with the name as two dark lines (no letters),
  // screwed onto a green front door in its white frame in a brick wall, with the door handle, the
  // letter slot and the round doorbell.
  'w.naambordje': () => (
    <g strokeLinejoin="round">
      {/* The brick wall and the white door frame */}
      <rect x="10" y="10" width="100" height="100" rx="6" fill={PAL.clay} />
      <path d="M10 30H22M98 30H110M10 52H22M98 52H110M10 74H22M98 74H110M10 96H22M98 96H110" stroke={PAL.clayShade} strokeWidth="1.8" strokeLinecap="round" />
      <rect x="20" y="10" width="80" height="100" fill={PAL.paper} />
      {/* The door: base, its right edge in shade, the window */}
      <Shade color={PAL.greenShade} opacity={1} at={[100, 60, 12, 70]}>
        <rect x="26" y="16" width="68" height="94" rx="2" fill={PAL.green} />
      </Shade>
      <rect x="34" y="22" width="52" height="12" rx="3" fill={PAL.ice} />
      {/* The plate: depth edge, face, screws, the name */}
      <rect x="30" y="40" width="60" height="26" rx="5" fill={PAL.yellowShade} transform="translate(0 4)" />
      <rect x="30" y="40" width="60" height="26" rx="5" fill={PAL.yellowLight} />
      <circle cx="35.5" cy="53" r="2" fill={PAL.yellowShade} />
      <circle cx="84.5" cy="53" r="2" fill={PAL.yellowShade} />
      <path d="M42 48.5H78M46 57.5H74" stroke={PAL.ink} strokeWidth="4.2" strokeLinecap="round" />
      <Shine d="M33 47Q33 43 37 43" width={2.4} opacity={0.9} color={PAL.yellowShine} />
      {/* The handle, the letter slot and the doorbell on the frame */}
      <path d="M86 78H76" stroke={PAL.slate} strokeWidth="4" strokeLinecap="round" />
      <circle cx="86" cy="78" r="3.4" fill={PAL.slate} />
      <rect x="40" y="86" width="36" height="8" rx="3" fill={PAL.slate} />
      <rect x="42" y="88.6" width="32" height="2.8" rx="1.4" fill={PAL.slateDark} />
      <circle cx="104" cy="60" r="4.4" fill={PAL.white} />
      <circle cx="104.6" cy="60.6" r="2.4" fill={PAL.mist} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
