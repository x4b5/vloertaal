import type { JSX } from 'react';
import { Move, PAL, Shine } from '../kit';

export default {
  // "de vulopening": the loading opening — the front of the baler up close: a big dark square
  // opening with a yellow-and-black edge, the mesh gate slid up above it, and a flat cardboard box
  // going into the opening.
  // On the intro card the box slides into the opening (once: the waste is put in).
  'w.vulopening': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      {/* The front panel of the machine */}
      <rect x="10" y="10" width="100" height="98" rx="4" fill={PAL.blue} />
      <rect x="96" y="10" width="14" height="98" rx="4" fill={PAL.blueShade} />
      {/* The gate, slid up: a steel frame with a mesh */}
      <rect x="22" y="14" width="76" height="20" rx="2" fill={PAL.steel} />
      <path d="M30 18V30M40 18V30M50 18V30M60 18V30M70 18V30M80 18V30M90 18V30M26 24H94" stroke={PAL.slate} strokeWidth="2" />
      {/* The opening and its hazard edge */}
      <rect x="18" y="40" width="84" height="62" rx="3" fill={PAL.yellow} />
      <g stroke={PAL.ink} strokeWidth="4">
        <path d="M24 40L18 46M38 40L32 46M52 40L46 46M66 40L60 46M80 40L74 46M94 40L88 46" />
      </g>
      <rect x="24" y="46" width="72" height="50" rx="2" fill={PAL.slateDark} />
      <path d="M24 46H96L88 54H32Z" fill={PAL.slate} />
      {/* The box going in */}
      <Move kind="from" dx={-12} dy={22} once>
        <path d="M34 78L44 66H86L76 78Z" fill="#f0c48a" />
        <path d="M76 78L86 66V82L76 94Z" fill={PAL.cardShade} />
        <rect x="34" y="78" width="42" height="16" rx="1.6" fill={PAL.card} />
        <rect x="52" y="78" width="6" height="7" fill="#f6dcae" />
      </Move>
      <Shine d="M14 40V96" width={3} opacity={0.5} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
