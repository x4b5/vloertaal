import type { JSX } from 'react';
import { Bubble, PAL, Shine } from '../kit';
import { Bust } from '../bust';

export default {
  // "het advies": the advice — Amina, kind and calm, gives advice: her speech bubble holds a lit
  // yellow light bulb (a good idea, what you can do).
  'w.advies': () => (
    <g strokeLinejoin="round">
      <Bust who="amina" x={40} y={122} scale={0.68} expr="pleased" talk bold />
      <Bubble x={56} y={8} w={54} h={50} tail="left">
        {/* The light bulb */}
        <circle cx="83" cy="27" r="13" fill={PAL.yellow} />
        <path d="M76 34H90L88 41H78Z" fill={PAL.yellow} />
        <path d="M89 18A10 10 0 0 1 93 30" fill="none" stroke={PAL.yellowShade} strokeWidth="3" strokeLinecap="round" />
        <rect x="77" y="41" width="12" height="4" rx="1.6" fill={PAL.steel} />
        <rect x="78" y="46" width="10" height="4" rx="1.6" fill={PAL.slate} />
        <Shine d="M76 24A7 7 0 0 1 80 19" color={PAL.yellowShine} width={2.6} opacity={0.9} />
      </Bubble>
    </g>
  ),
} as Record<string, () => JSX.Element>;
