import type { JSX } from 'react';
import { Cross, PAL, SKIN, Shade, Shine } from '../kit';

export default {
  // "de allergielijst": the allergy list — a clipboard with a list: at the top a small photo of the
  // child, then three rows, each a food with a red cross: a peanut, an egg, a carton of milk.
  'w.allergielijst': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      {/* The board and the paper */}
      <rect x="22" y="14" width="76" height="96" rx="6" fill={PAL.cardDark} />
      <rect x="18" y="12" width="76" height="96" rx="6" fill={PAL.card} />
      <rect x="24" y="22" width="64" height="80" rx="2" fill={PAL.white} />
      <rect x="40" y="8" width="32" height="12" rx="4" fill={PAL.steel} />
      <rect x="62" y="8" width="10" height="12" rx="3" fill={PAL.slate} />
      {/* The child's photo and a line for the name */}
      <rect x="28" y="26" width="16" height="16" rx="2" fill={PAL.ice} />
      <circle cx="36" cy="33" r="5.4" fill={PAL.brown} />
      <circle cx="36" cy="35" r="4.4" fill={SKIN.jada[0]} />
      <path d="M50 34H82" stroke={PAL.line} strokeWidth="2.6" />
      {/* The peanut */}
      <g transform="rotate(-20 36 54)">
        <ellipse cx="32" cy="54" rx="5" ry="5.6" fill={PAL.card} />
        <ellipse cx="40" cy="54" rx="5" ry="5.6" fill={PAL.cardShade} />
        <ellipse cx="36" cy="54" rx="2.4" ry="4.2" fill={PAL.cardShade} />
      </g>
      {/* The egg */}
      <Shade color={PAL.paperShade} opacity={1} at={[42, 74, 3, 8]}>
        <ellipse cx="36" cy="72" rx="6.4" ry="8" fill={PAL.paper} />
      </Shade>
      <ellipse cx="36" cy="72" rx="6.4" ry="8" fill="none" stroke={PAL.mist} strokeWidth="1.4" />
      {/* The milk carton */}
      <path d="M30 88L33 84H39L42 88V100H30Z" fill={PAL.sky} />
      <path d="M30 88H42V93H30Z" fill={PAL.white} />
      <rect x="38" y="88" width="4" height="12" fill={PAL.skyShade} />
      {/* Lines and the red crosses */}
      <path d="M48 54H66M48 72H66M48 92H66" stroke={PAL.line} strokeWidth="2.6" />
      <Cross x={78} y={54} r={7} />
      <Cross x={78} y={72} r={7} />
      <Cross x={78} y={92} r={7} />
      <Shine d="M22 18V40" width={2.6} opacity={0.5} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
