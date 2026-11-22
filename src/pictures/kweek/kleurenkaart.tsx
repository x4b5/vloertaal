import type { JSX } from 'react';
import { Ground, PAL, Shade, Shine } from '../kit';

/** The five ripeness swatches, from green (unripe) through orange to red (ripe): [colour, shade]. */
const SWATCH: [string, string][] = [
  [PAL.leaf, PAL.leafShade],
  [PAL.lime, PAL.leaf],
  [PAL.orangeLight, PAL.orange],
  [PAL.orange, PAL.orangeShade],
  [PAL.red, PAL.redShade],
];
const SX = (i: number) => 24 + i * 18;
const SY = 34;

export default {
  // "de kleurenkaart": the ripeness colour chart — a white card with a row of five round swatches
  // from green through orange to red; an orange tomato is held up under the fourth swatch, a
  // little pointer marks the colour it matches.
  'w.kleurenkaart': () => (
    <g strokeLinejoin="round">
      <Ground cx={78} cy={104} rx={20} ry={3.5} />
      {/* The card with its depth edge */}
      <rect x="11" y="16" width="98" height="40" rx="6" fill={PAL.paperShade} transform="translate(0 4)" />
      <rect x="11" y="16" width="98" height="40" rx="6" fill={PAL.paper} />
      {SWATCH.map(([c, sh], i) => (
        <g key={c}>
          <circle cx={SX(i)} cy={SY} r="8.5" fill={c} />
          <path d={`M${SX(i) + 1} ${SY + 8.4}A8.5 8.5 0 0 0 ${SX(i) + 8.4} ${SY + 1}`} fill="none" stroke={sh} strokeWidth="3" strokeLinecap="round" />
        </g>
      ))}
      <path d="M18 50H62M94 50H102" stroke={PAL.paperShade} strokeWidth="2" strokeLinecap="round" />
      {/* The pointer from the swatch to the tomato */}
      <path d="M78 46L72 53H84Z" fill={PAL.slate} />
      {/* The tomato, the same orange as the fourth swatch */}
      <Shade color={PAL.orangeShade} opacity={1} at={[92, 86, 9, 20]}>
        <path d="M78 64C96 64 98 76 98 82C98 94 90 100 78 100C66 100 58 94 58 82C58 76 60 64 78 64Z" fill={PAL.orange} />
      </Shade>
      <path d="M68 67L78 71L88 67" fill="none" stroke={PAL.greenShade} strokeWidth="3.6" strokeLinecap="round" />
      <path d="M78 70V61" stroke={PAL.greenShade} strokeWidth="3" strokeLinecap="round" />
      <Shine d="M64 84Q64 76 70 72" width={3.4} opacity={0.6} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
