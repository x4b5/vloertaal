import type { JSX } from 'react';
import { PAL, Shine } from '../kit';

export default {
  // "het schapkaartje": the shelf label (the price card on the shelf) — close up: the dark front strip of
  // a shelf with a big yellow price card clipped in it (a thick dark price bar, grey text lines and a
  // small barcode, no digits), and the bottoms of the tins standing on the shelf above it. A thing: it
  // stays still.
  'w.schapkaartje': () => (
    <g strokeLinejoin="round">
      {/* Tins on the shelf, cut off at the top */}
      {[10, 38, 66, 94].map((x, i) => (
        <g key={x}>
          <rect x={x} y="10" width="22" height="40" rx="2" fill={i === 1 ? PAL.green : PAL.mist} />
          <rect x={x + 16} y="10" width="6" height="40" fill={i === 1 ? PAL.greenShade : PAL.steel} opacity=".6" />
          <rect x={x} y="22" width="22" height="14" fill={i === 1 ? PAL.lime : PAL.white} />
        </g>
      ))}
      {/* The shelf top and its front strip */}
      <rect x="4" y="48" width="112" height="6" fill={PAL.steel} />
      <rect x="4" y="54" width="112" height="40" rx="2" fill={PAL.slate} />
      <rect x="4" y="88" width="112" height="6" rx="2" fill={PAL.slateDark} />
      {/* The price card: depth edge, card */}
      <rect x="22" y="60" width="72" height="44" rx="4" fill={PAL.yellowShade} />
      <rect x="22" y="56" width="72" height="44" rx="4" fill={PAL.yellow} />
      <rect x="28" y="63" width="36" height="14" rx="3" fill={PAL.ink} />
      <path d="M28 85H58M28 92H50" stroke={PAL.yellowShade} strokeWidth="3" strokeLinecap="round" />
      <g fill={PAL.ink}>
        {[70, 73, 75.5, 79, 82, 84.5, 87].map((x, i) => (
          <rect key={x} x={x} y="80" width={i % 3 === 0 ? 2.2 : 1.4} height="13" />
        ))}
      </g>
      <Shine d="M26 59H50" color={PAL.yellowShine} width={2.6} opacity={0.8} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
