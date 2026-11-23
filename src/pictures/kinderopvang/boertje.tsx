import type { JSX } from 'react';
import { Hand, Move, PAL, SKIN, Shade } from '../kit';
import { Bust } from '../bust';

/** A baby's head in the cast's flat style, centred on (x, y): a wisp of hair, eyes shut, mouth in an "o". */
function BabyHead({ x, y, r = 12, skin = SKIN.bram }: { x: number; y: number; r?: number; skin?: [string, string] }) {
  const k = r / 12;
  return (
    <g transform={`translate(${x} ${y}) scale(${k})`}>
      <circle cx="-12" cy="2" r="3" fill={skin[0]} />
      <circle cx="12" cy="2" r="3" fill={skin[1]} />
      <Shade color={skin[1]} opacity={1} at={[13, 4, 6, 16]}>
        <circle cx="0" cy="0" r="12.4" fill={skin[0]} />
      </Shade>
      <path d="M-3 -12Q0 -17 4 -13Q1 -14 0 -11Z" fill={PAL.brown} />
      <path d="M-7 1Q-4.6 3 -2.4 1M2.4 1Q4.6 3 7 1" fill="none" stroke={PAL.ink} strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="-7.6" cy="5.6" r="2.4" fill={PAL.blush} opacity=".45" />
      <circle cx="7.6" cy="5.6" r="2.4" fill={PAL.blush} opacity=".45" />
      <ellipse cx="0" cy="7.4" rx="2.4" ry="2.8" fill={PAL.mouth} />
    </g>
  );
}

export default {
  // "het boertje": the burp — Amina holds a baby upright against her shoulder and pats its back; the
  // baby, eyes shut, lets out a little burp: a puff of three small bubbles from its round mouth.
  // On the intro card her hand pats the baby's back, then the puff appears (three rounds: pat, pat, pat).
  'w.boertje': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      <Bust who="amina" x={42} y={128} scale={0.84} expr="pleased" bold />
      {/* The baby against her shoulder: its romper, then its head over her shoulder */}
      <rect x="56" y="58" width="32" height="50" rx="15" fill={PAL.ice} />
      <rect x="76" y="58" width="12" height="50" rx="6" fill={PAL.sky} opacity=".55" />
      <BabyHead x={73} y={46} r={14} skin={SKIN.bram} />
      {/* Her hand patting its back */}
      <Move kind="fast" dy={-20}>
        <Hand pose="open" x={74} y={114} rotate={8} scale={0.52} skin={SKIN.amina} />
      </Move>
      {/* The burp */}
      <Move kind="show">
        <g fill={PAL.ice}>
          <circle cx="92" cy="40" r="4" />
          <circle cx="99" cy="30" r="5.4" />
          <circle cx="96" cy="17" r="6.6" />
        </g>
        <g fill="none" stroke={PAL.sky} strokeWidth="1.6">
          <circle cx="92" cy="40" r="4" />
          <circle cx="99" cy="30" r="5.4" />
          <circle cx="96" cy="17" r="6.6" />
        </g>
      </Move>
    </g>
  ),
} as Record<string, () => JSX.Element>;
