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
      <path d="M40 60L36 46M40 76L34 82" stroke={PAL.sky} strokeWidth="2.8" />
      <path d="M80 60L84 46M80 76L86 82" stroke={PAL.skyShade} strokeWidth="2.8" />
      {/* The cup */}
      <Shade color={PAL.paperShade} opacity={1} at={[84, 72, 12, 24]}>
        <path d="M60 52Q81 52 81 69Q81 87 60 90Q39 87 39 69Q39 52 60 52Z" fill={PAL.paper} />
      </Shade>
      <path d="M45 74Q60 81 75 74" fill="none" stroke={PAL.paperShade} strokeWidth="1.6" />
      {/* The nose clip and the valve */}
      <path d="M53 56Q60 53 67 56" fill="none" stroke={PAL.steel} strokeWidth="2.6" />
      <circle cx="62" cy="80" r="5.5" fill={PAL.blue} />
      <circle cx="62" cy="80" r="2.4" fill={PAL.blueShade} />
      <Shine d="M44 64Q46 58 51 56" width={3} opacity={0.9} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
