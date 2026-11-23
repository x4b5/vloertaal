import type { JSX } from 'react';
import { Ground, Motion, Move, PAL, Shade, Shine } from '../kit';

export default {
  // "de schrobzuigmachine": the scrubber-dryer — a yellow walk-behind floor machine from the side, driving to
  // the right: the handle with its grip and control box at the back, a dark tank lid on top, the round
  // brush under the front on a wet blue patch, and the squeegee with a wheel at the back over a dry floor.
  // Three rounds: the machine drives in from the left over the floor (its use).
  'w.schrobzuigmachine': () => (
    <g strokeLinejoin="round">
      {/* The wet floor in front, the dry floor behind */}
      <ellipse cx="88" cy="104" rx="22" ry="4" fill={PAL.ice} />
      <Ground cx={52} cy={105} rx={40} ry={4} />
      <Move kind="from" dx={-26}>
        {/* The handle and its control box */}
        <path d="M32 58L16 28" stroke={PAL.slate} strokeWidth="6" strokeLinecap="round" />
        <rect x="8" y="20" width="22" height="13" rx="4" fill={PAL.slate} />
        <rect x="12" y="24" width="8" height="4" rx="1.5" fill={PAL.ice} />
        <path d="M8 22H2" stroke={PAL.slateDark} strokeWidth="5" strokeLinecap="round" transform="translate(8 0)" />
        {/* The body */}
        <Shade color={PAL.yellowShade} opacity={1} at={[96, 76, 16, 30]}>
          <path d="M24 56Q24 48 32 48H88Q96 48 98 56L100 86H24Z" fill={PAL.yellow} />
        </Shade>
        <path d="M26 46Q26 40 34 40H84Q92 40 94 46L95 52H26Z" fill={PAL.slate} />
        <path d="M84 40Q92 40 94 46L95 52H86Z" fill={PAL.slateDark} />
        <Shine d="M30 58V78" width={3.2} color={PAL.yellowShine} opacity={0.8} />
        <rect x="40" y="60" width="30" height="10" rx="3" fill={PAL.yellowShade} />
        {/* The brush deck and the round brush */}
        <rect x="62" y="84" width="40" height="10" rx="4" fill={PAL.slate} />
        <rect x="66" y="94" width="32" height="8" rx="4" fill={PAL.sky} />
        <path d="M70 98H94" stroke={PAL.skyShade} strokeWidth="2" strokeLinecap="round" strokeDasharray="3 3" />
        {/* The squeegee and the wheel at the back */}
        <rect x="16" y="98" width="20" height="5" rx="2.5" fill={PAL.slateDark} />
        <rect x="24" y="84" width="38" height="8" rx="3" fill={PAL.slateDark} />
        <circle cx="42" cy="94" r="10" fill={PAL.slateDark} />
        <circle cx="42" cy="94" r="4.4" fill={PAL.steel} />
      </Move>
      <Motion x={104} y={94} dir={0} spread={50} n={2} len={6} color={PAL.sky} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
