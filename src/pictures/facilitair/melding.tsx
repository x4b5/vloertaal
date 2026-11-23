import type { JSX } from 'react';
import { Bubble, ExclaimMark, PAL } from '../kit';
import { Bust } from '../bust';

export default {
  // "de melding": the report (you tell that something is wrong) — Bram talking, his speech bubble holds
  // a big red exclamation mark: he reports that something is wrong.
  'w.melding': () => (
    <g strokeLinejoin="round">
      <Bust who="bram" x={36} y={112} scale={0.64} talk bold />
      <Bubble x={54} y={10} w={56} h={50} tail="left" fill="#ffe9e4" depth={PAL.redLight}>
        <ExclaimMark x={82} y={35} size={38} color={PAL.red} />
      </Bubble>
    </g>
  ),
} as Record<string, () => JSX.Element>;
