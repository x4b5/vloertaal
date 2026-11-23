import type { JSX } from 'react';
import { Move, PAL } from '../kit';
import { Bust } from '../bust';

/** A heart centred on (x, y), about 2r wide. */
const heart = (x: number, y: number, r: number) =>
  `M${x} ${y + r}C${x - r * 1.6} ${y - r * 0.1} ${x - r * 1.1} ${y - r * 1.4} ${x} ${y - r * 0.55}C${x + r * 1.1} ${y - r * 1.4} ${x + r * 1.6} ${y - r * 0.1} ${x} ${y + r}Z`;

export default {
  // "bedanken": to thank — Jada, smiling, gives Henk a bunch of flowers at the end of her time there; a red heart
  // floats between them. On the intro card the flowers go from her to him (once).
  'w.bedanken': () => (
    <g>
      <Bust who="jada" x={30} y={118} scale={0.6} expr="pleased" />
      <Bust who="henk" x={92} y={118} scale={0.6} expr="joy" flip />
      <path d={heart(60, 22, 8)} fill={PAL.red} />
      {/* The flowers, wrapped in paper */}
      <Move kind="from" dx={-22} once>
        <g transform="translate(4 0) rotate(-18 60 80)">
          {[[50, 54, PAL.yellow], [62, 50, PAL.red], [72, 58, PAL.purple], [56, 64, PAL.clay], [68, 68, PAL.yellow]].map(([x, y, c]) => (
            <g key={`${x}`}>
              <circle cx={x as number} cy={y as number} r="7" fill={c as string} />
              <circle cx={x as number} cy={y as number} r="2.6" fill={PAL.yellowShade} />
            </g>
          ))}
          <path d="M48 70L74 70L64 104H58Z" fill={PAL.green} />
          <path d="M44 66L78 66L66 104H56Z" fill="#e3f5ff" />
          <path d="M61 66L78 66L66 104Z" fill={PAL.ice} opacity=".7" />
          <path d="M56 86H66" stroke={PAL.red} strokeWidth="4" strokeLinecap="round" />
        </g>
      </Move>
    </g>
  ),
} as Record<string, () => JSX.Element>;
