import type { JSX } from 'react';
import { Move, PAL, Shade, Shine } from '../kit';

export default {
  // "de borstel": the brush — a blue scrubbing brush with stiff white bristles and a long blue handle,
  // scrubbing a steel surface, a few soap bubbles around its bristles.
  // On the intro card the brush scrubs to and fro (three rounds: the tool at work).
  'w.borstel': () => (
    <g strokeLinejoin="round">
      {/* The steel surface */}
      <rect x="8" y="92" width="104" height="12" rx="3" fill={PAL.steel} />
      <rect x="8" y="90" width="104" height="6" rx="3" fill={PAL.mist} />
      {/* Soap bubbles */}
      <circle cx="18" cy="86" r="5" fill={PAL.white} />
      <circle cx="102" cy="84" r="6" fill={PAL.white} />
      <circle cx="94" cy="88" r="3.5" fill={PAL.white} />
      <Move kind="from" dx={-24}>
        {/* The long handle */}
        <path d="M70 62L104 16" stroke={PAL.blueShade} strokeWidth="9" strokeLinecap="round" />
        <path d="M70 60L102 17" stroke={PAL.blue} strokeWidth="5" strokeLinecap="round" />
        {/* The bristles */}
        <rect x="26" y="74" width="62" height="16" rx="2" fill={PAL.paper} />
        <path d="M32 76V89M38 76V89M44 76V89M50 76V89M56 76V89M62 76V89M68 76V89M74 76V89M80 76V89" stroke={PAL.paperShade} strokeWidth="2" strokeLinecap="round" />
        {/* The block */}
        <Shade color={PAL.blueShade} opacity={1} at={[94, 70, 12, 14]}>
          <rect x="22" y="58" width="70" height="18" rx="6" fill={PAL.blue} />
        </Shade>
        <Shine d="M28 63H56" width={3} opacity={0.6} />
      </Move>
    </g>
  ),
} as Record<string, () => JSX.Element>;
