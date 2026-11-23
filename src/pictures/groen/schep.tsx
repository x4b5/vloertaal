import type { JSX } from 'react';
import { Move, PAL, Shade, Shine } from '../kit';

export default {
  // "de schep": the shovel, the spade — a garden spade standing upright in a heap of soil: a black D-grip,
  // a wooden shaft and a broad steel blade half in the ground.
  // Three rounds on the intro card: the spade is pushed down into the soil (digging).
  'w.schep': () => (
    <g strokeLinejoin="round">
      {/* The heap of soil behind the blade */}
      <path d="M8 104Q22 80 60 76Q98 80 112 104Z" fill={PAL.cardDark} />
      <Move kind="from" dy={-22}>
        <g transform="rotate(6 60 60)">
          {/* The D-grip */}
          <path d="M48 16H72V24Q72 30 66 30H54Q48 30 48 24Z" fill="none" stroke={PAL.slateDark} strokeWidth="6" />
          <path d="M56 28H64V36H56Z" fill={PAL.slateDark} />
          {/* The shaft */}
          <rect x="56" y="34" width="8" height="40" rx="3" fill={PAL.wood} />
          <rect x="61" y="34" width="3" height="40" fill={PAL.cardDark} />
          {/* The broad blade, its top edge the tread */}
          <rect x="54" y="70" width="12" height="8" rx="2" fill={PAL.steel} />
          <Shade color={PAL.steel} opacity={1} at={[78, 92, 10, 26]}>
            <path d="M44 76H76V92Q76 98 60 101Q44 98 44 92Z" fill={PAL.mist} />
          </Shade>
          <rect x="42" y="74" width="36" height="5" rx="2" fill={PAL.steel} />
          <Shine d="M49 82V92" width={3} opacity={0.9} />
        </g>
      </Move>
      {/* The front of the heap, over the lower part of the blade */}
      <path d="M8 104Q24 88 46 90Q60 96 74 90Q96 88 112 104Z" fill={PAL.brown} />
      <path d="M30 96Q38 92 46 94M78 94Q86 92 94 96" fill="none" stroke={PAL.cardDark} strokeWidth="2.4" strokeLinecap="round" />
    </g>
  ),
} as Record<string, () => JSX.Element>;
