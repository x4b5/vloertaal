import type { JSX } from 'react';
import { Ground, PAL, Shade, Shine } from '../kit';

export default {
  // "de stageplek": the placement (the company where you do your placement) — a company building
  // (a workshop with a sawtooth roof and a big door) with a large purple map pin over it: this is
  // the place. Purple, as the backpack of "de stage".
  'w.stageplek': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      <Ground cx={60} cy={106} rx={50} ry={4} />
      {/* The building: sawtooth roof, wall, shaded right end */}
      <path d="M12 62L12 48L32 38V48L52 38V48L72 38V48L92 38V62Z" fill={PAL.slate} />
      <path d="M32 38V48M52 38V48M72 38V48" stroke={PAL.ice} strokeWidth="3" />
      <rect x="12" y="58" width="80" height="46" rx="2" fill={PAL.mist} />
      <path d="M92 58L108 50V96L92 104Z" fill={PAL.steel} />
      <path d="M92 48L108 40V50L92 58Z" fill={PAL.slateDark} />
      {/* The big door and two windows */}
      <rect x="44" y="72" width="28" height="32" rx="2" fill={PAL.blue} />
      <path d="M44 80H72M44 88H72M44 96H72" stroke={PAL.blueShade} strokeWidth="2" />
      <rect x="18" y="68" width="18" height="12" rx="2" fill="#e3f5ff" />
      <rect x="78" y="68" width="10" height="12" rx="2" fill="#e3f5ff" />
      <Shine d="M16 62H40" width={2.6} opacity={0.6} />
      {/* The map pin over the building */}
      <Shade color={PAL.purpleShade} opacity={1} at={[84, 24, 10, 26]}>
        <path d="M70 52Q54 34 54 22A16 16 0 0 1 86 22Q86 34 70 52Z" fill={PAL.purple} />
      </Shade>
      <circle cx="70" cy="22" r="6.4" fill={PAL.white} />
      <Shine d="M59 18Q61 11 67 9" width={2.6} opacity={0.6} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
