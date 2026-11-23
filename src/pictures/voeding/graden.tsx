import type { JSX } from 'react';
import { PAL, Shade } from '../kit';

export default {
  // "de graden": the degrees (°C) — a tall scale with many even steps (each step one degree), a red
  // pointer at one step, and beside it the big degree sign (a small ring), drawn as a shape. No digits.
  'w.graden': () => {
    const ticks = Array.from({ length: 19 }, (_, i) => {
      const y = 16 + i * 4.8;
      const long = i % 5 === 0;
      return `M${long ? 30 : 36} ${y.toFixed(1)}H50`;
    }).join('');
    return (
      <g strokeLinejoin="round">
        {/* The scale */}
        <Shade color={PAL.paperShade} opacity={1} at={[60, 60, 8, 60]}>
          <rect x="22" y="8" width="36" height="104" rx="6" fill={PAL.white} />
        </Shade>
        <rect x="22" y="8" width="36" height="104" rx="6" fill="none" stroke={PAL.mist} strokeWidth="2" />
        <path d={ticks} stroke={PAL.slate} strokeWidth="2.2" strokeLinecap="round" />
        {/* The pointer at one step */}
        <path d="M66 54L54 54" stroke={PAL.red} strokeWidth="4" strokeLinecap="round" />
        <path d="M52 54L62 47V61Z" fill={PAL.red} strokeWidth="2" stroke={PAL.red} />
        {/* The degree sign */}
        <circle cx="88" cy="32" r="15" fill="none" stroke={PAL.sky} strokeWidth="9" />
        <path d="M80 26A9 9 0 0 1 86 23" fill="none" stroke={PAL.ice} strokeWidth="3" strokeLinecap="round" />
      </g>
    );
  },
} as Record<string, () => JSX.Element>;
