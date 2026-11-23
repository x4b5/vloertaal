import type { JSX } from 'react';
import { Bust } from '../bust';
import { Hand, Move, PAL, SKIN } from '../kit';

export default {
  // "tandenpoetsen": to brush your teeth — Henk (the client) brushes his teeth: a blue toothbrush held
  // across his mouth in his own hand, white toothpaste foam at the corners of his mouth.
  // On the intro card the brush goes back and forth along his teeth (three rounds).
  'w.tandenpoetsen': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      <Bust who="henk" x={50} y={150} scale={1.05} expr="pleased" bold />
      {/* Foam at the mouth */}
      {[[38, 86, 3.4], [61, 87, 3.2], [34, 90, 2.4], [65, 82, 2.2]].map(([cx, cy, r], i) => (
        <circle key={i} cx={cx} cy={cy} r={r} fill={PAL.white} stroke={PAL.ice} strokeWidth="1.4" />
      ))}
      <Move kind="fast" dx={20}>
        {/* The toothbrush: bristles on the teeth, the handle out to the right */}
        <rect x="36" y="79" width="18" height="6" rx="2" fill={PAL.white} />
        <path d="M39 79V85M43 79V85M47 79V85M51 79V85" stroke={PAL.mist} strokeWidth="1.4" />
        <path d="M38 87H104" stroke={PAL.skyShade} strokeWidth="7" />
        <path d="M38 86H104" stroke={PAL.sky} strokeWidth="5" />
        <Hand pose="hold" x={110} y={88} rotate={-90} scale={0.6} skin={SKIN.henk} sleeve={['#2d5a92', PAL.navyShade]} />
      </Move>
    </g>
  ),
} as Record<string, () => JSX.Element>;
