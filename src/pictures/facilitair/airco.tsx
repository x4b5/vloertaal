import type { JSX } from 'react';
import { Move, PAL, Shine } from '../kit';

/** A small six-armed snowflake centred on (x, y). */
const flake = (x: number, y: number, r: number) => {
  const arms = [0, 60, 120].map((a) => {
    const c = Math.cos((a * Math.PI) / 180) * r;
    const s = Math.sin((a * Math.PI) / 180) * r;
    return `M${(x - c).toFixed(1)} ${(y - s).toFixed(1)}L${(x + c).toFixed(1)} ${(y + s).toFixed(1)}`;
  });
  return arms.join('');
};

export default {
  // "de airco": the air conditioning — a white split unit high on the wall, its louvre open at the
  // bottom, a small green light, and three blue lines of cold air blowing down with a snowflake.
  // Three rounds: the cold air keeps blowing out of the unit.
  'w.airco': () => (
    <g strokeLinejoin="round">
      {/* The unit: top and right depth faces, then the front */}
      <path d="M10 26L16 18H112L106 26Z" fill={PAL.white} />
      <path d="M106 26L112 18V46L106 56Z" fill={PAL.mist} />
      <rect x="10" y="26" width="96" height="30" rx="7" fill={PAL.paper} />
      <path d="M10 44H106V49Q106 56 99 56H17Q10 56 10 49Z" fill={PAL.paperShade} />
      {/* The louvre slot and flap */}
      <rect x="20" y="47" width="76" height="5" rx="2.5" fill={PAL.slate} />
      <circle cx="94" cy="35" r="2.6" fill={PAL.ok} />
      <Shine d="M18 31H60" width={3} opacity={0.9} />
      {/* The cold air */}
      <Move kind="from" dy={-20}>
        {[30, 58, 86].map((x) => (
          <path key={x} d={`M${x} 62C${x - 4} 72 ${x + 4} 80 ${x - 2} 92`} fill="none" stroke={PAL.sky} strokeWidth="5" strokeLinecap="round" />
        ))}
        <path d={flake(72, 98, 8)} stroke={PAL.sky} strokeWidth="3.4" strokeLinecap="round" />
      </Move>
    </g>
  ),
} as Record<string, () => JSX.Element>;
