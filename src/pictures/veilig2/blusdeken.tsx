import type { JSX } from 'react';
import { Move, PAL, Shade, Shine } from '../kit';

export default {
  // "de blusdeken": the fire blanket — a red pouch on the wall with a white flame mark, and the off-white
  // blanket pulled half out of its bottom by its two black tapes.
  // Once and slowly: the blanket is pulled down out of the pouch.
  'w.blusdeken': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      {/* The blanket comes out under the pouch */}
      <Move kind="from" dy={-30} once>
        <Shade color={PAL.paperShade} opacity={1} at={[90, 80, 12, 40]}>
          <path d="M32 44H88V96Q88 102 82 102H38Q32 102 32 96Z" fill={PAL.paper} />
        </Shade>
        <path d="M46 52V98M60 52V98M74 52V98" stroke={PAL.mist} strokeWidth="2" />
        {/* The tapes at the bottom corners */}
        <path d="M38 44V104M82 44V104" stroke={PAL.ink} strokeWidth="4" />
        <rect x="33" y="100" width="10" height="8" rx="2.5" fill={PAL.ink} />
        <rect x="77" y="100" width="10" height="8" rx="2.5" fill={PAL.ink} />
      </Move>
      {/* The pouch on the wall, its depth edge */}
      <rect x="24" y="12" width="72" height="44" rx="6" fill={PAL.redShade} transform="translate(0 3)" />
      <Shade color={PAL.redShade} opacity={1} at={[100, 34, 12, 30]}>
        <rect x="24" y="12" width="72" height="44" rx="6" fill={PAL.red} />
      </Shade>
      <rect x="24" y="46" width="72" height="10" rx="4" fill={PAL.redShade} />
      {/* A white flame mark on the pouch */}
      <path d="M60 18C65 24 70 27 70 34C70 39 66 42 60 42C54 42 50 39 50 34C50 29 54 27 55 23C57 27 58 28 59 28C59 24 59 21 60 18Z" fill={PAL.white} />
      <Shine d="M30 20H44" width={3} opacity={0.6} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
