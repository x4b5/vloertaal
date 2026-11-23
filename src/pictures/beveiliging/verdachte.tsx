import type { JSX } from 'react';
import { Arrow, Ground, PAL, SKIN, Shade, Shine } from '../kit';

export default {
  // "de verdachte": the suspect — a plain person (no face: a small figure, as the walkers elsewhere) in a
  // dark grey hoodie with the hood up, hands in the front pocket, with a black backpack on; a big red
  // arrow from the top right points at him: that is the one they are looking for.
  'w.verdachte': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      <Ground cx={50} cy={105} rx={26} ry={4} />
      {/* The legs */}
      <path d="M44 78L42 101M56 78L58 101" stroke={PAL.navy} strokeWidth="10" />
      <ellipse cx="40" cy="103" rx="7" ry="3.4" fill={PAL.slateDark} />
      <ellipse cx="61" cy="103" rx="7" ry="3.4" fill={PAL.slateDark} />
      {/* The backpack behind him */}
      <rect x="27" y="42" width="12" height="30" rx="5" fill={PAL.slateDark} />
      {/* The hoodie, the front pocket */}
      <Shade color={PAL.slateDark} opacity={0.8} at={[68, 62, 8, 30]}>
        <rect x="34" y="38" width="32" height="44" rx="11" fill={PAL.slate} />
      </Shade>
      <path d="M40 66H60L58 76H42Z" fill={PAL.slateDark} opacity=".6" />
      <path d="M44 42L46 52M56 42L54 52" stroke={PAL.mist} strokeWidth="1.6" />
      {/* The hood with the face in its shadow */}
      <path d="M36 30Q36 12 50 12Q64 12 64 30Q64 42 50 42Q36 42 36 30Z" fill={PAL.slate} />
      <ellipse cx="51" cy="29" rx="9.5" ry="10.5" fill={SKIN.henk[0]} />
      <ellipse cx="55" cy="31" rx="6" ry="8" fill={SKIN.henk[1]} opacity=".55" />
      <path d="M41 24Q44 17 51 17Q58 17 61 24" fill="none" stroke={PAL.slateDark} strokeWidth="4" />
      <Shine d="M40 24Q41 18 45 16" width={2.4} opacity={0.35} />
      {/* The arrow at him */}
      <Arrow from={[108, 20]} to={[74, 44]} color={PAL.red} width={9} head={16} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
