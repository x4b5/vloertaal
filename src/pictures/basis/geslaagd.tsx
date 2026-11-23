import type { JSX } from 'react';
import { Hand, PAL, SKIN, Sparkle, Tick } from '../kit';
import { Bust } from '../bust';

export default {
  // "geslaagd": passed (you did it well enough) — Jada, laughing, holds up her certificate (a sheet with lines and
  // a red seal with ribbons), a big green tick badge beside her and yellow sparkles.
  'w.geslaagd': () => (
    <g>
      <Bust who="jada" x={44} y={120} scale={0.66} expr="joy" squint />
      {/* The certificate, held up */}
      <g transform="rotate(8 86 46)">
        <rect x="66" y="22" width="40" height="50" rx="3" fill={PAL.paperShade} transform="translate(2 3)" />
        <rect x="66" y="22" width="40" height="50" rx="3" fill={PAL.paper} />
        <path d="M73 32H99M73 40H99M73 48H91" stroke={PAL.line} strokeWidth="2.6" strokeLinecap="round" />
        <path d="M88 60L84 72L88 70L91 74L92 62Z" fill={PAL.redShade} />
        <circle cx="90" cy="59" r="6" fill={PAL.red} />
      </g>
      <Hand pose="hold" x={84} y={100} rotate={8} scale={0.62} skin={SKIN.jada} sleeve={[PAL.blue, PAL.blueShade]} />
      <Tick x={24} y={30} r={15} color={PAL.ok} shade={PAL.okShade} />
      <Sparkle x={58} y={16} r={6} />
      <Sparkle x={112} y={84} r={5} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
