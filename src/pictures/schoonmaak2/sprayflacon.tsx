import type { JSX } from 'react';
import { Ground, Move, PAL, Shade, Shine } from '../kit';

export default {
  // "de sprayflacon": the spray bottle — a blue plastic bottle with a white trigger head, its nozzle to the
  // right, a dark trigger under it; a fan of fine mist comes out of the nozzle.
  // Three rounds: the mist sprays out of the nozzle (its use).
  'w.sprayflacon': () => (
    <g strokeLinejoin="round">
      <Ground cx={42} cy={105} rx={26} ry={4} />
      {/* The body */}
      <Shade color={PAL.skyShade} opacity={1} at={[64, 80, 12, 30]}>
        <path d="M22 62Q22 54 30 52H54Q62 54 62 62V100Q62 105 57 105H27Q22 105 22 100Z" fill={PAL.sky} />
      </Shade>
      <rect x="28" y="70" width="28" height="20" rx="3" fill={PAL.white} />
      <path d="M32 77H50M32 83H44" stroke={PAL.line} strokeWidth="2.2" strokeLinecap="round" />
      <Shine d="M27 60V92" width={3.2} opacity={0.6} />
      {/* The collar */}
      <rect x="31" y="42" width="22" height="11" rx="2" fill={PAL.mist} />
      <rect x="46" y="42" width="7" height="11" rx="2" fill={PAL.steel} />
      {/* The trigger */}
      <path d="M58 34Q70 38 68 58H62Q62 46 54 40Z" fill={PAL.slate} />
      {/* The head and nozzle */}
      <Shade color={PAL.paperShade} opacity={1} at={[74, 40, 10, 14]}>
        <path d="M26 30Q26 22 34 20H66L78 26V36H58V44H32Q26 44 26 38Z" fill={PAL.paper} />
      </Shade>
      <rect x="76" y="25" width="7" height="10" rx="2" fill={PAL.slate} />
      <Shine d="M32 26H54" width={2.6} color={PAL.white} opacity={1} />
      {/* The mist */}
      <Move kind="grow" grow={0.15}>
        <path d="M84 30L108 14V48Z" fill={PAL.ice} opacity=".55" />
        {[[92, 26], [92, 34], [99, 21], [100, 30], [99, 39], [106, 18], [107, 28], [106, 38], [106, 46]].map(([x, y]) => (
          <circle key={`${x}${y}`} cx={x} cy={y} r="2.2" fill={PAL.sky} />
        ))}
      </Move>
    </g>
  ),
} as Record<string, () => JSX.Element>;
