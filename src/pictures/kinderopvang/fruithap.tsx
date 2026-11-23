import type { JSX } from 'react';
import { Ground, PAL, Shade, Shine } from '../kit';

export default {
  // "de fruithap": the fruit mash — a small bowl full of soft yellow-orange fruit mash, a baby spoon
  // in it, and a red apple and a piece of banana beside it (what it is made of).
  'w.fruithap': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      <Ground cx={56} cy={102} rx={50} ry={5} />
      {/* The apple and the banana behind the bowl */}
      <path d="M86 40Q88 32 94 30" fill="none" stroke={PAL.brown} strokeWidth="2.6" />
      <Shade color={PAL.redShade} opacity={1} at={[104, 54, 8, 16]}>
        <circle cx="90" cy="52" r="14" fill={PAL.red} />
      </Shade>
      <path d="M84 46Q85 42 89 41" fill="none" stroke={PAL.white} strokeWidth="2.6" opacity=".6" />
      <path d="M8 62Q14 46 32 44L34 50Q20 52 16 66Z" fill={PAL.yellow} />
      <path d="M32 44L36 42L37 48L34 50Z" fill={PAL.brown} />
      {/* The bowl: the mash, then the front of the bowl */}
      <ellipse cx="56" cy="64" rx="42" ry="13" fill={PAL.white} />
      <ellipse cx="56" cy="65" rx="36" ry="9.6" fill={PAL.orangeLight} />
      <path d="M26 64Q40 54 56 58Q72 54 86 64Q70 70 56 70Q38 70 26 64Z" fill={PAL.yellowLight} />
      <path d="M40 62Q50 58 58 62" fill="none" stroke={PAL.white} strokeWidth="2.4" opacity=".7" />
      <Shade color={PAL.skyShade} opacity={1} at={[98, 86, 14, 26]}>
        <path d="M14 64Q14 77 56 77Q98 77 98 64Q96 100 56 100Q16 100 14 64Z" fill={PAL.sky} />
      </Shade>
      {/* The spoon */}
      <path d="M62 62L94 22" stroke={PAL.purple} strokeWidth="6" />
      <ellipse cx="62" cy="63" rx="7" ry="4" fill={PAL.purpleShade} transform="rotate(-50 62 63)" />
      <Shine d="M22 74Q26 88 36 92" width={3.4} opacity={0.6} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
