import type { JSX } from 'react';
import { PAL, Shade, Shine } from '../kit';

/** Legs and antennae of the aphids. */
const LEG = PAL.slate;

/** One aphid seen from above, facing left, centred on (0, 0) at scale 1 (about 52 long). */
const aphid = (big: boolean) => (
  <g>
    {/* Six legs: three to each side, bent at the knee */}
    <path
      d="M-8 -9L-13 -19L-19 -21M2 -12L2 -23L-2 -27M12 -9L18 -19L24 -20M-8 9L-13 19L-19 21M2 12L2 23L-2 27M12 9L18 19L24 20"
      fill="none"
      stroke={LEG}
      strokeWidth={big ? 2.6 : 3.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* The two little tubes on the back */}
    <path d="M18 -6L27 -9M18 6L27 9" stroke={PAL.leafShade} strokeWidth="3.4" strokeLinecap="round" />
    {/* The round body */}
    <Shade color={PAL.leaf} opacity={1} at={[14, 8, 14, 14]}>
      <ellipse cx="4" cy="0" rx="20" ry="15" fill={PAL.lime} />
    </Shade>
    {/* The head */}
    <circle cx="-17" cy="0" r="9" fill={PAL.lime} />
    {big && (
      <>
        {/* Two long antennae, curving back */}
        <path d="M-22 -5C-30 -14 -26 -26 -12 -30M-22 5C-30 14 -26 26 -12 30" fill="none" stroke={LEG} strokeWidth="2.4" strokeLinecap="round" />
        {/* Friendly eyes */}
        <circle cx="-20" cy="-4" r="2.6" fill={PAL.ink} />
        <circle cx="-20" cy="4" r="2.6" fill={PAL.ink} />
        <circle cx="-20.8" cy="-4.8" r="0.9" fill={PAL.white} />
        <circle cx="-20.8" cy="3.2" r="0.9" fill={PAL.white} />
        <Shine d="M-6 -9Q2 -13 10 -11" color={PAL.white} width={3.4} opacity={0.7} />
      </>
    )}
  </g>
);

export default {
  // "de luis": the aphid — a big friendly lime-green aphid (round body, six legs, two antennae, two
  // little back tubes) sitting on a big dark-green leaf, with two small aphids nearby.
  'w.luis': () => (
    <g strokeLinejoin="round">
      {/* The leaf, from its stalk at the bottom left to its tip at the top right */}
      <path d="M12 108L22 96" stroke={PAL.greenShade} strokeWidth="4.5" strokeLinecap="round" />
      <Shade color={PAL.greenShade} opacity={1} at={[96, 76, 30, 40]}>
        <path d="M20 98C8 58 44 16 108 12C110 64 74 106 20 98Z" fill={PAL.green} />
      </Shade>
      <path d="M21 97C44 74 76 42 104 16" fill="none" stroke={PAL.greenShade} strokeWidth="2.2" strokeLinecap="round" />
      {/* Two small aphids */}
      <g transform="translate(84 32) rotate(-30) scale(0.34)">{aphid(false)}</g>
      <g transform="translate(88 70) rotate(-60) scale(0.3)">{aphid(false)}</g>
      {/* The big aphid */}
      <g transform="translate(54 60) rotate(-30) scale(1.08)">{aphid(true)}</g>
    </g>
  ),
} as Record<string, () => JSX.Element>;
