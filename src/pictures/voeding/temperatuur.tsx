import type { JSX } from 'react';
import { Ground, Move, PAL, Shade, Shine } from '../kit';

export default {
  // "de temperatuur": the temperature — a big thermometer with a scale; its red column stands halfway. At
  // the top a sun (warm), at the bottom a snowflake (cold): how warm or cold it is.
  // On the intro card the red column goes up and down to its value: three rounds (a meter that reads).
  'w.temperatuur': () => (
    <g strokeLinejoin="round">
      <Ground cx={56} cy={106} rx={20} ry={3} />
      {/* The tube */}
      <Shade color={PAL.paperShade} opacity={1} at={[72, 60, 7, 50]}>
        <rect x="44" y="10" width="24" height="82" rx="12" fill={PAL.white} />
      </Shade>
      <circle cx="56" cy="90" r="15" fill={PAL.white} />
      <path d="M68 24H74M68 34H72M68 44H74M68 54H72M68 64H74M68 74H72" stroke={PAL.line} strokeWidth="2.4" strokeLinecap="round" />
      {/* The red column */}
      <circle cx="56" cy="90" r="10" fill={PAL.red} />
      <Move kind="sag" grow={0.4}>
        <rect x="51" y="46" width="10" height="44" rx="5" fill={PAL.red} />
      </Move>
      <circle cx="53" cy="87" r="3" fill={PAL.redLight} />
      <Shine d="M48 20V40" width={3} opacity={0.9} color={PAL.mist} />
      {/* Warm at the top */}
      <circle cx="94" cy="24" r="8" fill={PAL.yellow} />
      <path d="M94 10V12M94 36V38M80 24H82M106 24H108M84 14L85.4 15.4M102.6 32.6L104 34M84 34L85.4 32.6M102.6 15.4L104 14" stroke={PAL.yellow} strokeWidth="2.8" strokeLinecap="round" />
      {/* Cold at the bottom */}
      <g stroke={PAL.sky} strokeWidth="3" strokeLinecap="round">
        <path d="M96 74V96M86.5 79.5L105.5 90.5M86.5 90.5L105.5 79.5" />
        <path d="M92 75L96 78L100 75M92 95L96 92L100 95" fill="none" strokeWidth="2.2" />
      </g>
    </g>
  ),
} as Record<string, () => JSX.Element>;
