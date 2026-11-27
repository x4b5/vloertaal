import type { JSX } from 'react';
import { CastHead, type CharacterId } from '../../components/Characters';
import { Box, Ground, Move, PAL, SKIN, Shade } from '../kit';

/** A cast member walking, mid-step, neck at (x, y): legs, shoes, a top and a head that looks `gaze`. */
const walker = (who: CharacterId, x: number, y: number, top: string, topShade: string, gaze: [number, number]) => (
  <g>
    <path d={`M${x - 4} ${y + 34}L${x - 11} ${y + 56}M${x + 4} ${y + 34}L${x + 10} ${y + 56}`} stroke={PAL.navy} strokeWidth="8" />
    <ellipse cx={x - 13} cy={y + 57} rx="6" ry="3" fill={PAL.slateDark} />
    <ellipse cx={x + 13} cy={y + 57} rx="6" ry="3" fill={PAL.slateDark} />
    <Shade color={topShade} opacity={1} at={[x + 14, y + 18, 6, 22]}>
      <rect x={x - 12} y={y - 2} width="24" height="38" rx="8.5" fill={top} />
    </Shade>
    <g transform={`translate(${x} ${y + 1}) scale(0.4) translate(-60 -96)`}>
      <CastHead who={who} expr="pleased" gaze={gaze} bold />
    </g>
  </g>
);

export default {
  // "meelopen": to go along with a colleague (and watch how they work) — in the warehouse, in front of a
  // blue rack with boxes, Bram walks with a box in his arms and Jada, the new one, walks right beside
  // him and looks at what he does. On the intro card the two walk in together from the left (once:
  // they come along).
  'w.meelopen': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      {/* The rack behind them */}
      <path d="M8 12V92M112 12V92M60 12V92" stroke={PAL.blue} strokeWidth="4" />
      <path d="M8 38H112M8 66H112" stroke={PAL.orange} strokeWidth="4" />
      <rect x="14" y="20" width="18" height="16" rx="1.6" fill={PAL.card} />
      <rect x="66" y="22" width="22" height="14" rx="1.6" fill={PAL.cardShade} />
      <rect x="90" y="48" width="18" height="16" rx="1.6" fill={PAL.card} />
      <rect x="14" y="50" width="20" height="14" rx="1.6" fill={PAL.cardShade} />
      <Ground cx={60} cy={106} rx={44} ry={4} />
      <Move kind="from" dx={-34} once>
        {/* Jada, the new one, looking at Bram */}
        {walker('jada', 40, 48, '#ffc929', PAL.yellowShade, [1, 0])}
        {/* Bram with a box */}
        {walker('bram', 76, 46, PAL.orange, PAL.orangeShade, [0, 0])}
        <path d="M64 58L66 70" stroke={PAL.blue} strokeWidth="7" />
        <Box x={62} y={66} w={26} h={18} depth={8} />
        <circle cx="66" cy="74" r="4" fill={SKIN.bram[0]} />
        <circle cx="88" cy="74" r="4" fill={SKIN.bram[1]} />
      </Move>
    </g>
  ),
} as Record<string, () => JSX.Element>;
