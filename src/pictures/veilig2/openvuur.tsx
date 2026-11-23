import type { JSX } from 'react';
import { Move, PAL, Shade, Shine } from '../kit';

export default {
  // "open vuur": open fire — a big flame from a plain lighter: a blue lighter body with a steel top and
  // its striker wheel, and a tall orange flame with a yellow core above it.
  // Once and slowly: the flame comes up from the lighter (it is lit).
  'w.openvuur': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      {/* The flame */}
      <Move kind="sag" grow={0.3} once>
        <path d="M60 10C70 24 80 34 80 50C80 62 71 70 60 70C49 70 40 62 40 50C40 40 46 34 50 26C52 34 54 38 56 40C56 30 56 20 60 10Z" fill={PAL.orange} />
        <path d="M60 36C66 44 70 48 70 56C70 63 66 68 60 68C54 68 50 63 50 56C50 50 55 44 60 36Z" fill={PAL.yellow} />
        <path d="M60 52C63 56 64 58 64 61C64 64 62 66 60 66C58 66 56 64 56 61C56 58 58 56 60 52Z" fill={PAL.yellowShine} />
      </Move>
      {/* The steel top with its wheel */}
      <rect x="44" y="68" width="26" height="12" rx="2" fill={PAL.mist} />
      <rect x="62" y="68" width="8" height="12" rx="2" fill={PAL.steel} />
      <circle cx="74" cy="72" r="6" fill={PAL.slate} />
      <path d="M71 69L77 75M71 75L77 69" stroke={PAL.slateDark} strokeWidth="1.4" />
      {/* The lighter body */}
      <Shade color={PAL.blueShade} opacity={1} at={[82, 92, 8, 20]}>
        <rect x="42" y="78" width="36" height="30" rx="6" fill={PAL.blue} />
      </Shade>
      <Shine d="M48 84V100" width={3.4} opacity={0.6} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
