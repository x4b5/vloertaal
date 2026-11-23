import type { JSX } from 'react';
import { Ground, PAL, Shade, Shine } from '../kit';

export default {
  // "het chemisch afval": the chemical waste (dangerous waste, like paint and oil) — a red waste crate for small
  // chemical waste with in it a paint tin (a blue drip down its side, the lid on top), a dark oil bottle and
  // two batteries.
  'w.chemischafval': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      <Ground cx={60} cy={104} rx={50} ry={4.5} />
      {/* The oil bottle, at the back */}
      <rect x="66" y="16" width="10" height="8" rx="2" fill={PAL.yellow} />
      <path d="M64 24H78V30Q88 34 88 44V64H54V40Q54 32 64 30Z" fill={PAL.slate} />
      <path d="M78 30Q88 34 88 44V64H80V36Z" fill={PAL.slateDark} />
      <rect x="58" y="42" width="24" height="12" rx="2" fill={PAL.yellow} />
      {/* The paint tin */}
      <ellipse cx="38" cy="36" rx="20" ry="6" fill={PAL.steel} />
      <path d="M18 36V66H58V36A20 6 0 0 1 18 36Z" fill={PAL.mist} />
      <path d="M48 40V66H58V36Q56 40 48 40Z" fill={PAL.steel} />
      <path d="M24 41V52Q24 56 27 56Q30 56 30 52V42" fill={PAL.blue} />
      <ellipse cx="38" cy="34" rx="20" ry="6" fill={PAL.line} />
      <Shine d="M22 46V58" width={3} opacity={0.8} />
      {/* The batteries */}
      <rect x="90" y="40" width="10" height="26" rx="3" fill={PAL.ink} transform="rotate(12 95 53)" />
      <rect x="92" y="38" width="6" height="7" rx="1.6" fill={PAL.orange} transform="rotate(12 95 53)" />
      {/* The red crate in front */}
      <Shade color={PAL.redShade} opacity={1} at={[112, 84, 12, 30]}>
        <path d="M10 60H110L104 104H16Z" fill={PAL.red} />
      </Shade>
      <rect x="8" y="58" width="104" height="8" rx="3" fill={PAL.redShade} />
      <rect x="44" y="74" width="32" height="8" rx="4" fill={PAL.redShade} />
      <Shine d="M18 72L20 92" width={3.4} opacity={0.5} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
