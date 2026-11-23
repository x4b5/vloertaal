import type { JSX } from 'react';
import { Move, PAL } from '../kit';
import { Bust } from '../bust';

export default {
  // "ademen": to breathe — Amina, calm with her eyes closed, breathes out: three soft light-blue
  // breath lines come out of her nose and mouth.
  // On the intro card the breath lines flow out of her mouth: three rounds (breathing goes on and on).
  'w.ademen': () => (
    <g strokeLinejoin="round">
      <Bust who="amina" x={46} y={118} scale={0.78} emotion="rest" bold />
      <Move kind="slow" dx={-24}>
        <g fill="none" strokeLinecap="round">
          <path d="M66 62Q74 56 82 62T98 62Q104 58 108 62" stroke={PAL.sky} strokeWidth="4.4" />
          <path d="M68 74Q76 68 84 74T100 74Q106 70 110 74" stroke={PAL.ice} strokeWidth="4.4" />
          <path d="M66 86Q74 80 82 86T98 86" stroke={PAL.sky} strokeWidth="4.4" />
        </g>
      </Move>
    </g>
  ),
} as Record<string, () => JSX.Element>;
