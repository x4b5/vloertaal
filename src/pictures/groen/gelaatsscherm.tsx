import type { JSX } from 'react';
import { Move, PAL, Shade, Shine } from '../kit';

export default {
  // "het gelaatsscherm": the face shield — a forestry helmet from the front: an orange hard hat with
  // yellow ear muffs on the sides and a dark-framed steel mesh visor down over where the face is.
  // On the intro card the visor comes down from under the brim (once: it is put down once).
  'w.gelaatsscherm': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      {/* The visor: a dark frame round the steel mesh (drawn under the helmet, so it comes out from under the brim) */}
      <Move kind="from" dy={-30} once>
        <rect x="27" y="50" width="66" height="54" rx="8" fill={PAL.slate} />
        <rect x="32" y="56" width="56" height="43" rx="5" fill={PAL.mist} />
        <path d="M32 63H88M32 70H88M32 77H88M32 84H88M32 91H88M39 56V99M46 56V99M53 56V99M60 56V99M67 56V99M74 56V99M81 56V99" stroke={PAL.steel} strokeWidth="2" />
        <rect x="74" y="56" width="14" height="43" rx="4" fill={PAL.slateDark} opacity=".28" />
        <path d="M37 60V78" stroke={PAL.white} strokeWidth="3" opacity=".6" />
      </Move>
      {/* The ear muffs on their arms */}
      <path d="M24 46L20 62M96 46L100 62" stroke={PAL.slate} strokeWidth="4" />
      <ellipse cx="18" cy="70" rx="8" ry="13" fill={PAL.yellow} />
      <ellipse cx="102" cy="70" rx="8" ry="13" fill={PAL.yellowShade} />
      <ellipse cx="20" cy="70" rx="3.6" ry="7" fill={PAL.yellowShade} />
      {/* The hard hat: dome and brim */}
      <Shade color={PAL.orangeShade} opacity={1} at={[100, 36, 18, 30]}>
        <path d="M24 50Q24 14 60 14Q96 14 96 50Z" fill={PAL.orange} />
      </Shade>
      <path d="M60 15V48" stroke={PAL.orangeShade} strokeWidth="4" />
      <rect x="16" y="46" width="88" height="8" rx="4" fill={PAL.orangeShade} />
      <Shine d="M33 38Q36 24 48 20" width={3.6} opacity={0.6} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
