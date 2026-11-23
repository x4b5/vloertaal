import type { JSX } from 'react';
import { Ground, Move, PAL, Shade, Shine } from '../kit';

export default {
  // "de babyfoon": the baby monitor — the parent unit: a white unit with a short antenna, a round dark
  // speaker and a row of lights that rise with the sound from the sleeping room, sound waves by the antenna.
  // On the intro card the lights go up and the waves come (it listens: three rounds).
  'w.babyfoon': () => (
    <g strokeLinejoin="round">
      <Ground cx={58} cy={104} rx={32} ry={4} />
      {/* The antenna */}
      <rect x="66" y="12" width="9" height="24" rx="4.5" fill={PAL.slate} />
      <rect x="71" y="12" width="4" height="24" rx="2" fill={PAL.slateDark} />
      {/* The body: white, its right side in shade */}
      <Shade color={PAL.paperShade} opacity={1} at={[86, 70, 10, 44]}>
        <rect x="30" y="28" width="56" height="76" rx="16" fill={PAL.paper} />
      </Shade>
      <path d="M78 30Q86 32 86 44V88Q86 102 74 104H70Q80 100 80 88V44Q80 34 78 30Z" fill={PAL.mist} />
      <Shine d="M37 44V60" width={3.5} opacity={0.9} />
      {/* The speaker */}
      <circle cx="56" cy="54" r="15" fill={PAL.slate} />
      <g fill={PAL.slateDark}>
        <circle cx="50" cy="50" r="2.2" />
        <circle cx="58" cy="48" r="2.2" />
        <circle cx="62" cy="56" r="2.2" />
        <circle cx="54" cy="58" r="2.2" />
        <circle cx="49" cy="58" r="2" />
        <circle cx="63" cy="49" r="2" />
      </g>
      {/* The sound lights: four bars from low to high */}
      <rect x="38" y="78" width="38" height="18" rx="4" fill={PAL.mist} />
      <Move kind="sag" grow={0.2}>
        <rect x="41" y="88" width="6.5" height="5" rx="2" fill={PAL.leaf} />
        <rect x="50" y="85" width="6.5" height="8" rx="2" fill={PAL.leaf} />
        <rect x="59" y="83" width="6.5" height="10" rx="2" fill={PAL.yellow} />
        <rect x="68" y="81" width="6.5" height="12" rx="2" fill={PAL.orange} />
      </Move>
      {/* Sound waves by the antenna */}
      <Move kind="show">
        <path d="M84 18Q90 24 84 30M91 12Q101 24 91 36" fill="none" stroke={PAL.sky} strokeWidth="3.6" strokeLinecap="round" />
      </Move>
    </g>
  ),
} as Record<string, () => JSX.Element>;
