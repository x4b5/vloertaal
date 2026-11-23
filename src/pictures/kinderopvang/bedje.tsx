import type { JSX } from 'react';
import { Ground, PAL, Shine } from '../kit';

const BARS = [24, 33, 42, 51, 60, 69, 78, 87];

export default {
  // "het bedje": the cot — a small wooden baby bed with bars, seen from the front and a little from
  // above: the higher end posts, the top and bottom rails with the row of bars between, and behind the
  // bars a white mattress with a lilac blanket and a pillow.
  'w.bedje': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      <Ground cx={60} cy={104} rx={50} ry={4} />
      {/* The back: its posts and top rail */}
      <path d="M24 46H102" stroke={PAL.cardShade} strokeWidth="5" />
      <path d="M102 30V84" stroke={PAL.cardDark} strokeWidth="6" />
      {/* The mattress, the pillow and the blanket */}
      <path d="M18 74L28 62H100L94 74Z" fill={PAL.paper} />
      <rect x="18" y="74" width="76" height="10" fill={PAL.paperShade} />
      <ellipse cx="34" cy="64" rx="11" ry="5" fill={PAL.white} />
      <path d="M48 74Q50 60 64 60H98L92 74Z" fill={PAL.purpleLight} />
      <path d="M80 60H98L92 74H78Z" fill={PAL.purple} opacity=".4" />
      {/* The front: bars between two rails, and the end posts */}
      {BARS.map((x) => <path key={x} d={`M${x} 54V88`} stroke={PAL.card} strokeWidth="4" />)}
      <rect x="14" y="50" width="82" height="7" rx="3" fill={PAL.card} />
      <rect x="14" y="86" width="82" height="7" rx="3" fill={PAL.cardShade} />
      <rect x="8" y="36" width="10" height="68" rx="4" fill={PAL.card} />
      <rect x="92" y="36" width="10" height="68" rx="4" fill={PAL.cardShade} />
      <circle cx="13" cy="36" r="6" fill="#f0c48a" />
      <circle cx="97" cy="36" r="6" fill={PAL.card} />
      <Shine d="M18 52.6H60" width={2.4} opacity={0.7} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
