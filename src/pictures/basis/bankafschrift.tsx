import type { JSX } from 'react';
import { PAL, Shade } from '../kit';

export default {
  // "het bankafschrift": the bank statement (a list of the money in and out) — a long paper list
  // under a small bank (a building with columns) at the top; each row starts with a green
  // triangle up (money in) or a red triangle down (money out), with an amount line at the right.
  'w.bankafschrift': () => {
    const rows: [number, boolean][] = [[46, true], [58, false], [70, false], [82, true], [94, false]];
    return (
      <g strokeLinejoin="round" strokeLinecap="round">
        <rect x="20" y="12" width="72" height="98" rx="5" fill={PAL.mist} transform="translate(4 3)" />
        <Shade color={PAL.paperShade} opacity={1} at={[96, 60, 12, 70]}>
          <rect x="20" y="8" width="72" height="98" rx="5" fill={PAL.paper} />
        </Shade>
        {/* The bank */}
        <path d="M28 24L40 16L52 24Z" fill={PAL.navy} />
        <path d="M31 25V33M37 25V33M43 25V33M49 25V33" stroke={PAL.navy} strokeWidth="3" strokeLinecap="butt" />
        <rect x="27" y="33" width="26" height="4" rx="1" fill={PAL.navy} />
        <path d="M60 22H82M60 30H74" stroke={PAL.line} strokeWidth="3" />
        {/* The rows: in (green, up) or out (red, down) */}
        {rows.map(([y, inn]) => (
          <g key={y}>
            {inn ? (
              <path d={`M28 ${y + 3}L33 ${y - 4}L38 ${y + 3}Z`} fill={PAL.ok} />
            ) : (
              <path d={`M28 ${y - 3}L33 ${y + 4}L38 ${y - 3}Z`} fill={PAL.red} />
            )}
            <path d={`M44 ${y}H62`} stroke={PAL.line} strokeWidth="2.6" />
            <path d={`M70 ${y}H84`} stroke={inn ? PAL.ok : PAL.red} strokeWidth="3" />
          </g>
        ))}
      </g>
    );
  },
} as Record<string, () => JSX.Element>;
