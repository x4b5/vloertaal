import type { JSX } from 'react';
import { Hand, Move, PAL, SKIN, Shine } from '../kit';

export default {
  // "de adrenalinepen": the adrenaline pen — a fat yellow medicine pen with a blue safety cap at the top
  // and an orange tip, held in a fist and pressed with its orange tip against the outside of a thigh
  // (blue trousers). No needle is shown.
  // On the intro card the pen is pressed down onto the thigh, once.
  'w.adrenalinepen': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      {/* The thigh in blue trousers, from the left */}
      <path d="M4 82Q4 72 16 72H100Q114 72 114 88Q114 106 98 106H4Z" fill={PAL.blue} />
      <path d="M4 96H112Q110 106 98 106H4Z" fill={PAL.blueShade} />
      <path d="M12 82H50" stroke={PAL.blueLight} strokeWidth="3" opacity=".7" />
      <Move kind="fast" dy={-22} once>
        {/* The pen: orange tip, yellow body, blue cap */}
        <rect x="58" y="58" width="16" height="16" rx="4" fill={PAL.orange} />
        <rect x="68" y="58" width="6" height="16" rx="3" fill={PAL.orangeShade} />
        <rect x="56" y="14" width="20" height="48" rx="7" fill={PAL.yellow} />
        <rect x="68" y="14" width="8" height="48" rx="4" fill={PAL.yellowShade} />
        <rect x="58" y="6" width="16" height="12" rx="4" fill={PAL.sky} />
        <Shine d="M60 22V34" color={PAL.yellowShine} width={2.8} opacity={0.9} />
        {/* The fist round the pen */}
        <Hand pose="fist" x={90} y={44} rotate={-90} scale={0.62} skin={SKIN.henk} sleeve={[PAL.green, PAL.greenShade]} mirror />
      </Move>
    </g>
  ),
} as Record<string, () => JSX.Element>;
