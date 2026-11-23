import type { JSX } from 'react';
import { Ground, PAL, Shade, Shine } from '../kit';

export default {
  // "de spuitbus": the spray can — a tall purple aerosol can with a steel dome and a white nozzle cap on top, a
  // light band round it; a small cloud of spray dots in front of the nozzle shows what it is.
  'w.spuitbus': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      <Ground cx={66} cy={104} rx={28} ry={4.5} />
      {/* The spray */}
      <g fill={PAL.purpleLight}>
        <circle cx="34" cy="22" r="3.4" />
        <circle cx="26" cy="30" r="2.8" />
        <circle cx="22" cy="18" r="2.6" />
        <circle cx="36" cy="32" r="2.2" opacity=".7" />
        <circle cx="16" cy="26" r="2.2" opacity=".7" />
        <circle cx="28" cy="12" r="2" opacity=".7" />
      </g>
      {/* The nozzle and the dome */}
      <rect x="56" y="14" width="18" height="14" rx="3" fill={PAL.paper} />
      <rect x="68" y="14" width="6" height="14" rx="2" fill={PAL.paperShade} />
      <rect x="50" y="18" width="8" height="5" rx="2" fill={PAL.mist} />
      <path d="M46 40Q46 26 65 26Q84 26 84 40Z" fill={PAL.steel} />
      <path d="M72 27Q84 30 84 40H76Z" fill={PAL.line} />
      {/* The can */}
      <Shade color={PAL.purpleShade} opacity={1} at={[90, 70, 10, 40]}>
        <rect x="44" y="38" width="42" height="66" rx="5" fill={PAL.purple} />
      </Shade>
      <rect x="44" y="60" width="42" height="18" fill={PAL.purpleLight} />
      <rect x="76" y="60" width="10" height="18" fill={PAL.purple} opacity=".6" />
      <rect x="44" y="98" width="42" height="6" rx="2" fill={PAL.steel} />
      <Shine d="M50 46V56M50 84V92" width={3.4} opacity={0.6} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
