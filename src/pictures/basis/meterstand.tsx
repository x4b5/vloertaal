import type { JSX } from 'react';
import { Ground, PAL, Shade, Shine } from '../kit';

export default {
  // "de meterstand": the meter reading — a grey gas meter with its two yellow pipes on top and a
  // big counter window: a row of white wheels with dark marks (no digits) and a red last wheel.
  // Still: a reading is a number, and numbers stay still.
  'w.meterstand': () => {
    const cells = [30, 42, 54, 66];
    return (
      <g strokeLinejoin="round">
        <Ground cx={60} cy={104} rx={40} ry={4} />
        {/* The two gas pipes */}
        <rect x="30" y="12" width="12" height="30" rx="3" fill={PAL.yellow} />
        <rect x="37" y="12" width="5" height="30" rx="2" fill={PAL.yellowShade} />
        <rect x="76" y="12" width="12" height="30" rx="3" fill={PAL.yellow} />
        <rect x="83" y="12" width="5" height="30" rx="2" fill={PAL.yellowShade} />
        <rect x="27" y="34" width="18" height="8" rx="2" fill={PAL.steel} />
        <rect x="73" y="34" width="18" height="8" rx="2" fill={PAL.steel} />
        {/* The meter: right side, front */}
        <path d="M98 40L106 35V96L98 101Z" fill={PAL.steel} />
        <Shade color={PAL.paperShade} opacity={1} at={[100, 70, 14, 40]}>
          <rect x="16" y="40" width="82" height="61" rx="6" fill={PAL.mist} />
        </Shade>
        <Shine d="M22 50V64" width={3.4} opacity={0.7} />
        {/* The counter window */}
        <rect x="23" y="50" width="70" height="26" rx="5" fill={PAL.slateDark} />
        {cells.map((x) => (
          <g key={x}>
            <rect x={x} y="54" width="10" height="18" rx="2" fill={PAL.white} />
            <rect x={x + 3} y="58" width="4" height="10" rx="1.5" fill={PAL.ink} />
          </g>
        ))}
        <rect x="78" y="54" width="10" height="18" rx="2" fill={PAL.red} />
        <rect x="81" y="58" width="4" height="10" rx="1.5" fill={PAL.white} />
        {/* The label plate under it */}
        <rect x="30" y="84" width="40" height="10" rx="2" fill={PAL.paper} />
        <path d="M34 89H60" stroke={PAL.line} strokeWidth="2" strokeLinecap="round" />
        <circle cx="84" cy="89" r="4" fill={PAL.steel} />
      </g>
    );
  },
} as Record<string, () => JSX.Element>;
