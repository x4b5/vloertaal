import type { JSX } from 'react';
import { Ground, PAL, Shade, Shine } from '../kit';

/** A plain label: a white patch with two grey lines. */
const label = (x: number, y: number, w = 16) => (
  <g>
    <rect x={x} y={y} width={w} height="11" rx="1.6" fill={PAL.white} />
    <path d={`M${x + 3} ${y + 4}H${x + w - 3}M${x + 3} ${y + 7.6}H${x + w - 6}`} stroke={PAL.line} strokeWidth="1.4" />
  </g>
);

export default {
  // "de grondstof": the raw material (what you make the product from) — on a wooden pallet: a tall
  // white woven sack of powder with its lifting loops, a brown paper sack, an open sack heaped with blue
  // pellets, and a blue drum; each with a plain label (lines, no text).
  'w.grondstof': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      <Ground cx={60} cy={106} rx={54} ry={4} />
      {/* The pallet */}
      <rect x="8" y="94" width="104" height="5" rx="1" fill={PAL.card} />
      <rect x="8" y="99" width="104" height="6" fill={PAL.cardDark} />
      <rect x="12" y="99" width="12" height="6" fill={PAL.card} />
      <rect x="54" y="99" width="12" height="6" fill={PAL.card} />
      <rect x="96" y="99" width="12" height="6" fill={PAL.card} />
      {/* The drum at the back right */}
      <Shade color={PAL.blueShade} opacity={1} at={[110, 70, 7, 30]}>
        <rect x="80" y="44" width="28" height="50" rx="3" fill={PAL.blue} />
      </Shade>
      <ellipse cx="94" cy="44" rx="14" ry="4" fill={PAL.blueLight} />
      <path d="M80 60H108M80 78H108" stroke={PAL.blueShade} strokeWidth="2.2" />
      {label(86, 64)}
      {/* The tall woven sack with its loops */}
      <path d="M16 30Q16 22 22 24M42 30Q42 22 36 24" fill="none" stroke={PAL.steel} strokeWidth="3" />
      <Shade color={PAL.paperShade} opacity={1} at={[52, 66, 10, 36]}>
        <path d="M12 32Q12 28 18 28H40Q46 28 46 32L48 90Q48 94 44 94H14Q10 94 10 90Z" fill={PAL.white} />
      </Shade>
      <path d="M14 42H44M14 62H45M14 80H46" stroke={PAL.paperShade} strokeWidth="1.6" />
      {label(18, 48)}
      {/* The brown paper sack */}
      <Shade color={PAL.cardShade} opacity={1} at={[76, 80, 8, 20]}>
        <path d="M46 62Q46 58 50 58H70Q74 58 74 62L76 92Q76 94 72 94H48Q44 94 44 92Z" fill={PAL.card} />
      </Shade>
      <path d="M48 58L52 54H68L72 58Z" fill={PAL.cardShade} />
      {label(52, 72)}
      {/* The open sack of pellets, in front */}
      <path d="M58 94L60 82H84L86 94Z" fill={PAL.paperShade} />
      <g fill={PAL.sky}>
        <circle cx="64" cy="81" r="2.4" /><circle cx="70" cy="79" r="2.4" /><circle cx="76" cy="79.6" r="2.4" />
        <circle cx="81" cy="81" r="2.4" /><circle cx="67" cy="76" r="2.4" /><circle cx="73" cy="75" r="2.4" />
      </g>
      <g fill={PAL.skyShade}>
        <circle cx="79" cy="77" r="2.4" /><circle cx="70" cy="83" r="2.2" /><circle cx="77" cy="84" r="2.2" />
      </g>
      <path d="M60 84H84" stroke={PAL.mist} strokeWidth="1.6" />
      <Shine d="M15 36V54" width={3} opacity={0.8} color={PAL.paper} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
