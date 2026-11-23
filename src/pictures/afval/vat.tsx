import type { JSX } from 'react';
import { Ground, PAL, Shade, Shine } from '../kit';

export default {
  // "het vat": the drum, the barrel — a blue steel drum standing upright: a round body with two
  // raised rings, a rim round the lit top and two screw caps (bungs) in the lid.
  'w.vat': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      <Ground cx={60} cy={102} rx={38} ry={5} />
      {/* The body, shaded on the right */}
      <Shade color={PAL.blueShade} opacity={1} at={[90, 64, 13, 50]}>
        <path d="M28 26V94A32 10 0 0 0 92 94V26Z" fill={PAL.blue} />
      </Shade>
      {/* The two raised rings */}
      {[50, 72].map((y) => (
        <g key={y}>
          <path d={`M28 ${y}A32 10 0 0 0 92 ${y}`} fill="none" stroke={PAL.blueShade} strokeWidth="5" />
          <path d={`M28 ${y - 3}A32 10 0 0 0 80 ${y + 6}`} fill="none" stroke={PAL.blueLight} strokeWidth="2" opacity=".8" />
        </g>
      ))}
      {/* The top: the rim and the lid with its two bungs */}
      <ellipse cx="60" cy="26" rx="32" ry="10" fill={PAL.blueShade} />
      <ellipse cx="60" cy="25" rx="28" ry="8" fill={PAL.blueLight} />
      <ellipse cx="46" cy="24" rx="5" ry="2.4" fill={PAL.blueShade} />
      <ellipse cx="46" cy="23" rx="3.6" ry="1.6" fill={PAL.mist} />
      <ellipse cx="72" cy="27" rx="3.4" ry="1.8" fill={PAL.blueShade} />
      <Shine d="M35 36V86" width={4} opacity={0.5} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
