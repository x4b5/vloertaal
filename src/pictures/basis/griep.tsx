import type { JSX } from 'react';
import { Motion, PAL, Shade, Shine } from '../kit';
import { Bust } from '../bust';

export default {
  // "de griep": the flu — Bram, tired and pale, sits wrapped in a thick purple blanket and shivers (blue
  // shiver lines on both sides); a mug of hot tea steams in front of him.
  'w.griep': () => (
    <g strokeLinejoin="round">
      <Bust who="bram" x={56} y={128} scale={0.78} emotion="sick" bold />
      {/* The blanket round his shoulders, closed at the front */}
      <Shade color={PAL.purpleShade} opacity={1} at={[96, 104, 18, 30]}>
        <path d="M14 112Q16 86 34 80Q44 90 56 90Q68 90 78 80Q96 86 98 112Z" fill={PAL.purple} />
      </Shade>
      <path d="M34 80Q42 96 56 104M78 80Q70 96 56 104" fill="none" stroke={PAL.purpleShade} strokeWidth="3.4" strokeLinecap="round" />
      <path d="M22 98H40M74 98H92" stroke={PAL.purpleLight} strokeWidth="3" strokeLinecap="round" opacity=".8" />
      {/* Shivering */}
      <Motion x={20} y={56} dir={180} spread={60} n={3} len={7} gap={6} color={PAL.sky} width={3.2} />
      <Motion x={92} y={56} dir={0} spread={60} n={3} len={7} gap={6} color={PAL.sky} width={3.2} />
      {/* The mug of tea with its steam */}
      <path d="M94 76Q90 70 94 64M102 76Q98 70 102 64" fill="none" stroke={PAL.mist} strokeWidth="2.6" strokeLinecap="round" />
      <path d="M106 86Q114 86 114 92Q114 98 106 98" fill="none" stroke={PAL.redShade} strokeWidth="3.6" />
      <Shade color={PAL.redShade} opacity={1} at={[108, 94, 5, 16]}>
        <rect x="88" y="80" width="20" height="26" rx="4" fill={PAL.red} />
      </Shade>
      <ellipse cx="98" cy="81" rx="9" ry="2.4" fill={PAL.brown} />
      <Shine d="M91 86V98" width={2.6} opacity={0.6} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
