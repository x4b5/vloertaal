import type { JSX } from 'react';
import { Ground, PAL, Shade, Shine } from '../kit';

export default {
  // "het pinapparaat": the card machine — a dark handheld card terminal standing upright: a light screen, a
  // grid of keys with a green key, a paper slip curling out of its top, and a blue bank card pushed into its
  // slot at the bottom (no hand: paying with it is "pinnen").
  'w.pinapparaat': () => (
    <g strokeLinejoin="round">
      <Ground cx={60} cy={106} rx={30} ry={4} />
      {/* The paper slip out of the top */}
      <path d="M44 26V12L48 9L52 12L56 9L60 12L64 9L68 12L72 9L76 12V26Z" fill={PAL.white} />
      <path d="M72 9L76 12V26H72Z" fill={PAL.paperShade} />
      <path d="M50 16H66M50 21H62" stroke={PAL.line} strokeWidth="2" strokeLinecap="round" />
      {/* The body: its right side, then the front */}
      <path d="M86 26L92 30V94L86 98Z" fill={PAL.slateDark} />
      <Shade color={PAL.slateDark} opacity={0.6} at={[90, 60, 6, 40]}>
        <rect x="34" y="22" width="52" height="76" rx="8" fill={PAL.slate} />
      </Shade>
      {/* The screen */}
      <rect x="40" y="30" width="40" height="20" rx="3" fill={PAL.ice} />
      <path d="M46 38H66M46 44H58" stroke={PAL.sky} strokeWidth="2.6" strokeLinecap="round" />
      {/* The keys */}
      {[0, 1, 2, 3].map((r) => [0, 1, 2].map((c) => (
        <rect key={`${r}${c}`} x={42 + c * 13} y={56 + r * 9} width="10" height="6" rx="2"
          fill={r === 3 ? [PAL.red, PAL.yellow, PAL.leaf][c] : PAL.mist} />
      )))}
      <Shine d="M38 30V60" width={2.6} opacity={0.35} />
      {/* The card in the slot at the bottom */}
      <rect x="40" y="94" width="40" height="5" rx="2" fill={PAL.slateDark} />
      <rect x="44" y="96" width="32" height="12" rx="2" fill={PAL.blue} />
      <rect x="50" y="99" width="8" height="6" rx="1.5" fill={PAL.yellow} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
