import type { JSX } from 'react';
import { PAL, Shade, Shine } from '../kit';

export default {
  // "de sleutelkluis": the key safe — a small dark-grey metal box on the wall: a keypad of light buttons on
  // top; below it the little door stands open and the yellow house key hangs inside on its hook.
  'w.sleutelkluis': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      {/* A piece of wall (light bricks) behind it */}
      <rect x="14" y="10" width="92" height="100" rx="6" fill={PAL.paperShade} />
      <path d="M14 34H106M14 58H106M14 82H106M40 10V34M80 10V34M28 34V58M94 34V58M40 58V82M80 58V82M28 82V106M94 82V106" stroke={PAL.mist} strokeWidth="2" />
      {/* The box */}
      <rect x="32" y="18" width="58" height="86" rx="7" fill={PAL.slateDark} transform="translate(2.5 2.5)" />
      <Shade color={PAL.slateDark} opacity={1} at={[96, 60, 10, 50]}>
        <rect x="32" y="18" width="58" height="86" rx="7" fill={PAL.slate} />
      </Shade>
      {/* The keypad */}
      {[0, 1, 2].map((r) => [0, 1, 2].map((c) => (
        <rect key={`${r}${c}`} x={42 + c * 13} y={25 + r * 11} width="10" height="8" rx="2" fill={PAL.mist} />
      )))}
      {/* The open compartment with the key */}
      <rect x="40" y="62" width="42" height="36" rx="3" fill={PAL.slateDark} />
      <path d="M61 66V70" stroke={PAL.steel} strokeWidth="3" />
      <circle cx="61" cy="77" r="7" fill={PAL.yellow} />
      <circle cx="61" cy="77" r="2.6" fill={PAL.slateDark} />
      <path d="M61 83V95M61 90H66M61 94H65" stroke={PAL.yellow} strokeWidth="4" />
      {/* The little door, swung open to the right */}
      <path d="M82 62L98 56V100L82 98Z" fill={PAL.steel} />
      <Shine d="M38 24V54" width={2.6} opacity={0.4} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
