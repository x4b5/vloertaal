import type { JSX } from 'react';
import { Arrow, Ground, Move, PAL, Shine } from '../kit';

export default {
  // "de zekering": the circuit breaker — one big white modular breaker in a slanted view, its dark lever
  // down (off, tripped) with a green flag in the little window, and a blue arrow pointing down.
  'w.zekering': () => (
    <g>
      <Ground cx={60} cy={105} rx={34} ry={4.5} />
      {/* The block: top, right side, front */}
      <path d="M30 24L40 12H82L72 24Z" fill={PAL.paperShade} />
      <path d="M72 24L82 12V92L72 104Z" fill={PAL.mist} />
      <rect x="30" y="24" width="42" height="80" rx="2.5" fill={PAL.paper} />
      {/* The raised middle band */}
      <rect x="30" y="44" width="42" height="42" fill={PAL.paperShade} />
      <rect x="30" y="44" width="42" height="3" fill={PAL.white} />
      {/* The screws at top and bottom */}
      <circle cx="51" cy="34" r="5.2" fill={PAL.steel} />
      <path d="M47.6 37.4L54.4 30.6" stroke={PAL.slate} strokeWidth="2" strokeLinecap="round" />
      <circle cx="51" cy="95" r="5.2" fill={PAL.steel} />
      <path d="M47.6 98.4L54.4 91.6" stroke={PAL.slate} strokeWidth="2" strokeLinecap="round" />
      {/* The flag window: green, off */}
      <rect x="57" y="50" width="10" height="7" rx="1.5" fill={PAL.slateDark} />
      <Move kind="show">
        <rect x="58.4" y="51.4" width="7.2" height="4.2" rx="1" fill={PAL.leaf} />
      </Move>
      {/* The lever slot and the lever, down */}
      <rect x="37" y="56" width="18" height="24" rx="2.5" fill={PAL.slateDark} />
      <Move kind="drop" dy={-16}>
        <rect x="40" y="66" width="12" height="20" rx="3" fill={PAL.slate} />
        <rect x="40" y="66" width="5" height="20" rx="2.5" fill={PAL.steel} opacity="0.55" />
      </Move>
      <Shine d="M34 28V40" width={2.6} opacity={0.9} />
      {/* Tripped: an arrow down */}
      <Move kind="show">
        <Arrow from={[97, 40]} to={[97, 84]} color={PAL.sky} width={8} head={13} />
      </Move>
    </g>
  ),
} as Record<string, () => JSX.Element>;
