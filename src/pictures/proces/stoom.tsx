import type { JSX } from 'react';
import { Ground, Move, PAL, Shine } from '../kit';

/** The puffs of the steam cloud: [x, y, r]. */
const PUFFS: [number, number, number][] = [[53, 54, 11], [40, 42, 14], [64, 40, 15], [46, 26, 14], [68, 22, 12], [30, 26, 10]];

export default {
  // "de stoom": the steam — a thick white cloud of steam pouring up out of the open end of a vent pipe that
  // rises from a steel pipe with a red hand wheel; small red heat waves beside it.
  // On the intro card the steam keeps rising out of the vent (three rounds).
  'w.stoom': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      <Ground cx={60} cy={105} rx={48} ry={3.5} />
      {/* The steam cloud, rising out of the vent */}
      <Move kind="from" dy={22}>
        <g fill={PAL.mist} transform="translate(3 4)">
          {PUFFS.map(([x, y, r]) => <circle key={`${x}${y}`} cx={x} cy={y} r={r} />)}
        </g>
        <g fill={PAL.paper}>
          {PUFFS.map(([x, y, r]) => <circle key={`${x}${y}`} cx={x} cy={y} r={r} />)}
        </g>
        <Shine d="M32 30Q34 22 42 20" width={3.2} opacity={0.9} />
      </Move>
      {/* Heat waves */}
      <path d="M90 50q-4 -4 0 -8t0 -8t0 -8M100 56q-4 -4 0 -8t0 -8t0 -8" fill="none" stroke={PAL.red} strokeWidth="3.2" />
      {/* The vent pipe and its open end */}
      <rect x="46" y="62" width="14" height="28" fill={PAL.steel} />
      <rect x="55" y="62" width="5" height="28" fill={PAL.slate} opacity=".6" />
      <rect x="43" y="58" width="20" height="7" rx="2" fill={PAL.slate} />
      {/* The main pipe and the valve with its red hand wheel */}
      <rect x="8" y="86" width="104" height="14" rx="3" fill={PAL.steel} />
      <rect x="8" y="95" width="104" height="5" rx="2" fill={PAL.slate} opacity=".55" />
      <Shine d="M12 89H108" width={2.4} opacity={0.6} />
      <rect x="82" y="78" width="16" height="16" rx="2" fill={PAL.slate} />
      <rect x="88" y="68" width="4" height="12" fill={PAL.slate} />
      <ellipse cx="90" cy="68" rx="13" ry="4.5" fill={PAL.redShade} />
      <ellipse cx="90" cy="66.5" rx="13" ry="4.5" fill={PAL.red} />
      <ellipse cx="90" cy="66.5" rx="7" ry="2" fill={PAL.redShade} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
