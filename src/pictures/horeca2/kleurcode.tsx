import type { JSX } from 'react';
import { Ground, PAL, Shine } from '../kit';

/** The four boards: colour, shade, and the white sign of the food that goes on it. */
const BOARDS: [string, string, 'meat' | 'fish' | 'veg' | 'chicken'][] = [
  [PAL.red, PAL.redShade, 'meat'],
  [PAL.blue, PAL.blueShade, 'fish'],
  [PAL.green, PAL.greenShade, 'veg'],
  [PAL.yellow, PAL.yellowShade, 'chicken'],
];

const sign = (kind: string, cx: number, cy: number) => {
  const f = PAL.white;
  switch (kind) {
    case 'meat':
      return (
        <g fill={f}>
          <path d={`M${cx - 8} ${cy}Q${cx - 8} ${cy - 7} ${cx} ${cy - 7}Q${cx + 9} ${cy - 6} ${cx + 8} ${cy + 1}Q${cx + 7} ${cy + 8} ${cx - 1} ${cy + 7}Q${cx - 8} ${cy + 6} ${cx - 8} ${cy}Z`} />
        </g>
      );
    case 'fish':
      return <path d={`M${cx - 9} ${cy}Q${cx - 2} ${cy - 7} ${cx + 4} ${cy}L${cx + 9} ${cy - 5}V${cy + 5}L${cx + 4} ${cy}Q${cx - 2} ${cy + 7} ${cx - 9} ${cy}Z`} fill={f} />;
    case 'veg':
      return (
        <g>
          <ellipse cx={cx} cy={cy} rx="5.6" ry="9.5" fill={f} transform={`rotate(35 ${cx} ${cy})`} />
          <path d={`M${cx - 4} ${cy + 6}L${cx + 4} ${cy - 6}`} stroke={PAL.green} strokeWidth="1.6" strokeLinecap="round" />
        </g>
      );
    default:
      return (
        <g fill={f}>
          <ellipse cx={cx - 2} cy={cy - 2} rx="6.4" ry="7" transform={`rotate(-40 ${cx - 2} ${cy - 2})`} />
          <path d={`M${cx + 1} ${cy + 1}L${cx + 6} ${cy + 6}`} stroke={f} strokeWidth="3.4" strokeLinecap="round" />
          <circle cx={cx + 7.5} cy={cy + 5} r="2.4" />
          <circle cx={cx + 5} cy={cy + 7.5} r="2.4" />
        </g>
      );
  }
};

export default {
  // "de kleurcode": the colour code (one colour of board for each kind of food) — four cutting boards standing
  // side by side in a dark rack: red with a white piece of meat, blue with a fish, green with a leaf, yellow
  // with a chicken leg.
  'w.kleurcode': () => (
    <g strokeLinejoin="round">
      <Ground cx={60} cy={104} rx={52} ry={4} />
      {BOARDS.map(([c, sh, kind], i) => {
        const x = 12 + i * 25;
        return (
          <g key={kind}>
            <rect x={x + 3} y={22} width="22" height="72" rx="5" fill={sh} />
            <rect x={x} y={20} width="22" height="72" rx="5" fill={c} />
            <ellipse cx={x + 11} cy={30} rx="5" ry="3.4" fill={sh} />
            <Shine d={`M${x + 4} ${42}V${56}`} width={2.4} opacity={i === 3 ? 0.8 : 0.45} color={i === 3 ? PAL.yellowShine : PAL.white} />
            {sign(kind, x + 11, 66)}
          </g>
        );
      })}
      {/* The rack */}
      <rect x="8" y="86" width="104" height="16" rx="4" fill={PAL.slate} />
      <rect x="8" y="96" width="104" height="6" rx="3" fill={PAL.slateDark} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
