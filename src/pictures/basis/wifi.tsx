import type { JSX } from 'react';
import { Ground, Move, PAL, Shade } from '../kit';

export default {
  // "de wifi": the wifi — a white wifi router with two antennas and green lights, and above it the
  // wifi sign: a dot and three sky-blue arcs going out. On the intro card the arcs come again and
  // again (three rounds: it keeps sending).
  'w.wifi': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      <Ground cx={60} cy={104} rx={40} ry={4} />
      {/* The antennas */}
      <path d="M32 82L26 58M88 82L94 58" stroke={PAL.slate} strokeWidth="5" />
      {/* The router */}
      <path d="M20 84Q20 78 26 78H94Q100 78 100 84V96Q100 102 94 102H26Q20 102 20 96Z" fill={PAL.paperShade} transform="translate(0 2)" />
      <Shade color={PAL.paperShade} opacity={1} at={[104, 92, 14, 16]}>
        <path d="M20 84Q20 78 26 78H94Q100 78 100 84V96Q100 102 94 102H26Q20 102 20 96Z" fill={PAL.white} />
      </Shade>
      <circle cx="34" cy="91" r="2.6" fill={PAL.leaf} />
      <circle cx="44" cy="91" r="2.6" fill={PAL.leaf} />
      <circle cx="54" cy="91" r="2.6" fill={PAL.leaf} />
      <path d="M68 91H88" stroke={PAL.mist} strokeWidth="3" />
      {/* The wifi sign */}
      <circle cx="60" cy="64" r="6" fill={PAL.sky} />
      <Move kind="show">
        <path d="M47 51A18 18 0 0 1 73 51" fill="none" stroke={PAL.sky} strokeWidth="8" />
        <path d="M37 41A32 32 0 0 1 83 41" fill="none" stroke={PAL.sky} strokeWidth="8" />
        <path d="M27 31A46 46 0 0 1 93 31" fill="none" stroke={PAL.sky} strokeWidth="8" />
      </Move>
    </g>
  ),
} as Record<string, () => JSX.Element>;
