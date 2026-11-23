import type { JSX } from 'react';
import { PAL, Shade, Shine } from '../kit';

export default {
  // "het alarmlabel": the security tag (it makes the gate beep) — a blue T-shirt on a hanger, with a big
  // round grey hard tag clipped onto its hem; small signal arcs beside the tag show that it sends a signal.
  'w.alarmlabel': () => (
    <g strokeLinejoin="round">
      {/* The hanger */}
      <path d="M60 22V16Q60 10 66 10" fill="none" stroke={PAL.steel} strokeWidth="3.4" strokeLinecap="round" />
      {/* The T-shirt */}
      <Shade color={PAL.blueShade} opacity={1} at={[100, 70, 22, 60]}>
        <path d="M40 22L48 20Q60 30 72 20L80 22L104 36L96 54L84 48V100Q60 104 36 100V48L24 54L16 36Z" fill={PAL.blue} />
      </Shade>
      <path d="M48 20Q60 30 72 20" fill="none" stroke={PAL.blueShade} strokeWidth="3" strokeLinecap="round" />
      <Shine d="M24 38L36 31" width={3} opacity={0.45} />
      {/* The round hard tag on the hem */}
      <circle cx="54" cy="88" r="17" fill={PAL.steel} transform="translate(0 3)" />
      <Shade color={PAL.steel} opacity={0.7} at={[72, 92, 8, 20]}>
        <circle cx="54" cy="88" r="17" fill={PAL.mist} />
      </Shade>
      <circle cx="54" cy="88" r="6" fill={PAL.steel} />
      <Shine d="M42 84Q44 76 50 74" width={2.6} opacity={0.8} />
      {/* Its signal */}
      <path d="M76 80Q80 88 76 96M83 75Q90 88 83 101" fill="none" stroke={PAL.red} strokeWidth="3.4" strokeLinecap="round" />
    </g>
  ),
} as Record<string, () => JSX.Element>;
