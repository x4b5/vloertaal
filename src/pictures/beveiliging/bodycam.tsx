import type { JSX } from 'react';
import { PAL, Shade, Shine } from '../kit';
import { Bust } from '../bust';

export default {
  // "de bodycam": the body camera (a small camera on your uniform) — Henk, the guard in his navy uniform;
  // on his chest a small black upright camera is clipped, its round lens to the front and a red light on.
  'w.bodycam': () => (
    <g strokeLinejoin="round">
      <Bust who="henk" x={56} y={126} scale={0.86} expr="neutral" bold />
      {/* The clip */}
      <rect x="72" y="82" width="10" height="10" rx="2" fill={PAL.slateDark} />
      {/* The camera on the chest */}
      <rect x="64" y="88" width="28" height="32" rx="6" fill={PAL.ink} transform="translate(2 2)" />
      <Shade color={PAL.slateDark} opacity={1} at={[94, 104, 7, 22]}>
        <rect x="64" y="88" width="28" height="32" rx="6" fill={PAL.slate} />
      </Shade>
      <circle cx="78" cy="101" r="9.5" fill={PAL.slateDark} />
      <circle cx="78" cy="101" r="6" fill={PAL.sky} />
      <circle cx="76" cy="99" r="2" fill={PAL.white} />
      <circle cx="71" cy="114" r="2.8" fill={PAL.red} />
      <rect x="77" y="112" width="10" height="4" rx="2" fill={PAL.steel} />
      <Shine d="M67 92V98" width={2.2} opacity={0.5} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
