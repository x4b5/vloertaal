import type { JSX } from 'react';
import { Ground, PAL, Shade, Shine, Sparkle, r1 } from '../kit';

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

/** A stack of `n` coins seen from the side, bottom centred on (cx, base). */
function CoinStack({ cx, base, n = 4, rx = 13 }: { cx: number; base: number; n?: number; rx?: number }) {
  const ry = rx * 0.38;
  const h = 7;
  return (
    <g>
      {Array.from({ length: n }, (_, i) => {
        const y = base - ry - i * h;
        return (
          <g key={i}>
            <path d={`M${cx - rx} ${y - h}V${y}A${rx} ${ry} 0 0 0 ${cx + rx} ${y}V${y - h}Z`} fill={PAL.yellowShade} />
            <path d={`M${cx + rx * 0.45} ${y + ry * 0.9}A${rx} ${ry} 0 0 0 ${cx + rx} ${y}V${y - h}H${cx + rx * 0.45}Z`} fill="#c48f00" opacity=".6" />
            <ellipse cx={cx} cy={y - h} rx={rx} ry={ry} fill={PAL.yellow} />
            {i > 0 && <path d={`M${cx - rx} ${y - h + 0.2}A${rx} ${ry} 0 0 0 ${cx + rx} ${y - h + 0.2}`} fill="none" stroke="#b07f00" strokeWidth="1.6" />}
          </g>
        );
      })}
    </g>
  );
}

export default {
  // "het brutoloon": the gross pay (your pay before tax and deductions) — the payslip with its top
  // amount marked, and next to it the whole tall stack of coins, nothing taken off yet (a sparkle).
  'w.brutoloon': () => (
    <g strokeLinejoin="round">
      <Ground cx={78} cy={106} rx={30} ry={4} />
      {/* The payslip */}
      <rect x="10" y="16" width="56" height="86" rx="5" fill={PAL.mist} />
      <Shade color={PAL.paperShade} opacity={1} at={[70, 56, 12, 86]}>
        <rect x="10" y="12" width="56" height="86" rx="5" fill={PAL.paper} />
      </Shade>
      <Coin cx={24} cy={27} r={8} />
      <path d="M36 24H56M36 31H50" stroke={PAL.navy} strokeWidth="3" strokeLinecap="round" />
      {/* The gross amount, marked: the top row, the biggest */}
      <rect x="14" y="42" width="48" height="14" rx="4" fill={PAL.yellowLight} />
      <path d="M19 49H30M40 49H57" stroke={PAL.yellowShade} strokeWidth="3.6" strokeLinecap="round" />
      <path d="M18 66H34M46 66H58M18 76H30M46 76H58M18 86H36M46 86H58" stroke={PAL.line} strokeWidth="3" strokeLinecap="round" />
      {/* The whole stack */}
      <CoinStack cx={80} base={106} n={11} rx={20} />
      <Sparkle x={104} y={18} r={8} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
