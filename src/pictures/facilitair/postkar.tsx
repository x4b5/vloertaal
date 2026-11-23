import type { JSX } from 'react';
import { Box, Ground, PAL, Shine } from '../kit';

/** An envelope standing up in the tray, seen from its long side. */
const env = (x: number, y: number, rot: number, fill: string, key: string) => (
  <g key={key} transform={`rotate(${rot} ${x + 11} ${y + 22})`}>
    <rect x={x} y={y} width="22" height="22" rx="1.5" fill={fill} />
    <path d={`M${x + 1} ${y + 1}L${x + 11} ${y + 9}L${x + 21} ${y + 1}`} fill="none" stroke={PAL.paperShade} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </g>
);

export default {
  // "de postkar": the post trolley — a blue trolley on four wheels with a push handle on the right: a
  // deep tray on top full of envelopes standing up, a parcel on the bottom shelf.
  'w.postkar': () => (
    <g strokeLinejoin="round">
      <Ground cx={58} cy={105} rx={50} ry={4} />
      {/* The push handle */}
      <path d="M94 88V30Q94 24 100 24H106" fill="none" stroke={PAL.slate} strokeWidth="5" strokeLinecap="round" />
      {/* The frame posts */}
      <path d="M16 56V96M90 56V96" stroke={PAL.steel} strokeWidth="4.5" strokeLinecap="round" />
      {/* The parcel on the bottom shelf */}
      <Box x={26} y={72} w={36} h={18} depth={10} />
      <rect x="12" y="88" width="82" height="7" rx="2.5" fill={PAL.blueShade} />
      {/* The envelopes in the tray */}
      {env(20, 26, -8, PAL.white, 'a')}
      {env(36, 24, -2, PAL.yellowShine, 'b')}
      {env(52, 26, 5, PAL.white, 'c')}
      {env(66, 24, 10, PAL.redLight, 'd')}
      {/* The tray */}
      <rect x="12" y="40" width="82" height="22" rx="3" fill={PAL.blue} />
      <rect x="76" y="40" width="18" height="22" rx="3" fill={PAL.blueShade} />
      <Shine d="M17 45H40" width={3} opacity={0.6} />
      {/* The wheels */}
      {[18, 88].map((x) => (
        <g key={x}>
          <rect x={x - 2} y="94" width="4" height="5" fill={PAL.slate} />
          <circle cx={x} cy="101" r="5" fill={PAL.slateDark} />
          <circle cx={x} cy="101" r="1.8" fill={PAL.steel} />
        </g>
      ))}
    </g>
  ),
} as Record<string, () => JSX.Element>;
