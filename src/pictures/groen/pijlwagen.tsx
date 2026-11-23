import type { JSX } from 'react';
import { Ground, Move, PAL, Shade, Shine } from '../kit';

export default {
  // "de pijlwagen": the arrow trailer (a trailer with a big arrow that warns drivers) — a yellow road trailer
  // on one wheel, red-and-white stripes at the back, and on a post a big black board with a lit yellow arrow
  // pointing down to the left and four amber lamps in its corners.
  // On the intro card the trailer rolls in from the right (towed by its drawbar) and stops: once, slowly.
  'w.pijlwagen': () => (
    <g strokeLinejoin="round">
      <Ground cx={60} cy={104} rx={50} ry={4} />
      <Move kind="slow" dx={40} once>
      {/* The drawbar and its coupling */}
      <path d="M30 88L10 96" stroke={PAL.slate} strokeWidth="5" strokeLinecap="round" />
      <circle cx="10" cy="96" r="4" fill={PAL.slateDark} />
      {/* The post */}
      <rect x="57" y="60" width="8" height="24" fill={PAL.slate} />
      {/* The trailer body */}
      <Shade color={PAL.yellowShade} opacity={1} at={[108, 90, 12, 14]}>
        <rect x="26" y="78" width="80" height="16" rx="3" fill={PAL.yellow} />
      </Shade>
      {/* Red-and-white stripes on the back */}
      <rect x="84" y="80" width="20" height="12" rx="1.6" fill={PAL.white} />
      <path d="M86 92L94 80M94 92L102 80" stroke={PAL.red} strokeWidth="4" />
      {/* The wheel */}
      <circle cx="56" cy="96" r="9" fill={PAL.ink} />
      <circle cx="56" cy="96" r="3.4" fill={PAL.steel} />
      {/* The arrow board */}
      <rect x="18" y="10" width="86" height="56" rx="6" fill={PAL.slateDark} transform="translate(2 3)" />
      <rect x="18" y="10" width="86" height="56" rx="6" fill={PAL.ink} />
      <path d="M84 22L44 50" stroke={PAL.yellow} strokeWidth="10" strokeLinecap="round" />
      <path d="M34 57L42 34L57 52Z" fill={PAL.yellow} stroke={PAL.yellow} strokeWidth="4" />
      {[[26, 18], [96, 18], [26, 58], [96, 58]].map(([x, y]) => (
        <circle key={`${x}${y}`} cx={x} cy={y} r="4" fill={PAL.orange} />
      ))}
      <Shine d="M30 82H52" color={PAL.yellowShine} width={2.6} opacity={0.8} />
      </Move>
    </g>
  ),
} as Record<string, () => JSX.Element>;
