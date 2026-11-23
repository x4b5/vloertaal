import type { JSX } from 'react';
import { Arrow, Move, PAL, Shade, Shine } from '../kit';

export default {
  // "hijsen": to lift with a crane — a crane hook on its steel cable lifts a load of two green crates on
  // two slings straight up; a big blue arrow up beside it.
  // Once and slowly: the load goes up (a crane lifts it once).
  'w.hijsen': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      {/* The floor where the load came from */}
      <ellipse cx="50" cy="106" rx="30" ry="3.5" fill="#000" opacity=".1" />
      <Arrow from={[98, 96]} to={[98, 22]} color={PAL.sky} width={9} head={16} />
      {/* The cable from the top; a copy rises with the hook so it never breaks */}
      <path d="M50 6V30" stroke={PAL.slate} strokeWidth="2.6" />
      <Move kind="from" dy={28} once>
        <path d="M50 2V34" stroke={PAL.slate} strokeWidth="2.6" />
        {/* The hook block and hook */}
        <rect x="42" y="30" width="16" height="12" rx="3" fill={PAL.yellow} />
        <rect x="51" y="30" width="7" height="12" rx="2" fill={PAL.yellowShade} />
        <path d="M50 42V48A6 6 0 0 1 38 48" fill="none" stroke={PAL.steel} strokeWidth="4.5" />
        {/* The two slings to the corners of the load */}
        <path d="M50 52L22 70M50 52L78 70" stroke={PAL.orange} strokeWidth="3" />
        {/* The load: two crates */}
        <Shade color={PAL.greenShade} opacity={1} at={[82, 82, 10, 20]}>
          <rect x="20" y="68" width="60" height="28" rx="3" fill={PAL.green} />
        </Shade>
        <path d="M50 70V94M26 76H44M56 76H74" stroke={PAL.greenShade} strokeWidth="2.4" />
        <Shine d="M24 72H40" color={PAL.lime} width={2.6} opacity={0.7} />
      </Move>
    </g>
  ),
} as Record<string, () => JSX.Element>;
