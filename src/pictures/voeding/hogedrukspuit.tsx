import type { JSX } from 'react';
import { Ground, Move, PAL, Shade, Shine } from '../kit';

export default {
  // "de hogedrukspuit": the pressure washer — a yellow pressure washer on wheels, its black hose looping
  // up to a spray gun with a long steel lance; a hard, fanning jet of water shoots out of the nozzle.
  // On the intro card the jet shoots out of the lance (three rounds: the machine at work).
  'w.hogedrukspuit': () => (
    <g strokeLinejoin="round">
      <Ground cx={40} cy={104} rx={32} ry={4} />
      {/* The hose from the machine up to the gun */}
      <path d="M46 72Q66 70 60 54Q54 42 40 42" fill="none" stroke={PAL.slateDark} strokeWidth="4.5" strokeLinecap="round" />
      {/* The machine: yellow body, dark top, two wheels */}
      <Shade color={PAL.yellowShade} opacity={1} at={[56, 86, 8, 22]}>
        <path d="M14 98V72Q14 62 24 62H44Q52 62 52 72V98Z" fill={PAL.yellow} />
      </Shade>
      <path d="M18 62Q18 54 26 54H40Q48 54 48 62Z" fill={PAL.slate} />
      <circle cx="36" cy="76" r="5" fill={PAL.slate} />
      <circle cx="22" cy="98" r="7" fill={PAL.slateDark} />
      <circle cx="22" cy="98" r="2.6" fill={PAL.steel} />
      <circle cx="46" cy="99" r="5.5" fill={PAL.slateDark} />
      <Shine d="M18 70V88" width={3} opacity={0.7} color={PAL.yellowShine} />
      {/* The water jet, fanning out from the nozzle */}
      <Move kind="grow" grow={0.15}>
        <path d="M82 30L112 16V48Z" fill={PAL.ice} opacity=".85" />
        <path d="M84 30L110 22M84 30H112M84 30L110 40" stroke={PAL.sky} strokeWidth="2.4" strokeLinecap="round" />
      </Move>
      {/* The gun and its lance */}
      <path d="M30 44L40 30" stroke={PAL.slateDark} strokeWidth="8" strokeLinecap="round" />
      <path d="M34 32H82" stroke={PAL.steel} strokeWidth="5" strokeLinecap="round" />
      <rect x="28" y="26" width="18" height="10" rx="3" fill={PAL.yellow} />
      <rect x="78" y="28" width="7" height="6" rx="1.5" fill={PAL.slate} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
