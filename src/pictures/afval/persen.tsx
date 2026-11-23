import type { JSX } from 'react';
import { Arrow, Ground, Move, PAL, Shade, Shine } from '../kit';

export default {
  // "persen": to press — a close-up of the press at work: a heavy steel press plate on its shiny
  // piston rod pushes down on a pile of flattened cardboard, a big blue arrow pointing down beside it.
  // On the intro card the plate comes down and the pile sinks under it (three rounds: the press at work).
  'w.persen': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      <Ground cx={52} cy={104} rx={42} ry={4.5} />
      {/* The floor of the chamber */}
      <rect x="10" y="96" width="84" height="8" rx="2" fill={PAL.slate} />
      {/* The pile of cardboard: it sinks as the plate comes down */}
      <Move kind="sag" grow={1.9}>
        <g>
          <rect x="16" y="72" width="72" height="24" rx="2" fill={PAL.card} />
          <path d="M16 78H88M16 84H88M16 90H88" stroke={PAL.cardDark} strokeWidth="1.8" />
          <rect x="72" y="72" width="16" height="24" fill={PAL.cardShade} opacity=".7" />
          <rect x="24" y="80" width="12" height="3.4" rx="1.5" fill={PAL.blue} />
          <rect x="50" y="86" width="10" height="3.4" rx="1.5" fill={PAL.red} />
        </g>
      </Move>
      {/* The press plate on its piston rod */}
      <Move kind="from" dy={-26}>
        <rect x="44" y="-30" width="16" height="78" fill={PAL.mist} />
        <rect x="54" y="-30" width="6" height="78" fill={PAL.steel} />
        <Shade color={PAL.slateDark} opacity={1} at={[96, 60, 14, 20]}>
          <rect x="10" y="46" width="84" height="26" rx="3" fill={PAL.slate} />
        </Shade>
        <rect x="10" y="46" width="84" height="6" rx="3" fill={PAL.steel} />
        <Shine d="M16 56H40" width={3} opacity={0.4} />
      </Move>
      {/* The arrow: down */}
      <Arrow from={[106, 22]} to={[106, 76]} color={PAL.sky} width={8} head={13} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
