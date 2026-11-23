import type { JSX } from 'react';
import { ExclaimMark, PAL, Shine } from '../kit';

export default {
  // "de werkvergunning": the permit to work for dangerous work — a form on a brown clipboard with a steel
  // clip: a yellow warning triangle at the top, grey lines and tick boxes, and two blue signatures at the
  // bottom. No readable text (not a residence or work-permit card).
  'w.werkvergunningveilig': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      {/* The clipboard */}
      <rect x="22" y="12" width="76" height="96" rx="6" fill={PAL.cardDark} transform="translate(3 3)" />
      <rect x="22" y="12" width="76" height="96" rx="6" fill={PAL.wood} />
      {/* The paper */}
      <rect x="29" y="22" width="62" height="80" rx="2" fill={PAL.paperShade} transform="translate(1.5 2)" />
      <rect x="29" y="22" width="62" height="80" rx="2" fill={PAL.white} />
      {/* The clip */}
      <rect x="44" y="8" width="32" height="14" rx="4" fill={PAL.steel} />
      <rect x="50" y="12" width="20" height="5" rx="2.5" fill={PAL.slate} />
      {/* The warning triangle and the heading line */}
      <path d="M44 28L54 45H34Z" fill={PAL.ink} stroke={PAL.ink} strokeWidth="4" />
      <path d="M44 32L50 42.6H38Z" fill={PAL.yellow} stroke={PAL.yellow} strokeWidth="1.6" />
      <ExclaimMark x={44} y={38.5} size={9} color={PAL.ink} />
      <path d="M60 32H84M60 40H78" stroke={PAL.line} strokeWidth="3" />
      {/* Lines with tick boxes */}
      <g fill={PAL.white} stroke={PAL.line} strokeWidth="1.8">
        <rect x="36" y="52" width="7" height="7" rx="1" />
        <rect x="36" y="64" width="7" height="7" rx="1" />
      </g>
      <path d="M37.5 55.5L39.5 57.5L42.5 53.5M37.5 67.5L39.5 69.5L42.5 65.5" fill="none" stroke={PAL.ok} strokeWidth="2" />
      <path d="M49 55.5H82M49 67.5H76" stroke={PAL.line} strokeWidth="2.6" />
      {/* Two signatures */}
      <path d="M36 92H56M64 92H84" stroke={PAL.mist} strokeWidth="1.8" />
      <path d="M37 88Q40 80 43 88Q45 92 47 84Q49 80 51 88L55 85" fill="none" stroke={PAL.blue} strokeWidth="2.2" />
      <path d="M65 88Q67 80 70 86Q72 92 75 82Q77 86 80 86L83 84" fill="none" stroke={PAL.blue} strokeWidth="2.2" />
      <Shine d="M26 20V40" width={3} opacity={0.4} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
