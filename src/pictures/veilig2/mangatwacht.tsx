import type { JSX } from 'react';
import { Hand, PAL, SKIN } from '../kit';
import { Bust } from '../bust';

export default {
  // "de mangatwacht": the hole watch — Bram in his orange hi-vis vest stands next to an open manhole on
  // the right (a steel ring, dark inside, the top of a ladder going down), looking at it, a black radio
  // in his raised hand.
  'w.mangatwacht': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      {/* The manhole and the ladder going down */}
      <ellipse cx="86" cy="96" rx="26" ry="10" fill={PAL.steel} />
      <ellipse cx="86" cy="96" rx="19" ry="6.5" fill="#141a1f" />
      <path d="M80 98V82M92 98V82M80 86H92" stroke={PAL.mist} strokeWidth="2.8" />
      {/* Bram */}
      <Bust who="bram" x={44} y={122} scale={0.78} expr="neutral" tilt={8} />
      {/* The radio in his hand */}
      <rect x="70" y="40" width="4" height="12" rx="1.5" fill={PAL.slateDark} />
      <rect x="64" y="48" width="14" height="24" rx="3" fill={PAL.ink} />
      <rect x="67" y="52" width="8" height="6" rx="1" fill={PAL.ok} />
      <path d="M68 63H74M68 67H74" stroke={PAL.slate} strokeWidth="1.6" />
      <Hand pose="hold" x={70} y={92} rotate={8} scale={0.58} skin={SKIN.bram} sleeve={[PAL.blue, PAL.blueShade]} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
