import type { JSX } from 'react';
import { Ground, PAL, Shade, Shine } from '../kit';

/** The fuzzy grey mould: little balls round a patch, a lighter tuft on top, dark spore dots. */
const FUZZ = '#b4bec5';
const patch = (cx: number, cy: number, r: number) => {
  const balls: JSX.Element[] = [];
  const n = 9;
  for (let i = 0; i < n; i += 1) {
    const a = (i / n) * Math.PI * 2;
    balls.push(<circle key={`o${i}`} cx={cx + Math.cos(a) * r * 0.78} cy={cy + Math.sin(a) * r * 0.62} r={r * 0.42} fill={FUZZ} />);
  }
  return (
    <g>
      {/* The brown rot under the mould */}
      <ellipse cx={cx + 1} cy={cy + 2} rx={r * 1.35} ry={r * 1.1} fill={PAL.cardDark} />
      {balls}
      <ellipse cx={cx} cy={cy} rx={r * 0.9} ry={r * 0.7} fill={FUZZ} />
      <circle cx={cx - r * 0.3} cy={cy - r * 0.25} r={r * 0.42} fill={PAL.paper} />
      <circle cx={cx + r * 0.3} cy={cy - r * 0.1} r={r * 0.32} fill={PAL.paperShade} />
      {/* Little hairs and spore dots */}
      <path
        d={`M${cx - r * 0.9} ${cy - r * 0.7}l-3 -4M${cx} ${cy - r}l0 -5M${cx + r * 0.9} ${cy - r * 0.7}l3 -4`}
        stroke={FUZZ}
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <circle cx={cx + r * 0.1} cy={cy + r * 0.35} r="1.6" fill={PAL.steel} />
      <circle cx={cx - r * 0.55} cy={cy + r * 0.2} r="1.4" fill={PAL.steel} />
      <circle cx={cx + r * 0.6} cy={cy + r * 0.3} r="1.4" fill={PAL.steel} />
    </g>
  );
};

export default {
  // "de schimmel": the mould — a big red tomato with its green calyx, sick: a brown rotten spot under
  // a fuzzy grey-white patch of grey mould, and a smaller patch beside it.
  'w.schimmel': () => (
    <g strokeLinejoin="round">
      <Ground cx={60} cy={105} rx={38} ry={4.5} />
      {/* The tomato */}
      <Shade color={PAL.redShade} opacity={1} at={[96, 76, 22, 36]}>
        <ellipse cx="60" cy="66" rx="42" ry="38" fill={PAL.red} />
      </Shade>
      <Shine d="M28 52Q32 40 42 34" color={PAL.white} width={4} opacity={0.5} />
      {/* The calyx: a green star with its stalk */}
      <path d="M60 30L50 22L56 33L40 32L54 37L46 44L60 38L74 44L66 37L80 32L64 33L70 22Z" fill={PAL.green} />
      <path d="M60 33V18" stroke={PAL.greenShade} strokeWidth="4.5" strokeLinecap="round" />
      {/* The grey mould */}
      {patch(70, 70, 15)}
      {patch(38, 80, 8)}
    </g>
  ),
} as Record<string, () => JSX.Element>;
