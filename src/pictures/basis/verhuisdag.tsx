import type { JSX } from 'react';
import { Ground, Move, PAL, Shade, Shine } from '../kit';

/** A cardboard box seen from the front: base, a shaded right strip, a strip of tape. */
const carton = (x: number, y: number, w: number, h: number) => (
  <g>
    <rect x={x} y={y} width={w} height={h} rx="1.5" fill={PAL.card} />
    <rect x={x + w * 0.7} y={y} width={w * 0.3} height={h} rx="1.5" fill={PAL.cardShade} />
    <rect x={x + w / 2 - 2} y={y} width="4" height={h * 0.45} fill={PAL.cardDark} opacity=".55" />
  </g>
);

export default {
  // "de verhuisdag": the moving day — a calendar with one day ringed, and a moving van with its back
  // open, full of cardboard boxes. On the intro card the van drives in once and stops.
  'w.verhuisdag': () => (
    <g strokeLinejoin="round">
      {/* The calendar page: red header with rings, big day blocks, one day ringed */}
      <rect x="12" y="16" width="44" height="34" rx="6" fill={PAL.paperShade} />
      <rect x="12" y="12" width="44" height="34" rx="6" fill={PAL.white} />
      <path d="M12 18A6 6 0 0 1 18 12H50A6 6 0 0 1 56 18V22H12Z" fill={PAL.red} />
      <rect x="20" y="7" width="5" height="10" rx="2.5" fill={PAL.slate} />
      <rect x="43" y="7" width="5" height="10" rx="2.5" fill={PAL.slate} />
      <rect x="17" y="27" width="9" height="6" rx="1.5" fill={PAL.mist} />
      <rect x="30" y="27" width="9" height="6" rx="1.5" fill={PAL.mist} />
      <rect x="17" y="37" width="9" height="6" rx="1.5" fill={PAL.mist} />
      <rect x="30" y="37" width="9" height="6" rx="1.5" fill={PAL.mist} />
      <circle cx="47.5" cy="35" r="6.5" fill={PAL.red} />
      <Ground cx={62} cy={104} rx={48} ry={4} />
      <Move kind="from" dx={-40} once>
        {/* The cargo box, open at the back (left) */}
        <Shade color={PAL.paperShade} opacity={1} at={[84, 70, 8, 30]}>
          <rect x="14" y="50" width="70" height="44" rx="4" fill={PAL.paper} />
        </Shade>
        <rect x="18" y="54" width="44" height="37" rx="2" fill={PAL.slate} />
        {carton(20, 72, 20, 19)}
        {carton(41, 74, 19, 17)}
        {carton(24, 57, 17, 15)}
        {carton(42, 60, 16, 14)}
        <rect x="62" y="56" width="4" height="34" rx="2" fill={PAL.paperShade} />
        {/* The cab */}
        <path d="M84 62H96Q102 62 104 70L108 80V94H84Z" fill={PAL.sky} />
        <path d="M100 66L106 80H96V66Z" fill={PAL.ice} />
        <path d="M84 88H108V94H84Z" fill={PAL.skyShade} />
        <Shine d="M70 54H80" width={3} opacity={0.8} />
        {/* The wheels */}
        <circle cx="34" cy="96" r="8" fill={PAL.slateDark} />
        <circle cx="34" cy="96" r="3.4" fill={PAL.steel} />
        <circle cx="92" cy="96" r="8" fill={PAL.slateDark} />
        <circle cx="92" cy="96" r="3.4" fill={PAL.steel} />
      </Move>
    </g>
  ),
} as Record<string, () => JSX.Element>;
