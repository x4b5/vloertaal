import type { JSX } from 'react';
import { Bubble, Move, PAL } from '../kit';
import { Bust } from '../bust';

export default {
  // "schelden": to swear at someone — Henk, angry, shouts at someone; his speech bubble is full of ugly
  // signs instead of words (a jagged red flash, a black scribble, a spiky star): the swear words.
  // On the intro card the bubble comes out of his mouth: three rounds (he goes on and on).
  'w.schelden': () => (
    <g strokeLinejoin="round">
      <Bust who="henk" x={36} y={120} scale={0.7} emotion="angry" talk bold />
      <Move kind="from" dx={-22} dy={14}>
        <Bubble x={50} y={12} w={60} h={42} tail="left" fill="#ffe3dd" depth={PAL.redLight}>
          <path d="M58 26L66 22L62 32L72 28" fill="none" stroke={PAL.red} strokeWidth="3.6" strokeLinecap="round" />
          <path d="M76 34Q74 22 82 24Q90 26 84 32Q78 38 76 28" fill="none" stroke={PAL.ink} strokeWidth="3" strokeLinecap="round" />
          <path d="M98 22L100 28L106 28L101 32L103 38L98 34L93 38L95 32L90 28L96 28Z" fill={PAL.ink} />
          <circle cx="64" cy="42" r="3" fill={PAL.red} />
          <path d="M70 44H84" stroke={PAL.red} strokeWidth="3.6" strokeLinecap="round" />
        </Bubble>
      </Move>
    </g>
  ),
} as Record<string, () => JSX.Element>;
