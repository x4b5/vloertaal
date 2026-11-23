import type { JSX } from 'react';
import { CurveArrow, Ground, Move, PAL, Shade, Shine } from '../kit';

export default {
  // "de dop": the cap — a white product bottle with a blue label band, and its big red screw cap with
  // ridges going onto the neck; a curved arrow round the cap shows it is screwed on.
  // Once and slowly: the cap comes down onto the neck (it happens once), then the arrow shows.
  'w.dop': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      <Ground cx={60} cy={106} rx={30} ry={4} />
      {/* The neck with its thread */}
      <rect x="49" y="34" width="22" height="16" rx="2" fill={PAL.mist} />
      {/* The bottle */}
      <Shade color={PAL.paperShade} opacity={1} at={[96, 76, 16, 44]}>
        <path d="M50 46H70Q88 52 88 64V100Q88 106 82 106H38Q32 106 32 100V64Q32 52 50 46Z" fill={PAL.paper} />
      </Shade>
      <rect x="32" y="70" width="56" height="20" fill={PAL.sky} />
      <rect x="78" y="70" width="10" height="20" fill={PAL.skyShade} />
      <Shine d="M38 64Q38 56 46 52" width={3.6} opacity={0.9} />
      {/* The cap comes down and screws on */}
      <Move kind="from" dy={-26} once>
        <Shade color={PAL.redShade} opacity={1} at={[78, 32, 8, 20]}>
          <rect x="44" y="18" width="32" height="24" rx="4" fill={PAL.red} />
        </Shade>
        <path d="M50 22V38M56 22V38M62 22V38M68 22V38" stroke={PAL.redShade} strokeWidth="2" />
        <rect x="44" y="18" width="32" height="5" rx="2.5" fill={PAL.redLight} opacity=".7" />
      </Move>
      <Move kind="show">
        <CurveArrow from={[32, 32]} to={[90, 32]} bend={14} color={PAL.sky} width={5} head={11} />
      </Move>
    </g>
  ),
} as Record<string, () => JSX.Element>;
