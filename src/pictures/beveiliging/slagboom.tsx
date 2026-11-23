import type { JSX } from 'react';
import { Ground, Move, PAL, Shade, Shine } from '../kit';

/** The red bands on the boom, along x from 24 to 104 (the boom lies along y 0, before the turn). */
const BANDS = [36, 56, 76, 96].map((x) => `M${x} -5H${x + 10}V5H${x}Z`).join('');

export default {
  // "de slagboom": the barrier (a bar across the road that goes up) — a yellow post box with a dark top
  // on the left, and the long white boom with red bands on it, hinged at the top of the box, standing
  // up at a slant: open, the road is free.
  // Once: the boom goes up from across the road.
  'w.slagboom': () => (
    <g strokeLinejoin="round">
      <Ground cx={52} cy={104} rx={46} ry={4} />
      <rect x="10" y="100" width="100" height="5" rx="2.5" fill={PAL.mist} />
      {/* The boom */}
      <Move kind="turn" turn={34} at={[30, 58]} once>
        <g transform="translate(30 58) rotate(-34)">
          <rect x="-4" y="-5.5" width="86" height="11" rx="5.5" fill={PAL.paper} />
          <path d={BANDS} fill={PAL.red} transform="translate(-24 0)" />
          <rect x="-4" y="2" width="86" height="3.5" rx="1.7" fill={PAL.paperShade} />
        </g>
      </Move>
      {/* The post box */}
      <Shade color={PAL.yellowShade} opacity={1} at={[46, 80, 9, 30]}>
        <rect x="16" y="54" width="28" height="48" rx="4" fill={PAL.yellow} />
      </Shade>
      <rect x="14" y="50" width="32" height="8" rx="3" fill={PAL.slate} />
      <circle cx="30" cy="58" r="6.5" fill={PAL.slateDark} />
      <circle cx="30" cy="58" r="2.6" fill={PAL.steel} />
      <rect x="22" y="72" width="12" height="16" rx="2" fill={PAL.yellowShade} />
      <Shine d="M20 66V92" color={PAL.yellowShine} width={3} opacity={0.8} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
