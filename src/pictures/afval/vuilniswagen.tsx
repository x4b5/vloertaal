import type { JSX } from 'react';
import { Ground, Move, PAL, Shade, Shine } from '../kit';

/** A wheel of the lorry: black tyre, steel hub. */
const wheel = (cx: number, cy: number, r = 10) => (
  <g key={cx}>
    <circle cx={cx} cy={cy} r={r} fill={PAL.ink} />
    <circle cx={cx} cy={cy} r={r * 0.42} fill={PAL.steel} />
  </g>
);

export default {
  // "de vuilniswagen": the bin lorry, the garbage truck — seen from the side, facing left: a light grey cab
  // with an orange beacon on its roof, a big round green body (the compactor) with a yellow stripe, and the
  // dark slanted loading hopper at the back; three wheels (not the red cab and grey box of "de vrachtwagen").
  // On the intro card the lorry drives in from the right and stops: once, slowly.
  'w.vuilniswagen': () => (
    <g strokeLinejoin="round">
      <Ground cx={60} cy={103} rx={54} ry={4} />
      <Move kind="slow" dx={40} once>
      {/* The chassis */}
      <rect x="12" y="78" width="98" height="9" rx="2" fill={PAL.slate} />
      {/* The rounded compactor body */}
      <Shade color={PAL.greenShade} opacity={1} at={[104, 66, 14, 44]}>
        <path d="M40 82V36Q40 24 52 24H88Q98 24 98 36V82Z" fill={PAL.green} />
      </Shade>
      <path d="M60 30V62M78 30V62" stroke={PAL.greenShade} strokeWidth="2.2" strokeLinecap="round" />
      <rect x="40" y="66" width="58" height="6" fill={PAL.yellow} />
      <Shine d="M46 40Q46 30 56 30H70" width={3.6} opacity={0.5} />
      {/* The loading hopper at the back */}
      <path d="M98 28L106 32L112 84H98Z" fill={PAL.slate} />
      <path d="M106 32L112 84H107Z" fill={PAL.slateDark} />
      {/* The cab */}
      <path d="M22 40H32V44H22Z" fill={PAL.orangeShade} />
      <path d="M21 41A6 6 0 0 1 33 41Z" fill={PAL.orange} />
      <Shade color={PAL.mist} opacity={1} at={[42, 70, 6, 36]}>
        <path d="M10 84V56Q10 44 21 42H34Q38 42 38 46V84Z" fill={PAL.paper} />
      </Shade>
      <rect x="10" y="66" width="28" height="18" fill={PAL.mist} />
      <path d="M14 57Q15 48 22 48H34V60H14Z" fill={PAL.ice} />
      <rect x="7" y="76" width="10" height="9" rx="2" fill={PAL.slateDark} />
      <rect x="9" y="68" width="5" height="5" rx="1.6" fill={PAL.yellow} />
      <path d="M30 66V82" stroke={PAL.steel} strokeWidth="1.6" strokeLinecap="round" />
      {wheel(24, 92)}
      {wheel(74, 92)}
      {wheel(94, 92)}
      </Move>
    </g>
  ),
} as Record<string, () => JSX.Element>;
