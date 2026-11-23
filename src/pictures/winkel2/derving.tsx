import type { JSX } from 'react';
import { Ground, PAL, Shade, Shine } from '../kit';

export default {
  // "de derving": the shrink (what the shop loses: broken, old or stolen products) — what is lost, side
  // by side: a broken jar of jam with a crack and a red puddle, a brown old apple with dark spots, and an
  // empty spot on the shelf strip (a dashed outline where a tin was), under a red minus badge (lost
  // to the shop). A state: it stays still.
  'w.derving': () => (
    <g strokeLinejoin="round">
      <Ground cx={60} cy={104} rx={50} ry={4} />
      {/* The shelf strip they stand on */}
      <rect x="6" y="96" width="108" height="8" rx="2" fill={PAL.slate} />
      {/* The broken jar: puddle, glass, lid off */}
      <ellipse cx="30" cy="95" rx="22" ry="4" fill={PAL.red} />
      <Shade color={PAL.redShade} opacity={1} at={[46, 76, 6, 20]}>
        <path d="M16 62H42V92Q42 96 38 96H20Q16 96 16 92Z" fill={PAL.red} />
      </Shade>
      <rect x="16" y="62" width="26" height="10" fill={PAL.redLight} opacity=".7" />
      <path d="M24 62L30 72L26 80L33 90" fill="none" stroke={PAL.white} strokeWidth="2.6" strokeLinecap="round" />
      <ellipse cx="22" cy="54" rx="10" ry="3.6" fill={PAL.yellowShade} transform="rotate(-30 22 54)" />
      <Shine d="M19 70V86" width={2.6} opacity={0.6} />
      {/* The old apple: brown with dark spots */}
      <Shade color={PAL.brown} opacity={0.8} at={[78, 80, 8, 18]}>
        <path d="M60 78Q60 66 68 66Q72 66 72 68Q72 66 76 66Q84 66 84 78Q84 96 72 96Q60 96 60 78Z" fill={PAL.wood} />
      </Shade>
      <path d="M72 66Q72 60 75 58" fill="none" stroke={PAL.brown} strokeWidth="2.4" strokeLinecap="round" />
      <circle cx="66" cy="80" r="3" fill={PAL.brown} />
      <circle cx="75" cy="88" r="2.4" fill={PAL.brown} />
      <circle cx="77" cy="76" r="1.8" fill={PAL.brown} />
      {/* The empty spot: a tin that is gone */}
      <rect x="90" y="64" width="20" height="30" rx="3" fill="none" stroke={PAL.line} strokeWidth="2.4" strokeDasharray="4 3.4" />
      {/* Lost: the red minus badge */}
      <circle cx="62" cy="32" r="20" fill={PAL.redShade} />
      <circle cx="62" cy="29" r="20" fill={PAL.red} />
      <path d="M51 29H73" stroke={PAL.white} strokeWidth="6" strokeLinecap="round" />
      <Shine d="M48 22Q51 14 58 12" width={2.6} opacity={0.5} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
