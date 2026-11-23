import type { JSX } from 'react';
import { Ground, PAL, Shade, Shine } from '../kit';

/** A big tyre with its hub, centred on (cx, cy). */
const wheel = (cx: number, cy: number, r: number) => (
  <g>
    <circle cx={cx} cy={cy} r={r} fill={PAL.slateDark} />
    <circle cx={cx} cy={cy} r={r * 0.52} fill={PAL.yellowShade} />
    <circle cx={cx} cy={cy} r={r * 0.22} fill={PAL.slate} />
  </g>
);

export default {
  // "de shovel": the wheel loader — a big yellow wheel loader from the side, facing left: the wide
  // steel bucket down on the ground in front, the two lift arms, the cab with its big windows in the
  // middle, the engine at the back and four huge black tyres (two seen).
  'w.shovel': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      <Ground cx={62} cy={104} rx={52} ry={4.5} />
      {/* The lift arm from the front frame down to the bucket */}
      <path d="M58 62L26 84" stroke={PAL.yellowShade} strokeWidth="9" />
      {/* The bucket */}
      <path d="M8 74Q8 102 26 102H40L36 74Q30 66 18 68Z" fill={PAL.slate} />
      <path d="M8 74Q8 98 22 100" fill="none" stroke={PAL.steel} strokeWidth="2.6" />
      <path d="M26 102H42L40 98H26Z" fill={PAL.steel} />
      {/* The body: the front frame, the engine at the back */}
      <Shade color={PAL.yellowShade} opacity={1} at={[114, 78, 14, 30]}>
        <path d="M44 60H112V88H44Z" fill={PAL.yellow} />
      </Shade>
      <path d="M86 60V48Q86 44 90 44H108Q112 44 112 48V60Z" fill={PAL.yellowShade} />
      <rect x="102" y="34" width="4" height="12" rx="1.6" fill={PAL.slateDark} />
      {/* The cab */}
      <path d="M52 60V22Q52 18 56 18H82Q86 18 86 22V60Z" fill={PAL.yellow} />
      <path d="M56 24H71V48H56Z" fill={PAL.ice} />
      <path d="M74 24H82V48H74Z" fill={PAL.ice} />
      <path d="M56 24H64L56 34Z" fill={PAL.white} opacity=".7" />
      <rect x="50" y="15" width="38" height="5" rx="2" fill={PAL.slate} />
      <Shine d="M47 64H80" color={PAL.yellowShine} width={3} opacity={0.8} />
      {/* The tyres */}
      {wheel(46, 88, 16)}
      {wheel(96, 88, 16)}
    </g>
  ),
} as Record<string, () => JSX.Element>;
