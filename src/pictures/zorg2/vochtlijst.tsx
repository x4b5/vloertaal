import type { JSX } from 'react';
import { Ground, PAL, Shine } from '../kit';

export default {
  // "de vochtlijst": the fluid chart — a clipboard with a chart: each row starts with a cup, and blue blocks
  // show how many cups the client drank (some rows full, the last one almost empty); a glass of water beside it.
  'w.vochtlijst': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      <Ground cx={96} cy={106} rx={14} ry={3} />
      {/* The clipboard */}
      <rect x="10" y="14" width="70" height="94" rx="6" fill={PAL.cardDark} transform="translate(2.5 2.5)" />
      <rect x="10" y="14" width="70" height="94" rx="6" fill={PAL.card} />
      <rect x="15" y="22" width="60" height="80" rx="2" fill={PAL.white} />
      <rect x="34" y="9" width="22" height="10" rx="3" fill={PAL.steel} />
      {/* Rows: a cup, then blue blocks for the cups drunk */}
      {[4, 3, 4, 1].map((n, r) => {
        const y = 30 + r * 18;
        return (
          <g key={r}>
            <path d={`M20 ${y}H30L28.6 ${y + 11}H21.4Z`} fill={PAL.ice} />
            <path d={`M20 ${y}H30`} stroke={PAL.sky} strokeWidth="1.6" />
            {[0, 1, 2, 3].map((c) => (
              <rect key={c} x={35 + c * 10} y={y} width="8" height="11" rx="1.6" fill={c < n ? PAL.sky : PAL.paperShade} />
            ))}
          </g>
        );
      })}
      {/* A glass of water */}
      <path d="M84 62H108L105 104H87Z" fill={PAL.paperShade} />
      <path d="M85.6 74H106.4L105 104H87Z" fill={PAL.ice} />
      <path d="M85.6 74H106.4" stroke={PAL.sky} strokeWidth="2" />
      <Shine d="M89 66L90 98" width={2.4} opacity={0.9} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
