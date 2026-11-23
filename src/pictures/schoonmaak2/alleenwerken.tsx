import type { JSX } from 'react';
import { PAL } from '../kit';
import { Bust } from '../bust';

/** A dark window (the room behind it is empty and the light is off). */
const dark = (x: number, y: number) => <rect key={`${x}-${y}`} x={x} y={y} width="16" height="14" rx="2" fill={PAL.slateDark} />;

export default {
  // "alleen werken": to work alone (nobody else is in the building) — an office building at night under the
  // moon: every window is dark except one big lit window, where Amina works on her own.
  'w.alleenwerken': () => (
    <g strokeLinejoin="round">
      {/* The moon and two stars */}
      <path d="M100 8A13 13 0 1 0 112 26A10 10 0 0 1 100 8Z" fill={PAL.yellowLight} />
      <path d="M12 16l2 4 4 2-4 2-2 4-2-4-4-2 4-2z" fill={PAL.yellowLight} />
      {/* The building */}
      <rect x="14" y="30" width="76" height="78" rx="3" fill={PAL.navy} />
      <rect x="76" y="30" width="14" height="78" rx="2" fill={PAL.navyShade} />
      <rect x="10" y="26" width="84" height="7" rx="2" fill={PAL.navyShade} />
      {dark(20, 38)}{dark(42, 38)}{dark(64, 38)}
      {dark(20, 92)}{dark(64, 92)}
      {/* The one lit window, with Amina and her mop in it */}
      <rect x="20" y="56" width="62" height="32" rx="2.5" fill={PAL.yellow} />
      <g>
        <clipPath id="alleenwerken-win">
          <rect x="20" y="56" width="62" height="32" rx="2.5" />
        </clipPath>
        <g clipPath="url(#alleenwerken-win)">
          <path d="M66 54L70 90" stroke={PAL.steel} strokeWidth="3.4" strokeLinecap="round" />
          <Bust who="amina" x={46} y={104} scale={0.46} expr="neutral" bold />
        </g>
      </g>
      {/* The door */}
      <rect x="42" y="94" width="16" height="14" rx="1.5" fill={PAL.slateDark} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
