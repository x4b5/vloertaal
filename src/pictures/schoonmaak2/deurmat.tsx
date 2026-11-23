import type { JSX } from 'react';
import { PAL } from '../kit';

export default {
  // "de deurmat": the doormat — a brown bristly mat lying on the floor in front of a closed door: the mat
  // seen from above at a slant, with a dark rim and rows of bristle ridges; the bottom of the door behind it.
  'w.deurmat': () => (
    <g strokeLinejoin="round">
      {/* The door in its frame */}
      <rect x="36" y="10" width="48" height="56" rx="2" fill={PAL.mist} />
      <rect x="40" y="14" width="40" height="52" fill={PAL.blue} />
      <rect x="73" y="14" width="7" height="52" fill={PAL.blueShade} />
      <rect x="45" y="19" width="24" height="16" rx="2" fill={PAL.blueLight} opacity=".55" />
      <rect x="70" y="40" width="7" height="4" rx="2" fill={PAL.steel} />
      {/* The floor line */}
      <rect x="8" y="64" width="104" height="3" rx="1.5" fill={PAL.mist} />
      {/* The mat: its thick front edge, then its top */}
      <path d="M8 98H112V105H8Z" fill={PAL.cardDark} />
      <path d="M26 68H94L112 98H8Z" fill={PAL.brown} />
      <path d="M31 72H89L102 94H18Z" fill={PAL.card} />
      <path d="M29 76H91M26 81H94M23 86H97M20 91H100" stroke={PAL.cardShade} strokeWidth="2" strokeLinecap="round" />
    </g>
  ),
} as Record<string, () => JSX.Element>;
