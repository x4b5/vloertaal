import type { JSX } from 'react';
import { Bust } from '../bust';
import { Bubble, PAL, QuestionMark, SKIN } from '../kit';

export default {
  // "nabellen": to call back (to ask how it is going) — Jada with a phone at her ear asks a
  // question (a speech bubble with a question mark): "Have you decided yet?"
  'w.nabellen': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      <Bubble x={74} y={8} w={36} h={30} tail="left">
        <QuestionMark x={92} y={23} size={24} color={PAL.sky} />
      </Bubble>
      <Bust who="jada" x={50} y={124} scale={0.8} expr="neutral" talk bold />
      {/* The phone at her ear, held in her hand */}
      <g transform="rotate(14 74 60)">
        <rect x="68" y="42" width="14" height="28" rx="3.5" fill={PAL.slateDark} />
        <rect x="70" y="45" width="10" height="20" rx="1.6" fill={PAL.slate} />
      </g>
      <path d="M72 104Q82 88 78 72" stroke={SKIN.jada[0]} strokeWidth="10" fill="none" />
      <ellipse cx="78" cy="68" rx="7" ry="8" fill={SKIN.jada[0]} />
      <path d="M74 64H82M74 68.5H82" stroke={SKIN.jada[1]} strokeWidth="1.4" />
    </g>
  ),
} as Record<string, () => JSX.Element>;
