import type { JSX } from 'react';
import { Ground, Hand, Motion, Move, PAL, SKIN, Shade } from '../kit';
import { Bust } from '../bust';

export default {
  // "de aanwijzer": the banksman (the person who guides the driver) — Bram in his hi-vis vest behind the back
  // of a bin lorry (the dark hopper and its reversing light, on the left), one hand raised, waving the driver
  // back towards him, with motion lines.
  // On the intro card his hand waves (three rounds: he keeps guiding).
  'w.aanwijzer': () => (
    <g strokeLinejoin="round">
      <Ground cx={26} cy={105} rx={20} ry={3.5} />
      {/* The back of the lorry */}
      <Shade color={PAL.greenShade} opacity={1} at={[24, 60, 6, 40]}>
        <path d="M8 40H20V94H8Z" fill={PAL.green} />
      </Shade>
      <path d="M20 42L30 46L34 94H20Z" fill={PAL.slate} />
      <path d="M30 46L34 94H30Z" fill={PAL.slateDark} />
      <rect x="8" y="92" width="28" height="7" rx="2" fill={PAL.slateDark} />
      <rect x="30" y="80" width="7" height="7" rx="2" fill={PAL.white} />
      <circle cx="16" cy="99" r="6" fill={PAL.ink} />
      {/* Bram, guiding */}
      <Bust who="bram" x={84} y={120} scale={0.74} expr="neutral" />
      <Motion x={42} y={38} dir={-120} spread={60} n={3} len={8} gap={20} color={PAL.line} />
      <Move kind="turn" turn={-30} at={[60, 96]}>
        <Hand pose="open" x={46} y={68} rotate={-25} scale={0.68} skin={SKIN.bram} sleeve={[PAL.blue, PAL.blueShade]} />
      </Move>
    </g>
  ),
} as Record<string, () => JSX.Element>;
