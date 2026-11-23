import type { JSX } from 'react';
import { PAL, Shade, Shine, Tick } from '../kit';
import { Bust } from '../bust';

export default {
  // "de personeelsaankoop": the staff purchase (what you buy in your own shop) — Jada in her work shirt
  // with the shop's name badge on her chest (a blue staff badge with lines), next to her own orange
  // shopping bag with a long receipt and a green tick (paid). The badge says: she works here, and she
  // buys here. A person and her bag: it stays still.
  'w.personeelsaankoop': () => (
    <g strokeLinejoin="round">
      <Bust who="jada" x={42} y={118} scale={0.8} expr="pleased" />
      {/* The staff badge on her chest */}
      <rect x="44" y="94" width="18" height="12" rx="2" fill={PAL.blueShade} />
      <rect x="44" y="92" width="18" height="12" rx="2" fill={PAL.blue} />
      <circle cx="49" cy="98" r="2.6" fill={PAL.white} />
      <path d="M54 96.5H59M54 100H58" stroke={PAL.white} strokeWidth="1.6" strokeLinecap="round" />
      {/* The bag with the receipt */}
      <path d="M78 66V58Q78 50 88 50Q98 50 98 58V66" fill="none" stroke={PAL.orangeShade} strokeWidth="4" strokeLinecap="round" />
      <rect x="92" y="46" width="12" height="28" rx="1.4" fill={PAL.white} transform="rotate(8 98 60)" />
      <path d="M95 52H101M95 57H101M95 62H99" stroke={PAL.line} strokeWidth="1.6" strokeLinecap="round" transform="rotate(8 98 60)" />
      <Shade color={PAL.orangeShade} opacity={1} at={[110, 90, 8, 24]}>
        <path d="M70 64H106L108 106H68Z" fill={PAL.orange} />
      </Shade>
      <Shine d="M75 70L74 96" width={3} opacity={0.5} />
      <Tick x={100} y={36} r={11} color={PAL.ok} shade={PAL.okShade} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
