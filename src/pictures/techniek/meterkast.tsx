import type { JSX } from 'react';
import { Ground, PAL, Shine } from '../kit';

/** The shaded side of the grey steel cabinet: one step under PAL.steel (as in maken/startknop). */
const STEEL_DARK = '#5d6a75';

/** The row of breakers: left edge, top, width of one, pitch, height. */
const BX = 42;
const BY = 60;
const BW = 7.6;
const BP = 8.4;
const BH = 26;
const CABLES = [PAL.slate, PAL.blue, PAL.brown, PAL.slate, PAL.blue];

export default {
  // "de meterkast": the fuse box — a grey steel cabinet with its door swung open to the left; inside, one
  // row of white circuit breakers (levers up) on a rail, the cables going up out of the top.
  'w.meterkast': () => (
    <g>
      <Ground cx={60} cy={106} rx={46} ry={4.5} />
      {/* The cabinet: top, right side, the grey front frame */}
      <path d="M36 16L44 9H100L92 16Z" fill={PAL.paperShade} />
      <path d="M92 16L100 9V96L92 103Z" fill={STEEL_DARK} />
      <rect x="36" y="16" width="56" height="87" rx="2.5" fill={PAL.mist} />
      {/* The inside: a darker back plate */}
      <rect x="41" y="21" width="46" height="77" rx="2" fill={PAL.line} />
      {/* The cables, going up from the breakers */}
      {CABLES.map((c, i) => {
        const x = BX + BW / 2 + i * BP;
        return <path key={i} d={`M${x} ${BY}C${x} 40 ${58 + i * 3} 38 ${58 + i * 3} 21`} stroke={c} strokeWidth="2.6" strokeLinecap="round" fill="none" />;
      })}
      {/* The rail behind the breakers */}
      <rect x="41" y={BY + 10} width="46" height="6" fill={PAL.steel} />
      {/* The breakers: white blocks, a grey side, a dark lever up */}
      {CABLES.map((_, i) => {
        const x = BX + i * BP;
        return (
          <g key={i}>
            <rect x={x} y={BY} width={BW} height={BH} rx="1.6" fill={PAL.paperShade} />
            <rect x={x} y={BY} width={BW - 1.8} height={BH} rx="1.6" fill={PAL.paper} />
            <rect x={x + 1.6} y={BY + 8} width={BW - 3.6} height={10} rx="1" fill={PAL.slateDark} />
            <rect x={x + 2.2} y={BY + 7} width={BW - 4.8} height={6} rx="1" fill={PAL.slate} />
          </g>
        );
      })}
      {/* The open door: its inside facing us, a handle at the far edge */}
      <path d="M36 17L15 25V108L36 102Z" fill={PAL.steel} />
      <path d="M36 17L15 25V31L36 23Z" fill={PAL.mist} opacity="0.5" />
      <rect x="18.5" y="56" width="4.5" height="14" rx="2" fill={PAL.slate} />
      <Shine d="M40 20V44" width={2.4} opacity={0.7} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
