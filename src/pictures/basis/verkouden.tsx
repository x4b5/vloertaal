import type { JSX } from 'react';
import { Hand, PAL, SKIN } from '../kit';
import { Bust } from '../bust';

export default {
  // "verkouden": having a cold — Jada, tired, holds a white tissue to her nose; next to her a box of
  // tissues with one sticking out.
  'w.verkouden': () => (
    <g strokeLinejoin="round">
      <Bust who="jada" x={52} y={126} scale={0.8} emotion="sick" bold />
      {/* The hand with the tissue at her nose */}
      <Hand pose="hold" x={72} y={92} rotate={-26} scale={0.44} skin={SKIN.jada} />
      <path d="M50 64Q49 57 56 55Q63 52 70 55Q77 57 76 64Q75 71 63 72Q51 72 50 64Z" fill={PAL.paperShade} transform="translate(1 3)" />
      <path d="M50 64Q49 57 56 55Q63 52 70 55Q77 57 76 64Q75 71 63 72Q51 72 50 64Z" fill={PAL.white} />
      <path d="M57 59Q63 62 69 59" fill="none" stroke={PAL.mist} strokeWidth="1.8" strokeLinecap="round" />
      {/* The box of tissues */}
      <path d="M86 86L94 81H112L104 86Z" fill={PAL.ice} />
      <path d="M104 86L112 81V102L104 107Z" fill={PAL.skyShade} />
      <rect x="84" y="86" width="20" height="21" rx="2" fill={PAL.sky} />
      <path d="M92 86Q90 74 96 70Q100 76 102 84Z" fill={PAL.white} />
      <path d="M96 70Q100 76 102 84H98Z" fill={PAL.paperShade} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
