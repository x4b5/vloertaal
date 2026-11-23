import type { JSX } from 'react';
import { PAL, Shade, Shine } from '../kit';
import { Bust } from '../bust';

export default {
  // "de vaste kracht": the permanent worker (a worker employed by the hirer itself) — Jada in front of the
  // hirer's own factory (green, her company), with a green badge with the infinity sign: she stays,
  // her job has no end date.
  'w.vastekracht': () => (
    <g strokeLinejoin="round">
      {/* The hirer's factory behind her */}
      <rect x="92" y="18" width="8" height="22" rx="1.6" fill={PAL.slate} />
      <Shade color={PAL.greenShade} opacity={1} at={[112, 70, 10, 50]}>
        <path d="M40 104V46L58 34V46L76 34V46L106 34V104Z" fill={PAL.green} stroke={PAL.green} strokeWidth="2" />
      </Shade>
      <rect x="84" y="56" width="14" height="10" rx="1.6" fill={PAL.ice} />
      <rect x="84" y="74" width="14" height="10" rx="1.6" fill={PAL.ice} />
      <Bust who="jada" x={56} y={120} scale={0.7} expr="pleased" bold />
      {/* The badge with the infinity sign */}
      <circle cx="26" cy="32" r="17" fill={PAL.okShade} transform="translate(0 2.6)" />
      <circle cx="26" cy="32" r="17" fill={PAL.ok} />
      <path d="M16 32C16 26 21.6 26 26 32C30.4 38 36 38 36 32C36 26 30.4 26 26 32C21.6 38 16 38 16 32Z" fill="none" stroke={PAL.white} strokeWidth="3.6" />
      <Shine d="M13 26A13 13 0 0 1 20 18" width={2.6} opacity={0.4} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
