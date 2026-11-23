import type { JSX } from 'react';
import { Ground, PAL, Shade, Shine } from '../kit';

export default {
  // "de besloten ruimte": the confined space — a big grey steel tank lying on two feet, with one small
  // round manhole on its front standing open: dark inside, its round cover hinged to the side.
  'w.beslotenruimte': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      <Ground cx={60} cy={104} rx={50} ry={4.5} />
      {/* The feet */}
      <path d="M26 86H40L42 104H24Z" fill={PAL.slate} />
      <path d="M80 86H94L96 104H78Z" fill={PAL.slate} />
      {/* The tank */}
      <Shade color={PAL.steel} opacity={1} at={[112, 60, 18, 50]}>
        <rect x="8" y="22" width="104" height="70" rx="35" fill={PAL.mist} />
      </Shade>
      <path d="M38 23V91M82 23V91" stroke={PAL.steel} strokeWidth="2" opacity=".7" />
      <Shine d="M22 36Q30 28 44 27" width={4} opacity={0.75} />
      {/* The manhole: a thick steel ring, dark inside */}
      <circle cx="60" cy="58" r="20" fill={PAL.steel} />
      <circle cx="60" cy="58" r="14" fill={PAL.slateDark} />
      <path d="M50 52A14 14 0 0 1 70 50A20 20 0 0 0 50 52Z" fill="#141a1f" />
      <circle cx="60" cy="58" r="14" fill="#141a1f" opacity=".5" />
      {/* The cover, hinged open to the right */}
      <rect x="80" y="46" width="6" height="8" rx="2" fill={PAL.slate} />
      <ellipse cx="96" cy="58" rx="8" ry="19" fill={PAL.slate} />
      <ellipse cx="94" cy="58" rx="6" ry="17" fill={PAL.steel} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
