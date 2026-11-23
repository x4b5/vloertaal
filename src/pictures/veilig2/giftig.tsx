import type { JSX } from 'react';
import { Ground, PAL, Shade, Shine } from '../kit';

/** A diamond (a square on its point) centred on (cx, cy), half its diagonal r. */
const diamond = (cx: number, cy: number, r: number) => `M${cx} ${cy - r}L${cx + r} ${cy}L${cx} ${cy + r}L${cx - r} ${cy}Z`;

export default {
  // "giftig": toxic — a grey product bottle with a black cap, and on its front, big, the GHS hazard
  // pictogram: a red-bordered diamond on white with a black skull and crossbones (GHS06). No text.
  'w.giftig': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      <Ground cx={60} cy={106} rx={34} ry={4} />
      {/* The cap and neck */}
      <rect x="50" y="10" width="20" height="12" rx="3" fill={PAL.slate} />
      <rect x="62" y="10" width="8" height="12" rx="2" fill={PAL.slateDark} />
      <rect x="52" y="21" width="16" height="7" fill={PAL.mist} />
      {/* The bottle */}
      <Shade color={PAL.steel} opacity={0.55} at={[96, 70, 14, 50]}>
        <path d="M52 26H68Q90 32 90 46V100Q90 106 84 106H36Q30 106 30 100V46Q30 32 52 26Z" fill={PAL.mist} />
      </Shade>
      {/* The pictogram */}
      <path d={diamond(60, 70, 27)} fill={PAL.red} stroke={PAL.red} strokeWidth="5" />
      <path d={diamond(60, 70, 21)} fill={PAL.white} stroke={PAL.white} strokeWidth="2" />
      {/* Crossbones behind, the skull in front */}
      <path d="M48 70L72 86M72 70L48 86" stroke={PAL.ink} strokeWidth="4.4" />
      <path d="M60 52Q71 52 71 63Q71 68 67 70V75H53V70Q49 68 49 63Q49 52 60 52Z" fill={PAL.ink} />
      <circle cx="55.5" cy="62.5" r="3.2" fill={PAL.white} />
      <circle cx="64.5" cy="62.5" r="3.2" fill={PAL.white} />
      <path d="M57 75V71M60 75V71M63 75V71" stroke={PAL.white} strokeWidth="1.4" />
      <Shine d="M36 50Q36 40 44 36" width={3.6} opacity={0.8} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
