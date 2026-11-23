import type { JSX } from 'react';
import { Ground, Move, PAL } from '../kit';

/** The front edge of the corrugated sheet: waves from x0 to x1 at y, `n` waves. */
const wave = (x0: number, x1: number, y: number, n: number, a: number) => {
  const step = (x1 - x0) / n;
  let d = `M${x0} ${y}`;
  for (let i = 0; i < n; i += 1) {
    const x = x0 + i * step;
    d += `Q${x + step / 4} ${y - a} ${x + step / 2} ${y}Q${x + (3 * step) / 4} ${y + a} ${x + step} ${y}`;
  }
  return d;
};

export default {
  // "het asbest": the asbestos (a dangerous material in old buildings) — a broken piece of a grey
  // corrugated roof sheet (the old asbestos-cement "golfplaat"), its broken corner giving off a cloud
  // of grey dust (the danger: the dust that comes off when it breaks).
  // On the intro card: the dust rises from the broken corner, three rounds (it keeps coming off).
  'w.asbest': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      <Ground cx={58} cy={102} rx={48} ry={4.5} />
      {/* The sheet: lying slanted, going back to the top right, its back right corner broken off */}
      <path d="M10 92L86 92L108 62L98 58L104 48L92 46L90 36L34 56Z" fill={PAL.mist} />
      {/* The ridges running back */}
      <g fill={PAL.steel} opacity=".55">
        {[0, 1, 2, 3, 4, 5].map((i) => {
          const x = 13 + i * 12.6;
          return <path key={i} d={`M${x} 92L${x + 5.4} 92L${x + 5.4 + 24} 56L${x + 24} 56Z`} />;
        })}
      </g>
      <path d="M34 56L88 37" stroke={PAL.white} strokeWidth="2.6" opacity=".7" />
      {/* The broken edge: the raw grey core */}
      <path d="M86 92L108 62L98 58L104 48L92 46L90 36" fill="none" stroke={PAL.steel} strokeWidth="3.4" />
      {/* The front edge: the waves and the sheet's thickness */}
      <path d={`${wave(10, 86, 92, 6, 4.5)}V98${wave(86, 10, 98, 6, -4.5).replace(/^M[^Q]*/, '')}Z`} fill={PAL.steel} />
      <path d={wave(10, 86, 92, 6, 4.5)} fill="none" stroke={PAL.mist} strokeWidth="2" />
      {/* The dust from the broken corner */}
      <Move kind="slow" dx={-8} dy={22}>
      <g fill={PAL.line}>
        <circle cx="102" cy="34" r="7" opacity=".85" />
        <circle cx="90" cy="24" r="5.4" opacity=".7" />
        <circle cx="104" cy="17" r="4.4" opacity=".6" />
        <circle cx="80" cy="14" r="3.4" opacity=".5" />
        <circle cx="92" cy="9" r="2.6" opacity=".45" />
      </g>
      </Move>
    </g>
  ),
} as Record<string, () => JSX.Element>;
