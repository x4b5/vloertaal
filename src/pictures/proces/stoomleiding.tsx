import type { JSX } from 'react';
import { Move, PAL, Shine } from '../kit';

/** A rising heat wave (a wavy line) from (x, y) upwards. */
const wave = (x: number, y: number) => `M${x} ${y}q-4 -4 0 -8t0 -8t0 -8`;

export default {
  // "de stoomleiding": the steam pipe — a thick pipe in silver insulation (with clamping bands) hung from
  // the ceiling on two dark brackets; no steam to see, but red heat waves rise from it, and a yellow hot-surface
  // warning triangle (wavy lines over a bar) hangs on it. On the intro card the heat waves keep rising
  // (three rounds: it is always hot).
  'w.stoomleiding': () => (
    <g strokeLinejoin="round" strokeLinecap="round" transform="translate(0 10)">
      {/* The ceiling brackets */}
      <rect x="6" y="14" width="14" height="5" rx="1.5" fill={PAL.slate} />
      <rect x="100" y="14" width="14" height="5" rx="1.5" fill={PAL.slate} />
      <path d="M13 18V52M107 18V52" stroke={PAL.slate} strokeWidth="3.4" />
      {/* The heat waves over the pipe */}
      <Move kind="from" dy={14}>
        <path d={`${wave(28, 42)}${wave(40, 38)}${wave(80, 38)}${wave(92, 42)}`} fill="none" stroke={PAL.red} strokeWidth="3.4" />
      </Move>
      {/* The insulated pipe, running off both sides */}
      <rect x="4" y="48" width="112" height="28" rx="6" fill={PAL.mist} />
      <rect x="4" y="66" width="112" height="10" rx="5" fill={PAL.steel} />
      <Shine d="M8 54H112" width={3} opacity={0.9} />
      <path d="M28 48V76M48 48V76M72 48V76M92 48V76" stroke={PAL.line} strokeWidth="2.4" strokeLinecap="butt" />
      <path d="M13 46V78M107 46V78" stroke={PAL.slateDark} strokeWidth="5" strokeLinecap="butt" />
      {/* The hot-surface warning sign */}
      <path d="M60 36L80 72H40Z" fill={PAL.ink} stroke={PAL.ink} strokeWidth="7" />
      <path d="M60 41L76 69H44Z" fill={PAL.yellow} stroke={PAL.yellow} strokeWidth="3" />
      <path d="M53 61q-2.5 -3 0 -6t0 -6M60 61q-2.5 -3 0 -6t0 -6M67 61q-2.5 -3 0 -6t0 -6" fill="none" stroke={PAL.ink} strokeWidth="2.2" />
      <path d="M50 65H70" stroke={PAL.ink} strokeWidth="2.6" />
    </g>
  ),
} as Record<string, () => JSX.Element>;
