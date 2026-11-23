import type { JSX } from 'react';
import { Move, PAL, Shade } from '../kit';

export default {
  // "aflopen": to end, to run out (a contract) — a contract above a row of weeks; its blue bar runs to
  // a red end post with a flag: there it stops. On the intro card the clock marker runs along the bar
  // to the red post, once (it happens once: the contract runs out).
  'w.aflopen': () => (
    <g strokeLinejoin="round">
      {/* The contract */}
      <rect x="12" y="16" width="32" height="40" rx="3" fill={PAL.mist} />
      <Shade color={PAL.paperShade} opacity={1} at={[46, 34, 6, 30]}>
        <rect x="12" y="12" width="32" height="40" rx="3" fill={PAL.paper} />
      </Shade>
      <path d="M18 20H34M18 27H38M18 34H32" stroke={PAL.line} strokeWidth="2.4" strokeLinecap="round" />
      <path d="M18 45c2 -6 4 -7 5 -3s-2 5 1 3 3 -5 5 -3 2 3 5 0" fill="none" stroke={PAL.navy} strokeWidth="1.8" strokeLinecap="round" />
      {/* The row of weeks */}
      {[0, 1, 2, 3, 4].map((i) => <rect key={i} x={12 + i * 17} y="86" width="14" height="14" rx="2.4" fill={PAL.mist} />)}
      {/* The contract's bar up to the end */}
      <rect x="12" y="70" width="84" height="12" rx="4" fill={PAL.blueShade} transform="translate(0 2.4)" />
      <rect x="12" y="70" width="84" height="12" rx="4" fill={PAL.blue} />
      {/* The red end post and its flag */}
      <rect x="97" y="34" width="6" height="68" rx="2.4" fill={PAL.redShade} />
      <path d="M103 36H112L108 43L112 50H103Z" fill={PAL.red} />
      {/* The clock marker that runs to the end */}
      <Move kind="slow" dx={-60} once>
        <circle cx="86" cy="60" r="10" fill={PAL.skyShade} transform="translate(0 1.6)" />
        <circle cx="86" cy="60" r="10" fill={PAL.sky} />
        <circle cx="86" cy="60" r="7" fill={PAL.white} />
        <path d="M86 60V55.4M86 60H89.4" stroke={PAL.ink} strokeWidth="1.8" strokeLinecap="round" />
        <path d="M82 70L86 75L90 70Z" fill={PAL.sky} />
      </Move>
    </g>
  ),
} as Record<string, () => JSX.Element>;
