import type { JSX } from 'react';
import { Ground, PAL, Shade, Shine } from '../kit';

/** A pencil standing up as a fence post: body at (x, top) of width 9, coloured tip up. */
const pencil = (x: number, top: number, color: string, shade: string) => (
  <g key={x}>
    <path d={`M${x} ${top + 10}L${x + 4.5} ${top}L${x + 9} ${top + 10}Z`} fill={PAL.cardShade} />
    <path d={`M${x + 2.6} ${top + 4.4}L${x + 4.5} ${top}L${x + 6.4} ${top + 4.4}Z`} fill={color} />
    <rect x={x} y={top + 10} width="9" height={104 - top - 10} rx="1" fill={color} />
    <rect x={x + 6} y={top + 10} width="3" height={104 - top - 10} fill={shade} />
  </g>
);

export default {
  // "de basisschool": the primary school — a low, friendly school building with a flat roof, big
  // windows with children's drawings (a sun, a flower) and a fence of coloured pencils in front.
  // Not the tall brick "school" with its clock.
  'w.basisschool': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      <Ground cx={60} cy={105} rx={52} ry={4} />
      {/* The building */}
      <Shade color={PAL.yellowShade} opacity={1} at={[112, 60, 20, 50]}>
        <rect x="12" y="34" width="96" height="62" rx="2" fill={PAL.yellow} />
      </Shade>
      <rect x="8" y="26" width="104" height="10" rx="3" fill={PAL.sky} />
      <rect x="8" y="33" width="104" height="3" fill={PAL.skyShade} />
      {/* The windows with drawings */}
      <rect x="18" y="44" width="24" height="20" rx="2" fill="#e3f5ff" />
      <circle cx="30" cy="54" r="5" fill={PAL.orange} />
      <rect x="78" y="44" width="24" height="20" rx="2" fill="#e3f5ff" />
      <path d="M90 64V55" stroke={PAL.green} strokeWidth="2.4" />
      <circle cx="90" cy="52" r="4.4" fill={PAL.purpleLight} />
      <circle cx="90" cy="52" r="1.8" fill={PAL.yellow} />
      {/* The door, with a small canopy */}
      <rect x="49" y="58" width="22" height="38" rx="2" fill={PAL.red} />
      <rect x="62" y="58" width="9" height="38" fill={PAL.redShade} />
      <rect x="45" y="52" width="30" height="7" rx="2" fill={PAL.sky} />
      <Shine d="M16 40H40" width={2.6} opacity={0.6} />
      {/* The pencil fence */}
      <rect x="10" y="88" width="100" height="5" rx="2" fill={PAL.cardDark} />
      {pencil(12, 74, PAL.red, PAL.redShade)}
      {pencil(26, 72, PAL.blue, PAL.blueShade)}
      {pencil(40, 74, PAL.green, PAL.greenShade)}
      {pencil(71, 74, PAL.purple, PAL.purpleShade)}
      {pencil(85, 72, PAL.orange, PAL.orangeShade)}
      {pencil(99, 74, PAL.blue, PAL.blueShade)}
    </g>
  ),
} as Record<string, () => JSX.Element>;
