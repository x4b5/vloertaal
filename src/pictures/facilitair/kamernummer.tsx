import type { JSX } from 'react';
import { Hand, PAL, SKIN, Shine } from '../kit';

export default {
  // "het kamernummer": the room number — a closed office door in its frame with a big navy sign beside it
  // at eye level, the sign carrying three white dots (no digits: the style forbids them here), and a finger pointing at it.
  'w.kamernummer': () => (
    <g strokeLinejoin="round">
      <ellipse cx="44" cy="106" rx="34" ry="4" fill="#000" opacity=".14" />
      {/* The door frame and door */}
      <rect x="10" y="12" width="64" height="94" rx="3" fill={PAL.mist} />
      <rect x="16" y="18" width="52" height="88" rx="2" fill={PAL.card} />
      <rect x="58" y="18" width="10" height="88" fill={PAL.cardShade} />
      <circle cx="54" cy="64" r="4" fill={PAL.steel} />
      <rect x="48" y="62" width="10" height="4" rx="2" fill={PAL.steel} />
      {/* The sign */}
      <rect x="78" y="26" width="34" height="26" rx="4" fill={PAL.navyShade} transform="translate(0 3)" />
      <rect x="78" y="26" width="34" height="26" rx="4" fill={PAL.navy} />
      <circle cx="86" cy="39" r="4" fill={PAL.white} />
      <circle cx="95" cy="39" r="4" fill={PAL.white} />
      <circle cx="104" cy="39" r="4" fill={PAL.white} />
      <Shine d="M82 30H92" width={2} opacity={0.5} />
      {/* The finger pointing at it */}
      <Hand pose="point" x={100} y={112} rotate={-6} scale={0.72} skin={SKIN.henk} sleeve={['#2d5a92', PAL.navyShade]} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
