import type { JSX } from 'react';
import { Hand, Move, PAL, SKIN, Shine } from '../kit';

export default {
  // "voorspoelen": to pre-rinse (to rinse before the machine) — a hand holds the spray head of the coiled
  // pre-rinse hose and sprays water down onto a dirty plate standing slanted in a steel sink; the food bits
  // wash off.
  // On the intro card the water sprays down from the head (three rounds: rinsing goes on).
  'w.voorspoelen': () => (
    <g strokeLinejoin="round">
      {/* The coiled hose from the top */}
      <path d="M58 4V10L52 13L64 16L52 19L64 22L52 25L64 28L58 31V34" fill="none" stroke={PAL.steel} strokeWidth="3.4" strokeLinecap="round" />
      {/* The sink */}
      <rect x="10" y="80" width="100" height="26" rx="5" fill={PAL.steel} />
      <path d="M16 84H104L100 92H20Z" fill={PAL.slateDark} />
      {/* The plate, slanted in the sink, with food bits */}
      <ellipse cx="68" cy="74" rx="34" ry="13" fill={PAL.paperShade} transform="rotate(-14 68 74)" />
      <ellipse cx="66" cy="72" rx="34" ry="13" fill={PAL.white} transform="rotate(-14 66 72)" />
      <ellipse cx="66" cy="72" rx="22" ry="7.6" fill="none" stroke={PAL.paperShade} strokeWidth="2" transform="rotate(-14 66 72)" />
      <circle cx="76" cy="66" r="3" fill={PAL.clay} />
      <circle cx="84" cy="68" r="2.4" fill={PAL.leafShade} />
      <circle cx="90" cy="62" r="2.6" fill={PAL.wood} />
      {/* The water */}
      <Move kind="from" dy={-22}>
        {[[50, 58], [56, 62], [62, 60], [68, 64], [53, 50], [60, 52], [66, 54]].map(([x, y], i) => (
          <path key={i} d={`M${x} ${y - 6}L${x + 1.2} ${y}`} stroke={PAL.sky} strokeWidth="3" strokeLinecap="round" />
        ))}
      </Move>
      <path d="M52 66Q46 64 44 70M74 72Q80 66 84 72" fill="none" stroke={PAL.ice} strokeWidth="3" strokeLinecap="round" />
      {/* The spray head in the hand */}
      <rect x="53" y="32" width="10" height="16" rx="3" fill={PAL.slate} />
      <rect x="51" y="44" width="14" height="5" rx="2.5" fill={PAL.slateDark} />
      <Shine d="M56 35V42" width={2} opacity={0.6} />
      <Hand pose="hold" x={36} y={40} rotate={90} scale={0.56} skin={SKIN.jada} sleeve={[PAL.paper, PAL.paperShade]} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
