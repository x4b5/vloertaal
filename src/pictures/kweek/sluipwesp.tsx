import type { JSX } from 'react';
import { PAL, Shade, Shine } from '../kit';

/** The wasp's black, and its lighter top. */
const BLACK = PAL.slateDark;

export default {
  // "de sluipwesp": the parasitic wasp — a slender black wasp with clear wings and long antennae,
  // bending its long abdomen to a small green aphid on a leaf; a green heart says it is a helper.
  'w.sluipwesp': () => (
    <g strokeLinejoin="round">
      {/* The leaf under the aphid */}
      <path d="M54 106C62 86 86 78 110 84C102 102 78 110 54 106Z" fill={PAL.green} />
      <path d="M56 105C72 96 90 88 108 85" fill="none" stroke={PAL.greenShade} strokeWidth="2" strokeLinecap="round" />
      {/* The aphid */}
      <path d="M80 86L77 80M88 85L89 79M78 98L75 102M88 98L90 102" stroke={PAL.slate} strokeWidth="2" strokeLinecap="round" />
      <ellipse cx="84" cy="91" rx="11" ry="8" fill={PAL.leaf} />
      <ellipse cx="82.6" cy="89.6" rx="9" ry="6.2" fill={PAL.lime} />
      <circle cx="73" cy="92" r="4.6" fill={PAL.lime} />
      <circle cx="71.6" cy="91" r="1.3" fill={PAL.ink} />
      {/* The wasp's legs */}
      <path
        d="M42 50L32 60L30 70M47 54L44 68L46 78M51 55L58 66L56 76"
        fill="none"
        stroke={BLACK}
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      {/* The clear wings, up from its back */}
      <ellipse cx="56" cy="30" rx="22" ry="8" fill={PAL.ice} opacity=".55" transform="rotate(-32 56 30)" />
      <ellipse cx="62" cy="40" rx="17" ry="6.5" fill={PAL.ice} opacity=".55" transform="rotate(-12 62 40)" />
      <path d="M44 42L70 21M46 45L77 37" stroke={PAL.skyShade} strokeWidth="1.3" strokeLinecap="round" opacity=".6" />
      {/* The long antennae */}
      <path d="M28 36C22 26 18 20 12 18M30 34C30 24 32 18 28 12" fill="none" stroke={BLACK} strokeWidth="2" strokeLinecap="round" />
      {/* Head, thorax, the thin waist, and the long abdomen bending down to the aphid */}
      <circle cx="31" cy="40" r="6" fill={BLACK} />
      <ellipse cx="44" cy="47" rx="9" ry="6.5" fill={BLACK} transform="rotate(25 44 47)" />
      <path d="M51 51L56 56" stroke={BLACK} strokeWidth="2.6" strokeLinecap="round" />
      <path d="M55 54C64 54 72 62 70 72C68 78 64 76 61 70C58 64 54 60 55 54Z" fill={BLACK} />
      <path d="M68 75L72 82" stroke={BLACK} strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="29" cy="39" r="1.6" fill={PAL.white} opacity=".8" />
      <Shine d="M40 43Q43 41 47 42" color={PAL.white} width={2} opacity={0.5} />
      {/* It helps: a green heart (not a tick, which reads as "the right answer" on an answer card) */}
      <Shade color={PAL.greenShade} opacity={1} at={[106, 34, 8, 20]}>
        <path d="M95 44C84 36 80 30 80 25A7.5 7.5 0 0 1 95 22A7.5 7.5 0 0 1 110 25C110 30 106 36 95 44Z" fill={PAL.green} />
      </Shade>
      <Shine d="M84.5 24.5Q85.5 20.5 89 20" width={2.4} opacity={0.6} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
