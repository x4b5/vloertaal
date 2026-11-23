import type { JSX } from 'react';
import { Ground, Move, PAL, Shade, Shine } from '../kit';

export default {
  // "de zaklamp": the torch, the flashlight — a big dark torch, slightly slanted: a ribbed grip with a
  // yellow switch, a wide steel head with its lit glass on the right, and a wide yellow beam of light
  // shining out of it.
  // Once: the torch goes on (the beam fades in).
  'w.zaklamp': () => (
    <g strokeLinejoin="round">
      <Ground cx={44} cy={100} rx={34} ry={4} />
      {/* The beam */}
      <Move kind="show" once>
        <path d="M82 38L110 18V98L88 80Z" fill={PAL.yellow} opacity=".4" />
        <path d="M85 48L110 36V80L88 70Z" fill={PAL.yellowLight} opacity=".85" />
      </Move>
      <g transform="rotate(-12 50 64)">
        {/* The grip */}
        <Shade color={PAL.slateDark} opacity={1} at={[42, 82, 40, 9]}>
          <rect x="8" y="54" width="52" height="22" rx="8" fill={PAL.slate} />
        </Shade>
        <path d="M18 58V72M26 58V72M34 58V72" stroke={PAL.slateDark} strokeWidth="2.6" strokeLinecap="round" />
        <rect x="42" y="49" width="12" height="7" rx="2.5" fill={PAL.yellow} />
        <Shine d="M12 59H36" width={2.6} opacity={0.45} />
        {/* The head */}
        <Shade color={PAL.steel} opacity={1} at={[74, 84, 22, 12]}>
          <path d="M58 52H66L80 42V88L66 78H58Z" fill={PAL.mist} />
        </Shade>
        <Shine d="M64 54L76 46" width={2.4} opacity={0.8} />
        <rect x="78" y="39" width="9" height="52" rx="3.5" fill={PAL.slate} />
        <rect x="81" y="42" width="5" height="46" rx="2" fill={PAL.yellowLight} />
      </g>
    </g>
  ),
} as Record<string, () => JSX.Element>;
