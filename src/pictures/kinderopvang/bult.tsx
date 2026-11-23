import type { JSX } from 'react';
import { Motion, PAL, SKIN, Shade, Shine } from '../kit';

export default {
  // "de bult": the bump on the head — a toddler's head and shoulders, a little sad; on its forehead a
  // round, red-pink bump with a shine, and short lines round it (it hurts a bit).
  'w.bult': () => {
    const [s, sh] = SKIN.henk;
    return (
      <g strokeLinejoin="round" strokeLinecap="round">
        {/* Shoulders */}
        <Shade color={PAL.skyShade} opacity={1} at={[96, 104, 10, 20]}>
          <path d="M26 112Q26 92 46 90H74Q94 92 94 112Z" fill={PAL.sky} />
        </Shade>
        {/* The head */}
        <circle cx="60" cy="54" r="31" fill={PAL.yellowShade} />
        <circle cx="31" cy="62" r="6" fill={s} />
        <circle cx="89" cy="62" r="6" fill={sh} />
        <Shade color={sh} opacity={1} at={[90, 64, 10, 34]}>
          <ellipse cx="60" cy="61" rx="27.6" ry="27" fill={s} />
        </Shade>
        <path d="M32 54Q32 26 60 25Q88 26 88 54Q78 40 64 39Q52 44 32 54Z" fill={PAL.yellowShade} />
        {/* A sad little face */}
        <ellipse cx="50" cy="64" rx="2.6" ry="3.2" fill={PAL.ink} />
        <ellipse cx="70" cy="64" rx="2.6" ry="3.2" fill={PAL.ink} />
        <path d="M45 57L53 59M75 57L67 59" stroke={PAL.ink} strokeWidth="1.8" />
        <path d="M53 78Q60 73 67 78" fill="none" stroke={PAL.mouth} strokeWidth="2.4" />
        {/* The bump */}
        <circle cx="72" cy="46" r="9" fill={PAL.red} />
        <circle cx="70.6" cy="44.6" r="7" fill={PAL.redLight} />
        <circle cx="72" cy="46" r="4.6" fill={PAL.red} opacity=".55" />
        <Shine d="M67 42Q68 40 70 39.6" width={2.2} opacity={0.9} />
        <Motion x={72} y={46} dir={-50} spread={80} n={3} len={6} gap={13} color={PAL.red} width={2.8} />
      </g>
    );
  },
} as Record<string, () => JSX.Element>;
