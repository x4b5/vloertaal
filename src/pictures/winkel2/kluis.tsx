import type { JSX } from 'react';
import { PAL, Shade, Shine } from '../kit';

export default {
  // "de kluis": the safe (a strong box for money) — a heavy dark-steel safe on short feet, seen a little
  // from the right: a thick door with two big hinges, a round dial with its marks and a three-spoke
  // handle wheel. A thing: it stays still.
  'w.kluis': () => (
    <g strokeLinejoin="round">
      <ellipse cx="62" cy="106" rx="44" ry="4" fill="#000" opacity=".14" />
      {/* Feet */}
      <rect x="22" y="96" width="10" height="8" rx="2" fill={PAL.slateDark} />
      <rect x="84" y="96" width="10" height="8" rx="2" fill={PAL.slateDark} />
      {/* Body: right side, top, front */}
      <path d="M96 22L108 14V90L96 98Z" fill={PAL.slateDark} />
      <path d="M16 22L28 14H108L96 22Z" fill={PAL.steel} />
      <Shade color={PAL.slateDark} opacity={0.6} at={[100, 60, 10, 40]}>
        <rect x="16" y="22" width="80" height="76" rx="3" fill={PAL.slate} />
      </Shade>
      {/* The door */}
      <rect x="24" y="30" width="64" height="60" rx="3" fill={PAL.steel} />
      <rect x="27" y="33" width="58" height="54" rx="2" fill="#7b8792" />
      {/* Hinges */}
      <rect x="20" y="38" width="7" height="12" rx="2" fill={PAL.slateDark} />
      <rect x="20" y="70" width="7" height="12" rx="2" fill={PAL.slateDark} />
      {/* The dial */}
      <circle cx="46" cy="58" r="13" fill={PAL.slateDark} />
      <circle cx="46" cy="58" r="10" fill={PAL.mist} />
      <path d="M46 49V52M55 58H52M46 67V64M37 58H40" stroke={PAL.slate} strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="46" cy="58" r="3.4" fill={PAL.slate} />
      {/* The handle wheel */}
      <g stroke={PAL.mist} strokeWidth="3.6" strokeLinecap="round">
        <path d="M72 58L72 46M72 58L82.4 64M72 58L61.6 64" />
      </g>
      <circle cx="72" cy="46" r="3" fill={PAL.white} />
      <circle cx="82.4" cy="64" r="3" fill={PAL.white} />
      <circle cx="61.6" cy="64" r="3" fill={PAL.white} />
      <circle cx="72" cy="58" r="4.4" fill={PAL.slateDark} />
      <Shine d="M20 28H50" width={2.6} opacity={0.4} />
      <Shine d="M30 37V54" width={2.4} opacity={0.4} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
