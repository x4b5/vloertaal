import type { JSX } from 'react';
import { Ground, PAL, Shine } from '../kit';

/** The columns: x of each allergen sign. The rows: y of each dish, and which allergens it holds. */
const COLS = [56, 69, 82, 95];
const ROWS: [number, boolean[]][] = [
  [50, [true, false, false, true]],
  [63, [false, true, false, false]],
  [76, [true, false, true, false]],
  [89, [false, false, true, true]],
];

export default {
  // "de allergenenlijst": the allergen list (it says what is in each dish) — a list on a clipboard as a table:
  // across the top four small allergen signs (an ear of wheat, a peanut, a fish, an egg), down the left a grey
  // line for each dish, and a red dot where a dish holds that allergen.
  'w.allergenenlijst': () => (
    <g strokeLinejoin="round">
      <Ground cx={60} cy={106} rx={44} ry={4} />
      {/* The clipboard */}
      <rect x="18" y="14" width="88" height="94" rx="6" fill={PAL.cardDark} />
      <rect x="15" y="12" width="88" height="94" rx="6" fill={PAL.card} />
      {/* The paper */}
      <rect x="20" y="22" width="80" height="80" rx="2" fill={PAL.white} />
      <path d="M100 22V102H96" fill="none" stroke={PAL.paperShade} strokeWidth="3" />
      {/* The clip */}
      <rect x="44" y="8" width="32" height="12" rx="3" fill={PAL.slate} />
      <rect x="52" y="5" width="16" height="6" rx="3" fill={PAL.slateDark} />
      {/* The allergen signs across the top */}
      <g>
        <path d={`M${COLS[0]} 40V28`} stroke={PAL.yellowShade} strokeWidth="1.6" strokeLinecap="round" />
        {[30, 34, 38].map((y) => (
          <g key={y}>
            <ellipse cx={COLS[0] - 2} cy={y} rx="1.8" ry="2.8" fill={PAL.yellow} transform={`rotate(-28 ${COLS[0] - 2} ${y})`} />
            <ellipse cx={COLS[0] + 2} cy={y} rx="1.8" ry="2.8" fill={PAL.yellowShade} transform={`rotate(28 ${COLS[0] + 2} ${y})`} />
          </g>
        ))}
        <path d={`M${COLS[1] - 3} 30A3.4 3.4 0 1 1 ${COLS[1] + 2} 33A3.4 3.4 0 1 1 ${COLS[1] - 3} 38`} fill={PAL.card} stroke={PAL.cardShade} strokeWidth="4" />
        <path d={`M${COLS[2] - 6} 34Q${COLS[2]} 28 ${COLS[2] + 3} 34L${COLS[2] + 6} 30V38L${COLS[2] + 3} 34Q${COLS[2]} 40 ${COLS[2] - 6} 34Z`} fill={PAL.sky} />
        <ellipse cx={COLS[3]} cy={34} rx="4.4" ry="5.6" fill={PAL.paperShade} />
        <circle cx={COLS[3]} cy={35} r="2.4" fill={PAL.yellow} />
      </g>
      <path d="M24 43H98" stroke={PAL.mist} strokeWidth="1.6" />
      {/* The dishes and their dots */}
      {ROWS.map(([y, has]) => (
        <g key={y}>
          <path d={`M26 ${y}H44`} stroke={PAL.line} strokeWidth="3" strokeLinecap="round" />
          {has.map((h, i) => (h
            ? <circle key={i} cx={COLS[i]} cy={y} r="4" fill={PAL.red} />
            : <circle key={i} cx={COLS[i]} cy={y} r="1.8" fill={PAL.mist} />))}
        </g>
      ))}
      <Shine d="M19 18H40" width={2.4} opacity={0.5} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
