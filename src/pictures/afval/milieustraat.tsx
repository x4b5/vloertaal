import type { JSX } from 'react';
import { Ground, PAL, Shade, Shine } from '../kit';

/** An open skip container seen from the front: wider at the top, its inside showing as a dark band. */
const skip = (x: number, y: number, w: number, h: number, base: string, shade: string, inside: JSX.Element) => (
  <g>
    {inside}
    <Shade color={shade} opacity={1} at={[x + w + 2, y + h / 2, w * 0.2, h]}>
      <path d={`M${x} ${y}H${x + w}L${x + w - 8} ${y + h}H${x + 8}Z`} fill={base} />
    </Shade>
    <rect x={x - 2} y={y - 2} width={w + 4} height="6" rx="2" fill={shade} />
    <path d={`M${x + w * 0.33} ${y + 8}V${y + h - 6}M${x + w * 0.66} ${y + 8}V${y + h - 6}`} stroke={shade} strokeWidth="2" strokeLinecap="round" />
  </g>
);

export default {
  // "de milieustraat": the recycling yard — two big open skips side by side on the concrete, a green one with
  // wood planks and branches sticking out and a blue one with a broken chair and bricks; above them a sign on
  // a post with the round three-arrow recycling symbol (no text).
  'w.milieustraat': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      <Ground cx={60} cy={104} rx={54} ry={4} />
      <rect x="6" y="98" width="108" height="6" rx="2" fill={PAL.mist} />
      {/* The sign on its post */}
      <rect x="58" y="34" width="4" height="30" fill={PAL.steel} />
      <circle cx="60" cy="26" r="15" fill={PAL.okShade} transform="translate(0 2)" />
      <circle cx="60" cy="26" r="15" fill={PAL.ok} />
      <path d="M52 30A9 9 0 0 1 57 18" fill="none" stroke={PAL.white} strokeWidth="3" />
      <path d="M63 18A9 9 0 0 1 68 28" fill="none" stroke={PAL.white} strokeWidth="3" />
      <path d="M65 34A9 9 0 0 1 54 34" fill="none" stroke={PAL.white} strokeWidth="3" />
      <path d="M55 15L59 18L55 21ZM70 26L68 30L66 26ZM52 31L55 35L51 36Z" fill={PAL.white} stroke={PAL.white} strokeWidth="2" />
      {skip(8, 60, 50, 38, PAL.green, PAL.greenShade, (
        <g>
          <path d="M16 62L28 40M24 62L44 44" stroke={PAL.card} strokeWidth="6" />
          <path d="M40 62L52 34M52 34L58 30M50 40L44 32" stroke={PAL.cardDark} strokeWidth="3" />
          <circle cx="56" cy="30" r="4" fill={PAL.leaf} />
          <circle cx="44" cy="31" r="3.4" fill={PAL.leaf} />
        </g>
      ))}
      {skip(62, 60, 50, 38, PAL.blue, PAL.blueShade, (
        <g>
          <rect x="70" y="52" width="10" height="10" rx="1.6" fill={PAL.clay} />
          <rect x="80" y="54" width="10" height="8" rx="1.6" fill={PAL.clayShade} />
          <path d="M94 62V40H104V62M94 50H104" fill="none" stroke={PAL.wood} strokeWidth="3.4" />
        </g>
      ))}
      <Shine d="M14 66H30" width={3} opacity={0.6} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
