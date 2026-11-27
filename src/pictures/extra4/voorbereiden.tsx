import type { JSX } from 'react';
import { Bust } from '../bust';
import { Calendar, Hand, Move, PAL, SKIN } from '../kit';

export default {
  // "voorbereiden": to prepare (to get ready for something) — Amina at home at a small table writes a
  // short list on a notepad (three points, lines only) the day before the talk: a small calendar
  // with tomorrow ringed hangs beside her.
  // On the intro card her hand writes the third point of the list from left to right (three rounds:
  // writing).
  'w.voorbereiden': () => (
    <g strokeLinecap="round" strokeLinejoin="round">
      <Bust who="amina" x={30} y={112} scale={0.6} expr="thinking" bold />
      <Calendar x={88} y={14} w={24} h={28} mark={6} />
      {/* The small table */}
      <rect x="20" y="98" width="7" height="12" rx="2" fill={PAL.cardDark} />
      <rect x="98" y="98" width="7" height="12" rx="2" fill={PAL.cardDark} />
      <rect x="12" y="92" width="102" height="9" rx="3" fill={PAL.wood} />
      <rect x="12" y="92" width="102" height="3.2" rx="1.6" fill={PAL.card} />
      {/* The notepad: spiral top, three points with a dot and a line */}
      <rect x="50" y="42" width="40" height="52" rx="3.5" fill={PAL.paperShade} />
      <rect x="48" y="39" width="40" height="52" rx="3.5" fill={PAL.white} />
      <rect x="48" y="39" width="40" height="8" rx="3.5" fill={PAL.purple} />
      {[56, 64, 72, 80].map((x) => (
        <rect key={x} x={x - 1.6} y="35" width="3.2" height="9" rx="1.6" fill={PAL.slate} />
      ))}
      {[56, 67, 78].map((y) => (
        <circle key={y} cx="54" cy={y} r="2.6" fill={PAL.purple} />
      ))}
      <path d="M60 56H82M60 67H78" stroke={PAL.navy} strokeWidth="2.8" />
      <Move kind="grow" grow={0.1}>
        <path d="M60 78H74" stroke={PAL.navy} strokeWidth="2.8" />
      </Move>
      {/* Her hand with the pen, its tip at the end of the third point */}
      <Move kind="from" dx={-20}>
        <Hand pose="hold" x={98} y={104} rotate={-45} scale={0.56} skin={SKIN.amina} sleeve={['#2f8f3e', '#23722f']} />
        <g transform="translate(75 79) rotate(40)">
          <path d="M0 0L8 -3.6V3.6Z" fill={PAL.mist} />
          <path d="M0 0L2.8 -1.3V1.3Z" fill={PAL.ink} />
          <rect x="8" y="-3.8" width="34" height="7.6" rx="2" fill={PAL.blue} />
          <rect x="8" y="0.8" width="34" height="3" rx="1.4" fill={PAL.blueShade} />
        </g>
      </Move>
    </g>
  ),
} as Record<string, () => JSX.Element>;
