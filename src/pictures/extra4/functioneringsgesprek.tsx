import type { JSX } from 'react';
import { Bust } from '../bust';
import { PAL } from '../kit';

export default {
  // "het functioneringsgesprek": the performance review — Jada (the worker) and Henk (her supervisor)
  // sit calmly across a table, both friendly; between them stands one sheet with a green tick (your
  // work goes well) and a target (what you want to learn). A friendly talk, not an exam. (A tick
  // instead of the brief's thumbs-up: that gesture is rude in some cultures, see "het compliment".)
  'w.functioneringsgesprek': () => (
    <g strokeLinecap="round" strokeLinejoin="round">
      <Bust who="jada" x={25} y={98} scale={0.54} expr="pleased" bold />
      <Bust who="henk" x={95} y={98} scale={0.54} expr="pleased" talk bold flip />
      {/* The table */}
      <rect x="14" y="94" width="7" height="14" rx="2" fill={PAL.cardDark} />
      <rect x="99" y="94" width="7" height="14" rx="2" fill={PAL.cardDark} />
      <rect x="6" y="88" width="108" height="10" rx="3" fill={PAL.wood} />
      <rect x="6" y="88" width="108" height="3.5" rx="1.75" fill={PAL.card} />
      {/* The sheet, standing up between them: a depth edge, the page, a tick and a target */}
      <g transform="rotate(-4 60 64)">
        <rect x="41" y="38" width="38" height="52" rx="3.5" fill={PAL.paperShade} />
        <rect x="39" y="35" width="38" height="52" rx="3.5" fill={PAL.white} />
        <circle cx="58" cy="50" r="9" fill={PAL.ok} />
        <path d="M53.5 50.2L57 53.6L63 46.6" fill="none" stroke={PAL.white} strokeWidth="3.2" />
        <circle cx="58" cy="72" r="10" fill={PAL.red} />
        <circle cx="58" cy="72" r="6.6" fill={PAL.white} />
        <circle cx="58" cy="72" r="3.4" fill={PAL.red} />
      </g>
    </g>
  ),
} as Record<string, () => JSX.Element>;
