import type { JSX } from 'react';
import { Move, PAL, Shade, Shine } from '../kit';

export default {
  // "de kassalade": the till drawer (the drawer with the money) — the drawer pulled out from under the
  // dark till, seen from above: a back row of four slots with banknotes (green, blue, clay, green) and a
  // front row of round cups with coins. Not the whole till of "de kassa": the drawer is the subject.
  // On the intro card the drawer slides out from under the till: once (it opens).
  'w.kassalade': () => (
    <g strokeLinejoin="round">
      <ellipse cx="60" cy="106" rx="50" ry="4" fill="#000" opacity=".14" />
      <Move kind="from" dy={-30} once>
        {/* The tray inside, seen from above */}
        <path d="M20 52H100L108 92H12Z" fill={PAL.steel} />
        {/* Note slots */}
        {[0, 1, 2, 3].map((i) => {
          const x = 24 + i * 18.5 - 0;
          const fill = [PAL.green, PAL.sky, PAL.clay, PAL.green][i];
          return (
            <g key={i}>
              <path d={`M${x} 56H${x + 16}L${x + 16.4} 72H${x - 1}Z`} fill={PAL.mist} />
              <path d={`M${x + 2} 58H${x + 14}L${x + 14.2} 70H${x + 1}Z`} fill={fill} />
              <path d={`M${x + 4} 62H${x + 12}`} stroke={PAL.white} strokeWidth="1.4" strokeLinecap="round" opacity=".6" />
            </g>
          );
        })}
        {/* Coin cups */}
        {[0, 1, 2, 3, 4].map((i) => (
          <g key={i}>
            <ellipse cx={24 + i * 18} cy="82" rx="8" ry="6" fill={PAL.slate} />
            <ellipse cx={24 + i * 18} cy="81" rx="5.6" ry="4" fill={i === 4 ? PAL.clayLight : PAL.yellow} />
          </g>
        ))}
        {/* The front of the drawer, with its finger grip */}
        <rect x="10" y="90" width="100" height="13" rx="2.5" fill={PAL.slateDark} />
        <rect x="48" y="95" width="24" height="4" rx="2" fill={PAL.ink} />
        <Shine d="M14 93H40" width={2.4} opacity={0.3} />
      </Move>
      {/* The till above, its base over the back of the drawer */}
      <Shade color={PAL.slateDark} opacity={1} at={[112, 36, 16, 30]}>
        <path d="M18 14H102L106 52H14Z" fill={PAL.slate} />
      </Shade>
      <rect x="40" y="22" width="40" height="12" rx="2" fill={PAL.lime} />
      <path d="M48 28H72" stroke={PAL.greenShade} strokeWidth="2.6" strokeLinecap="round" />
      <rect x="14" y="48" width="92" height="6" rx="2" fill={PAL.slateDark} />
      <Shine d="M22 20L20 44" width={2.8} opacity={0.3} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
