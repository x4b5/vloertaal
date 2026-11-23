import type { JSX } from 'react';
import { PAL, Shade, Shine } from '../kit';

/** A small snowflake: three crossing bars. */
const flake = (x: number, y: number, r: number) =>
  [0, 60, 120].map((a) => {
    const t = (a * Math.PI) / 180;
    return `M${(x - Math.cos(t) * r).toFixed(1)} ${(y - Math.sin(t) * r).toFixed(1)}L${(x + Math.cos(t) * r).toFixed(1)} ${(y + Math.sin(t) * r).toFixed(1)}`;
  }).join('');

export default {
  // "de thermokleding": the thermal clothes (warm clothes for the cold) — a thick padded freezer jacket
  // in work blue with puffy quilted bands, a high collar, dark knitted cuffs and a zip, and a pair of
  // thick gloves in front; a sky-blue snowflake beside it says: for the cold.
  'w.thermokleding': () => (
    <g strokeLinejoin="round">
      {/* The padded jacket, its right side in shade */}
      <Shade color={PAL.blueShade} opacity={1} at={[104, 70, 18, 50]}>
        <path d="M48 24L34 30Q24 34 22 46L14 88Q14 94 20 94H30L33 62V100Q33 106 39 106H81Q87 106 87 100V62L90 94H100Q106 94 106 88L98 46Q96 34 86 30L72 24Z" fill={PAL.blue} />
      </Shade>
      {/* The puffy quilting */}
      <path d="M34 46Q60 52 86 46M33 64Q60 70 87 64M33 82Q60 88 87 82M24 60Q28 61 31 60M89 60Q92 61 96 60M18 78Q24 79 30 78M90 78Q96 79 102 78" fill="none" stroke={PAL.blueShade} strokeWidth="2.2" strokeLinecap="round" />
      {/* Knitted cuffs and the high collar */}
      <rect x="15" y="88" width="16" height="8" rx="3" fill={PAL.slate} />
      <rect x="89" y="88" width="16" height="8" rx="3" fill={PAL.slate} />
      <path d="M46 14H74Q78 14 78 18V30L60 36L42 30V18Q42 14 46 14Z" fill={PAL.blueShade} />
      <path d="M46 18H74V28L60 33L46 28Z" fill={PAL.slate} />
      {/* The zip */}
      <path d="M60 34V104" stroke={PAL.slateDark} strokeWidth="2.6" strokeLinecap="round" />
      <rect x="57.5" y="38" width="5" height="8" rx="1.5" fill={PAL.mist} />
      <Shine d="M30 40Q34 34 42 31" width={3.5} opacity={0.6} />
      {/* The snowflake: for the cold */}
      <path d={flake(104, 18, 9)} stroke={PAL.sky} strokeWidth="3" strokeLinecap="round" />
      <circle cx="104" cy="18" r="2.6" fill={PAL.sky} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
