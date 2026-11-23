import type { JSX } from 'react';
import { Bust } from '../bust';
import { Cross, PAL, Shade } from '../kit';

export default {
  // "teleurgesteld": disappointed — Amina with a sad face and her head a little down, a letter in
  // front of her with a small red cross: she did not get the job. Calm, not dark.
  'w.teleurgesteld': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      <Bust who="amina" x={52} y={124} scale={0.82} emotion="sad" tilt={-6} bold />
      {/* The letter with the cross */}
      <g transform="rotate(8 92 90)">
        <rect x="76" y="70" width="32" height="40" rx="3" fill={PAL.mist} transform="translate(0 3)" />
        <Shade color={PAL.paperShade} opacity={1} at={[110, 90, 6, 24]}>
          <rect x="76" y="70" width="32" height="40" rx="3" fill={PAL.paper} />
        </Shade>
        <path d="M81 98H103M81 104H97" stroke={PAL.line} strokeWidth="2.2" />
      </g>
      <Cross x={90} y={82} r={11} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
