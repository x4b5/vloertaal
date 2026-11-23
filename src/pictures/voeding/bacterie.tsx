import type { JSX } from 'react';
import { PAL, Shine } from '../kit';

export default {
  // "de bacterie": the germ, the bacteria — a magnifying glass over a surface; under the glass the germs you
  // cannot see with your eye: a green rod-shaped bacterium with little hairs and a round spiky one.
  'w.bacterie': () => (
    <g strokeLinejoin="round">
      {/* The handle */}
      <path d="M82 82L104 104" stroke={PAL.slateDark} strokeWidth="13" strokeLinecap="round" />
      <path d="M82 82L104 104" stroke={PAL.slate} strokeWidth="7" strokeLinecap="round" />
      {/* The lens */}
      <circle cx="54" cy="54" r="42" fill={PAL.slate} />
      <circle cx="54" cy="54" r="36" fill="#e3f5ff" />
      {/* A rod bacterium with hairs */}
      <g fill="none" stroke={PAL.leafShade} strokeWidth="2" strokeLinecap="round">
        <path d="M30 34L24 28M40 30L38 22M50 34L54 26M30 54L24 58M42 58L40 66M54 52L60 58" />
      </g>
      <rect x="26" y="34" width="32" height="20" rx="10" fill={PAL.leaf} transform="rotate(-8 42 44)" />
      <circle cx="36" cy="44" r="3" fill={PAL.leafShade} />
      <circle cx="47" cy="42" r="2.4" fill={PAL.leafShade} />
      {/* A round spiky one */}
      <path d="M70 52L72 58L78 56L76 62L82 66L76 69L78 75L72 74L70 80L66 75L60 77L61 71L55 68L61 64L59 58L65 59Z" fill={PAL.green} />
      <circle cx="68" cy="67" r="7" fill={PAL.leaf} />
      <circle cx="66" cy="65" r="2" fill={PAL.greenShade} />
      {/* A small one */}
      <circle cx="40" cy="74" r="5" fill={PAL.leaf} />
      <circle cx="39" cy="73" r="1.6" fill={PAL.leafShade} />
      <Shine d="M26 34Q32 22 46 20" width={3.4} opacity={0.8} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
