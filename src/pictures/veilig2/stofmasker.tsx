import type { JSX } from 'react';
import { PAL, Shade, Shine } from '../kit';
import { Bust } from '../bust';

export default {
  // "het stofmasker": the dust mask — Bram, big, with a white cup mask over his nose and mouth: a round
  // cup with a darker right side, a small blue valve, a metal nose clip and two elastic bands to the back
  // of his head.
  'w.stofmasker': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      <Bust who="bram" x={60} y={128} scale={1.02} expr="neutral" />
      {/* The two elastic bands, round to the back of the head */}
      <path d="M38 50L30 40M38 66L30 72" stroke={PAL.sky} strokeWidth="2.6" />
      <path d="M82 50L90 40M82 66L90 72" stroke={PAL.skyShade} strokeWidth="2.6" />
      {/* The cup */}
      <Shade color={PAL.paperShade} opacity={1} at={[86, 66, 14, 26]}>
        <path d="M60 41Q83 41 83 60Q83 80 60 84Q37 80 37 60Q37 41 60 41Z" fill={PAL.paper} />
      </Shade>
      <path d="M44 64Q60 72 76 64" fill="none" stroke={PAL.paperShade} strokeWidth="1.6" />
      {/* The nose clip and the valve */}
      <path d="M53 45Q60 42 67 45" fill="none" stroke={PAL.steel} strokeWidth="2.6" />
      <circle cx="62" cy="72" r="5.5" fill={PAL.blue} />
      <circle cx="62" cy="72" r="2.4" fill={PAL.blueShade} />
      <Shine d="M44 52Q46 46 52 44" width={3} opacity={0.9} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
