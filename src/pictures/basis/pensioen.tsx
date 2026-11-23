import type { JSX } from 'react';
import { Ground, PAL, Shade, Shine } from '../kit';
import { Bust } from '../bust';

/** A gold coin seen a little from above: its edge and its face. */
const coin = (x: number, y: number) => (
  <g key={`${x}-${y}`}>
    <ellipse cx={x} cy={y + 3} rx="11" ry="4.4" fill={PAL.yellowShade} />
    <ellipse cx={x} cy={y} rx="11" ry="4.4" fill={PAL.yellow} />
    <ellipse cx={x - 1} cy={y - 0.4} rx="5.4" ry="1.8" fill={PAL.yellowShine} opacity=".7" />
  </g>
);

export default {
  // "het pensioen": the pension (money for when you are old) — grey-haired Henk, pleased and relaxed,
  // next to a big glass jar that has filled up with gold coins over the years.
  'w.pensioen': () => (
    <g strokeLinejoin="round">
      <Bust who="henk" x={84} y={124} scale={0.66} expr="joy" bold />
      <Ground cx={38} cy={105} rx={30} ry={4} />
      {/* The jar: glass, coins inside, the lid */}
      <path d="M14 46Q14 40 20 40H56Q62 40 62 46V98Q62 105 55 105H21Q14 105 14 98Z" fill={PAL.ice} opacity=".55" />
      {[[26, 96], [46, 96], [36, 90], [24, 84], [48, 84], [36, 78], [26, 72], [46, 72], [36, 66], [30, 60], [44, 58]].map(([x, y]) => coin(x, y))}
      <Shine d="M19 50V86" width={3.4} opacity={0.8} />
      <Shade color={PAL.slateDark} opacity={1} at={[64, 36, 10, 10]}>
        <rect x="16" y="30" width="44" height="11" rx="3" fill={PAL.slate} />
      </Shade>
    </g>
  ),
} as Record<string, () => JSX.Element>;
