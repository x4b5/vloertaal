import type { JSX } from 'react';
import { Arrow, Move, PAL, Shade, Shine, r1 } from '../kit';

/** The euro sign as strokes, centred on (cx, cy), `s` = radius of the C. */
function EuroSign({ cx, cy, s, color }: { cx: number; cy: number; s: number; color: string }) {
  const ox = cx + s * 0.2;
  const a = (55 * Math.PI) / 180;
  const sx = r1(ox + Math.cos(a) * s);
  const sy = Math.sin(a) * s;
  return (
    <path
      d={`M${sx} ${r1(cy - sy)}A${s} ${s} 0 1 0 ${sx} ${r1(cy + sy)}M${r1(ox - s * 1.35)} ${r1(cy - s * 0.24)}H${r1(ox + s * 0.15)}M${r1(ox - s * 1.35)} ${r1(cy + s * 0.24)}H${r1(ox + s * 0.05)}`}
      fill="none"
      stroke={color}
      strokeWidth={Math.max(2.4, s * 0.32)}
      strokeLinecap="round"
    />
  );
}

/** A gold euro coin seen from the front, centred on (cx, cy). */
function Coin({ cx, cy, r }: { cx: number; cy: number; r: number }) {
  return (
    <g>
      <circle cx={cx} cy={cy + r * 0.14} r={r} fill={PAL.yellowShade} />
      <Shade color={PAL.yellowShade} opacity={0.8} at={[cx + r * 1.15, cy, r * 0.5, r * 1.3]}>
        <circle cx={cx} cy={cy} r={r} fill={PAL.yellow} />
      </Shade>
      <EuroSign cx={cx} cy={cy} s={r * 0.44} color={PAL.yellowShade} />
      <Shine d={`M${r1(cx - r * 0.62)} ${r1(cy - r * 0.18)}A${r * 0.66} ${r * 0.66} 0 0 1 ${r1(cx - r * 0.18)} ${r1(cy - r * 0.62)}`} color={PAL.yellowShine} width={Math.max(2.4, r * 0.14)} opacity={0.9} />
    </g>
  );
}

export default {
  // "de inhouding": the deduction (money taken off your pay) — a payslip with one row marked red with a
  // minus, and a coin that leaves it along a red arrow: this money comes off your pay. On the intro
  // card the coin goes out of the payslip, once (it is taken off).
  'w.inhouding': () => (
    <g strokeLinejoin="round">
      {/* The payslip */}
      <rect x="12" y="14" width="58" height="92" rx="5" fill={PAL.mist} />
      <Shade color={PAL.paperShade} opacity={1} at={[74, 58, 12, 90]}>
        <rect x="12" y="10" width="58" height="92" rx="5" fill={PAL.paper} />
      </Shade>
      <circle cx="26" cy="24" r="7" fill={PAL.yellow} />
      <path d="M38 21H58M38 28H52" stroke={PAL.navy} strokeWidth="3" strokeLinecap="round" />
      <path d="M20 42H40M50 42H62M20 52H36M50 52H62" stroke={PAL.line} strokeWidth="3" strokeLinecap="round" />
      {/* The deduction row, in red, with a minus */}
      <rect x="16" y="60" width="50" height="14" rx="4" fill={PAL.redLight} />
      <path d="M22 67H32" stroke={PAL.red} strokeWidth="4" strokeLinecap="round" />
      <path d="M44 67H60" stroke={PAL.red} strokeWidth="3" strokeLinecap="round" />
      <rect x="16" y="82" width="50" height="12" rx="4" fill={PAL.lime} />
      <path d="M22 88H34M48 88H60" stroke={PAL.okShade} strokeWidth="3" strokeLinecap="round" />
      {/* The coin goes off */}
      <Arrow from={[68, 67]} to={[106, 48]} color={PAL.red} width={6} head={11} />
      <Move kind="from" dx={-46} dy={10} once>
        <Coin cx={92} cy={82} r={16} />
      </Move>
    </g>
  ),
} as Record<string, () => JSX.Element>;
