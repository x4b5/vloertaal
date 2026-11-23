import type { JSX } from 'react';
import { Ground, Move, PAL, Shade } from '../kit';

export default {
  // "vastlopen": to get stuck, to jam — the press plate has come down crooked and is stuck on a box
  // that lies across the chamber: one corner of the box sticks out of the press, the plate hangs at a
  // slant, and a red round sign with a white exclamation mark says the machine has stopped.
  // On the intro card the plate comes down and stops crooked on the box, then the sign appears
  // (once: it gets stuck once).
  'w.vastlopen': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      <Ground cx={52} cy={104} rx={44} ry={4.5} />
      {/* The chamber: its back wall, its floor and the two side walls */}
      <rect x="12" y="40" width="80" height="58" rx="2" fill={PAL.slateDark} />
      <rect x="8" y="96" width="88" height="8" rx="2" fill={PAL.slate} />
      {/* The box stuck across the chamber, a corner out of the front */}
      <g transform="rotate(-16 54 84)">
        <rect x="26" y="74" width="66" height="20" rx="2" fill={PAL.card} />
        <rect x="76" y="74" width="16" height="20" fill={PAL.cardShade} />
        <path d="M26 80H76" stroke={PAL.cardDark} strokeWidth="1.8" />
      </g>
      {/* The press plate, stuck at a slant */}
      <Move kind="from" dy={-22} once>
        <g transform="rotate(-12 54 60)">
          <rect x="46" y="-10" width="14" height="60" fill={PAL.mist} />
          <rect x="55" y="-10" width="5" height="60" fill={PAL.steel} />
          <Shade color={PAL.slateDark} opacity={1} at={[96, 64, 14, 20]}>
            <rect x="12" y="50" width="84" height="18" rx="3" fill={PAL.steel} />
          </Shade>
          <rect x="12" y="50" width="84" height="5" rx="2.5" fill={PAL.mist} />
        </g>
      </Move>
      {/* The side walls in front */}
      <rect x="6" y="36" width="8" height="64" rx="2" fill={PAL.blue} />
      <rect x="90" y="36" width="8" height="64" rx="2" fill={PAL.blueShade} />
      {/* The sign: stopped */}
      <Move kind="show">
        <circle cx="92" cy="26" r="17" fill={PAL.redShade} />
        <circle cx="92" cy="23" r="17" fill={PAL.red} />
        <rect x="89" y="11" width="6" height="15" rx="3" fill={PAL.white} />
        <circle cx="92" cy="31" r="3.4" fill={PAL.white} />
      </Move>
    </g>
  ),
} as Record<string, () => JSX.Element>;
