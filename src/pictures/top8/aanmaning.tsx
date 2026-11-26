import type { JSX } from 'react';
import { PAL, Shine } from '../kit';

export default {
  // "de aanmaning": the final reminder (pay before a date, or extra costs may come) — a letter with a
  // broad red band across its top, and in front of it a small calendar page with one day ringed in
  // red: the last day to pay. No text: grey lines only.
  'w.aanmaning': () => {
    // The calendar page: 4 x 3 days; the ringed day is the third of the second row.
    const cx = 60;
    const cy = 50;
    const w = 50;
    const cw = (w - 12) / 4;
    const day = (i: number): [number, number] => [cx + 6 + (i % 4) * cw + cw / 2, cy + 22 + Math.floor(i / 4) * 9.5 + 4.5];
    const [rx, ry] = day(6);
    return (
      <g strokeLinejoin="round" strokeLinecap="round">
        {/* The letter */}
        <g transform="rotate(-6 46 60)">
          <rect x="14" y="16" width="62" height="84" rx="4" fill={PAL.paperShade} transform="translate(3 4)" />
          <rect x="14" y="16" width="62" height="84" rx="4" fill={PAL.white} />
          <path d="M14 20Q14 16 18 16H72Q76 16 76 20V32H14Z" fill={PAL.red} />
          <path d="M56 16H72Q76 16 76 20V32H56Z" fill={PAL.redShade} opacity=".6" />
          <path d="M22 44H62M22 52H56M22 60H62M22 68H44M22 76H40" stroke={PAL.line} strokeWidth="2.6" />
          <Shine d="M19 25Q19 21 23 20.5" width={2.6} opacity={0.6} />
        </g>
        {/* The calendar page with the last day ringed */}
        <g transform="rotate(6 85 75)">
          <rect x={cx} y={cy + 4} width={w} height="52" rx="6" fill={PAL.paperShade} />
          <rect x={cx} y={cy} width={w} height="52" rx="6" fill={PAL.white} />
          <path d={`M${cx} ${cy + 6}A6 6 0 0 1 ${cx + 6} ${cy}H${cx + w - 6}A6 6 0 0 1 ${cx + w} ${cy + 6}V${cy + 14}H${cx}Z`} fill={PAL.slate} />
          <rect x={cx + 12} y={cy - 5} width="5" height="11" rx="2.5" fill={PAL.slateDark} />
          <rect x={cx + w - 17} y={cy - 5} width="5" height="11" rx="2.5" fill={PAL.slateDark} />
          {Array.from({ length: 12 }, (_, i) => {
            const [x, y] = day(i);
            return <rect key={i} x={x - 3} y={y - 2.4} width="6" height="4.8" rx="1.4" fill={i === 6 ? PAL.redShade : PAL.mist} />;
          })}
          <ellipse cx={rx} cy={ry} rx="7.6" ry="6.6" fill="none" stroke={PAL.red} strokeWidth="3" />
        </g>
      </g>
    );
  },
} as Record<string, () => JSX.Element>;
