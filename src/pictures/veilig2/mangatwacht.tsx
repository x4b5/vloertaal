import type { JSX } from 'react';
import { Hand, PAL, SKIN } from '../kit';
import { Bust } from '../bust';

export default {
  // "de mangatwacht": the hole watch — Bram in his orange hi-vis vest stands next to an open manhole on
  // the right (a steel ring, dark inside, the top of a ladder sticking out of it), his head turned to it, a
  // black radio in his raised hand on the left.
  'w.mangatwacht': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      {/* Bram */}
      <Bust who="bram" x={44} y={124} scale={0.74} expr="neutral" tilt={10} />
      {/* The radio in his hand */}
      <rect x="20" y="40" width="4" height="12" rx="1.5" fill={PAL.slateDark} />
      <rect x="14" y="48" width="14" height="24" rx="3" fill={PAL.ink} />
      <rect x="17" y="52" width="8" height="6" rx="1" fill={PAL.ok} />
      <path d="M18 63H24M18 67H24" stroke={PAL.slate} strokeWidth="1.6" />
      <Hand pose="hold" x={20} y={92} rotate={-4} scale={0.58} skin={SKIN.bram} sleeve={[PAL.blue, PAL.blueShade]} mirror />
      {/* The manhole and the ladder sticking out of it */}
      <ellipse cx="88" cy="96" rx="24" ry="10" fill={PAL.steel} />
      <ellipse cx="88" cy="96" rx="18" ry="6.5" fill="#141a1f" />
      <path d="M82 98V76M94 98V76" stroke={PAL.mist} strokeWidth="3" />
      <path d="M82 82H94M82 90H94" stroke={PAL.mist} strokeWidth="2.4" />
    </g>
  ),
} as Record<string, () => JSX.Element>;
