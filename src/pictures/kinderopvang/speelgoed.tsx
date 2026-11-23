import type { JSX } from 'react';
import { Ground, PAL, Shade, Shine } from '../kit';

export default {
  // "het speelgoed": the toys — an open red toy crate full of toys: a teddy bear, a big ball, a toy block
  // and a little yellow car on top.
  'w.speelgoed': () => (
    <g strokeLinejoin="round">
      <Ground cx={60} cy={105} rx={48} ry={4} />
      {/* The back rim of the crate */}
      <path d="M18 62L28 52H104L94 62Z" fill={PAL.redShade} />
      {/* The teddy bear (left) */}
      <circle cx="30" cy="30" r="6" fill={PAL.cardShade} />
      <circle cx="52" cy="30" r="6" fill={PAL.cardShade} />
      <Shade color={PAL.cardShade} opacity={1} at={[56, 48, 6, 18]}>
        <circle cx="41" cy="42" r="15" fill={PAL.card} />
      </Shade>
      <ellipse cx="41" cy="48" rx="7" ry="5.4" fill="#f0c48a" />
      <ellipse cx="41" cy="46" rx="2.8" ry="2" fill={PAL.ink} />
      <circle cx="35.4" cy="39.6" r="2" fill={PAL.ink} />
      <circle cx="46.6" cy="39.6" r="2" fill={PAL.ink} />
      <rect x="26" y="54" width="30" height="10" rx="5" fill={PAL.card} />
      {/* The ball (middle) */}
      <Shade color={PAL.skyShade} opacity={1} at={[84, 46, 7, 18]}>
        <circle cx="72" cy="44" r="15" fill={PAL.sky} />
      </Shade>
      <path d="M60 36Q72 44 86 38" fill="none" stroke={PAL.yellow} strokeWidth="4.4" strokeLinecap="round" />
      <Shine d="M63 39Q64 33 69 31" width={3} opacity={0.7} />
      {/* The toy car on top (right) */}
      <path d="M84 44Q86 34 94 34H100Q106 34 108 44Z" fill={PAL.yellow} />
      <rect x="82" y="42" width="28" height="10" rx="4" fill={PAL.yellow} />
      <rect x="100" y="42" width="10" height="10" rx="4" fill={PAL.yellowShade} />
      <path d="M90 42Q91 37 95 37H99Q103 37 104 42Z" fill={PAL.ice} />
      <circle cx="89" cy="53" r="4.4" fill={PAL.slateDark} />
      <circle cx="104" cy="53" r="4.4" fill={PAL.slateDark} />
      {/* The green block in front of the ball */}
      <rect x="58" y="50" width="14" height="14" rx="2" fill={PAL.green} />
      {/* The crate: front and right side */}
      <path d="M94 62L104 52V94L94 104Z" fill={PAL.redShade} />
      <Shade color={PAL.redShade} opacity={0.4} at={[96, 84, 6, 24]}>
        <rect x="18" y="62" width="76" height="42" rx="3" fill={PAL.red} />
      </Shade>
      <rect x="44" y="70" width="24" height="7" rx="3.5" fill={PAL.redShade} />
      <Shine d="M24 70V94" width={3.5} opacity={0.45} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
