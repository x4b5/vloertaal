import type { JSX } from 'react';
import { Bust } from '../bust';
import { Hand, Move, PAL, SKIN } from '../kit';

export default {
  // "scheren": to shave — the carer's hand holds an electric shaver against Henk's (the client's) cheek;
  // grey stubble is still on his other cheek.
  // On the intro card the shaver goes up and down his cheek (three rounds).
  'w.scheren': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      <Bust who="henk" x={48} y={150} scale={1.05} expr="pleased" bold />
      {/* Stubble on the cheek not yet shaved */}
      {[[30, 82], [34, 87], [29, 90], [36, 93], [32, 97], [40, 98], [27, 85]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="1.3" fill={PAL.steel} />
      ))}
      <Move kind="from" dy={20}>
        <g transform="rotate(-20 82 86)">
          {/* The shaver: the foil head on his cheek, a dark body */}
          <rect x="66" y="64" width="28" height="10" rx="4" fill={PAL.mist} />
          <path d="M70 69H90" stroke={PAL.steel} strokeWidth="1.6" />
          <rect x="70" y="72" width="20" height="40" rx="8" fill={PAL.slate} />
          <rect x="82" y="72" width="8" height="40" rx="4" fill={PAL.slateDark} />
          <circle cx="78" cy="84" r="3" fill={PAL.sky} />
        </g>
        <Hand pose="hold" x={110} y={110} rotate={-70} scale={0.6} skin={SKIN.jada} sleeve={[PAL.sky, PAL.skyShade]} />
      </Move>
    </g>
  ),
} as Record<string, () => JSX.Element>;
